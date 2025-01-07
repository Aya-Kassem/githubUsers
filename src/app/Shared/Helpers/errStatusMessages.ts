import { HttpErrorResponse } from '@angular/common/http';

export const errStatus = (error: any): string => {
  console.log(error);

  let msg = '';
  if (error.status === 404) {
    msg = 'No Result Found!';
  } else if (error.status === 442) {
    msg = 'Only First 1000 Results are Available';
  } else if (error.status === 403) {
    msg = 'Github Api Rate Limit Exceeded!, Please try again Later';
  }else{
    msg = 'Something Went Wrong';
  }
  return msg;
};
