gdjs.GamesPageCode = {};
gdjs.GamesPageCode.localVariables = [];
gdjs.GamesPageCode.idToCallbackMap = new Map();
gdjs.GamesPageCode.GDunknownExperienceImageObjects1= [];
gdjs.GamesPageCode.GDunknownExperienceImageObjects2= [];
gdjs.GamesPageCode.GDunknownExperienceImageObjects3= [];
gdjs.GamesPageCode.GDPlayObjects1= [];
gdjs.GamesPageCode.GDPlayObjects2= [];
gdjs.GamesPageCode.GDPlayObjects3= [];
gdjs.GamesPageCode.GDPageGamePageitemObjects1= [];
gdjs.GamesPageCode.GDPageGamePageitemObjects2= [];
gdjs.GamesPageCode.GDPageGamePageitemObjects3= [];
gdjs.GamesPageCode.GDTitleObjects1= [];
gdjs.GamesPageCode.GDTitleObjects2= [];
gdjs.GamesPageCode.GDTitleObjects3= [];
gdjs.GamesPageCode.GDTitle2Objects1= [];
gdjs.GamesPageCode.GDTitle2Objects2= [];
gdjs.GamesPageCode.GDTitle2Objects3= [];
gdjs.GamesPageCode.GDPlay_9595ButObjects1= [];
gdjs.GamesPageCode.GDPlay_9595ButObjects2= [];
gdjs.GamesPageCode.GDPlay_9595ButObjects3= [];
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects1= [];
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects2= [];
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects3= [];
gdjs.GamesPageCode.GDtopbarObjects1= [];
gdjs.GamesPageCode.GDtopbarObjects2= [];
gdjs.GamesPageCode.GDtopbarObjects3= [];
gdjs.GamesPageCode.GDButton_9595GamesObjects1= [];
gdjs.GamesPageCode.GDButton_9595GamesObjects2= [];
gdjs.GamesPageCode.GDButton_9595GamesObjects3= [];
gdjs.GamesPageCode.GDButton_9595ShopObjects1= [];
gdjs.GamesPageCode.GDButton_9595ShopObjects2= [];
gdjs.GamesPageCode.GDButton_9595ShopObjects3= [];
gdjs.GamesPageCode.GDinrt_9595HomeObjects1= [];
gdjs.GamesPageCode.GDinrt_9595HomeObjects2= [];
gdjs.GamesPageCode.GDinrt_9595HomeObjects3= [];
gdjs.GamesPageCode.GDStatic_9595UserObjects1= [];
gdjs.GamesPageCode.GDStatic_9595UserObjects2= [];
gdjs.GamesPageCode.GDStatic_9595UserObjects3= [];
gdjs.GamesPageCode.GDNewSpriteObjects1= [];
gdjs.GamesPageCode.GDNewSpriteObjects2= [];
gdjs.GamesPageCode.GDNewSpriteObjects3= [];


