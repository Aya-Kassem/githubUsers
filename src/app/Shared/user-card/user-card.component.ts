import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  userName = input<string>();
  userProgile = input<string>();
  // company = input<string>();
  userImage = input<string>();
  // userFollowers = input<string>();
  // userFollowing = input<string>();
  defaultUserImg:string = 'default-profile.png';

}
