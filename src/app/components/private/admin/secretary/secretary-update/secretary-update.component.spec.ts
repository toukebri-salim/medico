import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryUpdateComponent } from './secretary-update.component';

describe('SecretaryUpdateComponent', () => {
  let component: SecretaryUpdateComponent;
  let fixture: ComponentFixture<SecretaryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
