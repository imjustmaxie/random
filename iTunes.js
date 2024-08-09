
/*

Hostname = buy.itunes.apple.com
Matching URL = https:\/\/buy\.itunes\.apple\.com\/verifyReceipt(.+)

*/

// THIS IS A REWORKED SCRIPT BASED ON PAISSEON'S SATELLA RECEIPT GENERATION AND MODIFICATION
// BY YOURS TRULY


const UA = $request.headers["User-Agent"] || $request.headers["user-agent"] ;

let receiptIDGen = Math.floor(Math.random() * 0x07151129)

let params = {
    now : "1694273635000",
    nowDate : "2024-02-11 16:06:27 Etc/GMT",
    nowDatePST: "2024-02-11 06:06:27 America/Los_Angeles",
    receiptID : receiptIDGen,
    exp : "4092599349000",
    expDate : "2099-09-09 13:37:37 Etc/GMT",
    expDatePST : "2099-09-09 06:06:06 America/Los_Angeles",
    sampleBundleID : "com.floatcamellia.hfrslowmotion",
    sampleProductID : "com.floatcamellia.hfrslowmotion.yearly",
    sampleTransactionID : "440001731320417",
    sampleTransactionID2 : "490001314520000",
    sampleItemID : 1247478067,
    sampleDownloadID : 503226333846907953,
}

const appDetails = {
    'TimeCut': { bundleId: 'com.floatcamellia.timecut', productId: 'com.wifimap.pro.version.yearly.premium' },
    'WaterMinder': { bundleId: 'com.waterminder.waterminder', productId: 'waterminder.premiumOnetime' },
    'Overdrop': { bundleId: 'com.weather.overdrop', productId: 'com.weather.overdrop.forever' },
    'CMMM': { bundleId: 'com.macpaw.iosgemini', productId: 'com.macpaw.cleanmyphone.year.trial' },
    'MotionNinja': { bundleId: 'com.floatcamellia.motionninja', productId: 'com.floatcamellia.motionninja.yearpro' },
    'Surfshark': { bundleId: 'com.surfshark.vpnclient.ios', productId: '70101326_6cde_4328_ac99_61683a331ada' },
    'XTerminal': { bundleId: 'com.septudio.SSHClientLite', productId: 'xterminal.pro2' },
    'Gaming': { bundleId: 'com.mrrobotmouse.gamevpn', productId: 'year' },
    'MediaConvert': { bundleId: 'com.verycoolapp.mediaconvert', productId: 'autorenewable.proversion.mediaconvert.year' },
    'Number': { bundleId: 'xyz.amplify.numbers', productId: 'xyz.amplify.numbers_pro_trial_3_1M_F' },
    'SuperVPN': { bundleId: 'com.secgin.supervpn', productId: 'com.secgin.supervpn.monthly' },
    'Safe': { bundleId: 'com.appslab.safelock', productId: 'inapp_pro' },
    'Cleaner': { bundleId: 'bp.rmaster.free', productId: 'iremover.sub.lifetime.30' },
    'VideoCompress': { bundleId: 'com.photoclean.videocompress', productId: 'VideoCompress_ProVersion' },
    'MoodTracker': { bundleId: 'co.vulcanlabs.moodtracker', productId: 'co.vulcanlabs.moodtracker.yearly' },
    'Construction': { bundleId: 'com.calculated.laurene', productId: 'cmp_one_year_1' },
    'DMV': { bundleId: 'com.dmvpermit.testapp', productId: '32111' },
    'OutPlayer': { bundleId: 'com.stps.outplayer.advanced', productId: 'com.stps.outplayer' },
    'One%20Sec': { bundleId: 'wtf.riedel.one-sec', productId: 'wtf.riedel.one_sec.pro.annual.individual' },
    'Cocoa' : { bundleId : 'com.tranzmate.tranzmate1' , productId : 'com.moovit.iap.moovit_plus_12M_PT3' },
}

let receiptInfo = {
    "quantity" : "1",
    "purchase_date_ms" : params.now,
    "expires_date" : params.expDate,
    "expires_date_pst" : params.expDatePST,
    "is_in_intro_offer_period" : "false",
    "transaction_id" : params.sampleTransactionID2,
    "is_trial_period" : "false",
    "original_transaction_id" : params.sampleTransactionID2,
    "purchase_date" : params.nowDate,
    "product_id" : params.sampleProductID, // productID
    "original_purchase_date_pst" : params.nowDatePST,
    "in_app_ownership_type" : "PURCHASED",
    "original_purchase_date_ms" : params.now,
    "web_order_line_item_id": "490000123456789",
    "expires_date_ms" : params.exp,
    "purchase_date_pst" : params.nowDatePST,
    "original_purchase_date" : params.nowDate,
    
}

