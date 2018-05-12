#!/usr/bin/env node

var assert = require('assert');
var minimist = require('minimist');
var shelljs = require('shelljs');

var liferay_intellij = require('..');

assert(process.argv.length > 2, 'No portal source folder specified');

var argv = minimist(process.argv.slice(2));

var portalSourceFolder = argv._[0];

assert(shelljs.test('-d', portalSourceFolder), portalSourceFolder + ' is not a valid folder');

var otherSourceFolders = [];

if (process.argv.length > 3) {
	otherSourceFolders = argv._.slice(1, argv._.length);

	for (var i = 0; i < otherSourceFolders.length; i++) {
		assert(shelljs.test('-d', otherSourceFolders[i]), otherSourceFolders[i] + ' is not a valid folder');
	}
}

liferay_intellij.createProject(portalSourceFolder, otherSourceFolders, argv);
