import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AvailableRoomsComponent } from './available-rooms/available-rooms.component';
import { BookRoomComponent } from './book-room/book-room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    AvailableRoomsComponent,
    BookRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
