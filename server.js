const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.REACT_APP_PORT;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/pizzas/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});