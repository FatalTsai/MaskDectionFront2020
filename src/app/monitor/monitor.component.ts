import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';
import panzoom from "panzoom";


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

    var color = Math.floor((Math.random() * 5) + 1);
    color = 4 

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
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> fuck off <b>bitches</b> - Please go fucking away.', '', {
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
playContainer
  ngOnInit(): void {

     this.elem = document.getElementById("webcam");
     this.playContainer=document.getElementById("playContainer");

  }

  zoombarvalue :number = 0;

  zoomout(value){
    if(value){
      if(this.zoombarvalue >0.3)
        this.zoombarvalue -= 0.2;
      console.log("zoomout")
    }
    else
    {
      if(this.zoombarvalue <10)
      this.zoombarvalue += 0.2;
      console.log("zoomin")
    }
    // this.playstat['zoom'] = this.zoombarvalue
    // this.PlaystatModified()
    this.zoom(this.zoombarvalue)
  }
  zoomupdate()
  {
    console.log("zoom change!")
    // this.playstat['zoom'] = this.zoombarvalue
    // this.PlaystatModified()

    this.zoom(this.zoombarvalue)
  }




  zoom(scale) {
    const isSmooth = false;
    //const scale = this.currentZoomLevel;


    if (scale) {
      const transform = this.panZoomController.getTransform();
      const deltaX = transform.x;
      const deltaY = transform.y;
      const offsetX = scale + deltaX;
      const offsetY = scale + deltaY;

      if (isSmooth) {
        this.panZoomController.smoothZoom(0, 0, scale);
      } else {
        console.log("in zoomAbs scale = "+scale)
        this.panZoomController.zoomAbs(offsetX, offsetY, scale);
      }
    }

  }
// $ ffmpeg -f MJPEG -y -i http://localhost:8080/?action=stream -r 1 -vframes 1 -q:v 1 snapshot.jpg

snapshot(){

  /*
  html2canvas(this.player.nativeElement).then(canvas => {
    //this.canvas.nativeElement.src = canvas.toDataURL();
    this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
    this.downloadLink.nativeElement.download = 'marble-diagram.png';
    this.downloadLink.nativeElement.click();
    console.log(this.downloadLink.nativeElement)
    
  });*/
  
  const canvasElement = <HTMLCanvasElement> document.createElement('CANVAS');
  // const video = this.elem;
  const video = this.playContainer
  const context = canvasElement.getContext('2d');
  let w: number, h: number, ratio: number;
  // console.log('video.width',video.width)
  ratio = video.width / video.height;
  w = video.width ;
  h = w / ratio;
  canvasElement.width = w;
  canvasElement.height = h;
  context.fillRect(0, 0, w, h);
  context.drawImage(video, 0, 0, w, h);
  console.log(video)
  
  /*
  try{
  console.log(''+canvasElement.toDataURL())
  }
  catch(e)
  {
    console.log(e)
  }*/
  try{
  const link = document.createElement('a');
  //this.snapshotName = this.snapshotName !== '' ?  this.snapshotName : 'snapshot';
  //this.userImageType = this.imageTypes.indexOf(this.userImageType.toUpperCase()) >= 0 ? this.userImageType.toUpperCase() : 'PNG';
  //link.setAttribute('download', this.snapshotName + '.' + this.userImageType);
  link.setAttribute('download', 'fuck.png');

  const dataURL = canvasElement.toDataURL();
  link.href = dataURL;
  console.log('from : '+JSON.stringify(link))
  document.body.appendChild(link);
  link.click();
  }catch(e){
    console.log(e)
  }
  /*
  
  */
}

panZoomController;

  ngAfterViewInit() {

    this.panZoomController = panzoom(this.elem , {
      maxZoom: 3,
      minZoom: 0.7,
      bounds: {
        top: 150,
        right: 50,
        bottom: 50,
        left: 150,
      },
      zoomDoubleClickSpeed: 1, //value of 1 will disable double click zoom completely.
      //bounds:false,
      boundsPadding: 0.1,
      beforeWheel: function(e) {
        // allow wheel-zoom only if altKey is down. Otherwise - ignore
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
    })
  }
}