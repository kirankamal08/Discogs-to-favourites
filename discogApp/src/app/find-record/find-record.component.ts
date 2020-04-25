import { Component, OnInit } from '@angular/core';
//import {Form} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DisFinderService } from '../dis-finder.service';

@Component({
  selector: 'app-find-record',
  templateUrl: './find-record.component.html',
  styleUrls: ['./find-record.component.css']
})
export class FindRecordComponent implements OnInit {
  videos: any;
  constructor(private disfinder:DisFinderService) { }

  ngOnInit() {
  }

  musicSubmit(form: NgForm) {
    //console.log(form.value.InputSearch);
    this.disfinder.getDicogs(form.value.InputSearch)
    .subscribe(resVideoData => this.videos = resVideoData);
    //console.log(resVideoData);
  }

}
