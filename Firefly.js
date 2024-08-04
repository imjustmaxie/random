/*

Hostname: firefly*.adobe.io

Script Type: Response
Matching URL: https:\/\/firefly(.*).adobe.io\/v1\/credits\/balance

Body Required: True
Update Interval: 5

 */

let body = $response.body;
body = JSON.parse(body);

body.credits["firefly_free_credit"].quota.available = 99999;
body.credits["firefly_free_credit"].quota.total = 99999;
body.credits["firefly_free_credit"].quota.used = 0;

body.total.availableUntil = "2100-01-01T00:00:01.000Z";
body.total.quota.available = 99999;
body.total.quota.total = 99999;
body.total.quota.used = 0;

body = JSON.stringify(body)
$done({body});
