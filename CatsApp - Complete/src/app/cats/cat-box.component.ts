import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cat } from "./cat.model";

@Component({
    moduleId: module.id,
    selector: 'app-cat',
    templateUrl: 'cat-box.component.html',
    styleUrls: ['cat-box.component.css']
})
export class CatBoxComponent implements OnInit {
    @Input() cat: Cat;
    @Output() hover = new EventEmitter<Cat>();
    @Output() delete = new EventEmitter<number>();
    myColor = 'blue';
    constructor() { }

    ngOnInit() { 
        
    }   

    onmouseover(cat?: Cat){        
        this.hover.emit(cat);
    }

    ondelete(id: number) {
        this.delete.emit(id);
    }
}