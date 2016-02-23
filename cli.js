#!/usr/bin/env node
require('colorful').toxic()
const argv = require('minimist')(process.argv.slice(2), {
	'--': true,
	alias: {
		v: 'version',
		h: 'help',
		i: 'init'
	}
})
const age = require('./')
const pkg = require('./package')

if (argv.v) {
	console.log(pkg.name, '~', pkg.version.cyan)
	process.exit()
}

if (argv.h) {
	console.log([
		'',
		'  Usage:',
		'    -i/--init:       Interactively set birthday',
		'',
		'    -v/--version:    Print version',
		'    -h/--help:       Print help',
		''
	].join('\n'))
	process.exit()
}

age(argv)
