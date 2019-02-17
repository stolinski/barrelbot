#! /usr/bin/env node

import chokidar from 'chokidar';
import Yargs from 'yargs';

const builder = (yargs: Yargs.Argv<{}>) => {
  // console.log('builder', yargs);
  return yargs.positional('folder', {
    describe: 'folder',
    default: 'src'
  });
};
type HType = {
  [argName: string]: unknown;
  _: string[];
  $0: string;
};
const handler = () =>
  // argv: HType
  {
    // console.log('handler', argv);
    // if (argv.verbose) console.info(`start server on :${argv.port}`);
    // serve(argv.port);
  };

async function run() {
  const temp: HType = Yargs
    // list of stuff
    .command('watch [port]', 'have a watcher', builder, handler)
    .option('verbose', {
      alias: 'v',
      default: false
    }).argv;
  console.log(temp);
  const folder = temp.folder as string;
  console.log('watching', folder);
  chokidar
    .watch(folder, { ignored: /(^|[\/\\])\../ })
    .on('all', (event, path) => {
      console.log(event, path);
    });
}

module.exports = { run };
