import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { ChangeSpinnerVisability } from './Shared/Store/spinner/spinner.actions';
import { ErrorToasterComponent } from './Shared/error-toaster/error-toaster.component';
import { ShowErrorService } from './Shared/Helpers/error.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AsyncPipe, SpinnerComponent, ErrorToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// RouterOutlet,
export class AppComponent {
  title = 'gitHubUserSearch';
  private appStore = inject(Store<{ ChangeSpinnerVisability: boolean }>);
  showSpinner$ = this.appStore.select('ChangeSpinnerVisability');
 
  ngOnInit(){
    setTimeout(() => {
      this.changeSpinnerVisibility(false);
    }, 500);
  }

  changeSpinnerVisibility(val: boolean) {
    this.appStore.dispatch(ChangeSpinnerVisability({ isVisiable: val }));
  }
}
