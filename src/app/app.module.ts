import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobComponent } from './joblist/job/job.component';
import { WelcomeComponent } from './welcome/welcome.component'

import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';
import { AppServiceService } from './app-service.service';
import { PostJobComponent } from './post-job/post-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
    JoblistComponent,
    JobComponent,
    WelcomeComponent,
    PostJobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AppServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
