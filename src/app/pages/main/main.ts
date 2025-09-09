import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'hmtech-pages-main',
  standalone: true,
  imports: [
    RouterModule, TranslateModule
  ],
  templateUrl: './main.html',
  styleUrls: ['../../../styles.css']
})
export class Main {


  constructor(private translate: TranslateService){

  }


  changeLang(lang: string) {

    this.translate.use(lang);
    
  }

  ngOnInit() {
    document.body.classList.add('special-bg');
  }
  
  ngOnDestroy() {
    document.body.classList.remove('special-bg');
  }

}
