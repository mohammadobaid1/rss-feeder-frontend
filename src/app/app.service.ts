import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }




  getinternationnesrssfeed(){
  	const params = new HttpParams()
    .set('rssurl', 'http://feeds.bbci.co.uk/news/rss.xml');

  	return this.http.get("http://localhost:3000/rssconverter",{params});

  }


  getlocalnewsfeed(){

  	const params = new HttpParams()
    .set('rssurl', 'https://www.thenews.com.pk/rss/1/1');

  	return this.http.get("http://localhost:3000/rssconverter",{params});

  }


  getsportsnewsfeed(){

  	 	const params = new HttpParams()
   		 .set('rssurl', 'https://www.espn.com/espn/rss/news');


  	 	 	return this.http.get("http://localhost:3000/rssconverter",{params});

  }


  gettechnewsfeed(){

  	 	const params = new HttpParams()
   		 .set('rssurl', 'https://www.wired.com/feed/rss');


  	return this.http.get("http://localhost:3000/rssconverter",{params});



  }


}
