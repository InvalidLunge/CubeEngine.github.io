
if (typeof gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable = {};
gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.idToCallbackMap = new Map();


gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.userFunc0xf87100 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Index = eventsFunctionContext.getArgument("Index");
const Operator = eventsFunctionContext.getArgument("Operator");
const Value = eventsFunctionContext.getArgument("Value");
const Min = eventsFunctionContext.getArgument("Min");
const Max = eventsFunctionContext.getArgument("Max");
runtimeScene.getVariables().get("_SSVACTION").pushValue(`["${Operator}", ${Index}, ${Value}, ${Min}, ${Max}]`);


};
gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.userFunc0xf87100(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.func = function(runtimeScene, Index, Operator, Value, Min, Max, parentEventsFunctionContext) {
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
if (argName === "Index") return Index;
if (argName === "Operator") return Operator;
if (argName === "Value") return Value;
if (argName === "Min") return Min;
if (argName === "Max") return Max;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__OnlineMultiplayer__ModifyServerVariable.registeredGdjsCallbacks = [];