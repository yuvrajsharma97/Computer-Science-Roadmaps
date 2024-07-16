import React from "react";

// Frontend Data for the Accordion and Modal Components Start...

const HTMLObj = [
  {
    title: "Basic Structure of an HTML Document",
    subtopics: [
      "DOCTYPE Declaration",
      "<html> Tag",
      "<head> Section",
      "<body> Section",
    ],
  },
  {
    title: "HTML Elements",
    subtopics: ["Block-level Elements", "Inline Elements", "Common Elements"],
  },
  {
    title: "Attributes",
    subtopics: ["Global Attributes", "Specific Attributes", "Attribute Values"],
  },
  {
    title: "Forms and Input Elements",
    subtopics: [
      "Form Element",
      "Input Types",
      "Form Attributes",
      "Form Validation",
    ],
  },
  {
    title: "Text Content Elements",
    subtopics: [
      "Headings (<h1> to <h6>)",
      "Paragraphs (<p>)",
      "Links (<a>)",
      "Lists (<ul>, <ol>, <li>)",
      "Blockquotes (<blockquote>)",
      "Preformatted Text (<pre>)",
    ],
  },
  {
    title: "Multimedia Elements",
    subtopics: ["Images (<img>)", "Audio (<audio>)", "Video (<video>)"],
  },
  {
    title: "Embedded Content",
    subtopics: ["Iframes (<iframe>)", "Objects (<object>)", "Embeds (<embed>)"],
  },
  {
    title: "Tables",
    subtopics: [
      "Table Structure (<table>, <tr>, <td>, <th>)",
      "Table Attributes",
      "Table Caption",
    ],
  },
  {
    title: "Document and Website Structure",
    subtopics: [
      "Divisions and Sections (<div>, <span>)",
      "Headings and Sections (<header>, <footer>, <main>, <section>, <article>, <aside>)",
    ],
  },
  {
    title: "Semantic HTML",
    subtopics: [
      "Semantic Elements (<header>, <nav>, <section>, <article>, <footer>)",
      "Importance of Semantic HTML",
    ],
  },
  {
    title: "Links and Navigation",
    subtopics: [
      "Internal Links",
      "External Links",
      "Anchor Links",
      "Navigation Bar",
    ],
  },
  {
    title: "HTML5 New Features",
    subtopics: [
      "New Form Elements (<datalist>, <keygen>, <output>)",
      "New Media Elements (<audio>, <video>, <source>, <track>)",
      "New Structural Elements (<section>, <article>, <aside>, <footer>)",
    ],
  },
  {
    title: "Metadata and Head Elements",
    subtopics: [
      "Meta Tags (<meta>)",
      "Titles (<title>)",
      "Links (<link>)",
      "Scripts (<script>)",
    ],
  },
  {
    title: "HTML APIs",
    subtopics: [
      "Canvas API",
      "Geolocation API",
      "Drag and Drop API",
      "Web Storage API",
    ],
  },
  {
    title: "Accessibility in HTML",
    subtopics: [
      "ARIA Roles and Attributes",
      "Semantic Elements for Accessibility",
      "Keyboard Navigation",
    ],
  },
  {
    title: "Best Practices",
    subtopics: [
      "Clean Code and Indentation",
      "Comments in HTML",
      "SEO-friendly HTML",
      "Responsive Web Design",
    ],
  },
];

const CSSObj = [
  {
    title: "Basic Concepts",
    subtopics: [
      "CSS Syntax",
      "Selectors",
      "Properties",
      "Values",
      "Cascading and Inheritance",
    ],
  },
  {
    title: "Selectors",
    subtopics: [
      "Universal Selector",
      "Type Selector",
      "Class Selector",
      "ID Selector",
      "Attribute Selector",
      "Pseudo-class Selector",
      "Pseudo-element Selector",
      "Combinators",
    ],
  },
  {
    title: "Box Model",
    subtopics: [
      "Content",
      "Padding",
      "Border",
      "Margin",
      "Width and Height",
      "Box Sizing",
    ],
  },
  {
    title: "Positioning",
    subtopics: ["Static", "Relative", "Absolute", "Fixed", "Sticky", "Z-index"],
  },
  {
    title: "Typography",
    subtopics: [
      "Fonts",
      "Text Alignment",
      "Text Decoration",
      "Text Transform",
      "Line Height",
      "Letter Spacing",
    ],
  },
  {
    title: "Colors and Backgrounds",
    subtopics: [
      "Color Values",
      "Background Color",
      "Background Image",
      "Background Position",
      "Background Size",
      "Background Repeat",
    ],
  },
  {
    title: "Borders",
    subtopics: [
      "Border Style",
      "Border Width",
      "Border Color",
      "Border Radius",
    ],
  },
  {
    title: "Flexbox",
    subtopics: [
      "Flex Container",
      "Flex Items",
      "Main Axis and Cross Axis",
      "Justify Content",
      "Align Items",
      "Align Content",
      "Flex Grow, Shrink, and Basis",
      "Flex Wrap",
      "Order",
    ],
  },
  {
    title: "Grid Layout",
    subtopics: [
      "Grid Container",
      "Grid Items",
      "Grid Lines",
      "Grid Template Rows and Columns",
      "Grid Areas",
      "Justify Items",
      "Align Items",
      "Gap",
    ],
  },
  {
    title: "Responsive Design",
    subtopics: [
      "Fluid Layouts",
      "Relative Units",
      "Flexible Images",
      "Viewport Meta Tag",
    ],
  },
  {
    title: "Media Queries",
    subtopics: [
      "Breakpoints",
      "Min-width and Max-width",
      "Orientation",
      "Aspect Ratio",
    ],
  },
  {
    title: "Animations and Transitions",
    subtopics: [
      "Transitions",
      "Keyframes",
      "Animation Properties",
      "CSS Transforms",
    ],
  },
  {
    title: "Pseudo-classes and Pseudo-elements",
    subtopics: [
      "Pseudo-classes (e.g., :hover, :focus, :nth-child)",
      "Pseudo-elements (e.g., ::before, ::after)",
    ],
  },
  {
    title: "CSS Preprocessors",
    subtopics: [
      "Introduction to Preprocessors",
      "Variables",
      "Nesting",
      "Mixins",
      "Inheritance",
    ],
  },
  {
    title: "Best Practices",
    subtopics: [
      "Naming Conventions (BEM, OOCSS, SMACSS)",
      "Maintainable CSS",
      "Performance Optimization",
      "Cross-browser Compatibility",
    ],
  },
  {
    title: "Preprocessors",
    subtopics: ["SASS", "SCSS"],
  },
  {
    title: "CSS-in-JS",
    subtopics: ["Styled-components", "Emotion"],
  },
  {
    title: "CSS Frameworks",
    subtopics: ["Bootstrap", "Tailwind CSS"],
  },
  {
    title: "CSS Methodologies",
    subtopics: ["BEM (Block Element Modifier)", "OOCSS (Object-Oriented CSS)"],
  },
  {
    title: "Responsive Design",
    subtopics: ["Mobile-first design", "Media queries"],
  },
  {
    title: "Responsive Design Frameworks",
    subtopics: ["Bootstrap", "Foundation"],
  },
  {
    title: "Responsive Design Techniques",
    subtopics: ["Flexbox", "CSS Grid"],
  },
  {
    title: "UI Libraries and Design Systems",
    subtopics: ["Material-UI", "Ant Design", "Chakra UI"],
  },
];

