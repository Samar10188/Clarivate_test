import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestService {

  constructor(private http: HttpClient){}

  private favorites = new BehaviorSubject<any[]>([]);
  favorites$ = this.favorites.asObservable();

  toggleFavorite(item: any) {
    const currentFavorites = this.favorites.value;
    const index = currentFavorites.findIndex(fav => fav.id === item.id);

    if (index === -1) {
      this.favorites.next([...currentFavorites, item]);
    } else {
      this.favorites.next(currentFavorites.filter(fav => fav.id !== item.id));
    }
  }

  getItems(page){
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`)
  }
}
