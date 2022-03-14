import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl : '../test/test.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  name = 'azxy tech';
  ngOnInit(): void {
  }

}
