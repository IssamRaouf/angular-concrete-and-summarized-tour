#### Let
* let est un ajout très important du langage javascript dans ES6.
* Ce n'est pas un remplacement pour  var, var peut toujours être utilisé même dans ES6 et a la même sémantique que ES5.
* Cependant, à moins que vous n'ayez une raison particulière d'utiliser var, 
 toutes les variables que vous définissez désormais doivent être utilisées let.
 
#### const 
* const permet de déclarer des variables qui ne changent pas dans le temps, qui sont immuables.
* Le problème important avec const est que la variable est immuable, mais pas la valeur, ce que la variable pointe vers.
* Cela signifie que si nous déclarons un objet comme étant une  const source de confusion, nous pouvons toujours modifier les propriétés de cet objet ultérieurement.

#### Template String (Littéraux de gabarits)
 Les littéraux de gabarits sont des littéraux de chaînes de caractères permettant d'intégrer des expressions. Avec eux, on peut utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation.
 ```
  // old
   const description = 'Le ticket N° : '+ ticket.id + 
                        'est ' + ticket.status;
  // with
  const description = `Le ticket N° : ${ticket.id}
                         est ${ticket.status};`
                         
 ```
 
#### Arrow functions (ECMAScript 2015)
 La nouvelle syntaxe de la grosse flèche dans ES6 est bien plus qu'un moyen légèrement plus 
 court d'écrire des fonctions anonymes.
 ```
   // old
   function sayHello(name) {
    return `Hello ${name}`;
   }
   sayHello('Issam Raouf'); // Hello Issam Raouf
   // with 
   sayhello = name => `hello ${name}`; 
   sayHello('Issam Raouf'); // Hello Issam Raouf
   
   
    tickets = [
    {ticketUuid:'988JNH', status:'In progress'}
    {ticketUuid:'997HBh', status:'Review'}
    {ticketUuid:'KL99MP', status:'Done'}
    {ticketUuid:'OLPM99', status:'Done'}
    {ticketUuid:'OLMP77', status:'Done'}
    {ticketUuid:'PMAKLJ', status:'Done'}
    {ticketUuid:'LMAKAU', status:'Done'}
    ];
   
   // old
   function ticketsNumbersByStatus(tickets) {
     return tickets.reduce(function(accum,curTicket) {
           (accum[curTicket.status] ? accum[curTicket.status]+=1 : accum[curTicket.status]=1 )
            return accum;
        }, {});
   };
   ticketsNumbersByStatus(tickets); // { 'In progress': 1, 'Review': 1, 'Done': 5 }
   
   // with
   const ticketsNumbersByStatus =  (tickets)  => {
        return tickets.reduce((accum,curTicket) => {
              (accum[curTicket.status] ? accum[curTicket.status]+=1 : accum[curTicket.status]=1 )
               return accum;
           }, {});
      };
      
   ticketsNumbersByStatus(tickets); // { 'In progress': 1, 'Review': 1, 'Done': 5 }
   
 ```
#### Destructuring
La destruction est une fonctionnalité utile de ES6. Elle permet 
L'affectation par décomposition (destructuring en anglais) est une expression JavaScript qui permet d'extraire (unpack en anglais) des données
d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
```
1) Array
      exp1: Destructuring simple d'un tableau 
        const [a, b] = [11, 22, 33, 44,55];
              console.log('a', a); // 11
              console.log('b', b);// 22
              
      exp2: default value
        const [a,b=10] = [11];
              console.log('a', a); // 11
              console.log('b', b);// 22
            
      exp3: Affecter le reste d'un tableau à une variable
        const [a, b, ...c] = [11, 22, 33, 44,55];
              console.log('a', a); // 11
              console.log('b', b);// 22
              console.log('c', c);// [33,44,55]
      ...
2) Object 
      exp1: Destructuring simple d'un object
        const {a, b} = {a:11, b:22, c:33, d:44,e:55};
              console.log('a', a); // 11
              console.log('b', b);// 22
              
       exp2: default value
              const {a,b=10} =  {a:11};
                    console.log('a', a); // 11
                    console.log('b', b);// 22
                  
      exp3: Affecter le reste d'un object à une variable
        const {a, b, ...c} =  {a:11, b:22, c:33, d:44,e:55};
              console.log('a', a); // 11
              console.log('b', b);// 22
              console.log('c', c);// {c:33,d:44,:e55}
              
      exp4: change keys
       const {a:aa, b:bb} =  {a:11, b:22, c:33, d:44,e:55};
                    console.log('aa', aa); // 11
                    console.log('bb', bb);// 22
                    
      exp5: Dustracting imbriquée avec objets et tableaux & change keys
      const dev = {
            name:'Issam Raouf',
            job: 'lead dev',
            stackTech:[
                    {
                     name:'Symfony',
                    }
            ]
      };
      const { fullName:name, stackTech: [{name:techLove}] } = dev;
      console.log('fullName',fullName); // Issam Raouf
      console.log('techLove',techLove); // Symfony

      ...
```



