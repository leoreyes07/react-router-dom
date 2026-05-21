const blogdata = [];

blogdata.push({
  title: 'What is React?',
  slug: 'what-is-react',
  content: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components". React has a few different kinds of components, but we’ll start with React.Component subclasses. \n\nOne of the best things about React is how it handles updates. When your data changes, React will efficiently update and render just the right components. This makes your code more predictable and easier to debug.',
  author: 'John Doe',
});

blogdata.push({
  title: 'What is Vue?',
  slug: 'what-is-vue',
  content: 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.\n\nVue is designed to be incrementally adoptable. The core library is focused on the declarative rendering and component composition, and can be embedded into existing pages. On the other hand, a framework like Nuxt builds around Vue to offer a complete enterprise-ready architecture.',
  author: 'Joanne Doe',
});

blogdata.push({
  title: 'What is Angular?',
  slug: 'what-is-angular',
  content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.\n\nThe architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into NgModules. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules.',
  author: 'Pearl J',
});

export { blogdata };