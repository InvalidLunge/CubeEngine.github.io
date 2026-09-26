
if (typeof gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents = {};
gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.idToCallbackMap = new Map();


gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.userFunc0x1b85310 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function _0x2289(_0x360116,_0x5290e6){const _0x24666f=_0x2466();return _0x2289=function(_0x22895f,_0x471a6c){_0x22895f=_0x22895f-0x132;let _0x8df89a=_0x24666f[_0x22895f];return _0x8df89a;},_0x2289(_0x360116,_0x5290e6);}function _0x2466(){const _0xb0e75e=['parse','getVariables','153960yxzqeW','name','data','getChildrenCount','error','36091imasdC','Connected','5757kwYTla','get','378JMmZum','1708aIgZCD','OPEN','join','getGame','12110760JhulQT','Type','861723CNYeoO','getName','16972SyvvZV','20hJpeEQ','readyState','send','wss://ws.pandako.mydns.jp/ssv/','1209620ugrYle','[\x22Sync\x22]','__SSVWS','The\x20extension\x20was\x20rejected\x20by\x20the\x20server\x20because\x20it\x20is\x20an\x20old\x20version!','close','now','Rejected','open','getAsString','push','58XDJZSM','\x22,\x20\x22Scene\x22:\x20\x22','warn','clearChildren','3096VaRcSW','Action','__SSV','Update','Index','getGameData','setNumber','addEventListener','_SSVACTION'];_0x2466=function(){return _0xb0e75e;};return _0x2466();}(function(_0x51a860,_0x4891dd){const _0x1877df=_0x2289,_0x4a7ca7=_0x51a860();while(!![]){try{const _0x2d4037=parseInt(_0x1877df(0x15c))/0x1*(-parseInt(_0x1877df(0x14d))/0x2)+parseInt(_0x1877df(0x142))/0x3*(-parseInt(_0x1877df(0x145))/0x4)+parseInt(_0x1877df(0x152))/0x5+-parseInt(_0x1877df(0x13b))/0x6*(-parseInt(_0x1877df(0x144))/0x7)+parseInt(_0x1877df(0x149))/0x8+-parseInt(_0x1877df(0x14b))/0x9*(parseInt(_0x1877df(0x14e))/0xa)+parseInt(_0x1877df(0x140))/0xb*(-parseInt(_0x1877df(0x160))/0xc);if(_0x2d4037===_0x4891dd)break;else _0x4a7ca7['push'](_0x4a7ca7['shift']());}catch(_0x393f4f){_0x4a7ca7['push'](_0x4a7ca7['shift']());}}}(_0x2466,0xc1508),((()=>{const _0x5de279=_0x2289;runtimeScene['getTimeManager']()['isFirstFrame']()&&(gdjs[_0x5de279(0x154)]&&(gdjs[_0x5de279(0x154)]['close'](),gdjs['__SSVWS']=null));if(!gdjs[_0x5de279(0x132)])return;!gdjs[_0x5de279(0x154)]&&(gdjs[_0x5de279(0x154)]=new WebSocket(_0x5de279(0x151)),gdjs[_0x5de279(0x154)]['T']=45.6/0x1c8*0x3e8,gdjs[_0x5de279(0x154)]['LT']=Date[_0x5de279(0x157)](),gdjs[_0x5de279(0x154)]['GN']=runtimeScene[_0x5de279(0x148)]()[_0x5de279(0x135)]()['properties'][_0x5de279(0x13c)],gdjs['__SSVWS']['SN']=runtimeScene[_0x5de279(0x14c)](),gdjs[_0x5de279(0x154)][_0x5de279(0x137)](_0x5de279(0x159),_0x160346=>{const _0x39b686=_0x5de279;gdjs[_0x39b686(0x154)][_0x39b686(0x14f)]===WebSocket[_0x39b686(0x146)]&&gdjs[_0x39b686(0x154)][_0x39b686(0x150)]('{\x22Type\x22:\x22Connect\x22,\x20\x22Game\x22:\x22'+gdjs[_0x39b686(0x154)]['GN']+_0x39b686(0x15d)+gdjs[_0x39b686(0x154)]['SN']+'\x22,\x20\x22Ver\x22:20}');}),gdjs[_0x5de279(0x154)][_0x5de279(0x137)]('message',_0x3a25fc=>{const _0x39688b=_0x5de279,_0x1de429=JSON[_0x39688b(0x139)](_0x3a25fc[_0x39688b(0x13d)]);if(_0x1de429['Type']==_0x39688b(0x141)){}else{if(_0x1de429[_0x39688b(0x14a)]==_0x39688b(0x133)){const _0x348ecd=runtimeScene[_0x39688b(0x13a)]()[_0x39688b(0x143)]('SSV');for(const _0x28d8c0 of _0x1de429['Variables']){_0x348ecd['getChildAt'](_0x28d8c0[_0x39688b(0x134)])[_0x39688b(0x136)](_0x28d8c0['Value']);}}else{if(_0x1de429[_0x39688b(0x14a)]==_0x39688b(0x158))console[_0x39688b(0x15e)](_0x39688b(0x155)),gdjs[_0x39688b(0x154)][_0x39688b(0x156)](),gdjs[_0x39688b(0x132)]=![];else{}}}}),gdjs[_0x5de279(0x154)][_0x5de279(0x137)](_0x5de279(0x13f),_0x3d680b=>{const _0xc16a52=_0x5de279;gdjs[_0xc16a52(0x154)][_0xc16a52(0x156)](),gdjs['__SSVWS']=null;}),gdjs[_0x5de279(0x154)][_0x5de279(0x137)](_0x5de279(0x156),_0x40e912=>{const _0x33f92c=_0x5de279;gdjs[_0x33f92c(0x154)]=null;}));if(Date[_0x5de279(0x157)]()-gdjs[_0x5de279(0x154)]['LT']>=gdjs[_0x5de279(0x154)]['T']){gdjs[_0x5de279(0x154)]['LT']=Date[_0x5de279(0x157)]();if(gdjs['__SSVWS'][_0x5de279(0x14f)]!==WebSocket['OPEN'])return;const _0x56be37=runtimeScene['getVariables']()[_0x5de279(0x143)](_0x5de279(0x138)),_0xf72716=[_0x5de279(0x153)];for(let _0x5b8811=0x0;_0x5b8811<_0x56be37[_0x5de279(0x13e)]();_0x5b8811++){_0xf72716[_0x5de279(0x15b)](_0x56be37['getChildAt'](_0x5b8811)[_0x5de279(0x15a)]());if(_0x5b8811===0x9)break;}const _0x14d8d1={'Type':_0x5de279(0x161),'Game':gdjs[_0x5de279(0x154)]['GN'],'Scene':gdjs['__SSVWS']['SN'],'Action':'['+_0xf72716[_0x5de279(0x147)](',')+']'};gdjs[_0x5de279(0x154)][_0x5de279(0x150)](JSON['stringify'](_0x14d8d1)),_0x56be37[_0x5de279(0x15f)]();}})()));
};
gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.userFunc0x1b85310(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__OnlineMultiplayer__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
