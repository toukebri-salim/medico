import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCountComponent } from './your-count.component';

describe('YourCountComponent', () => {
  let component: YourCountComponent;
  let fixture: ComponentFixture<YourCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
