import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogsHomeComponent } from './pages/blog/blogs-home/blogs-home.component';
import { BlogsDetailComponent } from './pages/blog/blogs-detail/blogs-detail.component';
import { InterviewQuestionsComponent } from './pages/interview/interview-questions/interview-questions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  // {
  //   path: 'interview-questions-answers',
  //   component: InterviewComponent,
  //   children: [
  //     { path: ':course', component: InterviewQuestionsComponent },
  //   ],
  // },
  { path: 'resources', component: InterviewQuestionsComponent },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', component: BlogsHomeComponent },
      { path: 'details/:id', component: BlogsDetailComponent },
    ],
  },
];
