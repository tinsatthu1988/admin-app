import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    children: [
      {path: 'category', component: CategoryComponent},
      {path: 'product', component: ProductComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'candidate', component: CandidateComponent},
      {path: 'job', component: JobComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'account', component: AccountComponent},
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
