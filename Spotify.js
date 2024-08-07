/*

Hostname : gae*.spclient.spotify.com
Matching URL : ^https:\/\/gae(.+)\.com\/device-capabilities\/v\d\/capabilities(.+)
*/

let objet = $response.body;

objet = JSON.parse(objet);
objet.license = "premium";
objet["supports_hifi"] = {
  "fully_supported" : true,
  "user_eligible" : true,
  "device_supported" : true
}
let body = JSON.stringify(objet);
$done({body});
