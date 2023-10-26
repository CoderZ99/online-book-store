// Require the framework and instantiate it
const getConfig = require("./src/setting/config");
const autoLoad = require("./src/autoload")

const main = async () => {
	// Handle unhandledRejection and exit
	process.on("unhandledRejection", (err) => {
		console.error(err);
		process.exit(1);
	});

	// Get config
	const config = await getConfig();

	// Create a Fastify instance
	const server = require('fastify')(config.fastifyInit)

	server.register(autoLoad, config)

	// Run the server!
	server.listen({ port: config.PORT }, (err) => {
		if (err) {
			server.log.error(err);
			process.exit(1);
		}
	});
};

main();
