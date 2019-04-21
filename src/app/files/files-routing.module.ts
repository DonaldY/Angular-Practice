import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { UploadComponent } from './upload/upload.component';
import { FilesListComponent } from './files-list/files-list.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  {
    path: '',
    component: FilesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: FilesListComponent,
        data: {  }
      },
      {
        path: 'upload',
        component: UploadComponent,
        data: {  }
      },
      {
        path: 'download',
        component: DownloadComponent,
        data: {  }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
