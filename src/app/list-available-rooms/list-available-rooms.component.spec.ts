import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableRoomsComponent } from './list-available-rooms.component';

describe('AvailableRoomsComponent', () => {
  let component: ListAvailableRoomsComponent;
  let fixture: ComponentFixture<ListAvailableRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailableRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvailableRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
