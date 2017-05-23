import { Component, OnInit } from '@angular/core';
import { JobInterface } from '../../shared/job-interface';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobID: string;
  jobInfo:JobInterface;
  
  constructor(
    private route: ActivatedRoute,
    private appService$: AppServiceService
  ) { }
    

  ngOnInit() {
    this.jobID = this.route.snapshot.params['id'];
    console.log("Inside JobComponent jobID");
    this.appService$.getOneJobs(this.jobID)
    .subscribe(
      result => {
        console.log(result);
        this.jobInfo = result;
        console.log(JSON.stringify(this.jobInfo));
      },
      () => {},
      () => {}
    );
  }

}
