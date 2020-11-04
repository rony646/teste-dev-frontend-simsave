const proxy = [
    {
      context: '/api',
      target: 'https://teste-simsave.getsandbox.com:443/home',
      pathRewrite: {'^/api' : ''}
    }
  ];

  
  module.exports = proxy;