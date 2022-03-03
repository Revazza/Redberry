import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  section: string = 'coordinates';
  applicant: any = {
    token: '89nOpas|asdanjjh^&as',
  };
  constructor() {}

  ngOnInit(): void {}

  onChangeSection(section: string) {
    this.section = section;
  }

  onAddCoordinates(coordinates: any) {
    
    this.applicant = {...this.applicant,...coordinates};
    
    console.log(this.applicant);
  }
}
