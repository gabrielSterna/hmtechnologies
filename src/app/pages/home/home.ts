import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'hmtech-pages-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrls: ['../../app.css'] 
})
export class Home {

}