const VersionControlObj = [
  {
    title: "Basic Git Concepts",
    subtopics: [
      "What is Version Control?",
      "What is Git?",
      "Repository",
      "Staging Area",
      "Commit",
    ],
  },
  {
    title: "Basic Git Commands",
    subtopics: [
      "git clone",
      "git init",
      "git add",
      "git commit",
      "git status",
      "git log",
    ],
  },
  {
    title: "Branching and Merging",
    subtopics: [
      "git branch",
      "git checkout",
      "git merge",
      "Merge Conflicts",
      "git rebase",
    ],
  },
  {
    title: "Remote Repositories",
    subtopics: [
      "git remote",
      "git fetch",
      "git pull",
      "git push",
      "Tracking Branches",
      "Forking a Repository",
    ],
  },
  {
    title: "Collaboration Workflows",
    subtopics: [
      "Feature Branch Workflow",
      "Gitflow Workflow",
      "Forking Workflow",
      "Pull Requests",
    ],
  },
  {
    title: "Undoing Changes",
    subtopics: [
      "git reset",
      "git revert",
      "git checkout",
      "Stash Changes",
      "git clean",
    ],
  },
  {
    title: "Advanced Git Commands",
    subtopics: [
      "git cherry-pick",
      "git bisect",
      "git blame",
      "git reflog",
      "git submodule",
    ],
  },
  {
    title: "Git Tools",
    subtopics: [
      "Git GUI Clients",
      "Git Hooks",
      "Git Attributes",
      "Git Ignore",
      "Git Tags",
    ],
  },
  {
    title: "Hosting Repositories",
    subtopics: ["GitHub", "GitLab", "Bitbucket", "Azure Repos"],
  },
  {
    title: "Best Practices",
    subtopics: [
      "Write Good Commit Messages",
      "Frequent Commits",
      "Branch Naming Conventions",
      "Code Reviews",
      "Continuous Integration",
    ],
  },
];

const JavaScriptObj = [
  {
    title: "Introduction to JavaScript",
    subtopics: [
      "What is JavaScript?",
      "JavaScript in the Browser",
      "JavaScript in Node.js",
    ],
  },
  {
    title: "Syntax and Fundamentals",
    subtopics: [
      "JavaScript Syntax",
      "Comments",
      "Statements and Expressions",
      "Variables",
      "Data Types",
      "Type Coercion",
      "Type Conversion",
    ],
  },
  {
    title: "Variables and Data Types",
    subtopics: [
      "var, let, const",
      "Primitive Data Types",
      "Objects and Arrays",
      "Undefined and Null",
    ],
  },
  {
    title: "Operators",
    subtopics: [
      "Arithmetic Operators",
      "Assignment Operators",
      "Comparison Operators",
      "Logical Operators",
      "Bitwise Operators",
      "String Operators",
      "Ternary Operator",
    ],
  },
  {
    title: "Control Structures",
    subtopics: [
      "Conditional Statements",
      "if, else if, else",
      "switch",
      "Loops",
      "for, for...in, for...of",
      "while, do...while",
      "break and continue",
    ],
  },
  {
    title: "Functions",
    subtopics: [
      "Function Declaration",
      "Function Expression",
      "Arrow Functions",
      "Parameters and Arguments",
      "Return Statement",
      "IIFE (Immediately Invoked Function Expression)",
      "Callback Functions",
      "Higher-Order Functions",
    ],
  },
  {
    title: "DOM Manipulation",
    subtopics: [
      "The Document Object Model (DOM)",
      "Selecting Elements",
      "Changing Content",
      "Changing Styles",
      "Creating and Removing Elements",
      "Event Handling",
      "Event Listeners",
      "Event Bubbling and Capturing",
    ],
  },
  {
    title: "Events",
    subtopics: [
      "Event Types",
      "Mouse Events",
      "Keyboard Events",
      "Form Events",
      "Document Events",
      "Custom Events",
    ],
  },
  {
    title: "ES6+ Features",
    subtopics: [
      "let and const",
      "Arrow Functions",
      "Template Literals",
      "Destructuring Assignment",
      "Rest and Spread Operators",
      "Default Parameters",
      "Modules (import and export)",
      "Promises",
      "Async/Await",
      "Classes",
      "Enhanced Object Literals",
      "Map and Set",
      "Iterators and Generators",
    ],
  },
  {
    title: "Error Handling and Debugging",
    subtopics: [
      "try...catch",
      "throw",
      "finally",
      "Debugging Techniques",
      "Console Methods",
    ],
  },
  {
    title: "Best Practices",
    subtopics: [
      "Code Style",
      "Commenting Code",
      "Writing Clean Code",
      "Performance Optimization",
    ],
  },
  {
    title: "Scope",
    subtopics: [
      "Global Scope",
      "Local Scope",
      "Block Scope",
      "Function Scope",
      "Lexical Scope",
    ],
  },
  {
    title: "Hoisting",
    subtopics: [
      "Variable Hoisting",
      "Function Hoisting",
      "Class Hoisting",
      "Temporal Dead Zone",
    ],
  },
  {
    title: "Closures",
    subtopics: [
      "Understanding Closures",
      "Practical Uses of Closures",
      "IIFE (Immediately Invoked Function Expression)",
      "Memory Management",
    ],
  },
  {
    title: "Prototypes",
    subtopics: [
      "Prototype Chain",
      "Inheritance",
      "Prototype vs __proto__",
      "Creating Prototypes",
      "Prototype Methods",
    ],
  },
  {
    title: "'this' keyword",
    subtopics: [
      "Global Context",
      "Function Context",
      "Method Context",
      "Constructor Context",
      "Explicit Binding (call, apply, bind)",
      "Arrow Functions and Lexical 'this'",
    ],
  },
  {
    title: "Event Loop",
    subtopics: [
      "Call Stack",
      "Web APIs",
      "Callback Queue",
      "Microtasks",
      "Macrotasks",
      "Understanding Asynchronous JavaScript",
    ],
  },
  {
    title: "Async Programming",
    subtopics: [
      "Callbacks",
      "Promises",
      "Creating and Using Promises",
      "Promise Chaining",
      "Promise Methods (all, race, any, allSettled)",
      "Async/Await",
      "Error Handling in Async/Await",
    ],
  },
  {
    title: "Error Handling and Debugging",
    subtopics: [
      "try...catch",
      "throw",
      "finally",
      "Debugging Techniques",
      "Using Debugger",
      "Console Methods",
    ],
  },
];

const PackageManagersObj = [
  {
    title: "npm (Node Package Manager)",
    subtopics: [
      "Introduction to npm",
      "Installing npm",
      "npm init",
      "Installing Packages",
      "Package.json",
      "Updating Packages",
      "Removing Packages",
      "Global vs Local Packages",
      "npm Scripts",
    ],
  },
  {
    title: "yarn",
    subtopics: [
      "Introduction to Yarn",
      "Installing Yarn",
      "Yarn init",
      "Installing Packages",
      "Yarn.lock",
      "Updating Packages",
      "Removing Packages",
      "Global vs Local Packages",
      "Yarn Scripts",
    ],
  },
];

