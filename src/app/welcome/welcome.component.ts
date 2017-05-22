import { Component, OnInit, Output } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {} from '../shared/user-interface';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Output("ActiveUser") username:string;
  password: string;
  appService$: AppServiceService;
  route$: Router;

  constructor(
      _social:AppServiceService,
      _route: Router,
    ) { 
      this.appService$ = _social;
      this.route$ = _route;
    }

  onClick() {
    this.appService$.loginUserName(this.username)
    .subscribe(
      // Result is an user object
      result => {
        this.route$.navigate(['/dashboard']);
      },
      () => {},
      () => {}
    );
  }

  ngOnInit() {
  }

}
