import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSidebarComponent } from './interview-sidebar.component';

describe('InterviewSidebarComponent', () => {
  let component: InterviewSidebarComponent;
  let fixture: ComponentFixture<InterviewSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
