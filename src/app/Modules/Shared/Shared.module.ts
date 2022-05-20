import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatTabsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedModule {}