const ReactObj = [
  {
    title: "What is React?",
    subtopics: [
      "Understand the basic concepts of React and its use in building user interfaces.",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install Node.js and npm.",
      "Create a React application using Create React App or Vite.",
      "Overview of the project structure.",
    ],
  },
  {
    title: "Core Concepts",
    subtopics: [
      "JSX (JavaScript XML)",
      "Syntax and usage.",
      "Embedding expressions in JSX.",
      "Components",
      "Functional components.",
      "Props and state.",
    ],
  },
  {
    title: "State Management with Hooks",
    subtopics: [
      "useState Hook",
      "Managing state in functional components.",
      "Using arrays and objects in state.",
      "useEffect Hook",
      "Handling side effects.",
      "Cleanup functions in useEffect.",
      "Dependencies in useEffect.",
    ],
  },
  {
    title: "Handling Events",
    subtopics: [
      "Event Handling",
      "Handling events in React.",
      "Synthetic events.",
      "Event binding.",
    ],
  },
  {
    title: "Forms and User Input",
    subtopics: [
      "Controlled Components",
      "Handling form inputs.",
      "Controlled vs uncontrolled components.",
      "Form Validation",
      "Basic form validation techniques.",
      "Third-party libraries (e.g., Formik, Yup).",
    ],
  },
  {
    title: "Routing",
    subtopics: [
      "React Router",
      "Setting up React Router.",
      "Route, Link, and NavLink components.",
      "Nested routes and route parameters.",
      "Programmatic navigation.",
    ],
  },
  {
    title: "Context API for State Management",
    subtopics: [
      "Context API",
      "Creating and using context.",
      "Context.Provider and useContext Hook.",
      "useReducer Hook",
      "Using the useReducer Hook for complex state logic.",
      "Comparing useReducer with useState.",
    ],
  },
  {
    title: "Styling",
    subtopics: [
      "CSS Modules",
      "Using CSS Modules for scoped styles.",
      "Styled-components",
      "Installing and using styled-components.",
      "Creating styled components.",
      "Tailwind CSS (optional)",
      "Integrating Tailwind CSS with React.",
    ],
  },
  {
    title: "Performance Optimization",
    subtopics: [
      "Memoization",
      "useMemo and useCallback Hooks.",
      "Code Splitting",
      "React.lazy and Suspense.",
      "Dynamic import.",
      "React Profiler",
      "Using the React Profiler tool to identify performance bottlenecks.",
    ],
  },
  {
    title: "Advanced Hooks",
    subtopics: [
      "Custom Hooks",
      "Creating and using custom hooks.",
      "useRef Hook",
      "Accessing DOM elements with useRef.",
      "Persisting values between renders.",
      "useContext Hook",
      "Managing global state with useContext.",
      "useReducer Hook",
      "Handling complex state logic with useReducer.",
    ],
  },
  {
    title: "Integrating with APIs",
    subtopics: [
      "Fetching Data",
      "Fetch API and axios.",
      "useEffect for data fetching.",
      "Handling Asynchronous Code",
      "Promises and async/await.",
      "Error handling and loading states.",
    ],
  },
];

const AngularObj = [
  {
    title: "Introduction to Angular",
    subtopics: [
      "Understand the basic concepts of Angular and its use in building single-page applications (SPAs).",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install Node.js and npm.",
      "Install Angular CLI: npm install -g @angular/cli",
      "Create a new Angular application: ng new my-angular-app",
      "Overview of the project structure.",
    ],
  },
  {
    title: "Core Concepts",
    subtopics: [
      "Modules",
      "Understanding NgModules.",
      "Root module and feature modules.",
      "Components",
      "Creating components.",
      "Component metadata and templates.",
      "Data binding (interpolation, property binding, event binding, and two-way binding).",
    ],
  },
  {
    title: "Templates and Directives",
    subtopics: [
      "Templates",
      "Using Angular templates.",
      "Template syntax.",
      "Directives",
      "Built-in directives: ngIf, ngFor, ngClass, ngStyle.",
      "Creating custom directives.",
    ],
  },
  {
    title: "Services and Dependency Injection",
    subtopics: [
      "Services",
      "Creating and using services.",
      "Singleton services and Angular providers.",
      "Dependency Injection",
      "Understanding dependency injection in Angular.",
      "Using @Injectable decorator.",
    ],
  },
  {
    title: "Routing and Navigation",
    subtopics: [
      "Angular Router",
      "Setting up routes.",
      "RouterModule and routing configuration.",
      "Nested routes.",
      "Route guards.",
      "Lazy loading modules.",
    ],
  },
  {
    title: "Forms and User Input",
    subtopics: [
      "Template-driven Forms",
      "Creating and validating template-driven forms.",
      "Reactive Forms",
      "Creating and validating reactive forms.",
      "FormBuilder and FormGroup.",
      "Custom form validators.",
    ],
  },
  {
    title: "HTTP Client",
    subtopics: [
      "HTTP Requests",
      "Setting up HttpClientModule.",
      "Making GET, POST, PUT, DELETE requests.",
      "Handling HTTP responses and errors.",
      "Interceptors.",
    ],
  },
  {
    title: "State Management",
    subtopics: [
      "RxJS",
      "Understanding Observables and Subjects.",
      "Operators and pipeable operators.",
      "Using RxJS in Angular.",
      "NgRx (optional)",
      "Introduction to NgRx for state management.",
      "Store, Actions, Reducers, and Effects.",
    ],
  },
  {
    title: "Advanced Topics",
    subtopics: [
      "Change Detection",
      "Understanding Angular's change detection mechanism.",
      "OnPush change detection strategy.",
      "Dynamic Components",
      "Creating and using dynamic components.",
      "Angular Animations",
      "Using Angular’s animation library.",
      "Unit Testing",
      "Setting up unit tests with Jasmine and Karma.",
      "Writing unit tests for components and services.",
    ],
  },
  {
    title: "Performance Optimization",
    subtopics: [
      "Lazy Loading",
      "Implementing lazy loading for feature modules.",
      "Ahead-of-Time (AOT) Compilation",
      "Enabling AOT compilation.",
      "Angular Universal",
      "Server-side rendering with Angular Universal.",
      "Optimization Techniques",
      "Tree shaking and bundle optimization.",
    ],
  },
  {
    title: "Deployment",
    subtopics: [
      "Building for Production",
      "Creating a production build.",
      "Optimizing the build process.",
      "Deployment Platforms",
      "Deploying to Firebase, Vercel, Netlify, or other hosting services.",
    ],
  },
  {
    title: "Introduction to TypeScript",
    subtopics: [
      "Understand the basic concepts of TypeScript and its advantages over JavaScript.",
      "TypeScript is a statically typed superset of JavaScript.",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install Node.js and npm.",
      "Install TypeScript: npm install -g typescript",
      "Configure TypeScript with a tsconfig.json file.",
    ],
  },
  {
    title: "Basic TypeScript Concepts",
    subtopics: [
      "Types: Understanding basic types (string, number, boolean, array, tuple, enum, any, void, null, undefined, never).",
      "Interfaces: Defining object shapes using interfaces.",
      "Classes: Understanding classes and object-oriented programming concepts.",
      "Functions: Function types, optional and default parameters, and rest parameters.",
      "Generics: Creating reusable components with generics.",
    ],
  },
];

