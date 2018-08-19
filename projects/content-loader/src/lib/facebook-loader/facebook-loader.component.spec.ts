import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLoaderComponent } from './facebook-loader.component';

describe('FacebookLoaderComponent', () => {
  let component: FacebookLoaderComponent;
  let fixture: ComponentFixture<FacebookLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
