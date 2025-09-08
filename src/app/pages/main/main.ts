import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'hmtech-pages-main',
  standalone: true,
  imports: [
    RouterModule, TranslateModule
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
