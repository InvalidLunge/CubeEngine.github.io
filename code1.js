gdjs.HomeAccCode = {};
gdjs.HomeAccCode.localVariables = [];
gdjs.HomeAccCode.idToCallbackMap = new Map();
gdjs.HomeAccCode.GDui_9595WelcomeObjects1= [];
gdjs.HomeAccCode.GDui_9595WelcomeObjects2= [];
gdjs.HomeAccCode.GDui_9595WelcomeObjects3= [];
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects1= [];
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects2= [];
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects3= [];
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects1= [];
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects2= [];
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects3= [];
gdjs.HomeAccCode.GDburger_9595MenuObjects1= [];
gdjs.HomeAccCode.GDburger_9595MenuObjects2= [];
gdjs.HomeAccCode.GDburger_9595MenuObjects3= [];
gdjs.HomeAccCode.GDNewPanelSpriteObjects1= [];
gdjs.HomeAccCode.GDNewPanelSpriteObjects2= [];
gdjs.HomeAccCode.GDNewPanelSpriteObjects3= [];
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1= [];
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects2= [];
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects3= [];
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects1= [];
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects2= [];
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects3= [];
gdjs.HomeAccCode.GDMalePreviewObjects1= [];
gdjs.HomeAccCode.GDMalePreviewObjects2= [];
gdjs.HomeAccCode.GDMalePreviewObjects3= [];
gdjs.HomeAccCode.GDFemalePreviewObjects1= [];
gdjs.HomeAccCode.GDFemalePreviewObjects2= [];
gdjs.HomeAccCode.GDFemalePreviewObjects3= [];
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects1= [];
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects2= [];
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects3= [];
gdjs.HomeAccCode.GDtopbarObjects1= [];
gdjs.HomeAccCode.GDtopbarObjects2= [];
gdjs.HomeAccCode.GDtopbarObjects3= [];
gdjs.HomeAccCode.GDButton_9595GamesObjects1= [];
gdjs.HomeAccCode.GDButton_9595GamesObjects2= [];
gdjs.HomeAccCode.GDButton_9595GamesObjects3= [];
gdjs.HomeAccCode.GDButton_9595ShopObjects1= [];
gdjs.HomeAccCode.GDButton_9595ShopObjects2= [];
gdjs.HomeAccCode.GDButton_9595ShopObjects3= [];
gdjs.HomeAccCode.GDinrt_9595HomeObjects1= [];
gdjs.HomeAccCode.GDinrt_9595HomeObjects2= [];
gdjs.HomeAccCode.GDinrt_9595HomeObjects3= [];
gdjs.HomeAccCode.GDStatic_9595UserObjects1= [];
gdjs.HomeAccCode.GDStatic_9595UserObjects2= [];
gdjs.HomeAccCode.GDStatic_9595UserObjects3= [];
gdjs.HomeAccCode.GDNewSpriteObjects1= [];
gdjs.HomeAccCode.GDNewSpriteObjects2= [];
gdjs.HomeAccCode.GDNewSpriteObjects3= [];


