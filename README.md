# landing

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Mobile first CSS

Follow mobile-first approach.
Use `@include media('phone', 'tablet', 'sm-desktop', 'desktop')` mixin for consistent media queries.

## Helpers

Use `spacing(1, 2, 3, ...)` function for margins, paddings or borders.
1 size = 8px (like in material UI)

`_variables.scss`, `_mixins.scss` files contain variables, and helper functions.
