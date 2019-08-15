```
// production or development builds of our applicaiton go here.
├── dist

// main application code goes here.
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts

// settings for the different environments, dev, qa, prod.
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts

// main html and typescript file
│   ├── index.html
│   ├── main.ts

│   ├── favicon.ico
│   ├── polyfills.ts
│   ├── styles.css
// prepares test environment and runs all the unit tests
│   ├── test.ts

// typescript configuration file
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json

// typescript type definition file
│   └── typings.d.ts

// The E2E tests for our application go here
├── e2e

├── angular-cli.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
└── tslint.json

```
