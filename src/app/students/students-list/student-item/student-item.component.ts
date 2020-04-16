import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Student } from '../../student.model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student
  @Output() studentSelected = new EventEmitter<void>()

  constructor() { }

  onSelected(){
    this.studentSelected.emit()
  }

  ngOnInit(): void {
  }
}
