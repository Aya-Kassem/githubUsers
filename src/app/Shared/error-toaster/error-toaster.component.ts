import { Component, inject, input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BehaviorSubject } from 'rxjs';
import { ShowErrorService } from '../Helpers/error.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-error-toaster',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './error-toaster.component.html',
  styleUrl: './error-toaster.component.scss',
})
export class ErrorToasterComponent {
  private msgService = inject(MessageService);
  private errService = inject(ShowErrorService);
  constructor() {
    this.checkIfErrExist();
  }

  show(message: string) {
    this.msgService.add({
      severity: 'error',
      summary: message,
      life: 2000,
    });
  }

  checkIfErrExist() {
    this.errService.errorMsg$.pipe(takeUntilDestroyed()).subscribe((msg) => {
      if (msg) this.show(msg);
    });
  }

  removeErrorMsg(){
    this.errService.errorMsg$.next('');
  }
}
