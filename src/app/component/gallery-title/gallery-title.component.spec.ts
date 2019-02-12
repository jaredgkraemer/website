import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTitleComponent } from './gallery-title.component';

describe('GalleryTitleComponent', () => {
  let component: GalleryTitleComponent;
  let fixture: ComponentFixture<GalleryTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
