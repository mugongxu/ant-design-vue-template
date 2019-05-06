const routerViewChange = {
  path: /\/\w+?\//,
  action: async({ toPath, next }) => {
    next();
  }
};

export default routerViewChange;
