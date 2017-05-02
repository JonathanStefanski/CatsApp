import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CatListComponent } from "./cat-list.component";
import { CatBoxComponent } from './cat-box.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cats', component: CatListComponent },      
    ])
  ],
  declarations: [    
    CatListComponent,
    CatBoxComponent   
  ],
  providers: [  
  ]
})
export class CatsModule {}