const VueObj = [
  {
    title: "Introduction to Vue.js",
    subtopics: [
      "What is Vue.js?",
      "Setting Up the Environment",
      "Core Concepts",
    ],
  },
  {
    title: "What is Vue.js?",
    subtopics: [
      "Understand the basic concepts of Vue.js and its use in building single-page applications (SPAs).",
      "Learn the differences between Vue.js and other frameworks like React and Angular.",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install Node.js and npm.",
      "Install Vue CLI.",
      "Create a new Vue application.",
      "Understand the project structure.",
    ],
  },
  {
    title: "Core Concepts",
    subtopics: ["Vue Instance", "Templates and Directives", "Components"],
  },
  {
    title: "Vue Instance",
    subtopics: [
      "Learn about creating a Vue instance.",
      "Understand the Vue lifecycle.",
      "Learn about data and methods.",
    ],
  },
  {
    title: "Templates and Directives",
    subtopics: [
      "Understand template syntax.",
      "Learn about directives like v-bind, v-model, v-for, v-if, v-show, v-on, etc.",
    ],
  },
  {
    title: "Components",
    subtopics: [
      "Learn how to create and register components.",
      "Understand component props and custom events.",
      "Learn about Single File Components (SFCs) with .vue files.",
    ],
  },
  {
    title: "Computed Properties and Watchers",
    subtopics: ["Computed Properties", "Watchers"],
  },
  {
    title: "Computed Properties",
    subtopics: ["Learn how to use computed properties for derived state."],
  },
  {
    title: "Watchers",
    subtopics: [
      "Understand how to use watchers to perform actions in response to data changes.",
    ],
  },
  {
    title: "Vue Router",
    subtopics: [
      "Setting Up Vue Router",
      "Learn how to navigate between routes.",
      "Route parameters and props.",
    ],
  },
  {
    title: "Setting Up Vue Router",
    subtopics: [
      "Learn how to install and configure Vue Router.",
      "Understand how to navigate between routes.",
      "Learn about route parameters and props.",
    ],
  },
  {
    title: "Vuex for State Management",
    subtopics: [
      "Setting Up Vuex",
      "Learn about state, getters, mutations, and actions.",
    ],
  },
  {
    title: "Setting Up Vuex",
    subtopics: [
      "Learn how to install Vuex.",
      "Understand how to create a store.",
      "Learn about state, getters, mutations, and actions.",
    ],
  },
  {
    title: "Forms and User Input",
    subtopics: [
      "Handling Forms",
      "Form validation with Vuelidate or custom validation.",
      "Learn how to bind form inputs using v-model.",
      "Understand form validation with Vuelidate or custom validation.",
    ],
  },

  {
    title: "HTTP Requests",
    subtopics: [
      "Using Axios",
      "Learn how to install and use Axios for making HTTP requests to fetch data from APIs.",
    ],
  },

  {
    title: "Vue Directives",
    subtopics: [
      "Custom Directives",
      "Learn how to create and use custom directives.",
    ],
  },
  {
    title: "Filters",
    subtopics: ["Learn how to use filters to format text."],
  },
  {
    title: "Mixins",
    subtopics: ["Understand how to use mixins to reuse code."],
  },
  {
    title: "Plugins and Third-Party Libraries",
    subtopics: [
      "Using Plugins",
      "Third-Party Libraries",
      "Learn how to install and use Vue plugins like Vue Router, Vuex, Vue i18n, etc.",
    ],
  },
  {
    title: "Third-Party Libraries",
    subtopics: [
      "Learn how to integrate third-party libraries like Vuetify, Element UI, Bootstrap Vue, etc.",
    ],
  },

  {
    title: "Performance Optimization",
    subtopics: [
      "Learn how to implement lazy loading for components and routes.",
      "Understand how to use Webpack for code splitting.",
      "Learn how to use Vue DevTools to debug and optimize Vue applications.",
    ],
  },
  {
    title: "Building for Production",
    subtopics: [
      "Learn how to create a production build.",
      "Understand how to optimize the build process.",
    ],
  },
  {
    title: "Advanced Vue.js Features",
    subtopics: ["Vue 3 Features", "Server-Side Rendering (SSR)"],
  },
  {
    title: "Vue 3 Features",
    subtopics: [
      "Learn about the Composition API, Teleport, Fragments, and Custom Directives.",
    ],
  },
  {
    title: "Server-Side Rendering (SSR)",
    subtopics: ["Learn how to use Nuxt.js for SSR."],
  },
];

const HTMLModals = [
  {
    id: "my_modal_1",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning HTML",
      links: [
        {
          href: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
          text: "MDN Web Docs",
        },
        { href: "https://www.w3schools.com/html/", text: "W3 Schools" },
        {
          href: "https://www.freecodecamp.org/news/tag/html/",
          text: "Free Code Camp",
        },
      ],
    },
  },
  {
    id: "my_modal_2",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/kUMe1FH4CHE?si=0LzbA5DPD0CfmzRI",
      videoTitle: "YouTube video player",
    },
  },
];

const CSSModals = [
  {
    id: "my_modal_3",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning CSS",
      links: [
        {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          text: "MDN Web Docs",
        },
        { href: "https://www.w3schools.com/css/", text: "W3 Schools" },
        {
          href: "https://www.freecodecamp.org/news/tag/css/",
          text: "Free Code Camp",
        },
      ],
    },
  },
  {
    id: "my_modal_4",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/OXGznpKZ_sA?si=2_d1eZfeetKqdI6V",
      videoTitle: "YouTube video player",
    },
  },
];

const VCModals = [
  {
    id: "my_modal_5",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning Version Control",
      links: [
        {
          href: "https://docs.github.com/en/get-started/getting-started-with-git",
          text: "Github Docs",
        },
        { href: "https://www.w3schools.com/git/", text: "W3 Schools" },
        {
          href: "https://www.freecodecamp.org/news/introduction-to-git-and-github/",
          text: "Free Code Camp",
        },
      ],
    },
  },
  {
    id: "my_modal_6",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/RGOj5yH7evk?si=jhWbGyQJ1m5vQpZd",
      videoTitle: "YouTube video player",
    },
  },
];

const JSModals = [
  {
    id: "my_modal_7",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning JavaScript",
      links: [
        {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          text: "MDN Web Docs",
        },
        { href: "https://www.w3schools.com/js/", text: "W3 Schools" },
        {
          href: "https://www.freecodecamp.org/news/tag/javascript/",
          text: "Free Code Camp",
        },
      ],
    },
  },
  {
    id: "my_modal_8",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/jS4aFq5-91M?si=PXGu0NVbPFBtcXRD",
      videoTitle: "YouTube video player",
    },
  },
];

const ReactModals = [
  {
    id: "my_modal_9",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning React",
      links: [
        {
          href: "https://react.dev/",
          text: "React Dev Docs",
        },
        {
          href: "https://www.w3schools.com/whatis/whatis_react.asp",
          text: "W3 Schools",
        },
        {
          href: "https://v2.scrimba.com/learn-react-c0e",
          text: "Scrimba",
        },
      ],
    },
  },
  {
    id: "my_modal_10",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/bMknfKXIFA8?si=NYjmBJxy94Dusgki",
      videoTitle: "YouTube video player",
    },
  },
];

