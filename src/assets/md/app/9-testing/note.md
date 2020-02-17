### Intro

#### General  :
(Description d'openclassrooms)

Faire un test, c’est vérifier qu’une partie de son logiciel fonctionne comme attendu.
Si vous avez déjà développé, vous savez que la transformation d’une idée ou d'un besoin en code informatique peut être complexe et sujette à erreur ou interprétation.

En voici quelques raisons :

* Le besoin peut avoir été mal ou vaguement défini, que ce soit votre besoin ou celui d’un client. En conséquence, vous ne le développez pas comme il le faut.

* De la même façon, le besoin peut avoir été mal compris. Résultat : le logiciel ne correspond pas à ce qui est attendu.

* Vous avez fait des erreurs dans le code qui font que le logiciel plante, ou pire, qu’il ne fonctionne pas comme il faut ! Vous imaginez si le logiciel de votre banque vous retirait à chaque fois le double de ce que vous payez ?

* Ou encore plus insidieux, tout fonctionne bien, sauf dans des cas limites du logiciel. Par exemple, vous développez une calculatrice, elle fonctionne bien, sauf dans le cas où vous tentez de diviser quelque chose par zéro. Et là, boum 
  ...
#### Angular
Lorsque nous parlons de tests dans Angular, nous parlons généralement de deux types de tests différents:

* <strong>Tests unitaires</strong>

   Ceci est parfois également appelé test isolé. C'est la pratique de tester de petits morceaux de code isolés. Si votre test utilise une ressource externe c'est pas un test unitaire..

* <strong>Test fonctionel</strong>
    Ceci est défini comme le test de la fonctionnalité complète d'une application.
    Dans la pratique avec les applications Web, cela signifie interagir avec votre application car elle s'exécute dans un navigateur comme un utilisateur interagirait avec elle dans la vie réelle, 
    c'est-à-dire via des clics sur une page.
    Ceci est également appelé test de EndToEnd ou E2E.
<hr/>

Nous pouvons tester nos applications angulars à partir de zéro en écrivant et en exécutant des fonctions JavaScript ou Typescript pures.
Mais il existe un certain nombre de bibliothèques et de frameworks de test que nous pouvons utiliser, 
ce qui réduit le temps nécessaire pour écrire des tests.
Deux de ces outils et framworks qui sont utilisés lors du test d'Angular sont Jasmine et Karma.


### Jasmine

* Jasmine est un framework de test JavaScript qui prend en charge une pratique de développement logiciel appelée Behavior-Driven Development, ou BDD.
* Le BDD combine les techniques et principes des (TDD,DDD,OOP) .
* Jasmine, et BDD en général, tente de décrire les tests dans un format lisible par l'homme afin que les personnes non techniques puissent comprendre ce qui est testé.
même pour nous lecture les tests au format BDD, il est beaucoup plus facile de comprendre ce qui se passe sur les projets..

Exemple : 

```
class Counter {
    //   ...
    public count = 0;
    
    public increaseItOnClick() : void {
        this.count++;
    }
    
    
}

// pure TYPESCRIPT counter.test.ts 

 public function itIncreaseByOne(counter:Counter) : string {
 
    counter.increaseItOnClick();
    if(counter.count === 1) {
       return true;
    } else {
       return false;
    }
 }
 
 const counter = new Counter();
 console.log('Should increase count by 1 after calling click',itIncreaseByOne(couner)); // Should increase count by 1 after calling click true :D
 
 
// JASMINE spec , counter.spec.ts
describe('Counter',() => {

    beforeAll(() => {
    });

    afterAll(() => {
    });
    beforeEach(() => {
    });
    afterEach(() => {
    });
    
    it('Should increase count by 1 after calling click', () => {
      let counter = new Counter();
      counter.increaseItOnClick();
      expect(counter.count).toEqual(1); // true :D
    });
    
    
    it(...)
    it(...)
    ...
});

```
#### Quelques mots clés de Jasmine 
(1)
* `describe(String, Function)` : <strong>String</strong> est un nom ou un titre pour une suite de spécifications , <string>Function</strong> définit la suite de tests , une list de spécifications de test individuelles (it).
* `it(String, Function)` :<strong>String</strong> est un nom ou un titre pour un spécification de test, <strong>Function</strong> définit une spécification de test individuelle, elle contient une ou plusieurs attentes (expects) de test.
* `expect(actual)` : expect est prend une valeur, appelée le réel. Il est enchaîné avec une fonction Matcher, qui prend la valeur attendue (expect(counter.count).toEqual(1)).

#### Chaque Matcher implémente une comparaison booléenne entre la valeur réelle et la valeur expected. Il est responsable de signaler à Jasmine si expect est vraie ou fausse. Jasmine réussira ou échouera la spécification.
#####Les Matcher principaux sont :
   
   * toBe : égalité stricte (type et valeur ====)
   * toEqual : égalité non stricte (valeur ==)
   * toContain : un Array contient un élément donné, ou une string contient une chaîne donnée
   * toBeDefined : l’objet doit être défini
   * toBeNull : la valeur doit être nulle
   * toBeTruthy / toBeFalsy : la valeur est vraie / fausse (truthy / falsy)
   * toHaveBeenCalled : une méthode doit avoir été appelée
   * toHaveBeenCalledWith : une méthode doit avoir été appelée avec des paramètres d’une certaine valeur
   * ...
   
##### Jasmine nous offre la possibilité de mocker des objets ou des méthodes avec spies :
   * spyOn : mock de la méthode d’un objet
   * createSpyObj : mock d’un objet dans son intégralité
   ...
   ils nous envoient une valeur que nous définissons afin de satisfaire les besoins de nos tests.
   
##### Désactiver ou se concentrer sans commenter..
1) désactiver
* on peut désactiver une list de spécifications de test sans les commenter on ajoute juste x au départ `xdescribe(String, Function)`
* on peut désactiver une spécification de test sans les commenter on ajoute juste x au départ `xit(String, Function)`

