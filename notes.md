# petra2 dev notes


## writing standards

petra, by default, incorporates the [BEM](https://en.bem.info/methodology/quick-start/) namespacing and structuring methodology, and takes some notes from the expanded [BEMIT](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) naming convention.

These conventions are enforced and made accessible through configurable mixins and custom functions.

### properties/values

Because the assumption is that petra will be compiled into compact or minified CSS, the source scss is formatted in scannable, well-spaced blocks of code. Properties within selector groups are organized (1) relationally, and (2) alphabetically\*; with one (1) empty line between relational groups. One (1) "Tab" is equal to 4 spaces. Values are indented to the same column depending on the property's nested level; e.g. for properties nested once within a single parent selector (to column 5) the values are indented to column 29 (generally 3-4 tabs), plus one (1) Tab per nested level.

Relational groups are [`display level` | `box style` | `type` | `content/interaction`]. **display level** groups the _invisible_ styling properties that determine element size, formatting, and spacing in the document flow (e.g. `box-sizing`, `float`, `height`, `margin`). **box style** groups the _visible_ styling properties that shape the element (`background`, `border`, `box-shadow`, `outline`). **type** groups font and text styles (`color`, `font-family`, `line-height`, `text-decoration`). **content/interaction** groups properties that affect user interaction and content insertion (`content`, `cursor`, `pointer-events`).

Namespaced properties may be [nested](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Nested_Properties "Sass documentation for nested properties") to keep rules explicit. The closing bracket of a nested property group trails the last property to keep relational groups compact.

```scss
.c-example {
    // display level
    box-sizing:             border-box;
    display:                block;
    margin: {
        top:                0;
        right:              auto;
        bottom:             1em;
        left:               auto; }
    padding:                0.5rem;
    
    // box style
    background: {
        color:              $palette-primary; }
    border:                 0;
    
    // type
    color:                  $palette-foreground;
    font: {
        family:             $font-stack;
        size:               1em;
        weight:             inherit; }
    line-height:            1.125;
    
    // content/interaction
    pointer-events:         none;
}
```

\* Exceptions to this are cases wherein two properties could be considered so closely related that it makes practical sense to keep them together, such as `height` and `width`. In petra, `width` is placed under `height`, in contrast with the alphabetical convention. In cases where a width is declared but a height is not, `width` is placed as though `height` were present in the block, for consistency.

### nested selectors

Nested selectors are sorted by type and relationship to the parent class, and inserted under the parent selector's property declarations; separated by two empty lines. Nested selectors abide by [Sass nesting rules](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Nested_Rules "Sass documentation for nested rules"), and follow the above listed property/value formatting standards, with a single empty line between nested selector type groups.

[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes "MDN documentation for 'pseudo-classes'") are first. Their arrangement depends on their impact on and importance to their parent, and depends on context (e.g. a group of list items whose static styles are defined according to their placement within the list might prioritize `:nth-of-type` pseudo-classes over `:hover`).

State-modifying classes follow. These may be integrated into pseudo-class selectors, as they often perform the same functions; the class selectors typically being applied dynamically via a frontend framework.

```scss
.c-example {
    pointer-events:         none;
    
    
    &:hover {
        background: {
            color:              $palette-secondary; }
    }
    &:focus,
    &.js-active {
        opacity:                0.75;
    }
}
```


## light reading

[Sass: Syntactically Awesome Style Sheets / Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

[CSS Wizardry / MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
[CSS Wizardry / BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
[stephenway / BEMIT Cheatsheet](https://gist.github.com/stephenway/a6145d9b4430e8c55a77)

