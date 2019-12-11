import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  internationalnewsrssfeed : any;
  internationalnewsrssmodel : any;

    localnewsrssfeed : any;
  	localnewsrssmodel : any;

  	sportsnewsrssfeed :  any;
  	sportsnewsrssmodel : any;	

  	technewsrssfeed : any;
  	technewsrssmodel : any;


  constructor(private httpsv: AppService){}

  ngOnInit(){
 

   this.gatherrssfeed();
   setInterval(() => {
                this.gatherrssfeed(); 
                }, 5000);



  }


  gatherrssfeed(){
 	this.httpsv.getinternationnesrssfeed()
  		.subscribe(data=>{

  			this.internationalnewsrssfeed = data;
  			this.internationalnewsrssmodel= this.internationalnewsrssfeed.items ;

  			console.log(this.internationalnewsrssmodel);
 

  		});

   this.httpsv.getlocalnewsfeed()
   		.subscribe(data=>{
   			console.log("local news feed",data);
   			this.localnewsrssfeed = data;
   			this.localnewsrssmodel = this.localnewsrssfeed.items;

   		});	


   	   this.httpsv.getsportsnewsfeed()
   		.subscribe(data=>{

   			console.log("sports news feed",data);

   			this.sportsnewsrssfeed = data;
   			this.sportsnewsrssmodel = this.sportsnewsrssfeed.items;

   		});	


   	   this.httpsv.gettechnewsfeed()
   		.subscribe(data=>{

   			console.log("tech news feed",data);

   			this.technewsrssfeed = data;
   			this.technewsrssmodel = this.technewsrssfeed.items;

   		});	

  }



}
