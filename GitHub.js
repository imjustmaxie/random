/*

Hostname: https://api.github.com/graphql
Matching URL: https://api.github.com/graphql

*/

let hdr = $request.body
hdr = JSON.parse(hdr)
if hdr.operationName != "Authorizations" {
  $done({$response.body});
}
else {
  let objet = $response.body;
  objet = JSON.parse(objet);
  objet.data.isProPlan = true;
  objet.data.hasAppleIapSubscription = true;
  objet.data.isEmployee = true;
  let b = JSON.stringify(objet);
  $done({b});
}