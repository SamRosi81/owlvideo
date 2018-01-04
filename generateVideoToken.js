exports.handler = function(context, event, callback) {
    // Documentation: https://www.twilio.com/docs/api/rest/access-tokens
    //
    // The Client using tokens from this Function, receive calls made to this client ID.
    let clientid = event.clientid || null;
    if (clientid === null) {
        clientid = context.CLIENT_ID || null;
        if (clientid === null) {
            console.log("-- In Functions Configure, add: CLIENT_ID.");
            return;
        }
    }
    // Client ID must be handled in the Twilio Function: Make a call.
    console.log("+ Client ID: " + clientid);
    //
    let roomid = event.roomid || null;
    if (roomid === null) {
        roomid = context.ROOM_ID || null;
        if (roomid === null) {
            console.log("-- In Functions Configure, add: ROOM_ID.");
            return;
        }
    }
    // Client ID must be handled in the Twilio Function: Make a call.
    console.log("+ Room ID: " + roomid);
    //
    const AccessToken = Twilio.jwt.AccessToken;
    const VideoGrant = AccessToken.VideoGrant;
    const videoGrant = new VideoGrant({
        room: roomid,
        });
    // Generate the access token with video grants.
    const token = new AccessToken(context.ACCOUNT_SID, context.VOICE_API_KEY, context.VOICE_API_SECRET);
    token.addGrant(videoGrant);
    token.identity = clientid;
    //
    // Output the token.
    console.log(token.toJwt());
    let response = token.toJwt();
    callback(null, response);
};
