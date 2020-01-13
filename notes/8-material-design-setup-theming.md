

1) install :`npm install --save @angular/material @angular/cdk @angular/animations`

2) mettre en place le theme
* avec cli  `ng add @angular/material` (install & import {hammerjs, BrowserAnimationsModule},config {angular.json, main.ts , ...},Add Material Icons)
* manual ... https://material.angular.io/guide/getting-started

3) personnalisé theme : `src/app/assets/styles/_theme.scss;`

4) create matrail.module.ts and import export modules exp (MatButtonModule)`.. comme vous le souhaitez
 , puis importez-le dans app.module.ts ..


5)  pour grid nous pouvons utiliser flexbox avec (mixins sass ..), 
     mais on a pas besoin de ca sur ce petit projet (sans casser la tete avec responsive =D
      et meme il y beaucoup des gens qui ne sont pas familiarisés avec le flexbox de css3)
    ,On va utiliser la grille de bootstrap<br>
    * installer bootstrap `npm install -S bootstrap` 
    * import grid & reboot
    ```
          @import '~bootstrap/scss/bootstrap-reboot';
          @import '~bootstrap/scss/bootstrap-grid';`
    ```
