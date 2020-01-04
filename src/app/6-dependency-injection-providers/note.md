### intro
* L'injection de dépendance (DI) est un modèle de conception d'application (design pattern) important.
 Angular a son propre (design pattern) DI, 
 qui est généralement utilisé dans la conception d'applications angulaires pour augmenter leur efficacité et leur modularité.

* Qu'est-ce qu'une dépendance? Lorsque le module A d'une condidat a besoin du module B pour fonctionner,
le module B est une dépendance du module A.

#Exemple Generale de DI

```

class MailerProvider {
           ...
           const apiKeyMailer:string;
           
           constructor(privare apiKeyMailer:string) {
                     this.apiKeyMailer = apiKeyMailer;
            }
           public send(recipant:string,message?:string,...) {
             
               ...
           }
   }
class Application {
       public mailerProvider:MailerProvider;
       
       // inject on construct ,we can inject with setter or ..
       constructor(public mailerProvider:MailerProvider) {
            this.mailerProvider = mailerProvider;
       }
       
       
       public subscribe(condidat:condidatModel) {
        ...
        this.mailerProvider.send(condidat.email,'hello world',..);
       }
       
}
   const condidatModel = new condidatModel(data);
   
   const mailerProvider = new MailerProvider('apiKeyMailer9087773737373');
   
   // inject mailerProvider object on construct class Application
   
   const condidat = new Application(mailerProvider);
   
   condidat.subscribe(condidatModel);
   
    Ici Applications a besoin de SendMailer pour pouvoir envoyer notification (mail) aprés la souscription..
    donc la cla`ss SendMailer est une dépendance de la class Application..
    
```


## Le framework Angular se compose de 4 concepts travaillant ensemble:

<strong>Token (Jeton)</strong><br>
Cela identifie de façon unique quelque chose que nous voulons injecter. Une dépendance de notre code.

<strong>Dependancy (Dépendance)</strong><br>

Le code réel que nous voulons injecter.

<strong>Provider (Fournisseur)</strong><br>
Il s'agit d'une correspondance entre un jeton et une ou liste de dépendances .

<strong>Injector (Injecteur)</strong><br>
c'est une fonction qui, lorsque nous lui donne un jeton ,nous renvoie une ou list de dependances.


## DI angular en profondeur bas niveau  (In Depth) 

* Au coeur du cadre DI est un injecteur .

* Un injecteur reçoit un jeton et renvoie une dépendance (ou une liste).

* Nous disons qu'un injecteur résout un jeton (token) en dépendance (dependency).

* Normalement, nous n'avons jamais besoin de mettre en place un injecteur, Angular gère les détails de mise en œuvre injectable de bas niveau pour nous et généralement nous le configurons simplement pour nous donner le comportement que nous voulons.


```
import { Injector} from '@angular/core';

