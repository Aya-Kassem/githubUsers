import { Component, computed, inject, input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  userName = input<string>();
  userProgile = input<string>();
  // company = input<string>();
  userImage = input<string>();
  userId =  input.required<number>();
  // userFollowers = input<string>();
  // userFollowing = input<string>();
  defaultUserImg:string = 'default-profile.png';
  private router = inject(Router);

  getUserDetails(id: number){
    // this.router.navigate([''])
  }
  
  navigateToUserProfile(clickEvent: Event){
    clickEvent.stopPropagation();
    window.open(this.userProgile());
  }
}