2) se concentrer sur des tests et ignore les autres
* on peut se concentrer sur une list de spécifications et ignore les autre on ajoute juste f au départ `fdescribe(String, Function)`
* on peut se concentrer sur une spécification et ignore les autre on ajoute juste f au départ`fit(String, Function)`

##### Setup and Teardown (Configuration et démontage)
Parfois, pour tester une fonctionnalité, nous devons effectuer une configuration,
peut-être que cela crée des objets de test. De plus, nous devrons peut-être effectuer certaines activités de nettoyage après avoir terminé les tests.
par exemple supprimer des fichier ...

* `beforeAll` : Cette fonction est appelée une fois, avant d'exécuter toutes les spécifications d'une suite de tests `describe function`
  
* `afterAll`  : Cette fonction est appelée une fois que toutes les spécifications d'une suite de tests sont terminées.
  
* `beforeEach`: Cette fonction est appelée avant l'exécution de chaque spécification de test (it function).
  
* `afterEach` : Cette fonction est appelée après l'exécution de chaque spécification de test.

### Karma
Karma est notre moteur de tests. de notre projet, cree avec l’angular-cli.<br>
pourquoi Karma?

* L'exécution manuelle de tests Jasmine en actualisant un onglet de navigateur à plusieurs reprises dans différents navigateurs chaque fois que nous modifions du code peut devenir fastidieuse.

* Karma est un outil qui nous permet de générer des navigateurs et d'exécuter des tests Jasmine à l'intérieur de tous à partir de la ligne de commande. Les résultats des tests sont également affichés sur la ligne de commande.

* Karma peut également surveiller les modifications apportées à vos fichiers de développement et réexécuter les tests automatiquement.

* Karma nous permet d'exécuter des tests Jasmine dans le framework d'une chaîne d'outils de développement qui nécessite que les tests soient exécutables et les résultats inspectables via la ligne de commande.

