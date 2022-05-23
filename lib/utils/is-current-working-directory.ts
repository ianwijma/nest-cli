import { resolve } from 'path';
import { cwd } from 'process';

export function isCurrentWorkingDirectory(directory: string): boolean {
  return resolve(directory) === cwd();
}
