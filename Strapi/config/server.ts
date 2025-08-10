export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
  keys: env.array('APP_KEYS', ['shrouq_2025_backend_keyA', 'shrouq_2025_backend_keyB']),
  },
});
