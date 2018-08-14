import { Component } from '@angular/core';
import { ItunesService } from '../../services/itunes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

    artistas: any[] = [];
    loading: boolean;
  constructor(private itunes: ItunesService) { }

  buscar(termino: string)
  {
    //console.log(termino);
    this.loading = true;
    this.itunes.getArtista( termino )
        .subscribe( (data: any) => {
           // console.log( data );
            this.artistas = data;
            this.loading = false;
        });
  }


}
