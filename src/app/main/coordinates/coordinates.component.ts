import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css'],
})
export class CoordinatesComponent implements OnInit {
  @Output() setCoordinates = new EventEmitter();

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  canGoNext: boolean = false;
  errorMsg: string = '';
  showError:boolean = false;

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
    if (number[0] !== '5') return false;
    return number.length === 9 ? true : false;
  }

  onChangeName(event: any) {
    this.firstName = event.target.value;
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

  /*  

  let coordinates = {
    first_name: this.firstName,
    last_name: this.lastName,
    email: this.email,
    phone: '',
  };

  */

  
  onChangeSection()
  {
    if (this.firstName.length < 2)
    {
      this.errorMsg = 'Incorrect First Name';
      this.showError = true;
    }
    else if (this.lastName.length < 2)
    {
      this.errorMsg = 'Incorrect Last Name';
      this.showError = true;
    }
    else if (this.emailValidation(this.email) === null)
    {
      this.errorMsg = 'Incorrect Email';
      this.showError = true;
    }
    else if (this.phoneNumber.length === 0)
    {
      let coordinates = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        phone: '',
      };
      this.showError = false;
      console.log(coordinates);
    }
    else if (!this.numberValidation(this.phoneNumber))
    {
      this.errorMsg = 'Incorrect Phone Number';
      this.showError = true;
    }
    else{
      let coordinates = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        phone: '+995' + this.phoneNumber,
      };
      this.showError = false;
      console.log(coordinates);
    }
  }

}
