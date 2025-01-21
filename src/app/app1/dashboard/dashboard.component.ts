import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  favorites$ = this.testService.favorites$;

  constructor(private testService: TestService,
              private router: Router) {
                this.favorites$.subscribe((res)=>{
                  console.log(res)
                })
              }

  ngOnInit(): void {}

  goToList(){
    this.router.navigateByUrl('/app1/list');
  }
  
}
