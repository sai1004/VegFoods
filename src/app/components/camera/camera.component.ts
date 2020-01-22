import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.css"]
})
export class CameraComponent implements OnInit {
  @ViewChild("video", null) video;

  constructor() {}

  ngOnInit() {
    const videoElement: HTMLVideoElement = this.video.nativeElement;

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "user" }
      })
      .then(stream => {
        videoElement.srcObject = stream;
      });
  }
}
