import {
  Component,
  Injectable,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.css'],
})
@Injectable()
export class SubmitApplicationComponent implements OnInit {
  @Input() applicant!: any;
  @Output() changeSection = new EventEmitter();

  url: string =
    'https://bootcamp-2022.devtest.ge/api/application?token=337286f8-e2c0-4828-a210-abd056453d16';

  showThanks:boolean = false;  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}


  onSubmitApplicant() {
    console.log(this.applicant);
    this.showThanks = true;

    setTimeout( () =>{
      this.showThanks = false;
      this.changeSection.emit(0);
    },2000)

    // this.http
    //   .post(this.url, this.applicant)
    //   .subscribe();

  }

  onGoBack() {
    this.changeSection.emit(4);
  }
}
