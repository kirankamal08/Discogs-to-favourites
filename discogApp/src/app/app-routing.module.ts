import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FindRecordComponent } from './find-record/find-record.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'Home',component:FindRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
