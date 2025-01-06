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
  userProfile = input<string>();
  userImage = input<string | null>();
  name =  input.required<string>();
  defaultUserImg:string = 'default-profile.png';
  private router = inject(Router);

  getUserDetails(){
    this.router.navigate(['/userProfile', this.name()]);
  }
  
  navigateToUserProfile(clickEvent: Event){
    clickEvent.stopPropagation();
    window.open(this.userProfile());
  }
}
