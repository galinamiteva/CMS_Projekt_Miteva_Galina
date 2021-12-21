module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da721e82388caed70b146f32950c68fb'),
  },
});
