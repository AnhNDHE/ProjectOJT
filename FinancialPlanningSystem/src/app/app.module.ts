import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermManagementComponent } from './term-management/term-management.component';
import { CreateTermComponent } from './create-term/create-term.component';
import { TermDetailsComponent } from './term-details/term-details.component';
import { EditTermComponent } from './edit-term/edit-term.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmStartTermComponent } from './message/confirm-start-term/confirm-start-term.component';
import { ConfirmDeleteTermComponent } from './message/confirm-delete-term/confirm-delete-term.component';

@NgModule({
  declarations: [
    AppComponent,
    TermManagementComponent,
    CreateTermComponent,
    TermDetailsComponent,
    EditTermComponent,
    ConfirmStartTermComponent,
    ConfirmDeleteTermComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
