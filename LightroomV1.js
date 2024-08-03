let body = $response.body;
body = JSON.parse(body);

let a = atob(body.asnp.payload);
a = JSON.parse(a);

a.responseType = "INITIAL";
a.profileStatus = "PROFILE_AVAILABLE";
a.profileStatusReason = 1001;
a.profileStatusReasonText = "Profile Available due to a temporary entitlement created to hide provisioning delays (HADES)";

a.appProfile.accessibleItems = [
  {
    "source" : {
      "id" : "TEMP_LICENSE_PROD",
      "type" : "TEMPORARY_ENTITLEMENT",
      "status_reason" : "NORMAL",
      "can_access_until" : 0
    }
  },
{
          "fulfillable_items" : {
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
      }
}
]

/*
a.appProfile.accessibleItems["fulfillable_items"] = {
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
*/
a.appProfile.appUsageTrackingControl = { enabledTracking: false };

a.controlProfile.creationTimeStamp = 1722658065167;
a.controlProfile.cacheLifetime = 15638384677;
a.controlProfile.validUptoTimestamp = 1722744449844;
a.controlProfile.cacheRefreshControl = { appRefreshInterval: 87840000, nglLibRefreshInterval: 87840000 };
a.controlProfile.overrideStatusForLocalSignout = "PROFILE_DENIED";

a.frlProfile = "{}";
a.legacyProfile = '{"licenseId":"TEMP_LICENSE_PROD","licenseType":3,"licenseVersion":"1.0","effectiveEndTimestamp":1722744449844,"graceTime":0,"licensedFeatures":[],"enigmaData":{"productId":598,"serialKey":"719594172484074650698776","clearSerialKey":"90970938077827684226","locale":"ALL","associatedLocales":"ALL","platform":0,"isk":5984027,"customerId":0,"deliveryMethod":3,"pc":true,"rb":true}}';
a.additionalLegacyProfiles = '{}';

body.asnp.payload = btoa(JSON.stringify(a))
body = JSON.stringify(body)
$done({body});
