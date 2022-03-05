import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-applicant',
  templateUrl: './about-applicant.component.html',
  styleUrls: ['./about-applicant.component.css'],
})
export class AboutApplicantComponent implements OnInit {

  @Output() changeSection = new EventEmitter();
  @Input() applicant!: any;

  canGoNext: boolean = false;
  devtalkTxt:string = '';
  specialTxt:string = '';


  constructor() {}


  ngOnInit(): void {

    this.devtalkTxt = this.applicant.devtalk_topic;
    this.specialTxt = this.applicant.something_special;

    if (this.applicant.will_organize_devtalk)
    {
      (<HTMLInputElement>document.getElementById('devtalkTrue')).checked = true;
    }
    else if (this.applicant.will_organize_devtalk === false)
    {
      (<HTMLInputElement>document.getElementById('devtalkFalse')).checked = true;
    }


    (<HTMLInputElement>document.getElementById('devtalkTxt')).textContent = this.devtalkTxt;

    (<HTMLInputElement>document.getElementById('specialTxt')).textContent = this.specialTxt;

    this.checkUserInputs();

  }

  checkUserInputs() {
    if (
      this.applicant.will_organize_devtalk !== null &&
      this.applicant.devtalk_topic.length !== 0 &&
      this.applicant.something_special.length !== 0
    ) {
      this.canGoNext = true;
    } else this.canGoNext = false;

  }

  onChooseDevtalk(choice: string) {
    if (choice === 'y') this.applicant.will_organize_devtalk = true;
    else this.applicant.will_organize_devtalk = false;

    this.checkUserInputs();
  }

  onChangeAboutDevTalk(event: any) {
    this.applicant.devtalk_topic = event.target.value;

    this.checkUserInputs();
  }

  onChangeSpecial(event: any) {
    this.applicant.something_special = event.target.value;

    this.checkUserInputs();
  }

  setSection(section: any) {
    this.changeSection.emit(section);
    console.log(this.applicant);
  }
}