const AngularModals = [
  {
    id: "my_modal_11",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning Angular",
      links: [
        {
          href: "https://angular.dev/tutorials/learn-angular",
          text: "Angular Docs",
        },
        { href: "https://www.w3schools.com/angular/", text: "W3 Schools" },
        {
          href: "https://www.simplilearn.com/tutorials/angular-tutorial",
          text: "Simplilearn",
        },
      ],
    },
  },
  {
    id: "my_modal_12",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/3qBXWUpoPHo?si=ykz0pt4Go6hw86Fe",
      videoTitle: "YouTube video player",
    },
  },
];

const VueModals = [
  {
    id: "my_modal_13",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning Vue",
      links: [
        {
          href: "https://vuejs.org/",
          text: "Vue Js Docs",
        },
        { href: "https://www.w3schools.com/vue/", text: "W3 Schools" },
        {
          href: "https://v2.scrimba.com/learn-vuejs-c020",
          text: "Scrimba",
        },
      ],
    },
  },
  {
    id: "my_modal_14",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/FXpIoQ_rT_c?si=U16OTo6EKV5va80y",
      videoTitle: "YouTube video player",
    },
  },
];

const sections = [
  {
    title: "HTML",
    accordionData: HTMLObj,
    modals: HTMLModals,
    paddingTop: "pt-[6rem]",
  },
  {
    title: "CSS",
    accordionData: CSSObj,
    modals: CSSModals,
    paddingTop: "pt-[3rem]",
  },
  {
    title: "Version Control",
    accordionData: VersionControlObj,
    modals: VCModals,
    paddingTop: "pt-[3rem]",
  },
  {
    title: "JavaScript",
    accordionData: JavaScriptObj,
    modals: JSModals,
    paddingTop: "pt-[3rem]",
  },
  {
    title: "Package Managers",
    accordionData: PackageManagersObj,
    modals: [],
    paddingTop: "pt-[3rem]",
  },
];

const frameworks = [
  {
    title: "React",
    accordionData: ReactObj,
    modals: ReactModals,
  },
  {
    title: "Angular",
    accordionData: AngularObj,
    modals: AngularModals,
  },
  {
    title: "Vue",
    accordionData: VueObj,
    modals: VueModals,
  },
];

export { sections, frameworks }; 

// Frontend Data for the Accordion and Modal Components End...

// Backend Data for the Accordion and Modal Components Start...

const JavaScriptBackendObj = [
  {
    title: "Introduction to Backend Development",
    subtopics: [
      "What is Backend Development?",
      "Setting Up the Environment",
      "Core Concepts",
    ],
  },
  {
    title: "What is Backend Development?",
    subtopics: [
      "Understand the basic concepts of backend development and its role in web applications.",
      "Learn the difference between frontend and backend development.",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install Node.js and npm.",
      "Configure your development environment with an IDE like Visual Studio Code.",
    ],
  },
  {
    title: "Core Concepts",
    subtopics: [
      "Node.js",
      "NPM (Node Package Manager)",
      "Asynchronous Programming",
    ],
  },
  {
    title: "Node.js",
    subtopics: [
      "Understand what Node.js is and its use in backend development.",
      "Learn how to set up a Node.js project.",
    ],
  },
  {
    title: "NPM (Node Package Manager)",
    subtopics: ["Learn how to use npm to manage dependencies and scripts."],
  },
  {
    title: "Asynchronous Programming",
    subtopics: [
      "Understand the concepts of callbacks, promises, and async/await.",
    ],
  },
  {
    title: "Web Servers",
    subtopics: ["HTTP Protocol", "Express.js"],
  },
  {
    title: "HTTP Protocol",
    subtopics: [
      "Learn the basics of the HTTP protocol.",
      "Understand HTTP methods: GET, POST, PUT, DELETE.",
    ],
  },
  {
    title: "Express.js",
    subtopics: [
      "Learn about Express.js and its role in building web servers.",
      "Understand routing, middleware, and handling requests and responses.",
    ],
  },
  {
    title: "RESTful APIs",
    subtopics: ["REST Architecture", "Building RESTful APIs with Express"],
  },
  {
    title: "REST Architecture",
    subtopics: [
      "Understand the principles of REST (Representational State Transfer).",
      "Learn about RESTful API design.",
    ],
  },
  {
    title: "Building RESTful APIs with Express",
    subtopics: [
      "Learn how to create routes, handle different HTTP methods, and work with query parameters and request bodies.",
    ],
  },
  {
    title: "Databases",
    subtopics: ["Relational Databases", "NoSQL Databases"],
  },
  {
    title: "Relational Databases",
    subtopics: [
      "Understand the basics of relational databases.",
      "Learn about SQL and database management systems like MySQL and PostgreSQL.",
    ],
  },
  {
    title: "NoSQL Databases",
    subtopics: [
      "Understand the basics of NoSQL databases.",
      "Learn about MongoDB and its usage with Mongoose.",
    ],
  },
  {
    title: "Authentication and Authorization",
    subtopics: ["Authentication", "Authorization"],
  },
  {
    title: "Authentication",
    subtopics: [
      "Understand different authentication methods: sessions, tokens, OAuth.",
      "Learn how to implement authentication using JWT (JSON Web Tokens).",
    ],
  },
  {
    title: "Authorization",
    subtopics: [
      "Understand the difference between authentication and authorization.",
      "Learn how to implement role-based access control.",
    ],
  },
  {
    title: "Data Validation and Sanitization",
    subtopics: ["Validation", "Sanitization"],
  },
  {
    title: "Validation",
    subtopics: [
      "Learn how to validate user input on the server-side.",
      "Use libraries like Joi for data validation.",
    ],
  },
  {
    title: "Sanitization",
    subtopics: [
      "Understand the importance of data sanitization to prevent security vulnerabilities.",
    ],
  },
  {
    title: "Error Handling and Logging",
    subtopics: ["Error Handling", "Logging"],
  },
  {
    title: "Error Handling",
    subtopics: [
      "Learn how to handle errors gracefully in your applications.",
      "Understand the concept of try-catch blocks and centralized error handling.",
    ],
  },
  {
    title: "Logging",
    subtopics: [
      "Understand the importance of logging.",
      "Learn how to use logging libraries like Winston and Morgan.",
    ],
  },
  {
    title: "Security",
    subtopics: ["Common Security Threats", "Implementing Security"],
  },
  {
    title: "Common Security Threats",
    subtopics: [
      "Learn about common security threats: SQL injection, XSS, CSRF, etc.",
    ],
  },
  {
    title: "Implementing Security",
    subtopics: [
      "Understand how to implement security measures: HTTPS, CORS, Helmet, rate limiting.",
    ],
  },
  {
    title: "Testing",
    subtopics: ["Unit Testing", "Integration Testing"],
  },
  {
    title: "Unit Testing",
    subtopics: [
      "Learn the basics of unit testing.",
      "Use testing frameworks like Mocha, Chai, and Jest.",
    ],
  },
  {
    title: "Integration Testing",
    subtopics: [
      "Understand integration testing.",
      "Learn how to test your APIs using tools like Postman and supertest.",
    ],
  },
  {
    title: "Deployment",
    subtopics: [
      "Preparing for Deployment",
      "Deployment Platforms",
      "CI/CD (Continuous Integration/Continuous Deployment)",
    ],
  },
  {
    title: "Preparing for Deployment",
    subtopics: [
      "Understand the steps needed to prepare your application for deployment.",
    ],
  },
  {
    title: "Deployment Platforms",
    subtopics: [
      "Learn about different deployment platforms: Heroku, AWS, DigitalOcean, Vercel, etc.",
    ],
  },
  {
    title: "CI/CD (Continuous Integration/Continuous Deployment)",
    subtopics: [
      "Understand the concepts of CI/CD.",
      "Learn how to set up CI/CD pipelines using tools like GitHub Actions, GitLab CI, Jenkins, etc.",
    ],
  },
  {
    title: "Advanced Topics",
    subtopics: ["WebSockets", "GraphQL", "Microservices"],
  },
  {
    title: "WebSockets",
    subtopics: [
      "Understand the basics of WebSockets.",
      "Learn how to implement real-time communication using libraries like Socket.io.",
    ],
  },
  {
    title: "GraphQL",
    subtopics: [
      "Understand the basics of GraphQL.",
      "Learn how to build GraphQL APIs using Apollo Server.",
    ],
  },
  {
    title: "Microservices",
    subtopics: [
      "Learn the concepts of microservices architecture.",
      "Understand how to break down a monolithic application into microservices.",
    ],
  },
  {
    title: "DevOps for Backend Developers",
    subtopics: ["Docker", "Kubernetes"],
  },
  {
    title: "Docker",
    subtopics: [
      "Understand the basics of Docker.",
      "Learn how to containerize your applications.",
    ],
  },
  {
    title: "Kubernetes",
    subtopics: [
      "Understand the basics of Kubernetes.",
      "Learn how to manage containerized applications at scale.",
    ],
  },
];

