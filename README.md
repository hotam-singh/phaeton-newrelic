# phaeton-newrelic

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
<a href="https://david-dm.org/PhaetonHQ/phaeton-newrelic"><img src="https://david-dm.org/PhaetonHQ/phaeton-newrelic.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/PhaetonHQ/phaeton-newrelic/?type=dev"><img src="https://david-dm.org/PhaetonHQ/phaeton-newrelic/dev-status.svg" alt="devDependency Status"></a>

A [newrelic](http://newrelic.com) custom instrumentation for
[Phaeton Core](http://github.com/PhaetonHQ/phaeton)

## Installation

```
$ npm install --save newrelic
$ npm install --save https://github.com/PhaetonHQ/phaeton-newrelic.git
```

## Usage

You have to create your own copy of newrelic configuration. NewRelicPhaeton just
instrument using available newrelic object.

```
const newrelic = require('newrelic');
const newrelicPhaeton = require('phaeton-newrelic')(newrelic, {
	exitOnFailure: true,
	rootPath: process.cwd(),
});

newrelicPhaeton.instrumentWeb();
newrelicPhaeton.instrumentDatabase();
newrelicPhaeton.instrumentBackgroundJobs();
```

## Options

Following options can be passed to create the phaeton instrumentation object.

| Option        | Type    | Required | Description                                                                   |
| ------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| exitOnFailure | Boolean | Yes      | Exit the main process if any error occurred during instrument initialization. |
| rootPath      | String  | Yes      | Absolute path of the phaeton core directory                                      |

## API

| Method                    | Description                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| instrumentWeb             | Instrument web requests to show the request path exactly defined in swagger by Phaeton Core. |
| instrumentDatabase        | Instrument some functions of `pg-promise` to get good insight of database transactions.   |
| instrumentBackgroundJobs  | Instrument every job in the `jobQueue` in Phaeton Core                                       |
| instrumentCallbackMethods | Instrument methods of modules which have defined callback.                                |

## Instrumenting a module

If you have a module to instrument, with following details:

1. A module named `node`
1. It is `require` in the app with exactly the path `./modules/node.js`
1. And you want to instrument two methods `internal.getForgingStatus` and
	`shared.getConstants` You can instrument this:

```
newrelicPhaeton.instrumentCallbackMethods(
	'./modules/node.js',
	'modules.node',
	['internal.getForgingStatus', 'shared.getConstants']
)
```

## Contributors

https://github.com/PhaetonHQ/phaeton-newrelic/graphs/contributors

## License

Copyright © 2017 Phaeton Foundation

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the [GNU General Public License][license]
along with this program. If not, see <http://www.gnu.org/licenses/>.
# phaeton-newrelic
