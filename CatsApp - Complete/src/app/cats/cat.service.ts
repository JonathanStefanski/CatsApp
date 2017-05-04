import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Cat } from "./cat.model";

// const URL_CATS = 'http://localhost:56079/api/Cats';
// const URL_CATS = 'assets/data/cats.json';
const URL_CATS = 'api/cats';

@Injectable()
export class CatService {   

    constructor(private _http: Http) { }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    getCats_ByPromise() : Promise<Cat[]> {
        return this._http.get(URL_CATS)
            .map(this.extractData)
            .toPromise()
            .catch((err: any) => {
                console.log(err);
                return Promise.reject(err);
            });
    }

    getCats_RxObservable() : Observable<Cat[]> {
        return this._http.get(URL_CATS)
            .do((response: Response) => console.log(response))
            .map(this.extractData)
            .catch(this._handleError);
    }

    _handleError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }

    updateKitty(id:number, cat: Cat) : Observable<Response> {
        return this._http.put(`${URL_CATS}/${id}`, cat)
            .map((response: Response) => <Response> response.json())
            .catch(this._handleError);        
    }

    saveKitty(cat: Cat) : Observable<Response> {
        return this._http.post(URL_CATS, cat)
            .map((response: Response) => <Response> response.json())
            .catch(this._handleError);        
    }

    killKitty(id: number) : Observable<Response> {
        return this._http.delete(`${URL_CATS}/${id}`)
            .map((response: Response) => <Response> response.json())
            .catch(this._handleError);    
    }

}
