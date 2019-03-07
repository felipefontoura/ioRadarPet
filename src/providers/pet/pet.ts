import { Injectable } from '@angular/core';

@Injectable()
export class PetProvider {
  constructor() {}

  getMissedPets() {
    return [
      {id: 1, name: 'Catinga',
      geo: { lat: -23.189, lng: -45.933 }, type: 'cat',
      photo: './assets/imgs/pets/1.jpg',
      missedDate: '2019-03-06', description: 'Gato vira-lastas simpático do posto Ipiranga', contact: { name: 'Pedrão', phone: '12982041640' }},

      {id: 2, name: 'Lulu', geo: { lat: -23.185, lng: -45.935 }, type: 'dog',
      photo: './assets/imgs/pets/2.jpg',
      missedDate: '2019-02-28', description: 'Poodle linda porte médio cor branca...', contact: { name: 'Josephina', phone: '1299999999' }},

      {id: 3, name: 'Amadeu', geo: { lat: -23.187, lng: -45.937 }, type: 'dog',
      photo: './assets/imgs/pets/3.jpg',
      missedDate: '2019-02-28', description: 'Boxer malhado que atende pelo nome de Amadeu', contact: { name: 'Silva', phone: '1299999999' }},
    ]
  }

  getMissedPet(id) {
    return this.getMissedPets().filter(pet => pet.id == id)[0];
  }
}
