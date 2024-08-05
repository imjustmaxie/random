/*

Hostname: premium*.truecaller.com

Script Type: Response
Matching URL: ^https://premium-(.+)\.truecaller\.com/v\d/(subscriptions|monetization\/component)?

Body Required: True
Update Interval: 5

 */

function findURL(regexURL) {
  if (regexURL.test($request.url)) {
    return $request.url;
  }
};

const features = [
                { "id": "premium_feature", "isFree": false, "rank": -2147483648, "status": "Included" },
                { "id": "no_ads", "isFree": false, "rank": 1,"status": "Included" },
                { "id": "extended_spam_blocking", "isFree": false, "rank": 2, "status": "Included" },
                { "id": "verified_badge", "isFree": false, "rank": 5, "status": "Included" },
                { "id": "identifai", "isFree": false, "rank": 9, "status": "Included" },
                { "id": "siri_search", "isFree": false, "rank": 10, "status": "Included" },
                { "id": "who_viewed_my_profile", "isFree": false, "rank": 11, "status": "Included" },
                { "id": "incognito_mode", "isFree": false, "rank": 14, "status": "Included" },
                { "id": "premium_badge", "isFree": false, "rank": 15, "status": "Included" },
                { "id": "premium_app_icon", "isFree": false, "rank": 16, "status": "Included" },
                { "id": "live_chat_support", "isFree": false, "rank": 18, "status": "Included" },
                { "id": "premium_support", "isFree": false, "rank": 19, "status": "Included" },
                { "id": "gold_caller_id", "isFree": false, "rank": 21, "status": "Included" }
            ];

var magik;
switch ($request.url) {
  case findURL(/subscriptions\/status/):
    magik = JSON.parse($response.body);
    magik.expire = "2100-01-01T00:00:00Z";
    magik.isExpired = false;
    magik.isGracePeriodExpired = false;
    magik.tier = { id : "gold" , feature : features };
    break;
  case findURL(/monetization\/component/):
    magik = JSON.parse($response.body);
    magik.data["is_premium"] = true;
    break;
}

let body = JSON.stringify(magik);
$done({body});
