// TODO convert to env

/**
 * Get config for app
 * @returns config
 */
function getConfig() {
	const config = {
		PORT: 3000,

		connectionString: 'mysql://root:@localhost:3306/bookstore',

		// Instance setting
		fastifyInit: {
			logger: {
        level: "info",
        serializers: {
          req: (request) => ({
            method: request.raw.method,
            url: request.raw.url,
            hostname: request.hostname
          }),
          res: (response) => ({
            statusCode: response.statusCode
          })
        }
      }
		}
	}

	return config
}


module.exports = getConfig