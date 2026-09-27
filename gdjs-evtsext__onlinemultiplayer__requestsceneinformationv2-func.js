
if (typeof gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2 !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2 = {};
gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.idToCallbackMap = new Map();


gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.userFunc0x960018 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Task = eventsFunctionContext.task;
const URL = "https://ws.pandako.mydns.jp/" + runtimeScene.getGame().getGameData().properties.name;
const TargetVariable = eventsFunctionContext.getArgument("TargetVariable");

(async () => {
    TargetVariable.fromJSObject(await (await fetch(URL)).json());
    Task.resolve();
})();


};
gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.userFunc0x960018(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.func = function(runtimeScene, TargetVariable, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "TargetVariable") return TargetVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformationV2.registeredGdjsCallbacks = [];