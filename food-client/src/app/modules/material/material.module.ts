import { NgModule } from '@angular/core';
import {MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatCardModule,
  MatExpansionModule,
  MatMenuModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatChipsModule} from '@angular/material';

const modules = [MatIconModule, MatSidenavModule, MatListModule,
  MatButtonModule, MatSlideToggleModule, MatCardModule,
  MatExpansionModule, MatMenuModule, MatTabsModule,
  MatProgressSpinnerModule, MatDialogModule, MatInputModule, MatToolbarModule, MatChipsModule];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialModule { }
