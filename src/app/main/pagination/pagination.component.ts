import { Component, OnInit,Input,Output,EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  
  active = -1;
  
  @Output() setSection = new EventEmitter();
  @Input() canGoNext:boolean | undefined;
  @Input() currentSection!:number;
  
  constructor() {}

  ngOnInit(): void {
   
  }

 
  
  onClickNext() {    
    
    if(this.canGoNext)
    {
      this.currentSection++;
      if (this.currentSection > 5)
       this.currentSection = 5;
      this.setSection.emit(this.currentSection);
    }
    
  }

  onClickPrev() {
    this.currentSection--;
    if (this.currentSection < 0)
     this.currentSection = 0;
    this.setSection.emit(this.currentSection);
  }
}
