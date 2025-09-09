import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hmtech-comp-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private activeLink: string = '';

  private setActive(link: string){
    this.activeLink = link;
  }

}
