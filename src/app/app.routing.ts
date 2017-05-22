import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { JoblistComponent } from './joblist/joblist.component';
import { JobComponent } from './joblist/job/job.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/postJob', component: PostJobComponent},
    { path: 'dashboard/jobs/:id', component: JobComponent }
];

export const routing = RouterModule.forRoot(routes);