let receiptRenewal = {
    "product_id" : params.sampleProductID, // productID
    "original_transaction_id" : "490001314520000",
    "auto_renew_product_id" : params.sampleProductID, // productID
    "auto_renew_status" : "1"
}

let receipt = {
    "receipt_type" : "Production",
    "app_item_id" : params.sampleItemID,
    "receipt_creation_date" : params.nowDate,
    "bundle_id" : params.sampleBundleID, // bundleID
    "original_purchase_date" : params.nowDate,
    "in_app" : [receiptInfo],
    "adam_id" : params.sampleItemID,
    "receipt_creation_date_pst" : params.nowDatePST,
    "request_date" : params.nowDate,
    "request_date_pst" : params.nowDatePST,
    "version_external_identifier" : 863314980,
    "request_date_ms" : params.now,
    "original_purchase_date_pst" : params.nowDatePST,
    "application_version" : "275",
    "original_purchase_date_ms" : params.now,
    "receipt_creation_date_ms" : params.now,
    "original_application_version" : "275",
    "download_id" : params.sampleDownloadID
}

for (const appName in appDetails) {
    if (new RegExp(`^${appName}`, 'i').test(userAgent)) {
        receipt.bundle_id = appDetails[appName].bundleId;
        receiptInfo.product_id = appDetails[appName].productId;
        receiptRenewal.product_id = appDetails[appName].productId;
        receiptRenewal.auto_renew_product_id = appDetails[appName].productId;
        break;
    }
}

let receiptResponse = {
    "status" : 0,
    "environment" : "Production",
    "receipt" : receipt,
    "latest_receipt_info" : receiptInfo,
    "latest_receipt" : JSON.stringify(btoa(receipt)),
    "pending_renewal_info" : [receiptRenewal]
}

$done({body : JSON.stringify(receiptResponse)})



// CODE ENDS.

/// THIS IS THE COPIED CODE FROM APPTESTER'S STUFF, IT'S TOO HARDCODED ON MANY PARTS.

