import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css'],
})
export class CoordinatesComponent implements OnInit {

  @Output() setCoordinates = new EventEmitter();
  @Output() changeSection = new EventEmitter();
  @Input() canGoNext!: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  errorMsg:string = '';
  // canGoNext:boolean = false;

  @Input() applicant!: any;
  // ! is written

  constructor() {}

  ngOnInit(): void {}

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
  }

  onChangeLastName(event: any) {
    this.lastName = event.target.value;
  }

  onChangeEmail(event: any) {
    this.email = event.target.value;
  }

  onChangePhoneNumber(event: any) {
    this.phoneNumber = event.target.value;
  }

  onMouseLeave(){
    
    let input = {
      first_name:this.firstName,
      last_name:this.lastName,
      email:this.email,
      phone:this.phoneNumber,
    }

    if(this.firstName.length !== 0 || this.email.length !== 0 || this.lastName.length !== 0 || this.phoneNumber.length !== 0)
    {
      if (this.firstName.length < 2) {
        this.errorMsg = 'Incorrect First Name';
      } else if (this.lastName.length < 2) {
        this.errorMsg = 'Incorrect Last Name';
      } else if (this.emailValidation(this.email) === null) {
        this.errorMsg = 'Incorrect Email';
      }
      else if (!this.numberValidation(this.phoneNumber)) {
        this.errorMsg = 'Incorrect Phone Number';
      } else if (this.phoneNumber.length === 0) {
        this.canGoNext = true;
        this.errorMsg = '';
        this.setCoordinates.emit(input);
      } else if (this.numberValidation(this.phoneNumber)) {
        this.canGoNext = true;
        this.errorMsg = '';
        input.phone = "+995"+this.phoneNumber;
        this.setCoordinates.emit(input);
      }

    }

  }

  onChangeSection(section:any){
    this.changeSection.emit(section);
  }

}
