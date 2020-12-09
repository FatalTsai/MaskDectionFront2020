import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  constructor(private toastr: ToastrService ) { 

  }
  elem
  filter
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } 
    // this.elem.style.height = "1080"
  }


public toggleText: string = "Hide";
public show: boolean = false;

public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
}

brightnessbarvalue = 1
contrastbarvalue = 1
saturationbarvalue = 1 
filterupdate(){
this.filter ="brightness("+this.brightnessbarvalue+")" +
    " saturate(" + this.contrastbarvalue+ ")"+
    " contrast(" + this.saturationbarvalue+ ")"

    this.elem.style.filter=this.filter //+ ";  transform : " + this.elem.nativeElement.style["transform"] 

}
  showNotification(from, align){

    const color = Math.floor((Math.random() * 5) + 1);

    switch(color){
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-info alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-success alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 3:
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-warning alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 4:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         enableHtml: true,
         closeButton: true,
         toastClass: "alert alert-danger alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
       break;
       case 5:
       this.toastr.show('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
      break;
      default:
      break;
    }
}

  ngOnInit(): void {

     this.elem = document.getElementById("webcam");

  }

}