// service 1
class MailerProviderService {
}
// service 1
class ChatProviderService {
}
// creation et configuration de notre injecteur en fournissant un tableau de classes (services ..).
const injectorParent = Injector.create({
    providers: [{provide: MailerProviderService , deps: []}, {provide: ChatProviderService, deps: []}]
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

const malierProviderOne = injectorParent.get(MailerProviderService);
console.log('malerProvider' ,malerProvider); // object de type MailerProviderService

// Les dependances renvoyees par les injecteurs sont mises en cache.
// Plusieurs appels au même injecteur pour le même jeton (token) nous donne la même instance.

const malierProviderOne = injectorParent.get(MailerProviderService);
const malierProviderTow = injectorParent.get(MailerProviderService);
console.log('is the same MailerProviderService object ' , malierProviderOne === malierProviderTow); // true


// Nous pouvons configurer les Providers pour renvoyer 4 types de dépendances différents:
// classes, valeurs, alias et usines.

* Class (useClass)

 {provide: MailerProviderService useClass:MailerProviderService, deps: []}
 ou
 {provide: 'MyMalierToken' useClass:MailerProviderService, deps: []}

* valeurs (useValue)

 {provide:'MailerApiKey'  useValue:'APIKEY9877373838373'}
 ou
 {provide: 'MailerAuth' useValue: {username:'issam raouf',password:'mot03##@'}}
 
* alias (useExisting)

const injector = Injector.create({
    providers: [
     {provide: MailerProviderService , deps: []},
     {provide: MailerCheckService, deps: [], useExisting:MailerProviderService }
    ]
});
on demande MailerCheckService nous renvoie une instance de MailerProviderService
const mailerCheckService = injector.get(MailerCheckService); // objet de type MailerProviderService

* function (useFactory)

const isProd = false;
{provide: MailerProviderService ,
 useFactory: () => {
 
        if(isProd) {
            return new MailerProviderService();
        } else {
           return new MailerMockService();
        }
 }
}

// les trois façons différentes de définir des jetons (token)

* Type : 
    class ApplicationService {
    ...
    }
   // ici le jeton (token)  est ApplicationService (Type)
 {provide:ApplicationService , deps:[]}
 
* Chaine de caractére :
 class ApplicationService {
    ...
    }
   // ici le jeton (token) est 'AppServ' (chaine de caractére)
 {provide: 'AppServ' , useClass:ApplicationService  , deps:[]}
 
* InjectionToken :
   pourquoi ?
   parce que InjectionTokenest est la méthode préférée par rapport à l'utilisation de chaînes,
   car elle empêche les conflits de noms qui peuvent se produire.
    
-----> probléme
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
   
----> solution

        elles ont meme jeton 'AppServ'
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

###L'arbre des injecteurs
* Une application angulaire aura une arborescence d'injecteurs reflétant l'arborescence des composants.

* Nous avons un injecteur parent de niveau supérieur qui est attaché à notre NgModule.

* Ensuite, nous avons des injecteurs enfants descendant dans une hiérarchie correspondant à l'arborescence des composants.

* Ainsi, un  composant parent aura un injecteur enfant issu de NgModule.

* Un composant enfant du composant parent aura un injecteur enfant issu du parent .

#### C'est partie pour le pratique :D
```
// Service
class MailerProvider {
   
           public send(recipant:string,message?:string,...) {
             
               ...
           }
 }
 // on crée et configurer notre injecteur supérieur
@NgModule({
  //avce ca va créer un injecteur parent de niveau supérieur et le configure avec le provider MailerProvider
  providers: [MailerProvider]
})
class AppModule { }

// On peut configurer direct sur le components et dirctives

@Component({
  selector: 'app-application',
  template: 'application.component.ts',
  css; 'application.component.scss'
  
  // avec ca va créer un injecteur enfant , s'il a un component parent , 
  // son injecteur parent et celui de component parent sinon l'injecteur est injecteur supérieur (de NgModule)
  providers: [MailerProvider]
})
@Directive({
     selector: '[appCaractereOnly]',
      // injecteur parent  est injecteur supérieur (de NgModule)
      providers: [MailerProvider]
})

@Component({
  selector: 'app-application',
  template: 'application.component.ts',
  css; 'application.component.scss'
  
  // avec ca va créer un injecteur enfant , s'il a un component parent , 
  // son injecteur parent et celui de component parent sinon l'injecteur est injecteur supérieur (de NgModule)
  viewProviders: [MailerProvider]
})


La propriété viewProviders nous permet de rendre les providers disponibles uniquement pour la vue du composant,
 par contre la propriété de providers met les providers à la disposition de ses contenrChildren and viewChildren.
```



Pourquoi cette DI , je vous donne les intérets les plus importants:
* Flexible / plus facile à réutiliser ( contraire ,Difficile à réutiliser par exemple dans d'autres configurations,..)
* Plus facile à tester (un couplage serré trés difficile à tester,..)
* Plus facile à maintenir (un couplage serré trés difficile à maintenir,..)
