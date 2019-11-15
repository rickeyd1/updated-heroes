import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'updated-heroes';
  menu1 = ['Game mechanics', 'Game modes', 'Story'];
  menu2 = ['Media', 'FAQs', 'Purchase Info'];
}
