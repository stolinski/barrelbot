# 🤖Barrelbot

> The Automated barrel file manager

Recursively watches a folder and generates barrel files ([What is a barrel file?](https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md))

- Install globally, run anywhere you want
- generates index.tsx files by default, use a flag for `.ts`, `.js`, `.jsx`

![barrelbot](https://user-images.githubusercontent.com/6764957/52915369-2d0f8680-3277-11e9-8589-c0c1d60d21ca.gif)

## How to use

Install globally (or locally up to you)

```
npm i -g barrelbot
```

Then in your project, assuming you want to generate barrel files in `/src`:

```
barrelbot watch src
```

It ignores files that you would normally want to ignore based on `.` in the filename, e.g.:

- two or more dots e.g. `foo.stories.js` or `bar.spec.ts`
- starting with a dog e.g. `.somedotfile`

## Option: `--ext {js, jsx, ts, tsx}`

By default barrelbot assumes you want to use and output a `.tsx` extension. you can configure this with a `--extension` or `--ext` flag:

```
barrelbot watch src --extension js
```

## Option: `--namespace {none, all, defaultOnly}`

By default barrelbot assumes you export everything without a namespace, so it generates exports like:

```js
// barrelbot watch myFolder
// index.js
export * from './foo';
```

However, many people understandably have different styles (open an issue if you have a strong opinion on what the default should be), so you can configure this with a `--namespace` or `--n` flag:

`all`:

```js
// barrelbot watch myFolder --namespace all
// index.js
import * as foo from './foo';
export { foo };
```

`defaultOnly`:

```js
// barrelbot watch myFolder --namespace defaultOnly
// index.js
export { default as foo } from './foo';
```

## Visualizing what it does

Given a file structure like

```
- someFolder
- myWatchedFolder
  - components
    - Header
      - Logo.tsx
      - Title.tsx
      - Logo.test.tsx
    - Main.tsx
    - Button.tsx
    - Button.spec.ts
  - App.tsx
  - .somedotfile
```

When you run `barrelbot watch myWatchedFolder`, it results in:

```
- someFolder
- myWatchedFolder
  - components
    - Header
      - Logo.tsx
      - Title.tsx
      - Logo.test.tsx
      - index.tsx
    - Main.tsx
    - Button.tsx
    - Button.spec.ts
    - index.tsx
  - App.tsx
  - .somedotfile
  - index.tsx
```

while ignoring the `*.test.tsx`, `*.spec.ts`, and `.somedotfile`.

## Tip!

Before running barrelbot, I advise committing your project to git first.

This way, if you run the bot and find barrel files that aren't generated to your liking, you can run `git clean -f` to remove them.

## Plan

- interactive fix mode

currently the bot bails out whenever a noncompliant index.ts file is found. we can add ignore and skip semantics as well as an interactive fix method for easier onboarding.

## Inspiration

https://github.com/bencoveney/barrelsby

how it differs:

- watch mode by default
- barrel file only for the files at every directory level, not one megafile
