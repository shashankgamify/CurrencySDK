window.__require=function t(e,o,n){function i(a,c){if(!o[a]){if(!e[a]){var l=a.split("/");if(l=l[l.length-1],!e[l]){var s="function"==typeof __require&&__require;if(!c&&s)return s(l,!0);if(r)return r(l,!0);throw new Error("Cannot find module '"+a+"'")}a=l}var p=o[a]={exports:{}};e[a][0].call(p.exports,function(t){return i(e[a][1][t]||t)},p,p.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({Draggable:[function(t,e,o){"use strict";cc._RF.push(e,"c0333z0LKBF0bBEKZZgdwh5","Draggable");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,c=a.ccclass,l=a.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clickEvents=null,e.redDot=null,e.notiBG=null,e.max_height=0,e.max_width=0,e.red_dot_pos=null,e.dim_opacity=90,e.dim_duration=3,e._canDrag=!0,e}return i(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.MOUSE_ENTER,this.onMouseEnter,this),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.onMouseLeave,this),this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this),cc.view.getFrameSize(),this.max_width=this.node.parent.width,this.max_height=cc.winSize.height,this.red_dot_pos=this.redDot.getPosition(),this.onMouseLeave()},e.prototype.initialize=function(t,e,o,n){void 0===t&&(t=!0),void 0===e&&(e=90),void 0===o&&(o=3),void 0===n&&(n=null),this._canDrag=t,this.dim_opacity=e,this.dim_duration=o,null!=n&&this.node.setPosition(n)},e.prototype.onMouseEnter=function(){this.node.opacity==this.dim_opacity?this.dimIn():this.unscheduleAllCallbacks()},e.prototype.onMouseLeave=function(){this.scheduleOnce(this.dimOut,this.dim_duration)},e.prototype.onTouchStart=function(t){cc.sys.isMobile&&this.onMouseEnter(),this.startPosition=this.node.position.clone(),this.touchOffset=this.node.parent.convertToNodeSpaceAR(t.getLocation()).sub(this.node.position)},e.prototype.onTouchMove=function(t){if(this._canDrag&&this.startPosition){var e=this.node.parent.convertToNodeSpaceAR(t.getLocation()).sub(this.touchOffset),o=this.node.getContentSize(),n=-this.max_width/2+o.width/2,i=this.max_width/2-o.width/2,r=-this.max_height/2+o.height/2,a=this.max_height/2-o.height/2;e.x=cc.misc.clampf(e.x,n,i),e.y=cc.misc.clampf(e.y,r,a),this.node.position=e,e.x>0?(this.redDot.setPosition(new cc.Vec2(-this.red_dot_pos.x,this.red_dot_pos.y)),this.notiBG.setScale(cc.v2(-1,1))):(this.redDot.setPosition(new cc.Vec2(this.red_dot_pos.x,this.red_dot_pos.y)),this.notiBG.setScale(cc.v2(1,1)))}},e.prototype.onTouchEnd=function(t){if(this._canDrag){cc.sys.platform===cc.sys.MOBILE_BROWSER&&this.onMouseLeave();var e=this.node.parent.convertToNodeSpaceAR(t.getLocation()).sub(this.touchOffset),o=e.x-this.startPosition.x,n=e.y-this.startPosition.y;Math.sqrt(o*o+n*n)<5&&this.clickEvents.emit([]),this.startPosition=null}},e.prototype.dimIn=function(){cc.Tween.stopAllByTarget(this),cc.tween(this.node).to(.3,{opacity:255}).start()},e.prototype.dimOut=function(){cc.Tween.stopAllByTarget(this),cc.tween(this.node).to(.3,{opacity:this.dim_opacity}).start()},r([l(cc.Component.EventHandler)],e.prototype,"clickEvents",void 0),r([l(cc.Node)],e.prototype,"redDot",void 0),r([l(cc.Node)],e.prototype,"notiBG",void 0),r([c],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],PlayerInboxController:[function(t,e,o){"use strict";cc._RF.push(e,"2247die/ZZP/aRrCqPOwcAG","PlayerInboxController");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{l(n.next(t))}catch(e){r(e)}}function c(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,c)}l((n=n.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return l([t,e])}}function l(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(c){r=[6,c],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var l=t("./Draggable"),s=t("./PlayerInbox"),p=t("./PlayerInboxGameItem"),u=cc._decorator,h=u.ccclass,d=u.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inboxNode=null,e.inboxCountLabel=null,e.rewardModePopUp=null,e.playerInboxPopUp=null,e.notification_ske=null,e.claimInProgress=!1,e._inboxData=null,e.hostUrl="",e.localiseText={P_INBOX_PREPAID:"Prepaid",P_INBOX_CASH_DROP:"CashDrop",P_INBOX_REWARD_TITLE:"FREE SPINS REWARDED",P_INBOX_BET_AMOUNT:"Bet Amount",P_INBOX_EXPIRES:"Expires In",P_INBOX_YOUR_REWARD:"YOUR\nREWARD",P_INBOX_SPIN:"SPINS",P_INBOX_PREPAID_MSG:"Stay tuned for thrilling updates!\nCheck back later for new surprises!",P_INBOX_CASH_DROP_MSG:"Stay tuned for thrilling updates!\nCheck back later for new surprises!"},e._webSocketForPlayerInbox=null,e.startDate="",e.endDate="",e.historyParams="",e.claimParams="",e.baseEnvURL="",e.currencyStr="",e.gameInboxHistoryrl="/client/player/inbox-history",e._playerInboxAdaptor=null,e._isAnimPlaying=!1,e._onCloseCB=null,e}return i(e,t),e.prototype.onLoad=function(){this.playerInboxPopUp.node.active=!1,this.rewardModePopUp.active=!1},e.prototype.initialize=function(t,e,o,n,i,r,a,c){this.historyParams=t,this.claimParams=e,this.baseEnvURL=o,this.currentBaseBet=n,this.currencyStr=i,this.currencyConverterRef=a,this._playerInboxAdaptor=c,this.initPlayerInbox(r),this.getPlayerInboxInitData(),this.playerInboxPopUp.initialize(a),this.playerInboxPopUp.setLocalisedText({P_INBOX_PREPAID_MSG:this.localiseText.P_INBOX_PREPAID_MSG,P_INBOX_CASH_DROP_MSG:this.localiseText.P_INBOX_CASH_DROP_MSG}),this.playerInboxPopUp.allTabs[0].getComponentInChildren(cc.Label).string=this.localiseText.P_INBOX_PREPAID,this.playerInboxPopUp.allTabs[1].getComponentInChildren(cc.Label).string=this.localiseText.P_INBOX_CASH_DROP},e.prototype.applyTheme=function(t,e){this.playerInboxPopUp.applyTheme(t,e)},e.prototype.initPlayerInbox=function(t){var e=this;this.hostUrl=t,t&&(this._webSocketForPlayerInbox=new WebSocket(t),this._webSocketForPlayerInbox.onopen=function(){cc.log("Opened WebSocket "+t)},this._webSocketForPlayerInbox.onmessage=function(t){cc.log("WebSocket message: "+t.data),e.scheduleOnce(e.fillDataInPopup,3)},this._webSocketForPlayerInbox.onerror=function(){cc.log("WebSocket error")},this._webSocketForPlayerInbox.onclose=function(){cc.log("WebSocket closed"),e.retryConnection()})},e.prototype.retryConnection=function(){this._webSocketForPlayerInbox=new WebSocket(this.hostUrl)},e.prototype.getLocalisedText=function(){return this.localiseText},e.prototype.setLocalisedText=function(t){this.localiseText=t,cc.log(this.localiseText)},e.prototype.getHistory=function(){var t=this;return new Promise(function(e,o){var n=new Date;t.endDate=n.toISOString();var i=new Date(n.getFullYear(),n.getMonth(),n.getDate());t.startDate=i.toISOString(),t.historyParams.startDate=t.startDate,t.historyParams.endDate=t.endDate,t.getHttp(t.baseEnvURL+t.gameInboxHistoryrl,t.historyParams,function(t,n){if(t)return cc.error(t),void o([n,t]);e([JSON.parse(n),t])})})},e.prototype.onClickInbox=function(){var t=this;0!=this._playerInboxAdaptor.currentBoardState||this._isAnimPlaying||(this._isAnimPlaying=!0,this.notification_ske.setAnimation(0,"action",!1),this.notification_ske.addAnimation(0,"idle",!0),this.notification_ske.setEventListener(function(e,o){"action"==e.animation.name&&"popup"==o.data.name&&t.showPromise()}),this.notification_ske.setCompleteListener(function(e){"action"==e.animation.name&&(t._isAnimPlaying=!1)}))},e.prototype.showPromise=function(){return a(this,void 0,void 0,function(){return c(this,function(){return this.playerInboxPopUp.node.active=!0,this.playerInboxPopUp.show(),this.fillDataInPopup(),[2]})})},e.prototype.fillDataInPopup=function(){return a(this,void 0,void 0,function(){var t,e,o=this;return c(this,function(n){switch(n.label){case 0:return this.playerInboxPopUp.prefabContainer.removeAllChildren(),[4,this.getHistory()];case 1:return t=n.sent(),e=t[0],t[1]?[2]:(this._inboxData=e,this.updateRewardNotificationCount(),this.unschedule(this.updateTime),this.schedule(this.updateTime,1,cc.macro.REPEAT_FOREVER),this.playerInboxPopUp.showPromise(this.currentBaseBet,this.currencyStr,this,e,function(){o.inboxNode.node.active=!0}),[2])}})})},e.prototype.getPlayerInboxInitData=function(){return a(this,void 0,void 0,function(){var t,e;return c(this,function(o){switch(o.label){case 0:return[4,this.getHistory()];case 1:return t=o.sent(),e=t[0],t[1]?[2]:(this._inboxData=e,this.updateRewardNotificationCount(),[2])}})})},e.prototype.updateRewardNotificationCount=function(){var t=0;this._inboxData.data.forEach(function(e){var o=new Date,n=new Date(e.extraInfo.reward.claimBefore).getTime()-o.getTime();0==e.isRead&&n>0&&t++}),this.inboxCountLabel.node.parent.active=t>0,this.inboxCountLabel.string=t.toString()},e.prototype.onClickClaim=function(t,e,o,n){var i=this;return new Promise(function(r,a){if(i.updateBetOptions(t),i.playerInboxPopUp.hide(),i.claimInProgress)a({isSuccess:!1,isResolve:!1});else{i.claimInProgress=!0;var c=new Date;i.endDate=c.toISOString();var l=new Date(c.getFullYear(),c.getMonth(),c.getDate());i.startDate=l.toISOString(),i.postHttp(i.baseEnvURL+e+i.claimParams.playerToken,JSON.stringify(i.claimParams),function(t){if(t)return cc.error(t),void r({isSuccess:!1,isResolve:!0});r({isSuccess:!0,isResolve:!0}),i._playerInboxAdaptor.claimFreeReward(o,n),i.scheduleOnce(function(){i.getPlayerInboxInitData(),i.claimInProgress=!1},1)})}})},e.prototype.updateBetOptions=function(t){this._playerInboxAdaptor.updateBetOptions(t.info.extraInfo.reward.data.betSetting.betLevel,t.info.extraInfo.reward.data.betSetting.betSize)},e.prototype.updateTime=function(){var t=this;this.playerInboxPopUp.prefabContainer.children.forEach(function(e){t.playerInboxPopUp.node.active&&e.getComponent(p.default).checkTime()}),this.updateRewardNotificationCount()},e.prototype.showRewardPopup=function(){var t=this;return new Promise(function(e){t.rewardModePopUp.active=!0,t._onCloseCB=e,t.scheduleOnce(function(){t.onclickCloseRewardPopup()},8)})},e.prototype.onclickCloseRewardPopup=function(){this.rewardModePopUp.active=!1,this.unscheduleAllCallbacks(),this._onCloseCB&&this._onCloseCB()},e.prototype.getHttp=function(t,e,o,n){void 0===n&&(n=null);var i=new XMLHttpRequest,r="";if(e&&Array.isArray(e)&&e.length>0)for(var a=0;a<e.length;a++)r=0==a?r+"?"+e[a][0]+"="+e[a][1]:r+"&"+e[a][0]+"="+e[a][1];else if("object"==typeof e){for(var c in r+="?",e)r+=c+"="+e[c]+"&";r=r.substr(0,r.length-1)}var l=t+r;i.open("GET",l,!0),i.onloadend=function(){4==i.readyState&&200==i.status?o(null,i.responseText):4==i.readyState&&o(i.responseText,null)},i.onerror=function(t){o(t,null)},i.ontimeout=function(t){o(t,null)},n&&i.setRequestHeader("Authorization","Bearer "+n),i.send()},e.prototype.postHttp=function(t,e,o,n,i){void 0===n&&(n="application/json"),void 0===i&&(i=null);var r=new XMLHttpRequest;r.open("POST",t,!0),r.setRequestHeader("Content-type",n),r.onloadend=function(){4==r.readyState&&r.status>=200&&r.status<300?o(null,r.response):4==r.readyState&&o(r.response,null)},r.onerror=function(t){o(t,null)},r.ontimeout=function(t){o(t,null)},i&&r.setRequestHeader("Authorization","Bearer "+i),r.send(e)},r([d(l.default)],e.prototype,"inboxNode",void 0),r([d(cc.Label)],e.prototype,"inboxCountLabel",void 0),r([d(cc.Node)],e.prototype,"rewardModePopUp",void 0),r([d(s.default)],e.prototype,"playerInboxPopUp",void 0),r([d(sp.Skeleton)],e.prototype,"notification_ske",void 0),r([h],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./Draggable":"Draggable","./PlayerInbox":"PlayerInbox","./PlayerInboxGameItem":"PlayerInboxGameItem"}],PlayerInboxGameItem:[function(t,e,o){"use strict";cc._RF.push(e,"e34c0CZXNpAILhMkHX5+Bz0","PlayerInboxGameItem");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./PlayerInbox"),c=cc._decorator,l=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.featureTypeLabel=null,e.betAmountHeader=null,e.betAmount=null,e.betExpireHeader=null,e.expireTimerLabel=null,e.claimButton=null,e.betAmountLabel=null,e.expireText=null,e.yourReward=null,e.pHeader=null,e.pBackgroundSprite=null,e.pSpinBtnSprite=null,e.pSpinBtnLabel=null,e.claimUrl=null,e.isActive=!1,e.info=null,e.featureType=null,e.playerInboxController=null,e.claimBeforeDate=null,e.createdAt=null,e}return i(e,t),e.prototype.init=function(t,e,o,n,i,r,a){void 0===e&&(e=0),void 0===o&&(o=null),this.info=t,this.playerInboxController=n,this.featureType=t.extraInfo.reward.data.gameMode.type,this.featureTypeLabel.string=t.extraInfo.reward.count+" "+n.localiseText.P_INBOX_REWARD_TITLE,this.claimUrl=t.extraInfo.claimUrl;var c=t.extraInfo.reward.data.betSetting.betAmount;this.betAmount.string=r+a.getCreditString(c),this.claimBeforeDate=new Date(this.info.extraInfo.reward.claimBefore),this.createdAt=new Date(this.info.extraInfo.createdAt),this.betAmountLabel.string=n.localiseText.P_INBOX_BET_AMOUNT+":",this.expireText.string=n.localiseText.P_INBOX_EXPIRES+":",this.yourReward.string=n.localiseText.P_INBOX_YOUR_REWARD,this.claimButton.node.children[0].getComponent(cc.Label).string=n.localiseText.P_INBOX_SPIN,this.updateUI(),this.checkTime()},e.prototype.checkTime=function(){var t=new Date,e=this.claimBeforeDate.getTime()-t.getTime();this.isActive=!this.info.isRead&&e>1e3,this.updateUI(),this.expireTimerLabel.string=this.convertMsToTime(e),this.isActive||(this.unschedule(this.checkTime),this.unscheduleAllCallbacks())},e.prototype.updateUI=function(){this.node.opacity=this.isActive?255:152,this.claimButton.interactable=this.isActive},e.prototype.onClaimButtonClicked=function(){var t=this;this.isActive&&this.playerInboxController.onClickClaim(this,this.claimUrl,this.featureType,this.info.extraInfo.reward.count).then(function(e){e.isResolve&&t.node.dispatchEvent(new cc.Event.EventCustom(a.EventInbox.HIDE_POPUP,!1))},function(e){e.isResolve&&t.node.dispatchEvent(new cc.Event.EventCustom(a.EventInbox.HIDE_POPUP,!1))})},e.prototype.convertMsToTime=function(t){var e=Math.floor(t/1e3),o=Math.floor(e/60),n=Math.floor(o/60),i=Math.floor(n/24);return o%=60,n%=24,(e%=60)<0?"00d:00h:00m:00s":this.padTo2Digits(i)+"d:"+this.padTo2Digits(n)+"h:"+this.padTo2Digits(o)+"m:"+this.padTo2Digits(e)+"s"},e.prototype.padTo2Digits=function(t){return t.toString().padStart(2,"0")},e.prototype.applyTheme=function(t,e){this.setLabelColor(this.featureTypeLabel.node,t.ITEM_HEADER,t.ITEM_HEADER_STROKE),this.setLabelColor(this.betAmountHeader.node,t.ITEM_AMOUNT_HEADER,t.ITEM_AMOUNT_HEADER_STROKE),this.setLabelColor(this.betAmount.node,t.ITEM_AMOUNT,t.ITEM_AMOUNT_STROKE),this.setLabelColor(this.betExpireHeader.node,t.ITEM_EXPIRE_HEADER,t.ITEM_EXPIRE_HEADER_STROKE),this.setLabelColor(this.expireTimerLabel.node,t.ITEM_EXPIRE,t.ITEM_EXPIRE_STROKE),this.setLabelColor(this.pSpinBtnLabel,t.ITEM_SPIN_BUTTON,t.ITEM_SPIN_BUTTON_STROKE),this.setLabelColor(this.yourReward.node,t.ITEM_YOUR_REWARD,t.ITEM_YOUR_REWARD_STROKE,t.ITEM_YOUR_REWARD_SHADOW),this.setUITexture(e)},e.prototype.setRewardColor=function(t,e,o){var n=new cc.Color;cc.Color.fromHEX(n,t),this.yourReward.node.color=n;var i=new cc.Color;cc.Color.fromHEX(i,e),this.yourReward.getComponent(cc.LabelOutline).color=i;var r=new cc.Color;cc.Color.fromHEX(r,o),this.yourReward.getComponent(cc.LabelShadow).color=r},e.prototype.setLabelColor=function(t,e,o,n){if(void 0===o&&(o=""),void 0===n&&(n=""),null!=e){var i=new cc.Color;if(cc.Color.fromHEX(i,e),t.color=i,t.getComponent(cc.LabelOutline)&&null!=o)if(""!=o){t.getComponent(cc.LabelOutline).enabled=!0;var r=new cc.Color;cc.Color.fromHEX(r,o),t.getComponent(cc.LabelOutline).color=r}else t.getComponent(cc.LabelOutline).enabled=!1;t.getComponent(cc.LabelShadow)&&null!=n&&(""!=n?(t.getComponent(cc.LabelShadow).enabled=!0,r=new cc.Color,cc.Color.fromHEX(r,n),t.getComponent(cc.LabelShadow).color=r):t.getComponent(cc.LabelShadow).enabled=!1)}},e.prototype.setHeaderLabelColor=function(t,e){var o=new cc.Color;cc.Color.fromHEX(o,t),this.pHeader.node.color=o;var n=new cc.Color;cc.Color.fromHEX(n,e),this.pHeader.getComponent(cc.LabelOutline).color=n},e.prototype.setBetAmountLabelColor=function(t){var e=new cc.Color;cc.Color.fromHEX(e,t),this.betAmount.node.color=e},e.prototype.setBetExpireLabelColor=function(t){var e=new cc.Color;cc.Color.fromHEX(e,t),this.expireTimerLabel.node.color=e},e.prototype.setSpinBtnLabelColor=function(t,e){var o=new cc.Color;cc.Color.fromHEX(o,t),this.pSpinBtnLabel.color=o;var n=new cc.Color;cc.Color.fromHEX(n,e),this.pSpinBtnLabel.getComponent(cc.LabelOutline).color=n},e.prototype.setUITexture=function(t){this.pBackgroundSprite.spriteFrame=new cc.SpriteFrame(t.board),this.pSpinBtnSprite.spriteFrame=new cc.SpriteFrame(t.spinButton)},r([s(cc.Label)],e.prototype,"featureTypeLabel",void 0),r([s(cc.Label)],e.prototype,"betAmountHeader",void 0),r([s(cc.Label)],e.prototype,"betAmount",void 0),r([s(cc.Label)],e.prototype,"betExpireHeader",void 0),r([s(cc.Label)],e.prototype,"expireTimerLabel",void 0),r([s(cc.Button)],e.prototype,"claimButton",void 0),r([s(cc.Label)],e.prototype,"betAmountLabel",void 0),r([s(cc.Label)],e.prototype,"expireText",void 0),r([s(cc.Label)],e.prototype,"yourReward",void 0),r([s(cc.Label)],e.prototype,"pHeader",void 0),r([s(cc.Sprite)],e.prototype,"pBackgroundSprite",void 0),r([s(cc.Sprite)],e.prototype,"pSpinBtnSprite",void 0),r([s(cc.Node)],e.prototype,"pSpinBtnLabel",void 0),r([l],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./PlayerInbox":"PlayerInbox"}],PlayerInbox:[function(t,e,o){"use strict";cc._RF.push(e,"9ab024IZm9PX6LY2u7Drc60","PlayerInbox");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{l(n.next(t))}catch(e){r(e)}}function c(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,c)}l((n=n.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return l([t,e])}}function l(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(c){r=[6,c],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0}),o.EventInbox=void 0;var l,s=t("./PlayerInboxGameItem");(function(t){t.HIDE_POPUP="hide_popup"})(l=o.EventInbox||(o.EventInbox={}));var p=cc._decorator,u=p.ccclass,h=p.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.allTabs=[],e.allContainers=[],e.gameItemPrefab=null,e.prefabContainer=null,e.msgNode=null,e.cashDropMsgNode=null,e.activeSF=null,e.inActiveSF=null,e.pBackgroundSprite=null,e.hideCallback=null,e.popupSize=null,e}return i(e,t),e.prototype.initialize=function(t){var e=this;this.currencyConverterRef=t,this.inactiveTabColor=new cc.Color(52,51,51),this.activeTabColor=cc.Color.WHITE,this.inactiveStrokeTabColor=null,this.activeStrokeTabColor=null,this.popupSize=cc.size(504,469),this.node.on(l.HIDE_POPUP,function(){e.hide()})},e.prototype.show=function(){var t=this;cc.Tween.stopAllByTarget(this.node),this.node.opacity=0,this.node.active=!0,cc.tween(this.node).to(.4,{opacity:255}).call(function(){t.node.opacity=255,t.onclickTab(null,"0")}).start()},e.prototype.showPromise=function(t,e,o,n,i){var r;return a(this,void 0,void 0,function(){var a=this;return c(this,function(){return this.hideCallback=i,null===(r=n.data)||void 0===r||r.forEach(function(n,i){var r=cc.instantiate(a.gameItemPrefab),c=r.getComponent(s.default);c.init(n,i,a,o,t,e,a.currencyConverterRef),c.applyTheme(a.themeTextData,a.themeSpriteData),r.parent=a.prefabContainer}),this.msgNode.active=n.data.length<=0,[2]})})},e.prototype.hide=function(){var t=this;cc.Tween.stopAllByTarget(this),this.node.opacity=255,cc.tween(this.node).to(.4,{opacity:0}).call(function(){t.hideCallback&&t.hideCallback(),t.node.active=!1}).start()},e.prototype.onclickTab=function(t,e){var o=this,n=parseInt(e);this.allTabs.forEach(function(t,e){var i=t.getChildByName("text");e==n?(i.color=o.activeTabColor,null!=o.activeStrokeTabColor&&null!=o.activeStrokeTabColor?(i.getComponent(cc.LabelOutline).enabled=!0,i.getComponent(cc.LabelOutline).color=o.activeStrokeTabColor):i.getComponent(cc.LabelOutline).enabled=!1,t.getComponent(cc.Sprite).spriteFrame=o.activeSF,t.setSiblingIndex(t.parent.childrenCount-1),i.scale=1):(i.color=o.inactiveTabColor,null!=o.inactiveStrokeTabColor&&null!=o.inactiveStrokeTabColor?(i.getComponent(cc.LabelOutline).enabled=!0,i.getComponent(cc.LabelOutline).color=o.inactiveStrokeTabColor):i.getComponent(cc.LabelOutline).enabled=!1,t.getComponent(cc.Sprite).spriteFrame=o.inActiveSF,i.scale=.8)}),this.allContainers.forEach(function(t,e){t.active=e==n})},e.prototype.setLocalisedText=function(t){this.msgNode.getComponent(cc.Label).string=t.P_INBOX_PREPAID_MSG,this.cashDropMsgNode.getComponent(cc.Label).string=t.P_INBOX_CASH_DROP_MSG},e.prototype.applyTheme=function(t,e){this.themeTextData=t,this.themeSpriteData=e,this.setUITexture()},e.prototype.setUITexture=function(){if(this.pBackgroundSprite.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(this.themeSpriteData.layer),this.pBackgroundSprite.height=this.popupSize.height,this.pBackgroundSprite.width=this.popupSize.width,this.activeSF=new cc.SpriteFrame(this.themeSpriteData.tabPrepaid),this.inActiveSF=new cc.SpriteFrame(this.themeSpriteData.tabCash),null!=this.themeTextData.ITEM_CASHDROP){var t=new cc.Color;cc.Color.fromHEX(t,this.themeTextData.ITEM_CASHDROP),this.inactiveTabColor=t}null!=this.themeTextData.ITEM_CASHDROP_STROKE&&(t=new cc.Color,cc.Color.fromHEX(t,this.themeTextData.ITEM_CASHDROP_STROKE),this.inactiveStrokeTabColor=t),null!=this.themeTextData.ITEM_FREESPIN&&(t=new cc.Color,cc.Color.fromHEX(t,this.themeTextData.ITEM_FREESPIN),this.activeTabColor=t),null!=this.themeTextData.ITEM_FREESPIN_STROKE&&(t=new cc.Color,cc.Color.fromHEX(t,this.themeTextData.ITEM_FREESPIN_STROKE),this.activeStrokeTabColor=t)},r([h(cc.Node)],e.prototype,"allTabs",void 0),r([h(cc.Node)],e.prototype,"allContainers",void 0),r([h(cc.Prefab)],e.prototype,"gameItemPrefab",void 0),r([h(cc.Node)],e.prototype,"prefabContainer",void 0),r([h(cc.Node)],e.prototype,"msgNode",void 0),r([h(cc.Node)],e.prototype,"cashDropMsgNode",void 0),r([h(cc.SpriteFrame)],e.prototype,"activeSF",void 0),r([h(cc.SpriteFrame)],e.prototype,"inActiveSF",void 0),r([h(cc.Node)],e.prototype,"pBackgroundSprite",void 0),r([u],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./PlayerInboxGameItem":"PlayerInboxGameItem"}]},{},["Draggable","PlayerInbox","PlayerInboxController","PlayerInboxGameItem"]);