import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfItemComponent } from './pdf-item.component';

describe('PdfItemComponent', () => {
  let component: PdfItemComponent;
  let fixture: ComponentFixture<PdfItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
