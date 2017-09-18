import {Component, OnInit} from '@angular/core';
import $ from 'jquery';

(<any>window).jQuery = $

@Component({
  selector: 'app-calc-box',
  templateUrl: './calc-box.component.html',
  styleUrls: ['./calc-box.component.css']
})
export class CalcBoxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(function(){
      alert('Hello');
    });

  }

}
