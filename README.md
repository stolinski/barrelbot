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

## `--ext {js, jsx, ts, tsx}`: Extensions

By default barrelbot assumes you want a `.tsx` extension. you can configure this with a `--extension` or `--ext` flag:

```
barrelbot watch src --extension js
```

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
