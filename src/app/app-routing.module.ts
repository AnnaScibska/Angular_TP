import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeValueComponent } from './change-value/change-value.component';
import { SmartComponent } from './smart/smart.component';


const routes: Routes = [
  {
    path: 'value', component: ChangeValueComponent
  },
  {
    path: '', component: SmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
