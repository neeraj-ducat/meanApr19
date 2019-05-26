import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from 'ngx-alerts';
import { FileUploaderModule } from "ng4-file-upload";
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AlertModule,
    FileUploaderModule
  ],
  exports: [ FileUploaderModule, HeaderComponent, FooterComponent]
})
export class SharedModule { }
