import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { Cat } from './cat.model';

export class CatData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let cats: Cat[] = [
            {
                "id": 1,
                "name": "Snuggles",
                "imageUrl": "assets/images/snuggles.jpg",
                "owner": "John Snow"
            },
            {
                "id": 2,
                "name": "Mr. Bigglesworth",
                "imageUrl": "assets/images/bigglesworth.png",
                "owner": "Kel'Thuzad"
            },
            {
                "id": 3,
                "name": "Snowball",
                "imageUrl": "assets/images/snowball.jpg",
                "owner": "Lisa S."
            },
            {
                "id": 4,
                "name": "Kitty",
                "imageUrl": "assets/images/kitty.jpg",
                "owner": "Simpson L."
            },
            {
                "id": 5,
                "name": "Whiskers",
                "imageUrl": "assets/images/whiskers.jpg",
                "owner": "Jamie Lannister"
            },
            {
                "id": 6,
                "name": "Mimiron",
                "imageUrl": "assets/images/mimiron.jpg",
                "owner": "Jonathan Stefanski"
            },
            {
                "id": 7,
                "name": "Svala",
                "imageUrl": "assets/images/svala.jpg",
                "owner": "Jonathan Stefanski"
            }
        ];
        return { cats };
    }
}