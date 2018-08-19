import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BulletListLoaderComponent } from './bullet-list-loader/bullet-list-loader.component';
import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { FacebookLoaderComponent } from './facebook-loader/facebook-loader.component';
import { ListLoaderComponent } from './list-loader/list-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContentLoaderComponent,
    BulletListLoaderComponent,
    FacebookLoaderComponent,
    ListLoaderComponent
  ],
  exports: [
    ContentLoaderComponent,
    BulletListLoaderComponent,
    FacebookLoaderComponent,
    ListLoaderComponent
  ]
})
export class ContentLoaderModule {}
