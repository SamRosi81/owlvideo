# owlvideo
A Twilio Video Web Client which calls a Twilio Function to get an access token.

Requirements:

- Twilio account. A free Trial account will work.
- NodeJS installed to run the Client locally on your computer.
Or a website that runs PHP programs. PHP is very common with service providers.

Note, this sample is a variation of the Video Quickstart PHP GitHub project:

    https://github.com/kedartoraskar/video-quickstart-php

## Files

The Client files:
- [twVideo.html](twVideo.html) : Twilio JavaScript (JS) Client to join video rooms.
- [video.css](video.css) : the Client HTML object styles

The server files:
- [httpVideoServer.js](httpVideoServer.js) : a NodeJS HTTP Server that serves the Client files and calls generateVideoToken.js.
This is used to run the Twilio Client locally on a computer.
- [getToken.php](getToken.php) : a program that calls generateVideoToken.js and return a token.
This is used when hosting the Twilio Client remotely on a public PHP website.

Twilio NodeJS Functions
- [generateVideoToken.js](generateVideoToken.js) : generate and return a video room access token.

## Implementation

The server side can run locally on a computer using NodeJS, or run on a website that runs PHP programs.

### Local Server Side Setup using a NodeJS Webserver

Download the project zip file.

    https://github.com/tigerfarm/owlvideo

1. Click Clone or Download. Click Download ZIP.
2. Unzip the file into a work directory.
3. Change into the unzipped directory: owlvideo-master.

Install the NodeJS "request" module:
    
    $ npm install request

Run the NodeJS HTTP server.

    $ node httpVideoServer.js
    +++ Start: httpVideoServer.js
    Static file server running at
      => http://localhost:8000/
    CTRL + C to shutdown
    ...
    
Use a browser to access the Twilio Client:

    http://localhost:8000/twVideo.html

### Remote Server Side Setup using a PHP Webserver

Download the project zip file. Unzip the file into your website's CGI bin directory, or in any directory that will automatically run clientTokenGet.php as PHP program when called from HTTP. Test by displaying the Client in your browser, example URL:

    https://example.com/cgi/twVideo.html

### Add a Twilio Function

Create a Twilio Function to generate client capability tokens.

    https://www.twilio.com/console/runtime/functions
    
1. Click the Create Function icon (circle with plus sign in the middle).
2. Click Blank. Click Create.
   - Properties, Function Name: Generate Video Access Token
   - URL: https://about-time-6360.twil.io /tokenvideo
   - Uncheck Configuration, Access Control to allow Twilio JS Client access.
   - Copy and paste [tokenvideo.js](tokenvideo.js) into the Code box.
3. Click Save.

### <a name="bullet3"></a>Create API Key and secret key string.

    [https://www.twilio.com/console/voice/runtime/api-keys](https://www.twilio.com/console/voice/runtime/api-keys)
    https://www.twilio.com/console/voice/runtime/api-keys/create
    Friendly name: owlvideo
    API key SID: SKe0b13kwe94wir04ofoq5d4bd9f8b2c
    API key Secret: SuwkWen6Q5zNFvAkwlk49wMsXpDKOQ1bo

Add the API key SID and Secret into the Generate Access Token Function.
Note, the  account SID, API key and secret are the authentication keys. They must be from the same account or subaccount (not a combination of each).

This will be used when configuring Twilio Functions environment variables:

    VOICE_API_KEY: SKe0b13kwe94wir04ofoq5d4bd9f8b2c
    VOICE_API_SECRET: SuwkWen6Q5zNFvAkwlk49wMsXpDKOQ1bo

### Twilio Function Configuration

Configure your account's Twilio Functions settings.
    
    https://www.twilio.com/console/runtime/functions/configure
    
Check: Enable ACCOUNT_SID and AUTH_TOKEN.
- This allows your Functions to access your account SID and auth token as environment variables.

Create Function Environment Variables.

    (Key : value)
    CLIENT_ID : Example, owluser (a default Client identity attribute)
    ROOM_ID : Example, owlroom (a default room name attribute)
    
    VOICE_API_KEY : SKe0b13kwe94wir04ofoq5d4bd9f8b2c (SK value created above)
    VOICE_API_SECRET : SuwkWen6Q5zNFvAkwlk49wMsXpDKOQ1bo (secret string value created above)
    
    Click Save, to save the environment variables.

Update your Twilio Function host name into the Twilio Client server side programs.
You can view the host name by going to the following link. The host name, is Your Runtime Domain name:

    https://www.twilio.com/console/runtime/overview

    If you are using the NodeJS webserver, edit: httpVideoServer.js.
    If you are using a remote webserver with PHP, edit: getToken.php.
    Change:
       tokenHost = "about-time-1235.twil.io";
    to use your Twilio Function host name.
    
    If you are running httpVideoServer.js. Restart it.

## Ready to Test

If running locally, use a browser to access the Twilio Client:

    http://localhost:8000/twVideo.html

If on a website, use a browser to access the website Twilio Client URL, example:

    http://example.com/cgi/twVideo.html
    
Click the Refresh button. The Client's room access token is refreshed.

Enter your first name where it says, "Enter client id." Click the Refresh button and the token is refreshed with your name.

Enter a room name where it says, "Enter room name." Click the Refresh button and the token is refreshed with your name and your room name.

Click Preview My Camera. Video starts up.

Click Join Room. You will join your room, using your name. Join Room, uses the refreshed token.

Ask someone else to join.

Cheers...
