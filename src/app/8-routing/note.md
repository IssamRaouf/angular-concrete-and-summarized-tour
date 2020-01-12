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

1) Pour Application complete (RouterModule.forRoot(routes)) 
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


### Guard Route

* Un garde-route est une fonctionnalité du routeur angulaire qui nous permet  d'exécuter une certaine logique lorsqu'un Route est demandé, 
et sur la base de cette logique, il autorise ou refuse à l'utilisateur l'accès à l'Route. 
* Il est couramment utilisé pour vérifier si un utilisateur est connecté et dispose de l'autorisation avant d'accéder à une page.
* On peut ajouter un garde-route en implémentant l'interface CanActivate disponible à partir du package @angular/router`:

````
// only-super-admin.guard.ts
class OnlySuperAdminGuard implements CanActivate {
    // appState c'est notre propre service 
   construct(private router:Router,private appState: AppStateService)

  canActivate() {
      if(!this.appState.currentUser.isSuperAdmin()) {
        this.router.navigate(['/Dashboard']); // exmp
        return false;
      }
      return true;
  }
}
// app.routing.ts

const routes: Array<Route> = [
             {
                  path: '',
                  component: DashboardTodosComponent,
                  
          
              },
              {
                      path: 'list-todos',
                      component: ListTodosComponent,
                      canActivate: [OnlySuperAdminGuard]
              
              },
]
````


##### NB: à voir aprés , CanActivateChild,CanLoad..










