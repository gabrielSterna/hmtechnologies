import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { Main } from "./pages/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hmtech');
}
