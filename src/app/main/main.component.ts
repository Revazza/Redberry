import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  section: number = 1;
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
  paths = [
    {
      id: 1,
      canGo: true,
    },
    {
      id: 2,
      canGo: false,
    },
    {
      id: 3,
      canGo: false,
    },
    {
      id: 4,
      canGo: false,
    },
    {
      id: 5,
      canGo: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onChangeSection(section: any) {
    if (this.section < section) {
      let objIndex = this.paths.findIndex((obj) => obj.id === section);

      this.paths[objIndex].canGo = true;
    }

    this.section = section;
  }

  onAddCoordinates(coordinates: any) {
    this.applicant = { ...this.applicant, ...coordinates };
  }
}
