import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Cat } from "./cat.model";

@Component({
    moduleId: module.id,    
    templateUrl: 'cat-list.component.html',
    styleUrls: ['cat-list.component.css']
})
export class CatListComponent {
    cats: Cat[] = [
        {
            "id": 1,
            "name": "Snuggles",
            "imageUrl": "",
            "owner": "JS"
        },
        {
            "id": 2,
            "name": "Mr. Bigglesworth",
            "imageUrl": "",
            "owner": "JS"
        },
        {
            "id": 3,
            "name": "Snowball",
            "imageUrl": "",
            "owner": "JS"
        }
    ];
    cat : Cat;

    constructor() { }
    

    hover(cat: Cat) {        
        this.cat = cat;
    }

    kill(id:number) {
        console.log("killing kitty " + id);
    }



}
