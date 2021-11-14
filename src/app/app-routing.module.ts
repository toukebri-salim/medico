import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AddOppointmentAtHomeComponent } from './components/public/opointments-at-home/add-oppointment-at-home/add-oppointment-at-home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './page404/page404.component';
import { UsersListComponent } from './components/private/admin/users-list/users-list.component';
import { OppointmentListComponent } from './components/private/admin/oppointment-list/oppointment-list.component';
import { MessageListComponent } from './components/private/admin/message-list/message-list.component';
import { DashboardComponent } from './components/private/admin/dashboard/dashboard.component';
import { CityListComponent } from './components/private/admin/city-list/city-list.component';
import { AddCityComponent } from './components/private/admin/add-city/add-city.component';
import { EditAccountComponent } from './components/private/patient/edit-account/edit-account.component';
import { OppointmentUpdateComponent } from './components/private/admin/oppointment-update/oppointment-update.component';
import { OppointmentAddComponent } from './components/public/oppointment-add/oppointment-add.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ListComponent } from './components/private/patient/rdvs/list/list.component';
import { SecretaryAddComponent } from './components/private/admin/secretary/secretary-add/secretary-add.component';
import { OppointmentAtHomeListComponent } from './components/private/admin/oppointment-at-home-list/oppointment-at-home-list.component';
import { YourCountComponent } from './components/private/admin/your-count/your-count.component';
import { OurTeamComponent } from './components/private/admin/our-team/our-team.component';
import { WelcomeComponent } from './components/private/patient/welcome/welcome.component';
import { SecretaryGuard } from './guards/secretary.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'add-oppointment-at-home',
    component: AddOppointmentAtHomeComponent
  },
 

  {
    path: "admin",
    children: [

      {
        path: "users",
        children: [
          {
            path: "list",
            component: UsersListComponent,
          },
        ]
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },

      {
        path: "oppointment-at-home",
        children: [
          {
            path: "list",
            component: OppointmentAtHomeListComponent,

          },
          
        ]
      
      },
      {
        path: "edit-account/:id",
        component: EditAccountComponent
      },

      {
        path: "message",
        children: [
          {
            path: "list",
            component: MessageListComponent,

          },
        ]
      
      },
      {
        path: "country",
        children: [
          {
            path: "list",
            component: CityListComponent,
          },
          {
            path: "add",
            component: AddCityComponent,
          },
        ]
      },
      {
        path:"team",
        component:OurTeamComponent
        },
      {
        path:"secretary",
        component:SecretaryAddComponent
        },

        {
          path:"count",
          component:YourCountComponent
          },
      {
        path: "oppointment",
        children: [
          {
            path: "list",
            component: OppointmentListComponent
          },
          {
            path: "update/:id",
            component: OppointmentUpdateComponent
          },
        ],
      },
    ],
    canActivateChild: [AdminGuard]
  },


  {
    path: "oppointment",
    children: [
      {
        path: "add",
        component: OppointmentAddComponent,
        canActivate:[AuthGuard]
      }
    
  ]
},

  {
    path: "patient",
    children: [
      {
        path: "edit-account/:id",
        component: EditAccountComponent
      },
      {
        path: "list/:id",
        component: ListComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      ]
  },

  {
    path: "**",
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