* Il n'est pas nécessaire de connaître les mécanismes internes du fonctionnement du Karma. Lorsque vous utilisez la CLI angular, elle gère la configuration pour nous, nous allons exécuter les tests en utilisant uniquement Jasmine.

* Meme il nous permet d'ajouter plusieur plugins comme cucumber.. , aussi il vient avec des plugins prédefinit par exemple karma-istanbul, un tool de code coverage ..

### Angular cli

Lors de la création de projets Angular à l'aide de la CLI Angular, la création par défaut et l'exécution de tests unitaires à l'aide de Jasmine et Karma sont effectuées par défaut. 
Chaque fois que nous créons des fichiers à l'aide de l'interface CLI, ainsi que la création du fichier de code principal, il crée également un fichier de spécifications Jasmine simple nommé de la même manière que le fichier de code principal mais se terminant par nomFile.spec.ts.

Pour exécuter tous les tests dans notre application, nous tapons simplement `ng test` dans la racine de notre projet. 
Cela exécute tous les tests de notre projet de Jasmine via Karma. 
Il surveille les modifications apportées à nos fichiers de développement, regroupe tous les fichiers de développement et réexécute automatiquement les tests.

<h4>Voila exemple , j'execute ng test sur la racine de notre app complet :D , on a beaucoup des problemes , c'est normale car j'ai pas creer les scenarios .. juste des tests basic qu'ils sont generer au moment de la creation des components , services , pipes.. avec angular cli..</4>
![alt text](img/ng-test-exp.png)




### test only Jasmine and karma

<h3>NB</h3>
 ng test execute tout les tests sur notre app.
 ng test --main ./notre.spec.ts execute juste les tests de ce fichier.
 
#### les option de ng test: https://angular.io/cli/test


#### test simple class services/user-rights.service.ts
````
// user-rights.service.ts
export class UserRightsService {
    public get isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !!token;
    }
}

// user-rights.service.spec.ts

import {UserRightsService} from './user-rights.service';

describe('Service UserRights', () => {
    let userRights = null;
    beforeEach(() => {
        userRights = new UserRightsService();
    });
    afterEach(() => {
        userRights = null;
        localStorage.clear();
    });

    it('Should create ', () => {
        expect(userRights).toBeTruthy();

    });
    it('should return false from IsAuthenticated when there is no token ', () => {
        expect(userRights.isAuthenticated).toBeFalsy();
    });
    it('should return true form isAuthenticated when there is a token', () => {
        localStorage.setItem('token', 'ABCVG9890');
        expect(userRights.isAuthenticated).toBeTruthy();
    });

});

````

* run `ng test --code-coverage --main ./src/app/9-testing/simple-class-pipe/services/user-rights.service.spec.ts`

![alt text](img/browser-simple-class.png)

![alt text](img/cli-simple-class.png)


#### test pipe  pipe/currency-to-kmb.pipe.ts


````
// currency-to-kmb.pipe.ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appCurrencyToKMB'
})


export class CurrencyToKMBPipe implements PipeTransform {

    transform(value: number): any {
        if (value < 1e3) {
            return value;
        } else if (value > 1e3 && value < 1e6) {
            return (value / 1e3).toFixed(1) + 'K';
        } else if (value > 1e6 && value < 1e9) {
            return (value / 1e6).toFixed(1) + 'M';
        } else {
            return (value / 1e9).toFixed(1) + 'B';
        }
    }

}
// currency-to-kmb.pipe.spec.ts

import {CurrencyToKMBPipe} from './currreny-to-kmb.pipe';

