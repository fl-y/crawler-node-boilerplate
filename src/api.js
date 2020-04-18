const axios = require("axios").default;
const CONSTS = require("./consts").default;

//  setting axios
axios.defaults.baseURL = CONSTS.API;

export const get = route =>
	axios
		.get(route)
		.then(res => {
			return {status: res.status, data: res.data};
		})
		.catch(ex => {
			console.warn(ex);
			throw new Error(ex);
		});