####  for-of
L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) 
et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
```
let list = [11, 22, 33];

for (let val of list) {
  console.log(valeur); // 11 
                       // 22
                       // 33
}
```
#### Map & set

* Map et Set sont d'excellents ajouts à JavaScript dans ES6.

exmeple:

```
// MAP
// L'objet Map représente un dictionnaire, autrement dit une carte de clés/valeurs.
// N'importe quelle valeur valable en JavaScript (que ce soit les objets ou les valeurs de types primitifs) peut être utilisée comme clé ou comme valeur.

let map = new Map();
    map.set("A", 11);
    map.set("B", 22);
    map.set("C", 33);

let map2 = new Map()
  .set("A", 11)
  .set("B", 22)
  .set("C", 33);

let map3 = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3]
]);

for (let [key, value] of map) {
  console.log(key, value); // A , 1
                           // B , 22
                           // C , 33
}

console.log(map.get("A")); // 11
console.log(map.has("A")); // true
console.log(map.size); // 3

map.delete("A");
console.log(map.size); // 2

map.clear();
console.log(map.size); //0


// Set
// L'objet Set permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.
let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');


let set2 = new Set()
  .add('APPLE')
  .add('ORANGE')
  .add('MANGO');

let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

console.log(set.has('APPLE'));

set.delete('APPLE');

console.log(set.size);

set.clear();
console.log(set.size);


let set4 = new Set();
set3.add('Moo');
console.log(set3.size);
// 1
set4.add('Moo');
console.log(set4.size);
// 1

for (let entry of set2) {
  console.log(entry);
}
```
#### Promise
* Les promesses sont une solution bien plus propre à l'écriture de code asynchrone que les rappels.

* Le code ainsi créé est plus facile à lire et est souvent écrit dans l’ordre exécuté par l’application.

* Il peut donc être plus facile de tracer un code dans votre tête.

* Avec le catch gestionnaire, cela nous donne également un endroit unique où nous pouvons gérer les erreurs.

exemple:

```
// Via callbacks
/*
 function doAsyncTask(cb) {
 setTimeout(() => {
 console.log("Async Task Calling Callback");
 cb();
 }, 1000);
 }
 doAsyncTask(() => console.log("Callback Called"));
 */



// Via Promise
let error = false;
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('error');
      } else {
        resolve('done');
      }
    }, 1000);
  });
}

doAsyncTask().then(
    (val) => console.log(val),
    (err) => console.error(err)
);

// Immediately Resolved Promise
let promise = Promise.resolve('done');
promise.then((val) => console.log(val)); // 'done'

// Handling Errors
Promise.resolve('done')
    .then((val) => {throw new Error("fail")})
    .then((val) => console.log(val))
    .catch((err) => console.error(err));
```
#### Class & interface
* Dans ES6, nous avons maintenant une nouvelle façon d'écrire du code orienté objet avec la  class syntaxe.

* Nous pouvons hériter des méthodes et propriétés d'une classe dans une autre en utilisant le extends mot -  clé.

* Sous le capot, nous utilisons toujours un héritage basé sur un prototype, mais la syntaxe est plus facile à comprendre et plus familière pour les développeurs venant d'autres langages.

* TypeScript ajoute quelques fonctionnalités supplémentaires en haut des classes ES6, comme  modificateurs d'accès et  interfaces

exemple:
```
interface Human {
  firstName: string;
  lastName: string;
  name?: Function;
  isLate?(time: Date): Function;
}

class Person implements Human {
  constructor(public firstName, public lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}

class Student extends Person {
  constructor(public firstName, public lastName, public course) {
    super(firstName, lastName);
  }

  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}

let iraouf = new Student("Issam", "Raouf", "typescript");
console.log(iraouf.whoAreYou());
```
### Decorator 
* Les décorateurs sont une nouvelle fonctionnalité de TypeScript et sont utilisés dans le code angulaire, mais ils ne doivent en aucun cas être effrayés.

