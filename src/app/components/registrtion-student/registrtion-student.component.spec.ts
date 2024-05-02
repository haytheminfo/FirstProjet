import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrtionStudentComponent } from './registrtion-student.component';

describe('RegistrtionStudentComponent', () => {
  let component: RegistrtionStudentComponent;
  let fixture: ComponentFixture<RegistrtionStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrtionStudentComponent]
    });
    fixture = TestBed.createComponent(RegistrtionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
