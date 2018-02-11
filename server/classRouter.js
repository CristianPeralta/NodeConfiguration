class Router {
  constructor() {
    this.gets = {};
    this.posts = {};
    this.puts = {};
    this.route = {
        'GET':this.gets,
        'POST':this.posts,
        'PUT':this.puts
    }
    return this;
  }
  get (path,cb) {
    this.gets[path] = cb;
  }
  post (path,cb) {
    this.posts[path] = cb;
  }
  put (path,cb) {
    this.puts[path] = cb;
  }
}

export default Router;
