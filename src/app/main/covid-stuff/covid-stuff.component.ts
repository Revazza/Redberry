import { Component,Output,EventEmitter,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-stuff',
  templateUrl: './covid-stuff.component.html',
  styleUrls: ['./covid-stuff.component.css'],
})
export class CovidStuffComponent implements OnInit {
  /*
    applicant: any = {
    token: '89nOpas|asdanjjh^&as',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    skills: [],
    work_preference: '',
    had_covid: null,
    had_covid_at: '',
    vaccinated: null,
    vaccinated_at: '',
    will_organize_devtalk: null,
    devtalk_topic: '',
    something_special: '',
  };
  */

  @Input() applicant!: any;
  @Output() changeSection = new EventEmitter();

  showCovidLoc: boolean = false;
  showVaccination: boolean = false;
  canGoNext: boolean = false;

  hadCovid :boolean = false;
  isVaccinated:boolean = false;
  workplace:string = '';


  constructor() {}

  ngOnInit(): void {

    console.log(this.applicant);

    this.hadCovid = this.applicant.had_covid;
    this.isVaccinated = this.applicant.vaccinated;
    this.workplace = this.applicant.work_preference;

    console.log('[HAD COVID]?',this.hadCovid);
    console.log('[IS VACCINATED]?',this.isVaccinated);
    console.log('[WORKPLACE]?',this.workplace);


    if ( this.workplace !== '' )
    {
      (<HTMLInputElement>(
        document.getElementById(this.applicant.work_preference)
      )).checked = true;    
    }


   if(this.hadCovid !== null)
   {
      if (this.applicant.had_covid) {
        (<HTMLInputElement>document.getElementById('hadCovid')).checked = true;
      } else {
        (<HTMLInputElement>document.getElementById('!hadCovid')).checked = true;
      }
   }



    if(this.isVaccinated !== null)
    {
      if (this.applicant.vaccinated) {
        (<HTMLInputElement>document.getElementById('vaccinated')).checked =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('!vaccinated')).checked =
          true;
      }
    }


  }


  checkUserInputs(){
    
  }

  onChooseWorkPlace(workplace: string) {
    this.applicant.work_preference = workplace;
  }

  onVaccination(ans: string) {
    if (ans === 'y') {
      this.showVaccination = true;
      this.applicant.vaccinated = true;
    } else {
      this.showVaccination = false;
      this.applicant.vaccinated = false;
      this.applicant.vaccinated_at = '';
      console.log(this.applicant);
    }
  }

  onContactCovid(ans: string) {
    if (ans === 'y') {
      this.applicant.had_covid = true;
      this.showCovidLoc = true;
    } else {
      this.applicant.had_covid = false;
      this.showCovidLoc = false;
      this.applicant.had_covid_at = '';
      console.log(this.applicant);
    }
  }

  onMouseLeaveCovidLocation(event: any) {
    this.applicant.had_covid_at = event.target.value;
    console.log('[COVID LOCATION]', this.applicant);
  }

  onMouseLeaveVaccination(event: any) {
    this.applicant.vaccinated_at = event.target.value;
    console.log('[VACCINATION]', this.applicant);
  }

  setSection(section:any){
    console.log(section);
    this.changeSection.emit(section);
  }


}
