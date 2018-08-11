import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

import { TreeMainguyComponent } from './components/branch-mainguy/tree-mainguy.component';
import {TreeMaillotComponent} from './components/branch-maillot/tree-maillot.component';
import {TreeBartheComponent} from './components/branch-barthe/tree-barthe.component';
import {TreeArnaudComponent} from './components/branch-arnaud/tree-arnaud.component';
import {DescriptionsService} from './services/descriptions.service';

@NgModule({
  declarations: [
    AppComponent,
      TreeMainguyComponent,
      TreeMaillotComponent,
      TreeBartheComponent,
      TreeArnaudComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDUTrlG_4B2gIFjcb7kYMwYVUdju9UAxd0'
    })
  ],
  providers: [DescriptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
