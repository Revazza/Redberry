import { Component,Output,EventEmitter,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-stuff',
  templateUrl: './covid-stuff.component.html',
  styleUrls: ['./covid-stuff.component.css'],
})
export class CovidStuffComponent implements OnInit {
 

  
  @Input() applicant!: any;
  @Output() canGo = new EventEmitter();

  showCovidLoc: boolean = false;
  showVaccination: boolean = false;

  hadCovid :boolean = false;
  isVaccinated:boolean = false;
  workplace:string = '';


  constructor() {}

  ngOnInit(): void {


    this.hadCovid = this.applicant.had_covid;
    this.isVaccinated = this.applicant.vaccinated;
    this.workplace = this.applicant.work_preference;
    

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


    this.checkUserInputs();

  }


  checkUserInputs(){

    let checkCovid = false;
    let checkVaccine = false;
    let checkWorkPlace = false;

    if(this.applicant.had_covid !== null)
    {
      if(this.applicant.had_covid && this.applicant.had_covid_at !== '')
      {
        checkCovid = true;
      }
      else if(!this.applicant.had_covid)
      {
        this.applicant.had_covid_at = '';
        checkCovid = true;
      }
    }

    if(this.applicant.vaccinated !==null)
    {
      if(this.applicant.vaccinated && this.applicant.vaccinated_at !== '')
      {
        checkVaccine = true;
      }
      else if(!this.applicant.vaccinated)
      {
        this.applicant.vaccinated_at = '';
        checkVaccine = true;
      }
    }

    if(this.applicant.work_preference !== '')
      checkWorkPlace = true;
    else
      checkWorkPlace = false;

    if(checkVaccine && checkCovid && checkWorkPlace)
    {
      this.canGo.emit({
        section:4,
        canGo:true,
      })
    }
    else
    {
      this.canGo.emit({
        section: 4,
        canGo: false,
      });
    }

  }

  onChooseWorkPlace(workplace: string) {
    this.applicant.work_preference = workplace;

    this.checkUserInputs();
  }

  onVaccination(ans: string) {
    if (ans === 'y') {
      this.showVaccination = true;
      this.applicant.vaccinated = true;
    } else {
      this.showVaccination = false;
      this.applicant.vaccinated = false;
      this.applicant.vaccinated_at = '';
    }

    this.checkUserInputs();
  }

  onContactCovid(ans: string) {
    if (ans === 'y') {
      this.applicant.had_covid = true;
      this.showCovidLoc = true;
    } else {
      this.applicant.had_covid = false;
      this.showCovidLoc = false;
      this.applicant.had_covid_at = '';
    }

    this.checkUserInputs();
  }

  onMouseLeaveCovidLocation(event: any) {
    this.applicant.had_covid_at = event.target.value;
  
    this.checkUserInputs();
  }

  onMouseLeaveVaccination(event: any) {
    this.applicant.vaccinated_at = event.target.value;

    this.checkUserInputs();
  }


}
