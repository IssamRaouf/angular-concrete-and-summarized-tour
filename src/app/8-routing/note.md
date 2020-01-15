### Intro

* Angular Router est un puissant routeur JavaScript construit et maintenu par l'équipe de base Angular qui peut être installé à partir du package `@angular/router`.
* Il fournit une bibliothèque de routage complète avec la possibilité d'avoir plusieurs sorties de routeur, différentes stratégies de correspondance de chemin, un accès facile aux paramètres de routage et des gardes de routage pour protéger les composants contre les accès non autorisés.
* Le routeur angulaire fait partie intégrante de la plate-forme angulaire. Il permet aux développeurs de créer des applications à page unique avec plusieurs vues et de permettre la navigation entre ces vues


#### Details

#### Router-outlet
Le Router-Outlet est une directive disponible dans la bibliothèque de routeurs où le routeur insère le composant qui est mis en correspondance en fonction de l'URL du navigateur actuel. 
on peut ajouter plusieurs directive(router-outlet) dans notre application angulaire, ce qui nous permet de mettre en œuvre des scénarios de routage avancés.

```
<router-outlet></router-outlet>
Tout composant qui est mis en correspondance par le routeur le rendra comme un frère de router-outlet
```

#### Routes et path

* Les routes sont des définitions (objets) composées d'au moins un chemin et des attributs d'un composant (ou d'un chemin de redirection). 

* Le chemin fait référence à la partie de l'URL qui détermine une vue unique qui doit être affichée, et le composant fait référence au composant angulaire qui doit être associé à un chemin.
* Sur la base d'une définition d'Route que nous fournissons  (via des méthodes statiques):
    ```
     RouterModule.forRoot(routes) ou
     RouterModule.forChild(routes),
    ```
    le routeur est capable de diriger l'utilisateur vers une vue spécifique.
    
* Chaque route mappe un chemin URL vers un composant.

* Le chemin peut être vide, ce qui indique le chemin par défaut d'une application ou d'un module et il s'agit généralement du début de l'application ou du module.

* Le chemin peut prendre une chaîne générique (**), Le routeur sélectionnera cette route si l'URL demandée ne correspond à aucun chemin pour les routes définies. 
  Cela peut être utilisé pour afficher une vue «Introuvable» ou rediriger vers une vue spécifique si aucune correspondance n'est trouvée.

1) Pour Application, (Module de routage racine (RouterModule.forRoot(routes)) )
````
// app-routing.module.ts
    
    const routes: Routes = [
        {
            path: '',
            component: DashboardTodosComponent
    
        },
        {
                path: 'list-todos',
                component: ListTodosComponent
        
        },
        {
            path: '**',
            component: NotFoundComponent
            // ou
           redirectTo: 'list-todos',
            
            
        }
        ...
    ];
    
    
    @NgModule({
        // forRoot 
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    
    export class RoutingRoutingModule {
    
    }


````


1) Pour Module (RouterModule.forChild(routes)) 
````
// todo-routing.module.ts

const routes: Routes = [
    {
        path: '',
        component: DashboardTodosComponent

    },
    {
            path: 'list-todos',
            component: ListTodosComponent
    
    },
    
    ...
];


@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingRoutingModule {

}
````

#### Route params:
Le routeur angulaire vous permet d'accéder aux paramètres de route de différentes manières,
* par ActivatedRoute service,
* ...

````
  1) // app-routing.module.ts
    ...
    
    { path:'todo-item/:id', component:ItemTodoComponent}
    
  2) // Redirection vers  todo-item/999
  
  3) // item-todo.component.ts
       ...
       private idTodo:number;
       

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
      this.idTodo =  this.activatedRoute.snapshot.paramMap.get('id'); // 999
    }

````

### Navigation
1) Directive
Le routeur angulaire fournit la directive routerLink pour créer des liens de navigation. 
Cette directive prend le chemin d'accès associé au composant vers lequel naviguer. 

```
<a [routerLink]="['/todo-list']">List</a>

<a [routerLink]="['/todo-item', { id: idTodo}]">List</a>
```

2) Router
````
// todoListCompoent
    
public construct(private router:Router) {

}

public goToItemTodo(idTodo:number) : void {
    this.router.navigate(['./todo-item',{ id: idTodo}]);
}

public goToListUsers() : void {
    this.router.navigate(['/users-list']);
}

````
#### Route child
* Lorsque certains Routes peuvent uniquement être accessibles et affichés dans d'autres Routes,
il peut être approprié de les créer en tant qu'Routes enfants (route childs)

* children => Contient tous les routes enfants activés sous la route actuel.

* <h5> Où les composants de ces routes enfants seront-ils affichés? </h5>
Tout comme on a une `<router-outlet> </router-outlet>` pour le composant d'application racine (app.component.html) 
on va mettre une `<router-outlet> </router-outlet>` à l'intérieur du composant DashboardTodosComponent.
Les composants correspondant aux routes enfants de 'dashboard' route seront placés au 
au dessous de `<router-outlet> </router-outlet>` qui se trouve dans DashboardTodosComponent.

Exemple : 


```
// todo-routing.module.ts

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardTodosComponent,
        children: [
            // url ==> localhost:4200/dashboard
            // si la route contient juste 'dashboard'
            // redirect vers la list todos 
            {
              path:'',
              redirectTo:'list-todos'
              path: 'full'
            },
            // url ==> localhost:4200/dashboard/list-todos
            {
               path: 'list-todos',
               component: ListTodoComponent,
             },
             // url ==> localhost:4200/dashboard/todo-details
             {
               path: 'todo-details',
               component: TodoDetailsComponent,
              },
              // url ==> localhost:4200/dashboard/todo-form
              {
                path: 'todo-form',
                component: TodoFormComponent,
               }
        ]
    },
    
    
    ...
];

// dashboard-todos.component.html
 <h1>Dashboard</h1> 
 ... blabla
 <router-outlet></router-outlet> // ;)


```


