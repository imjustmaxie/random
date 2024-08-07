/*

Hostname: https://api.github.com/graphql
Matching URL: https://api.github.com/graphql

*/

let obj = JSON.parse($response.body);
if (obj.data && obj.data.viewer && obj.data.viewerHasTradeRestrictions) {
  obj.data.viewer.isProPlan = true;
  obj.data.viewer.isEmployee = true;
  obj.data.viewer.hasAppleIapSubscription = true;

  $done({
    body: JSON.stringify(obj)
  });
} else {
  $done({});
}

