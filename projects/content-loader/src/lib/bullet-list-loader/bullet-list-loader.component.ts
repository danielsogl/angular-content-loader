import { Component } from '@angular/core';

import { ContentLoaderComponent } from '../content-loader/content-loader.component';

@Component({
  selector: 'bullet-list-content-loader',
  templateUrl: './bullet-list-loader.component.html'
})
export class BulletListLoaderComponent extends ContentLoaderComponent {}
