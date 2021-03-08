/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.75ee1d02.css",
    "revision": "43a8d69e7c04f131040bb45b0b20ded2"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.81aa8084.png",
    "revision": "81aa8084f7901a510293cf30ba4bb26e"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.7722efc8.js",
    "revision": "e9b3915cfb957ae27f6e86cb141d97ef"
  },
  {
    "url": "assets/js/11.ef648608.js",
    "revision": "8f3ff19347b452a09f40788bf21ae2c3"
  },
  {
    "url": "assets/js/12.5ac22135.js",
    "revision": "b84f63f99ed5da09f09f8821b4c940e4"
  },
  {
    "url": "assets/js/13.cec12ca0.js",
    "revision": "b170d256f883aad3614ff0f3e0512f92"
  },
  {
    "url": "assets/js/14.d2df8f3a.js",
    "revision": "97448dd8754019a6383f7cb0ff96d55c"
  },
  {
    "url": "assets/js/15.224f39a4.js",
    "revision": "bdbce29e3860b9bdcb41bcd22e7c60fa"
  },
  {
    "url": "assets/js/16.cfa26539.js",
    "revision": "a2b0b0e1d08a8e7ff2ba7c2bd6dab0fe"
  },
  {
    "url": "assets/js/17.7b8da513.js",
    "revision": "77dcbea3bca5ce3875d9f18ba78c22c1"
  },
  {
    "url": "assets/js/18.ae0c0ee3.js",
    "revision": "d4d84ff746510b478dfedf22efddf3e1"
  },
  {
    "url": "assets/js/19.5bee6bb9.js",
    "revision": "b25c812d5442074f825ebcf9056079c2"
  },
  {
    "url": "assets/js/20.cef804fc.js",
    "revision": "bda57a0cf049a60aa5dee9b1fbfd2fec"
  },
  {
    "url": "assets/js/21.e972ec7b.js",
    "revision": "ea68478a162d3a216b91e86757d42b88"
  },
  {
    "url": "assets/js/22.8cbed8c9.js",
    "revision": "18bcd3446c654792512fe85e009cc72b"
  },
  {
    "url": "assets/js/23.7e1dceb7.js",
    "revision": "28c032b516723ee9a7f73c77fb334a1a"
  },
  {
    "url": "assets/js/24.12a8ddfd.js",
    "revision": "2dd65f61871fa4843455ebd007a2e528"
  },
  {
    "url": "assets/js/25.b3fe1f1f.js",
    "revision": "442e35b66e47e2cc149cced6296cf4b1"
  },
  {
    "url": "assets/js/26.f97cfa01.js",
    "revision": "dc102e43e5d36cac4e143db89b8e0b7d"
  },
  {
    "url": "assets/js/27.14275c3d.js",
    "revision": "7818c2e56df96f0c691dc8715bf94664"
  },
  {
    "url": "assets/js/28.7aa20233.js",
    "revision": "381315fe596f275626bef8983d237ee7"
  },
  {
    "url": "assets/js/29.76aebf7e.js",
    "revision": "a42e44e88016d5d439180f2ec906f3fb"
  },
  {
    "url": "assets/js/3.f2ac9cff.js",
    "revision": "986a3ee0725683435b4dcf3c46f93568"
  },
  {
    "url": "assets/js/30.a680e8bb.js",
    "revision": "2cfdcecf4ac5861a932b48ee9972de68"
  },
  {
    "url": "assets/js/31.114ea5ef.js",
    "revision": "d09658cedf56645928a7e690003bd17f"
  },
  {
    "url": "assets/js/32.0154e78d.js",
    "revision": "8f15990d9518a9af2c7726425280b70d"
  },
  {
    "url": "assets/js/33.6d782dbc.js",
    "revision": "329f5e32c59a01c03b24cfdf7ce24119"
  },
  {
    "url": "assets/js/34.295f8d02.js",
    "revision": "0476f3e7fbca0c974b180b534e9240db"
  },
  {
    "url": "assets/js/35.afb0df66.js",
    "revision": "008d19a0b41b335709806af8b16e90d7"
  },
  {
    "url": "assets/js/36.d2471208.js",
    "revision": "1ab14a970dc919de9605cf7accb9e773"
  },
  {
    "url": "assets/js/37.db30bea5.js",
    "revision": "08615e41cb7c42768a8b1af1e7824dd6"
  },
  {
    "url": "assets/js/38.aa02becb.js",
    "revision": "1b36909672961a999f5a5e137b3b2451"
  },
  {
    "url": "assets/js/39.c8576259.js",
    "revision": "d908afe0a3f1d4c8ff6b6c0b23369a3b"
  },
  {
    "url": "assets/js/4.d2de1766.js",
    "revision": "d500df215e6accab2b78effa1b415e10"
  },
  {
    "url": "assets/js/40.62f18d77.js",
    "revision": "e50e3b572f4228c5241c2422ba2adde4"
  },
  {
    "url": "assets/js/41.8528ae6e.js",
    "revision": "16b9a06d26928fccbfeb112d8e6231ef"
  },
  {
    "url": "assets/js/42.6e023e8e.js",
    "revision": "7636e802b60de2ff4bee7e8f7737091c"
  },
  {
    "url": "assets/js/43.1ff989bb.js",
    "revision": "d897689fd9da4970cc6442fecd1a688d"
  },
  {
    "url": "assets/js/44.924df6af.js",
    "revision": "b9781f3913c9d1f24f6f10801d94ddcc"
  },
  {
    "url": "assets/js/45.c17c3696.js",
    "revision": "7c37c73df17cfe3ddceb505066fff694"
  },
  {
    "url": "assets/js/46.077ad853.js",
    "revision": "78aff394a85934ace986ebb0159d245f"
  },
  {
    "url": "assets/js/47.7c8cfc90.js",
    "revision": "faa51e85529e2388695aed2368e8a6db"
  },
  {
    "url": "assets/js/48.9584d0f7.js",
    "revision": "66b0caa731c10ebe54eed325f8b0cb23"
  },
  {
    "url": "assets/js/49.66f4c2da.js",
    "revision": "06a727054ee14e6a363eab2733d007e3"
  },
  {
    "url": "assets/js/5.5406159e.js",
    "revision": "6b694c13711798aee40397312d03390f"
  },
  {
    "url": "assets/js/50.ec5aad47.js",
    "revision": "5ae075a2dc96816a42fada9eddf560a8"
  },
  {
    "url": "assets/js/51.43e166b1.js",
    "revision": "31f8f89d74115f6ac907c52a25fa1c78"
  },
  {
    "url": "assets/js/52.bc8374ff.js",
    "revision": "cecc134ae886e5c44fe3827bcd838a79"
  },
  {
    "url": "assets/js/53.fb451705.js",
    "revision": "87605c4154bf08c7d768a97996cf8641"
  },
  {
    "url": "assets/js/54.e559ea48.js",
    "revision": "4bc9043de7826a1a294841989445f9c3"
  },
  {
    "url": "assets/js/6.45cd3535.js",
    "revision": "b0aa82649159473b38fff35ad24f9b20"
  },
  {
    "url": "assets/js/7.197bf4dd.js",
    "revision": "6a0f67ec89c04e1963f9bd9d1acfd5de"
  },
  {
    "url": "assets/js/8.39f1aca8.js",
    "revision": "3e38151a07aaff3a7e7d839d136dad63"
  },
  {
    "url": "assets/js/9.c7d65a68.js",
    "revision": "2705386a5d9d21043a85f51daea40af7"
  },
  {
    "url": "assets/js/app.bee20aee.js",
    "revision": "4a565e11b6377fffebbf5e864952c795"
  },
  {
    "url": "assets/js/vendors~docsearch.a520bdae.js",
    "revision": "ae20a4be66b9b6b2cbc90eb12236cc43"
  },
  {
    "url": "connex/api.html",
    "revision": "5d9a4601deafed364240308964720813"
  },
  {
    "url": "connex/implementation.html",
    "revision": "667980e47c32305095b236c7f0d5d7df"
  },
  {
    "url": "connex/index.html",
    "revision": "11e550b124cd31c5d6f30ad1f25d7dfe"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "41b8b9cde70eee28ab53ee38eda19398"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/demos-and-services.html",
    "revision": "9edf3f48e2e72eac3ec04501e4e6be23"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "9ae7dce869fd95c415f6336d08a72d8d"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "9653632dfdfcfabaf5fab762af10ebae"
  },
  {
    "url": "sync/faq.html",
    "revision": "73f98932134d97608344073225263865"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "04a46edd6b962d960e67ec11c31f2e92"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "dda85aec021f8024ac1e14087110dc34"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "33499ddbeafe7d892f3633d288448d72"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "d82561dd8382b16667c453b741f40c12"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "05fd4bb8bbbbfabefb8ac040d4065dc9"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "7dd19742de4ea5c723e49a742f380358"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "7c4eca2fdb7ee8a156c1c0cd1c044f5f"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "f6a4bc33534337925483f60e0dc94f32"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "75deb2874c94097197b4aab010e2fc10"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "0830d81e2f7d6170be0b31e24a4b98a3"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "d85198498ed081fe3e9b70f4b716e6a5"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "722e30ec324ad5fc0e936fa52e10ecd5"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "e248639d8eba8b99c102e92505e7624a"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "9a6492b7a1052ce6c5e3a338fdacd71d"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "7bb5ca005c8b12a44af1b5d475aeaece"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "656bf9cff8afdd610bf89cbc3d9409d7"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "ba8f65412358401a6396f1f8f144465a"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "b963f97ba358bf14aa480d59e7539c13"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "eeb7f79ec8d00dfad5e41c4a70c6009a"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "1e0a57858021fcdc963385ff3b11052a"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "c23ac2a7bae417c726595e9e05960943"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "9d97d390b009cdf3168d8b72d7ff57d7"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "0ddaf1776abee17c2837c68d3b329ea8"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "42992825fd2c52e3b66d72e80f287c02"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "3b93deab8ff689218939911d9c1b4789"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "89dac4b3a5742fda4eee53682e6e3bb3"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "aed9b3b4f3faa9458362252930adfaa2"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "61dae5181af5a4c3a6b6226194e1781f"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "8f7a3305beb33b2af78ec7272a0e2125"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "82cfed997072c22197e91ffe2b82cef8"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "35ed4bf9f65538722ba85a21b3545dec"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "fe0ec0cbed0b0400c9e65ff4db28e266"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "6798758747686e1404b01b23616733f3"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "a03d192bbca76b476385468b85ae18ce"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "6ce8c7971cce0e5c966a9c07e8d380e5"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "af98de72e548796853cf86d93571ef72"
  },
  {
    "url": "tutorials/index.html",
    "revision": "ced2ea404236f838426ac4ddbd5f13a5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
