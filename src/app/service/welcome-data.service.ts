import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class WelcomeBean{
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {
  constructor(private httpClient: HttpClient) { }

  welcomeMessage(name:string):Observable<any>{
    console.log(name);
    return this.httpClient.get<WelcomeBean>(`http://localhost:8080/path-variable/${name}`); //custom request
    // return this.httpClient.get<WelcomeBean>(`http://localhost:8080`); // generic request
  // when u define the generic type, the compiler infer the class fields w/ response fields, to assemble it. 
  }

}
