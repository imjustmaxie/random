/*

Hostname: firefly*.adobe.io

Script Type: Response
Matching URL: https:\/\/firefly(.*).adobe.io\/v1\/credits\/balance

Body Required: True
Update Interval: 5

 */

let body = $response.body;
body = JSON.parse(body);

body.credits["firefly_free_credit"].quota.available = 0;
body.credits["firefly_free_credit"].quota.total = 999;
body.credits["firefly_free_credit"].quota.used = 999;

body.total.availableUntil = "2099-12-31T23:59:59.000Z";
body.total.quota.available = 0;
body.total.quota.total = 999;
body.total.quota.used = 999;

body = JSON.stringify(body)
$done({body});
