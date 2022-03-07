import { HttpClient } from '@angular/common/http';
import { Component, Injectable,Output,EventEmitter ,OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
@Injectable()
export class ApplicationsComponent implements OnInit {
  url: string =
    'https://bootcamp-2022.devtest.ge/api/applications?token=957c8534-c6fa-46d4-ba00-a457f1d1e041';

  id: number = 1;

  applicants: any = [];
  @Output() changeSection = new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data) => {
      let tempApplicants: any = [];

      tempApplicants = data;

      for (let app of tempApplicants) {
        this.applicants.push({
          id: this.id,
          ...app,
        });
        this.id++;
      }
    });
  }

  onGoBack() {
    this.changeSection.emit(0);
  }
}
