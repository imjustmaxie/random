/*

Hostname: https://api.github.com/graphql
Matching URL: https://api.github.com/graphql

*/

let objet = $response.body;
objet = JSON.parse(objet)
if typeof (objet.data.viewer.isEmployee) == "undefined" {
  }
else {
  objet.data.viewer.isProPlan = true;
  objet.data.viewer.hasAppleIapSubscription = true;
  objet.data.viewer.isEmployee = true;
}
let b = JSON.stringify(objet);
$done({b});

