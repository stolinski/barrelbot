import { COMMENTSTRING, INDEXFILES } from '../types';
import fs from 'fs';
import path from 'path';

/** checks for exact match to comment string in index file */
export function checkIndexFile(pathToIndexFile: string) {
  // validate
  if (!isIndexFile(pathToIndexFile))
    throw new Error(`expected index file, but given ${pathToIndexFile}`);

  // parse
  // console.log('hcecking', pathToIndexFile);
  // TODO: try https://stackoverflow.com/questions/28747719/what-is-the-most-efficient-way-to-read-only-the-first-line-of-a-file-in-node-js
  const strArr = fs
    .readFileSync(pathToIndexFile)
    .toString()
    .split('\n');
  if (strArr.length > 0 && strArr[0] === COMMENTSTRING) {
    return true;
  } else {
    return false;
  }
}

/** is this file an index file or not? */
export function isIndexFile(filepath: string) {
  return INDEXFILES.includes(path.basename(filepath));
}