/*
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

const appDetails = {
    'TimeCut': { bundleId: 'com.floatcamellia.timecut', productId: 'com.wifimap.pro.version.yearly.premium' },
    'WaterMinder': { bundleId: 'com.waterminder.waterminder', productId: 'waterminder.premiumOnetime' },
    'Overdrop': { bundleId: 'com.weather.overdrop', productId: 'com.weather.overdrop.forever' },
    'CMMM': { bundleId: 'com.macpaw.iosgemini', productId: 'com.macpaw.cleanmyphone.year.trial' },
    'MotionNinja': { bundleId: 'com.floatcamellia.motionninja', productId: 'com.floatcamellia.motionninja.yearpro' },
    'Surfshark': { bundleId: 'com.surfshark.vpnclient.ios', productId: '70101326_6cde_4328_ac99_61683a331ada' },
    'XTerminal': { bundleId: 'com.septudio.SSHClientLite', productId: 'xterminal.pro2' },
    'Gaming': { bundleId: 'com.mrrobotmouse.gamevpn', productId: 'year' },
    'MediaConvert': { bundleId: 'com.verycoolapp.mediaconvert', productId: 'autorenewable.proversion.mediaconvert.year' },
    'Number': { bundleId: 'xyz.amplify.numbers', productId: 'xyz.amplify.numbers_pro_trial_3_1M_F' },
    'SuperVPN': { bundleId: 'com.secgin.supervpn', productId: 'com.secgin.supervpn.monthly' },
    'Safe': { bundleId: 'com.appslab.safelock', productId: 'inapp_pro' },
    'Cleaner': { bundleId: 'bp.rmaster.free', productId: 'iremover.sub.lifetime.30' },
    'VideoCompress': { bundleId: 'com.photoclean.videocompress', productId: 'VideoCompress_ProVersion' },
    'MoodTracker': { bundleId: 'co.vulcanlabs.moodtracker', productId: 'co.vulcanlabs.moodtracker.yearly' },
    'Construction': { bundleId: 'com.calculated.laurene', productId: 'cmp_one_year_1' },
    'DMV': { bundleId: 'com.dmvpermit.testapp', productId: '32111' },
    'OutPlayer': { bundleId: 'com.stps.outplayer.advanced', productId: 'com.stps.outplayer' },
    'One%20Sec': { bundleId: 'wtf.riedel.one-sec', productId: 'wtf.riedel.one_sec.pro.annual.individual' },
    "Cocoa": { bundleId : "com.tranzmate.tranzmate1" , productId : "com.moovit.iap.moovit_plus_12M_PT3" },

};

let response = {
    "status": 0,
    "receipt": {
        "receipt_type": "Production",
        "app_item_id": 1247478067,
        "receipt_creation_date": "2024-02-11 16:06:26 Etc/GMT",
        "bundle_id": "com.floatcamellia.hfrslowmotion",
        "original_purchase_date": "2024-02-11 16:00:00 Etc/GMT",
        "in_app": [
            {
                "quantity": "1",
                "purchase_date_ms": "1694250549000",
                "expires_date": "2025-09-09 13:37:37 Etc/GMT",
                "expires_date_pst": "2025-09-09 06:06:06 America/Los_Angeles",
                "is_in_intro_offer_period": "false",
                "transaction_id": "490001314520000",
                "is_trial_period": "false",
                "original_transaction_id": "490001314520000",
                "purchase_date": "2024-02-11 09:09:09 Etc/GMT",
                "product_id": "com.floatcamellia.hfrslowmotion.yearly",
                "original_purchase_date_pst": "2024-02-11 02:09:10 America/Los_Angeles",
                "in_app_ownership_type": "PURCHASED",
                "original_purchase_date_ms": "1694250550000",
                "web_order_line_item_id": "490000123456789",
                "expires_date_ms": "4092599349000",
                "purchase_date_pst": "2024-02-11 02:09:09 America/Los_Angeles",
                "original_purchase_date": "2024-02-11 09:09:10 Etc/GMT"
            }
        ],
        "adam_id": 1247478067,
        "receipt_creation_date_pst": "2024-02-11 06:06:26 America/Los_Angeles",
        "request_date": "2024-02-11 16:06:27 Etc/GMT",
        "request_date_pst": "2024-02-11 06:06:27 America/Los_Angeles",
        "version_external_identifier": 863314980,
        "request_date_ms": "1694273635000",
        "original_purchase_date_pst": "2024-02-11 06:00:00 America/Los_Angeles",
        "application_version": "275",
        "original_purchase_date_ms": "1694273430000",
        "receipt_creation_date_ms": "1694273634000",
        "original_application_version": "275",
        "download_id": 503226333846907953
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "purchase_date_ms": "1694250549000",
            "expires_date": "2099-09-09 13:37:37 Etc/GMT",
            "expires_date_pst": "2099-09-09 06:06:06 America/Los_Angeles",
            "is_in_intro_offer_period": "false",
            "transaction_id": "440001731320417",
            "is_trial_period": "false",
            "original_transaction_id": "440001731320417",
            "purchase_date": "2024-02-11 09:09:09 Etc/GMT",
            "product_id": "com.floatcamellia.hfrslowmotion.yearly",
            "original_purchase_date_pst": "2024-02-11 02:09:10 America/Los_Angeles",
            "in_app_ownership_type": "PURCHASED",
            "original_purchase_date_ms": "1694250550000",
            "web_order_line_item_id": "490000123456789",
            "expires_date_ms": "4092599349000",
            "purchase_date_pst": "2024-02-11 02:09:09 America/Los_Angeles",
            "original_purchase_date": "2024-02-11 09:09:10 Etc/GMT"
        }
    ],
    "latest_receipt": "ijm",
    "environment": "Production",
    "pending_renewal_info": [
        {
            "product_id": "com.floatcamellia.hfrslowmotion.yearly",
            "original_transaction_id": "490001314520000",
            "auto_renew_product_id": "com.floatcamellia.hfrslowmotion.yearly",
            "auto_renew_status": "1"
        }
    ]
};

for (const appName in appDetails) {
    if (new RegExp(`^${appName}`, 'i').test(userAgent)) {
        response.receipt.bundle_id = appDetails[appName].bundleId;
        response.receipt.in_app[0].product_id = appDetails[appName].productId;
        response.latest_receipt_info[0].product_id = appDetails[appName].productId;
        response.pending_renewal_info[0].product_id = appDetails[appName].productId;
        response.pending_renewal_info[0].auto_renew_product_id = appDetails[appName].productId;
        break;
    }
}

const responseBody = JSON.stringify(response);
$done({ body: responseBody });


*/
