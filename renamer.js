const originalNames = [
  "01-egghead-web-security-course-overview-B1cxW0bGL.mp4",
  "02-egghead-simulate-session-hijacking-attacks-and-inspect-network-traffic-with-charles-proxy-S1l35_eM8.mp4",
  "03-egghead-add-https-to-a-localhost-express-app-to-prevent-mitm-attacks-HkqH2OO-I.mp4",
  "04-egghead-redirect-all-http-traffic-to-https-in-express-to-ensure-all-responses-are-secure-HJ76PhZzL.mp4",
  "05-egghead-set-the-secure-cookie-flag-to-ensure-cookies-are-only-sent-over-secure-connections-rJArd2WGL.mp4",
  "06-egghead-add-hsts-headers-to-express-apps-to-ensure-all-requests-are-secure-SJvit2-MU.mp4",
  "07-egghead-create-a-proof-of-concept-exploit-of-a-csrf-vulnerable-website-rk5WshbGI.mp4",
  "08-egghead-mitigate-csrf-attacks-by-setting-the-samesite-cookie-flag-in-express-BkCSh3-GI.mp4",
  "09-egghead-add-csrf-token-middleware-to-an-express-server-to-mitigate-csrf-ryjsMAWfL.mp4",
  "10-egghead-make-an-xss-payload-to-read-a-cookie-from-a-vulnerable-website-H188A2bGL.mp4",
  "11-egghead-set-the-httponly-cookie-flag-in-express-to-ensure-cookies-are-inaccessible-from-javascript-S1R6J6-GI.mp4",
  "12-egghead-make-an-xss-payload-to-read-document-body-from-a-vulnerable-website-rJsy-T-ML.mp4",
  "13-egghead-prepare-a-vulnerable-website-for-csp-enforcement-with-report-only-csp-headers-in-express-HJk-fpZzL.mp4",
  "14-egghead-add-a-script-src-csp-header-in-express-to-block-inline-scripts-and-eval-Bk99XTWzI.mp4",
  "15-egghead-read-document-content-from-a-vulnerable-website-via-script-tag-injection-in-an-xss-payload-Syt8_6ZMI.mp4",
  "16-egghead-prompt-users-for-credentials-from-a-vulnerable-website-via-iframe-injection-BJBUAaWfI.mp4",
  "17-egghead-add-a-default-src-csp-header-in-express-to-enforce-an-allowlist-and-mitigate-xss-B1mfyAWGI.mp4",
];

const repalceNames = [
  "01 Course Overview Web Security Essentials",
  "02 Simulate Man in the Middle Attacks and Inspect Network Traffic with Charles Proxy",
  "03 Add https to a Localhost Express App to Prevent MITM Attacks",
  "04 Redirect All HTTP Traffic to HTTPS in Express to Ensure All Responses are Secure",
  "05 Set the Secure Cookie Flag to Ensure Cookies are Only Sent Over Secure Connections",
  "06 Add HSTS Headers to Express Apps to Ensure All Requests are https Requests",
  "07 Create a Proof of Concept Exploit of a CSRF Vulnerable Website",
  "08 Mitigate CSRF Attacks by Setting the SameSite Cookie Flag in Express",
  "09 Add CSRF Token Middleware to an Express Server to Mitigate CSRF",
  "10 Make an XSS Payload to Read a Cookie from a Vulnerable Website",
  "11 Set the httpOnly Cookie Flag in Express to Ensure Cookies are Inaccessible from JavaScript",
  "12 Make an XSS Payload to Read document.body from a Vulnerable Website",
  "13 Prevent Inline Script Execution by Implementing Script-Src CSP Headers in Express",
  "14 Read Document Content from a Vulnerable Website via Script Tag Injection in an XSS Payload",
  "15 Add a Nonce Based script-src Header in Express to Only Allow Scripts that Match the Nonce",
  "16 Prompt Users for Credentials from a Vulnerable Website via iframe Injection",
  "17 Add a default-src CSP Header in Express to Enforce an Allowlist and Mitigate XSS",
];

for (let i = 0; i < 17; i++) {
  console.log(
    `get-childitem *.mp4 | foreach { rename-item $_ $_.Name.Replace("${originalNames[i]}", "${repalceNames[i]}") }`
  );
}

//
/*
[
  "01-egghead-web-security-course-overview-B1cxW0bGL",
  "01 Course Overview Web Security Essentials"
];
*/
