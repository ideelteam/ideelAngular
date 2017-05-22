import { Component, OnInit, Output } from '@angular/core';
import { JobInterface } from '../shared/job-interface';
import { AppServiceService } from '../app-service.service';
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  listOfJobs: JobInterface[];
  
  constructor(
    appService$: AppServiceService,
    private route: Router,
    private location: Location) {
    appService$.getAllJobs()
    .subscribe(
      result => {
        this.listOfJobs = result;
      },
      () => console.log("Error in getAllJobs"),
      () => console.log('Rest Call: ' + this.listOfJobs)
    );
   }

  ngOnInit() {
  }

  onClick(aJob: any){
    this.route.navigate(['dashboard/jobs/', aJob.jobID]);
  }

}
