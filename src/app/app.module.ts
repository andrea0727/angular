import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from './json.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, JsonPipe ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }

