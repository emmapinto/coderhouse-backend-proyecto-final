import 'dotenv/config';

const checkAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/login');
  }
  if (req.user.email === process.env.ADMIN_USER) req.isAdmin = true;
  next();
};

export default checkAuth;
