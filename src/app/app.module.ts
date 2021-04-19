import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { JobComponent } from './job/job.component';
import { ReviewComponent } from './review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './_services/category.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    FeedbackComponent,
    CandidateComponent,
    ContactComponent,
    AccountComponent,
    JobComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
