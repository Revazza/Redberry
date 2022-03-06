import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Output() changeSection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuestionnaireClick(){
    this.changeSection.emit(1);
  }
  onSubmitApplicationsClick(){
    this.changeSection.emit(-1);
  }




}