describe('Pipe CurrencyToKMB', () => {
    let currencyPipe: CurrencyToKMBPipe;

    beforeEach(() => {
        currencyPipe = new CurrencyToKMBPipe();
    });

    it('Should create', () => {
        expect(currencyPipe).toBeTruthy();
    });

    it('Should return the input number 999 without transforme', () => {
        expect(currencyPipe.transform(999)).toEqual(999);
    });
    it('Should convert the value 9000 into suffix K', () => {
        expect(currencyPipe.transform(9000)).toEqual('9.0K');
    });
    it('Should convert the value 9000000 into suffix M', () => {
        expect(currencyPipe.transform(9000000)).toEqual('9.0M');
    });
    it('Should convert the value  9000000000 into suffix B', () => {
        expect(currencyPipe.transform(9000000000)).toEqual('9.0B');
    });
});


````

![alt text](img/browser-pipe.png)

![alt text](img/cli-pipe.png)


### Teste avec mooks and spies
<h4>On prend un exemple au départ pour bien expliquer </h4>
  On suppose qu'on a  un todo item avec multi actions, 
  il y a des actions pour tout les utilisateurs authentifiés sur notre application et d'autre actions pour le super Admin ou global admin.

#### test avec le real AppStateService
````
//  Apérs la login on va stocker notre utilisateur corrant sur localStorage pour la suite des interactions avec l'application

//  
export class AppStateService 
{
  
   // On peut le faire mieux que ca 1000 fois , mais on veut le probleme pour l'expliquer.. :D
   
   public get currentUser(): UserModel {
       retrun new UserModel(JSON.parse(localStorage.getItem('currentUser'));
   }
   // on peut créer autre service pour UserRights mais on le laisse simple a ce stade là
   public get userIsSuperAdmin(): boolean {
    return this.currentUser.role === 'ROLE_SUPER_ADMIN';
   }
   // on peut créer autre service pour UserRights mais on le laisse simple a ce stade là
   public get userIsGlobalAdmin(): boolean {
    return this.currentUser.role === 'ROLE_GLOBAL_ADMIN';
   }
   
   ...
}


// Notre todo item component

export class TodoItemComponent {

    ...
    
    public constructor(private appStateServ:AppStateService) {
    
    }
    
    public get canDisplayAddComment() : boolean {
       return this.appStateServ.userIsSuperAdmin ||  this.appStateServ.userIsGlobalAdmin;
    }
  
    public get canDisplayEditAction() : boolean {
       return this.appStateServ.userIsSuperAdmin ||  this.appStateServ.userIsGlobalAdmin;
    }
    public get canDisplayArchiveAcion() : boolean {
        return this.appStateServ.userIsGlobalAdmin;
     }
    public get canDisplayCloseAction() : boolean {
       return this.appStateServ.userIsGlobalAdmin;
    }


}

// todo-item.component.spec.ts


describe('TodoItemComponent',() => {
  
  let appStateServ; 
  let component;
  
  beforeEach(() => {
    appStateServ = new AppStateService();
    // le TodoItemComponent a besoin du AppStateService service pour fonctionner (Dependence).
    // on inject la dépendance de notre component
    component = new todoItemComponent(appStateServ);

  });
  
  afterEach(() => {
    appStateServ = null;
    todoItemComponent = null;
    localStorage.removeItem('currentUser');
  });
  
  it('Should create',() => {
   expect(component).toBeTruthy();
  });
  
  it('Should display the add comment action for user has role Global admin', () => {
    const user = new UserModel({'fullName':'Issam Raouf' , role:'ROLE_GLOBAL_ADMIN'});
    localStorage.setItem('currentUser',JSON.stringify(user));
   
    expect(component.canDisplayAddComment).toBeTruthy();
  });
  
  it('Should display the add comment action for user has role Super admin', () => {
    const user = new UserModel({'fullName':'Issam Raouf' , role:'ROLE_SUPER_ADMIN'});
    localStorage.setItem('currentUser',JSON.stringify(user));
   
    expect(component.canDisplayAddComment).toBeTruthy();
  });
  
    
  it('Should only display the add comment action for users with the role global or super admin' , () => {
   const user = new UserModel({'fullName':'Issam Raouf' , role:'ROLE_USER'});
   localStorage.setItem('currentUser',JSON.stringify(user));
  
   expect(component.canDisplayAddComment).toBeFalsy();
  });
  
  .... Notre objectif est de voir comment et pourquoi le Mock et spies
  // pas de faire tout les specs
  
});


````

* Pour tester todoItemComponent, on a besoin de connaitre le fonctionnement interne du AppStateService.
* Ce n'est pas trés isolé , il s'agit d'un couplage serré et nos tests sont tres fragiles.
* On suppose que demain on change la facon de stockage de notre currentUser , on va le mettre sur IndexDB ou bien sur un cookie ,comme ca notre test de todoItemComponent serait interrompu et tout notres specs sont échouees :),
* Alors comment on va resoudre ca ?!
 1) On ne doit pas avoir des soucis par rapport AppStateService (autrement on s'en fout , c'est le role de son class de test app-state.serice.spec ...)
 2) On utilise des mocks and spies :D  
