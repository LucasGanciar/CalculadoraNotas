import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsDetailComponent } from './students/students-detail/students-detail.component';
import { StudentItemComponent } from './students/students-list/student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentsDetailComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
