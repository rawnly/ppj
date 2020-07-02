const { prettyPrint, noArgsError } = require('./utils');
 
(() => {
	var json = "";
	
	if ( process.stdin.isTTY ) {
		const args = process.argv.slice(2);

		if (!args.length) {
			noArgsError()
			return
		}

		prettyPrint(args[0]);
		return
	}


	const stdin = process.openStdin();

	stdin.on('data', (chunk) =>
		json += chunk
	);

	stdin.on('end', () => 
		prettyPrint(json)
	);
})()
