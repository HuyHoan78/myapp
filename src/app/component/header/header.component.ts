import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{

  scriptPaths: string[] = [
    // 'assets/js/jquery.min.js',
    // 'assets/js/bootstrap.min.js',
    'assets/js/slick.min.js',
    // 'assets/js/nouislider.min.js',
    // 'assets/js/jquery.zoom.min.js',
    'assets/js/main.js',
  ];
Products: any;
  ngAfterViewInit() {
    // alert("skdjvskjd")
    this.scriptPaths.forEach((path) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = path;

      // Thêm vào sau khi DOM đã được load hoàn toàn
      document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(scriptElement);
      });
    });
  }
  
}
