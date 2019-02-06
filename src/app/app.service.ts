
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';
// import { throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class BlogsService {

//   serverUrl = 'http://www.example.com/';

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   constructor(private http: HttpClient) { }

//   getBlogPosts() {
//     return this.http.get<Blogpost[]>(this.serverUrl + 'blogs/posts')
//     .pipe(
//       catchError(this.handleError)
//     );
//   }

//   createPost (blogpost: Blogpost) {
//     return this.http.post<Blogpost>(this.serverUrl + 'blogs/createPost', blogpost, this.httpOptions)
//     .pipe(
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
//     }
//     // return an observable with a user-facing error message
//     return throwError('Something bad happened; please try again later.');
//   }


//   /** service for post api*/
//   getData(data){
//       return this.http.post(apiUrl , data)
//   }
// }
