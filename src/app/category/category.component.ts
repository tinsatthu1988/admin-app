import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import {Category} from '../_model/category'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnDestroy, OnInit {
  cateList: any = []
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.showCateList();
  }

  showCateList(){
    this.categoryService.getCateList().subscribe(res=>{
      this.cateList = res;
      this.dtTrigger.next();
    },error=>{
      console.log(error);
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
