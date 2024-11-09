#!/usr/bin/env node

export * from './lib/biss';

const cwd = process.cwd();
console.warn(`Checking directory "${cwd}"`);