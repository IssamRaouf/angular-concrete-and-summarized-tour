### intro
* L'injection de dépendance (DI) est un modèle de conception d'application (design pattern) important.
 Angular a son propre (design pattern) DI, 
 qui est généralement utilisé dans la conception d'applications angulaires pour augmenter leur efficacité et leur modularité.

* Qu'est-ce qu'une dépendance? Lorsque le module A a besoin du module B pour fonctionner,
le module B est une dépendance du module A.

# Exemple Generale de DI

```javascript

class MailerProvider {
           // ...
           private apiKeyMailer:string;
           
           constructor(private apiKeyMailer: string) {
               this.apiKeyMailer = apiKeyMailer;
            
           }
            
           public send(recipientMail:string, message?: string) {
            
              // send mailer
           }
}
   
class Inscription {
   
       // injecter sur la construction, nous pouvons injecter avec setter.
       constructor(private mailerProvider: MailerProvider) {
           
       }
       
       
       public subscribe(applicant: applicantModel) {
         // do somethings
        this.mailerProvider.send(applicant.email,'Message mail ...');
       }
       
}
   const applicantModel = new applicantModel(data);
   
   const mailerProvider = new MailerProvider('apiKeyMailer9087773737373');
   
   const inscription = new Inscription(mailerProvider);
   
   inscription.subscribe(applicantModel);
   
   // Ici Inscription a besoin de SendMailer pour pouvoir envoyer notification (mail) aprés la souscription..
   // donc la class SendMailer est une dépendance de la class Inscription..
    
```


## Le framework Angular se compose de 4 concepts travaillant ensemble:

<strong>Token (Jeton)</strong><br>
Cela identifie de façon unique quelque chose que nous voulons injecter (class ,key(value) ...). Une dépendance de notre code.

<strong>Dependancy (Dépendance)</strong><br>
Le code réel que nous voulons injecter.

<strong>Provider (Fournisseur)</strong><br>
Il s'agit d'une correspondance entre un jeton et une ou liste de dépendances .

<strong>Injector (Injecteur)</strong><br>
c'est une fonction qui lorsque nous lui donne un jeton ,nous renvoie une ou list de dependances.


## DI angular en profondeur bas niveau  (In Depth) 

* Au coeur du cadre DI est un injecteur .

* Un injecteur reçoit un jeton et renvoie une dépendance (ou une liste).

* Nous disons qu'un injecteur résout un jeton (token) en dépendance (dependency).

* Normalement, nous n'avons jamais besoin de mettre en place un injecteur, Angular gère les détails de mise en œuvre injectable de bas niveau pour nous et généralement nous le configurons simplement pour nous donner le comportement que nous voulons.


