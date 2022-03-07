import { Component, Injectable,Input,Output,EventEmitter ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
@Injectable()
export class SkillsComponent implements OnInit {

  @Input() applicant!:any;
  @Output() canGo = new EventEmitter();

  skillsList: any = [];
  url: string = 'https://bootcamp-2022.devtest.ge/api';
  showDropdown:boolean = false;
  currentSkill:string = 'skills';
  skillsArray:any = [];
  choosenSkill:any = {};
  experience:any = '';

  constructor(private http: HttpClient ) {}

  ngOnInit(): void {

    this.http.get(this.url+'/skills').subscribe( data => {
      this.skillsList = data;
      
      //in order to keep choosen information
      for(let skill of this.applicant.skills)
      {
  
        for (let httpSkill of this.skillsList) {
          
          if(httpSkill.id === skill.id)
          {
            let obj = {
              id:httpSkill.id,
              title:httpSkill.title,
              experience:skill.experience,
            }
            
            this.skillsArray.push(obj);
          }
        }
      }

      if(this.skillsArray.length !== 0)
      {
        this.canGo.emit({
          section:3,
          canGo:true,
        })
      }
      else{
        this.canGo.emit({
          section: 3,
          canGo: false,
        });
      }
    });

  }

  onShowDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  onSkillsClick(event:any){
    
    let languageName =(<HTMLInputElement>document.getElementById(event.srcElement.id)).textContent;

    this.currentSkill = languageName || '';

    this.showDropdown = false;

    this.choosenSkill = {
      id: parseInt(event.srcElement.id),
    };

  }

  onChangeExp(event:any){
    this.experience = event.target.value;
  }

  exctractNumberFromExp(exp:string){
    const numbers = ['1','2','3','4','5','6','7','8','9'];

    for(let i = 0;i < exp.length;i++)
    {
      for(let j = 0;j < numbers.length;j++)
      {
        if(exp[i] === numbers[j])
          return parseInt(numbers[j]);
      }
    }
    return 0;
  }

  onAddSkill(){

    //if no experience was written , we assume that experience is 0.
    if(this.experience.length === 0)
      this.experience = 0;

    if(this.currentSkill !== 'skills')
    {
      //checking to avoid DUPLICATES in skills array
      const filteredArr = this.applicant.skills.filter(
        (skill: any) => skill.id === this.choosenSkill.id
      );
      
      //if no such skill was added earlier, add one!

      if (filteredArr.length === 0) {
        const exp = this.exctractNumberFromExp(this.experience);


        this.choosenSkill = {
          ...this.choosenSkill,
          experience: exp,
        };

        const fullInfo = {
          ...this.choosenSkill,
          title:this.currentSkill,
        }

        /*  
          Pushing Full info in skills array in order to display full information. example: {
            id:2,
            title:CSS,
            experience:2
          }

          we are dividing this steps because we need only ID and EXPERIENCE in applicant.skills

        */
        this.skillsArray.push(fullInfo)
        this.applicant.skills.push(this.choosenSkill);

        this.canGo.emit({
          section:3,
          canGo:true,
        })

      }
      else{
        this.canGo.emit({
          section:3,
          canGo:false,
        })
      }
    }

  }

  onDeleteSkill(event:any){

    let deleteId = event.srcElement.id;

    
    this.applicant.skills = this.applicant.skills.filter(
      (skill: any) => skill.id !== parseInt(deleteId)
    );


    this.skillsArray = this.skillsArray.filter(
      (skill: any) => skill.id !== parseInt(deleteId)
    );


    if(this.skillsArray.length === 0)
    {
      this.canGo.emit({
        section:3,
        canGo:false,
      })
    }
  }



}
