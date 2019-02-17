import fs from 'fs';
import util from 'util';
const fs_writeFile = util.promisify(fs.writeFile);
import path from 'path';
import { checkDir } from '../checks/checkDir';
import { FILETYPE, COMMENTSTRING, NAMESPACETYPE } from '../types';

type CONFIG = {
  NAMESPACE: NAMESPACETYPE;
  EXTENSION: FILETYPE;
};
/** return promise of a writing job */
export function writeIndex(pathToDir: string, config: CONFIG) {
  const { indexFilePath, allFilesExceptIndex } = checkDir(
    pathToDir,
    config.EXTENSION
  );
  let finalString: string[] = [
    COMMENTSTRING,
    '',
    '// for more info: https://github.com/sw-yx/barrelbot'
  ];
  allFilesExceptIndex.forEach(filePath => {
    const newLine = createExportLine(filePath, config);
    if (newLine) finalString.push(newLine);
  });

  // write
  return fs_writeFile(indexFilePath, finalString.join('\n'));
}

function createExportLine(filePath: string, config: CONFIG) {
  const _basename = path.basename(filePath);
  let basename: string,
    basenameArr = _basename.split('.');
  if (basenameArr.length > 2) {
    throw new Error(
      `unexpected number of dots in filename ${filePath}, you shouldnt see this error`
    );
  }
  basename = basenameArr[0];
  const isMatchingTS = config.EXTENSION === 'ts' && basenameArr[1] === 'ts';
  const isMatchingTSX =
    config.EXTENSION === 'tsx' && ['ts', 'tsx'].includes(basenameArr[1]);
  const isMatchingJS =
    ['js', 'jsx'].includes(basenameArr[1]) &&
    ['js', 'jsx'].includes(config.EXTENSION);
  if (!isMatchingTS && !isMatchingTSX && !isMatchingJS) {
    // not a filename we should care about
    // throw new Error(
    //   `unrecognized extension, you shouldnt see this error, pls file a bug with ${filePath}`
    // );
    return null;
  }
  if (config.NAMESPACE == 'none') {
    return `export * from './${basename}'`;
  } else if (config.NAMESPACE == 'all') {
    return `import * as ${basename} from './${basename}'\nexport {${basename}}`;
  } else {
    // (config.NAMESPACE == 'defaultOnly')
    return `export {default as ${basename}} from './${basename}'`;
  }
}
