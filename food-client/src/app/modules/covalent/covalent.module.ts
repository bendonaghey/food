import { NgModule } from '@angular/core';
import {
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentLoadingModule,
  CovalentMessageModule,
  CovalentExpansionPanelModule,
  CovalentNotificationsModule,
  CovalentSearchModule,
  CovalentFileModule
} from '@covalent/core';

const modules = [
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentLoadingModule,
  CovalentMessageModule,
  CovalentExpansionPanelModule,
  CovalentNotificationsModule,
  CovalentSearchModule,
  CovalentFileModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CovalentModule {}
