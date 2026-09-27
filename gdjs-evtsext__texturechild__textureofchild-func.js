
if (typeof gdjs.evtsExt__TextureChild__TextureofChild !== "undefined") {
  gdjs.evtsExt__TextureChild__TextureofChild.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TextureChild__TextureofChild = {};
gdjs.evtsExt__TextureChild__TextureofChild.idToCallbackMap = new Map();
gdjs.evtsExt__TextureChild__TextureofChild.GDplayer0Objects1= [];


gdjs.evtsExt__TextureChild__TextureofChild.userFunc0x1df54b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const objeto3D = objects[0];  // Obtener el objeto 3D
const child1 = eventsFunctionContext.getArgument("Childbody"); 
const textura = eventsFunctionContext.getArgument("imagen"); 

console.log("Buscando mesh con nombre:", child1);
console.log("URL de la textura:", textura);

objeto3D.get3DRendererObject().traverse(function(child) {
    if (child.isMesh) {
        console.log("Mesh encontrado:", child.name);
        
        if (child.name === child1) {
            console.log("Aplicando textura a:", child.name);
            
            const loader = new THREE.TextureLoader();
            loader.load(
                textura,
                function(texture) {
                    console.log("Textura cargada correctamente", texture);

                    texture.flipY = false;  // Corregir inversión vertical si es necesario
                    texture.needsUpdate = true;

                    // Asegurar que el material permite texturas
                    if (!child.material.map) {
                        child.material = new THREE.MeshBasicMaterial();
                    }

                    child.material.map = texture;
                    child.material.color.set(0xffffff); // Evitar tintado de color
                    child.material.needsUpdate = true;
                    child.material.side = THREE.DoubleSide; // Mostrar ambos lados

                       if (!child.geometry.attributes.uv) {
                        console.warn(" El objeto no tiene coordenadas UV, generando nuevas...");
                        child.geometry.computeBoundingBox();
                        child.geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array([
                            0, 0, 1, 0, 1, 1, 0, 1
                        ]), 2);
                    }
                    child.geometry.attributes.position.needsUpdate = true;
                    console.log("Textura aplicada exitosamente a", child.name);
                },
                undefined,
                function(err) {
                    console.error("Error al cargar la  textura:", err);
                }
            );
        }
    }
});

};
gdjs.evtsExt__TextureChild__TextureofChild.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("player0"), gdjs.evtsExt__TextureChild__TextureofChild.GDplayer0Objects1);

const objects = gdjs.evtsExt__TextureChild__TextureofChild.GDplayer0Objects1;
gdjs.evtsExt__TextureChild__TextureofChild.userFunc0x1df54b0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextureChild__TextureofChild.func = function(runtimeScene, player0, Childbody, imagen, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"player0": player0
},
  _objectArraysMap: {
"player0": gdjs.objectsListsToArray(player0)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextureChild"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextureChild"),
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
if (argName === "Childbody") return Childbody;
if (argName === "imagen") return imagen;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TextureChild__TextureofChild.GDplayer0Objects1.length = 0;

gdjs.evtsExt__TextureChild__TextureofChild.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextureChild__TextureofChild.GDplayer0Objects1.length = 0;


return;
}

gdjs.evtsExt__TextureChild__TextureofChild.registeredGdjsCallbacks = [];