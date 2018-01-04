# owlvideo
A Twilio Video Web Client which calls a Twilio Function to get an access token.

Requirements:

- Twilio account. A free Trial account will work.
- NodeJS installed to run the Client locally on your computer.
Or a website that runs PHP programs. PHP is very common with service providers.

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

(to write up)
