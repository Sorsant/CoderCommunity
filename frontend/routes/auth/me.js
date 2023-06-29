const express = require('express');
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.get('/api/users/me', async (req, res) => {
	const { access } = req.cookies;
	console.log(access)
	try {
		const apiRes = await fetch(`${process.env.API_URL}/auth/users/me/`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `JWT ${access}`,
			},
		});

		const data = await apiRes.json();

		return res.status(apiRes.status).json(data);
	} catch (err) {
		return res.status(500).json({
			error: 'Something went wrong when trying to retrieve user',
		});
	}
});

module.exports = router;
