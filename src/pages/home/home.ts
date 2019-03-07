import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  MarkerCluster,
  GoogleMapsAnimation} from '@ionic-native/google-maps';

import { MissedDetailsPage } from '../missed-details/missed-details';

import { PetProvider } from '../../providers/pet/pet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  points = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public geolocation: Geolocation,
    public pet: PetProvider) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
           target: {
             lat: resp.coords.latitude,
             lng: resp.coords.longitude
           },
           zoom: 14,
           tilt: 0
         },
         controls: {
          mapToolbar: false,
          myLocationButton: true,
         }
      };

      this.map = GoogleMaps.create("map_canvas", mapOptions);

      // add my position
      this.points.push({
        position: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        },
        icon: {
          url: "assets/imgs/markers/point.png",
          size: {
            width: 15,
            height: 15
          }
        }
      });

      this.fillMissedPointsPets();

      let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
        boundsDraw: false,
        markers: this.points,
        icons: [
          {
            min: 500,
            url: "assets/imgs/markers/m1.png",
          }
        ]
      });

      markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
        let marker: Marker = params[1];
        let profileModal = this.modalCtrl.create(MissedDetailsPage, { id: marker.get('id') });
        profileModal.present();
      });

    }).catch((error) => {
      console.log('Error getting location', JSON.stringify(error));
      alert("Erro ao capturar sua posição. Por favor, verifique se deu permissão ao aplicativo.");
    });
  }

  private fillMissedPointsPets() {
    const dogIcon = {
      url: 'assets/imgs/markers/dog.png',
      size: {
        width: 25,
        height: 22
      }
    };

    const catIcon = {
      url: 'assets/imgs/markers/cat.png',
      size: {
        width: 25,
        height: 25
      }
    };

    // add missed pets
    this.pet.getMissedPets().forEach(pet => {
      let point = {
        position: {
          lat: pet.geo.lat,
          lng: pet.geo.lng
        },
        animation: GoogleMapsAnimation.BOUNCE,
        name: pet.name,
        id: pet.id,
        icon: (pet.type == 'dog') ? dogIcon : catIcon
      };

      this.points.push(point);
    });
  }
}
