class Storage {
  constructor() {}

  set = (name, payload) => {
    localStorage.setItem(name, JSON.stringify(payload));
  };

  get = (name) => {
    let payload = localStorage.getItem(name);
    return payload ? JSON.parse(payload) : null;
  };
}

const storage = new Storage();

export default storage;
