import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
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



        setTimeout(function () {
          let welcome = document.getElementById("welcome_overlay");
          // welcome.style = "transition: all ease-in-out 0.3s;opacity:0;"
        }, 2000);
        let frame = document.getElementById("frame_container");
        console.log(frame);
        switch (destination.index) {
          case 0:
              frame.className = "frame0 fixed";

            break;
          case 1:
              frame.className = "frame1 fixed";
            break;
          case 2:
              frame.className = "frame2 fixed";
            break;
          case 3:
              frame.className = "frame3 fixed";
            break;
        }
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}

