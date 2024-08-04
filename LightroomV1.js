/*

Hostname: lcs-mobile-cops.adobe.io

Script Type: Response
Matching URL: https://lcs-mobile.cops.adobe.io/mobiles/access_profile/v3

Body Required: True
Update Interval: 5

 */

let body = $response.body;
body = JSON.parse(body);

let a = atob(body.asnp.payload);
a = JSON.parse(a);

a.responseType = "INITIAL";
a.profileStatus = "PROFILE_AVAILABLE";
a.profileStatusReason = 1000;
a.profileStatusReasonText = "Profile Available due to an acquired plan provisioned and ACTIVE";

a.appProfile.accessibleItems[0].source["type"] = "LICENSE";
a.appProfile.accessibleItems[0].source["status_reason"] = "NORMAL";
a.appProfile.accessibleItems[0].source["can_access_until"] = 4102395009000; // 12/31/2099 06:10:09 PM

a.appProfile.accessibleItems[0]["fulfillable_items"] = {
          "cc_storage": {
            "enabled": true,
            "feature_sets": {
              "CS_LVL_2": {
                "id": "CS_LVL_2",
                "label": "CS LVL 2",
                "enabled": true
              },
              "VRT_30": {
                "id": "VRT_30",
                "label": "VRT 30",
                "enabled": true
              }
            },
            "charging_model": {
              "cap": 100,
              "unit": "GB",
              "model": "RECURRING",
              "overage": "NA"
            }
          },
          "lightroom_mobile_app": {
            "enabled": true,
            "charging_model": {
              "model": "RECURRING",
              "overage": "NA",
              "rollover": 0
            }
          },
          "photoshop_express": {
            "enabled": true,
            "charging_model": {
              "model": "RECURRING",
              "overage": "NA",
              "rollover": 0
            }
          },
          "core_services_cc": {
            "enabled": true,
            "feature_sets": {
              "CS_LVL_2": {
                "id": "CS_LVL_2",
                "label": "CS LVL 2",
                "enabled": true
              }
            },
            "charging_model": {
              "model": "RECURRING",
              "overage": "NA",
              "rollover": 0
            }
          }
      };

a.controlProfile.cacheLifetime = 39970872755;
a.controlProfile.validUptoTimestamp = 4102395009000;
a.controlProfile.cacheRefreshControl = { appRefreshInterval: 87840000, nglLibRefreshInterval: 87840000 };
a.controlProfile.overrideStatusForLocalSignout = "PROFILE_DENIED";
a.controlProfile.appUsageTrackingControl.enabledTracking = false;

a.frlProfile = "{}";
a.legacyProfile = '{"licenseId":"TEMP_LICENSE_PROD","licenseType":3,"licenseVersion":"1.0","effectiveEndTimestamp":4102395009000,"graceTime":0,"licensedFeatures":[],"enigmaData":{"productId":598,"serialKey":"994304170022856772300296","clearSerialKey":"12044938704595791057","locale":"ALL","associatedLocales":"ALL","platform":0,"isk":5984027,"customerId":0,"deliveryMethod":3,"pc":true,"rb":false}}';
a.additionalLegacyProfiles = '{}';

body.asnp.payload = btoa(JSON.stringify(a))
body = JSON.stringify(body)
$done({body});
