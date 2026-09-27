
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer || {};

/**
 * Behavior generated from Online Player
 */
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer = class OnlinePlayer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FirstFrame = true;
    this._behaviorData.Position = behaviorData.Position !== undefined ? behaviorData.Position : true;
    this._behaviorData.Angle = behaviorData.Angle !== undefined ? behaviorData.Angle : true;
    this._behaviorData.ZOrder = behaviorData.ZOrder !== undefined ? behaviorData.ZOrder : false;
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : false;
    this._behaviorData.Frame = behaviorData.Frame !== undefined ? behaviorData.Frame : false;
    this._behaviorData.Flip = behaviorData.Flip !== undefined ? behaviorData.Flip : false;
    this._behaviorData.UserName = behaviorData.UserName !== undefined ? behaviorData.UserName : false;
    this._behaviorData.PositionInterpolation = behaviorData.PositionInterpolation !== undefined ? behaviorData.PositionInterpolation : false;
    this._behaviorData.Id = "";
    this._behaviorData.Active = true;
    this._behaviorData.SharedString = "";
    this._behaviorData.SharedStringClear = false;
    this._behaviorData.GDUserName = "";
    this._behaviorData.ConnectedFrameCounter = Number("0") || 0;
    this._behaviorData.DisconnectedFrameCounter = Number("0") || 0;
    this._behaviorData.SentReceivedJustNow = false;
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = behaviorOverriding.FirstFrame;
    if (behaviorOverriding.Position !== undefined)
      this._behaviorData.Position = behaviorOverriding.Position;
    if (behaviorOverriding.Angle !== undefined)
      this._behaviorData.Angle = behaviorOverriding.Angle;
    if (behaviorOverriding.ZOrder !== undefined)
      this._behaviorData.ZOrder = behaviorOverriding.ZOrder;
    if (behaviorOverriding.Animation !== undefined)
      this._behaviorData.Animation = behaviorOverriding.Animation;
    if (behaviorOverriding.Frame !== undefined)
      this._behaviorData.Frame = behaviorOverriding.Frame;
    if (behaviorOverriding.Flip !== undefined)
      this._behaviorData.Flip = behaviorOverriding.Flip;
    if (behaviorOverriding.UserName !== undefined)
      this._behaviorData.UserName = behaviorOverriding.UserName;
    if (behaviorOverriding.PositionInterpolation !== undefined)
      this._behaviorData.PositionInterpolation = behaviorOverriding.PositionInterpolation;
    if (behaviorOverriding.Id !== undefined)
      this._behaviorData.Id = behaviorOverriding.Id;
    if (behaviorOverriding.Active !== undefined)
      this._behaviorData.Active = behaviorOverriding.Active;
    if (behaviorOverriding.SharedString !== undefined)
      this._behaviorData.SharedString = behaviorOverriding.SharedString;
    if (behaviorOverriding.SharedStringClear !== undefined)
      this._behaviorData.SharedStringClear = behaviorOverriding.SharedStringClear;
    if (behaviorOverriding.GDUserName !== undefined)
      this._behaviorData.GDUserName = behaviorOverriding.GDUserName;
    if (behaviorOverriding.ConnectedFrameCounter !== undefined)
      this._behaviorData.ConnectedFrameCounter = behaviorOverriding.ConnectedFrameCounter;
    if (behaviorOverriding.DisconnectedFrameCounter !== undefined)
      this._behaviorData.DisconnectedFrameCounter = behaviorOverriding.DisconnectedFrameCounter;
    if (behaviorOverriding.SentReceivedJustNow !== undefined)
      this._behaviorData.SentReceivedJustNow = behaviorOverriding.SentReceivedJustNow;
    if (behaviorOverriding.Tween !== undefined)
      this._behaviorData.Tween = behaviorOverriding.Tween;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    FirstFrame: this._behaviorData.FirstFrame,
    Position: this._behaviorData.Position,
    Angle: this._behaviorData.Angle,
    ZOrder: this._behaviorData.ZOrder,
    Animation: this._behaviorData.Animation,
    Frame: this._behaviorData.Frame,
    Flip: this._behaviorData.Flip,
    UserName: this._behaviorData.UserName,
    PositionInterpolation: this._behaviorData.PositionInterpolation,
    Id: this._behaviorData.Id,
    Active: this._behaviorData.Active,
    SharedString: this._behaviorData.SharedString,
    SharedStringClear: this._behaviorData.SharedStringClear,
    GDUserName: this._behaviorData.GDUserName,
    ConnectedFrameCounter: this._behaviorData.ConnectedFrameCounter,
    DisconnectedFrameCounter: this._behaviorData.DisconnectedFrameCounter,
    SentReceivedJustNow: this._behaviorData.SentReceivedJustNow,
    Tween: this._behaviorData.Tween,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.Position !== undefined)
      this._behaviorData.Position = networkSyncData.props.Position;
    if (networkSyncData.props.Angle !== undefined)
      this._behaviorData.Angle = networkSyncData.props.Angle;
    if (networkSyncData.props.ZOrder !== undefined)
      this._behaviorData.ZOrder = networkSyncData.props.ZOrder;
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.Frame !== undefined)
      this._behaviorData.Frame = networkSyncData.props.Frame;
    if (networkSyncData.props.Flip !== undefined)
      this._behaviorData.Flip = networkSyncData.props.Flip;
    if (networkSyncData.props.UserName !== undefined)
      this._behaviorData.UserName = networkSyncData.props.UserName;
    if (networkSyncData.props.PositionInterpolation !== undefined)
      this._behaviorData.PositionInterpolation = networkSyncData.props.PositionInterpolation;
    if (networkSyncData.props.Id !== undefined)
      this._behaviorData.Id = networkSyncData.props.Id;
    if (networkSyncData.props.Active !== undefined)
      this._behaviorData.Active = networkSyncData.props.Active;
    if (networkSyncData.props.SharedString !== undefined)
      this._behaviorData.SharedString = networkSyncData.props.SharedString;
    if (networkSyncData.props.SharedStringClear !== undefined)
      this._behaviorData.SharedStringClear = networkSyncData.props.SharedStringClear;
    if (networkSyncData.props.GDUserName !== undefined)
      this._behaviorData.GDUserName = networkSyncData.props.GDUserName;
    if (networkSyncData.props.ConnectedFrameCounter !== undefined)
      this._behaviorData.ConnectedFrameCounter = networkSyncData.props.ConnectedFrameCounter;
    if (networkSyncData.props.DisconnectedFrameCounter !== undefined)
      this._behaviorData.DisconnectedFrameCounter = networkSyncData.props.DisconnectedFrameCounter;
    if (networkSyncData.props.SentReceivedJustNow !== undefined)
      this._behaviorData.SentReceivedJustNow = networkSyncData.props.SentReceivedJustNow;
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
  }

  // Properties:
  
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getPosition() {
    return this._behaviorData.Position !== undefined ? this._behaviorData.Position : true;
  }
  _setPosition(newValue) {
    this._behaviorData.Position = newValue;
  }
  _togglePosition() {
    this._setPosition(!this._getPosition());
  }
  _getAngle() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : true;
  }
  _setAngle(newValue) {
    this._behaviorData.Angle = newValue;
  }
  _toggleAngle() {
    this._setAngle(!this._getAngle());
  }
  _getZOrder() {
    return this._behaviorData.ZOrder !== undefined ? this._behaviorData.ZOrder : false;
  }
  _setZOrder(newValue) {
    this._behaviorData.ZOrder = newValue;
  }
  _toggleZOrder() {
    this._setZOrder(!this._getZOrder());
  }
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : false;
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _toggleAnimation() {
    this._setAnimation(!this._getAnimation());
  }
  _getFrame() {
    return this._behaviorData.Frame !== undefined ? this._behaviorData.Frame : false;
  }
  _setFrame(newValue) {
    this._behaviorData.Frame = newValue;
  }
  _toggleFrame() {
    this._setFrame(!this._getFrame());
  }
  _getFlip() {
    return this._behaviorData.Flip !== undefined ? this._behaviorData.Flip : false;
  }
  _setFlip(newValue) {
    this._behaviorData.Flip = newValue;
  }
  _toggleFlip() {
    this._setFlip(!this._getFlip());
  }
  _getUserName() {
    return this._behaviorData.UserName !== undefined ? this._behaviorData.UserName : false;
  }
  _setUserName(newValue) {
    this._behaviorData.UserName = newValue;
  }
  _toggleUserName() {
    this._setUserName(!this._getUserName());
  }
  _getPositionInterpolation() {
    return this._behaviorData.PositionInterpolation !== undefined ? this._behaviorData.PositionInterpolation : false;
  }
  _setPositionInterpolation(newValue) {
    this._behaviorData.PositionInterpolation = newValue;
  }
  _togglePositionInterpolation() {
    this._setPositionInterpolation(!this._getPositionInterpolation());
  }
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getActive() {
    return this._behaviorData.Active !== undefined ? this._behaviorData.Active : true;
  }
  _setActive(newValue) {
    this._behaviorData.Active = newValue;
  }
  _toggleActive() {
    this._setActive(!this._getActive());
  }
  _getSharedString() {
    return this._behaviorData.SharedString !== undefined ? this._behaviorData.SharedString : "";
  }
  _setSharedString(newValue) {
    this._behaviorData.SharedString = newValue;
  }
  _getSharedStringClear() {
    return this._behaviorData.SharedStringClear !== undefined ? this._behaviorData.SharedStringClear : false;
  }
  _setSharedStringClear(newValue) {
    this._behaviorData.SharedStringClear = newValue;
  }
  _toggleSharedStringClear() {
    this._setSharedStringClear(!this._getSharedStringClear());
  }
  _getGDUserName() {
    return this._behaviorData.GDUserName !== undefined ? this._behaviorData.GDUserName : "";
  }
  _setGDUserName(newValue) {
    this._behaviorData.GDUserName = newValue;
  }
  _getConnectedFrameCounter() {
    return this._behaviorData.ConnectedFrameCounter !== undefined ? this._behaviorData.ConnectedFrameCounter : Number("0") || 0;
  }
  _setConnectedFrameCounter(newValue) {
    this._behaviorData.ConnectedFrameCounter = newValue;
  }
  _getDisconnectedFrameCounter() {
    return this._behaviorData.DisconnectedFrameCounter !== undefined ? this._behaviorData.DisconnectedFrameCounter : Number("0") || 0;
  }
  _setDisconnectedFrameCounter(newValue) {
    this._behaviorData.DisconnectedFrameCounter = newValue;
  }
  _getSentReceivedJustNow() {
    return this._behaviorData.SentReceivedJustNow !== undefined ? this._behaviorData.SentReceivedJustNow : false;
  }
  _setSentReceivedJustNow(newValue) {
    this._behaviorData.SentReceivedJustNow = newValue;
  }
  _toggleSentReceivedJustNow() {
    this._setSentReceivedJustNow(!this._getSentReceivedJustNow());
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
}

