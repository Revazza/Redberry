import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})

@Injectable()

export class ApplicationsComponent implements OnInit {
  url: string =
    'https://bootcamp-2022.devtest.ge/api/applications?token=337286f8-e2c0-4828-a210-abd056453d16';

  id:number = 1;

  applicants:any = [];

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (data) =>{

        let tempApplicants :any = [];

        tempApplicants = data;
        console.log('Applicants: ', tempApplicants);
        
        for (let app of tempApplicants) {
          console.log(app);
          this.applicants.push({
            id:this.id,
            ...app,
          })
          this.id++;
        }

        console.log(this.applicants);
      }
    );
  }


}
