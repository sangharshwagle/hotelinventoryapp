import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RoomDetail, Rooms} from '../model/rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnChanges {

  roomsDetailList: RoomDetail[];
  rooms: Rooms;
  isRoomSelected: boolean = false;
  selectedRoomName: string | undefined;

  constructor() {
    this.roomsDetailList = [
      {name: 'Standard', price: 1000, checkInAvailableDate: new Date(2023, 12, 1)},
      {name: 'Premium', price: 2000, checkInAvailableDate: new Date(2023, 12, 10)},
      {name: 'VIP', price: 3000, checkInAvailableDate: new Date(2023, 12, 11)},
    ]
    this.rooms = {
      totalRooms: 30,
      availableRooms: 10,
      bookedRooms: 10,
      roomsDetail: this.roomsDetailList
    }
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  selectedRoom(roomDetail: RoomDetail) {
    this.isRoomSelected = true;
    this.selectedRoomName = roomDetail.name;
  }
}
