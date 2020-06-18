import { Component, OnInit } from '@angular/core';
//import {Form} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DisFinderService } from '../dis-finder.service';
import { Dicogs } from '../dicogs';
import { Discogs } from '../discogs';
import {ActivatedRoute,Router} from '@angular/router';
import { Observable } from 'rxjs';


declare var M: any;

@Component({
  selector: 'app-find-record',
  templateUrl: './find-record.component.html',
  styleUrls: ['./find-record.component.css'],
  providers:[DisFinderService]
})
export class FindRecordComponent implements OnInit {
discogs:Dicogs[];
pager = {};
pageOfItems :any;
pager1 = {};
pageOfItems1 :any;
filterText:String;
genre1:string;
//tempArray: Dicogs[] = [];
  //album:object;
  album:any;
 //videos: Array<Video>;
  // album: object;
  constructor(private disfinder:DisFinderService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log("oninit");
    this.resetForm();
  //  this.getDicogsData();
 // console.log(this.route.queryParams);
     this.route.queryParams.subscribe((x) => {this.getDicogsData(x.page || 1);
       //console.log('hello');
      // console.log(x);
      });
    
      this.route.queryParams.subscribe(x => {this.genreFilter(x.style || '',x.pageF || 1)});
      //console.log(filterPage);
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.disfinder.selectedRec = {
      title: "",
      uri: "",
      master_id: "",
      style: "",
    }
  }

  musicSubmit(form: NgForm) {
    //console.log(form.value.InputSearch);
    this.disfinder.getDicogs(form.value.InputSearch)
    //.subscribe(album => this.discogs = album);
    //.subscribe(data => this.album = data);  
    .subscribe((data:any) => {
      //  this.album = data;
      this.album = data.results;
      //  this.discogs = data.results[0] as Dicogs[];
        //console.log(this.album);
       // this.disfinder.discogs = this.album as Dicogs[];
        this.discogs = this.album as Dicogs[];
   //     console.log(this.discogs);
   this.disfinder.selectedRec = data.results[20];
 // console.log(this.album.length);
      }
      
);

        
   // console.log(this.album);
   /* fetch method code below */
/* this.disfinder.getDicogs(form.value.InputSearch)
    .then((response) => {
      response.json().then((data => {
      //  this.album = data.results[0];
       // this.discogs = data.results[0] as Dicogs[];
        console.log(this.album);
      }));
    }).catch((err) => {
      console.log(`Error generated: ${err}`);
    }) */
    /* fetch method code below */
  }

  addFav(form: NgForm) {
  //  console.log("testing");
   // console.log(form.value);
  //  console.log(form.value.title-1);
    this.disfinder.postDiscogs(form.value).subscribe((res:any) => {
      if(res.errors) {
      //  console.log(res.errors.uri.message);
        M.toast({ html: res.errors.uri.message, classes: 'rounded' });
      } else {
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      }
      this.route.queryParams.subscribe(x => this.getDicogsData(x.page || 1));
    });
    this.resetForm();
  //  console.log(this.title);
  }

 /* getDicogsData() {
    this.disfinder.getDiscogs().subscribe((res) => {
     this.disfinder.discogs = res as Dicogs[];
    });
  } */

  getDicogsData(page) {
   // console.log(page);
  // console.log('inside get');
    this.disfinder.getDiscogs(page).subscribe((res:any) => {
     // console.log(res);
     this.pager = res.pager;
     this.pageOfItems = res.pageOfItems;
    });
  } 

  /* genreFilter(data) {
    this.route.queryParams.subscribe(x =>this.disfinder.searchedGenre(x.page || 1,data.genSearch).subscribe((res:any) => {
      console.log(res);
     this.pager = res.pager;
     this.pageOfItems = res.pageOfItems;
     console.log(this.pager);
    }));
  /*  ((res:any) => {
       console.log(res);
      this.pager = res.pager;
      this.pageOfItems = res.pageOfItems;
      console.log(this.pager);
     }); */
   // console.log(aa);
   // this.disfinder.searchedGenre(data.genSearch).subscribe((res) => {
  //  this.disfinder.discogs = res as Dicogs[];
 //   });
  /*} */

  genreFilter(data,page) {
   // this.filterText = data;
   // this.filterText = 'ska';
   // this.route.queryParams.subscribe(x => x.page || 1);
   //var page = "dfgdf";
  // console.log('inside filter');
   //console.log(page);
   if(data.genSearch) {
  //  console.log('if gensearch');
    this.disfinder.searchedGenre(data.genSearch,page).subscribe((res:any) => {
  //  this.disfinder.discogs = res as Dicogs[];
    this.pager1 = res.pager1;
     this.pageOfItems1 = res.pageOfItems1;
     this.genre1 = res.genre1;
    // console.log(this.genre1);
  }); 
} else {
 // console.log('else');
  this.disfinder.searchedGenre(data,page).subscribe((res:any) => {
    //  this.disfinder.discogs = res as Dicogs[];
      this.pager1 = res.pager1;
       this.pageOfItems1 = res.pageOfItems1;
       this.genre1 = res.genre1;
      });
  }
}

removeFilter() {
 // console.log("remove filter function");
 //this.route.queryParams.subscribe(x => this.getDicogsData(x.page || 1));


 let url: string = this.router.url.substring(0, this.router.url.indexOf("?"));
this.router.navigateByUrl(url);
/* this.router.navigate([], {
  queryParams: {
    style: null,
    pageF: null,
  },
  queryParamsHandling: 'merge'
}) */
}

  onDelete(delItem) {
    this.disfinder.delDiscogs(delItem).subscribe((res) => {
    this.route.queryParams.subscribe(x => this.getDicogsData(x.page || 1));
    });
  }

}


