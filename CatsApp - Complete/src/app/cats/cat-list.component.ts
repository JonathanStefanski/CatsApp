import { Component, OnInit } from '@angular/core';
import { CatService } from "./cat.service";
import { Observable } from "rxjs/Rx";
import { Cat } from "./cat.model";

@Component({
    moduleId: module.id,    
    templateUrl: 'cat-list.component.html',
    styleUrls: ['cat-list.component.css'],
    providers: [ CatService ]
})
export class CatListComponent implements OnInit {
    cats : Cat[];
    cat : Cat;
    error : string;
    constructor(private _catService: CatService) { }

    ngOnInit() {
        this._catService.getCats_RxObservable().subscribe(
            cats => this.cats = cats,
            error => {
                this.error = "Something went wrong while fetching the cats, please check the console log"; 
                console.log(error);}
        )        
        // this._catService.getCats_ByPromise().then(
        //     (cats) => this.cats = cats,
        //     (err) => {
        //         this.error = "Oops, seems like there was an issue fetching the cats from our database";
        //         console.log(err);                
        //     }
        // )
    }

    hover(cat: Cat) {        
        this.cat = cat;
    }

    kill(id:number) {
        this._catService.killKitty(id).subscribe(
            response => {console.log(response); this.ngOnInit();},
            error => console.log(error)
        )
    }



}
