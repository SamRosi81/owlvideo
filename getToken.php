<?php
// Token is generated by a Twilio Function.
$tokenClientId = htmlspecialchars($_GET["clientid"]);
if ($tokenClientId === "") {
    $tokenClientId = "owluser";
}
$tokenHost = htmlspecialchars($_GET["tokenhost"]);
if ($tokenHost === "") {
    $tokenHost = "about-time-1235.twil.io";
}
// Token is generated by a Twilio Function.
$tokenRoom = htmlspecialchars($_GET["roomid"]);
if ($tokenRoom === "") {
    $tokenRoom = "owlroom";
}
$theRequest = "https://" . $tokenHost . "/tokenvideo?clientid=" . $tokenClientId . "&roomid=" . $tokenRoom;
$token = file_get_contents($theRequest);
echo $token;
?>
