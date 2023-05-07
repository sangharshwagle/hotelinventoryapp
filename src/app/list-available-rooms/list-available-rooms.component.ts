import {Component, Input} from '@angular/core';
import {Rooms} from '../model/rooms';

@Component({
  selector: 'app-list-available-rooms',
  templateUrl: './list-available-rooms.component.html',
  styleUrls: ['./list-available-rooms.component.css']
})
export class ListAvailableRoomsComponent {
  @Input()
  rooms: any;
}
