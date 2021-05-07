export const isAuth = (auth) => {
	return {
		type: "IS_AUTH",
		payload: auth,
	};
};
