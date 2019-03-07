# RadarPET - Aplicativo de localização e recuperação de pets

Aplicativo Ionic criado na aula ao vivo do Prof. Felipe Fontoura no dia 07-Mar-2019.

## Roteiro

1. Criar o projeto Ionic

```
$ ionic start radarPet blank
```

2. Instalar o plugin do Google Maps

    * Mais referências: https://docs.google.com/presentation/d/1zlkmoSY4AzDJc_P4IqWLnzct41IqHyzGkLeyhlAxMDE/edit

    * Acessar a página da API: https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md
    
    * API: https://console.cloud.google.com/google/maps-apis/overview?project=teste-227412 
    * Instalar os componentes:
    ```
    $ ionic cordova plugin add cordova-plugin-googlemaps \
        --variable API_KEY_FOR_ANDROID="AIzaSyCIyvlVETTjDy-nBRMGz4ZROH81AMCXSpE" \
        --variable API_KEY_FOR_IOS="AIzaSyCIyvlVETTjDy-nBRMGz4ZROH81AMCXSpE"
    $ npm install --save @ionic-native/core@4.8.0 @ionic-native/google-maps@4.8.2
    ```

    * Ajustar o HTML e o CSS

3. Instalar o Geolocation

    * Acessar a página da API: https://ionicframework.com/docs/v3/native/geolocation/
    * Instalar os componentes:
    ```
    $ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="Para localizar sua posição em relação aos veículos."
    $ npm install --save @ionic-native/geolocation@4
    ```

    * Configurar no `app.module.ts` o `import`
    * Configurar no `home.ts` o `import`
    * Configurar o `zoom: 14`
    * Testar com a Latitude -23.1894908 e Longitude -45.9330525 (não utilizar o `-lc`)

4. Adicionar os Pets
    * Criar um novo provider chamado `petProvider`
    * Criar os métodos de criação de `points`
    * Criar de carregamento de informação `marks`

5. Criar a página `missed-details`
    * `ionic generate page missed-details`
    * Configurar o `ModalController` na página `home`
    * Configurar o método de carregamento de informação para abrir a página `MissedDetailsPage`
    * Recuperar o parâmetro `id` de `navParams`
    * Ajustar o provider `PetProvider` para recuperar as informações
