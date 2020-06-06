import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workExperienceObj: any;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.getWorkExperience();
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
