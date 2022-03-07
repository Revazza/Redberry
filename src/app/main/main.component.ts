import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  section: number = 0;
  applicant: any = {
    token: '957c8534-c6fa-46d4-ba00-a457f1d1e041',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    skills: [],
    work_preference: '',
    had_covid: null,
    had_covid_at: '',
    vaccinated: null,
    vaccinated_at: '',
    will_organize_devtalk: null,
    devtalk_topic: '',
    something_special: '',
  };

  paths = [
    {
      id: 0,
      canGo: true,
    },
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

  onCanGo(obj: any) {
    let objIndex = this.paths.findIndex((path) => path.id === obj.section);

    if (obj.canGo) this.paths[objIndex].canGo = true;
    else this.paths[objIndex].canGo = false;
  }

  clearValues() {
    this.applicant = {
      token: '957c8534-c6fa-46d4-ba00-a457f1d1e041',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      skills: [],
      work_preference: '',
      had_covid: null,
      had_covid_at: '',
      vaccinated: null,
      vaccinated_at: '',
      will_organize_devtalk: null,
      devtalk_topic: '',
      something_special: '',
    };

    this.paths = [
      {
        id: 0,
        canGo: true,
      },
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
  }
}
