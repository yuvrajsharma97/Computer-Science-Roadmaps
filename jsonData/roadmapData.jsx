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

const JavaScriptBasicObj = [
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
];

const JavaScriptAdvancedObj = [
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

export {
  HTMLObj,
  CSSObj,
  VersionControlObj,
  JavaScriptBasicObj,
  JavaScriptAdvancedObj,
  PackageManagersObj,
  
  HTMLModals,
  CSSModals,
  VCModals,
};   // eslint-disable-line