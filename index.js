const fs = require('fs');
const path = require('path');
const {spawn} = require('cross-spawn');

const CWD = process.cwd();

module.exports = function() {
	const ARGS_ARRAY = process.argv.slice(2);

	if (fs.existsSync(path.join(CWD, 'yarn.lock'))) {
		console.log('\x1b[36m%s\x1b[0m', 'FYI: This project uses `yarn`.');

		spawn.sync('yarn', ARGS_ARRAY, {
			cwd: CWD,
			stdio: 'inherit'
		});
	} else {
		spawn.sync('npm', ARGS_ARRAY, {
			cwd: CWD,
			stdio: 'inherit'
		});
	}
};
