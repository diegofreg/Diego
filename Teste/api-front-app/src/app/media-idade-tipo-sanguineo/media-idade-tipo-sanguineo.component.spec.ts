import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIdadeTipoSanguineoComponent } from './media-idade-tipo-sanguineo.component';

describe('MediaIdadeTipoSanguineoComponent', () => {
  let component: MediaIdadeTipoSanguineoComponent;
  let fixture: ComponentFixture<MediaIdadeTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaIdadeTipoSanguineoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaIdadeTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
