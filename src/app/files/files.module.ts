import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { FilesListComponent } from './files-list/files-list.component';
import { FilesComponent } from './files/files.component';
import { FilesRoutingModule } from './files-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FilesComponent, UploadComponent, DownloadComponent, FilesListComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    SharedModule
  ]
})
export class FilesModule { }
