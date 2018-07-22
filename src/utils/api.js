import FrusterError from "./frusterError";

let apiRoot;

export const setApiRoot = (root) => {
	apiRoot = root;
}

export const get = (path, query) => {
	return doFetch("GET", path, query);
}

export const post = (path, jsonBody) => {
	return doFetch("POST", path, {}, jsonBody);
}

export const put = (path, jsonBody) => {
	return doFetch("PUT", path, {}, jsonBody);
}

export const remove = (path, query) => {
	return doFetch("DELETE", path, query);
}

const doFetch = async (method, path, query, jsonBody) => {
	const reqOpts = {
		method: method,
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		mode: "cors",
		credentials: "include",
		body: JSON.stringify(jsonBody)
	};

  const url = createUrl(path, query);
  const res = await fetch(new Request(url, reqOpts));

	let json;

	try {
    json = await res.json();
	} catch (err) {
		throw FrusterError.create("SERVER_ERROR", 500, "Internal Server Error", "Failed getting response json");
	}

	// Fetch API always enters success even though a errorness
	// HTTP status code was returned. Check this here and throw
	// error to be able to catch error later in promise chain.

	if (!res.ok) {
		throw new FrusterError(json);
	}

	return json;
}

const createUrl = (path, query = {}) => {
  let url = apiRoot + path;

	if (Object.keys(query)) {
		url += "?";

		Object.keys(query).forEach(key => {

			if (query[key] !== undefined) {
				url += (key + "=" + query[key] + "&");
			}

		});

		url = url.slice(0, -1); // remove last &
	}

	return url;
}
