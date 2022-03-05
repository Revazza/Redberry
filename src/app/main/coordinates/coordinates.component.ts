import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css'],
})
export class CoordinatesComponent implements OnInit {

  @Output() changeSection = new EventEmitter();
  
  
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  errorMsg:string = '';
  canGoNext:boolean = false;

  @Input() applicant!: any;
  // ! is written


  /*
  applicant: any = {
    token: '337286f8-e2c0-4828-a210-abd056453d16',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    skills: [],
    work_preference: '',
    had_covid: null,
    had_covid_at: 'Empty',
    vaccinated: null,
    vaccinated_at: 'Empty',
    will_organize_devtalk: null,
    devtalk_topic: 'Empty',
    something_special: 'Empty',
  };



  */


  constructor() {}

  ngOnInit(): void {

    
    this.checkInputs();
  }

  emailValidation(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  numberValidation(number: string) {
    if(number.length === 0)
      return true;
    if (number[0] !== '5') return false;
    return number.length === 9 ? true : false;
  }

  onChangeName(event: any) {
    this.firstName = event.target.value;
    this.applicant.first_name = event.target.value;
    this.checkInputs();
  }

  onChangeLastName(event: any) {
    this.lastName = event.target.value;
    this.applicant.last_name = this.lastName;
    this.checkInputs();
  }

  onChangeEmail(event: any) {
    this.email = event.target.value;
    this.applicant.email = this.email;
    this.checkInputs();
  }

  onChangePhoneNumber(event: any) {
    this.phoneNumber = event.target.value;
    this.applicant.phone = this.phoneNumber;
    this.checkInputs();
  }


  checkInputs(){
    
    const validatedEmail = this.emailValidation(this.applicant.email);

    const isPhoneValid = this.numberValidation(this.applicant.phone);

    console.log("IsPhoneValid: ",isPhoneValid);

    if((this.applicant.first_name.length !== 0 &&
      this.applicant.last_name.length !== 0 &&
      this.applicant.email.length !== 0
    ) && (isPhoneValid || !isPhoneValid))
    {
      if (
        this.applicant.first_name.length >= 2 &&
        this.applicant.last_name.length >= 2 &&
        validatedEmail !== null &&
      (this.applicant.phone.length === 0 || isPhoneValid)
      ) {
        this.errorMsg = '';
        this.canGoNext = true;
      }
      else if(this.applicant.first_name.length < 2)
      {
        this.errorMsg = 'Incorrect Username'
        this.canGoNext = false;
      }
      else if(this.applicant.last_name.length < 2)
      {
        this.errorMsg = 'Incorrect Last Name';
        this.canGoNext = false;
      }
      else if(validatedEmail === null)
      {
        this.errorMsg = 'Incorrect Email'
        this.canGoNext = false;
      }
      if(!isPhoneValid)
      {
        console.log("i am here")
        this.errorMsg = 'Incorrect Phone Number';
        this.canGoNext = false;
      }
    }

    console.log(this.applicant);
  }


  onChangeSection(section:any){
    this.changeSection.emit(section);
  }

}