// show me the code :D

#### test avec Mock AppStateService
````
// todo-item.component.spec.ts

class MockAppStateService {
     public isSuperAdmin:boolean = false;
     public isGloablAdmin:boolean = false;
     
    public get userIsSuperAdmin(): boolean {
     return this.isGloablAdmin;
    }
    public get userIsGlobalAdmin(): boolean {
     return this.isSuperAdmin;
    }
}

// NB ou on peut extends le service AppStateService et Overriding les functions qu'on a besoin pour notre test de component TodoItem ..

describe('TodoItemComponent',() => {
  
  let mockAppStateService; 
  let component;
  
  beforeEach(() => {
    mockAppStateService = new MockAppStateService();
    component = new todoItemComponent(mockAppStateService);
  });
  
  afterEach(() => {
    mockAppStateService = null;
    todoItemComponent = null;
  });
  
  it('Should create',() => {
   expect(component).toBeTruthy();
  });
  
  it('Should display the add comment action for user has role Global admin', () => {
    mockAppStateService.isGloablAdmin = true;
    expect(component.canDisplayAddComment).toBeTruthy();
  });
  
  it('Should display the add comment action for user has role Super admin', () => {
    mockAppStateService.isSuperAdmin = true;
    expect(component.canDisplayAddComment).toBeTruthy();
  });
  
    
  it('Should only display the add comment action for users with the role global or super admin' , () => {
   // on fait rien par default super et global sur le mock sont false 
   expect(component.canDisplayAddComment).toBeFalsy();
  });
  ...
});

````
* Comme ca notre test de component TodoItem ne depend pas au vrai AppStateService,
* Notre code de test est moins fragile, et sera toujours valide et fonctione come prévu.. 

#### test with spies

Spy est une fonctionnalité de Jasmine qui nous permet de prendre une classe, 
une fonction ou un objet existant et de le mocking de manière à pouvoir contrôler ce qui est renvoyé par les appels de fonction.

````


describe('TodoItemComponent',() => {
  
  let appStateServ; 
  let component;
  
  beforeEach(() => {
    appStateServ = new AppStateService();
    // le TodoItemComponent a besoin du AppStateService service pour fonctionner (Dependence).
    // on inject la dépendance de notre component
    component = new todoItemComponent(appStateServ);

  });
  
  afterEach(() => {
    appStateServ = null;
    todoItemComponent = null;
  });
  
  it('Should create',() => {
   expect(component).toBeTruthy();
  });
  
  it('Should display the add comment action for user has role Global admin', () => {

    
    // on crée un spy sur notre service appStateServ afin que la propriete isGloablAdmin est appelée, elle retourne true.
    // on utilise spyOnProperty parce que userIsSuperAdmin est un propriete de l'objet n'est pas une functione
    spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
    
    // si isGloablAdmin est un fonctionne 
    // spyOn(appStateServ,'isGloablAdmin').and.returnValue(true);
    expect(component.canDisplayAddComment).toBeTruthy();
  });
  
  it('Should display the add comment action for user has role Super admin', () => {
      // on utilise spyOnProperty parce que userIsSuperAdmin est un propriete de l'objet... n'est pas une functione
    spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
    expect(component.canDisplayAddComment).toBeTruthy();
  });
  
    
  it('Should only display the add comment action for users with the role global or super admin' , () => {
  
    spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
    spyOnProperty(appStateServ,'isGloablAdmin').and.returnValue(true);
    expect(component.canDisplayAddComment).toBeFalsy();
  });
  
  
});

