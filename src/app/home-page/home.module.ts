import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogCreateComponent } from './dialog-create/dialog-create.component';
const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent, DialogCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
  exports: [RouterModule, SharedModule],
  providers: [MatDialog],
})
export class homeModule {}
