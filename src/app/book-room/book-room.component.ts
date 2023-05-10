import {Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements  OnInit{

  @Input()
  selectedRoomName: string | undefined;

  @Input()
  selectedName: string | undefined;

  onClick() {

  }

  ngOnInit(): void {
    console.log(this.selectedName);
  }
}