/**
 * Shared data generated from Online Player
 */
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.SharedData = class OnlinePlayerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData = new gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.SharedData(
      initialData
    );
  }
  return instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData;
}

// Methods:
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.userFunc0x224ab38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function _0x4ac8(_0x47295e,_0x285226){const _0x1e1637=_0x1e16();return _0x4ac8=function(_0x4ac868,_0x1f0d2f){_0x4ac868=_0x4ac868-0x1d0;let _0x305d29=_0x1e1637[_0x4ac868];return _0x305d29;},_0x4ac8(_0x47295e,_0x285226);}function _0x1e16(){const _0x259387=['addObjectPositionTween2','setY','8TgrPln','parse','setRotationX','OnlinePlayer','createObject','getZ','RotationX','_getAnimation','333356YBNlPL','Flip','ZOrder','Players','Rejected','_getFirstFrame','error','Tween','45642dfOyYx','SharedString','addObjectRotationYTween','Host','_OnlineMultiplayerPositionTween','SetFlip','has','9vMfGsp','_getPositionInterpolation','LastReceivedTime','Do\x20not\x20create\x20more\x20than\x20one!','playerAuthentication','RotationY','getName','set','Frame','658965DCLbUl','isFlippedX','_OnlineMultiplayer','27zXFbnf','setAnimationFrame','readyState','Type','close','_getActive','Data','delete','setZ','_setFirstFrame','deleteFromScene','879656iiTeiO','_getUserName','warn','getZOrder','removeTween','addObjectPositionZTween2','_OnlineMultiplayerTimer','_OnlineMultiplayerPositionZTween','addObjectRotationXTween','name','_getConnectedFrameCounter','_OnlineMultiplayerRotationXTween','message','Error','getAngle','flipY','flipX','exists','properties','evtTools','GetFlipNum','common','getLayer','Message','setZOrder','wss://ws.pandako.mydns.jp/','setX','resetTimer','Log','Shared\x20string\x20exceeds\x20','182yACQNd','SetSharedString','length','_OnlineMultiplayerAngleTween','Animation','send','roundTo','{\x22Type\x22:\x22Connect\x22,\x20\x22Game\x22:\x22','_OnlineMultiplayerRotationYTween','getUsername','now','setRotationY','getBehavior','Random','linear','_setGDUserName','get','_getFrame','UserName','_getFlip','Angle','getAnimationIndex','6350004fWqzMO','getTimerElapsedTimeInSeconds','_setConnectedFrameCounter','The\x20extension\x20was\x20rejected\x20by\x20the\x20server\x20because\x20it\x20is\x20an\x20old\x20version!','getGameData','getAnimationFrame','_setId','Received\x20unexpected\x20data!','Update','3971niZaSc','72994XQrqgZ','addEventListener','_setDisconnectedFrameCounter','isFlippedY','getDefaultZOrder','_getAngle','3490KQvpxJ','\x20characters!','_getDisconnectedFrameCounter','_setSentReceivedJustNow','\x22,\x20\x22ObjectName\x22:\x20\x22','\x22,\x20\x22Ver\x22:20}','_getPosition'];_0x1e16=function(){return _0x259387;};return _0x1e16();}(function(_0x405249,_0x2bf6ce){const _0x40150f=_0x4ac8,_0x24da50=_0x405249();while(!![]){try{const _0x493ca9=parseInt(_0x40150f(0x1d7))/0x1*(parseInt(_0x40150f(0x1e6))/0x2)+-parseInt(_0x40150f(0x1fd))/0x3*(parseInt(_0x40150f(0x1ee))/0x4)+-parseInt(_0x40150f(0x206))/0x5+-parseInt(_0x40150f(0x1f6))/0x6*(-parseInt(_0x40150f(0x232))/0x7)+parseInt(_0x40150f(0x214))/0x8*(-parseInt(_0x40150f(0x209))/0x9)+parseInt(_0x40150f(0x1dd))/0xa*(-parseInt(_0x40150f(0x1d6))/0xb)+parseInt(_0x40150f(0x248))/0xc;if(_0x493ca9===_0x2bf6ce)break;else _0x24da50['push'](_0x24da50['shift']());}catch(_0x26ff8a){_0x24da50['push'](_0x24da50['shift']());}}}(_0x1e16,0x2c407),((()=>{const _0x304ed4=_0x4ac8,_0x2ec2ba=objects[0x0],_0x4c0347=_0x2ec2ba[_0x304ed4(0x23e)]('OnlinePlayer');if(_0x4c0347[_0x304ed4(0x20e)]()){if(_0x4c0347[_0x304ed4(0x1f3)]()){_0x4c0347[_0x304ed4(0x212)](![]);if(runtimeScene['getInstancesCountOnScene'](_0x2ec2ba['name'])>0x1){_0x2ec2ba['deleteFromScene'](runtimeScene),console[_0x304ed4(0x216)](_0x304ed4(0x200));return;}if(gdjs[_0x304ed4(0x208)]){_0x2ec2ba[_0x304ed4(0x213)](runtimeScene),console[_0x304ed4(0x216)](_0x304ed4(0x200));return;}gdjs['_OnlineMultiplayer']=new Map(),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)]('WS',new WebSocket(_0x304ed4(0x22d))),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)]('Log',[]),gdjs[_0x304ed4(0x208)]['set']('Id',''),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x22b),{}),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x23f),-0x1),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x1f9),''),gdjs['_OnlineMultiplayer'][_0x304ed4(0x204)]('T',12.3/0x7b),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)]('L',0x1e078/0x7b),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x1ff),Date[_0x304ed4(0x23c)]()),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x1f1),new Map()),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x228),(_0x416694,_0x29446e)=>{let _0x168875=0x0;return _0x168875+=_0x416694?0x1:0x0,_0x168875+=_0x29446e?0x2:0x0,_0x168875;}),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)]('SetFlip',(_0x2e6f34,_0x23d126)=>{const _0x1230c9=_0x304ed4;_0x2e6f34[_0x1230c9(0x224)](![]),_0x2e6f34[_0x1230c9(0x223)](![]),(_0x23d126==0x1||_0x23d126==0x3)&&_0x2e6f34['flipX'](!![]),(_0x23d126==0x2||_0x23d126==0x3)&&_0x2e6f34[_0x1230c9(0x223)](!![]);}),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x221),![]);const _0xac696c=gdjs['_OnlineMultiplayer'][_0x304ed4(0x242)]('WS');_0xac696c['addEventListener']('open',_0x1faa4e=>{const _0x5bf761=_0x304ed4;_0xac696c[_0x5bf761(0x237)](_0x5bf761(0x239)+runtimeScene['getGame']()[_0x5bf761(0x1d1)]()[_0x5bf761(0x226)][_0x5bf761(0x21d)]+'\x22,\x20\x22Scene\x22:\x20\x22'+runtimeScene[_0x5bf761(0x203)]()+_0x5bf761(0x1e1)+_0x2ec2ba[_0x5bf761(0x21d)]+_0x5bf761(0x1e2));}),_0xac696c[_0x304ed4(0x1d8)](_0x304ed4(0x220),_0x46d11f=>{const _0x546513=_0x304ed4,_0x163eeb=JSON[_0x546513(0x1e7)](_0x46d11f['data']),_0x4dea41=gdjs[_0x546513(0x208)][_0x546513(0x242)](_0x546513(0x230));if(_0x163eeb['Type']=='Connected')gdjs['_OnlineMultiplayer'][_0x546513(0x204)]('Id',_0x163eeb['Id']),_0x4c0347[_0x546513(0x1d3)](_0x163eeb['Id']);else _0x163eeb[_0x546513(0x20c)]==_0x546513(0x1f2)?(console[_0x546513(0x216)](_0x546513(0x1d0)),_0xac696c[_0x546513(0x20d)](),gdjs['_OnlineMultiplayer'][_0x546513(0x204)](_0x546513(0x221),!![])):_0x4dea41['push'](_0x163eeb);gdjs['_OnlineMultiplayer'][_0x546513(0x204)]('LastReceivedTime',Date['now']());}),_0xac696c[_0x304ed4(0x1d8)](_0x304ed4(0x1f4),_0x54610b=>{const _0xfaadb7=_0x304ed4;gdjs[_0xfaadb7(0x208)][_0xfaadb7(0x204)](_0xfaadb7(0x221),!![]);}),_0xac696c[_0x304ed4(0x1d8)](_0x304ed4(0x20d),_0x28da1f=>{}),_0x2ec2ba['resetTimer'](_0x304ed4(0x21a));}if(!gdjs[_0x304ed4(0x208)]){_0x4c0347['_setDisconnectedFrameCounter'](_0x4c0347[_0x304ed4(0x1df)]()+0x1);return;}const _0x46b80f=gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)]('WS');let _0x3ecf89=gdjs[_0x304ed4(0x208)]['get'](_0x304ed4(0x230));const _0x1bafbb=gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)](_0x304ed4(0x1f1)),_0x5630c4=new Map();_0x4c0347['_setSentReceivedJustNow'](![]);for(let [_0xc04bf9,_0x209b0f]of _0x1bafbb){_0x209b0f[_0x304ed4(0x23e)](_0x304ed4(0x1e9))['_setSentReceivedJustNow'](![]);}if(_0x46b80f[_0x304ed4(0x20b)]==0x0)return;else{if(_0x46b80f[_0x304ed4(0x20b)]>=0x2){_0x4c0347['_setDisconnectedFrameCounter'](_0x4c0347[_0x304ed4(0x1df)]()+0x1);_0x4c0347[_0x304ed4(0x1df)]()>0x1&&(gdjs[_0x304ed4(0x208)]=undefined);return;}else{if(_0x4c0347['_getId']()==='')return;}}_0x4c0347[_0x304ed4(0x24a)](_0x4c0347[_0x304ed4(0x21e)]()+0x1);if(gdjs[_0x304ed4(0x208)]['get'](_0x304ed4(0x1ff))+0x1388<Date['now']()){_0x46b80f['close']();return;}for(const _0x4e6c42 of _0x3ecf89){if(_0x4e6c42[_0x304ed4(0x20c)]==_0x304ed4(0x1d5)){gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x23f),_0x4e6c42[_0x304ed4(0x23f)]),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)]('Host',_0x4e6c42[_0x304ed4(0x1f9)]);for(const _0x1da312 of _0x4e6c42[_0x304ed4(0x20f)]){_0x5630c4[_0x304ed4(0x204)](_0x1da312['Id'],'');if(gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)]('Id')!==_0x1da312['Id']){let _0x2f0982;_0x1bafbb[_0x304ed4(0x1fc)](_0x1da312['Id'])?_0x2f0982=_0x1bafbb[_0x304ed4(0x242)](_0x1da312['Id']):(_0x2f0982=runtimeScene[_0x304ed4(0x1ea)](_0x1da312['ObjectName']),_0x2f0982[_0x304ed4(0x23e)]('OnlinePlayer')['_setActive'](![]),_0x2f0982[_0x304ed4(0x23e)]('OnlinePlayer')['_setId'](_0x1da312['Id']),_0x2f0982[_0x304ed4(0x22c)](runtimeScene[_0x304ed4(0x22a)]('')[_0x304ed4(0x1db)]()),_0x1bafbb[_0x304ed4(0x204)](_0x1da312['Id'],_0x2f0982));_0x2f0982[_0x304ed4(0x23e)](_0x304ed4(0x1e9))[_0x304ed4(0x1e0)](!![]);if(_0x1da312['X']!==undefined){if(_0x2f0982['getBehavior']('OnlinePlayer')['_getPositionInterpolation']()){const _0x1aa0df=_0x2f0982[_0x304ed4(0x23e)]('Tween');_0x1aa0df[_0x304ed4(0x225)](_0x304ed4(0x1fa))&&_0x1aa0df[_0x304ed4(0x218)](_0x304ed4(0x1fa)),_0x1aa0df[_0x304ed4(0x1e4)](_0x304ed4(0x1fa),_0x1da312['X'],_0x1da312['Y'],_0x304ed4(0x240),gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)]('T'),![]);}else _0x2f0982[_0x304ed4(0x22e)](_0x1da312['X']),_0x2f0982[_0x304ed4(0x1e5)](_0x1da312['Y']);}if(_0x1da312['Z']!==undefined){if(_0x2f0982['getBehavior']('OnlinePlayer')[_0x304ed4(0x1fe)]()){const _0x190438=_0x2f0982[_0x304ed4(0x23e)](_0x304ed4(0x1f5));_0x190438[_0x304ed4(0x225)](_0x304ed4(0x21b))&&_0x190438[_0x304ed4(0x218)]('_OnlineMultiplayerPositionZTween'),_0x190438[_0x304ed4(0x219)](null,_0x304ed4(0x21b),_0x1da312['Z'],_0x304ed4(0x240),gdjs[_0x304ed4(0x208)]['get']('T'),![]);}else _0x2f0982[_0x304ed4(0x211)](_0x1da312['Z']);}if(_0x1da312[_0x304ed4(0x246)]!==undefined){if(_0x2f0982[_0x304ed4(0x23e)]('OnlinePlayer')[_0x304ed4(0x1fe)]()){const _0x23c9e7=_0x2f0982['getBehavior'](_0x304ed4(0x1f5));_0x23c9e7['exists']('_OnlineMultiplayerAngleTween')&&_0x23c9e7['removeTween'](_0x304ed4(0x235)),_0x23c9e7['addObjectAngleTween2'](_0x304ed4(0x235),_0x1da312[_0x304ed4(0x246)],_0x304ed4(0x240),gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)]('T'),![]);}else _0x2f0982['setAngle'](_0x1da312['Angle']);}if(_0x1da312[_0x304ed4(0x1ec)]!==undefined){if(_0x2f0982[_0x304ed4(0x23e)](_0x304ed4(0x1e9))[_0x304ed4(0x1fe)]()){const _0x2e4fd8=_0x2f0982[_0x304ed4(0x23e)](_0x304ed4(0x1f5));_0x2e4fd8[_0x304ed4(0x225)](_0x304ed4(0x21f))&&(_0x2e4fd8[_0x304ed4(0x218)]('_OnlineMultiplayerRotationXTween'),_0x2e4fd8['removeTween'](_0x304ed4(0x23a))),_0x2e4fd8[_0x304ed4(0x1f8)](null,_0x304ed4(0x23a),_0x1da312['RotationY'],_0x304ed4(0x240),gdjs['_OnlineMultiplayer'][_0x304ed4(0x242)]('T'),![]),_0x2e4fd8[_0x304ed4(0x21c)](null,_0x304ed4(0x21f),_0x1da312[_0x304ed4(0x1ec)],_0x304ed4(0x240),gdjs[_0x304ed4(0x208)]['get']('T'),![]);}else _0x2f0982[_0x304ed4(0x23d)](_0x1da312[_0x304ed4(0x202)]),_0x2f0982[_0x304ed4(0x1e8)](_0x1da312['RotationX']);}_0x1da312[_0x304ed4(0x1f0)]!==undefined&&_0x2f0982[_0x304ed4(0x22c)](_0x1da312[_0x304ed4(0x1f0)]),_0x1da312[_0x304ed4(0x236)]!==undefined&&_0x2f0982['setAnimationIndex'](_0x1da312[_0x304ed4(0x236)]),_0x1da312[_0x304ed4(0x205)]!==undefined&&_0x2f0982[_0x304ed4(0x20a)](_0x1da312[_0x304ed4(0x205)]),_0x1da312[_0x304ed4(0x1ef)]!==undefined&&gdjs['_OnlineMultiplayer']['get'](_0x304ed4(0x1fb))(_0x2f0982,_0x1da312['Flip']),_0x1da312[_0x304ed4(0x244)]!==undefined&&_0x2f0982['getBehavior'](_0x304ed4(0x1e9))['_setGDUserName'](_0x1da312[_0x304ed4(0x244)]),_0x1da312[_0x304ed4(0x1f7)]!==undefined&&_0x2f0982[_0x304ed4(0x23e)](_0x304ed4(0x1e9))[_0x304ed4(0x233)](_0x1da312['SharedString']);}}}else console[_0x304ed4(0x216)](_0x304ed4(0x1d4));}if(_0x3ecf89['length']>0x0)for(let [_0x3468d5,_0x50e1f7]of _0x1bafbb){!_0x5630c4['has'](_0x3468d5)&&_0x1bafbb[_0x304ed4(0x210)](_0x3468d5);}gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x230),[]);if(gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)]('Id')=='')return;if(_0x2ec2ba[_0x304ed4(0x249)](_0x304ed4(0x21a))<gdjs[_0x304ed4(0x208)]['get']('T'))return;_0x2ec2ba[_0x304ed4(0x22f)](_0x304ed4(0x21a));const _0x3245d7=gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)](_0x304ed4(0x22b));_0x4c0347[_0x304ed4(0x1e3)]()&&(_0x3245d7['X']=gdjs['evtTools'][_0x304ed4(0x229)][_0x304ed4(0x238)](_0x2ec2ba['getX'](),0x4),_0x3245d7['Y']=gdjs[_0x304ed4(0x227)][_0x304ed4(0x229)][_0x304ed4(0x238)](_0x2ec2ba['getY'](),0x4),_0x2ec2ba[_0x304ed4(0x1eb)]&&(_0x3245d7['Z']=gdjs[_0x304ed4(0x227)][_0x304ed4(0x229)][_0x304ed4(0x238)](_0x2ec2ba['getZ'](),0x4)));_0x4c0347[_0x304ed4(0x1dc)]()&&(_0x3245d7[_0x304ed4(0x246)]=gdjs[_0x304ed4(0x227)][_0x304ed4(0x229)][_0x304ed4(0x238)](_0x2ec2ba[_0x304ed4(0x222)](),0x4),_0x2ec2ba['getRotationX']&&(_0x3245d7[_0x304ed4(0x1ec)]=gdjs[_0x304ed4(0x227)][_0x304ed4(0x229)][_0x304ed4(0x238)](_0x2ec2ba['getRotationX'](),0x4),_0x3245d7[_0x304ed4(0x202)]=gdjs[_0x304ed4(0x227)][_0x304ed4(0x229)][_0x304ed4(0x238)](_0x2ec2ba['getRotationY'](),0x4)));_0x4c0347['_getZOrder']()&&(_0x3245d7[_0x304ed4(0x1f0)]=_0x2ec2ba[_0x304ed4(0x217)]());_0x4c0347[_0x304ed4(0x1ed)]()&&_0x2ec2ba[_0x304ed4(0x247)]&&(_0x3245d7['Animation']=_0x2ec2ba['getAnimationIndex']());_0x4c0347[_0x304ed4(0x243)]()&&_0x2ec2ba[_0x304ed4(0x1d2)]&&(_0x3245d7[_0x304ed4(0x205)]=_0x2ec2ba['getAnimationFrame']());_0x4c0347[_0x304ed4(0x245)]()&&_0x2ec2ba[_0x304ed4(0x207)]&&(_0x3245d7[_0x304ed4(0x1ef)]=gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)](_0x304ed4(0x228))(_0x2ec2ba[_0x304ed4(0x207)](),_0x2ec2ba[_0x304ed4(0x1da)]()));gdjs[_0x304ed4(0x201)]&&_0x4c0347[_0x304ed4(0x215)]()&&(_0x4c0347[_0x304ed4(0x241)](gdjs[_0x304ed4(0x201)][_0x304ed4(0x23b)]()),_0x3245d7[_0x304ed4(0x244)]=gdjs[_0x304ed4(0x201)][_0x304ed4(0x23b)]());if(Object['keys'](_0x3245d7)[_0x304ed4(0x234)]==0x0)return;_0x3245d7['Type']=_0x304ed4(0x1d5),_0x4c0347[_0x304ed4(0x1f7)]()['length']>gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)]('L')&&(_0x4c0347[_0x304ed4(0x233)](''),console[_0x304ed4(0x216)](_0x304ed4(0x231)+gdjs[_0x304ed4(0x208)]['get']('L')+_0x304ed4(0x1de))),_0x3245d7[_0x304ed4(0x1f7)]=_0x4c0347[_0x304ed4(0x1f7)](),_0x4c0347['_setSentReceivedJustNow'](!![]),_0x46b80f[_0x304ed4(0x237)](JSON['stringify'](_0x3245d7)),gdjs[_0x304ed4(0x208)][_0x304ed4(0x204)](_0x304ed4(0x22b),{}),_0x4c0347['_getSharedStringClear']()&&_0x4c0347['SetSharedString']('');}else{_0x4c0347[_0x304ed4(0x1f3)]()&&_0x4c0347['_setFirstFrame'](![]);if(gdjs[_0x304ed4(0x208)]){const _0x409b3b=gdjs[_0x304ed4(0x208)][_0x304ed4(0x242)](_0x304ed4(0x1f1)),_0x1dfd9d=_0x409b3b[_0x304ed4(0x1fc)](_0x4c0347['_getId']());_0x1dfd9d?_0x4c0347[_0x304ed4(0x24a)](_0x4c0347[_0x304ed4(0x21e)]()+0x1):_0x4c0347['_setDisconnectedFrameCounter'](_0x4c0347[_0x304ed4(0x1df)]()+0x1);}else _0x4c0347[_0x304ed4(0x1d9)](_0x4c0347[_0x304ed4(0x1df)]()+0x1);}})()));
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.userFunc0x224ab38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.userFunc0x223e918 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        WS.close();
        gdjs._OnlineMultiplayer = undefined;
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.userFunc0x223e918(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedString("" + eventsFunctionContext.getArgument("String"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("Clear");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedStringClear(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Clear");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedStringClear(false);
}
}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedString = function(String, Clear, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "String") return String;
if (argName === "Clear") return Clear;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Interpolate");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPositionInterpolation(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("Interpolate");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPositionInterpolation(true);
}
}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolation = function(Interpolate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Interpolate") return Interpolate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.userFunc0x224e490 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        WS.close();
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1);