gdjs.GamesPageCode.mapOfGDgdjs_9546GamesPageCode_9546GDPlayObjects2Objects = Hashtable.newFrom({"Play": gdjs.GamesPageCode.GDPlayObjects2});
gdjs.GamesPageCode.mapOfGDgdjs_9546GamesPageCode_9546GDinrt_95959595HomeObjects2Objects = Hashtable.newFrom({"inrt_Home": gdjs.GamesPageCode.GDinrt_9595HomeObjects2});
gdjs.GamesPageCode.mapOfGDgdjs_9546GamesPageCode_9546GDPlay_95959595ButObjects1Objects = Hashtable.newFrom({"Play_But": gdjs.GamesPageCode.GDPlay_9595ButObjects1});
gdjs.GamesPageCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.GamesPageCode.GDPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GamesPageCode.mapOfGDgdjs_9546GamesPageCode_9546GDPlayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PageGamePageitem"), gdjs.GamesPageCode.GDPageGamePageitemObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GamesPageCode.GDPageGamePageitemObjects2.length === 0 ) ? 0 :gdjs.GamesPageCode.GDPageGamePageitemObjects2[0].getCenterXInScene()), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GamesPageCode.GDPageGamePageitemObjects2.length === 0 ) ? 0 :gdjs.GamesPageCode.GDPageGamePageitemObjects2[0].getCenterYInScene()), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("inrt_Home"), gdjs.GamesPageCode.GDinrt_9595HomeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GamesPageCode.mapOfGDgdjs_9546GamesPageCode_9546GDinrt_95959595HomeObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HomeAcc", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_But"), gdjs.GamesPageCode.GDPlay_9595ButObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GamesPageCode.mapOfGDgdjs_9546GamesPageCode_9546GDPlay_95959595ButObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Baseplate", false);
}
}

}


};gdjs.GamesPageCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "GamesPage");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Static_User"), gdjs.GamesPageCode.GDStatic_9595UserObjects1);
{for(var i = 0, len = gdjs.GamesPageCode.GDStatic_9595UserObjects1.length ;i < len;++i) {
    gdjs.GamesPageCode.GDStatic_9595UserObjects1[i].getBehavior("Text").setText("@" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Static_User"), gdjs.GamesPageCode.GDStatic_9595UserObjects1);
{for(var i = 0, len = gdjs.GamesPageCode.GDStatic_9595UserObjects1.length ;i < len;++i) {
    gdjs.GamesPageCode.GDStatic_9595UserObjects1[i].getBehavior("Text").setText("@Guest " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamesPageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Cube Engine - Games Page");
}
}

}


};

gdjs.GamesPageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamesPageCode.GDunknownExperienceImageObjects1.length = 0;
gdjs.GamesPageCode.GDunknownExperienceImageObjects2.length = 0;
gdjs.GamesPageCode.GDunknownExperienceImageObjects3.length = 0;
gdjs.GamesPageCode.GDPlayObjects1.length = 0;
gdjs.GamesPageCode.GDPlayObjects2.length = 0;
gdjs.GamesPageCode.GDPlayObjects3.length = 0;
gdjs.GamesPageCode.GDPageGamePageitemObjects1.length = 0;
gdjs.GamesPageCode.GDPageGamePageitemObjects2.length = 0;
gdjs.GamesPageCode.GDPageGamePageitemObjects3.length = 0;
gdjs.GamesPageCode.GDTitleObjects1.length = 0;
gdjs.GamesPageCode.GDTitleObjects2.length = 0;
gdjs.GamesPageCode.GDTitleObjects3.length = 0;
gdjs.GamesPageCode.GDTitle2Objects1.length = 0;
gdjs.GamesPageCode.GDTitle2Objects2.length = 0;
gdjs.GamesPageCode.GDTitle2Objects3.length = 0;
gdjs.GamesPageCode.GDPlay_9595ButObjects1.length = 0;
gdjs.GamesPageCode.GDPlay_9595ButObjects2.length = 0;
gdjs.GamesPageCode.GDPlay_9595ButObjects3.length = 0;
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects1.length = 0;
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects2.length = 0;
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects3.length = 0;
gdjs.GamesPageCode.GDtopbarObjects1.length = 0;
gdjs.GamesPageCode.GDtopbarObjects2.length = 0;
gdjs.GamesPageCode.GDtopbarObjects3.length = 0;
gdjs.GamesPageCode.GDButton_9595GamesObjects1.length = 0;
gdjs.GamesPageCode.GDButton_9595GamesObjects2.length = 0;
gdjs.GamesPageCode.GDButton_9595GamesObjects3.length = 0;
gdjs.GamesPageCode.GDButton_9595ShopObjects1.length = 0;
gdjs.GamesPageCode.GDButton_9595ShopObjects2.length = 0;
gdjs.GamesPageCode.GDButton_9595ShopObjects3.length = 0;
gdjs.GamesPageCode.GDinrt_9595HomeObjects1.length = 0;
gdjs.GamesPageCode.GDinrt_9595HomeObjects2.length = 0;
gdjs.GamesPageCode.GDinrt_9595HomeObjects3.length = 0;
gdjs.GamesPageCode.GDStatic_9595UserObjects1.length = 0;
gdjs.GamesPageCode.GDStatic_9595UserObjects2.length = 0;
gdjs.GamesPageCode.GDStatic_9595UserObjects3.length = 0;
gdjs.GamesPageCode.GDNewSpriteObjects1.length = 0;
gdjs.GamesPageCode.GDNewSpriteObjects2.length = 0;
gdjs.GamesPageCode.GDNewSpriteObjects3.length = 0;

gdjs.GamesPageCode.eventsList1(runtimeScene);
gdjs.GamesPageCode.GDunknownExperienceImageObjects1.length = 0;
gdjs.GamesPageCode.GDunknownExperienceImageObjects2.length = 0;
gdjs.GamesPageCode.GDunknownExperienceImageObjects3.length = 0;
gdjs.GamesPageCode.GDPlayObjects1.length = 0;
gdjs.GamesPageCode.GDPlayObjects2.length = 0;
gdjs.GamesPageCode.GDPlayObjects3.length = 0;
gdjs.GamesPageCode.GDPageGamePageitemObjects1.length = 0;
gdjs.GamesPageCode.GDPageGamePageitemObjects2.length = 0;
gdjs.GamesPageCode.GDPageGamePageitemObjects3.length = 0;
gdjs.GamesPageCode.GDTitleObjects1.length = 0;
gdjs.GamesPageCode.GDTitleObjects2.length = 0;
gdjs.GamesPageCode.GDTitleObjects3.length = 0;
gdjs.GamesPageCode.GDTitle2Objects1.length = 0;
gdjs.GamesPageCode.GDTitle2Objects2.length = 0;
gdjs.GamesPageCode.GDTitle2Objects3.length = 0;
gdjs.GamesPageCode.GDPlay_9595ButObjects1.length = 0;
gdjs.GamesPageCode.GDPlay_9595ButObjects2.length = 0;
gdjs.GamesPageCode.GDPlay_9595ButObjects3.length = 0;
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects1.length = 0;
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects2.length = 0;
gdjs.GamesPageCode.GDi_9595Logo_9595TestObjects3.length = 0;
gdjs.GamesPageCode.GDtopbarObjects1.length = 0;
gdjs.GamesPageCode.GDtopbarObjects2.length = 0;
gdjs.GamesPageCode.GDtopbarObjects3.length = 0;
gdjs.GamesPageCode.GDButton_9595GamesObjects1.length = 0;
gdjs.GamesPageCode.GDButton_9595GamesObjects2.length = 0;
gdjs.GamesPageCode.GDButton_9595GamesObjects3.length = 0;
gdjs.GamesPageCode.GDButton_9595ShopObjects1.length = 0;
gdjs.GamesPageCode.GDButton_9595ShopObjects2.length = 0;
gdjs.GamesPageCode.GDButton_9595ShopObjects3.length = 0;
gdjs.GamesPageCode.GDinrt_9595HomeObjects1.length = 0;
gdjs.GamesPageCode.GDinrt_9595HomeObjects2.length = 0;
gdjs.GamesPageCode.GDinrt_9595HomeObjects3.length = 0;
gdjs.GamesPageCode.GDStatic_9595UserObjects1.length = 0;
gdjs.GamesPageCode.GDStatic_9595UserObjects2.length = 0;
gdjs.GamesPageCode.GDStatic_9595UserObjects3.length = 0;
gdjs.GamesPageCode.GDNewSpriteObjects1.length = 0;
gdjs.GamesPageCode.GDNewSpriteObjects2.length = 0;
gdjs.GamesPageCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['GamesPageCode'] = gdjs.GamesPageCode;
