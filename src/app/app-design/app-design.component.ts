import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-design',
  templateUrl: './app-design.component.html',
  styleUrls: ['./app-design.component.scss']
})
export class AppDesignComponent implements OnInit {

  constructor() { }
  feature:string = ''
  ngOnInit(): void {
  }
  addFeature() {
  this.feature = "my string"
}
}
