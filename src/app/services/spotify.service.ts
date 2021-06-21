import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) { 
    console.log("Spotify Service Listo!");
  }


  getQuery(query:string){
    const url:string = `https://api.spotify.com/v1/${query}`;
  
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQBRGJviWyIyM3xcaRUidhYJjnLEUidgNXZ4ojQ0BHDp8HVO2drEBtwztZ5B6oAyhZVSzDuLq0mjoc2bQKM',
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

     return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data:any)=>{
        return data.albums.items;
      }));
  }

  getArtistas(termino:string):any{
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data:any)=>{
        return data.artists.items;
      }));
  }

  getArtista(id:string):any{
    
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string):any{
    
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
    .pipe(map((data:any)=>{
      return data['tracks'];
    }));
  }

}
