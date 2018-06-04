import {NgModule} from '@angular/core';
import {CovalentLayoutModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentLoadingModule,
  CovalentMessageModule,
  CovalentExpansionPanelModule,
  CovalentNotificationsModule,
  CovalentSearchModule
} from '@covalent/core';

const modules = [CovalentLayoutModule, CovalentMediaModule, CovalentMenuModule,
  CovalentLoadingModule, CovalentMessageModule, CovalentExpansionPanelModule,
  CovalentNotificationsModule, CovalentSearchModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class CovalentModule {
}