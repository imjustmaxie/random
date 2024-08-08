/*

Hostname: api.github.com
Matching URL: https://api.github.com/graphql

*/

let obj = JSON.parse($response.body);
if (typeof(obj.data.viewerHasTradeRestrictions)!== "undefined") {
  obj.data.viewer.isProPlan = true;
  obj.data.viewer.isEmployee = true;
  obj.data.viewer.hasAppleIapSubscription = true;

  $done({JSON.stringify(obj)});
} else {
  $done({});
}

