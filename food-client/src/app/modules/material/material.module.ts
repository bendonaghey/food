import { NgModule } from '@angular/core';
import {
  MatIconModule,
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
  MatFormFieldModule
} from '@angular/material';

const modules = [
  MatIconModule,
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
  MatFormFieldModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialModule {}
