import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor( private http: HttpClient) { }

  getQuery(query: string){
     const url=`https://itunes.apple.com/${ query }`;

     return this.http.get(url);
  }

  getNewReleases() {
  
    // return this.http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    // .pipe( map( data=> data['feed'].entry ));

   return this.getQuery('us/rss/topalbums/limit=100/json')
              .pipe( map( data=> data['feed'].entry ));
                         
  }


  getArtista(termino: string)
  {
    // return this.http.get( `https://itunes.apple.com/search?term=${termino}`)
    //         .pipe( map( data => data['results'] ));

    return this.getQuery(`search?term=${termino}`)
              .pipe( map( data => data['results'] ));
  }

}
