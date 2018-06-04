import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import { MovieFilterPipe} from './filters/moviefilter';
import {MovieService} from './services/movie.service';
import { PaymentComponent } from './components/payment/payment.component';
const appRoutes:Routes =[
  {path:'',component: LandingComponent},
  {path:'theatre/:moviename',component: TheatreComponent},
  {path:'payment',component: PaymentComponent}
   ]


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    RegisterComponent,
    TheatreComponent,
    MovieFilterPipe,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DialogModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
