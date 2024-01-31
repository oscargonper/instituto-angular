import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosuperiorComponent } from './gradosuperior.component';

describe('GradosuperiorComponent', () => {
  let component: GradosuperiorComponent;
  let fixture: ComponentFixture<GradosuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradosuperiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradosuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
