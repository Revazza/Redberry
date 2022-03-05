import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  section: number = 3;
  applicant: any = {
    token: '89nOpas|asdanjjh^&as',
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
      id: 1,
      canGo: true,
    },
    {
      id: 2,
      canGo: true,
    },
    {
      id: 3,
      canGo: true,
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

  ngOnInit(): void {

    // console.log('[Paths in init]',this.paths);
  }

  onChangeSection(section: any) {
    if (this.section < section) {
      let objIndex = this.paths.findIndex((obj) => obj.id === section);

      this.paths[objIndex].canGo = true;

      // console.log('[PATHS]',this.paths);
      // console.log('[APPLICANT]',this.applicant);
    }

    this.section = section;

    // console.log('[CURRENT SECTION]',this.section);
  }

  onAddCoordinates(coordinates: any) {

    // console.log('[BEFORE] ',this.applicant);
    
    this.applicant = { ...this.applicant, ...coordinates };

    // console.log('[AFTER] ', this.applicant);

  }

  setSkills(skills: any) {
    // console.log(skills);
  }
}
