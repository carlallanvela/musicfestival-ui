import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecordLabelsComponent } from './list-recordlabels/list-recordlabels.component';

// Web Application Routes
const routes: Routes = [
  { path: '', component: ListRecordLabelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