const objects = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.userFunc0x224e490(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.Disconnect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.userFunc0x22614b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
const Status = eventsFunctionContext.getArgument("Status");
eventsFunctionContext.returnValue = false;
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        if (Status == "Before connection" && WS.readyState === 0) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Before connection" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() < 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected just now" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() >= 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected just now" && WS.readyState >= 2 && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected" && WS.readyState >= 2) {
            eventsFunctionContext.returnValue = true;
        }
    } else {
        if (Status == "Before connection") {
            eventsFunctionContext.returnValue = true;
        }
    }
} else {
    if (gdjs._OnlineMultiplayer) {
        const Players = gdjs._OnlineMultiplayer.get("Players");
        const Has = Players.has(Behavior._getId());
        if (Status == "Connected just now" && Has && Behavior._getFirstFrame()) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected" && Has) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected just now" && !Has && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected" && !Has) {
            eventsFunctionContext.returnValue = true;
        }
    } else {
        if (Status == "Disconnected just now" && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected") {
            eventsFunctionContext.returnValue = true;
        }
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1);

const objects = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.userFunc0x22614b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatus = function(Status, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Status") return Status;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActive()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActive() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMe = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.userFunc0x2258b60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = false;
if (gdjs._OnlineMultiplayer) {
    if (gdjs._OnlineMultiplayer.get("Id") !== "") {
        eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Host") === gdjs._OnlineMultiplayer.get("Id");
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.userFunc0x2258b60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHost = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsHostContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.userFunc0x22600b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
eventsFunctionContext.returnValue = false;
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Error");
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1);

const objects = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.userFunc0x22600b0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurred = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSentReceivedJustNow() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId());}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineID = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSharedString());}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedString = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGDUserName());}
}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.idToCallbackMap = new Map();
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.userFunc0x2258b60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._OnlineMultiplayer) {
    eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Random");
} else {
    eventsFunctionContext.returnValue = -1;
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.userFunc0x2258b60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfScene = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlineMultiplayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlineMultiplayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("OnlineMultiplayer::OnlinePlayer", gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer);
