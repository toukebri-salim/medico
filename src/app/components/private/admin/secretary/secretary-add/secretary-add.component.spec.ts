import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryAddComponent } from './secretary-add.component';

describe('SecretaryAddComponent', () => {
  let component: SecretaryAddComponent;
  let fixture: ComponentFixture<SecretaryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
