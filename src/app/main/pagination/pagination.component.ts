import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  active:number = 1;
  @Output() changeSection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onClickNext(){
    this.active++;
    if(this.active > 5)
      this.active = 5;
    this.changeSection.emit();
  }

  onClickPrev(){
    this.active--;
    if(this.active === 0)
      this.active = 1;
  }



}
