/*

Hostname: api.github.com
Matching URL: https://api.github.com/graphql

*/

let hdr = JSON.parse($response.body);
if (hdr["operationName"] == "Authorizations")
{
  let objet = JSON.parse($response.body);
  // if (typeof(objet.data.viewerHasTradeRestrictions)!== "undefined") 

  objet.data.viewer.isProPlan = true;
  objet.data.viewer.isEmployee = true;
  objet.data.viewer.hasAppleIapSubscription = true;

  $done({JSON.stringify(objet)});
} else {
  $done({});
}

