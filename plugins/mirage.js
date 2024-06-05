// import {createServer} from 'miragejs';
import { Server } from 'miragejs'

export default function() {
    new Server({
        routes() {
            this.namespace = '/api'
            this.get('/cars', () => [
                { id: 1, make: 'Toyota', model: 'Corolla', year: 2019, price: 15000, image: 'car1.jpg' },
                { id: 2, make: 'Honda', model: 'Civic', year: 2018, price: 17000, image: 'car2.jpg' },
                // Add more car data as needed
            ])
        }
    })
}
//
// export function makeServer() {
//     createServer({
//         routes() {
//             this.namespace = 'api';
//
//             this.get('/cars', () => {
//                 return [{id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 15000, image: 'toyota.jpg'}, {id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 18000, image: 'honda.jpg'}, {
//                     id: 3,
//                     make: 'Ford',
//                     model: 'Mustang',
//                     year: 2018,
//                     price: 25000,
//                     image: 'ford.jpg'
//                 }, {id: 4, make: 'Chevrolet', model: 'Camaro', year: 2017, price: 23000, image: 'chevrolet.jpg'}];
//             });
//         }
//     });
// }
//
// export default defineNuxtPlugin(() => {
//     if (process.env.NODE_ENV === 'development') {
//         makeServer();
//     }
// });
