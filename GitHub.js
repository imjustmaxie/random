/*

Hostname: api.github.com
Matching URL: https://api.github.com/graphql

*/

let hdr = JSON.parse($response.body);
if (hdr["operationName"] == "Authorizations")
{
  let objet = JSON.parse($response.body);
  // if (typeof(objet.data.viewerHasTradeRestrictions)!== "undefined") 
  const vw = objet.data.viewer ;
  if (typeof(vw.isProPlan)!=="undefined")
    {
    vw.isProPlan = true;
    }
  if (typeof(vw.isEmployee)!=="undefined")
    {
      vw.isEmployee = true;
    }
  if (typeof(vw.hasAppleIapSubscription)!=="undefined")
    {
      vw.hasAppleIapSubscription = true;
    }
  //objet.data.viewer.isProPlan = true;
  //objet.data.viewer.isEmployee = true;
  //objet.data.viewer.hasAppleIapSubscription = true;
  let bd = JSON.stringify(objet);
  
  $done({bd});
} else {
  $done({});
}

