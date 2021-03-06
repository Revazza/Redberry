import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input,OnInit, } from '@angular/core';
@Component({
  selector: 'app-applicant-layout',
  templateUrl: './applicant-layout.component.html',
  styleUrls: ['./applicant-layout.component.css'],
})
@Injectable()
export class ApplicantLayoutComponent implements OnInit {
  @Input() applicant!: any;

  showApplicant: boolean = false;
  workplace: string = '';
  hadCovid: boolean = false;
  isVaccinated: boolean = false;
  url: string = 'https://bootcamp-2022.devtest.ge/api';
  applicantSkills:any = [];
  constructor(private http: HttpClient) {}


  ngOnInit(): void {

    if (this.applicant.work_preference === 'from_home') {
      this.workplace = 'home';
    } else if (this.applicant.work_preference === 'from_sairme_office') {
      this.workplace = 'office';
    } else this.workplace = 'hybrid';

    if (this.applicant.had_covid) this.hadCovid = true;
    else this.hadCovid = false;

    this.applicant.had_covid_at = this.applicant.had_covid_at.replace(
      /-/g,
      '/'
    );
    this.applicant.vaccinated_at = this.applicant.vaccinated_at.replace(
      /-/g,
      '/'
    );

    let skillsArray:any = [];

    this.http.get(`${this.url}/skills`).subscribe( data =>{
      skillsArray = data;

      for(let skill of skillsArray)
      {
        for(let appSkill of this.applicant.skills)
        {
          if(skill.id === appSkill.id)
          {
            this.applicantSkills.push({
              title:skill.title,
              experience:appSkill.experience
            })
          }
        }
      }

    })


  }

  onShowApplicant() {
    this.showApplicant = !this.showApplicant;
  }
}
