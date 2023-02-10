import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorage } from "src/app/core/services/token-storage.service";
const AUTH_API = "http://localhost:8080";

@Injectable({
  providedIn: "root",
})
export class OppositionserviceService {
  constructor(private http: HttpClient, public token: TokenStorage) {}

  fetchCessionPers(params: any) {
    return this.http.post<any[]>(
      AUTH_API + "/api/auth/cessionPersLigPret",
      params
    );
  }

  fetchListCodPret(codSoc: any, matPers: any) {
    return this.http.get<any[]>(
      "http://localhost:8080" +
        "/api/auth/getlistpretpers/" +
        codSoc +
        "/" +
        matPers
    );
  }

  fetchgetlpret(params: any) {
    return this.http.post<any[]>(AUTH_API + "/api/auth/getlpret", params);
  }

  bultSoinDet(s:any){

    return this.http.post<any[]>('http://localhost:8080/bultSoin/bsoindet',s);

   }
   
}
