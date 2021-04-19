import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import {Category} from '../_model/category'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cateList: any = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.showCateList();
  }

  showCateList(){
    this.categoryService.getCateList().subscribe(res=>{
      this.cateList = res;
    },error=>{
      console.log(error);
    })
  }

}
