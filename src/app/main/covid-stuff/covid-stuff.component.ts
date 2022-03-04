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

  constructor() {}

  ngOnInit(): void {}


  onChooseWorkPlace(workplace:string){
    this.applicant.work_preference = workplace;

    console.log(this.applicant);
  }

}
