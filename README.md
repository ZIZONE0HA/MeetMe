# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
EmotionDiary
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 02
│  │  │  ├─ 575ca84183a7ff7fa45707419fb6ab087731ca
│  │  │  └─ e6ca2642608a73984766f9af3ea89595151ca1
│  │  ├─ 04
│  │  │  └─ 7fcda92489d113316aeb782248b276f6aad34b
│  │  ├─ 05
│  │  │  └─ 628c2130b424ef7b60f0d02c513027c0f065cf
│  │  ├─ 06
│  │  │  ├─ 49804a7a729a5e261792aac5210cb7a5277c17
│  │  │  └─ f184fdfb2adbd5e35f5862731f61f5354b7bad
│  │  ├─ 08
│  │  │  └─ 7e6d12a999c70976a803b25c609755f14d65c3
│  │  ├─ 0c
│  │  │  ├─ 307b97b0c3b0176f080c435db34e4e103a9589
│  │  │  ├─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  │  └─ cb30ab6891d9945e6bd818fe5a34eb36bc58ef
│  │  ├─ 10
│  │  │  └─ 23acc0ab189078d5363987e286d33b35e8d3a0
│  │  ├─ 11
│  │  │  └─ d3907eb9a2d9ce27fef2e1d850e72bab07f0be
│  │  ├─ 15
│  │  │  └─ 54e318faaa7db51489440043b6f50f07b182ee
│  │  ├─ 1b
│  │  │  └─ 17b4b1d3c9044fae06259df71cae2c4f5ad1e6
│  │  ├─ 1c
│  │  │  ├─ 34baa1a41aef64d7ea20bec3186ac2c3d9aef3
│  │  │  └─ 4f49df5d7394ccaa464204e0c24a2a8875bee0
│  │  ├─ 1f
│  │  │  ├─ 1194bbed7ab35e08423a921b3f7fd61fdf401f
│  │  │  └─ 775fe63dd30f810a4f6d0c6515494e5c703276
│  │  ├─ 23
│  │  │  ├─ 51fdd34c146a13bd2f1fa79b044ed0d320a786
│  │  │  └─ a0eb739f02ee8190ec87e802a61ae4b34faa39
│  │  ├─ 24
│  │  │  └─ 76b33c8ff1760976b8dd6b79f4ea349d222507
│  │  ├─ 27
│  │  │  └─ 821451e012b8a2533ccdb54dd2469f89084ab5
│  │  ├─ 2b
│  │  │  └─ c83dea1b86b21cdb9321d3eb4589cd3fdf8466
│  │  ├─ 2c
│  │  │  └─ 957ca688abc650d4e13c7561afb0513b380658
│  │  ├─ 35
│  │  │  └─ d2c1bfc54f88ee035b3d584b1e5fbe719861fa
│  │  ├─ 36
│  │  │  └─ 613c633a80f3e9bcd0fa7b6daf4dc566d8c355
│  │  ├─ 37
│  │  │  └─ d790b087c208d9ff21571f8bbf0c837ae46830
│  │  ├─ 38
│  │  │  └─ c6c155ad375e6139074ce63014a688f5226b97
│  │  ├─ 3b
│  │  │  ├─ 537804b46ebe49a020ba394ecf10a48ded8127
│  │  │  └─ affe696823620c8b8683a8e08e6bdb8f20c628
│  │  ├─ 3d
│  │  │  └─ f2684f6cd70a6b4567050c2806d592df2dc639
│  │  ├─ 3e
│  │  │  └─ 3d5adf4b26eacd9b4f1abeb89201585d0f4024
│  │  ├─ 3f
│  │  │  └─ ac36f43b62d85e52bfdbbfea9c8c847ce43e44
│  │  ├─ 44
│  │  │  └─ be704cee081154c9be5703430ab334e40d95ef
│  │  ├─ 47
│  │  │  └─ 505aa6ceaaead9e123625dc62ba9e8074d28af
│  │  ├─ 48
│  │  │  └─ d89d00a37fa337ecb36fdd8965279b62b3efc2
│  │  ├─ 4b
│  │  │  ├─ 825dc642cb6eb9a060e54bf8d69288fbee4904
│  │  │  └─ a5820dcb144029eeb41d3fbd164fd2c87ab47c
│  │  ├─ 4e
│  │  │  ├─ 3736cb9582b6e8959d3fd6e2283677ca088acb
│  │  │  ├─ 5b2bdab7d697d3feb00bf2bbf73ae8092ced5c
│  │  │  └─ e48f74684d38e687b8902bb4c3b8942b30d96e
│  │  ├─ 4f
│  │  │  └─ 649a1d9959e6aa47fde8d4fd23abe1f1f9e6dc
│  │  ├─ 51
│  │  │  └─ 8f853e2a1e07f3d5800b161785fc2b2554d81b
│  │  ├─ 52
│  │  │  └─ f6182259ac3a1c2ead7cc9338fa345bccd04ed
│  │  ├─ 57
│  │  │  ├─ 9e86843cf4bd9d9bfb1c3eeafffb8db510cb20
│  │  │  ├─ bee83ee1fe6810f0579cca1d94ab2877ec7c95
│  │  │  └─ c34db58f8d3058614904b40b070c4d6ff43d42
│  │  ├─ 65
│  │  │  └─ b24f5370d8ca852c90f64717db0c65ed2c17ad
│  │  ├─ 66
│  │  │  └─ 9582ceb3b2522122415cf56025ec8e98a7de92
│  │  ├─ 68
│  │  │  └─ a3c5f5f3839b42fc0e786a0474091d14446cfd
│  │  ├─ 69
│  │  │  ├─ 2d3dbd0efba2a083c66afcce9351348af0afa4
│  │  │  └─ ae80a6a9d6dedd497c4d76f88f563dbbec511b
│  │  ├─ 6f
│  │  │  └─ 33436896c86bf3baf333bf6d97e8eae30163bd
│  │  ├─ 70
│  │  │  └─ 8fdd3671380a95189ecaabbe4914034f5dbfb0
│  │  ├─ 73
│  │  │  └─ fb810cd986c1e0f30be37fb6a2875628318a0e
│  │  ├─ 74
│  │  │  └─ f3d38c7455ea49de446697c15a2cba9203b92e
│  │  ├─ 81
│  │  │  └─ 93a1d1d9f4bc9805235d6a9859161afa5ec94e
│  │  ├─ 83
│  │  │  ├─ 709942f770740646d0a82d8275a8166e7d630e
│  │  │  └─ a3b3b2e6168f6910330183f2be2b078ca8848b
│  │  ├─ 85
│  │  │  └─ 153c07221e4d6e95cb40c9f1347fb653685491
│  │  ├─ 86
│  │  │  ├─ 19ef59af618d9d91235bde580fcad242e7a5a7
│  │  │  └─ 656256d70b76e5c02336ff83f0b467524962eb
│  │  ├─ 88
│  │  │  ├─ 9dcb2e60ea26c0fb183d352ae8da4e61cdceb2
│  │  │  └─ d353fae485e3e9094c643765a8c5d005bb72cc
│  │  ├─ 8a
│  │  │  └─ b10b448f073dd3e4342446ea6d5bb61355a514
│  │  ├─ 8b
│  │  │  ├─ 0f57b91aeb45c54467e29f983a0893dc83c4d9
│  │  │  └─ 227106881d7879554c3b580f81c6781f138ec7
│  │  ├─ 8d
│  │  │  ├─ 3820e5aff62b55bb0b88369299e83fbf8ffcaf
│  │  │  └─ 49f5ccc9b743a4519f455b55beaf9bc8d5fcc2
│  │  ├─ 91
│  │  │  └─ e50dac7ddeeb932abc33422fce0686710e31ee
│  │  ├─ 92
│  │  │  └─ a815d38f80247f1d692c8e57e977a7a20d55ea
│  │  ├─ 98
│  │  │  └─ b7bf7a6b1167e5015f61c8226ea7bfcb65c21d
│  │  ├─ a3
│  │  │  ├─ 3c7d0323d01ccbb66f294af3ea1f7939a87458
│  │  │  ├─ 7e80edbdf8a2a59d70210a4dbf7bdd9caefadd
│  │  │  └─ 98f4306fa1ae931d209d11e723ce10f0694937
│  │  ├─ a4
│  │  │  ├─ 0d3726bbdf39ae164a4a12f54a484abd5fea88
│  │  │  └─ dbd08e3126a8b41e6f7a7b5ef4190b6a9a7a12
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  ├─ aa7eed4fe46de37ab22f74bd6d5e0b7764110a
│  │  │  └─ e96b03b4871389ae30f5004af952403d046a6a
│  │  ├─ a7
│  │  │  └─ 17f70d8f95edab857cfdd1af0ad7ce340ad347
│  │  ├─ a9
│  │  │  ├─ 3893aca5de5581758513a3328fee8d0389a0aa
│  │  │  └─ 732aec014786ddcec6b003e82d231a00e143f2
│  │  ├─ ab
│  │  │  └─ 91e3d7a2b88965b49a079f2ca09dba4e932f56
│  │  ├─ af
│  │  │  └─ d862684ff406e1bd84be62382c35b65de97bf2
│  │  ├─ b1
│  │  │  └─ 52643edeaabe3c838341e23547bab6feb72e12
│  │  ├─ b5
│  │  │  ├─ 72ca5a05037a221b2877ea86377c9d5cd5dc2c
│  │  │  └─ 9981df1d1265ced2a54be176aa98171898f1bb
│  │  ├─ b8
│  │  │  └─ f1a32017f2d09cca6167ad6dfd944c39046923
│  │  ├─ ba
│  │  │  └─ b873b8ef9bd16c6182304f2d1d1dc02b0b6981
│  │  ├─ bb
│  │  │  └─ 22dee934c6d2e2ea1fc35d255d3b3eba29a1c1
│  │  ├─ bf
│  │  │  └─ 260dab0c470f70430002ba71a9cd13814e5196
│  │  ├─ c0
│  │  │  ├─ 8d73d2524a609b923374a5f2bb83d25956e511
│  │  │  └─ fb3617427d7b999a27f648658bb9ad830ff3e2
│  │  ├─ c2
│  │  │  └─ 6f6a74789dad834582dcf8a3afa407798b4e0c
│  │  ├─ c4
│  │  │  └─ b2eee4b599dc17e32322a104a3081572353302
│  │  ├─ c6
│  │  │  └─ c6f9d118f8a8bd2b2d0c5a9df0d9d89268cdb8
│  │  ├─ cf
│  │  │  └─ 51232d833231e4e440f06a6194806b84a0f00d
│  │  ├─ d2
│  │  │  ├─ cc0ba1c60af9c7f40ecd9ee28bcbfd9f562752
│  │  │  └─ e43bb4b459ae988019ecc90ecb80d46f4e8c79
│  │  ├─ d6
│  │  │  └─ 2e23560c0e66ce7531138b61b14175400b48d6
│  │  ├─ d8
│  │  │  └─ 74a502c9da60a726b78c6bfb02734716807074
│  │  ├─ d9
│  │  │  ├─ 06db2ef683560fbf18758f22b8c7ff3bdc83b1
│  │  │  ├─ 64175cd3c6555a06e82045edc733956a80b717
│  │  │  ├─ e7129296309cb4dd72bf237e6066e38f8c9503
│  │  │  └─ ea4bc37e56ef2d58386d3c6831cfd3b83dca4b
│  │  ├─ dc
│  │  │  └─ 4f2de74d7d55c96df188bd0c3e760fa11b8112
│  │  ├─ e1
│  │  │  └─ 835b3e4a986c2f7ebd8d0369f88572b57b1936
│  │  ├─ e2
│  │  │  └─ 1f618958edfa0542a2939e8a3e8db580d347a5
│  │  ├─ e3
│  │  │  ├─ 6f1d1be4efc6e0e5cc0d560bbd31f5184d9cbc
│  │  │  └─ aabecbcbb810fb646cdf39b5fdf6512cc10373
│  │  ├─ e6
│  │  │  ├─ 5598c22701213edb75407c4aae6d0087e33a2d
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ eb
│  │  │  └─ 9ebdabf9c3fc32d619b18293565669c5180e0e
│  │  ├─ ec
│  │  │  └─ a919a6d341481a8c9b3ac8ec07d4e77138cd98
│  │  ├─ ed
│  │  │  └─ fa2df4d7037d54c5ae6ce50de8b259a1accd3b
│  │  ├─ ee
│  │  │  └─ dba79fb20bf8915a12b897127dfbdc081e03af
│  │  ├─ f1
│  │  │  ├─ 585fd4d3981a55f6ec14aec40978afd2143177
│  │  │  └─ ad6195dfcf81ec35bea5199dac1f5089c9b3c2
│  │  ├─ f5
│  │  │  ├─ 15e0e67799b880cfd2193b81ca1f748e1e4257
│  │  │  └─ d02236fb4cb078ca365bf0c28d590955f1995d
│  │  ├─ f7
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ fc
│  │  │  ├─ 5ae9f0ccc2567c22c9ab57cc835f5067cca390
│  │  │  └─ afd4d1403fda4c191d214d767a53ff270abdb8
│  │  ├─ ff
│  │  │  └─ 4f353b1b2b6d6a5b056acf44a36bf17be3b5d5
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ thumbnail.png
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ emotion1.png
│  │  ├─ emotion2.png
│  │  ├─ emotion3.png
│  │  ├─ emotion4.png
│  │  └─ emotion5.png
│  ├─ components
│  │  ├─ Button.css
│  │  ├─ Button.jsx
│  │  ├─ DiaryItem.css
│  │  ├─ DiaryItem.jsx
│  │  ├─ DiaryList.css
│  │  ├─ DiaryList.jsx
│  │  ├─ Editor.css
│  │  ├─ Editor.jsx
│  │  ├─ EmotionItem.css
│  │  ├─ EmotionItem.jsx
│  │  ├─ Header.css
│  │  ├─ Header.jsx
│  │  ├─ Viewer.css
│  │  └─ Viewer.jsx
│  ├─ hooks
│  │  ├─ useDiary.jsx
│  │  └─ useIsMobile.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Diary.jsx
│  │  ├─ Edit.jsx
│  │  ├─ Home.jsx
│  │  ├─ New.jsx
│  │  └─ Notfound.jsx
│  └─ util
│     ├─ constants.js
│     ├─ get-emotion-image.js
│     └─ get-stringed-date.js
└─ vite.config.js

```