```javascript
import { Injector} from '@angular/core';

// service 1
class MailerProviderService {

}
// service 2
class ChatProviderService {

}

// creation et configuration de notre injecteur en fournissant un tableau de classes (services ..)
const injectorParent = Injector.create({
    providers: [
    {provide: MailerProviderService , deps: []}, 
    {provide: ChatProviderService, deps: []}]
});

// NB: {provide: MailerProviderService , deps: []}  =>  c'est un raccourci de  {provide: MailerProviderService useClass:MailerProviderService, deps: []
// deps: [] autre dependance de MailerProviderService pour fonctinner...
// Le token soit type , soit string (name) , soit InjectionToken
// Les details au dessous de cette partie!

// useClass pourquoi ? , parce que ici nous configurons une depandance de type class ..

// on peut configurer nos providers pour class (useClass) valeur (useValue) , function (useFactory) ou alias (useExisting)
// Les details au dessous de cette partie!


// Nous passons un jeton, le nom de la classe (type as token), dans notre injecteur et lui demandons de se résoudre en dépendance.
// dans ce cas, il renvoie simplement une instance de MailerProviderService.

const mailerProviderOne = injectorParent.get(MailerProviderService);
console.log('mailerProviderOne' ,mailerProviderOne); // object de type MailerProviderService

// Les dependances renvoyees par les injecteurs sont mises en cache.
// Plusieurs appels au même injecteur pour le même jeton (token) nous donne la même instance.

const mailerProviderTow = injectorParent.get(MailerProviderService);
console.log('is the same MailerProviderService object ' , mailerProviderOne === mailerProviderTow); // true


// Nous pouvons configurer les Providers pour renvoyer 4 types de dépendances différents:
// classes, valeurs, alias et usines.

// Class (useClass)

 {provide: MailerProviderService, useClass:MailerProviderService, deps: []}
 // ou
 {provide: 'MyMalierToken', useClass:MailerProviderService, deps: []}

// valeurs (useValue)

 {provide:'MailerApiKey' , useValue:'APIKEY9877373838373'}
// ou
 {provide: 'MailerAuth', useValue: {username:'issam raouf',password:'mot09##@'}}
 
* alias (useExisting)

const injector = Injector.create({
    providers: [
     {provide: MailerProviderService , deps: []},
     {provide: MailerCheckService, deps: [], useExisting:MailerProviderService }
    ]
});
// on demande MailerCheckService nous renvoie une instance de MailerProviderService
const mailerCheckService = injector.get(MailerCheckService); // objet de type MailerProviderService

// function (useFactory)

const isProd = false;
{
 provide: MailerProviderService ,
 useFactory: () =>  isProd ?  new MailerProviderService()  :  new MailerMockService();
}

// les trois façons différentes de définir des jetons (token)

//  Type : 
    class ApplicationService {
    ...
    }
   // ici le jeton (token) est ApplicationService (Type)
 {provide:ApplicationService , deps:[]}

 // Chaine de caractére :
 class ApplicationService {
    ...
    }
   // ici le jeton (token) est 'AppServ' (chaine de caractére)
 {provide: 'AppServ' , useClass:ApplicationService  , deps:[]}
// InjectionToken :
//  pourquoi ?
// Parce que InjectionToken est la méthode préférée par rapport à l'utilisation de chaînes,  car elle empêche les conflits de noms qui peuvent se produire.
    
// -----> probléme
 class ApplicationService {
    ...
    }
    class myAppService {
        ...
      }
   {provide: 'AppServ' , useClass:ApplicationService  , deps:[]}
   {provide: 'AppServ' , useClass:myAppService  , deps:[]}
   
   // NB: Lors de la configuration d'un injecteur avec le même jeton plusieurs fois, le dernier fournisseur écrase simplement les fournisseurs précédent.
   const ApplicationService =  injector.get('AppServ'); // return object de type myAppService ,conflict :D
   
// ----> solution

      //  elles ont meme jeton 'AppServ'
        const appServ   = new InjectionToken<string>('AppServ');
        const myAppServ = new InjectionToken<string>('AppServ');
    
       { provide: appServ , useClass:ApplicationService  , deps:[] }
       { provide: myAppServ , useClass:myAppService  , deps:[] }
       
       const ApplicationService =  injector.get(appServ); // return object de type ApplicationService 
       const myAppServ =  injector.get(myAppServ); // return object de type myAppService 
```

## Configuration de l'injection de dépendances en angulaire

* Avec Angular, cependant, nous n'aurons jamais besoin de créer des injecteurs nous-mêmes, Angular le fait automatiquement pour nous lorsque notre application est amorcée.

* Tout ce que nous devons faire est de  configurer Angular avec nos fournisseurs et aussi de lui dire quand nous voulons injecter quelque chose dans un constructeur de classe.

### L'arbre des injecteurs
* Une application angulaire aura une arborescence d'injecteurs reflétant l'arborescence des composants.

* Nous avons un injecteur parent de niveau supérieur qui est attaché à notre NgModule.

* Ensuite, nous avons des injecteurs enfants descendant dans une hiérarchie correspondant à l'arborescence des composants.

* Ainsi, un  composant parent aura un injecteur enfant issu de NgModule.

* Un composant enfant du composant parent aura un injecteur enfant issu du parent .

#### C'est parti pour le pratique :D
``` javascript
// Service
class MailerProvider {
   
           public send(recipient:string,message?:string,...) {
             
              // do somethings
           }
 }
 // on crée et configurer notre injecteur supérieur
 
@NgModule({
  // Ca va créer un injecteur parent de niveau supérieur et le configure avec le provider MailerProvider
  providers: [MailerProvider]
})
class AppModule { }

// On peut configurer direct sur le components et directives

@Component({
  selector: 'app-application',
  template: 'application.component.ts',
  css: 'application.component.scss'
  
  // Ca va créer un injecteur enfant , s'il a un component parent 
  // son injecteur parent et celui de component parent sinon l'injecteur est injecteur supérieur (de NgModule)
  providers: [MailerProvider]
})


@Directive({
     selector: '[appCaractereOnly]',
      // injecteur parent est injecteur supérieur (de NgModule)
      providers: [MailerProvider]
})

@Component({
  selector: 'app-application',
  template: 'application.component.ts',
  css: 'application.component.scss'
  
  // Ca va créer un injecteur enfant , s'il a un component parent , 
  // son injecteur parent et celui de component parent sinon l'injecteur est injecteur supérieur (de NgModule)
  viewProviders: [MailerProvider]
})


// sur les components ,La propriété viewProviders nous permet de rendre les providers disponibles uniquement pour la vue du composant (viewChildren),
// par contre la propriété de providers met les providers à la disposition de ses contentChildren et viewChildren.
```

