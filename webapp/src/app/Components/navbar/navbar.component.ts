import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  // If this function triggered, clear current user resource in localStorage and go back the login page
  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout:3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}

