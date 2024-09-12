export default class BaseService {
  protected baseURL;

  constructor(baseURL?: string) {
    this.baseURL = import.meta.env.VITE_BACKEND_URL + (baseURL || "");
  }

  delete({ url }: { url?: string }) {
    return fetch(this.baseURL + (url || ""), { method: "DELETE" });
  }

  get({ url }: { url?: string }) {
    return fetch(this.baseURL + (url || ""), { method: "GET" });
  }

  post({ payload, url }: { payload: object; url?: string }) {
    return fetch(this.baseURL + (url || ""), {
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
  }
}
