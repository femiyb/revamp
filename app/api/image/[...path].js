import { createProxyMiddleware } from 'http-proxy-middleware';

// WordPress uploads base URL
const IMAGE_BASE_URL = 'https://app.femiyb.me/wp-content/uploads';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for proxy middleware
  },
};

// Export the proxy middleware
export default createProxyMiddleware({
  target: IMAGE_BASE_URL, // Target URL for proxying
  changeOrigin: true, // Changes the origin of the host header to the target URL
  pathRewrite: {
    '^/api/image': '', // Removes "/api/image" from the request path
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log('Original Request Path:', req.url); // Logs the incoming request URL
    console.log('Proxied Path:', proxyReq.path); // Logs the rewritten path
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log('Response received with status:', proxyRes.statusCode); // Logs the response status
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err.message); // Logs errors
    res.status(500).send('Proxy error occurred');
  },
});
