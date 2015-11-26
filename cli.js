#!/usr/bin/env node
require('colorful').toxic()
const argv = require('minimist')(process.argv.slice(2), { '--': true })
const age = require('./')
const pkg = require('./package')

if (argv.v || argv.version) {
  console.log(pkg.name, '~', pkg.version.cyan)
  return
}

age(argv)
