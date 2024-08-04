/*

Hostname: firefly-ae.adobe.io

Script Type: Response
Matching URL: https://firefly-ae.adobe.io/v1/credits/balance

Body Required: True
Update Interval: 5

 */

let body = $response.body;
body = JSON.parse(body);

body.credits["firefly_free_credit"].quota.available = 999;
body.credits["firefly_free_credit"].quota.total = 999;
body.credits["firefly_free_credit"].quota.used = 0;

body.total.quota.available = 999;
body.total.quota.total = 999;
body.total.quota.used = 0;

body = JSON.stringify(body)
$done({body});
