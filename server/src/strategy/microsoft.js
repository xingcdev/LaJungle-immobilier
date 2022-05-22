
const passport = require("passport");
const config = require("../config.json");
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const { createUser, getUser, updateUser } = require('../models/userDAO');



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await getUser(id);
        return user ? done(null, user) : done(null, null);
    } catch (error) {
        console.log(error);
        return done(error, null);
    }
});

passport.use(new MicrosoftStrategy({
    // Standard OAuth2 options
    clientID: config.microsoft.CLIENT_ID,
    clientSecret: config.microsoft.CLIENT_SECRET,
    callbackURL: config.microsoft.CALLBACK_URL,
    scope: ['user.read'],

    // Microsoft specific options

    // [Optional] The tenant for the application. Defaults to 'common'. 
    // Used to construct the authorizationURL and tokenURL
    tenant: 'common',

    // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
    authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

    // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
    tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    },
    function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ userId: profile.id }, function (err, user) {
        return done(err, user);
    });
    }
));