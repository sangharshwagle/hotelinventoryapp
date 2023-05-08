import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RoomDetail, Rooms} from '../model/rooms';

@Component({
  selector: 'app-list-available-rooms',
  templateUrl: './list-available-rooms.component.html',
  styleUrls: ['./list-available-rooms.component.css']
})
export class ListAvailableRoomsComponent {
  @Input()
  rooms: any;

  @Output()
  selectedRoom = new EventEmitter<RoomDetail> ();


  onClick(roomDetail: RoomDetail) {
    this.selectedRoom.emit(roomDetail);
  }
}
