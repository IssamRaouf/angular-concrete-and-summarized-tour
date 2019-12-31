### intro
* L'injection de dépendance (DI) est un modèle de conception d'application (design pattern) important.
 Angular a son propre framework DI, qui est généralement utilisé dans la conception d'applications angulaires pour augmenter leur efficacité et leur modularité.

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
           public send(condidat:condidatModel) {
              $recipant = condidat.email;
               ...
           }
   }
class Application {
       public mailerProvider:MailerProvider;
       
       // inject on construct ,we can inject with setter
       constructor(public mailerProvider:MailerProvider) {
            this.mailerProvider = mailerProvider;
       }
       
       
       public subscribe(condidat:condidatModel) {
        ...
        this.mailerProvider.send(condidat);
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
Il s'agit d'une correspondance entre un jeton et une liste de dépendances .

<strong>Injector (Injecteur)</strong><br>
c'est une fonction qui, lorsqu'elle est passée un jeton ,nous renvoie une ou list de dependances

``
<h1>Dependency injection en realité c'est sujet plus grand que ca et trés trés important , il merite la recherche ...</h1
``
