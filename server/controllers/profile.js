const renderError = require("../utils/renderError");

exports.createProfile = ( req, res, next ) => {

  try {

    if ( true ) {
      return renderError(401, "Token Invalid")
    }

    res.json({ message: "hello create profile" });

  } catch (error) {

    next(error)

  }
};
