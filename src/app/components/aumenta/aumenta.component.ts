import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aumenta',
  templateUrl: './aumenta.component.html',
  styleUrls: ['./aumenta.component.css']
})
export class AumentaComponent implements OnInit {

  @ViewChild('txtPercentage') txtPercentage:ElementRef;
  @Input() percentage: number = 50;
  @Input() leyenda: String = "Leyenda";

  @Output() changevalue: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('leyenda', this.leyenda);

  }


  /**
  * Metodo para incrementar 
  * @param value 
  */
  changeValue(value: number) {
    if (this.percentage >= 100 && value >= 0) {
      this.percentage = 100;
      return;
    }
    if (this.percentage <= 0 && value <= 0) {
      this.percentage = 0;
      return;
    }
    this.percentage = this.percentage + value;
    this.txtPercentage.nativeElement.focus();

  }

  onChanges(newValue: number) {

    /* let elemHTML:any = document.getElementsByName('percentage')[0];
    console.log('mirar',elemHTML.value); */
    
    if (newValue>= 100) {
      this.percentage = 100;
    }
    else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
   this.txtPercentage.nativeElement.value= this.percentage;
    this.changevalue.emit(this.percentage);
  }


}
