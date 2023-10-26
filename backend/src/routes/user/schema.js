const S = require("fluent-json-schema");

const login = {
	body: S.object()
	.prop("username", S.string().required())
	.prop("password", S.string().required())

};


const register = {
	body: S.object()
	.prop("username", S.string().required())
	.prop("email", S.string().format(S.FORMATS.EMAIL).required())
	.prop("password", S.string().minLength(8).required())
	.prop("full_name", S.string().minLength(8).required())
}

module.exports = {login, register}