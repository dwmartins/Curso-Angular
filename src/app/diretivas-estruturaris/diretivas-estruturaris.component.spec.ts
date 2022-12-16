import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasEstruturarisComponent } from './diretivas-estruturaris.component';

describe('DiretivasEstruturarisComponent', () => {
  let component: DiretivasEstruturarisComponent;
  let fixture: ComponentFixture<DiretivasEstruturarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasEstruturarisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasEstruturarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
