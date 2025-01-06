import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsersComponent } from './Core/Components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// RouterOutlet, 
export class AppComponent {
  title = 'gitHubUserSearch';
}
