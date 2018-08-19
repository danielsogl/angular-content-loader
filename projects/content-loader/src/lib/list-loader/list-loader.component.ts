import { Component } from '@angular/core';

import { ContentLoaderComponent } from '../content-loader/content-loader.component';

@Component({
  selector: 'list-content-loader',
  templateUrl: './list-loader.component.html'
})
export class ListLoaderComponent extends ContentLoaderComponent {}
