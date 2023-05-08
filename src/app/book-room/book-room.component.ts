import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent {

  @Input()
  selectedRoomName: string | undefined;

  onClick() {

  }
}
