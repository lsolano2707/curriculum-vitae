import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curriculum-vitae';
  knowledgesObj: any = {};
  summaryObj: any = {};
  workExperienceObj: any = {};

  constructor(private service: AppService, public globals: Globals) { }

  ngOnInit() {
    this.getKnowledges();
    this.getSummary();
    this.getWorkExperience();
  }

  getKnowledges() {
    this.service.getKnowledges().subscribe(
      response => this.knowledgesObj = response,
      error => console.log('Error getKnowledges: ' + error),
      () => {
        // console.log('KNOWLEDGES: '+JSON.stringify(this.knowledgesObj));
      }
    );
  }

  getSummary() {
    this.service.getSummary().subscribe(
      response => this.summaryObj = response,
      error => console.log('Error getSummary: ' + error),
      () => {
        // console.log('SUMMARY: '+JSON.stringify(this.summaryObj));
      }
    );
  }

  getWorkExperience() {
    this.service.getWorkExperience().subscribe(
      response => this.workExperienceObj = response,
      error => console.log('Error getWorkExperience: ' + error),
      () => {
        // console.log('WORK EXPERIENCE: ' + JSON.stringify(this.workExperienceObj));
      }
    );
  }
}
