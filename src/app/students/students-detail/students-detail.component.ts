import { Component, OnInit, Input, ElementRef, ViewChild, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {
  @Input() student: Student
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
  
  constructor() { }
  
  calcularMedia(){
    if(this.student.P1 && this.student.P2 && this.student.P3){
      this.student.media = (this.student.P1 + this.student.P2 + this.student.P3) / 3
    }
  }
  ngOnInit(): void {
    
  }
}
