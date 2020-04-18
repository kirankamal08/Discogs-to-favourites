import { Component, OnInit } from '@angular/core';
//import {Form} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-find-record',
  templateUrl: './find-record.component.html',
  styleUrls: ['./find-record.component.css']
})
export class FindRecordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  musicSubmit(form: NgForm) {
    console.log(form.value.InputSearch);
  }

}
