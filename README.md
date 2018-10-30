# Petra

> A configurable, responsive, *slightly* experimental Sass/SCSS framework.


## Getting started

Install with yarn:

```
yarn add petra-sass
```

or npm:

```
npm install petra-sass
```

Once the package has been installed, import Petra's styles into your project:

```scss
// layered import method, for deep integration.
@import
    './node_modules/petra-sass/petra/00-resources',
    './node_modules/petra-sass/petra/01-settings',
    './node_modules/petra-sass/petra/02-tools',
    './node_modules/petra-sass/petra/03-generic',
    './node_modules/petra-sass/petra/04-elements',
    './node_modules/petra-sass/petra/05-objects',
    './node_modules/petra-sass/petra/07-overrides';
```

```scss
// single import method, for simple integration.
@import './node_modules/petra-sass/petra';
```


## Configuring Petra

See documentation for [Configuring Petra](https://github.com/Logicisms/petra/wiki/Configuring-Petra).
