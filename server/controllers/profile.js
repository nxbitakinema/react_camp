const renderError = require("../utils/renderError");

exports.createProfile = ( req, res, next ) => {

  try {

    const { firstname , lastname, clerkid } = req.body

    if( true ) {
      return renderError( 400, 'มันมีปัญหานะมาจาก controller profile')
    }

    console.log( firstname , lastname, clerkid )
    
    res.json({ message: "hello create profile" });

  } catch (error) {

    next(error)

  }
};
