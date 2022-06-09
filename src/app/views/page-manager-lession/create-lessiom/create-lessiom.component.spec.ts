import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLessiomComponent } from './create-lessiom.component';

describe('CreateLessiomComponent', () => {
  let component: CreateLessiomComponent;
  let fixture: ComponentFixture<CreateLessiomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLessiomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLessiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
