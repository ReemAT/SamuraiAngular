import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiListComponent } from './samurai-list.component';

describe('SamuraiListComponent', () => {
  let component: SamuraiListComponent;
  let fixture: ComponentFixture<SamuraiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamuraiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