const JavaBackendObj = [
  {
    title: "Introduction to Backend Development",
    subtopics: ["What is Backend Development?", "Setting Up the Environment"],
  },
  {
    title: "What is Backend Development?",
    subtopics: [
      "Understand the basic concepts of backend development and its role in web applications.",
      "Learn the difference between frontend and backend development.",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install JDK (Java Development Kit).",
      "Set up your development environment with an IDE like IntelliJ IDEA, Eclipse, or VS Code.",
    ],
  },
  {
    title: "Core Concepts",
    subtopics: ["Java Fundamentals", "Maven and Gradle"],
  },
  {
    title: "Java Fundamentals",
    subtopics: [
      "Review Java basics: variables, data types, operators, control flow statements, and OOP principles (encapsulation, inheritance, polymorphism, and abstraction).",
      "Learn about Java Collections Framework.",
    ],
  },
  {
    title: "Maven and Gradle",
    subtopics: [
      "Understand the basics of build tools like Maven and Gradle.",
      "Learn how to manage dependencies and build Java projects.",
    ],
  },
  {
    title: "Web Servers and Servlet API",
    subtopics: ["Introduction to Web Servers", "Java Servlet API"],
  },
  {
    title: "Introduction to Web Servers",
    subtopics: [
      "Understand the basics of web servers.",
      "Learn about popular web servers like Apache Tomcat, Jetty, and Undertow.",
    ],
  },
  {
    title: "Java Servlet API",
    subtopics: [
      "Understand the Servlet lifecycle.",
      "Learn how to handle HTTP requests and responses with Servlets.",
    ],
  },
  {
    title: "Spring Framework",
    subtopics: [
      "Introduction to Spring Framework",
      "Spring Core",
      "Spring Boot",
    ],
  },
  {
    title: "Introduction to Spring Framework",
    subtopics: [
      "Understand the basics of the Spring Framework.",
      "Learn about the benefits of using Spring for backend development.",
    ],
  },
  {
    title: "Spring Core",
    subtopics: [
      "Learn about dependency injection and inversion of control.",
      "Understand how to configure Spring beans.",
    ],
  },
  {
    title: "Spring Boot",
    subtopics: [
      "Learn about Spring Boot and its features.",
      "Understand how to create a Spring Boot application.",
      "Learn about Spring Boot auto-configuration and Spring Initializr.",
    ],
  },
  {
    title: "Building RESTful APIs",
    subtopics: ["REST Architecture", "Building RESTful APIs with Spring Boot"],
  },
  {
    title: "REST Architecture",
    subtopics: [
      "Understand the principles of REST (Representational State Transfer).",
      "Learn about RESTful API design.",
    ],
  },
  {
    title: "Building RESTful APIs with Spring Boot",
    subtopics: [
      "Learn how to create RESTful endpoints.",
      "Understand how to handle HTTP methods: GET, POST, PUT, DELETE.",
    ],
  },
  {
    title: "Databases",
    subtopics: ["Relational Databases", "NoSQL Databases", "JPA and Hibernate"],
  },
  {
    title: "Relational Databases",
    subtopics: [
      "Understand the basics of relational databases.",
      "Learn about SQL and database management systems like MySQL, PostgreSQL, and Oracle.",
    ],
  },
  {
    title: "NoSQL Databases",
    subtopics: [
      "Understand the basics of NoSQL databases.",
      "Learn about MongoDB and other NoSQL databases.",
    ],
  },
  {
    title: "JPA and Hibernate",
    subtopics: [
      "Understand the Java Persistence API (JPA).",
      "Learn how to use Hibernate for ORM (Object-Relational Mapping).",
    ],
  },
  {
    title: "Authentication and Authorization",
    subtopics: ["Authentication", "Authorization"],
  },
  {
    title: "Authentication",
    subtopics: [
      "Understand different authentication methods: sessions, tokens, OAuth.",
      "Learn how to implement authentication using Spring Security.",
    ],
  },
  {
    title: "Authorization",
    subtopics: [
      "Understand the difference between authentication and authorization.",
      "Learn how to implement role-based access control using Spring Security.",
    ],
  },
  {
    title: "Data Validation and Sanitization",
    subtopics: ["Validation", "Sanitization"],
  },
  {
    title: "Validation",
    subtopics: [
      "Learn how to validate user input on the server-side using Spring Validator.",
    ],
  },
  {
    title: "Sanitization",
    subtopics: [
      "Understand the importance of data sanitization to prevent security vulnerabilities.",
    ],
  },
  {
    title: "Error Handling and Logging",
    subtopics: ["Error Handling", "Logging"],
  },
  {
    title: "Error Handling",
    subtopics: [
      "Learn how to handle errors gracefully in your applications.",
      "Understand the concept of exception handling and centralized error handling in Spring Boot.",
    ],
  },
  {
    title: "Logging",
    subtopics: [
      "Understand the importance of logging.",
      "Learn how to use logging frameworks like SLF4J, Logback, and Log4j.",
    ],
  },
  {
    title: "Security",
    subtopics: ["Common Security Threats", "Implementing Security"],
  },
  {
    title: "Common Security Threats",
    subtopics: [
      "Learn about common security threats: SQL injection, XSS, CSRF, etc.",
    ],
  },
  {
    title: "Implementing Security",
    subtopics: [
      "Understand how to implement security measures: HTTPS, CORS, Spring Security, rate limiting.",
    ],
  },
  {
    title: "Testing",
    subtopics: ["Unit Testing", "Integration Testing", "Mocking"],
  },
  {
    title: "Unit Testing",
    subtopics: [
      "Learn the basics of unit testing with JUnit.",
      "Understand how to write unit tests for Java applications.",
    ],
  },
  {
    title: "Integration Testing",
    subtopics: [
      "Learn how to write integration tests for your applications.",
      "Use Spring Boot's testing support for integration testing.",
    ],
  },
  {
    title: "Mocking",
    subtopics: [
      "Understand the concept of mocking.",
      "Learn how to use Mockito for creating mock objects in tests.",
    ],
  },
  {
    title: "Performance Optimization",
    subtopics: ["Profiling and Monitoring", "Caching"],
  },
  {
    title: "Profiling and Monitoring",
    subtopics: [
      "Learn about profiling and monitoring tools like JProfiler, VisualVM, and Spring Boot Actuator.",
    ],
  },
  {
    title: "Caching",
    subtopics: [
      "Understand the basics of caching.",
      "Learn how to implement caching in your applications using Spring Cache.",
    ],
  },
  {
    title: "Deployment",
    subtopics: [
      "Preparing for Deployment",
      "Deployment Platforms",
      "CI/CD (Continuous Integration/Continuous Deployment)",
    ],
  },
  {
    title: "Preparing for Deployment",
    subtopics: [
      "Understand the steps needed to prepare your application for deployment.",
    ],
  },
  {
    title: "Deployment Platforms",
    subtopics: [
      "Learn about different deployment platforms: Heroku, AWS, DigitalOcean, etc.",
    ],
  },
  {
    title: "CI/CD (Continuous Integration/Continuous Deployment)",
    subtopics: [
      "Understand the concepts of CI/CD.",
      "Learn how to set up CI/CD pipelines using tools like Jenkins, GitHub Actions, GitLab CI, etc.",
    ],
  },
  {
    title: "Advanced Topics",
    subtopics: ["Microservices Architecture", "WebSockets", "GraphQL"],
  },
  {
    title: "Microservices Architecture",
    subtopics: [
      "Understand the concepts of microservices architecture.",
      "Learn about Spring Cloud for building microservices.",
    ],
  },
  {
    title: "WebSockets",
    subtopics: [
      "Understand the basics of WebSockets.",
      "Learn how to implement real-time communication using Spring WebSocket.",
    ],
  },
  {
    title: "GraphQL",
    subtopics: [
      "Understand the basics of GraphQL.",
      "Learn how to build GraphQL APIs using Spring Boot.",
    ],
  },
  {
    title: "DevOps for Backend Developers",
    subtopics: ["Docker", "Kubernetes"],
  },
  {
    title: "Docker",
    subtopics: [
      "Understand the basics of Docker.",
      "Learn how to containerize your applications.",
    ],
  },
  {
    title: "Kubernetes",
    subtopics: [
      "Understand the basics of Kubernetes.",
      "Learn how to manage containerized applications at scale.",
    ],
  },
];

