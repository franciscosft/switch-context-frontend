import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { ChangerContextComponent } from './changer-context/changer-context.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SwitchContextReportComponent } from './switch-context-report/switch-context-report.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    ChangerContextComponent,
    NavBarComponent,
    SwitchContextReportComponent,
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'switch-context'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
