import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { SERVER_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url = SERVER_URL+'api/';
  // url = "";
  options: { headers: HttpHeaders; };
  options1: { headers: HttpHeaders; };
  constructor(public http: HttpClient) {
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    this.options = {
      headers: headers
    };
  }
  getOptions(){
    const headers1 = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')});
    this.options1 = {
      headers: headers1
    };
    return this.options1;
  }
  getOptions1(){
    const headers1 = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    this.options1 = {
      headers: headers1
    };
    return this.options1;
  }
  login(data) {
    // return this.http.post(this.url + "login",data,this.options);
    let url = SERVER_URL+"login"//http://9bef46478aa2.ngrok.io/mimobi/public/api/login
    return this.http.post(url,data,this.options);
  }  

  
  register(data) {
    //return this.http.post(this.url + "register",data,this.options);
    // let url = SERVER_URL+"register"
    // return this.http.post(url,data,this.options);
    // http://qa1.gobablr.com:3500/
    return this.http.post('http://0a6ce017e42d.ngrok.io/mimobi/public/api/login', data)
    // .map(response => response.json())
    // .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
  savephoto(data){
    // return this.http.post(this.url + "savephoto",data,this.getOptions1())
    let url = SERVER_URL+"upload_photo"
    return this.http.post(url,data,this.getOptions1());
  }
  getphotoofDay(){
    // return this.http.post(this.url + "photo_of_day",data,this.getOptions());
    let url = SERVER_URL+"photo_of_day"
    return this.http.get(url,this.options);
  }
  getAssignedofDay(data){
    // return this.http.post(this.url + "assigned_photo",data,this.getOptions());
    let url = SERVER_URL+"assigned_photo"
    return this.http.post(url,data,this.getOptions());
  }
}
// {
//   "status": "ok",
//   "status_code": "200",
//   "message": "registration_success",
//   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MWNlYTQxNi05MmQ1LTQwYWYtYTVkNy1mZjlmYWQwNDc3MzQiLCJqdGkiOiJlYzY3NDJhYzM0NDZkMmQ3Y2NmNTgwOGZjYjUyMGQyZTlhYTQ4ODkzNGY0YTFlY2EyM2NmYTFhNDBiZmNhNTRlNTQxNTk2NGMzM2EzYTQwNyIsImlhdCI6MTYwMzc5NTUwMiwibmJmIjoxNjAzNzk1NTAyLCJleHAiOjE2MzUzMzE1MDIsInN1YiI6IjI5Iiwic2NvcGVzIjpbXX0.uYzMEHY-MpRFgDB49d2Pyj4JzVy9gibuAMBx2RWKCWcinaPXE-WBzEF51u5VRzX4uxoXhiqpqYfIbgACfkgwRWiY-4Hf5UY1mL6mv_ykDu2U6Tweh6maGMewIwYPHnkOxTr8IF9zJIq70l2V8UDY4_HSTH68igXW9Kh3la1ofO8V8aUg4siPJMZFn9fBaxgYaiQmmtBrIFb7xuOWBGBW2_BfJREoZy0Zh0HzSqvGkJiJr86wf0CJ-FPXVAZ_-yuvhIdl4sF95v_qG_StlSv8AoTz3zXD9vR0wQJMwdnzXAMuzHujEc6ZtyYrFRXYkNZtl7RefRxVEBxcNeUJ0eeVt4NULB_Tph7p6JmGt4zozbykrkBiwWfrm5eJPSWrlur1R7Mx6Jx33tHdQxSRnVTsPdCBX-ysutwY437OpgWQnwmi8Et5DeTfa0cSSwRkGjsXrUlLOonp5S4J0Q6X_ovWO17SebTQOgY6Ty9nFNPQhsIuZNCM1y4gpz1ZJUErs2qZOsb3PvpGnKoLE1QbVFNFwrtpQBNf5rgVQp3-HOgOlt5AJtr-ZRF_c17FqQPiFtpUi3mCCHEnuLEgUohqPe096t7ZCUseaOwJNxpjgEj95fTQNisbQDvZDfjWlQiYAonKtCbZcjdWeTIj13NsaqFmaZbsTjMzjFiDtdEsAxjgREU",
//   "data": []
// }