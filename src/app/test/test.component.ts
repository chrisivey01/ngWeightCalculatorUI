import {Component, OnInit} from "@angular/core";
import {TestService} from "./test.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  serviceValue;

  constructor(private testService: TestService) {
    this.test();
  }

  ngOnInit() {
  }

  test() {
    this.testService.testService()
      .subscribe(
        response => {
          this.serviceValue = response.text()
        },
        err => {
          console.log(err);
        });
    ;
  }

}
