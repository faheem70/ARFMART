const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/v1/products', // replace with your endpoint
        { target: 'http://localhost:4000',
        changeOrigin: true, } // replace with your target
    ));
    app.use(createProxyMiddleware('/api/v1/product', // replace with your endpoint
      {
        target: 'https://e-commerce-22nf.onrender.com',
        changeOrigin: true, } // replace with your target
    ));
    
    app.use(
        '/api/v1/login',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/register',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/me',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/logout',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/me/update',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/password/update',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/password/forgot',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/stripeapikey',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/payment/process',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );

      app.use(
        '/api/v1/order/new',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/orders/me',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/order',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/review',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/products',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/product',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/product/new',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/orders',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/order',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/users',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/user',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );
      app.use(
        '/api/v1/admin/reviews',
        createProxyMiddleware({
          target: 'https://e-commerce-22nf.onrender.com',
          changeOrigin: true,
        })
      );

}