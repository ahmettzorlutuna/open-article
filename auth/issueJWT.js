// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const crypto = require("crypto");
// const fs = require("fs");
// dotenv.config({ path: "../.env" });
// /**
//  * //Creating private public key pair for rs256 asymetric encryption.
//  * 
//  * const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
//     modulusLength: 2048,
//     publicKeyEncoding: {
//       type: 'spki',
//       format: 'pem'
//     },
//     privateKeyEncoding: {
//       type: 'pkcs8',
//       format: 'pem'
//     }
//   });  */




// const pub_key = fs.readFileSync(__dirname+'/pub_key.pem','utf-8');
// const priv_key = fs.readFileSync(__dirname+'/priv_key.pem','utf-8');

// const payloadObj = {
//   sub: "1234567890",
//   name: "John Doe",
//   iat: 1516239022,
// };

// const signedJWT = jwt.sign(payloadObj, priv_key,{ algorithm: 'RS256' });

// console.log(signedJWT);

// jwt.verify(signedJWT, pub_key, {algorithms: ['RS256']}, (err, payload) => {
//     console.log(payload)
// });


// // const base64url = require("base64url");
// // const crypto = require("crypto");
// // const signatureFunction = crypto.createSign("RSA-SHA256");
// // const fs = require("fs");

// // const headerObj = { alg: "HS256", typ: "JWT" };

// // const payloadObj = { sub: "1234567890", name: "John Doe", iat: 1516239022 };

// // const headerObjString = JSON.stringify(headerObj);
// // const payloadObjString = JSON.stringify(payloadObj);

// // const base64UrlHeader = base64url(headerObjString);
// // const base64UrlPayload = base64url(payloadObjString);

// // signatureFunction.write(base64UrlHeader + "." + base64UrlPayload);
// // signatureFunction.end();

// // const PRIV_KEY = fs.readFileSync(__dirname + "/priv_key.pem", "utf-8");
// // const signatureBase64 = signatureFunction.signcd (PRIV_KEY,'base64')

// // // const signatureBase64Url = base64url.fromBase64(signatureBase64);

// // console.log(signatureBase64);

// // const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// // const jwtParts = JWT.split('.');

// // const headerInBaseUrlFormat = jwtParts[0];
// // const payloadInBaseUrlFormat = jwtParts[1];
// // const signatureInBaseUrlFormat = jwtParts[1];

// // const decodedHeader = base64url.decode(headerInBaseUrlFormat);
// // const decodedPayload = base64url.decode(payloadInBaseUrlFormat);
// // const decodedSignature = base64url.decode(signatureInBaseUrlFormat);

// // console.log(decodedHeader);
// // console.log(decodedPayload);
// // console.log(decodedSignature);

console.log(`${__dirname}/priv_key.pem`);