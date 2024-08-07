/*

Hostname : gae*.spclient.spotify.com
Matching URL : ^https:\/\/gae(.+)\.com\/device-capabilities\/v\d\/capabilities(.+)
*/

let objet = $response.body;

objet = JSON.parse(objet);
objet.license = "premium";
objet.supports_hifi.fully_supported = true;
objet.supports_hifi.user_eligible = true;
objet.supports_hifi.device_supported = true;
let body = JSON.stringify(objet);
$done({body});
