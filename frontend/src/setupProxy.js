const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('https://arfmart.onrender.com/api/v1/products', // replace with your endpoint
      {
        target: 'https://arfmart.onrender.com',
        changeOrigin: true, } // replace with your target
    ));
  app.use(createProxyMiddleware('https://arfmart.onrender.com/api/v1/product', // replace with your endpoint
      {
        target: 'https://arfmart.onrender.com',
        changeOrigin: true, } // replace with your target
    ));
    
    app.use(
      'https://arfmart.onrender.com/api/v1/login',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/register',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/me',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/logout',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/me/update',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/password/update',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/password/forgot',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/stripeapikey',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/payment/process',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );

      app.use(
        'https://arfmart.onrender.com/api/v1/order/new',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/orders/me',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/order',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/review',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/products',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/product',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/product/new',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/orders',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/order',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/users',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/user',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        'https://arfmart.onrender.com/api/v1/admin/reviews',
        createProxyMiddleware({
          target: 'https://arfmart.onrender.com',
          changeOrigin: true,
        })
      );

}