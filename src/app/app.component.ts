import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/app-child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,AfterViewInit  {
  userName = 'Angular';
  @ViewChild('box') box:ElementRef;
  @ViewChild(ChildComponent) child:ChildComponent;
  ngOnInit(){
    // console.log(this.box);
    
  }
  ngAfterViewInit(){
     console.log(this.box);
    // this.box.nativeElement.innerHTML="Tarun";
    // this.box.nativeElement.style.backgroundColor="blue";
    // this.box.nativeElement.ClassList="boxblue";
  }
  ChangeInProperty(){
    this.child.userName='Tarun';
  }
  CallChildMethod(){
    this.child.clikMe();
  }
}