### Guard Route

* Un garde-route est une fonctionnalité du routeur angulaire qui nous permet  d'exécuter une certaine logique lorsqu'un Route est demandé, 
et sur la base de cette logique, il autorise ou refuse à l'utilisateur l'accès à l'Route. 
* Il est couramment utilisé pour vérifier si un utilisateur est connecté et dispose de l'autorisation avant d'accéder à une page.
* On peut ajouter un garde-route en implémentant l'interface CanActivate ou... disponible à partir du package @angular/router`:

1) CanActivate: 
Interface qu'une classe peut implémenter pour être un gardien décidant si une <strong>Route</strong> peut être activée. 
Si tous les gardes on dit tous les gardes car chaque route peut avoir multi garde ) retournent vrai, la navigation continuera.
Si un garde retourne faux, la navigation sera annulée,et on peut redirect vers ce qu'on veut.

1) CanActivateChild: 
Interface qu'une classe peut implémenter pour être un gardien décidant si une <strong>Route ENFANT</strong> peut être activée. 
Si tous les gardes (on dit tous les gardes car chaque route peut avoir multi garde ) retournent vrai, la navigation continuera. 
Si un garde retourne faux, la navigation sera annulée,et on peut redirect vers ce qu'on veut.


3) CanDeactive:
Interface qu'une classe peut implémenter pour être un gardien décidant si une route peut être désactivée. 
Si tous les gardes retournent vrai, la navigation continuera. 
Si un garde retourne faux, la navigation sera annulée. 
utilisateur peut avoir rempli une forme et tente de quitter ce composant sans enregistrer son travail. 
Le gardien CanDeactivate nous donne la possibilité d'avertir l'utilisateur qu'il n'a pas enregistré son travail et lui donne la possibilité d'annuler la navigation.

4) CanLoad:

Le CanLoad Guard empêche le chargement du module (lazy-loading).
on utilise généralement cette garde lorsque nous ne voulons pas qu'un utilisateur non autorisé navigue vers l'une des routes du module
il l'arrête ,meme il empeche le telechargement de code source de ce module.

Exemple : (CanActivate) (on va voir les autres sur le code de cette chapitre)
````
// service only-super-admin.guard.ts
class OnlySuperAdminGuard implements CanActivate {
    // appState c'est notre propre service 
   construct(private router:Router,private appState: AppStateService)

  canActivate() {
      if(!this.appState.currentUser.isSuperAdmin()) {
        this.router.navigate(['/dashboard']); // exmp
        return false;
      }
      return true;
  }
}
// app.routing.ts

const routes: Array<Route> = [
             {
                  path: 'dashboard',
                  component: DashboardTodosComponent,
                  
          
              },
              {
                      path: 'list-todos',
                      component: ListTodosComponent,
                      canActivate: [OnlySuperAdminGuard]
              
              },
]
````


#### Route Resolve

* L'angulaire rend le composant angulaire lorsque nous naviguons vers un route.
Le composant envoie alors une requête HTTP au serveur principal pour récupérer les données afin de les afficher à l'utilisateur.
Nous le faisons généralement dans ngOnInit (Life cycle hook)

* Le problème avec l'approche ci-dessus est que, l'utilisation verra un composant vide. Le composant affiche les données après leur arrivée,
 La seule façon de résoudre ce problème est d'afficher un indicateur de chargement(loading bar ...)

* Une autre façon de résoudre ce problème est d'utiliser le Resolve. Le Resolve récupère les données avant de naviguer vers la route. 
et comme ca le composant est rendu avec les données.

Exemple :
````
// Service todo-list.resolve.ts 
@Injectable()
export class todoListResolve implements Resolve<Array<Ticket> {

    // todoRestService notre propre service pour les appel au webService ;) 
    constructor(private todoRestService: TodoRestService) { }

    public resolve(): Observable<Array<Ticket>> {
        return this.todoRestService.getListTodos();
    }
}


// app.routing.ts

const routes: Array<Route> = [
             {
                  path: 'dashboard',
                  component: DashboardTodosComponent,
                  
          
              },
              {
                      path: 'list-todos',
                      component: ListTodosComponent,
                      resolve: { listTodo: todoListResolve }
              
              },
]
// list-todos.component.ts (ListTodosComponent)

export class ListTodosComponent implements OnInit {
       public listTodo:Array<Ticket> = [];
     constructor(private _route: ActivatedRoute) {
     }
     
     public ngOnInit(): void {
       this.listTodo = this._route.snapshot.data.listTodo;
     }
    ...
}


````


#### Lazy Loading (chargement paresseux) Route

Par défaut, les NgModules sont chargés avec impatience, ce qui signifie que dès que l'application se charge,
il en va de même pour tous les NgModules, qu'ils soient ou non immédiatement nécessaires.
Pour les grandes applications avec de nombreux Routes, envisagez le chargement paresseux, un modèle de conception qui charge les NgModules selon les besoins. 
Le chargement paresseux permet de réduire la taille initiale des Bundles, ce qui contribue à réduire les temps de chargement.
...

<h3>J'ai appliqué ca sur ce projet :D enjoy</h3>
par exemple Exemple: voir 1-component/content-projection/content-projection.module , content-projection.routing.mdoule.ts
et app-routing.module.ts



### Exemple all module routing (routing-routing.module.ts , todo-form ...)