const PythonBackendObj = [
  {
    title: "Introduction to Backend Development",
    subtopics: ["What is Backend Development?", "Setting Up the Environment"],
  },
  {
    title: "What is Backend Development?",
    subtopics: [
      "Understand the basic concepts of backend development and its role in web applications.",
      "Learn the difference between frontend and backend development.",
    ],
  },
  {
    title: "Setting Up the Environment",
    subtopics: [
      "Install Python.",
      "Set up your development environment with an IDE like PyCharm, VS Code, or Jupyter Notebook.",
    ],
  },
  {
    title: "Core Concepts",
    subtopics: ["Python Fundamentals", "Pip and Virtual Environments"],
  },
  {
    title: "Python Fundamentals",
    subtopics: [
      "Review Python basics: variables, data types, operators, control flow statements, and OOP principles (encapsulation, inheritance, polymorphism, and abstraction).",
      "Learn about Python data structures: lists, tuples, sets, and dictionaries.",
    ],
  },
  {
    title: "Pip and Virtual Environments",
    subtopics: [
      "Understand how to manage dependencies using pip.",
      "Learn how to create and use virtual environments with venv or virtualenv.",
    ],
  },
  {
    title: "Web Servers and WSGI",
    subtopics: [
      "Introduction to Web Servers",
      "WSGI (Web Server Gateway Interface)",
    ],
  },
  {
    title: "Introduction to Web Servers",
    subtopics: [
      "Understand the basics of web servers.",
      "Learn about popular web servers like Gunicorn, uWSGI, and Daphne.",
    ],
  },
  {
    title: "WSGI (Web Server Gateway Interface)",
    subtopics: [
      "Understand the WSGI standard and its role in Python web applications.",
      "Learn how to create a simple WSGI application.",
    ],
  },
  {
    title: "Web Frameworks",
    subtopics: ["Flask", "Django", "FastAPI"],
  },
  {
    title: "Flask",
    subtopics: [
      "Understand the basics of Flask, a micro web framework.",
      "Learn how to create routes, handle requests, and manage templates.",
    ],
  },
  {
    title: "Django",
    subtopics: [
      "Understand the basics of Django, a full-stack web framework.",
      "Learn about Django's MTV architecture (Model-Template-View).",
      "Learn how to create models, views, and templates in Django.",
    ],
  },
  {
    title: "FastAPI",
    subtopics: [
      "Understand the basics of FastAPI, a modern web framework for building APIs.",
      "Learn how to create endpoints, handle requests, and use FastAPI's built-in validation.",
    ],
  },
  {
    title: "Building RESTful APIs",
    subtopics: [
      "REST Architecture",
      "Building RESTful APIs with Flask",
      "Building RESTful APIs with Django",
      "Building RESTful APIs with FastAPI",
    ],
  },
  {
    title: "REST Architecture",
    subtopics: [
      "Understand the principles of REST (Representational State Transfer).",
      "Learn about RESTful API design.",
    ],
  },
  {
    title: "Building RESTful APIs with Flask",
    subtopics: [
      "Learn how to create RESTful endpoints in Flask.",
      "Understand how to handle HTTP methods: GET, POST, PUT, DELETE in Flask.",
    ],
  },
  {
    title: "Building RESTful APIs with Django",
    subtopics: [
      "Learn how to create RESTful endpoints using Django REST Framework (DRF).",
      "Understand how to handle HTTP methods: GET, POST, PUT, DELETE in DRF.",
    ],
  },
  {
    title: "Building RESTful APIs with FastAPI",
    subtopics: [
      "Learn how to create RESTful endpoints in FastAPI.",
      "Understand how to handle HTTP methods: GET, POST, PUT, DELETE in FastAPI.",
    ],
  },
  {
    title: "Databases",
    subtopics: [
      "Relational Databases",
      "NoSQL Databases",
      "ORM (Object-Relational Mapping)",
    ],
  },
  {
    title: "Relational Databases",
    subtopics: [
      "Understand the basics of relational databases.",
      "Learn about SQL and database management systems like PostgreSQL, MySQL, and SQLite.",
    ],
  },
  {
    title: "NoSQL Databases",
    subtopics: [
      "Understand the basics of NoSQL databases.",
      "Learn about MongoDB and other NoSQL databases.",
    ],
  },
  {
    title: "ORM (Object-Relational Mapping)",
    subtopics: [
      "Understand the concept of ORM.",
      "Learn how to use ORM tools like SQLAlchemy for Flask and Django ORM for Django.",
    ],
  },
  {
    title: "Authentication and Authorization",
    subtopics: ["Authentication", "Authorization"],
  },
  {
    title: "Authentication",
    subtopics: [
      "Understand different authentication methods: sessions, tokens, OAuth.",
      "Learn how to implement authentication using libraries like Flask-Login, Django Auth, and FastAPI OAuth2.",
    ],
  },
  {
    title: "Authorization",
    subtopics: [
      "Understand the difference between authentication and authorization.",
      "Learn how to implement role-based access control.",
    ],
  },
  {
    title: "Data Validation and Serialization",
    subtopics: ["Validation", "Serialization"],
  },
  {
    title: "Validation",
    subtopics: [
      "Learn how to validate user input on the server-side.",
      "Use libraries like Marshmallow for validation in Flask, Django Forms for Django, and Pydantic for FastAPI.",
    ],
  },
  {
    title: "Serialization",
    subtopics: [
      "Understand the concept of serialization.",
      "Learn how to serialize and deserialize data using Marshmallow, Django REST Framework Serializers, and Pydantic.",
    ],
  },
  {
    title: "Error Handling and Logging",
    subtopics: ["Error Handling", "Logging"],
  },
  {
    title: "Error Handling",
    subtopics: [
      "Learn how to handle errors gracefully in your applications.",
      "Understand the concept of exception handling and centralized error handling in Flask, Django, and FastAPI.",
    ],
  },
  {
    title: "Logging",
    subtopics: [
      "Understand the importance of logging.",
      "Learn how to use logging libraries like Python's built-in logging module, Loguru, and structlog.",
    ],
  },
  {
    title: "Security",
    subtopics: ["Common Security Threats", "Implementing Security"],
  },
  {
    title: "Common Security Threats",
    subtopics: [
      "Learn about common security threats: SQL injection, XSS, CSRF, etc.",
    ],
  },
  {
    title: "Implementing Security",
    subtopics: [
      "Understand how to implement security measures: HTTPS, CORS, security headers, rate limiting.",
      "Learn how to use security libraries and tools like Flask-SeaSurf, Django Security Middleware, and FastAPI Security.",
    ],
  },
  {
    title: "Testing",
    subtopics: ["Unit Testing", "Integration Testing", "Mocking"],
  },
  {
    title: "Unit Testing",
    subtopics: [
      "Learn the basics of unit testing with unittest and pytest.",
      "Understand how to write unit tests for Python applications.",
    ],
  },
  {
    title: "Integration Testing",
    subtopics: [
      "Learn how to write integration tests for your applications.",
      "Use tools like pytest-django for Django and HTTPX for FastAPI.",
    ],
  },
  {
    title: "Mocking",
    subtopics: [
      "Understand the concept of mocking.",
      "Learn how to use unittest.mock and pytest-mock for creating mock objects in tests.",
    ],
  },
  {
    title: "Performance Optimization",
    subtopics: ["Profiling and Monitoring", "Caching"],
  },
  {
    title: "Profiling and Monitoring",
    subtopics: [
      "Learn about profiling and monitoring tools like cProfile, Py-Spy, New Relic, and Prometheus.",
    ],
  },
  {
    title: "Caching",
    subtopics: [
      "Understand the basics of caching.",
      "Learn how to implement caching using Redis, Flask-Caching, Django Cache Framework, and FastAPI Cache.",
    ],
  },
  {
    title: "Deployment",
    subtopics: [
      "Preparing for Deployment",
      "Deployment Platforms",
      "CI/CD (Continuous Integration/Continuous Deployment)",
    ],
  },
  {
    title: "Preparing for Deployment",
    subtopics: [
      "Understand the steps needed to prepare your application for deployment.",
    ],
  },
  {
    title: "Deployment Platforms",
    subtopics: [
      "Learn about different deployment platforms: Heroku, AWS, DigitalOcean, Google Cloud Platform, and Azure.",
    ],
  },
  {
    title: "CI/CD (Continuous Integration/Continuous Deployment)",
    subtopics: [
      "Understand the concepts of CI/CD.",
      "Learn how to set up CI/CD pipelines using tools like GitHub Actions, GitLab CI, Jenkins, and CircleCI.",
    ],
  },
  {
    title: "Advanced Topics",
    subtopics: ["Microservices Architecture", "WebSockets", "GraphQL"],
  },
  {
    title: "Microservices Architecture",
    subtopics: [
      "Understand the concepts of microservices architecture.",
      "Learn about tools and frameworks for building microservices in Python like Flask, FastAPI, and gRPC.",
    ],
  },
  {
    title: "WebSockets",
    subtopics: [
      "Understand the basics of WebSockets.",
      "Learn how to implement real-time communication using libraries like Flask-SocketIO, Django Channels, and FastAPI WebSockets.",
    ],
  },
  {
    title: "GraphQL",
    subtopics: [
      "Understand the basics of GraphQL.",
      "Learn how to build GraphQL APIs using libraries like Graphene for Django and Ariadne for FastAPI.",
    ],
  },
  {
    title: "DevOps for Backend Developers",
    subtopics: ["Docker", "Kubernetes"],
  },
  {
    title: "Docker",
    subtopics: [
      "Understand the basics of Docker.",
      "Learn how to containerize your applications.",
    ],
  },
  {
    title: "Kubernetes",
    subtopics: [
      "Understand the basics of Kubernetes.",
      "Learn how to manage containerized applications at scale.",
    ],
  },
];

