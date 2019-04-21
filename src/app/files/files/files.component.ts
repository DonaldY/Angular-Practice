import { Component, OnInit } from '@angular/core';
import { routeAnimations } from 'src/app/core/animations/route-animations';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  animations: [routeAnimations],
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
