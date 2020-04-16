import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @Output() studentWasSelected = new EventEmitter<Student>()
  students: Student[] = [
    new Student('Lucas Ganciar Martins','https://randomuser.me/api/portraits/men/75.jpg',1,2),
    new Student('Mayara de Araújo Sueza Cruz','https://randomuser.me/api/portraits/men/74.jpg',1,2,3),
    new Student('Rosangela Ganciar Martins','https://randomuser.me/api/portraits/men/73.jpg',1,2,3),
    new Student('Kaelzinho','https://randomuser.me/api/portraits/men/72.jpg',1,2,3)
  ]

  constructor() { }

  createStudent(){
    let imagePath = ''
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        imagePath = data.results[0].picture.large
        const newStudent = new Student('',imagePath)
        console.log(newStudent)
        this.students.push(newStudent)
        this.studentWasSelected.emit(newStudent)
      })
    
  }

  onStudentSelected(student: Student) {
    console.log(student)
    this.studentWasSelected.emit(student)
  }

  ngOnInit(): void {
  }
}
