import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{

  constructor(private router: Router) { }

  goToMessages(): void
  {
    this.router.navigateByUrl('/tabs/home/messages');
  }

  goToConnect(): void
  {
    this.router.navigateByUrl('/tabs/home/connect');
  }

  goToDailydev(): void
  {
    this.router.navigateByUrl('/tabs/home/dailydev')
  }
}