gdjs.HomeAccCode.mapOfGDgdjs_9546HomeAccCode_9546GDButton_95959595GamesObjects1Objects = Hashtable.newFrom({"Button_Games": gdjs.HomeAccCode.GDButton_9595GamesObjects1});
gdjs.HomeAccCode.mapOfGDgdjs_9546HomeAccCode_9546GDburger_95959595MenuObjects2Objects = Hashtable.newFrom({"burger_Menu": gdjs.HomeAccCode.GDburger_9595MenuObjects2});
gdjs.HomeAccCode.mapOfGDgdjs_9546HomeAccCode_9546GDPanel_95959595Intr_95959595AvatareditorObjects1Objects = Hashtable.newFrom({"Panel_Intr_Avatareditor": gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1});
gdjs.HomeAccCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("burger_Menu"), gdjs.HomeAccCode.GDburger_9595MenuObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeAccCode.mapOfGDgdjs_9546HomeAccCode_9546GDburger_95959595MenuObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.HomeAccCode.GDNewPanelSpriteObjects2);
{for(var i = 0, len = gdjs.HomeAccCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.HomeAccCode.GDNewPanelSpriteObjects2[i].setX(0);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.HomeAccCode.GDNewPanelSpriteObjects2);
{for(var i = 0, len = gdjs.HomeAccCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.HomeAccCode.GDNewPanelSpriteObjects2[i].setX(-294);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panel_Intr_Avatareditor"), gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeAccCode.mapOfGDgdjs_9546HomeAccCode_9546GDPanel_95959595Intr_95959595AvatareditorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AvatarEditor", false);
}
}

}

}

};gdjs.HomeAccCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "HomeAcc");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Static_User"), gdjs.HomeAccCode.GDStatic_9595UserObjects1);
gdjs.copyArray(runtimeScene.getObjects("ui_Welcome"), gdjs.HomeAccCode.GDui_9595WelcomeObjects1);
{for(var i = 0, len = gdjs.HomeAccCode.GDui_9595WelcomeObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDui_9595WelcomeObjects1[i].getBehavior("Text").setText("Welcome, " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.HomeAccCode.GDStatic_9595UserObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDStatic_9595UserObjects1[i].getBehavior("Text").setText("@" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("Static_User"), gdjs.HomeAccCode.GDStatic_9595UserObjects1);
{for(var i = 0, len = gdjs.HomeAccCode.GDStatic_9595UserObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDStatic_9595UserObjects1[i].getBehavior("Text").setText("@Guest " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Games"), gdjs.HomeAccCode.GDButton_9595GamesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeAccCode.mapOfGDgdjs_9546HomeAccCode_9546GDButton_95959595GamesObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamesPage", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.HomeAccCode.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panel_Intr_Avatareditor"), gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panel_Intr_Studio"), gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects1);
{for(var i = 0, len = gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1[i].setX((( gdjs.HomeAccCode.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.HomeAccCode.GDNewPanelSpriteObjects1[0].getX()));
}
}
{for(var i = 0, len = gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects1[i].setX((( gdjs.HomeAccCode.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.HomeAccCode.GDNewPanelSpriteObjects1[0].getX()));
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
gdjs.HomeAccCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "Male");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemalePreview"), gdjs.HomeAccCode.GDFemalePreviewObjects1);
gdjs.copyArray(runtimeScene.getObjects("MalePreview"), gdjs.HomeAccCode.GDMalePreviewObjects1);
{for(var i = 0, len = gdjs.HomeAccCode.GDMalePreviewObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDMalePreviewObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.HomeAccCode.GDFemalePreviewObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDFemalePreviewObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "Female");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemalePreview"), gdjs.HomeAccCode.GDFemalePreviewObjects1);
gdjs.copyArray(runtimeScene.getObjects("MalePreview"), gdjs.HomeAccCode.GDMalePreviewObjects1);
{for(var i = 0, len = gdjs.HomeAccCode.GDFemalePreviewObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDFemalePreviewObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.HomeAccCode.GDMalePreviewObjects1.length ;i < len;++i) {
    gdjs.HomeAccCode.GDMalePreviewObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Cube Engine - Home");
}
{gdjs.evtTools.input.showCursor(runtimeScene);
}
}

}


};

gdjs.HomeAccCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeAccCode.GDui_9595WelcomeObjects1.length = 0;
gdjs.HomeAccCode.GDui_9595WelcomeObjects2.length = 0;
gdjs.HomeAccCode.GDui_9595WelcomeObjects3.length = 0;
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects1.length = 0;
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects2.length = 0;
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects3.length = 0;
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects1.length = 0;
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects2.length = 0;
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects3.length = 0;
gdjs.HomeAccCode.GDburger_9595MenuObjects1.length = 0;
gdjs.HomeAccCode.GDburger_9595MenuObjects2.length = 0;
gdjs.HomeAccCode.GDburger_9595MenuObjects3.length = 0;
gdjs.HomeAccCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.HomeAccCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.HomeAccCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects2.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects3.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects1.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects2.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects3.length = 0;
gdjs.HomeAccCode.GDMalePreviewObjects1.length = 0;
gdjs.HomeAccCode.GDMalePreviewObjects2.length = 0;
gdjs.HomeAccCode.GDMalePreviewObjects3.length = 0;
gdjs.HomeAccCode.GDFemalePreviewObjects1.length = 0;
gdjs.HomeAccCode.GDFemalePreviewObjects2.length = 0;
gdjs.HomeAccCode.GDFemalePreviewObjects3.length = 0;
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects1.length = 0;
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects2.length = 0;
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects3.length = 0;
gdjs.HomeAccCode.GDtopbarObjects1.length = 0;
gdjs.HomeAccCode.GDtopbarObjects2.length = 0;
gdjs.HomeAccCode.GDtopbarObjects3.length = 0;
gdjs.HomeAccCode.GDButton_9595GamesObjects1.length = 0;
gdjs.HomeAccCode.GDButton_9595GamesObjects2.length = 0;
gdjs.HomeAccCode.GDButton_9595GamesObjects3.length = 0;
gdjs.HomeAccCode.GDButton_9595ShopObjects1.length = 0;
gdjs.HomeAccCode.GDButton_9595ShopObjects2.length = 0;
gdjs.HomeAccCode.GDButton_9595ShopObjects3.length = 0;
gdjs.HomeAccCode.GDinrt_9595HomeObjects1.length = 0;
gdjs.HomeAccCode.GDinrt_9595HomeObjects2.length = 0;
gdjs.HomeAccCode.GDinrt_9595HomeObjects3.length = 0;
gdjs.HomeAccCode.GDStatic_9595UserObjects1.length = 0;
gdjs.HomeAccCode.GDStatic_9595UserObjects2.length = 0;
gdjs.HomeAccCode.GDStatic_9595UserObjects3.length = 0;
gdjs.HomeAccCode.GDNewSpriteObjects1.length = 0;
gdjs.HomeAccCode.GDNewSpriteObjects2.length = 0;
gdjs.HomeAccCode.GDNewSpriteObjects3.length = 0;

gdjs.HomeAccCode.eventsList1(runtimeScene);
gdjs.HomeAccCode.GDui_9595WelcomeObjects1.length = 0;
gdjs.HomeAccCode.GDui_9595WelcomeObjects2.length = 0;
gdjs.HomeAccCode.GDui_9595WelcomeObjects3.length = 0;
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects1.length = 0;
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects2.length = 0;
gdjs.HomeAccCode.GDStatic_9595RecentplayedObjects3.length = 0;
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects1.length = 0;
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects2.length = 0;
gdjs.HomeAccCode.GDStatic_9595FavoriteObjects3.length = 0;
gdjs.HomeAccCode.GDburger_9595MenuObjects1.length = 0;
gdjs.HomeAccCode.GDburger_9595MenuObjects2.length = 0;
gdjs.HomeAccCode.GDburger_9595MenuObjects3.length = 0;
gdjs.HomeAccCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.HomeAccCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.HomeAccCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects1.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects2.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595AvatareditorObjects3.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects1.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects2.length = 0;
gdjs.HomeAccCode.GDPanel_9595Intr_9595StudioObjects3.length = 0;
gdjs.HomeAccCode.GDMalePreviewObjects1.length = 0;
gdjs.HomeAccCode.GDMalePreviewObjects2.length = 0;
gdjs.HomeAccCode.GDMalePreviewObjects3.length = 0;
gdjs.HomeAccCode.GDFemalePreviewObjects1.length = 0;
gdjs.HomeAccCode.GDFemalePreviewObjects2.length = 0;
gdjs.HomeAccCode.GDFemalePreviewObjects3.length = 0;
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects1.length = 0;
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects2.length = 0;
gdjs.HomeAccCode.GDi_9595Logo_9595TestObjects3.length = 0;
gdjs.HomeAccCode.GDtopbarObjects1.length = 0;
gdjs.HomeAccCode.GDtopbarObjects2.length = 0;
gdjs.HomeAccCode.GDtopbarObjects3.length = 0;
gdjs.HomeAccCode.GDButton_9595GamesObjects1.length = 0;
gdjs.HomeAccCode.GDButton_9595GamesObjects2.length = 0;
gdjs.HomeAccCode.GDButton_9595GamesObjects3.length = 0;
gdjs.HomeAccCode.GDButton_9595ShopObjects1.length = 0;
gdjs.HomeAccCode.GDButton_9595ShopObjects2.length = 0;
gdjs.HomeAccCode.GDButton_9595ShopObjects3.length = 0;
gdjs.HomeAccCode.GDinrt_9595HomeObjects1.length = 0;
gdjs.HomeAccCode.GDinrt_9595HomeObjects2.length = 0;
gdjs.HomeAccCode.GDinrt_9595HomeObjects3.length = 0;
gdjs.HomeAccCode.GDStatic_9595UserObjects1.length = 0;
gdjs.HomeAccCode.GDStatic_9595UserObjects2.length = 0;
gdjs.HomeAccCode.GDStatic_9595UserObjects3.length = 0;
gdjs.HomeAccCode.GDNewSpriteObjects1.length = 0;
gdjs.HomeAccCode.GDNewSpriteObjects2.length = 0;
gdjs.HomeAccCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['HomeAccCode'] = gdjs.HomeAccCode;
