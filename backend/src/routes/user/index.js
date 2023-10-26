const fp = require("fastify-plugin");
const schema = require("./schema");
const bcryptUtils = require("../../utils/bcrypt");

async function user(server, options, done) {
	server.route({
		method: "POST",
		path: "/user/login",
		schema: schema.login,
		handler: onLogin,
	});
	async function onLogin(req, reply) {
		// Check username exist
		const connection = await server.mysql.getConnection();

		const [rows, fields] = await connection.query(
			"Select * from user where username=?",
			[req.body.username]
		);

		connection.release();

		if (rows.length === 0) {
			reply.code(404)
			.send({ message: "username don't exist" });
			return
		}

		const compare = await bcryptUtils.comparePassword(req.body.password, rows[0].password)

		if (!compare) {
			reply.code(400)
			.send({ message: "wrong password" });
			return
		}

		reply.code(200).send({ user: rows[0] });
	}

	server.route({
		method: "POST",
		path: "/user/register",
		schema: schema.register,
		handler: onRegister
	})
	async function onRegister(req, reply) {
		// Create username
		const hashPassword = await bcryptUtils.hashPassword(req.body.password)
		try {
			const connection = await server.mysql.getConnection();
			const result = await connection.execute(
				`INSERT INTO user (username, password, email, full_name, role_id) 
				VALUES (?, ?, ?, ?, ?);`, [req.body.username, hashPassword, req.body.email, req.body.full_name, 3]
			)
		} catch (err) {
			reply.code(500).send({ message: "Internal error", error: err });
			return
		}
		reply.code(200).send({ message: "Success" });
	}

	done();
}

module.exports = fp(user);
