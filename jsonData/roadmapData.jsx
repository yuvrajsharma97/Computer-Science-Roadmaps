import React from "react";

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

const VueObj = [];

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
    id: "my_modal_10",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/jS4aFq5-91M?si=PXGu0NVbPFBtcXRD",
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
    id: "my_modal_12",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/jS4aFq5-91M?si=PXGu0NVbPFBtcXRD",
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
    id: "my_modal_14",
    buttonText: "Video Lecture",
    content: {
      videoSrc: "https://www.youtube.com/embed/jS4aFq5-91M?si=PXGu0NVbPFBtcXRD",
      videoTitle: "YouTube video player",
    },
  },
];



export {
  HTMLObj,
  CSSObj,
  VersionControlObj,
  JavaScriptObj,
  PackageManagersObj,
  ReactObj,
  AngularObj,
  VueObj,
  HTMLModals,
  CSSModals,
  VCModals,
  JSModals,
  ReactModals,
  AngularModals,
  VueModals,
}; // eslint-disable-line