à voir les mots clés de spies
````



NB : à vous de continues tout les test de ces components..

1) Avec real service voir testing-with-moks-spies/with-real-service<br>
  run ng test --code-coverage --main ./src/app/9-testing/testing-with-mocks-spies/with-real-service/with-real-service.component.spec.ts
 ![alt text](img/comp-with-real-service.png)

2) Avec mock service voir testing-with-moks-spies/with-mock-service<br>
  run ng test --code-coverage --main ./src/app/9-testing/testing-with-mocks-spies/with-mock-service/with-mock-service.component.spec.ts
 ![alt text](img/comp-with-real-service.png)
3) avec spie voir testing-with-moks-spies/with-spies<br>
  run ng test --code-coverage --main ./src/app/9-testing/testing-with-mocks-spies/with-spies/with-spies.component.spec.ts
 ![alt text](img/comp-with-real-service.png)



### Test avec TestBed 

 * Angular Test bed (ATB) est un framework de test d'angular uniquement de niveau supérieur qui nous permet de tester facilement des comportements qui dépendent du framework angular.

 * On écrit toujours nos tests dans Jasmine et exécute à l'aide de Karma, mais on a maintenant un moyen un peu plus simple de créer des composants,
 de gérer l'injection, de tester le comportement asynchrone et d'interagir avec notre application.
 
 #### Maintenant on change un test qu'on a fait avec jasmine vanilla to ATB.
 
```
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
...
describe('TodoItemComponent',() => {
  
  let appStateServ:AppstateService; 
  let component:TodoItemComponent;
  
  // on stocke une référence à un élément DOM dans notre elStateDescriptionComment variable.
  let elStateDescriptionComment: DebugElement;
  
  // cette fixture est un wrapper pour le component (class et template)
  let fixture: ComponentFixture<TodoItemComponent>;
  
    beforeEach( ()=> {
  
    // Dans la beforeEach fonction de notre suite de tests, on configure un module de test à l'aide de la TestBed classe.
    // Cela crée un module angulaire de test qu'on peut l'utiliser pour instancier des composants, effectuer une injection de dépendance...
    // on le configure exactement de la même manière qu'on a configuré un normal NgModule. 
   
    TestBed.configureTestingModule({
          declarations: [TodoItemComponent],
          providers: [AppstateService]
    });
    
    // on crée un component fixture via le TestBed , cela va inject direct le service sur le constructeur de notre component
    fixture = TestBed.createComponent(LoginComponent); 

    // on recupére le reel component a partir de fixture par componentInstance
    component = fixture.componentInstance; 
    
    // fixture.debugElement (Nb:il y a aussi fixture.nativeElement..): c'est un wrapper à l' élément DOM de bas niveau qui représente la vue de notre composant.
    // By  : on peut obtenir des références à d'autres nœuds enfants en l'interrogeant debugElement avec une By classe.
    // la By classe nous permet d'interroger en utilisant un certain nombre de méthodes , ici on utilise class pour recupérer notre element
    // une autre façon est de demander par un type de directive comme By.directive(MyDirective) ou  By.directive(MyComponent).
    elStateDescriptionComment = fixture.debugElement.query(By.css('div.state-desc'));

    // on recupére notre dépandence à partir de TestBed par get(Type) , get(token Chaine de caractére ) ou get (InjectionToken) (chapitre DI)
    appStateServ = TestBed.get(AppstateService); 
    
    // fixture est un wrapper pour l'environnement de notre composant afin que nous puissions contrôler des choses comme la détection des modifications.
    // detectChanges va déclenche un cycle de détection de changement pour le composant
    // on peut aussi automatiser la détection à voir sur la doc https://angular.io/guide/testing#automatic-change-detection
    fixture.detectChanges();
  });
  
  afterEach(() => {
    appStateServ = null;
    todoItemComponent = null;
  });
  
  it('Should create',() => {
   expect(component).toBeTruthy();
  });
  
    it('Should display the add comment action for user has role Global admin', () => {
        spyOnProperty(AppStateSer, 'userIsGlobalAdmin').and.returnValue(true);
        fixture.detectChanges();
        expect(elStateDescriptionComment.nativeElement.textContent.trim()).toEqual('');
        expect(component.canDisplayAddComment).toBeTruthy();

    });
    it('Should display the add comment action for user has role Super admin', () => {
        spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
        fixture.detectChanges();
        expect(elStateDescriptionComment.nativeElement.textContent.trim()).toEqual('');
        expect(component.canDisplayAddComment).toBeTruthy();
    });


    it('Should only display the add comment action for users with the role global or super admin', () => {
        fixture.detectChanges();
        expect(elStateDescriptionComment.nativeElement.textContent.trim()).toEqual('Cannot add comment..');
        expect(component.canDisplayAddComment).toBeFalsy();
    });
});

```
#### NB:

