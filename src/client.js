export class Fetch {
  apiEndpoint;

  HTTP_CRUD_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };

  constructor() {
    this.apiEndpoint = process.env.VUE_APP_API_ENDPOINT;
  }

  async call(uri, method, data) {
    const init = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: undefined, // TODO add logic
      },
    };
    if (data) {
      init.body = JSON.stringify(data);
    }
    try {
      const response = await fetch(this.apiEndpoint + uri, init);
      const isJson = response.headers
        .get('content-type')
        ?.includes('application/json');
      const data = isJson ? await response.json() : null;
      if (!response.ok) {
        await Promise.reject(data);
      }
      return Promise.resolve(data);
    } catch (e) {
      console.error('There was an error!', e);
      throw new Error(e.message);
    }
  }

  get(uri) {
    return this.call(uri, this.HTTP_CRUD_METHODS.GET, null);
  }

  post(uri, data) {
    return this.call(uri, this.HTTP_CRUD_METHODS.POST, data);
  }

  put(uri, data) {
    return this.call(uri, this.HTTP_CRUD_METHODS.PUT, data);
  }

  delete(uri) {
    return this.call(uri, this.HTTP_CRUD_METHODS.DELETE, null);
  }
}
