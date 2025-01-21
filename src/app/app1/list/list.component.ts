import { Component, HostListener, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: any[] = [];
  private page = 1;
  limit = 10;
  isLoading = false;

  constructor(private testService : TestService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.testService.getItems(this.page).subscribe((res)=>{
        this.items = [...this.items, ...res];
        // this.page += this.limit;
        this.isLoading = false;
        this.page++;
        sessionStorage.setItem('page', this.page.toString())
    }, err => console.log(err.error))
  }

  addToFavorites(item: any) {
    this.testService.toggleFavorite(item);
  }

  onScroll(index) {
    const buffer = 5;  // Number of items before reaching the end to trigger the load
    if (index + buffer >= this.items.length) {
      this.loadItems();
    }
  }
}
