const boom = require('@hapi/boom');

function scopesValidationHandler(allowScopes) {
  return function (req, res, next) {
    if (!req.user || !req.user.scopes) {
      next(boom.unauthorized('Missing scopes'));
    }

    const permisions = allowScopes.map((scope) => {
      return req.user.scopes.includes(scope);
    });
    const hasAccess = !permisions.includes(false);

    if (hasAccess) {
      next();
    } else {
      next(boom.unauthorized('Insufficient scopes'));
    }
  };
}

module.exports = scopesValidationHandler;
