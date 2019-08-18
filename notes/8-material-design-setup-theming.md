

1) install :`npm install --save @angular/material @angular/cdk @angular/animations`

2) set up theme 
* with cli  `ng add @angular/material` (install & import {hammerjs, BrowserAnimationsModule},config {angular.json, main.ts , ...},Add Material Icons)
* set up manual ... https://material.angular.io/guide/getting-started

3) custom theme : `src/app/assets/styles/_theme.scss;`
4) create matreial.module.ts and import export modules .. as you wish , then import it in app.module.ts ..        


#### NB: for grid we can use flexbox with (mixins sass..) ,
 but i prefer use bootstrap grid
1) install  bootstrap   `npm install -S bootstrap`
