
if (typeof gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer = {};
gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.idToCallbackMap = new Map();


gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.userFunc0x936390 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__SSV = true;


};
gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.userFunc0x936390(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__OnlineMultiplayer__ConnectVariableServer.registeredGdjsCallbacks = [];