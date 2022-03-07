import { Component, OnInit,Input,Output,EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  
  @Input() paths!:any;
  
  @Output() setSection = new EventEmitter();
  @Input() canGoNext:boolean | undefined;
  @Input() currentSection!:number;

  
  constructor() {}

  ngOnInit(): void {
    
  }

  
  
  onClickNext() {    

    //checking if applicant can go to next 
    for(let i = 0;i < this.paths.length;i++)
    {
      if(this.paths[i].id === this.currentSection &&
         this.paths[i+1].canGo)
      {
        this.setSection.emit(i+1);
        this.currentSection++;
        break;
      }
    }

  }

  onClickPrev() {
    this.currentSection--;
    if (this.currentSection < 0)
     this.currentSection = 0;
    this.setSection.emit(this.currentSection);
  }

  onCircleClick(circle:number)
  {
    for(let i = 1;i < this.paths.length;i++)
    {
      if(i === circle && this.paths[i].canGo)
      {
        this.setSection.emit(i);
      }
    }
  }

}
