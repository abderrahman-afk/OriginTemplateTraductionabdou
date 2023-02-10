import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcheanceContratService {

 
  constructor(private http: HttpClient) { }

  getContrat (){

    return this.http.get<any[]>('http://localhost:8080/contrat/getcontrat')
  
    
   }
   getListContrat (date1:any,date2:any){

    return this.http.get<any[]>('http://localhost:8080/contrat/getlistcontrat/'+date1+'/'+date2)
  
    
   }
}