* Avec les décorateurs, nous pouvons configurer et personnaliser nos classes au moment de la conception.

* Ce ne sont que des fonctions qui peuvent être utilisées pour ajouter des méta-données, des propriétés ou des fonctions à la chose à laquelle elles sont attachées.

```
function Student(config) {
  return function (target) {
    Object.defineProperty(target.prototype, 'course', { value: () => config.course })
  }
}

@Student({
  course: "angular8"
})
class Person {
  constructor(private firstName, private lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}

let iraouf = new Person("issam", "Raouf");
console.log(iraouf.course()); // angular 8
```

###Async/await

<strong>Async</strong> Une fonction définie avec le mot clé async renvoie systématiquement une promesse : si une erreur est levée pendant l’exécution de la fonction, la promesse est rejetée, et si une valeur est retournée, la promesse est résolue avec cette valeur. Si une promesse est retournée, elle est inchangée.
```
async function fonctionAsynchroneOk() {
 // équivaut à :
 // return Promise.resolve('résultat');
 return 'résultat';
}
fonctionAsynchroneOk().then(console.log) // log "résultat"

async function fonctionAsynchroneKo() {
 // équivaut à :
 // return Promise.reject(new Error('erreur'));
 throw new Error('erreur');
}
fonctionAsynchroneKo().catch(err => console.log(err.message)) // log "erreur"

```
<strong>Await</strong> La partie la plus intéressante est l’utilisation du mot clé await, qui ne peut être utilisé que dans une fonction async. Il permet d’attendre la résolution d’une promesse et retourner sa valeur.
```
async function getNombreAsynchrone1() {/* traitement asynchrone (e.g. appel d’une API HTTP) */}
async function getNombreAsynchrone2() {/* traitement asynchrone (e.g. appel d’une API HTTP) */}

async function getAdditionAsynchrone() {
 const nombre1 = await getNombreAsynchrone1();
 const nombre2 = await getNombreAsynchrone2();
 return nombre1 + nombre2;
}

```
### Modules
* Avec les modules ES6, nous disposons enfin d’un mécanisme permettant à la langue de charger pour nous les fichiers dépendants.
* Ce n'est pas encore cuit dans les moteurs javascript. Donc, pour résoudre ce problème dans Angular,
 nous utilisons toujours la syntaxe de chargement du module ES6, mais laissons le soin à TypeScript de le transpiler en CommonJS.
```
// export

export function square(x) {
    return Math.pow(x, 2)
}
export function cow() {
    console.log("Mooooo!!!")
}

// import
import * as utils from './utils';
console.log(utils.square(4));
utils.cow();

```
### Types Typescript
####Types de base:
* let decimal: number = 6;
* let done: boolean = false;
* let color: string = "blue";
#### Tableaux
* let list: number[] = [1, 2, 3];
* générique : let list: Array<number> = [1, 2, 3];

#### Functions 
* let fun: Function = () => console.log("Hello");
#### Enum

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let go: Direction;
go = Direction.Up;

#### Assertion de type

1) (<string>value) indique à TypeScript que nous croyons que le type de valeur est une chaîne.

* let value: any = 'issam raouf';
* let length: number = (<string>value).length;

#### Génériques
```
// Probleme
class AudioPost {
    content: Audio;
}

class VideoPost {
    content: Video;
}

class LinkPost {
    content: Link;
}

class TextPost {
    content: Text;
}
 
//Solution

class Audio {}
class Video {}
class Link {}
class Text {}

class Post<T> {
    content: T;
}

let videoPost: Post<Video>;
```

#### Resume Types :
* Avec la vérification de type de temps de transfert, TypeScript peut aider à détecter les bogues beaucoup plus tôt et plus rapidement que s'ils se manifestaient au moment de l'exécution.

* L'utilisation de types est facultative mais fortement recommandée par l'équipe angulaire.

* Si vous utilisez des bibliothèques tierces déjà transpilées en javascript, typescript peut toujours effectuer une vérification de type en temps de transpile si nous incluons le fichier de définition de type pour la bibliothèque.

...