Avec le TestBed , si on execute pour un file de specs avec ng test --main file.spec.ts, ca ne marche pas
Pourquoi ? 
Parce que le test est dedié d'un file de specs ,et ne passe pas par le file test.ts qui a le role de initiliser l'environment de TestBed et aussi import zone pour les traitements async , 
il se trouve sur la rachine du projet test.ts,
Mais on peut fixer ce probleme par l'ajout et initialise d'environment et ajout de zone sur notre file de specs
```
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'zone.js/dist/zone-testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

describe('TodoItemComponent',() => {
  
  let appStateServ:AppstateService; 
  let component:TodoItemComponent;

    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });
    ...


```

<h2>On va souvent utiliser le TestBed d'angular , pourquoi ? </h2>

* Il nous permet de tester l'interaction d'une directive ou d'un composant avec son template.

* Il nous permet de tester facilement la détection des modifications.

* Il nous permet de tester et d'utiliser le framework DI d'Angular.

* Il nous permet de tester en utilisant la NgModule configuration qu'on utilise dans notre application.

* Il nous permet de tester l'interaction des utilisateurs via des clics et des champs de saisie.
#### Exemple : 3-test-bed 

### Test bed , async

Tout va bien jusqu'à maintenant , mais on suppose qu'on veut tester des fonctionne asnyc (promisse ou obervable)

On prend un exemple pour bien comprendre :

````
//  
export class AppStateService 
{
  
   // Notre function return maintenant Promise est pas boolean
   public get userIsGlobalAdmin(): Promise<boolean> {
    return new Promise.resolve(this.currentUser.role === 'ROLE_GLOBAL_ADMIN');
   }
   ...
}


// Notre todo item component
    
    ...
    public canDisplayAddComment: boolean;
    
    public ngOnInit() : void {
     this.appState.userIsGlobalAdmin.then((state) => {
        this.canDisplayAddComment = state;
     });
    }
...

// todo-item.component.spec.ts


describe('TodoItemComponent',() => {
   // ....   
  
    it('Should display the add comment action for user has role Global admin', () => {
    
     //  promesse résolue à true.
     spyOn(AppStateSer, 'userIsSuperAdmin').and.returnValue(Promise.resolve(true));

     
     // déclenche un cycle de détection de changement pour le composant
     fixture.detectChanges();
          
     // Lors des tests,on doit appeler nous-mêmes ngOnInitde de cycle de vie de component,
     // Angular ne fera pas cela pour nous dans l'environnement de test.
     component.ngOnInit();  
     
     expect(component.canDisplayAddComment).toBeTruthy();
  });
  //....
  
});
````

