window.__require=function e(t,n,r){function o(a,p){if(!n[a]){if(!t[a]){var c=a.split("/");if(c=c[c.length-1],!t[c]){var s="function"==typeof __require&&__require;if(!p&&s)return s(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return o(t[a][1][e]||e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<r.length;a++)o(r[a]);return o}({Config:[function(e,t,n){"use strict";cc._RF.push(t,"ed916F4ePdLdaae9JZYIxqt","Config"),Object.defineProperty(n,"__esModule",{value:!0}),n.GameConfig=n.Cfg=n.supportedTextLanguage=n.supportedLanguage=n.PRE_DEV=n.envURL=void 0,n.envURL="https://api.dev.game.topasianplatform.com",n.PRE_DEV=!0,n.supportedLanguage=["en","cs","da","de","el","es","es_la","fi","fr","hu","it","nl","no","pl","pt","pt_br","ro","sk","sv","tr","uk_ua","bg","id","ja","ko","ru","th","tzh","vi","zh"],function(e){e[e.default=0]="default",e[e.bg=1]="bg",e[e.cs=2]="cs",e[e.da=3]="da",e[e.de=4]="de",e[e.el=5]="el",e[e.es=6]="es",e[e.es_la=7]="es_la",e[e.fi=8]="fi",e[e.fr=9]="fr",e[e.hu=10]="hu",e[e.it=11]="it",e[e.ms=12]="ms",e[e.nl=13]="nl",e[e.no=14]="no",e[e.pl=15]="pl",e[e.pt=16]="pt",e[e.pt_br=17]="pt_br",e[e.ro=18]="ro",e[e.sk=19]="sk",e[e.sv=20]="sv",e[e.tr=21]="tr",e[e.uk_ua=22]="uk_ua",e[e.en=23]="en",e[e.id=24]="id",e[e.ja=25]="ja",e[e.ko=26]="ko",e[e.ru=27]="ru",e[e.th=28]="th",e[e.tzh=29]="tzh",e[e.vi=30]="vi",e[e.zh=31]="zh"}(n.supportedTextLanguage||(n.supportedTextLanguage={})),n.Cfg={itemSize:cc.v2(101,93),slotSize:cc.v2(5,5),items:[0,1,2,3,4,5,6,7,8,9],columnHeight:336,wildItemID:0,scatterItemID:10,CanvasDesign:cc.v2(540,960),gameCode:"pandora",groupCode:"dadd",brandCode:"doob",playerToken:"test",language:"en",currency:"THB",nativeId:"abc",redirectURL:null,baseEnvURL:n.envURL,getFunTokenURL:n.envURL+"/client/player/fun-mode-token",gameAuthorizeUrl:n.envURL+"/client/player/authorize-game",gameConfigURL:n.envURL+"/pandora/config",gameSpinURL:n.envURL+"/pandora/spin",configURL:n.envURL+"/client/game/info?gameCode=pandora",buyFreeSpinURL:n.envURL+"/client/game/buy-free-spins",totalBetHistoryURL:n.envURL+"/pandora/total-bets",bethistoryURL:n.envURL+"/pandora/bets",SCENE:{GAME_SCENE:"GameScene"},isDisplayWinLine:!1,playAsDemo:!1,isDebug:!1,isDafa:!1,gameVersionStr:"V_1.0.47"},n.GameConfig={spinNormal:{startSwingTime:.1,startSwingDistance:20,timeSpin:.85,timeDelayStartBetweenReels:.15,startAccelerate:4e3,stopAccelerate:3e3,timeSpinToResult:.4,stopToResultAccelerate:3500,maxSpinSpeed:3e3,maxSpinToResultSpeed:2e3,minStopSpeed:1400,reelSwingDistance:10,minSpeedForBlur:500,maxSpeedStopBlur:1e3,timeShakeItems:.7,expandMoveDuration:.2},spinTurbo:{startSwingTime:.1,startSwingDistance:20,timeSpin:.6,timeDelayStartBetweenReels:0,startAccelerate:4500,stopAccelerate:3500,timeSpinToResult:.4,stopToResultAccelerate:4e3,maxSpinSpeed:3500,maxSpinToResultSpeed:2500,minStopSpeed:1800,reelSwingDistance:10,minSpeedForBlur:500,maxSpeedStopBlur:1e3,timeShakeItems:.7,expandMoveDuration:.2},wheelSpin:{startSwingTime:.1,startSwingAngle:5,startAccelerate:700,maxSpinSpeed:1400,stopDelay:4,stopAccelerate:200,minStopSpeed:120,endSwingTime:.3,endSwingAngle:2},newItemCascadeDuration:.25,reelHighlightDuration:1,reelHighlightSpinToResultSpeed:1e3,reelHighlightSpinToResultMinSpeed:500,SCENE:{GAME_SCENE:"GameScene",LOADING_SCENE:"LoadingScene"}},cc._RF.pop()},{}],LocalManager:[function(e,t,n){"use strict";cc._RF.push(t,"5f9020jfVdCXJTc8DwKW6Mj","LocalManager");var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./Config"),p=cc._decorator,c=p.ccclass,s=(p.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.loadTextResources=function(e,t){null==e&&(e=a.Cfg.language);var n=new Promise(function(n){var r="../game_specific"+t+"/resources/"+e+"/text";cc.resources.load(r,function(t,r){if(t)return cc.log("Error loading raw text for lang "+e),void n(null);n(JSON.parse(r.toString()))})});return Promise.all([n])},i([c],t)}(cc.Component));n.default=s,cc._RF.pop()},{"./Config":"Config"}]},{},["Config","LocalManager"]);