### Exemples:

1) Configuration des providers sur NgModule de notre Module **TodoModule**

```javascript
@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, DIRoutingModule],
    declarations: [TodoComponent],
    providers:[InscriptionService, MailerProviderService]
})
export class TodoModule {
}
export class MailerProviderService {
    constructor() {
        console.log('Hello from MailerProviderService');
    }
    public send(recipientMail:string,message?:string) {
    // send mail
    }
}

import {MailerProviderService} from './mailer-provider.service';
export class InscriptionService {
    constructor(mailerProv: MailerProviderService) {
        console.log('Hello from ApplicationService');
    }
    
    public subscribe(user:User): void {
        this.mailerProv.send(user.email,'Message body');
    }
 
}



import {InscriptionService} from './inscription.service';
export class TodoComponent implements OnInit {
    constructor(private inscriptionService: InscriptionService) {
    }
    ngOnInit() {
    }
    
    public subscribe(user:User) : void {
        // ..
        this.inscriptionService.subscribe(user);
    }
}
```

2) Configuration un provider sur NgModule et l'autre avec @Inject décorateur

```javascript

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, DIRoutingModule],
    declarations: [TodoComponent],
    // on supprime MailerProviderService de la list des providers de NgModule
    providers:[InscriptionService]
})
export class DIModule {

}

import {MailerProviderService} from './mailer-provider.service';

export class InscriptionService {
    // Nous utilisons le @Inject décorateur de paramètres pour indiquer à Angular que nous voulons résoudre un jeton 
    // et injecter une dépendance dans un constructeur.
    // @Inject(MailerProviderService) ici MailerProviderService est token de type class
    constructor(@Inject(MailerProviderService)  mailerProv: MailerProviderService) {
        console.log('Hello from ApplicationService');
    }
}

export class MailerProviderService {
    constructor() {
        console.log('Hello from MailerProviderService');
    }
}

import {InscriptionService} from './inscription.service';
export class TodoComponent implements OnInit {
    constructor(private inscriptionService: InscriptionService) {
    }
    ngOnInit() {
    }
}
```

3) Configuration un provider sur NgModule et sa depandce avec @Injectable decorator
//Injectable :  Décorateur qui marque une classe comme disponible pour être fournie et injectée comme dépendance.

````javascript
@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, DIRoutingModule],
    declarations: [TodoComponent],
    providers:[InscriptionService]
})
export class DIModule {
}

import {MailerProviderService} from './mailer-provider.service';
export class InscriptionService {
    constructor(mailerProv: MailerProviderService) {
        console.log('Hello from ApplicationService');
    }
}
@Injectable()
export class MailerProviderService {
    constructor() {
        console.log('Hello from MailerProviderService');
    }
}

import {InscriptionService} from './application.service';
export class TodoComponent implements OnInit {
    constructor(private inscriptionService: InscriptionService) {
    }
    ngOnInit() {
    }
}

// Nb: Nous pouvons utiliser @Injectable() sans configurer providers de NgModule
// en spécifiant que cet injectable doit être fourni dans l'injecteur racine.
@Injectable({
    providedIn: 'root'
})

````
#### Resume

* Nous pouvons configurer un fournisseur sur le NgModule, ou sur une providers propriété de composant ou de directives ou sur une viewProviders propriété de composants .

* Décider où configurer votre fournisseur et comprendre les différents est essentiel pour comprendre comment concevoir une application angulaire.

* Si nous voulons qu'une instance d'une dépendance soit partagée globalement et partage l' état dans l'application, nous la configurons sur NgModule.

* Si nous voulons qu'une instance distincte d'une dépendance soit partagée entre chaque instance d'un composant et ses enfants, nous la configurons sur la providers propriété des composants .

* Si nous voulons qu'une instance distincte d'une dépendance soit partagée entre chaque instance d'un composant et seulement ses enfants de vue, nous la configurons sur la viewProviderspropriété des composants 


#### Pourquoi cette DI , je vous donne les intérets les plus importants:
* Flexible / plus facile à réutiliser **#** Difficile à réutiliser par exemple dans d'autres configurations,..
* Plus facile à tester **#** un couplage serré trés difficile à tester,..
* Plus facile à maintenir **#** un couplage serré trés difficile à maintenir,..
