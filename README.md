# Barrelbot

🤖Wrote an automated barrel file manager

Recursively watches a folder and generates barrel files (https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md)

- Install globally, run anywhere
- .ts extensions for now but can extend to .js, .mjs, etc...

## How to use

Install globally (or locally up to you)

```
npm i -g barrelbot
```

Then in your project, assuming you want to generate barrel files in `/src`:

```
barrelbot watch src
```

## inspiration

https://github.com/bencoveney/barrelsby
