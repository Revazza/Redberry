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
  urlGet: string =
    'https://bootcamp-2022.devtest.ge/api/applications?token=337286f8-e2c0-4828-a210-abd056453d16';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmitApplicant() {
    console.log(this.applicant);

    this.http
      .post(this.url, this.applicant)
      .subscribe((response) => console.log(response));

    this.http.get(this.urlGet).subscribe((data) => console.log(data));
  }

  onGoBack() {
    this.changeSection.emit(4);
  }
}
