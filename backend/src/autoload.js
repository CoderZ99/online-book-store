const path = require('path')
const fp = require('fastify-plugin')
const autoLoad = require('@fastify/autoload')

async function autoload(server, config) {
	server
		.register(autoLoad, {
			dir: path.join(__dirname, 'routes'),
			options: config,
			dirNameRoutePrefix: false
		})
	server.register(require('@fastify/mysql'), {
		promise: true,
		connectionString: config.connectionString
	})
}

module.exports = fp(autoload)