import { Component } from '@angular/core';
import { DashboardCardComponent } from "./components/dashboard-card/dashboard-card.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [DashboardCardComponent]
})
export class DashboardComponent {

}
