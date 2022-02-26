module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '118d89392309a77968d4f750bbe55d9f'),
  },
});
