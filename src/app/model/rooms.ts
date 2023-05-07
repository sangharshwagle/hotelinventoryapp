export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
  roomsDetail: RoomDetail[];
}

export interface RoomDetail {
  name: string,
  price: number,
  checkInAvailableDate: Date,

}