const JavaScriptBackendModals = [
  {
    id: "my_modal_1",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning Backend with JavaScript",
      links: [
        {
          href: "https://vuejs.org/",
          text: "Vue Js Docs",
        },
        { href: "https://www.w3schools.com/vue/", text: "W3 Schools" },
        {
          href: "https://v2.scrimba.com/learn-vuejs-c020",
          text: "Scrimba",
        },
      ],
    },
  },
  {
    id: "my_modal_2",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/FXpIoQ_rT_c?si=U16OTo6EKV5va80y",
      videoTitle: "YouTube video player",
    },
  },
];

const JavaBackendModals = [
  {
    id: "my_modal_3",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning Backend with Java",
      links: [
        {
          href: "https://vuejs.org/",
          text: "Vue Js Docs",
        },
        { href: "https://www.w3schools.com/vue/", text: "W3 Schools" },
        {
          href: "https://v2.scrimba.com/learn-vuejs-c020",
          text: "Scrimba",
        },
      ],
    },
  },
  {
    id: "my_modal_4",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/FXpIoQ_rT_c?si=U16OTo6EKV5va80y",
      videoTitle: "YouTube video player",
    },
  },
];

const PythonBackendModals = [
  {
    id: "my_modal_5",
    buttonText: "Resources",
    content: {
      title: "Online resources for Learning Backend with Python",
      links: [
        {
          href: "https://vuejs.org/",
          text: "Vue Js Docs",
        },
        { href: "https://www.w3schools.com/vue/", text: "W3 Schools" },
        {
          href: "https://v2.scrimba.com/learn-vuejs-c020",
          text: "Scrimba",
        },
      ],
    },
  },
  {
    id: "my_modal_6",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/FXpIoQ_rT_c?si=U16OTo6EKV5va80y",
      videoTitle: "YouTube video player",
    },
  },
];


const backendLanguages = [
  {
    title: "JavaScript",
    accordionData: JavaScriptBackendObj,
    modals: JavaScriptBackendModals,
  },
  {
    title: "Python",
    accordionData: PythonBackendObj,
    modals: PythonBackendModals,
  },
  {
    title: "Java",
    accordionData: JavaBackendObj,
    modals: JavaBackendModals,
  },
];

export { backendLanguages };