# @x12i/graphenix-dot usage example

Convert Graphenix graph documents, executable plans, and traces to Graphviz DOT language.

This consuming application demonstrates **convert a small graph document to graphviz dot** using the published npm package, pinned to `2.17.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Convert an authoring graph into Graphviz DOT for visualization.
- Overlay a supported execution trace on a plan diagram.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/graphenix-dot)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
