'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7c2151676989b307b1ed21fbed57fcc9",
".git/config": "dfcd4a812209e66f0ee547846feb9213",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1036b6f2474e91e0915698f603fb0ea1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68b36219de1dff6b3354912dcc8df153",
".git/logs/refs/heads/main": "d4b0184ae488fa2691ff78bf88a45418",
".git/logs/refs/remotes/origin/main": "a702fa5b2a14ed087d01ad754d503440",
".git/objects/04/ceb73b9bfe5359b9a7c9030c3fe62aa889daab": "7f02923523b59613da7fdee80cc8353c",
".git/objects/07/b6c6a71e2fb0acf7a263a01ad6e40919dbdbf4": "6d0aa588a68d0af65102be5d1628be6b",
".git/objects/09/ee172cdba84f8b69660fe2fed75854d8528fdd": "75c3432442a235abeddaa8b8c6af7bc5",
".git/objects/0a/9928f3ca2fb7ebf432bfcb51befe799f235456": "a1746eac4f09cad4479abed7f9d90c71",
".git/objects/0b/829841e57af18eef4ee6a4b1aa41a01977aa93": "3c683579761f36a221175144f61359ad",
".git/objects/0e/f6ed1693b3c3548845621686271bd47f593d8b": "f5000f3c193a25d1a2d360a0266664d3",
".git/objects/12/0660224e60e7af84283ad71a874a37d40330ef": "161018c84001fb6f6d2c1cf8d86b4163",
".git/objects/15/f4a4678d9afc1bf88aaee90c7fba3b09b3a554": "67555cb57fa41d9359a7d4490f77710c",
".git/objects/1a/256767f331ce5e1aa33769dbbb3c20f5ce47b2": "1393fd7d3c7938728e8b3526ed80e2f9",
".git/objects/1c/32586381e8ca3272aab7f3bdf772a7cf06fb93": "27605cf6cedb46324120913d8dba089c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d0108b82e060df9cd68b78d5a89165dfbaf0fc": "4dadd289d6d4bda3184f4915b1328fb3",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/28/b0adb8ccf4cdcd9e3233d56a2dfcb3c88c48f2": "e5f6b44e159e89f048548a0514f55cd3",
".git/objects/2c/8a5633da8874cc5c21ebd359af707bf32e8eed": "ca5fd818ce4f5a431e929615af0d3793",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/b7b7bbbd18ea3ac20b2bec4ecb0cfca2ac649a": "3f3a6aab7219ae1723f148e5dbd5af96",
".git/objects/35/8fece9b284715de37cc16ed379da28b2eca466": "b26aa34287fcfbbe111c4a085f5e7e3d",
".git/objects/36/6f5dc1689ed92d6190a97a5916e36ef29400ff": "6e87c088257a543c076165887e561598",
".git/objects/3a/8adfe46fcc11d102882dfb4b8e5043ba23c27b": "7edd0f79ad7990169f45d950eccce668",
".git/objects/3b/379ce9b9db243a0d659541191007968e009443": "ec5679d76069f68ba3f2a8160c5e5102",
".git/objects/3c/54e91ab0541a97951a6e6a05bc8803385a6657": "34b634f7043f151cb5c6257a7247e852",
".git/objects/3c/a74c9b11efb2d158a71ebaa97d632a3e29131b": "33d469986f013370b34ef6385035d29f",
".git/objects/3e/8e4ef8a58dfb04c94b4dc66ff35bdfaa335568": "85e4a71c58ecea0e3e4f42fb578ff9c9",
".git/objects/42/d1fc58f8ca0d8750eb7efe40daf0c29df3fcfc": "84590ad303279c0c53cadfc0a5ad102b",
".git/objects/43/2b8ec7981177350c61000d6672632ad33f8b1a": "a1cf17c5b1c2c7ff6dd8b24e99ab7823",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/badae5d5c1bd8a7c3e5a5370d3c2549eafc2dc": "c10858327c0833c0b2788ea5a0609cbd",
".git/objects/4d/ea456b071729f3dbc82352271d6b3ef2ad353e": "125c26c00d952ec913bba67cebc27bdd",
".git/objects/4f/57b8289963aaeddc83596c98c707bbbcd14a10": "937134402547814c9d6e6c306f05fa3b",
".git/objects/50/b77c8302db8d28b7eba865b51bab2ffe7e554c": "5235e3f7700ff8471a952eb42554ba74",
".git/objects/51/cc5576c3fb6e39eb1731740d12a00d2fa7d2b9": "cf135fce91320634b66fda9b76c4f360",
".git/objects/53/e88f83ac95090147cd694b0394cd9d98863e7d": "88cc956ed23430a3a23be8e0125169c3",
".git/objects/55/481b7ccc460a1c441bb5b6a2c482b15f4cd32d": "5568b13920b1998b8152e7cd5a3d4654",
".git/objects/56/f94bab1440f5445c3aba932b3a73e68f0df947": "4db542336f18d546911ddfa4155b7fa1",
".git/objects/59/5371e1f22af631e8ef2e9cfb9322917ef2bed5": "54071024a85adbb55efff872b1727173",
".git/objects/5b/a1083e4339c48c4ae7e32d5696f69e33958fc0": "47e653a95a1e1ebc565c9cbf0c12ae03",
".git/objects/5c/2d68ac97d4fc122723a88805277952205b2d0a": "04421ddcb7ff12c987beb118613303fc",
".git/objects/5c/3a77b827f2ad63b338fcf0cd9eec4a001c4b17": "6ad4020c1871aeb43076ea4f4e4e3ef3",
".git/objects/60/46b4db8a9799d917a7cda8d053674fd66c7bf5": "a11f48294f4ee774f422b580d711aee3",
".git/objects/61/5915a3c705eea0188a10385ab2663b3375420b": "04fa98138ce11724593983654cccc896",
".git/objects/61/c5a65350dd9c7df28dbe839a9fbfba7670ebe8": "c51baebb38cd4e4aed6bfd3c665f4ac6",
".git/objects/6c/b26f17c84e65304ab0f36189ee57546925fa98": "053be03a60af9f0729c8ae733f75873d",
".git/objects/6c/e64dac2b20f480b0a1a9130752d5036eab79a4": "b74897c83ac5e4947dbc33ac08e53a1a",
".git/objects/6d/fdf6807c93f5f893b5107e5f609ecd6b93d1c3": "2d58efbb542505074c9251c6596860bf",
".git/objects/6f/199d56f8b24bf5fe7dbe9bdd0f08380b424d1c": "bb3baa8d9f7a0ff69f70dfe3030bd8a6",
".git/objects/74/f14de1092274a578e2224d3513d5d43c1ab557": "80651c1bab955ec7c283ec06853bc36a",
".git/objects/75/260e81e5f321f39e4fff3bda76a23386f7aa0d": "ec3c64bedadb70a184696abec1d66925",
".git/objects/75/2bf90ad5042139a7e06934121adc177d6e0989": "3b3e3678bd19fe2bb95f13378ebda58e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/bd853599ca151828bf40ea28071796d5ee2a17": "b71f30e142394f5c17ff11517b9a4b17",
".git/objects/7a/fff9df267936cda1bb2fa7bc4306ec81c8dac7": "5eb982f645309c5b0dbf5753c0cd9af0",
".git/objects/7b/8b1eb08c8deecb74e7ef6cfde608731ea21793": "5e958fc22f3e817004a76672f5a954bb",
".git/objects/7b/9c88815d604495bfa4f1c2b26cb8b56cf8375e": "077dcee426a8e26bcf5411b2fbfca482",
".git/objects/7c/f82d7df9c26740ddaa159ca2eb9ab926e0e646": "be92297cc0bd407003ef1d8c19032208",
".git/objects/7e/63b3a20a24fd612169abc6836f221abad94e2d": "8409b081cd3d4b89ca2872c79bd083ca",
".git/objects/7f/d1c883104bdcc9b40fc58adc9b5a1e87e54fee": "539e9758227e1506642d905fc39307f7",
".git/objects/84/9788bf46c077cad81acf524fb1f834873b5f99": "04d645f76640281c5abed03512a2538e",
".git/objects/87/f1e6f8599ba13f41604351a4b774790d1ed41f": "1e66ce38ebb72ba374cacae044049bd3",
".git/objects/88/999f3c2d3ae518cdb20b8bcc93b1c4e63b6c67": "bc63d5ce030827c63e84c0bf5d8da335",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/cc2d60f368e7b0f892e98b2abe9dd61cfe705f": "d07df7b8c728c67dbe7ae82141198b56",
".git/objects/93/3b5b34e8ed75efb49b62e0da4d6dd9d3b07060": "8dfc570f063a14f472078c3b1d92eb06",
".git/objects/94/27e31a5b146863fa40705505c9e3e73405ae89": "c32c34df95aa4d7929e56cf3917dbea4",
".git/objects/95/1612749a3ad462ea640bcc4249db9598770c46": "5c79aa3422abf2bfe1fda24d44a87e9d",
".git/objects/95/91f91fdf54c27b8b3ac9ae6adb3933512bd835": "ce3856433a1bfc4bc07895f911e01d83",
".git/objects/96/7498f2c107307b8801ca2fae2ca51a59602196": "ff1132876e23663d68503c154bda17fa",
".git/objects/98/3462f47fc36fe48d40a6a1ee168e80d7ac70b2": "44a8085719302f6c63adc962720f64ee",
".git/objects/99/ca76d33e489f05bc26c82d9a616fbd1e1f096c": "021307d96094b28674e54abf3742cc70",
".git/objects/9b/84c1402a3ed418a7c7e9e690348f3676becf56": "8dd429d1240cb4e481e6790abd1b8a9b",
".git/objects/9c/3c07eae19f6077aeffd2e7107be8d3984d900a": "b0a47f1af2ea9fc987b01621ce8446cb",
".git/objects/9c/9025f97d0b89d8d4fdfdeba4dd63c350c473a6": "4fd07913c21fc9f723da35fde1abf5c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/78649cf41875853f098d8549c7b94bbd2a2522": "8bcbed11992d782d4549007420c6557b",
".git/objects/a1/7a9bad9b2eef620257dd73297bcedd9fc6f27f": "45b3edf9c92670259e8bb3dd6b1c0192",
".git/objects/a2/f0c3e089ebd13e31c9f436dd5941b188e53403": "3ea6229a41b6c62966a1df7e63871fcd",
".git/objects/a6/106857c2c83d3941c256e0e425cd93bf49f5b7": "445e06bdfdb72dff925713d22309ec5c",
".git/objects/a7/9435ecebb6f89e140d3ec7c0918733168a6a81": "dac2eed4f1c021a6bf1bd5a910d70c26",
".git/objects/a8/285ea557e6091317dbf540083a502dbcad5596": "916246982a999e976ceeaeecb4ae7016",
".git/objects/a8/2eb022081a1dbfe65611369f9c97b9242672f9": "f1551396637c671c11853d95c3a81b48",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/49c4d4f17bcc5810e648cbacb451527bc2f014": "acd9f2004f85619b02ffffc395d42a1a",
".git/objects/b1/4b2256178b6b4566f5e8789cc86009642424ec": "72085cf913fa535b53e4c0c62191f502",
".git/objects/b1/6d631da1fe851cb92e2d13c14c7446ccc7ae2d": "f4b9ebf7978e346cadc3e51a300fc9c9",
".git/objects/b3/32bc63114bd294aa377e033afbde0037b2b752": "9fad96fee262ff68d76aa5fa444d2c68",
".git/objects/b4/cf6e2b88fc5bc40c7346068112b4016d48b162": "dc9e9a6593229433051605c7ebdf8094",
".git/objects/b6/9054527d092a9a65f254b2080ca6d5b5002154": "437f6473ef1794a19af43229dac73dd6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/cd4c4d3068cc734f2f6373cfc0ddab0676e29b": "4e5fc614a80bc5691f33111e2a4dc14e",
".git/objects/ba/9e43d3860a25864b5b6503b81f45740bc80682": "eea6cba9f98f2c4c3afeb23058d35f6d",
".git/objects/c1/20ffe07289f6bf4bf77d551f96420c5d482b8f": "b9f1669ac1e507c8a490caee252c6a51",
".git/objects/c5/517a833b17bc6ff36c717c97d903acebbba684": "1b2a3eb81d398fe932e8cac3870a3657",
".git/objects/c5/afe110b770d6ef0497004cc058257ca82bc911": "3e25cbb6d2d04531db934784d278cd66",
".git/objects/c8/f88071b59e5190278b5229b4de8c8d56a2f87e": "8633a892b5a9d23f5328d87b5fd15d39",
".git/objects/ce/09460303d4cb1e026dabe261beb049f460814c": "3794cd6e5d44aae93cd781885c1485ef",
".git/objects/d0/bc493cb3222e0a5d304a5d31d2d84e0321dc7d": "f0e0dfb4c11314376d280286f0c7f17b",
".git/objects/d2/af818b645c3d70e379b7a6b348a9848b520c52": "9350957d6c6547a87167a51d1a186254",
".git/objects/d7/9a624eac013ff60a627cd9922fc9f32e91f7d4": "7235a2c0aa6f4a707d3d86896c13a589",
".git/objects/d9/2dc4a2628971391bb2fc4691d11c645a0e717a": "8f7ee8be2f87eeed33c382b2c9ad0047",
".git/objects/da/70d08cc8cfb1afcacdf56f7472df6971d96ec2": "67c7d46275bb2fa8bf65299ecdb812b7",
".git/objects/dc/119a98641562951729059bbd52ab59565e14b1": "7abdd4a10acf910bd88018c7ac2a032f",
".git/objects/df/ed3a158d74f83ec1db9d9db99e99ee51aea5f9": "c75b054ccc3d7e4ed6346888a36b115f",
".git/objects/e1/0e8b30189c115d22397b92ac7b67a8d3938f76": "707c00df53f4dca8d4e36c3b7b7cc8b4",
".git/objects/e2/67e15861ed68cc5ab91876876943c482d98eac": "e7ec06cddf21c30e3b334379a302aa54",
".git/objects/e4/7e0c2787b222da5ab79b8629ba7a1040bb74e9": "7c80eda8cfbf7fd818b03004c36acbb1",
".git/objects/e5/703db53154dc570a841c320aa7c2c5a22e0bd3": "76b1149321c932a8584bc06c6b3bfa46",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/95f851f5e700c80fb890dd830ceb3e2fcf58b2": "436f1e50682adf09d7d7a7af79645b5b",
".git/objects/e8/18a599a0b0a70da065c2d9c6539273e4c3f5ea": "c9459231e4e66fd5e77cc2c2a83517f0",
".git/objects/e8/89444827002c78559dc5a6353af032b1d20b4f": "5e2574258c38f3d0489192ebf8595108",
".git/objects/ea/259723d42ffd5dd7c44c82284cf7dc1737f273": "bf6de8b5a938b96430dfb4d9e3beb2c5",
".git/objects/f6/1354d729fc345872900e31adc10a55418a0c7c": "83d4c964c34f7fe14826cc38d6a79f37",
".git/objects/f7/8b4c00e884d9334f5f67cdd8ef775d949873f5": "5a2d470bedf5a7623ee4276ef9384dba",
".git/objects/f8/167faceb527b15215cc127bf58aa6d03bd054e": "944db4d4cf3ffb6c57b7cdab4070bd82",
".git/objects/fa/c810db666e3bf7a959eb4169d6382affe22545": "31f5b4cd2586e16d0deda7bf875e3d72",
".git/objects/fb/7df39c089e7ae94163bbb5658c290789dd3bdc": "7b350e550775781c58d4205db3dce3e7",
".git/objects/fb/8b9179c3d349126b93af2168189d3ce3cd97b3": "f83721f8f0a79b3fad72a3e6c5e1cf06",
".git/objects/fb/8d506420f28eab1207d2b74476f797d643b1c6": "f72afb631b9c0b62f2c34e0d18bbb7d4",
".git/refs/heads/main": "a7ab7b03162a704e7484d3f8b28793be",
".git/refs/remotes/origin/main": "a7ab7b03162a704e7484d3f8b28793be",
"assets/AssetManifest.json": "6fa85ad81473dd7356c01e3b7dc4a3fb",
"assets/assets/img/admin.png": "86e2e5bc4fca78f1a12895075c5cb81a",
"assets/assets/img/admitcard.png": "8e9903870e5ba9fcb35db8b97aef0e77",
"assets/assets/img/answerkey.png": "ade3927afdf4e217738fe85a0def5924",
"assets/assets/img/gallery/gallery_image1.jpg": "12c853bc6b9b1ff53465115200c0c29b",
"assets/assets/img/gallery/gallery_image2.jpg": "05ff2dc433c709ba87d6457acabbbb80",
"assets/assets/img/gallery/gallery_image3.jpg": "1ff213415f344f655216efc4a2d9e6ad",
"assets/assets/img/gallery/gallery_image4.jpg": "2f0be5917b8cc0834a3469a4c5008bdf",
"assets/assets/img/indian_emblem.png": "33a76d48bc493f4f3a98dda23ff0bbdf",
"assets/assets/img/indian_emblem.svg": "d881dce8630cf51f46e7b87c40d31c08",
"assets/assets/img/logo-temp.png": "7cafd929e458cb6bb6189b72c5670b15",
"assets/assets/img/logo.png": "b8070ac2fe7ff94a98fe0f8952fbb3f5",
"assets/assets/img/page_under_construction.png": "4f970c06cdb1129319facc20011e63bd",
"assets/assets/img/result.png": "10274216250e251b1f943d3bc320f0ca",
"assets/assets/img/splash.png": "f15f1634f8c46fdc85b3c04b02b6da55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/content/data.json": "6daa60ba2db23bdcc06e2f8ab0c8b0d9",
"assets/NOTICES": "63eb2ae187ef6f4d8f55fb89df05ab6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b1b26f51f01902378c3e64554cc26ad7",
"/": "b1b26f51f01902378c3e64554cc26ad7",
"main.dart.js": "f31199ae4e86ad5d6c0b3ba330751ea6",
"manifest.json": "8a8d1e5eacf294b4b8cb66ca0e5e912e",
"splash/img/dark-1x.png": "aa9e228f371f0f96cff07b8261be5619",
"splash/img/dark-2x.png": "3ece7da2aa0194064a461dc2519ccace",
"splash/img/dark-3x.png": "680d347ce1a78c0fe90e6e9b2e523229",
"splash/img/light-1x.png": "aa9e228f371f0f96cff07b8261be5619",
"splash/img/light-2x.png": "3ece7da2aa0194064a461dc2519ccace",
"splash/img/light-3x.png": "680d347ce1a78c0fe90e6e9b2e523229",
"splash/style.css": "86126e7e4072786170390b7ceee604b3",
"version.json": "6242217a3acf90d0c2ac71e5f2fb4d52"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
