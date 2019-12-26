import { Component, HostListener } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      // licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        setTimeout(function(){ 
          let welcome = document.getElementById("welcome_overlay");
          welcome.style = "transition: all ease-in-out 0.3s;opacity:0;"
         }, 2000);

        console.log(origin.index);
        console.log(destination.index);
        let frame = document.getElementById("frame_container");
        switch (destination.index) {
          case 0:
            frame.style = "transform:rotate(0deg);transition: all ease-in-out 0.3s;"
            break;
          case 1:
            frame.style = "transform:rotate(25deg);transition: all ease-in-out 0.3s;"
            break;
          case 2:
            frame.style = "transform:rotate(-90deg);transition: all ease-in-out 0.3s;top:140px!important;"
            break;
        }
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}

