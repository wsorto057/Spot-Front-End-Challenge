import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { ItunesService } from '../../services/itunes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  nuevasCanciones: any[] = []; 
  loading: boolean;

  constructor( private itunes: ItunesService ) { 

    this.loading = true;  

    this.itunes.getNewReleases()
    .subscribe( (data: any) => {
     // console.log(data);
     this.nuevasCanciones = data      //data.feed.entry;
     this.loading = false;
    });
   




  }
}
