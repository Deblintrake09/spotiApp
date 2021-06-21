# Spotiapp


Proyecto de Angular, creado con ANGULAR CLI para aprendizaje y testeo de la API de Spotify.

Importante, se debe reeemplazar en SpotifyService el token de autorización para que funcione la app. 

TODO - Generar backend que autentique y regenere el token

Actualmente Spotify requiere para autenticación realizar:

Request POST a https://accounts.spotify.com/api/token

Headers Body -  x-www-form-urlenconded
    grant_type: client_credentials,
    client_id
    client_secret

Devuelve Bearer Token.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
