import { Component, OnDestroy, OnInit } from '@angular/core';

import { Hookable } from '@orxe-sdk/hooks';

@Component({
    selector: 'app-my-search',
    templateUrl: './my-search.component.html',
    styleUrls: ['./my-search.component.scss']
})
@Hookable({
    selector: 'app-my-search',
    hooks: ['ngOnInit', 'getResults']
})
export class MySearchComponent implements OnInit {
    results: any[];
    constructor() {}

    ngOnInit() {
        console.log('Initing....');
        alert('Inited');
    }

    getResults() {
        console.log('Results...');
        alert('Results Called!');
        return [
            {
                id: 1,
                name: 'A'
            },
            {
                id: 2,
                name: 'B'
            },
            {
                id: 3,
                name: 'C'
            },
            {
                id: 4,
                name: 'D'
            }
        ];
    }
}
