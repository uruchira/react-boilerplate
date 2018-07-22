import { get, setApiRoot } from "../utils/api";

class APIClient {
	/**
	 * Creates APIClient.
	 * @param {String=} apiRoot
	 */
	constructor(apiRoot = process.env.REACT_APP_BASE_URL || "/api") {
		setApiRoot(apiRoot);
  }
  
  getItems(module) {
		return get(`/${module}`);
  }

}

export default new APIClient();
