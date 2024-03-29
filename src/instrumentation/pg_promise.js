/*
 * PhaetonHQ/phaeton-newrelic
 * Copyright © 2017 Phaeton Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Phaeton Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */

const debug = require('debug')('newrelic:phaeton:pg_promise');

module.exports = function initialize(shim, pgPromise, moduleName) {
	debug('init %s', moduleName);

	shim.setDatastore(shim.POSTGRES);

	const proto = pgPromise.prototype;
	shim.recordOperation(proto, [
		'ParameterizedQuery',
		'PreparedStatement',
		'QueryFile',
	]);
};
