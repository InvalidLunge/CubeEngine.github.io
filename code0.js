gdjs.Login_32signup_32pageCode = {};
gdjs.Login_32signup_32pageCode.localVariables = [];
gdjs.Login_32signup_32pageCode.idToCallbackMap = new Map();
gdjs.Login_32signup_32pageCode.GDUsernameObjects1= [];
gdjs.Login_32signup_32pageCode.GDUsernameObjects2= [];
gdjs.Login_32signup_32pageCode.GDUsernameObjects3= [];
gdjs.Login_32signup_32pageCode.GDPasswordObjects1= [];
gdjs.Login_32signup_32pageCode.GDPasswordObjects2= [];
gdjs.Login_32signup_32pageCode.GDPasswordObjects3= [];
gdjs.Login_32signup_32pageCode.GDInfoObjects1= [];
gdjs.Login_32signup_32pageCode.GDInfoObjects2= [];
gdjs.Login_32signup_32pageCode.GDInfoObjects3= [];
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects1= [];
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects2= [];
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects3= [];
gdjs.Login_32signup_32pageCode.GDGenderFObjects1= [];
gdjs.Login_32signup_32pageCode.GDGenderFObjects2= [];
gdjs.Login_32signup_32pageCode.GDGenderFObjects3= [];
gdjs.Login_32signup_32pageCode.GDGenderMObjects1= [];
gdjs.Login_32signup_32pageCode.GDGenderMObjects2= [];
gdjs.Login_32signup_32pageCode.GDGenderMObjects3= [];
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1= [];
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects2= [];
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects3= [];
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects1= [];
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects2= [];
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects3= [];
gdjs.Login_32signup_32pageCode.GDtopbarObjects1= [];
gdjs.Login_32signup_32pageCode.GDtopbarObjects2= [];
gdjs.Login_32signup_32pageCode.GDtopbarObjects3= [];
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects1= [];
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects2= [];
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects3= [];
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects1= [];
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects2= [];
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects3= [];
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects1= [];
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects2= [];
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects3= [];
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects1= [];
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects2= [];
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects3= [];
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects1= [];
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects2= [];
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects3= [];


gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDintr_95959595LoginObjects2Objects = Hashtable.newFrom({"intr_Login": gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects2});
gdjs.Login_32signup_32pageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamesPage", false);
}
}

}


};gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDGenderFObjects2Objects = Hashtable.newFrom({"GenderF": gdjs.Login_32signup_32pageCode.GDGenderFObjects2});
gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDGenderMObjects2Objects = Hashtable.newFrom({"GenderM": gdjs.Login_32signup_32pageCode.GDGenderMObjects2});
gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDAcc_95959595button_95959595GDObjects1Objects = Hashtable.newFrom({"Acc_button_GD": gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1});
gdjs.Login_32signup_32pageCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
/* Reuse gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.playerAuthentication.getUsername());
}
{for(var i = 0, len = gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1.length ;i < len;++i) {
    gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1[i].getBehavior("Text").setText("GDevelop Account Linked");
}
}
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
}

}


};gdjs.Login_32signup_32pageCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("intr_Login"), gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDintr_95959595LoginObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19839100);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HomeAcc", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(9999));
}

{ //Subevents
gdjs.Login_32signup_32pageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenderF"), gdjs.Login_32signup_32pageCode.GDGenderFObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDGenderFObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("Female");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenderM"), gdjs.Login_32signup_32pageCode.GDGenderMObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDGenderMObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("Male");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Acc_button_GD"), gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32signup_32pageCode.mapOfGDgdjs_9546Login_959532signup_959532pageCode_9546GDAcc_95959595button_95959595GDObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}

{ //Subevents
gdjs.Login_32signup_32pageCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Login_32signup_32pageCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Login_32signup_32pageCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.Login_32signup_32pageCode.GDUsernameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_32signup_32pageCode.GDUsernameObjects1.length;i<l;++i) {
    if ( gdjs.Login_32signup_32pageCode.GDUsernameObjects1[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.Login_32signup_32pageCode.GDUsernameObjects1[k] = gdjs.Login_32signup_32pageCode.GDUsernameObjects1[i];
        ++k;
    }
}
gdjs.Login_32signup_32pageCode.GDUsernameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Login_32signup_32pageCode.GDUsernameObjects1 */
{for(var i = 0, len = gdjs.Login_32signup_32pageCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.Login_32signup_32pageCode.GDUsernameObjects1[i].setPlaceholder("Must be greater then 4 characters");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Login_32signup_32pageCode.GDUsernameObjects1.length === 0 ) ? "" :gdjs.Login_32signup_32pageCode.GDUsernameObjects1[0].getBehavior("Text").getText()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Cube Engine - Welcome To Cube Engine");
}
}

}


};

gdjs.Login_32signup_32pageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Login_32signup_32pageCode.GDUsernameObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDUsernameObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDUsernameObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDPasswordObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDPasswordObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDPasswordObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDInfoObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDInfoObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDInfoObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderFObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderFObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderFObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderMObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderMObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderMObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDtopbarObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDtopbarObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDtopbarObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects3.length = 0;

gdjs.Login_32signup_32pageCode.eventsList3(runtimeScene);
gdjs.Login_32signup_32pageCode.GDUsernameObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDUsernameObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDUsernameObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDPasswordObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDPasswordObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDPasswordObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDInfoObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDInfoObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDInfoObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDintr_9595LoginObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderFObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderFObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderFObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderMObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderMObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDGenderMObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDAcc_9595button_9595GDObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDi_9595Logo_9595TestObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDtopbarObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDtopbarObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDtopbarObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595GamesObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDButton_9595ShopObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDinrt_9595HomeObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDStatic_9595UserObjects3.length = 0;
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects1.length = 0;
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects2.length = 0;
gdjs.Login_32signup_32pageCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['Login_32signup_32pageCode'] = gdjs.Login_32signup_32pageCode;
