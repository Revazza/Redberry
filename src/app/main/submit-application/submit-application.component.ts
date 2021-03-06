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
  @Input() applicant: any;

  @Output() clearValues = new EventEmitter();
  @Output() changeSection = new EventEmitter();

  url: string =
    'https://bootcamp-2022.devtest.ge/api/application?token=957c8534-c6fa-46d4-ba00-a457f1d1e041';

  showThanks: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmitApplicant() {

    //i was trying to delete fields that wasn't fulfilled with 'delete obj.deletionName' but with no success,so in 2018 there was no corona virus,so if applicant cheats we'll deal with him/her behaviour (:

    if (this.applicant.phone === '') this.applicant.phone = '+995000000000';
    if (this.applicant.had_covid_at === '')
      this.applicant.had_covid_at = '2018-12-12';
    if (this.applicant.vaccinated_at === '')
      this.applicant.vaccinated_at = '2018-12-12';

    this.showThanks = true;

    this.http.post(this.url, this.applicant).subscribe();

    setTimeout(() => {
      this.showThanks = false;

      this.changeSection.emit(0);
    }, 3000);

    this.clearValues.emit();
  }

  onGoBack() {
    this.changeSection.emit(4);
  }
}
