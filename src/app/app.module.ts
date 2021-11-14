import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { BottombarComponent } from './components/public/shared/bottombar/bottombar.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { Page404Component } from './page404/page404.component';
import { AddOppointmentAtHomeComponent } from './components/public/opointments-at-home/add-oppointment-at-home/add-oppointment-at-home.component';
import { UsersListComponent } from './components/private/admin/users-list/users-list.component';
import { OppointmentListComponent } from './components/private/admin/oppointment-list/oppointment-list.component';
import { OppointmentAtHomeListComponent } from './components/private/admin/oppointment-at-home-list/oppointment-at-home-list.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { OppointmentAddComponent } from './components/public/oppointment-add/oppointment-add.component';
import { FooterComponent } from './components/private/shared/footer/footer.component';
import { DashboardComponent } from './components/private/admin/dashboard/dashboard.component';
import { AddMessageComponent } from './components/public/add-message/add-message.component';
import { MessageListComponent } from './components/private/admin/message-list/message-list.component';
import { SecretaryAddComponent } from './components/private/admin/secretary/secretary-add/secretary-add.component';
import { SecretaryUpdateComponent } from './components/private/admin/secretary/secretary-update/secretary-update.component';
import { SecretaryListComponent } from './components/private/admin/secretary/secretary-list/secretary-list.component';
import { UsersUpdateComponent } from './components/private/admin/users-update/users-update.component';
import { AddCityComponent } from './components/private/admin/add-city/add-city.component';
import { CityListComponent } from './components/private/admin/city-list/city-list.component';
import { EditAccountComponent } from './components/private/patient/edit-account/edit-account.component';
import { ListComponent } from './components/private/patient/rdvs/list/list.component';
import { OppointmentUpdateComponent } from './components/private/admin/oppointment-update/oppointment-update.component';
import { YourCountComponent } from './components/private/admin/your-count/your-count.component';
import { OurTeamComponent } from './components/private/admin/our-team/our-team.component';
import { WelcomeComponent } from './components/private/patient/welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    BottombarComponent,
    Page404Component,
    AddOppointmentAtHomeComponent,
    UsersListComponent,
    OppointmentListComponent,
    OppointmentAtHomeListComponent,
    TopbarComponent,
    SidebarComponent,
    OppointmentAddComponent,
    FooterComponent,
    DashboardComponent,
    AddMessageComponent,
    MessageListComponent,
    SecretaryAddComponent,
    SecretaryUpdateComponent,
    SecretaryListComponent,
    UsersUpdateComponent,
    AddCityComponent,
    CityListComponent,
    EditAccountComponent,
    ListComponent,
    OppointmentUpdateComponent,
    YourCountComponent,
    OurTeamComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
