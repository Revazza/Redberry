import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css'],
})
export class CoordinatesComponent implements OnInit {
  @Output() changeSection = new EventEmitter();

  firstNameError: boolean = false;
  lastNameError: boolean = false;
  emailError: boolean = false;
  phoneNumberError: boolean = false;
  errorMsg: string = '';
  canGoNext: boolean = false;

  @Input() applicant!: any;

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
    if (number.length === 0) return true;
    if (number[0] !== '5') return false;
    return number.length === 9 ? true : false;
  }

  onChangeName(event: any) {
    this.applicant.first_name = event.target.value;
    this.checkInputs();
  }

  onChangeLastName(event: any) {
    this.applicant.last_name = event.target.value;
    this.checkInputs();
  }

  onChangeEmail(event: any) {
    this.applicant.email = event.target.value;
    this.checkInputs();
  }

  onChangePhoneNumber(event: any) {
    this.applicant.phone = event.target.value;
    this.checkInputs();
  }

  checkInputs() {
    const validatedEmail = this.emailValidation(this.applicant.email);

    const isPhoneValid = this.numberValidation(this.applicant.phone);

    if (
      this.applicant.first_name.length !== 0 &&
      this.applicant.last_name.length !== 0 &&
      this.applicant.email.length !== 0 &&
      (isPhoneValid || !isPhoneValid)
    ) {
      if (this.applicant.first_name.length < 2) {
        this.firstNameError = true;
      }
      else
        this.firstNameError = false;
      
      if (this.applicant.last_name.length < 2) {
        this.lastNameError = true;
      }
      else
        this.lastNameError = false;

      if (validatedEmail === null) {
        this.emailError = true;
      }
      else
        this.emailError = false;
      if (!isPhoneValid) {
        this.phoneNumberError = true;
      }
      else
        this.phoneNumberError = false;

      if (
        !this.phoneNumberError &&
        !this.firstNameError &&
        !this.lastNameError &&
        !this.emailError
      ) {
        this.canGoNext = true;
      }
      else
        this.canGoNext = false;
    }

  }

  onChangeSection(section: any) {
    this.changeSection.emit(section);
  }
}
