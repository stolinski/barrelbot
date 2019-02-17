#! /usr/bin/env node

// import { buildBarrels } from './builder';
// import { getDestinations } from './destinations';
// import { buildTree } from './fileTree';
// import { getBarrelName } from './options/barrelName';
// import { getCombinedBaseUrl } from './options/baseUrl';
// import { getLogger } from './options/logger';
// import { Arguments, LocationOption } from './options/options';
// import { getQuoteCharacter } from './options/quoteCharacter';
// import { resolveRootPath } from './options/rootPath';
// import { purge } from './purge';
// import { Directory } from './utilities';

type Arguments = any;
function main(args: Arguments) {
  // Get the launch options/arguments.
  // const logger = getLogger(args.verbose as boolean);
  // const barrelName = getBarrelName(args.name as string, logger);
  // const rootPath = resolveRootPath(args.directory as string);
  // const baseUrl = getCombinedBaseUrl(rootPath, args.baseUrl);

  // Build the directory tree.
  // const rootTree = buildTree(rootPath, barrelName, logger);
  console.log({ args });
  // Work out which directories should have barrels.
  // const destinations: Directory[] = getDestinations(
  //   rootTree,
  //   args.location as LocationOption,
  //   barrelName,
  //   logger
  // );

  // // Potentially there are some existing barrels that need removing.
  // purge(rootTree, args.delete !== undefined && args.delete, barrelName, logger);

  // // Create the barrels.
  // const quoteCharacter = getQuoteCharacter(args.singleQuotes as boolean);
  // buildBarrels(
  //   destinations,
  //   quoteCharacter,
  //   barrelName,
  //   logger,
  //   baseUrl,
  //   args.structure,
  //   ([] as string[]).concat(args.include || []),
  //   ([] as string[]).concat(args.exclude || [])
  // );
}

export = main;
