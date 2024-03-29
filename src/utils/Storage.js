class Storage {
  constructor() {}

  set = (name, payload) => {
    localStorage.setItem(name, JSON.stringify(payload));
  };

  get = (name) => {
    let payload = localStorage.getItem(name);
    return payload ? JSON.parse(payload) : null;
  };

  clearLocalStorage = () => {
    localStorage.clear();
  };

  storeInSessionStorage = (name, payload) => {
    sessionStorage.setItem(name, JSON.stringify(payload));
  };

  getFromSessionStorage = (name) => {
    let payload = sessionStorage.getItem(name);
    return payload ? JSON.parse(payload) : null;
  };

  clearSessionStorage = () => {
    sessionStorage.clear();
  };
}

const storage = new Storage();

export default storage;
