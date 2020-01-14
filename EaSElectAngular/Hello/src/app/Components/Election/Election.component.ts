import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-election',
    templateUrl: './election.component.html',
    styleUrls: ['./election.component.css']
  })
  export class ElectionComponent {
  
 //  whichPage:number=1;
 // var value = sessionStorage.getItem('KEY');
  //sessionStorage.clear('KEY');
  ngOnInit()
  {
    sessionStorage.setItem('whichPage', '1');
  }
  getWhichStreen()
  {
  var value = sessionStorage.getItem('whichPage');
  return value;
  }
}