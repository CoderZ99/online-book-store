const bcrypt = require('bcrypt');
const saltRounds = 10;


async function hashPassword(passwordString){
	const hash = await bcrypt.hash(passwordString, saltRounds)
	return hash
}


async function comparePassword(passwordString, passwordHash){
	const match = await bcrypt.compare(passwordString, passwordHash)
	return match
}

module.exports = {hashPassword, comparePassword}