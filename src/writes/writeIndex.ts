import fs from 'fs';
import util from 'util';
const fs_writeFile = util.promisify(fs.writeFile);
import path from 'path';
import { checkDir } from '../checks/checkDir';
import { FILETYPE, COMMENTSTRING } from '../types';

/** return promise of a writing job */
export function writeIndex(pathToDir: string, extension: FILETYPE) {
  const { indexFilePath, allFilesExceptIndex } = checkDir(pathToDir, extension);
  let finalString: string[] = [
    COMMENTSTRING,
    '',
    '// for more info: https://github.com/sw-yx/barrelbot'
  ];
  allFilesExceptIndex.forEach(filePath => {
    finalString.push(createExportLine(filePath, extension));
  });

  // console.log({ finalString });
  // write
  return fs_writeFile(
    // path.join(pathToDir, indexFilePath)
    indexFilePath,
    finalString.join('\n')
    // options
  );
  // return 'hi';
}

function createExportLine(filePath: string, extension: FILETYPE) {
  const basename = path.basename(filePath, '.' + extension);
  return `export * from './${basename}'`;
}
