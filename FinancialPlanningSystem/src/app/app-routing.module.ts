import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermManagementComponent } from './term-management/term-management.component';
import { CreateTermComponent } from './create-term/create-term.component';
import { TermDetailsComponent } from './term-details/term-details.component';
import { EditTermComponent } from './edit-term/edit-term.component';

const routes: Routes = [
  { path: '', redirectTo: '/term-management', pathMatch: 'full' }, 
  { path: 'term-management', component: TermManagementComponent },
  { path: 'create-term', component: CreateTermComponent },
  { path: 'term-details', component: TermDetailsComponent },
  { path: 'edit-term', component: EditTermComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
