import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from '@angular/fire/firestore';
import { from, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  courses = [
    {
      id: '001',
      name: 'HTML',
    },
    {
      id: '002',
      name: 'CSS',
      subcourses: ['CSS3', 'Tailwind CSS', 'SaSS'],
    },
    {
      id: '003',
      name: 'Bootstrap',
    },
    {
      id: '004',
      name: 'Javascript',
    },
    {
      id: '005',
      name: 'Typescript',
    },
    {
      id: '006',
      name: 'Angular',
      questions: [
        {
          question: 'What is Angular Framework?',
          answer:
            'Angular is a platform and framework for building single-page client applications using HTML, CSS, and TypeScript. It provides tools for building dynamic web apps, handling routing, managing forms, and more.',
        },
        {
          question: 'What is the difference between AngularJS and Angular?',
          answer:
            'AngularJS (1.x) is based on JavaScript and follows a MVC architecture, while Angular (2+) is a complete rewrite of AngularJS, using TypeScript and a component-based architecture with enhanced performance and more features.',
        },
        {
          question: 'What is TypeScript?',
          answer:
            'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It includes features like static typing, classes, and interfaces, and is used to build large, scalable Angular applications.',
        },
        {
          question: 'Write a pictorial diagram of Angular architecture.',
          answer:
            "The Angular architecture includes core components like Modules, Components, Templates, Metadata, Data Binding, Services, Directives, Dependency Injection, and Routing. (Note: A diagram can't be shown here in text.)",
        },
        {
          question: 'What are the key components of Angular?',
          answer:
            'The key components of Angular include Modules, Components, Templates, Metadata, Data Binding, Directives, Services, and Dependency Injection.',
        },
        {
          question: 'What are directives?',
          answer:
            'Directives are instructions in the DOM that tell Angular how to manipulate a part of the HTML page. They can be structural (like `*ngIf`) or attribute-based (like `ngClass`).',
        },
        {
          question: 'What are components?',
          answer:
            'Components are the basic building blocks of Angular applications. They control a part of the UI and consist of an HTML template, a TypeScript class, and optional CSS styles.',
        },
        {
          question: 'What are the differences between Component and Directive?',
          answer:
            'A Component is a specialized directive with a template, whereas a Directive manipulates the DOM without requiring a template. Components are typically used for UI views, while directives modify behavior.',
        },
        {
          question: 'What is a template?',
          answer:
            "A template in Angular is a part of a component that defines the view using HTML, along with Angular's template syntax, like interpolation and directives.",
        },
        {
          question: 'What is a module?',
          answer:
            'A module is a container for a group of related components, services, pipes, and directives in Angular. The root module is defined in `app.module.ts` using the `@NgModule` decorator.',
        },
        {
          question: 'What are lifecycle hooks available?',
          answer:
            'Angular lifecycle hooks include `ngOnInit`, `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngAfterViewChecked`, `ngAfterContentInit`, `ngAfterContentChecked`, and `ngOnDestroy`.',
        },
        {
          question: 'What is data binding?',
          answer:
            'Data binding in Angular refers to the connection between the UI and the data model. It includes one-way data binding (interpolation and property binding) and two-way data binding using `[(ngModel)]`.',
        },
        {
          question: 'What is metadata?',
          answer:
            'Metadata in Angular is used to define extra information about components, directives, or modules. It is provided via decorators, such as `@Component` and `@NgModule`.',
        },
        {
          question: 'What is Angular CLI?',
          answer:
            'Angular CLI is a command-line interface tool that helps to create, build, and manage Angular applications efficiently, providing commands for scaffolding, testing, and deployment.',
        },
        {
          question: 'What is the difference between constructor and ngOnInit?',
          answer:
            "The constructor is a standard TypeScript feature that initializes the class, while `ngOnInit` is an Angular lifecycle hook called once the component's data-bound properties are initialized.",
        },
        {
          question: 'What is a service?',
          answer:
            'A service is a class in Angular that encapsulates business logic or data and can be shared across multiple components using dependency injection.',
        },
        {
          question: 'What is dependency injection in Angular?',
          answer:
            'Dependency Injection (DI) is a design pattern in Angular that provides components or services with their dependencies automatically, promoting modularity and reusability.',
        },
        {
          question: 'How is Dependency Hierarchy formed?',
          answer:
            'Dependency hierarchy in Angular is formed by registering providers in either the root injector (global) or child injectors (local), allowing different components to share or have their own instances of services.',
        },
        {
          question: 'What is the purpose of async pipe?',
          answer:
            'The `async` pipe automatically subscribes to an observable or promise, and updates the view when new data is emitted. It also unsubscribes when the component is destroyed.',
        },
        {
          question:
            'What is the option to choose between inline and external template file?',
          answer:
            'Angular allows you to specify inline templates within the `template` property of a component, or use external templates by setting the `templateUrl` property.',
        },
        {
          question: 'What is the purpose of *ngFor directive?',
          answer:
            '`*ngFor` is a structural directive that allows you to loop over a collection (like an array) and repeat a template for each item in the collection.',
        },
        {
          question: 'What is the purpose of ngIf directive?',
          answer:
            "`ngIf` is a structural directive that conditionally adds or removes elements from the DOM based on the expression's truthiness.",
        },
        {
          question: 'What happens if you use script tag inside template?',
          answer:
            'Using a `<script>` tag inside an Angular template is not recommended and Angular will typically ignore or sanitize it for security reasons.',
        },
        {
          question: 'What is interpolation?',
          answer:
            'Interpolation in Angular refers to embedding expressions into the HTML using `{{expression}}` syntax, allowing dynamic data to be displayed in the view.',
        },
        {
          question: 'What are template expressions?',
          answer:
            'Template expressions are simple JavaScript expressions used in Angular templates to bind data. They are evaluated within the Angular context and are typically used in interpolation or directive bindings.',
        },
        {
          question: 'What are template statements?',
          answer:
            'Template statements are used to respond to user actions in templates, such as binding events like click, change, or submit using `(event)` syntax.',
        },
        {
          question: 'How do you categorize data binding types?',
          answer:
            'Angular categorizes data binding into three types: one-way binding (interpolation, property binding, and event binding) and two-way binding (using `[(ngModel)]`).',
        },
        {
          question: 'What are pipes?',
          answer:
            'Pipes in Angular are used to transform data in templates. For example, `date`, `uppercase`, and `currency` are built-in pipes for formatting data.',
        },
        {
          question: 'What is a parameterized pipe?',
          answer:
            "A parameterized pipe allows you to pass arguments to a pipe. For example, in `{{ dateValue | date:'short' }}`, `short` is an argument for the `date` pipe.",
        },
        {
          question: 'How do you chain pipes?',
          answer:
            "Pipes can be chained together by passing the output of one pipe as the input to another. For example: `{{ value | date:'short' | uppercase }}.",
        },
        {
          question: 'What is a custom pipe?',
          answer:
            "A custom pipe is a user-defined pipe used to transform data in a way that is not provided by Angular's built-in pipes. You can create one using `ng generate pipe`.",
        },
        {
          question: 'Give an example of custom pipe.',
          answer:
            "For example, a `capitalize` custom pipe might look like this: `{{ 'hello' | capitalize }}` would output 'Hello'.",
        },
        {
          question: 'What is the difference between pure and impure pipe?',
          answer:
            'Pure pipes are stateless and only re-run when the input changes. Impure pipes run on every change detection cycle, which makes them less efficient but necessary for certain scenarios.',
        },

        {
          question: 'What is a bootstrapping module?',
          answer:
            'A bootstrapping module in Angular is the root module that initializes the application. It’s defined in `app.module.ts` using the `@NgModule` decorator, and its `bootstrap` array specifies the root component.',
        },
        {
          question: 'What are observables?',
          answer:
            'Observables are a key part of RxJS, and they represent a stream of asynchronous data. They are used extensively in Angular for handling events, HTTP requests, and more.',
        },
        {
          question: 'What is HttpClient and its benefits?',
          answer:
            'HttpClient is a service in Angular that allows you to communicate with backend services over HTTP. Benefits include simplified API for HTTP methods, typed request and response handling, and support for interceptors.',
        },
        {
          question: 'Explain how to use HttpClient with an example.',
          answer:
            "To use HttpClient, import `HttpClientModule` in your app module. Example: `this.http.get('https://api.example.com/data')` fetches data from the API.",
        },
        {
          question: 'How can you read full response?',
          answer:
            "You can read the full response by using the `observe: 'response'` option in the HttpClient request, which provides access to headers and status code.",
        },
        {
          question: 'How do you perform error handling?',
          answer:
            'Error handling can be done using `catchError` in RxJS or by using HttpClient interceptors. You can handle errors and retry failed requests as needed.',
        },
        {
          question: 'What is RxJS?',
          answer:
            'RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs using observables. Angular leverages RxJS for handling HTTP requests, user input, and more.',
        },
        {
          question: 'What is subscribing?',
          answer:
            "Subscribing in Angular means registering to an observable to receive values emitted over time. The `.subscribe()` method allows you to handle the observable's emitted data.",
        },
        {
          question: 'What is an observable?',
          answer:
            'An observable is a function that produces a stream of values over time. It is a core concept in reactive programming, allowing Angular to handle asynchronous data.',
        },
        {
          question: 'What is an observer?',
          answer:
            'An observer is an object that defines callback methods (`next`, `error`, `complete`) to handle the values, errors, or completion signals emitted by an observable.',
        },
        {
          question: 'What is the difference between promise and observable?',
          answer:
            'Promises deal with single values and are eager, while observables are lazy and handle multiple values over time. Observables also support operators for transformation and chaining.',
        },
        {
          question: 'What is multicasting?',
          answer:
            'Multicasting in Angular refers to the ability of observables to share a single execution path among multiple subscribers. This can be done using subjects or other multicast operators.',
        },
        {
          question: 'How do you perform error handling in observables?',
          answer:
            'Error handling in observables is done using operators like `catchError` or `retry`. These operators allow you to handle errors and retry failed observable operations.',
        },
        {
          question: 'What is the shorthand notation for subscribe method?',
          answer:
            'The shorthand notation for the `.subscribe()` method allows you to pass only the success callback, like this: `observable.subscribe(value => console.log(value));`.',
        },
        {
          question: 'What are the utility functions provided by RxJS?',
          answer:
            'RxJS provides utility functions like `map`, `filter`, `mergeMap`, `concatMap`, `switchMap`, `catchError`, `retry`, `debounceTime`, and more for manipulating and handling observables.',
        },
        {
          question: 'What are observable creation functions?',
          answer:
            'Observable creation functions in RxJS include `of`, `from`, `interval`, `timer`, and `fromEvent`, which are used to create observables from various sources.',
        },
        {
          question:
            'What will happen if you do not supply a handler for the observer?',
          answer:
            'If no handler is supplied for the `error` or `complete` callbacks, the observable will still execute without throwing an exception, but errors may go unhandled.',
        },
        {
          question: 'What are Angular elements?',
          answer:
            'Angular Elements are Angular components packaged as custom elements (native web components) that can be used in any HTML page, including non-Angular applications.',
        },
        {
          question: 'What is the browser support of Angular Elements?',
          answer:
            'Angular Elements are supported in modern browsers, including Chrome, Edge, Firefox, and Safari. Polyfills may be required for older browsers.',
        },
        {
          question: 'What are custom elements?',
          answer:
            'Custom elements are web platform APIs that allow developers to define new HTML tags and elements. Angular Elements are a specific implementation of custom elements using Angular components.',
        },
        {
          question: 'Do I need to bootstrap custom elements?',
          answer:
            'No, custom elements are self-bootstrapped. Once defined, they can be used directly in any HTML page without the need for Angular bootstrapping.',
        },
        {
          question: 'Explain how custom elements work internally.',
          answer:
            "Custom elements are defined using the `customElements.define` method and rely on the browser's native custom element lifecycle, which Angular integrates with using Angular Elements.",
        },
        {
          question: 'How to transfer components to custom elements?',
          answer:
            'Angular components can be converted to custom elements by using the `createCustomElement` method from the `@angular/elements` package, which wraps the component in a custom element definition.',
        },
        {
          question:
            'What are the mapping rules between Angular component and custom element?',
          answer:
            'Angular component inputs are mapped to custom element attributes, and outputs are mapped to custom DOM events. Angular also handles change detection internally.',
        },
        {
          question: 'How do you define typings for custom elements?',
          answer:
            'Typings for custom elements can be defined by creating TypeScript interfaces or types for the component inputs and outputs, ensuring proper type checking during development.',
        },
        {
          question: 'What are dynamic components?',
          answer:
            'Dynamic components in Angular are components that are loaded and created at runtime, typically using the `ComponentFactoryResolver` or `ViewContainerRef`.',
        },
        {
          question: 'What are the various kinds of directives?',
          answer:
            'There are three kinds of directives in Angular: components, structural directives (e.g., `*ngIf`, `*ngFor`), and attribute directives (e.g., `ngClass`, `ngStyle`).',
        },
        {
          question: 'How do you create directives using CLI?',
          answer:
            'You can create a directive using the Angular CLI with the command `ng generate directive <directive-name>`, which scaffolds a new directive.',
        },
        {
          question: 'Give an example for attribute directives.',
          answer:
            'An example of an attribute directive is `ngClass`, which dynamically adds or removes classes based on an expression. Usage: `<div [ngClass]="{\'active\': isActive}"></div>`.',
        },
        {
          question: 'What is Angular Router?',
          answer:
            'Angular Router is a module that enables navigation between views or pages in a single-page application. It handles routes, parameters, and guards.',
        },
        {
          question: 'What is the purpose of base href tag?',
          answer:
            'The `<base href>` tag defines the base URL for all relative URLs in an Angular app, ensuring proper routing and navigation.',
        },
        {
          question: 'What are the router imports?',
          answer:
            'Router imports include `RouterModule`, `Routes`, and associated classes for configuring routes in your Angular application.',
        },
        {
          question: 'What is router outlet?',
          answer:
            '`<router-outlet>` is a directive that acts as a placeholder in your template where the router renders the matched component based on the current route.',
        },
        {
          question: 'What are router links?',
          answer:
            'Router links are directives (`[routerLink]`) that bind to router paths and provide navigation to different routes in an Angular application.',
        },
        {
          question: 'What are active router links?',
          answer:
            'Active router links are links that are currently active, meaning the route they point to is currently loaded. The `routerLinkActive` directive can be used to add a class to active links.',
        },
        {
          question: 'What is router state?',
          answer:
            'Router state represents the current state of the router, including the active route, parameters, query parameters, and more. It provides the context of navigation.',
        },
        {
          question: 'What are router events?',
          answer:
            'Router events are observable events fired during the navigation process, such as `NavigationStart`, `NavigationEnd`, `GuardsCheck`, `ResolveStart`, and more.',
        },
        {
          question: 'What is activated route?',
          answer:
            'The `ActivatedRoute` is a service that provides access to information about the route associated with the currently loaded component, including route parameters and data.',
        },

        {
          question: 'How do you define routes?',
          answer:
            "Routes are defined using the `Routes` array, where each route object contains a `path` and a component to render when the route is matched. Example: `{ path: 'home', component: HomeComponent }`.",
        },
        {
          question: 'What is the purpose of Wildcard route?',
          answer:
            "The Wildcard route (`**`) is used to handle undefined or non-matching routes. It typically redirects users to a 'Not Found' or similar page.",
        },
        {
          question: 'Do I need a Routing Module always?',
          answer:
            'While it’s best practice to separate routing into its own module for maintainability, it’s not strictly required. Routing can be defined within the app module.',
        },
        {
          question: 'What is Angular Universal?',
          answer:
            'Angular Universal is a tool for server-side rendering (SSR) of Angular applications. It allows pages to be pre-rendered on the server before sending them to the client, improving SEO and performance.',
        },
        {
          question: 'What are different types of compilation in Angular?',
          answer:
            'Angular has two types of compilation: Just-in-Time (JIT) and Ahead-of-Time (AOT). JIT compiles the application in the browser during runtime, while AOT compiles it during the build process.',
        },
        {
          question: 'What is JIT?',
          answer:
            'JIT (Just-in-Time) compilation compiles the Angular application on the client-side during runtime. It is faster during development but results in slower startup times for users.',
        },
        {
          question: 'What is AOT?',
          answer:
            'AOT (Ahead-of-Time) compilation compiles the Angular application during the build process, producing optimized JavaScript. It improves application load times and detects template errors early.',
        },
        {
          question: 'Why do we need the compilation process?',
          answer:
            'The compilation process in Angular translates templates and components into efficient JavaScript code, ensuring that the application can be executed in the browser. It also helps in error detection.',
        },
        {
          question: 'What are the advantages of AOT?',
          answer:
            'AOT reduces the application size, improves performance by compiling templates at build time, and catches template errors earlier during the build phase.',
        },
        {
          question: 'What are the ways to control AOT compilation?',
          answer:
            'AOT compilation can be controlled using Angular CLI with commands like `ng build --aot` or by enabling it in the `angular.json` configuration file.',
        },
        {
          question: 'What are the restrictions of metadata?',
          answer:
            'Metadata restrictions include limitations on complex expressions. Metadata can only use static values, arrays, or object literals; dynamic expressions are not allowed.',
        },
        {
          question: 'What are the three phases of AOT?',
          answer:
            'The three phases of AOT are: 1) Code analysis phase (parsing the templates), 2) Code generation phase (generating TypeScript code), and 3) Template compilation phase (compiling the templates into JS).',
        },
        {
          question: 'Can I use arrow functions in AOT?',
          answer:
            'No, arrow functions cannot be used in AOT for lifecycle hooks and providers because they are not supported by the metadata compiler.',
        },
        {
          question: 'What is the purpose of metadata JSON files?',
          answer:
            'Metadata JSON files store the metadata for Angular components and services, which the Angular compiler uses to generate code during AOT compilation.',
        },
        {
          question:
            'Can I use any JavaScript feature for expression syntax in AOT?',
          answer:
            'No, only certain JavaScript features like simple expressions, object literals, and static arrays are supported in AOT. Dynamic code or complex expressions are restricted.',
        },
        {
          question: 'What is folding?',
          answer:
            'Folding refers to the process of evaluating constant expressions during AOT compilation, simplifying expressions into static values that can be compiled.',
        },
        {
          question: 'What are macros?',
          answer:
            'Macros in Angular are compile-time functions that can transform code before it gets compiled. However, Angular does not support user-defined macros directly.',
        },
        {
          question: 'Give an example of a few metadata errors.',
          answer:
            "Examples of metadata errors include 'ExpressionChangedAfterItHasBeenChecked' and 'Template parse errors', often caused by incorrect expressions or circular dependencies in the metadata.",
        },
        {
          question: 'What is metadata rewriting?',
          answer:
            'Metadata rewriting involves modifying or updating the metadata of Angular components during the build process to reflect changes or optimizations in code.',
        },
        {
          question: 'How do you provide configuration inheritance?',
          answer:
            'Configuration inheritance can be provided by extending component configurations through Angular modules, or by using shared services and environment files for application-wide settings.',
        },
        {
          question: 'How do you specify Angular template compiler options?',
          answer:
            'Template compiler options can be specified in the `tsconfig.json` file under the `angularCompilerOptions` section, where options like `fullTemplateTypeCheck` and `strictTemplates` can be enabled.',
        },
        {
          question: 'How do you enable binding expression validation?',
          answer:
            'Binding expression validation can be enabled using strict template type checking (`strictTemplates`) in the `angularCompilerOptions` of the `tsconfig.json` file.',
        },
        {
          question: 'What is the purpose of any type cast function?',
          answer:
            "The `any` type cast function is used to override TypeScript's strict type checking when the developer is certain about the type of the data but TypeScript cannot infer it correctly.",
        },
        {
          question: 'What is Non-null type assertion operator?',
          answer:
            'The Non-null type assertion operator (`!`) in TypeScript is used to tell the compiler that a variable is not null or undefined, even if the type system suggests otherwise.',
        },
        {
          question: 'What is type narrowing?',
          answer:
            'Type narrowing is the process of refining a type to a more specific type within a block of code, using techniques like type guards and `typeof` checks.',
        },
        {
          question:
            'How do you describe various dependencies in an Angular application?',
          answer:
            'Dependencies in Angular are typically services or other providers injected into components and modules via the dependency injection system. These can include services like HttpClient, custom services, and more.',
        },
        {
          question: 'What is zone?',
          answer:
            'A zone is an execution context in Angular that helps track asynchronous operations. Zones allow Angular to know when to trigger change detection by wrapping async tasks.',
        },
        {
          question: 'What is the purpose of the common module?',
          answer:
            'The `CommonModule` provides commonly used directives (like `ngIf`, `ngFor`) and pipes to Angular applications. It is typically imported into feature modules.',
        },
        {
          question: 'What is codelyzer?',
          answer:
            'Codelyzer is a tool that provides linting for Angular applications. It enforces best practices and coding standards, helping to maintain consistent and clean code.',
        },
        {
          question: 'What is Angular animation?',
          answer:
            'Angular animations are a feature that allows developers to animate elements in Angular applications using the Angular `@angular/animations` module, enabling dynamic transitions.',
        },
        {
          question: 'What are the steps to use animation module?',
          answer:
            'To use animations, import `BrowserAnimationsModule` in the app module, define animations in the component decorator, and trigger them using `trigger`, `state`, and `transition`.',
        },
        {
          question: 'What is State function?',
          answer:
            'The `state()` function in Angular animations defines the state of an element and assigns styles to it. It’s part of the `trigger()` function used for animations.',
        },
        {
          question: 'What is Style function?',
          answer:
            'The `style()` function in Angular animations specifies a set of CSS styles that will be applied when the element is in a specific animation state.',
        },
        {
          question: 'What is the purpose of animate function?',
          answer:
            'The `animate()` function in Angular animations defines the duration, delay, and easing of an animation. It controls how elements transition between states.',
        },
        {
          question: 'What is transition function?',
          answer:
            'The `transition()` function in Angular animations defines the transition between two animation states, specifying when and how the transition should occur.',
        },
        {
          question: 'How to inject the dynamic script in Angular?',
          answer:
            'To inject a dynamic script in Angular, you can use the `Renderer2` service or directly manipulate the DOM with JavaScript to append the script tag to the document body.',
        },
        {
          question: 'What is a service worker and its role in Angular?',
          answer:
            'A service worker in Angular helps to cache resources and enable offline capabilities. It acts as a network proxy between the browser and the server, improving performance and reliability.',
        },
        {
          question: 'What are the design goals of service workers?',
          answer:
            'The design goals of service workers include improving performance by caching resources, enabling offline access, and providing background sync and push notifications.',
        },
        {
          question:
            'What are the differences between AngularJS and Angular with respect to dependency injection?',
          answer:
            'In AngularJS, DI is based on the `$injector` service, while Angular uses a more sophisticated hierarchical injector system, making DI more flexible and performant.',
        },
        {
          question: 'What is Angular Ivy?',
          answer:
            'Angular Ivy is a new rendering engine introduced in Angular 9. It provides faster compilation, smaller bundle sizes, and improved debugging.',
        },
        {
          question: 'What are the features included in Ivy preview?',
          answer:
            'Ivy preview includes features like incremental DOM, tree-shaking capabilities, smaller bundle sizes, and improved template type-checking.',
        },
        {
          question: 'Can I use AOT compilation with Ivy?',
          answer:
            'Yes, Ivy fully supports AOT (Ahead-of-Time) compilation, enhancing build-time optimizations and improving runtime performance.',
        },
        {
          question: 'What is Angular Language Service?',
          answer:
            'The Angular Language Service is a tool that provides intelligent code completion, error checking, and navigation inside Angular templates and TypeScript files.',
        },
        {
          question:
            'How do you install Angular Language Service in the project?',
          answer:
            'You can install the Angular Language Service by running `npm install --save-dev @angular/language-service` and then configuring your editor to use it.',
        },
        {
          question: 'Is there any editor support for Angular Language Service?',
          answer:
            'Yes, Angular Language Service is supported in popular editors like VSCode, WebStorm, and Sublime Text for features like code completion and inline errors.',
        },
        {
          question:
            'Explain the features provided by Angular Language Service.',
          answer:
            'The Angular Language Service provides autocompletion, error checking, navigation to definitions, and type checking for Angular templates and TypeScript files.',
        },
        {
          question: 'How do you add web workers to your application?',
          answer:
            'Web workers can be added using Angular CLI by running the command `ng generate web-worker <worker-name>`. It helps in running tasks in the background thread.',
        },
        {
          question: 'What are the limitations with web workers?',
          answer:
            "Web workers can't access the DOM directly and are limited to performing non-UI computational tasks. Communication with the main thread happens via `postMessage()` and `onmessage`.",
        },
        {
          question: 'What is Angular CLI Builder?',
          answer:
            'Angular CLI Builder is a way to customize the build process using custom scripts or plugins. Builders can be used to extend the default Angular build process.',
        },
        {
          question: 'What is a builder?',
          answer:
            'A builder is a function or tool that customizes how Angular builds and serves an application, allowing developers to extend or modify the build steps.',
        },
        {
          question: 'How do you invoke a builder?',
          answer:
            'Builders are invoked via Angular CLI commands like `ng build` or `ng serve` and can be customized in the `angular.json` file by specifying custom builders.',
        },
        {
          question: 'How do you create an app shell in Angular?',
          answer:
            'To create an app shell, run the Angular CLI command `ng generate app-shell`. This allows you to pre-render static HTML content for faster page loads.',
        },
        {
          question: 'What are the case types in Angular?',
          answer:
            'Angular uses several case types: camelCase for methods and properties, PascalCase for classes and components, kebab-case for HTML elements, and snake_case for some configurations.',
        },
        {
          question: 'What are the class decorators in Angular?',
          answer:
            'Angular provides class decorators like `@Component`, `@Directive`, `@Pipe`, `@NgModule`, and `@Injectable` to define the purpose and configuration of classes.',
        },
        {
          question: 'What are class field decorators?',
          answer:
            'Class field decorators like `@Input()`, `@Output()`, and `@ViewChild()` are used to define properties of a class, often for communication and referencing between components.',
        },
        {
          question: 'What is declarable in Angular?',
          answer:
            'Declarables in Angular are the classes that can be declared in an Angular module: components, directives, and pipes. Services and other objects are not declarable.',
        },
        {
          question: 'What are the restrictions on declarable classes?',
          answer:
            'Declarable classes must belong to exactly one module and cannot be declared in multiple modules. They must be either components, directives, or pipes.',
        },
        {
          question: 'What is a DI token?',
          answer:
            'A DI token in Angular is a unique object used to represent dependencies in the dependency injection system. It can be a class, string, or object, and is used to retrieve values.',
        },
        {
          question: 'What is Angular DSL?',
          answer:
            'Angular DSL (Domain-Specific Language) refers to the specialized syntax Angular provides for templates, allowing declarative bindings and component-driven architectures.',
        },
        {
          question: 'What is an RxJS Subject?',
          answer:
            'An RxJS Subject is a special type of Observable that allows multiple values to be multicast to many observers. It also functions as an observer, making it versatile.',
        },
        {
          question: 'What is Bazel tool?',
          answer:
            'Bazel is a build tool used with Angular to handle large-scale builds efficiently. It allows incremental builds and is capable of compiling large projects in a short time.',
        },
        {
          question: 'What are the advantages of Bazel tool?',
          answer:
            'Bazel enables faster incremental builds, parallel compilation, and more efficient management of large codebases. It also supports remote caching and distributed builds.',
        },
        {
          question: 'How do you use Bazel with Angular CLI?',
          answer:
            'To use Bazel with Angular CLI, install the `@angular/bazel` package and configure the `angular.json` file to use Bazel for builds. You can also run `ng build` with Bazel.',
        },
        {
          question: 'How do you run Bazel directly?',
          answer:
            'Bazel can be run directly using the `bazel build` command in the terminal. Configuration files like `BUILD.bazel` and `.bazelrc` define how Bazel compiles the project.',
        },
        {
          question: 'What is a platform in Angular?',
          answer:
            'A platform in Angular provides a runtime environment for an application. Angular can run on multiple platforms such as browsers, servers (Angular Universal), and mobile (NativeScript).',
        },
        {
          question: 'What happens if I import the same module twice?',
          answer:
            'If you import the same module twice in Angular, the module is only instantiated once, since Angular uses a singleton pattern for modules. However, this may affect the injector hierarchy.',
        },
        {
          question: 'How do you select an element within a component template?',
          answer:
            'Elements can be selected in a template using `@ViewChild()` or `@ViewChildren()` decorators, which provide access to DOM elements or child components in the template.',
        },
        {
          question: 'How do you detect route change in Angular?',
          answer:
            'You can detect route changes in Angular by subscribing to the `Router` events, such as `Router.events` or `ActivatedRoute` observables.',
        },
        {
          question: 'How do you pass headers for HTTP client?',
          answer:
            'Headers can be passed in `HttpClient` by creating an instance of `HttpHeaders` and attaching it to the request using the `headers` option in methods like `get()` or `post()`.',
        },
        {
          question: 'What is the purpose of differential loading in CLI?',
          answer:
            'Differential loading creates two bundles—one for modern browsers with ES2015+ support and another for legacy browsers. This helps in optimizing the app for performance.',
        },
        {
          question: 'Does Angular support dynamic imports?',
          answer:
            'Yes, Angular supports dynamic imports, which allow you to load JavaScript modules asynchronously. This is often used for lazy loading of Angular modules.',
        },
        {
          question: 'What is lazy loading?',
          answer:
            'Lazy loading in Angular allows you to load feature modules only when they are needed. This helps reduce the initial load time by splitting the app into smaller chunks.',
        },
        {
          question: 'What are workspace APIs?',
          answer:
            'Workspace APIs in Angular provide ways to interact with the Angular workspace, including tasks like creating and modifying projects, reading configuration files, and more.',
        },
        {
          question: 'How do you upgrade Angular version?',
          answer:
            'Angular can be upgraded using the Angular CLI by running the command `ng update`. It automatically updates dependencies, configuration files, and more.',
        },
        {
          question: 'What is Angular Material?',
          answer:
            "Angular Material is a UI component library for Angular, based on Google's Material Design principles. It provides pre-built UI components like buttons, forms, and dialogs.",
        },
        {
          question: 'How do you upgrade location service of AngularJS?',
          answer:
            'To upgrade the `location` service from AngularJS, use the `UpgradeModule` in Angular and map AngularJS `$location` to Angular’s `Location` service.',
        },
        {
          question: 'What is NgUpgrade?',
          answer:
            '`NgUpgrade` is a library that facilitates the upgrade of an AngularJS application to Angular by allowing AngularJS and Angular to coexist in a hybrid mode during migration.',
        },
        {
          question: 'How do you test Angular application using CLI?',
          answer:
            'Angular applications can be tested using the Angular CLI by running the command `ng test`, which uses the Karma test runner and Jasmine testing framework.',
        },
        {
          question: 'How to use polyfills in Angular application?',
          answer:
            'Polyfills can be included in an Angular app by importing them in the `polyfills.ts` file. These are used to ensure compatibility with older browsers.',
        },
        {
          question: 'What are the ways to trigger change detection in Angular?',
          answer:
            "Change detection can be triggered manually in Angular using `ChangeDetectorRef.detectChanges()` or automatically by Angular's zone.js framework during events like user input.",
        },
        {
          question:
            'What are the differences between various versions of Angular?',
          answer:
            'Angular versions differ in terms of performance, rendering engines, build tools, and features. Angular 2 introduced components, while later versions like Angular 9 introduced Ivy.',
        },
        {
          question: 'What are the security principles in Angular?',
          answer:
            "Angular's security principles include XSS protection, HTTP sanitation, strict contextual escaping, and the use of DOM sanitizers to prevent injection attacks.",
        },
        {
          question: 'What is the reason to deprecate Web Tracing Framework?',
          answer:
            'The Web Tracing Framework was deprecated because better and more integrated tools, like Chrome DevTools, are available for performance analysis and debugging.',
        },
        {
          question: 'What is the reason to deprecate web worker packages?',
          answer:
            'Web worker packages were deprecated due to improved support for web workers in the standard Angular build process and better integration with modern tools.',
        },
        {
          question: 'How do you find Angular CLI version?',
          answer:
            'You can find the Angular CLI version by running the command `ng --version` in your terminal, which provides the current CLI version and other dependencies.',
        },
        {
          question: 'What is the browser support for Angular?',
          answer:
            'Angular supports the latest versions of modern browsers like Chrome, Firefox, Safari, and Edge. For older browsers, polyfills are used to ensure compatibility.',
        },
        {
          question: 'What is schematic?',
          answer:
            'A schematic is a template-based code generator in Angular CLI used for generating or modifying Angular projects, such as creating components, services, or modules.',
        },
        {
          question: 'What is a rule in Schematics?',
          answer:
            'A rule in Schematics is a function that applies transformations to the file tree of an Angular project, used to generate or modify files during code generation.',
        },
        {
          question: 'What is Schematics CLI?',
          answer:
            'Schematics CLI is a tool that allows developers to create and test custom Angular schematics outside of the Angular CLI workflow, providing more control over code generation.',
        },
        {
          question: 'What are the best practices for security in Angular?',
          answer:
            "Best practices include using Angular's built-in XSS protection, avoiding direct DOM manipulation, using HTTP interceptors, and applying strict input validation and sanitation.",
        },
        {
          question:
            'What is Angular’s security model for preventing XSS attacks?',
          answer:
            'Angular prevents XSS attacks by default through automatic HTML and URL sanitization, contextual escaping, and the use of the DOM sanitizer.',
        },
        {
          question:
            'What is the role of the template compiler in preventing XSS attacks?',
          answer:
            "The template compiler ensures that Angular's built-in XSS protection mechanisms are applied by escaping potentially dangerous content before rendering it in the DOM.",
        },
        {
          question: 'What are the various security contexts in Angular?',
          answer:
            "Angular's security contexts include HTML, styles, URLs, and resources. Each context has specific sanitization rules to prevent XSS and other injection attacks.",
        },
        {
          question: 'What is Sanitization? Does Angular support it?',
          answer:
            'Sanitization is the process of cleaning untrusted content to prevent security vulnerabilities. Angular supports sanitization for HTML, URLs, styles, and resource URLs.',
        },
        {
          question: 'What is the purpose of innerHTML?',
          answer:
            '`innerHTML` is used to bind raw HTML content in Angular templates. Angular automatically sanitizes the content to prevent XSS attacks when using `innerHTML`.',
        },
        {
          question:
            'What is the difference between interpolated content and innerHTML?',
          answer:
            'Interpolated content is automatically escaped and safe from XSS, while `innerHTML` directly renders HTML, which requires sanitization to prevent injection vulnerabilities.',
        },
        {
          question: 'How do you prevent automatic sanitization?',
          answer:
            'To bypass automatic sanitization in Angular, you can use the `DomSanitizer.bypassSecurityTrust` methods, but this should be used cautiously as it may introduce security risks.',
        },
        {
          question:
            'Is it safe to use direct DOM API methods in terms of security?',
          answer:
            'Using direct DOM API methods (e.g., `document.querySelector()`) is generally unsafe in Angular because it bypasses Angular’s built-in XSS protection.',
        },
        {
          question: 'What is DOM sanitizer?',
          answer:
            'DOM sanitizer is a service in Angular that sanitizes untrusted values to prevent security vulnerabilities, such as XSS attacks, before they are inserted into the DOM.',
        },
        {
          question:
            'How do you support server-side XSS protection in Angular application?',
          answer:
            "Server-side XSS protection in Angular is achieved by validating and sanitizing user inputs on the server side, in addition to Angular's client-side protections.",
        },
        {
          question: 'Does Angular prevent HTTP-level vulnerabilities?',
          answer:
            'Angular helps prevent HTTP-level vulnerabilities by providing features like HTTP interceptors, which can handle authentication, CSRF tokens, and security headers.',
        },
        {
          question: 'What are HTTP Interceptors?',
          answer:
            'HTTP interceptors in Angular allow you to intercept HTTP requests and responses to add headers, log events, or modify data before sending them to the server.',
        },
        {
          question: 'What are the applications of HTTP interceptors?',
          answer:
            'HTTP interceptors are used for logging, error handling, adding authentication tokens, modifying request/response data, and managing loading indicators.',
        },
        {
          question: 'Are multiple interceptors supported in Angular?',
          answer:
            'Yes, Angular supports multiple HTTP interceptors, and they are executed in the order they are provided in the module, allowing complex request/response pipelines.',
        },
        {
          question: 'How can I use interceptor for an entire application?',
          answer:
            'To apply an interceptor globally, provide it in the root `AppModule` by adding it to the `providers` array using `HTTP_INTERCEPTORS` and the interceptor class.',
        },
        {
          question: 'How does Angular simplify internationalization?',
          answer:
            'Angular simplifies internationalization (i18n) by providing built-in support for translating templates, pluralization, date formatting, and currency formatting.',
        },
        {
          question: 'How do you manually register locale data?',
          answer:
            'To register locale data manually, import the `registerLocaleData()` function from `@angular/common` and pass the locale data to support specific locales.',
        },
        {
          question: 'What are the four phases of template translation?',
          answer:
            'The four phases of template translation in Angular are marking templates with the i18n attribute, extracting messages, translating messages, and applying translations.',
        },
        {
          question: 'What is the purpose of i18n attribute?',
          answer:
            'The `i18n` attribute marks the parts of a template that need to be translated into different languages in an Angular application.',
        },
        {
          question: 'What is the purpose of custom id?',
          answer:
            'A custom id in i18n translation ensures a unique identifier for a translation unit, making it easier to manage and reference specific translations.',
        },
        {
          question: 'What happens if the custom id is not unique?',
          answer:
            'If a custom id is not unique, it may result in incorrect translations or missing translations for the duplicated id in the translation process.',
        },
        {
          question: 'Can I translate text without creating an element?',
          answer:
            'Yes, you can translate text using Angular’s i18n feature without creating a DOM element by applying the translation directly in the template expressions.',
        },
        {
          question: 'How can I translate an attribute?',
          answer:
            'You can translate an attribute using the i18n attribute syntax. For example, `i18n-title` translates the `title` attribute on an HTML element.',
        },
      ],
    },
    {
      id: '007',
      name: 'React JS',
    },
    {
      id: '008',
      name: 'Testing',
      subcourses: ['JEST', 'Jasmine'],
    },
    {
      id: '009',
      name: 'Angular Component Libs',
      subcourses: ['Prime NG', 'Angular Material'],
    },
  ];

  firestore = inject(Firestore);
  experienceCollection = collection(this.firestore, 'experiences');
  skillsCollection = collection(this.firestore, 'skills');
  interviewsCollection = collection(this.firestore, 'interviews');

  testimonialsCollection = collection(this.firestore, 'testimonials');
  constructor() {}

  getExperiences() {
    return from(getDocs(this.experienceCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  getSkills() {
    return from(getDocs(this.skillsCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  getTestimonials() {
    return from(getDocs(this.testimonialsCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  getInterviews() {
    return from(getDocs(this.interviewsCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  getInterviewQuestionswithId(id: any) {
    const interviewsRef = doc(this.firestore, 'interviews', id);
    return from(getDoc(interviewsRef)).pipe(
      map((doc) => {
        return doc.data();
      })
    );
  }
  addExperiences() {
    this.courses.forEach((element, index) => {
      const docref = doc(this.firestore, 'interviews', element.id);
      return from(setDoc(docref, element));
    });
  }
  generateId(
    startLetter: string,
    endLetter: string,
    startNumber: number,
    endNumber: number
  ): string[] {
    const ids: string[] = [];

    for (
      let letter = startLetter.charCodeAt(0);
      letter <= endLetter.charCodeAt(0);
      letter++
    ) {
      for (let number = startNumber; number <= endNumber; number++) {
        ids.push(String.fromCharCode(letter) + number);
      }
    }
    return ids;
  }
}
