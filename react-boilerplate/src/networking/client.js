import { get, post, remove, setApiRoot } from "../utils/api";

class APIClient {
	/**
	 * Creates APIClient.
	 * @param {String=} apiRoot
	 */
	constructor(apiRoot = process.env.REACT_APP_BASE_URL || "/api") {
		setApiRoot(apiRoot);
  }
  
  getCustomers(name) {
		return get("/customers");
  }

  createCustomer(name) {
		return post(`/customers`, {
      name: name,
      isActive: true
    });
  }
  
  clearCustomer(id) {
		return remove(`/customers/${id}`);
	}

}

export default new APIClient();
