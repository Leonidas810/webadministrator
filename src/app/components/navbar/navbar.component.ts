import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginModalComponent } from "./components/login-modal/login-modal.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [RouterOutlet, RouterLink, LoginModalComponent]
})

export class NavbarComponent {

}
