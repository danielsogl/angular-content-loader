import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletListLoaderComponent } from './bullet-list-loader.component';

describe('BulletListLoaderComponent', () => {
  let component: BulletListLoaderComponent;
  let fixture: ComponentFixture<BulletListLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletListLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletListLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