<h3>Il semble que tout va bien !! , malheuresement notre test est echoué</h3>
Pourquoi ? <br>
Parce que la fonction AppStateSer.userIsSuperAdmin n'a pas encore une valeur (Promise),
et par la suite la canDisplayAddComment propriété n'a pas modifié..

#### Quelquels solutions pour resoudre ce probléme d'async 
##### Jasmine with done

Jasmine a une manière  intégrée de gérer le code asynchrone et c'est par la `done fonction passée comme args sur le specs,
Notre code maintenant devient : 

```
describe('TodoItemComponent',() => {

  
    it('Should display the add comment action for user has role Global admin', (done:DoneFn) => {
    
     cont spy = spyOn(AppStateSer, 'userIsSuperAdmin').and.returnValue(Promise.resolve(true));  
     fixture.detectChanges(); 
     
     // En chaining spy avec calls.mostRecent(), renverra le contexte (le this) et les arguments de l'appel le plus récent..
     spy.calls.mostRucent().returnValue().then(() => {
          fixture.detectChanges(); 
          component.ngOnInit(); 
          expect(component.canDisplayAddComment).toBeTruthy();
          
          // Lorsque nous avons terminé nos tâches asynchrones, nous en informons Jasmine via le call de fonction done 
          done();
     });

  });
  //....
  
});

```

##### Angular async et whenStable ,fakeAsync et tick
1.async et whenStable<br>
Angular a une autre méthode pour tester le code asynchrone via les fonctions `async` et `wenStable.`.
Notre code maintenant devient : 

```
describe('TodoItemComponent',() => {

    // Cette asyncfonction exécute le code à l'intérieur de son corps dans une zone de test asynchrone spéciale . 
    // Cela intercepte et garde une trace de toutes les promesses ou les observable créées dans son corps.  
    it('Should display the add comment action for user has role Global admin', async(() => {
    
     cont spy = spyOn(AppStateSer, 'userIsSuperAdmin').and.returnValue(Promise.resolve(true));  
     fixture.detectChanges(); 
     
     // Le fixture.whenStable () renvoie une promesse qui se résout lorsque JavaScript engine's task queue devient vide. 
    // ici,JavaScript engine's task queue devient vide lorsques Promise userIsSuperAdmin est resolut
      fixture.whenStable().then(() => { 
          fixture.detectChanges(); 
          component.ngOnInit(); 
          expect(component.canDisplayAddComment).toBeTruthy();
     });
  }));
  //....
  
});
```
2.fakeAsync et tick<br>
1.async et whenStable<br>
Angular a une autre méthode pour tester le code asynchrone via les fonctions `fakeAsync` et `tick`.
Notre code maintenant devient : 

````
describe('TodoItemComponent',() => {

    //fakeAsync  c'est comme async function, sauf il ne suit pas les demandes XHR .
    it('Should display the add comment action for user has role Global admin', fakeAsync(() => {
    
      cont spy = spyOn(AppStateSer, 'userIsSuperAdmin').and.returnValue(Promise.resolve(true));  
      fixture.detectChanges(); 
      
      // on appel tick() l orsqu'il y a des activités asynchrones en attente qu'on veut terminer.
      // La tick()fonction bloque l'exécution et simule le passage du temps jusqu'à ce que toutes les activités asynchrones en attente soient terminées.
      // ici il attend la promisse d'userIsSuperAdmin soit résolue , puis laisse l'exécution passer à la ligne suivante.

      tick();
      
      fixture.detectChanges(); 
      component.ngOnInit(); 
      expect(component.canDisplayAddComment).toBeTruthy();
  }));
  //....
  
});


````
---> Exemple 4-testbed-async
