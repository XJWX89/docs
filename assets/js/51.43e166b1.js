(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{336:function(e,t,n){"use strict";n.r(t);var a=n(32),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"how-to-integrate-vip-191-ii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-integrate-vip-191-ii"}},[e._v("#")]),e._v(" How to Integrate VIP-191 (II)")]),e._v(" "),n("p",[e._v("From the previous episode, we have learned the basic “terminologies” of VeChain VIP-191 fee delegation. To summarize, the process can be simply described as below:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("The “user” creates a transaction body.")])]),e._v(" "),n("li",[n("p",[e._v("The “user” generates a “user signature”.")])]),e._v(" "),n("li",[n("p",[e._v("The transaction is sent to a “sponsor” to get a “sponsor signature”.")])]),e._v(" "),n("li",[n("p",[e._v("The two signatures are combined to forge a “final signature”.")])]),e._v(" "),n("li",[n("p",[e._v("The final transaction is posted to the VeChain network.")])])]),e._v(" "),n("p",[e._v("To get an overview, the idea is depicting as below:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/3140/1*sn2Hy9U6PYsA5xCSqspBBQ.png",alt:"Overview of VIP-191 Fee Delegation."}}),n("em",[e._v("Overview of VIP-191 Fee Delegation.")])]),e._v(" "),n("p",[e._v("Our example will involve a user with an “empty wallet” tries to call a smart contract (which costs gas) then the sponsor pays for the operation. Let’s break it down step by step.")]),e._v(" "),n("h3",{attrs:{id:"deploy-the-smart-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-smart-contract"}},[e._v("#")]),e._v(" Deploy the Smart Contract")]),e._v(" "),n("p",[e._v("First, we need to deploy a simple contract on test-net for us to interact with. The source code of the smart contract is as simple as below. It contains a counter variable which will be increased each time the function increaseAmount is called by any user.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pragma solidity ^0.5.11;\n\ncontract Hello {\n    uint public counter;\n\n    constructor () public {\n        counter = 0;\n    }\n\n    function increaseAmount () public {\n        counter = counter + 1;\n    }\n}\n")])])]),n("p",[e._v("Many tools can be used to deploy the smart contract, we won’t cover the process in this article, but you can read it from "),n("a",{attrs:{href:"https://medium.com/@abyteahead/how-to-fast-deploy-a-smart-contract-on-vechain-with-bare-hands-eab8d7d96b43",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("blockquote",[n("p",[e._v("Also, I have deployed it on test-net already, on address: 0x6d48628bb5bf20e5b4e591c948e0394e0d5bb078\nWe will go with this address in the rest of the article.")])]),e._v(" "),n("h3",{attrs:{id:"build-a-transaction-body"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-a-transaction-body"}},[e._v("#")]),e._v(" Build a Transaction Body")]),e._v(" "),n("p",[e._v("We employ the thor-devkit.js library to help us with the building of a transaction. To call the method, we build a simple transaction like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Using thor-devkit.js\nconst Transaction = require('thor-devkit/dist/transaction').Transaction\n\n// Construct transaction body.\nconst txBody = {\n    // Test-net: 0x27,  Main-net: 0x4a.\n    chainTag: 0x27,\n    // After which block this tx should happen?\n    // 16 characters of block ID.\n    blockRef: '0x004984e1064ed410',\n    // Expires after 30 days.\n    expiration: 30 * 8640,\n    // Call the contract method \"increaseAmount\"\n    clauses: [{\n        to: '0x6d48628bb5bf20e5b4e591c948e0394e0d5bb078',\n        value: 0,\n        data: '0x74f667c4'\n    }],\n    gasPriceCoef: 0,\n    gas: 50000,\n    dependsOn: null,\n    nonce: '0xa3b6232f', // Random number\n    // Must include this field to activate VIP-191.\n    reserved: { \n        features: 1\n    }\n}\n\n// Construct a transaction.\nconst tx = new Transaction(txBody)\n")])])]),n("p",[e._v("Some fields need clarification:")]),e._v(" "),n("p",[e._v("In the above, to the field is pointing to the contract we want to call;")]),e._v(" "),n("p",[e._v("The data field (data: ‘0x74f667c4’) is exactly the encoded method increaseAmount that we want to call.")]),e._v(" "),n("p",[e._v("The nonce field needs to be a random hex number, don’t repeat yourself!")]),e._v(" "),n("p",[e._v("The reserved field is included to notify that this transaction is using the feature of vip-191 fee delegation.")]),e._v(" "),n("h3",{attrs:{id:"generate-a-user-signature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-user-signature"}},[e._v("#")]),e._v(" Generate a User Signature")]),e._v(" "),n("p",[e._v("Since the user wants to call the smart contract, a signature from the user is required. We import an empty wallet and generate a “user signature” of the transaction.")]),e._v(" "),n("blockquote",[n("p",[e._v("The user wallet is as below:\nPublic address: 0x881Ab2380017870C49a9A114806C05F3CFE406e2\nPrivate key: 2a0cbfe49ea7c18e89b87be4237e1717823fc16b52dc02e91fb30af122fba9b3\nBalance: ["),n("a",{attrs:{href:"https://explore-testnet.vechain.org/accounts/0x881ab2380017870c49a9a114806c05f3cfe406e2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link"),n("OutboundLink")],1),e._v("]")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n// Import library\nconst cry = require('thor-devkit/dist/cry')\nconst Transaction = require('thor-devkit/dist/transaction').Transaction\n\n// User private key.\nconst originPriv = Buffer.from(\n    '2a0cbfe49ea7c18e89b87be4237e1717823fc16b52dc02e91fb30af122fba9b3',\n    'hex'\n)\n// User public address: 0x881Ab2380017870C49a9A114806C05F3CFE406e2\nconst originAddress = cry.publicKeyToAddress(cry.secp256k1.derivePublicKey(originPriv))\n\n// Construct the hash for signing.\nconst originHash = tx.signingHash()\n\n// Construct the user signature.\nconst originSignature = cry.secp256k1.sign(originHash, originPriv)\n")])])]),n("p",[e._v("From the above code, the program has obtained a“user” signature as originSignature. Next step we need to obtain the “sponsor” signature. Usually, the sponsor exists over the internet as a service. So we will use the HTTP protocol to obtain it.")]),e._v(" "),n("h3",{attrs:{id:"get-a-sponsor-signature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-a-sponsor-signature"}},[e._v("#")]),e._v(" Get a Sponsor Signature")]),e._v(" "),n("p",[e._v("This step requires us to send the original transaction to the sponsoring service and let the sponsor generate a signature for us. On the user’s side, the network operation is can be wrapped into a getSponsorSignature function:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n// HTTP function definition\nasync function getSponosrSignature(sender, txBody) {\n    const url = 'http://localhost:3000/'\n    const response = await fetch(url, {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            'sender': sender,\n            'txBody': txBody\n        })\n    })\n\n    const r = await response.json()\n    return r['sponsor_signature']\n}\n\n// Fetch the sponsor signature.\nconst sponsorSignature = await getSponosrSignature(\n    '0x'+originAddress.toString('hex'),\n    txBody\n)\n")])])]),n("p",[e._v("Pay attention to the following details:")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000/"),n("OutboundLink")],1),e._v(" is the destination we post our request;")]),e._v(" "),n("p",[e._v("We have posted two things: sender which is the user’s address, and txBody is the original transaction itself;")]),e._v(" "),n("p",[e._v("We expect sponsorSignature to be sent back from the sponsor and the user can finally assemble the signature.")]),e._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),n("p",[e._v("If you have followed the above steps faithfully, then the job on the user’s side is almost done. The remote sponsor needs to react to the request and return the signature or reject it. We will continue in the next tutorial about:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Write a sponsor service to generate “sponsor signature”.")])]),e._v(" "),n("li",[n("p",[e._v("Combine the user signature with the sponsor’s signature.")])]),e._v(" "),n("li",[n("p",[e._v("Assemble the final transaction and post to the VeChain network.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);