import { Component, OnInit } from "@angular/core";

@Component({
  selector:'app-child',
  templateUrl:'../child/app-child.component.html',
  styleUrls:['../child/app-child.component.css']
})
export class ChildComponent{
userName='Default Value';
clikMe(){
  alert(this.userName);
}

}