
gdjs.evtsExt__TextGeometry3D__TextGeometry3D = gdjs.evtsExt__TextGeometry3D__TextGeometry3D || {};

/**
 * Object generated from TextGeometry3D
 */
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D = class TextGeometry3D extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.AText = objectData.content.AText !== undefined ? objectData.content.AText : "Text";
    this._objectData.CTextColor = objectData.content.CTextColor !== undefined ? objectData.content.CTextColor : "255;255;255";
    this._objectData.DSize = objectData.content.DSize !== undefined ? objectData.content.DSize : Number("20") || 0;
    this._objectData.EDepth = objectData.content.EDepth !== undefined ? objectData.content.EDepth : Number("50") || 0;
    this._objectData.FCurveSegments = objectData.content.FCurveSegments !== undefined ? objectData.content.FCurveSegments : Number("12") || 0;
    this._objectData.GBevelEnabled = objectData.content.GBevelEnabled !== undefined ? objectData.content.GBevelEnabled : true;
    this._objectData.JBevelThickness = objectData.content.JBevelThickness !== undefined ? objectData.content.JBevelThickness : Number("1") || 0;
    this._objectData.IBevelSize = objectData.content.IBevelSize !== undefined ? objectData.content.IBevelSize : Number("0.5") || 0;
    this._objectData.HBevelSegments = objectData.content.HBevelSegments !== undefined ? objectData.content.HBevelSegments : Number("4") || 0;
    this._objectData.BFont = objectData.content.BFont !== undefined ? objectData.content.BFont : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.AText !== newObjectData.content.AText)
      this._objectData.AText = newObjectData.content.AText;
    if (oldObjectData.content.CTextColor !== newObjectData.content.CTextColor)
      this._objectData.CTextColor = newObjectData.content.CTextColor;
    if (oldObjectData.content.DSize !== newObjectData.content.DSize)
      this._objectData.DSize = newObjectData.content.DSize;
    if (oldObjectData.content.EDepth !== newObjectData.content.EDepth)
      this._objectData.EDepth = newObjectData.content.EDepth;
    if (oldObjectData.content.FCurveSegments !== newObjectData.content.FCurveSegments)
      this._objectData.FCurveSegments = newObjectData.content.FCurveSegments;
    if (oldObjectData.content.GBevelEnabled !== newObjectData.content.GBevelEnabled)
      this._objectData.GBevelEnabled = newObjectData.content.GBevelEnabled;
    if (oldObjectData.content.JBevelThickness !== newObjectData.content.JBevelThickness)
      this._objectData.JBevelThickness = newObjectData.content.JBevelThickness;
    if (oldObjectData.content.IBevelSize !== newObjectData.content.IBevelSize)
      this._objectData.IBevelSize = newObjectData.content.IBevelSize;
    if (oldObjectData.content.HBevelSegments !== newObjectData.content.HBevelSegments)
      this._objectData.HBevelSegments = newObjectData.content.HBevelSegments;
    if (oldObjectData.content.BFont !== newObjectData.content.BFont)
      this._objectData.BFont = newObjectData.content.BFont;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getAText() {
    return this._objectData.AText !== undefined ? this._objectData.AText : "Text";
  }
  _setAText(newValue) {
    this._objectData.AText = newValue;
  }
  _getCTextColor() {
    return this._objectData.CTextColor !== undefined ? this._objectData.CTextColor : "255;255;255";
  }
  _setCTextColor(newValue) {
    this._objectData.CTextColor = newValue;
  }
  _getDSize() {
    return this._objectData.DSize !== undefined ? this._objectData.DSize : Number("20") || 0;
  }
  _setDSize(newValue) {
    this._objectData.DSize = newValue;
  }
  _getEDepth() {
    return this._objectData.EDepth !== undefined ? this._objectData.EDepth : Number("50") || 0;
  }
  _setEDepth(newValue) {
    this._objectData.EDepth = newValue;
  }
  _getFCurveSegments() {
    return this._objectData.FCurveSegments !== undefined ? this._objectData.FCurveSegments : Number("12") || 0;
  }
  _setFCurveSegments(newValue) {
    this._objectData.FCurveSegments = newValue;
  }
  _getGBevelEnabled() {
    return this._objectData.GBevelEnabled !== undefined ? this._objectData.GBevelEnabled : true;
  }
  _setGBevelEnabled(newValue) {
    this._objectData.GBevelEnabled = newValue;
  }
  _toggleGBevelEnabled() {
    this._setGBevelEnabled(!this._getGBevelEnabled());
  }
  _getJBevelThickness() {
    return this._objectData.JBevelThickness !== undefined ? this._objectData.JBevelThickness : Number("1") || 0;
  }
  _setJBevelThickness(newValue) {
    this._objectData.JBevelThickness = newValue;
  }
  _getIBevelSize() {
    return this._objectData.IBevelSize !== undefined ? this._objectData.IBevelSize : Number("0.5") || 0;
  }
  _setIBevelSize(newValue) {
    this._objectData.IBevelSize = newValue;
  }
  _getHBevelSegments() {
    return this._objectData.HBevelSegments !== undefined ? this._objectData.HBevelSegments : Number("4") || 0;
  }
  _setHBevelSegments(newValue) {
    this._objectData.HBevelSegments = newValue;
  }
  _getBFont() {
    return this._objectData.BFont !== undefined ? this._objectData.BFont : "";
  }
  _setBFont(newValue) {
    this._objectData.BFont = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.userFunc0x1d2ae68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
(function InitFontLoader() {
    if (typeof THREE === "undefined") {
        setTimeout(InitFontLoader, 10);
        return;
    }
    const FileLoader = THREE.FileLoader;
    const Loader = THREE.Loader;
    const ShapePath = THREE.ShapePath;
    class FontLoader extends Loader {
        constructor(Manager) {
            super(Manager);
        }
        load(Url, OnLoad, OnProgress, OnError) {
            const Scope = this;
            const Loader = new FileLoader(this.manager);
            Loader.setPath(this.path);
            Loader.setRequestHeader(this.requestHeader);
            Loader.setWithCredentials(this.withCredentials);
            Loader.load(Url, function (Text) {
                const Font = Scope.parse(JSON.parse(Text));
                if (OnLoad) OnLoad(Font);
            }, OnProgress, OnError);
        }
        parse(Json) {
            return new Font(Json);
        }
    }
    class Font {
        constructor(Data) {
            this.isFont = true;
            this.type = "Font";
            this.data = Data;
        }
        generateShapes(Text, Size = 100, Direction = "ltr") {
            const Shapes = [];
            const Paths = CreatePaths(Text, Size, this.data, Direction);
            for (let P = 0, Pl = Paths.length; P < Pl; P++) {
                Shapes.push(...Paths[P].toShapes());
            }
            return Shapes;
        }
    }
    function CreatePaths(Text, Size, Data, Direction) {
        const Chars = Array.from(Text);
        const Scale = Size / Data.resolution;
        const LineHeight = (Data.boundingBox.yMax - Data.boundingBox.yMin + Data.underlineThickness) * Scale;
        const Paths = [];
        let OffsetX = 0, OffsetY = 0;
        if (Direction == "rtl" || Direction == "tb") {
            Chars.reverse();
        }
        for (let I = 0; I < Chars.length; I++) {
            const Char = Chars[I];
            if (Char === "\n") {
                OffsetX = 0;
                OffsetY -= LineHeight;
            } else {
                const Ret = CreatePath(Char, Scale, OffsetX, OffsetY, Data);
                if (Direction == "tb") {
                    OffsetX = 0;
                    OffsetY += Data.ascender * Scale;
                } else {
                    OffsetX += Ret.offsetX;
                }
                Paths.push(Ret.path);
            }
        }
        return Paths;
    }
    function CreatePath(Char, Scale, OffsetX, OffsetY, Data) {
        const Glyph = Data.glyphs[Char] || Data.glyphs['?'];
        if (!Glyph) {
            console.error("THREE.Font: character '" + Char + "' does not exist in font family " + Data.familyName + '.');
            return;
        }
        const Path = new ShapePath();
        let X, Y, Cpx, Cpy, Cpx1, Cpy1, Cpx2, Cpy2;
        if (Glyph.o) {
            const Outline = Glyph._cachedOutline || (Glyph._cachedOutline = Glyph.o.split(' '));
            for (let I = 0, L = Outline.length; I < L;) {
                const Action = Outline[I++];
                switch (Action) {
                    case "m":
                        X = Outline[I++] * Scale + OffsetX;
                        Y = Outline[I++] * Scale + OffsetY;
                        Path.moveTo(X, Y);
                        break;
                    case "l":
                        X = Outline[I++] * Scale + OffsetX;
                        Y = Outline[I++] * Scale + OffsetY;
                        Path.lineTo(X, Y);
                        break;
                    case "q":
                        Cpx = Outline[I++] * Scale + OffsetX;
                        Cpy = Outline[I++] * Scale + OffsetY;
                        Cpx1 = Outline[I++] * Scale + OffsetX;
                        Cpy1 = Outline[I++] * Scale + OffsetY;
                        Path.quadraticCurveTo(Cpx1, Cpy1, Cpx, Cpy);
                        break;
                    case "b":
                        Cpx = Outline[I++] * Scale + OffsetX;
                        Cpy = Outline[I++] * Scale + OffsetY;
                        Cpx1 = Outline[I++] * Scale + OffsetX;
                        Cpy1 = Outline[I++] * Scale + OffsetY;
                        Cpx2 = Outline[I++] * Scale + OffsetX;
                        Cpy2 = Outline[I++] * Scale + OffsetY;
                        Path.bezierCurveTo(Cpx1, Cpy1, Cpx2, Cpy2, Cpx, Cpy);
                        break;
                }
            }
        }
        return { offsetX: Glyph.ha * Scale, path: Path };
    }
    THREE.FontLoader = FontLoader;
    THREE.Font = Font;
})();
(function InitTextGeometry() {
    if (typeof THREE === "undefined") {
        setTimeout(InitTextGeometry, 10);
        return;
    }
    const ExtrudeGeometry = THREE.ExtrudeGeometry;
    class TextGeometry extends ExtrudeGeometry {
        constructor(Text, Parameters = {}) {
            const Font = Parameters.font;
            if (Font === undefined) {
                super();
            } else {
                const Shapes = Font.generateShapes(Text, Parameters.size, Parameters.direction);
                if (Parameters.depth === undefined) Parameters.depth = 50;
                if (Parameters.bevelThickness === undefined) Parameters.bevelThickness = 10;
                if (Parameters.bevelSize === undefined) Parameters.bevelSize = 8;
                if (Parameters.bevelEnabled === undefined) Parameters.bevelEnabled = false;
                super(Shapes, Parameters);
            }
            this.type = "TextGeometry";
        }
        toJSON() {
            return super.toJSON();
        }
        static fromJSON(Data) {
            const Options = Data.options;
            Options.font = new THREE.Font(Options.font.data);
            return new TextGeometry(Options.text, Options);
        }
    }
    THREE.TextGeometry = TextGeometry;
})();
objects.forEach(Object => {
    const Size = Object._getDSize();  
    const Depth = Object._getEDepth();  
    const CurveSegments = Object._getFCurveSegments();  
    const BevelEnabled = Object._getGBevelEnabled();  
    const BevelThickness = Object._getJBevelThickness();  
    const BevelSize = Object._getIBevelSize();  
    const BevelSegments = Object._getHBevelSegments();  
    let TextStr = Object._getAText();  
    Object._isDestroyed = false;  
    const Create3DText = (Font) => {  
        if (Object._isDestroyed) return;  
        const Geometry = new THREE.TextGeometry(TextStr, {  
            font: Font,  
            size: Size,  
            depth: Depth,  
            height: 5,  
            curveSegments: CurveSegments,  
            bevelEnabled: BevelEnabled,  
            bevelThickness: BevelThickness,  
            bevelSize: BevelSize,  
            bevelSegments: BevelSegments  
        });  
        Geometry.computeBoundingBox();  
        const Bbox = Geometry.boundingBox;  
        const TextWidth = Bbox.max.x - Bbox.min.x;  
        const TextHeight = Bbox.max.y - Bbox.min.y;  
        const TextDepth = Bbox.max.z - Bbox.min.z;  
        Geometry.translate(  
            -0.5 * (Bbox.max.x + Bbox.min.x),  
            -0.5 * (Bbox.max.y + Bbox.min.y),  
            -0.5 * (Bbox.max.z + Bbox.min.z)  
        );  
        Geometry.computeBoundingBox();  
        const Material = new THREE.MeshStandardMaterial({  
            color: gdjs.rgbOrHexStringToNumber(Object._getCTextColor()),  
            roughness: 1.0,  
            metalness: 0.0,  
            transparent: true  
        });  
        const Mesh = new THREE.Mesh(Geometry, Material);  
        Mesh.scale.y = -1;  
        Mesh.castShadow = true;  
        Mesh.receiveShadow = true;  
        Object.get3DRendererObject().add(Mesh);  
        Object.threeTextMesh = Mesh;  
        Object.threeFont = Font;  
        const TextModelInstances = Object._instanceContainer.getObjects("Text");  
        if (TextModelInstances) {  
            for (const ModelInstance of [...TextModelInstances]) {  
                ModelInstance.hide(true);  
                ModelInstance.setWidth(TextWidth || 1);  
                ModelInstance.setHeight(TextHeight || 1);  
                ModelInstance.setDepth(TextDepth || 1);  
                ModelInstance.setRotationX(-90);  
            }  
        }  
    };  
    const InitWhenReady = () => {  
    if (Object._isDestroyed) return;  
    if (typeof THREE.FontLoader !== "undefined" && typeof THREE.TextGeometry !== "undefined") {  
        const Loader = new THREE.FontLoader();  
        if (!globalThis.__Text3DFonts) {  
            globalThis.__Text3DFonts = {  
                Helvetiker: {"glyphs":{"S":{"x_min":0,"x_max":788,"ha":890,"o":"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{"x_min":343,"x_max":449,"ha":792,"o":"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{"x_min":183.25,"x_max":608.328125,"ha":792,"o":"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},"y":{"x_min":0,"x_max":684.78125,"ha":771,"o":"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},"g":{"x_min":0,"x_max":686,"ha":838,"o":"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{"x_min":0,"x_max":442,"ha":539,"o":"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{"x_min":0,"x_max":705.5625,"ha":803,"o":"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},"ƒ":{"x_min":-46.265625,"x_max":392,"ha":513,"o":"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},"e":{"x_min":0,"x_max":714,"ha":813,"o":"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},"J":{"x_min":0,"x_max":588,"ha":699,"o":"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{"x_min":-1,"x_max":503,"ha":601,"o":"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{"x_min":-3,"x_max":1008,"ha":1106,"o":"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},"^":{"x_min":193.0625,"x_max":598.609375,"ha":792,"o":"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{"x_min":0,"x_max":507.203125,"ha":604,"o":"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},"D":{"x_min":0,"x_max":828,"ha":935,"o":"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1009.71875,"ha":1100,"o":"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},"$":{"x_min":0,"x_max":700,"ha":793,"o":"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\":{"x_min":-0.015625,"x_max":425.0625,"ha":522,"o":"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},"µ":{"x_min":0,"x_max":697.21875,"ha":747,"o":"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},"’":{"x_min":0,"x_max":139,"ha":236,"o":"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"-":{"x_min":8.71875,"x_max":350.390625,"ha":478,"o":"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},"Q":{"x_min":0,"x_max":968,"ha":1072,"o":"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},"M":{"x_min":0,"x_max":954,"ha":1067,"o":"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},"C":{"x_min":0,"x_max":886,"ha":944,"o":"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{"x_min":0,"x_max":138,"ha":236,"o":"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{"x_min":0,"x_max":480.5625,"ha":578,"o":"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},"X":{"x_min":-0.015625,"x_max":854.15625,"ha":940,"o":"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{"x_min":0,"x_max":963.890625,"ha":1061,"o":"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},")":{"x_min":0,"x_max":318,"ha":415,"o":"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},"}":{"x_min":0,"x_max":481,"ha":578,"o":"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{"x_min":-3,"x_max":1672,"ha":1821,"o":"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},"a":{"x_min":0,"x_max":698.609375,"ha":794,"o":"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{"x_min":8.71875,"x_max":780.953125,"ha":792,"o":"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},"N":{"x_min":0,"x_max":801,"ha":914,"o":"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},"2":{"x_min":59,"x_max":731,"ha":792,"o":"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},"¯":{"x_min":0,"x_max":941.671875,"ha":938,"o":"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},"Z":{"x_min":0,"x_max":779,"ha":849,"o":"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},"u":{"x_min":0,"x_max":617,"ha":729,"o":"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},"k":{"x_min":0,"x_max":612.484375,"ha":697,"o":"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},"s":{"x_min":0,"x_max":604,"ha":697,"o":"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},"B":{"x_min":0,"x_max":778,"ha":876,"o":"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{"x_min":0,"x_max":614,"ha":708,"o":"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{"x_min":0,"x_max":607,"ha":704,"o":"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},"H":{"x_min":0,"x_max":803,"ha":915,"o":"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"c":{"x_min":1,"x_max":701.390625,"ha":775,"o":"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"•":{"x_min":0,"x_max":663.890625,"ha":775,"o":"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{"x_min":0.1875,"x_max":819.546875,"ha":886,"o":"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{"x_min":0,"x_max":318.0625,"ha":415,"o":"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},"U":{"x_min":0,"x_max":796,"ha":904,"o":"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},"F":{"x_min":0,"x_max":683.328125,"ha":717,"o":"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{"x_min":0,"x_max":705.5625,"ha":803,"o":"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"*":{"x_min":116,"x_max":674,"ha":792,"o":"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{"x_min":0,"x_max":777,"ha":835,"o":"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{"x_min":0,"x_max":347,"ha":444,"o":"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},"V":{"x_min":0,"x_max":862.71875,"ha":940,"o":"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "}," ":{"x_min":0,"x_max":0,"ha":853},"0":{"x_min":73,"x_max":715,"ha":792,"o":"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},"”":{"x_min":0,"x_max":347,"ha":454,"o":"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{"x_min":0,"x_max":1260,"ha":1357,"o":"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},"i":{"x_min":14,"x_max":136,"ha":275,"o":"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},"]":{"x_min":0,"x_max":275,"ha":372,"o":"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},"m":{"x_min":0,"x_max":1019,"ha":1128,"o":"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},"8":{"x_min":55,"x_max":736,"ha":792,"o":"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},"R":{"x_min":0,"x_max":781.953125,"ha":907,"o":"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},"o":{"x_min":0,"x_max":713,"ha":821,"o":"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},"5":{"x_min":54.171875,"x_max":738,"ha":792,"o":"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},"7":{"x_min":58.71875,"x_max":730.953125,"ha":792,"o":"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},"K":{"x_min":0,"x_max":819.46875,"ha":906,"o":"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},"d":{"x_min":0,"x_max":683,"ha":796,"o":"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{"x_min":-109,"x_max":247,"ha":232,"o":"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},"E":{"x_min":0,"x_max":736.109375,"ha":789,"o":"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"Y":{"x_min":0,"x_max":820,"ha":886,"o":"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},"\"":{"x_min":0,"x_max":299,"ha":396,"o":"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{"x_min":17.984375,"x_max":773.609375,"ha":792,"o":"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{"x_min":0,"x_max":364,"ha":467,"o":"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},"´":{"x_min":0,"x_max":96,"ha":251,"o":"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{"x_min":11,"x_max":781,"ha":792,"o":"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{"x_min":343,"x_max":449,"ha":792,"o":"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"§":{"x_min":0,"x_max":593,"ha":690,"o":"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},"b":{"x_min":0,"x_max":685,"ha":783,"o":"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},"q":{"x_min":0,"x_max":683,"ha":876,"o":"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},"z":{"x_min":-0.015625,"x_max":613.890625,"ha":697,"o":"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{"x_min":0,"x_max":894,"ha":1000,"o":"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},"®":{"x_min":-3,"x_max":1008,"ha":1106,"o":"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{"x_min":0,"x_max":833,"ha":931,"o":"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},"³":{"x_min":0,"x_max":450,"ha":547,"o":"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{"x_min":0,"x_max":273.609375,"ha":371,"o":"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},"L":{"x_min":0,"x_max":645.828125,"ha":696,"o":"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":-3,"x_max":1089,"ha":1186,"o":"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},"P":{"x_min":0,"x_max":726,"ha":806,"o":"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},"_":{"x_min":0,"x_max":705.5625,"ha":803,"o":"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},"+":{"x_min":23,"x_max":768,"ha":792,"o":"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{"x_min":0,"x_max":1050,"ha":1149,"o":"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},"'":{"x_min":0,"x_max":139,"ha":236,"o":"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"ª":{"x_min":0,"x_max":350,"ha":397,"o":"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"T":{"x_min":0,"x_max":777,"ha":835,"o":"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},"⁋":{"x_min":0,"x_max":0,"ha":694},"j":{"x_min":-77.78125,"x_max":167,"ha":349,"o":"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},"1":{"x_min":215.671875,"x_max":574,"ha":792,"o":"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},"›":{"x_min":18.0625,"x_max":774,"ha":792,"o":"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{"x_min":17.984375,"x_max":773.609375,"ha":792,"o":"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{"x_min":0,"x_max":704.484375,"ha":801,"o":"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},"t":{"x_min":0,"x_max":367,"ha":458,"o":"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{"x_min":0,"x_max":706,"ha":803,"o":"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},"W":{"x_min":0,"x_max":1263.890625,"ha":1351,"o":"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{"x_min":18.0625,"x_max":774,"ha":792,"o":"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"v":{"x_min":0,"x_max":675.15625,"ha":761,"o":"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},"&":{"x_min":-3,"x_max":894.25,"ha":992,"o":"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},"I":{"x_min":41,"x_max":180,"ha":293,"o":"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},"G":{"x_min":0,"x_max":921,"ha":1011,"o":"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},"`":{"x_min":0,"x_max":138.890625,"ha":236,"o":"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"r":{"x_min":0,"x_max":355.5625,"ha":432,"o":"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},"x":{"x_min":0,"x_max":675,"ha":764,"o":"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},"h":{"x_min":0,"x_max":615,"ha":724,"o":"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},";":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},"f":{"x_min":0,"x_max":378,"ha":472,"o":"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{"x_min":1,"x_max":348.21875,"ha":454,"o":"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},"A":{"x_min":0.03125,"x_max":906.953125,"ha":1008,"o":"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},"6":{"x_min":53,"x_max":739,"ha":792,"o":"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},"‘":{"x_min":1,"x_max":139.890625,"ha":236,"o":"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},"O":{"x_min":0,"x_max":958,"ha":1057,"o":"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},"n":{"x_min":0,"x_max":615,"ha":724,"o":"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},"3":{"x_min":54,"x_max":737,"ha":792,"o":"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},"9":{"x_min":53,"x_max":739,"ha":792,"o":"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},"l":{"x_min":41,"x_max":166,"ha":279,"o":"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{"x_min":40.09375,"x_max":728.796875,"ha":825,"o":"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},"4":{"x_min":48,"x_max":742.453125,"ha":792,"o":"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},"p":{"x_min":0,"x_max":685,"ha":786,"o":"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{"x_min":0,"x_max":777,"ha":835,"o":"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "}},"ascender":1189,"boundingBox":{"yMin":-334,"xMin":-111,"yMax":1189,"xMax":1672},"resolution":1000,"descender":-334,"familyName":"Helvetiker","lineHeight":1522},  
                Optimer: {"glyphs":{"S":{"x_min":50,"x_max":639,"ha":699,"o":"m 88 208 q 179 88 122 131 q 318 46 237 46 q 457 98 397 46 q 518 227 518 150 q 401 400 518 336 q 184 498 293 448 q 68 688 68 566 q 156 880 68 811 q 370 950 244 950 q 480 936 430 950 q 597 891 530 922 q 570 822 583 858 q 553 756 558 786 l 539 756 q 354 897 502 897 q 231 855 282 897 q 181 742 181 813 q 298 580 181 640 q 519 483 408 531 q 639 286 639 413 q 538 68 639 152 q 301 -15 438 -15 q 166 2 229 -15 q 50 59 104 19 q 68 135 62 104 q 75 205 75 166 l 88 208 "},"/":{"x_min":-36.03125,"x_max":404.15625,"ha":383,"o":"m -36 -125 l 340 1025 l 404 1024 l 28 -126 l -36 -125 "},"y":{"x_min":4.171875,"x_max":665.28125,"ha":664,"o":"m 4 654 l 86 647 l 165 654 q 202 536 188 577 q 241 431 215 495 l 363 129 l 473 413 q 552 654 519 537 q 606 647 583 647 q 665 654 633 647 q 416 125 531 388 q 223 -372 301 -137 l 187 -366 q 141 -366 163 -366 q 112 -372 122 -370 l 290 -22 q 4 654 170 294 "},"≈":{"x_min":118.0625,"x_max":1019.453125,"ha":1139,"o":"m 765 442 q 564 487 700 442 q 376 533 429 533 q 250 506 298 533 q 118 427 202 480 l 118 501 q 245 572 180 545 q 376 600 311 600 q 574 553 438 600 q 765 507 709 507 q 888 534 829 507 q 1019 614 947 562 l 1019 538 q 892 467 954 493 q 765 442 830 442 m 759 214 q 568 260 702 214 q 376 307 433 307 q 236 272 300 307 q 118 202 173 238 l 118 277 q 247 346 181 320 q 380 372 312 372 q 570 326 445 372 q 765 281 695 281 q 883 306 830 281 q 1019 388 936 331 l 1019 313 q 894 240 959 266 q 759 214 829 214 "},"g":{"x_min":32,"x_max":672,"ha":688,"o":"m 81 123 q 112 201 81 169 q 193 252 144 233 l 193 262 q 97 329 130 277 q 64 447 64 380 q 141 610 64 549 q 323 672 218 672 q 421 661 357 672 q 500 650 486 651 l 672 654 l 672 582 q 599 592 635 587 q 537 597 563 597 q 607 458 607 548 q 527 294 607 356 q 342 232 447 232 q 291 235 319 232 q 255 239 262 239 q 208 220 228 239 q 188 173 188 201 q 221 120 188 136 q 296 104 254 104 l 427 104 q 603 56 534 104 q 672 -93 672 9 q 560 -299 672 -226 q 309 -372 448 -372 q 115 -327 199 -372 q 32 -183 32 -283 q 76 -62 32 -110 q 193 8 121 -13 q 112 51 143 25 q 81 123 81 77 m 332 278 q 439 332 401 278 q 478 457 478 386 q 441 575 478 525 q 338 625 404 625 q 232 570 271 625 q 194 447 194 515 q 230 328 194 379 q 332 278 266 278 m 337 -316 q 491 -270 423 -316 q 559 -141 559 -224 q 500 -29 559 -62 q 353 3 441 3 q 199 -36 263 3 q 136 -162 136 -76 q 195 -277 136 -238 q 337 -316 255 -316 "},"²":{"x_min":15.28125,"x_max":412.5,"ha":496,"o":"m 297 744 q 270 830 297 795 q 197 866 244 866 q 120 837 149 866 q 83 761 90 808 l 76 759 q 54 802 68 780 q 31 837 40 824 q 210 901 108 901 q 334 862 278 901 q 390 758 390 824 q 282 568 390 656 q 111 428 174 479 l 293 428 q 350 431 316 428 q 412 439 384 434 l 406 397 l 412 356 l 304 361 l 111 361 l 15 355 l 15 378 q 220 567 144 484 q 297 744 297 651 "},"e":{"x_min":41,"x_max":645.15625,"ha":681,"o":"m 406 42 q 602 130 523 42 l 618 125 q 611 86 614 104 q 609 44 609 67 q 497 0 561 14 q 370 -15 434 -15 q 130 73 220 -15 q 41 311 41 161 q 127 563 41 455 q 356 672 214 672 q 563 592 482 672 q 645 385 645 512 l 643 331 l 313 335 l 179 331 q 235 126 179 210 q 406 42 291 42 m 511 392 l 513 436 q 470 563 513 509 q 356 618 427 618 q 230 553 268 618 q 179 388 191 488 l 511 392 "},"J":{"x_min":-71,"x_max":277,"ha":385,"o":"m 118 -40 q 131 62 128 9 q 135 184 135 115 q 132 462 135 325 q 127 690 130 598 q 111 932 123 782 q 159 928 129 932 q 193 925 189 925 q 238 927 221 925 q 277 932 256 929 q 268 665 277 843 q 260 457 260 487 l 260 165 q 260 107 260 147 q 260 48 260 68 q 169 -155 260 -88 q -62 -222 79 -222 l -71 -180 q 50 -134 1 -166 q 118 -40 100 -102 "},"≥":{"x_min":176.1875,"x_max":963,"ha":1139,"o":"m 963 462 l 176 196 l 176 266 l 850 491 l 176 718 l 176 788 l 963 522 l 963 462 m 963 26 l 176 26 l 176 93 l 963 93 l 963 26 "},"^":{"x_min":0,"x_max":390,"ha":403,"o":"m 150 978 l 239 978 l 390 743 l 344 743 l 195 875 l 49 743 l 0 743 l 150 978 "},"D":{"x_min":108,"x_max":991,"ha":1043,"o":"m 126 465 q 117 704 126 536 q 108 931 108 872 l 210 929 q 350 934 251 929 q 477 939 449 939 q 579 936 553 939 q 709 917 605 934 q 902 775 814 900 q 991 483 991 650 q 852 130 991 261 q 491 0 713 0 l 378 0 l 228 7 l 203 7 q 148 4 173 7 q 108 0 123 1 q 117 239 108 70 q 126 465 126 408 m 402 64 q 724 168 609 64 q 840 479 840 273 q 730 774 840 671 q 428 878 621 878 q 345 873 400 878 q 262 869 289 869 l 255 497 l 255 376 l 262 76 q 332 68 292 72 q 402 64 373 64 "},"w":{"x_min":4.171875,"x_max":1052.78125,"ha":1047,"o":"m 4 655 q 55 648 41 648 q 86 647 69 647 q 165 654 120 647 q 190 540 176 587 q 238 394 204 492 l 329 141 q 498 654 419 386 q 551 647 526 647 q 609 654 577 647 q 637 544 620 601 q 677 420 654 487 l 770 135 l 872 413 q 911 532 893 472 q 944 654 930 592 q 979 647 970 648 q 1000 647 988 647 q 1052 654 1022 647 q 961 457 1002 555 q 871 235 919 359 q 782 0 824 110 q 755 3 772 0 q 733 6 738 6 q 708 3 724 6 q 686 0 692 0 q 650 127 667 72 q 611 239 632 183 l 518 494 q 432 258 475 382 q 348 0 390 134 q 325 3 336 1 q 297 5 313 5 q 269 3 284 5 q 245 0 254 1 q 162 244 200 140 q 86 447 125 347 q 4 655 47 546 "},"$":{"x_min":89,"x_max":666,"ha":749,"o":"m 139 186 l 146 186 q 213 91 165 119 q 342 50 261 63 l 342 416 q 142 515 196 458 q 89 648 89 573 q 164 819 89 752 q 342 886 239 886 q 330 985 342 936 l 359 979 l 404 984 q 400 924 401 945 q 399 886 399 904 q 510 874 457 886 q 605 834 562 862 q 582 788 592 808 q 555 729 572 768 l 547 729 q 495 810 535 783 q 399 837 455 837 l 399 520 q 610 419 554 479 q 666 277 666 359 q 588 87 666 164 q 399 0 511 9 l 399 -32 q 399 -63 399 -48 q 405 -125 400 -78 l 368 -121 l 329 -125 l 342 0 q 210 13 273 0 q 98 58 147 27 l 139 186 m 342 836 q 237 787 278 826 q 196 686 196 748 q 237 588 196 626 q 342 537 279 551 l 342 836 m 553 231 q 513 337 553 300 q 399 402 473 375 l 399 51 q 512 113 471 66 q 553 231 553 159 "},"\\":{"x_min":-36,"x_max":403.140625,"ha":383,"o":"m -36 1025 l 28 1025 l 403 -125 l 340 -125 l -36 1025 "},"-":{"x_min":58.328125,"x_max":388.890625,"ha":449,"o":"m 58 390 l 388 390 l 388 273 l 58 273 l 58 390 "},"Q":{"x_min":51,"x_max":1074.609375,"ha":1119,"o":"m 566 -14 q 194 113 338 -14 q 51 465 51 241 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 756 q 1065 525 1062 551 q 1068 462 1068 499 q 1065 405 1068 429 q 1050 305 1062 381 q 960 144 1038 229 q 748 6 881 59 l 930 -112 q 1004 -161 963 -136 q 1074 -200 1045 -186 q 1008 -228 1035 -214 q 951 -267 980 -243 q 876 -208 912 -234 q 803 -154 841 -182 l 606 -14 l 566 -14 m 202 468 q 290 163 202 283 q 559 43 379 43 q 826 163 738 43 q 915 468 915 284 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 638 267 763 q 202 468 202 552 "},"M":{"x_min":55,"x_max":1165,"ha":1238,"o":"m 190 950 l 243 950 q 331 772 291 851 q 412 612 370 693 q 504 436 454 532 l 626 214 q 742 435 671 298 q 882 711 813 572 q 1001 950 952 850 l 1052 950 q 1082 649 1067 791 q 1118 341 1098 508 q 1165 0 1139 174 q 1121 8 1139 5 q 1088 11 1103 11 q 1049 6 1071 11 q 1008 0 1027 2 q 998 226 1008 109 q 974 461 989 343 q 944 695 959 579 l 748 312 q 610 0 665 152 l 594 1 l 576 0 q 227 685 402 364 l 188 307 q 172 128 175 179 q 168 0 168 77 q 138 4 157 1 q 110 6 118 6 q 81 4 93 6 q 55 0 68 2 q 121 333 89 168 q 171 652 152 498 q 190 950 190 805 "},"C":{"x_min":51,"x_max":881.5625,"ha":913,"o":"m 828 737 q 552 889 733 889 q 295 768 383 889 q 207 469 207 647 q 299 177 207 305 q 551 50 391 50 q 710 86 637 50 q 855 189 783 122 l 870 183 q 858 122 862 147 q 855 69 855 97 q 521 -15 699 -15 q 180 116 309 -15 q 51 462 51 248 q 189 820 51 690 q 556 950 327 950 q 719 930 638 950 q 881 875 799 911 q 857 809 867 843 q 845 737 847 775 l 828 737 "},"!":{"x_min":136,"x_max":312,"ha":449,"o":"m 223 156 q 285 130 259 156 q 312 68 312 105 q 285 8 312 32 q 223 -15 259 -15 q 161 9 187 -15 q 136 68 136 33 q 160 130 136 105 q 223 156 185 156 m 150 752 l 144 841 q 161 919 144 888 q 223 950 178 950 q 282 925 260 950 q 304 863 304 901 q 299 808 304 845 q 295 752 295 770 l 246 250 q 223 250 238 250 q 199 250 206 250 l 150 752 "},"{":{"x_min":116,"x_max":567.390625,"ha":683,"o":"m 491 909 q 421 874 445 909 q 397 792 397 839 l 397 744 l 397 583 q 368 434 397 493 q 263 354 339 376 q 367 272 338 332 q 397 125 397 212 l 397 -35 q 414 -149 397 -108 q 471 -197 431 -191 q 529 -204 511 -204 q 567 -204 548 -204 l 567 -276 q 387 -239 459 -276 q 315 -105 315 -203 l 315 -28 l 315 132 q 296 244 315 194 q 240 303 277 294 q 176 314 204 312 q 116 317 148 317 l 116 389 q 270 429 225 389 q 315 576 315 469 l 315 737 q 348 918 315 870 q 450 977 381 966 q 567 983 503 983 l 567 912 l 491 909 "},"X":{"x_min":0,"x_max":739,"ha":739,"o":"m 200 285 l 318 456 q 18 932 159 718 q 63 929 33 932 q 109 926 94 926 q 168 929 147 926 q 198 932 188 932 q 296 743 244 841 q 391 568 348 644 l 489 726 q 597 932 548 825 q 627 927 614 929 q 661 926 641 926 q 693 929 671 926 q 728 932 715 932 q 616 781 673 862 q 524 652 558 700 l 427 512 q 523 347 480 419 q 614 197 566 275 q 739 0 662 119 q 686 3 719 0 q 647 6 652 6 q 595 4 618 6 q 558 0 572 1 q 459 197 512 97 q 353 398 405 298 l 265 249 q 174 96 193 130 q 127 0 155 62 q 89 3 113 0 q 62 6 65 6 q 26 4 43 6 q 0 0 9 1 l 200 285 "},"#":{"x_min":78,"x_max":972.4375,"ha":1050,"o":"m 497 647 l 675 647 l 791 969 l 877 968 l 761 647 l 972 647 l 948 576 l 736 576 l 671 390 l 896 390 l 873 319 l 644 319 l 531 0 l 446 0 l 559 319 l 382 319 l 266 0 l 182 0 l 294 319 l 78 319 l 102 390 l 320 390 l 386 576 l 151 576 l 176 647 l 410 647 l 526 969 l 610 969 l 497 647 m 472 576 l 407 390 l 587 390 l 650 576 l 472 576 "},")":{"x_min":65.671875,"x_max":332,"ha":449,"o":"m 332 376 q 271 81 332 217 q 96 -183 211 -54 q 65 -151 83 -164 q 193 104 155 -16 q 232 386 232 226 q 191 661 232 533 q 65 918 150 789 q 96 950 87 933 q 273 681 215 816 q 332 376 332 545 "},"}":{"x_min":114,"x_max":567,"ha":683,"o":"m 369 576 q 405 438 369 487 q 527 389 441 389 l 567 389 l 567 317 q 415 278 461 317 q 369 132 369 239 l 369 -28 q 319 -229 369 -182 q 114 -276 270 -276 l 114 -204 q 252 -172 218 -204 q 286 -83 286 -141 l 286 -35 l 286 125 q 314 271 286 212 q 418 354 342 329 q 311 435 337 382 q 286 584 286 488 l 286 745 q 268 860 286 818 q 191 913 251 903 l 114 913 l 114 983 l 186 982 q 287 960 242 982 q 346 900 331 938 q 365 822 362 862 q 369 737 369 783 l 369 576 "},"‰":{"x_min":28,"x_max":1511,"ha":1536,"o":"m 799 0 q 647 62 708 0 q 586 218 586 124 q 647 372 586 309 q 799 436 709 436 q 949 373 888 436 q 1011 223 1011 311 q 995 130 1011 176 q 918 35 972 70 q 799 0 865 0 m 1298 0 q 1146 62 1206 0 q 1087 218 1087 124 q 1148 372 1087 308 q 1299 436 1209 436 q 1449 373 1388 436 q 1511 223 1511 311 q 1494 130 1511 169 q 1418 34 1472 69 q 1298 0 1365 0 m 241 448 q 89 510 150 448 q 28 663 28 573 q 89 820 28 755 q 241 885 151 885 q 391 823 329 885 q 453 672 453 761 q 434 580 453 620 q 359 483 412 518 q 241 448 307 448 m 863 1015 l 227 -125 l 158 -125 l 793 1015 l 863 1015 m 897 260 q 872 353 897 310 q 798 397 847 397 q 718 340 737 397 q 700 202 700 283 q 719 86 700 133 q 798 40 738 40 q 866 73 840 40 q 892 149 892 106 q 895 206 894 169 q 897 260 897 242 m 339 684 q 319 797 339 750 q 244 845 300 845 q 161 784 182 845 q 141 645 141 723 q 165 540 141 590 q 237 490 189 490 q 303 524 278 490 q 334 598 329 558 q 339 684 339 638 m 1397 260 q 1373 356 1397 315 q 1297 397 1349 397 q 1218 340 1237 397 q 1200 202 1200 283 q 1219 87 1200 134 q 1297 40 1238 40 q 1366 73 1340 40 q 1392 149 1392 106 q 1395 206 1394 169 q 1397 260 1397 242 "},"a":{"x_min":44,"x_max":653.734375,"ha":647,"o":"m 233 -15 q 99 33 154 -15 q 44 162 44 82 q 105 302 44 273 q 302 363 167 331 q 444 448 437 395 q 401 567 444 519 q 287 615 359 615 q 190 587 231 615 q 124 508 149 560 l 95 519 l 103 591 q 204 651 148 631 q 323 672 260 672 q 499 623 443 672 q 555 457 555 574 l 555 132 q 566 70 555 86 q 616 55 578 55 l 653 55 l 653 26 q 594 4 624 15 q 536 -6 564 -6 q 468 15 492 -6 q 436 83 445 38 q 341 9 387 34 q 233 -15 294 -15 m 175 185 q 204 99 175 135 q 282 63 234 63 q 389 106 343 63 q 436 211 436 150 l 436 344 q 239 294 304 320 q 175 185 175 268 "},"=":{"x_min":169.4375,"x_max":969.453125,"ha":1139,"o":"m 969 499 l 169 499 l 169 564 l 969 564 l 969 499 m 969 248 l 169 248 l 169 315 l 969 315 l 969 248 "},"N":{"x_min":98,"x_max":911.890625,"ha":1011,"o":"m 112 230 q 114 486 112 315 q 117 741 117 656 l 117 950 l 166 950 q 326 766 239 865 q 468 606 413 667 q 610 451 524 544 l 821 227 l 821 604 q 816 765 821 685 q 803 931 812 845 l 855 927 l 911 931 q 901 831 906 884 q 897 741 897 779 q 894 413 897 619 q 892 165 892 207 l 892 -15 l 849 -15 q 730 125 796 50 q 589 281 664 201 l 193 702 l 193 330 q 212 -1 193 169 l 149 2 l 98 -1 q 108 125 105 79 q 112 230 112 170 "},"2":{"x_min":22,"x_max":622,"ha":749,"o":"m 449 648 q 410 789 449 727 q 298 851 371 851 q 173 802 219 851 q 128 676 128 753 l 118 673 q 84 740 100 712 q 47 799 69 768 q 313 911 158 911 q 507 844 426 911 q 589 667 589 777 q 527 479 589 555 q 315 258 466 404 l 169 118 l 442 118 q 531 123 485 118 q 622 136 576 129 q 617 102 619 117 q 616 68 616 87 q 617 37 616 54 q 622 0 619 20 q 438 4 562 0 q 252 8 315 8 q 142 7 195 8 q 22 0 88 6 l 22 40 q 234 238 155 158 q 380 430 312 319 q 449 648 449 541 "},"Z":{"x_min":6.9375,"x_max":801.390625,"ha":828,"o":"m 6 36 q 222 324 112 176 q 425 605 333 473 l 597 857 l 433 857 q 59 836 247 857 l 65 883 l 59 932 q 262 927 134 932 q 427 922 390 922 q 622 927 491 922 q 801 932 754 932 l 801 904 q 594 629 709 785 q 399 361 479 473 q 201 77 319 249 l 427 77 q 581 82 520 77 q 801 103 643 87 l 797 68 l 795 54 l 797 34 l 801 0 q 504 4 683 0 q 325 8 326 8 q 166 4 272 8 q 6 0 61 0 l 6 36 "},"u":{"x_min":90,"x_max":662.21875,"ha":754,"o":"m 653 497 l 653 156 q 654 83 653 122 q 661 -1 656 44 q 623 3 632 2 q 596 4 615 4 q 572 3 581 4 q 533 -1 563 2 l 536 117 q 439 18 491 51 q 313 -15 386 -15 q 147 48 199 -15 q 96 227 96 112 l 96 352 l 96 516 l 90 654 q 158 647 125 647 q 189 648 178 647 q 226 654 200 650 q 220 450 226 586 q 215 246 215 314 q 248 114 215 163 q 361 66 281 66 q 473 112 426 66 q 527 225 520 158 q 536 340 536 282 q 531 497 536 393 q 527 654 527 601 q 572 647 563 647 q 595 647 581 647 q 626 648 616 647 q 662 654 637 650 l 653 497 "},"k":{"x_min":97,"x_max":677.5625,"ha":683,"o":"m 104 656 q 100 873 104 741 q 97 1025 97 1005 q 164 1018 134 1018 q 231 1025 196 1018 q 227 825 231 962 q 223 622 223 687 l 223 377 l 245 377 q 507 654 391 506 q 563 647 538 647 q 616 647 589 647 q 648 652 638 651 l 349 398 l 548 165 q 608 93 577 127 q 677 19 638 59 l 677 0 q 628 3 659 0 q 591 6 597 6 q 544 3 567 6 q 510 0 520 0 q 438 101 473 54 q 360 197 402 148 l 269 308 l 252 324 l 223 326 q 227 164 223 272 q 231 0 231 55 q 200 4 215 2 q 164 5 185 5 q 127 3 146 5 q 97 0 108 1 q 100 386 97 151 q 104 656 104 620 "},"s":{"x_min":68,"x_max":531,"ha":593,"o":"m 117 161 q 172 69 130 102 q 276 36 214 36 q 378 67 333 36 q 424 152 424 98 q 334 260 424 224 q 168 320 251 290 q 79 460 79 366 q 147 612 79 552 q 310 672 216 672 q 400 660 355 672 q 500 627 446 649 l 461 508 l 448 508 q 401 587 433 561 q 314 614 369 614 q 223 584 262 614 q 185 505 185 555 q 358 375 185 427 q 531 197 531 322 q 450 39 531 93 q 259 -15 369 -15 q 68 23 162 -15 l 103 161 l 117 161 "},"B":{"x_min":109,"x_max":751,"ha":801,"o":"m 127 559 q 109 931 127 759 l 203 929 q 338 932 244 929 q 438 935 432 935 q 629 883 549 935 q 709 726 709 832 q 638 579 709 633 q 464 504 567 524 q 673 438 595 490 q 751 268 751 387 q 639 66 751 133 q 382 0 528 0 l 232 6 q 162 3 211 6 q 109 0 113 0 q 118 287 109 86 q 127 559 127 488 m 256 257 l 256 149 l 261 61 l 337 57 q 526 108 450 57 q 602 266 602 159 q 523 428 602 386 q 312 471 444 471 l 256 471 l 256 257 m 569 706 q 507 834 569 788 q 361 879 446 879 l 261 875 q 252 709 252 798 l 252 522 q 476 558 384 522 q 569 706 569 595 "},"?":{"x_min":128,"x_max":520,"ha":601,"o":"m 307 156 q 367 130 342 156 q 392 68 392 105 q 367 7 392 30 q 307 -15 343 -15 q 244 8 269 -15 q 220 68 220 32 q 244 130 220 105 q 307 156 269 156 m 329 250 q 214 290 261 250 q 168 399 168 331 q 287 595 168 479 q 406 776 406 712 q 371 858 406 823 q 292 894 337 894 q 207 867 243 894 q 162 794 171 840 l 150 794 q 142 835 146 822 q 128 894 139 849 q 210 936 165 922 q 305 950 255 950 q 457 893 394 950 q 520 748 520 837 q 398 550 520 657 q 276 370 276 443 q 293 316 276 337 q 343 296 310 296 q 397 302 372 296 l 383 256 q 357 251 365 252 q 329 250 348 250 "},"H":{"x_min":108,"x_max":927.453125,"ha":1036,"o":"m 258 318 q 263 143 258 255 q 268 0 268 30 q 229 3 255 0 q 188 8 202 8 q 148 3 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 204 925 q 268 932 259 932 q 263 719 268 854 q 258 547 258 584 l 517 543 l 777 547 q 773 786 777 641 q 769 932 769 930 q 814 928 785 932 q 848 925 842 925 q 894 928 864 925 q 927 932 923 932 q 914 798 919 868 q 909 659 909 729 l 909 448 l 909 283 q 916 135 909 238 q 924 0 924 31 q 885 4 911 0 q 846 8 860 8 q 807 4 832 8 q 769 0 781 0 q 773 101 769 37 q 777 177 777 164 l 777 318 l 777 468 q 604 468 720 468 q 431 468 489 468 l 258 468 l 258 318 "},"c":{"x_min":36,"x_max":613.78125,"ha":644,"o":"m 606 119 l 594 41 q 493 -3 548 7 q 365 -15 438 -15 q 131 79 227 -15 q 36 312 36 173 q 134 576 36 480 q 399 672 233 672 q 513 658 459 672 q 613 616 566 645 q 586 492 597 563 l 571 492 q 510 586 550 553 q 406 619 470 619 q 235 532 294 619 q 176 327 176 445 q 237 125 176 209 q 415 42 299 42 q 594 122 520 42 l 606 119 "},"(":{"x_min":114,"x_max":380.5625,"ha":449,"o":"m 114 388 q 175 684 114 545 q 351 950 237 822 q 380 918 361 933 q 253 660 291 782 q 215 379 215 538 q 256 103 215 231 q 380 -151 297 -25 q 351 -183 361 -167 q 173 84 232 -50 q 114 388 114 219 "},"U":{"x_min":101,"x_max":919.0625,"ha":1015,"o":"m 181 926 q 228 929 195 926 q 263 932 262 932 q 251 804 255 853 q 248 697 248 755 l 248 457 q 315 134 248 212 q 515 57 382 57 q 733 129 654 57 q 813 334 813 201 l 813 458 l 813 655 q 810 797 813 733 q 798 931 807 862 q 827 927 813 929 q 859 926 841 926 q 888 929 868 926 q 919 932 907 932 q 905 779 909 853 q 902 600 902 705 l 902 366 q 793 81 902 178 q 492 -15 685 -15 q 211 66 307 -15 q 116 323 116 147 l 116 425 l 116 698 q 109 826 116 759 q 101 931 103 893 q 138 927 120 929 q 181 926 156 926 "},"F":{"x_min":108,"x_max":613.5625,"ha":671,"o":"m 258 316 q 263 142 258 254 q 268 0 268 30 q 229 3 255 0 q 188 8 202 8 q 148 3 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 802 l 358 928 l 613 931 l 610 886 l 613 836 q 505 855 549 851 q 388 860 460 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 "},":":{"x_min":134,"x_max":309,"ha":446,"o":"m 222 636 q 284 611 259 636 q 309 548 309 586 q 284 486 309 512 q 222 461 260 461 q 160 486 186 461 q 134 548 134 511 q 159 610 134 584 q 222 636 185 636 m 221 156 q 283 131 257 156 q 309 69 309 107 q 284 8 309 32 q 221 -15 259 -15 q 159 9 185 -15 q 134 69 134 33 q 159 131 134 107 q 221 156 185 156 "},"*":{"x_min":94,"x_max":580,"ha":675,"o":"m 336 940 q 367 944 349 940 q 389 948 385 948 q 368 850 375 902 q 362 747 362 799 q 522 873 442 800 q 548 812 539 829 q 580 778 556 796 q 386 702 485 750 q 476 661 427 680 q 575 629 524 643 q 521 535 539 587 q 441 604 478 573 q 362 661 403 634 q 369 564 362 615 q 391 459 377 513 q 360 463 379 459 q 336 467 340 467 q 306 463 325 467 q 282 459 288 459 q 304 568 296 522 q 313 661 313 615 q 152 535 221 602 q 128 589 138 569 q 97 630 117 608 q 185 661 140 643 q 287 704 231 679 q 189 746 234 728 q 94 777 145 763 q 125 818 113 795 q 150 873 137 841 q 227 805 184 839 q 313 747 269 771 q 309 810 313 784 q 282 950 305 836 q 310 942 297 945 q 336 940 324 940 "},"°":{"x_min":176,"x_max":508,"ha":683,"o":"m 176 889 q 228 1010 176 961 q 355 1060 280 1060 q 460 1011 413 1060 q 508 904 508 962 q 455 785 508 839 q 337 731 402 731 q 222 776 269 731 q 176 889 176 821 m 241 880 q 266 805 241 836 q 336 775 292 775 q 413 811 386 775 q 441 899 441 847 q 417 985 441 952 q 343 1018 393 1018 q 281 995 307 1018 q 247 940 254 973 q 241 880 241 906 "},"V":{"x_min":0,"x_max":852.78125,"ha":853,"o":"m 190 477 l 74 759 l 0 932 l 83 926 q 134 929 98 926 q 173 931 170 931 q 206 829 187 884 q 248 704 224 773 l 308 548 l 454 153 l 586 502 q 729 931 666 713 l 790 927 l 852 931 q 643 467 748 720 q 470 0 538 215 q 445 4 457 1 q 418 6 432 6 q 384 3 399 6 q 366 0 368 0 q 279 256 331 123 q 190 477 226 389 "},"0":{"x_min":48,"x_max":699,"ha":749,"o":"m 372 909 q 621 773 544 909 q 699 451 699 637 q 627 116 699 252 q 372 -19 556 -19 q 120 114 193 -19 q 48 444 48 247 q 120 774 48 639 q 372 909 193 909 m 187 365 q 226 137 187 238 q 373 37 266 37 q 457 62 421 37 q 519 142 494 88 q 552 271 545 196 q 559 455 559 346 q 526 736 559 622 q 371 851 493 851 q 245 783 280 851 q 198 647 210 716 q 187 444 187 577 l 187 365 "},"@":{"x_min":78,"x_max":1289,"ha":1367,"o":"m 906 640 l 970 640 l 876 266 l 864 203 q 886 157 864 172 q 940 142 908 142 q 1136 262 1062 142 q 1211 513 1211 383 q 1067 801 1211 693 q 735 909 923 909 q 324 753 495 909 q 154 362 154 598 q 301 1 154 135 q 679 -132 448 -132 q 904 -99 791 -132 q 1105 -6 1016 -67 l 1129 -43 q 923 -150 1033 -113 q 694 -188 812 -188 q 258 -43 439 -188 q 78 350 78 100 q 273 791 78 614 q 737 969 469 969 q 1122 843 955 969 q 1289 507 1289 717 q 1187 214 1289 346 q 930 82 1086 82 q 835 103 879 82 q 792 170 792 124 l 792 203 q 709 116 762 150 q 595 82 655 82 q 439 139 493 82 q 386 302 386 197 q 471 553 386 441 q 692 665 556 665 q 797 639 754 665 q 864 556 840 613 l 906 640 m 849 477 q 796 572 835 535 q 701 609 758 609 q 529 511 592 609 q 467 297 467 413 q 503 184 467 230 q 605 139 540 139 q 733 188 679 139 q 807 313 787 238 l 849 477 "},"i":{"x_min":91.765625,"x_max":244,"ha":342,"o":"m 100 144 l 100 520 l 93 654 q 161 648 130 648 q 194 649 182 648 q 229 654 207 650 q 221 579 224 616 q 219 505 219 543 q 224 240 219 417 q 229 0 229 63 q 197 3 212 1 q 161 5 181 5 q 116 2 131 5 q 91 0 100 0 l 100 144 m 168 963 q 223 940 202 963 q 244 881 244 917 q 222 831 244 849 q 168 813 200 813 q 115 833 137 813 q 93 885 93 853 q 113 941 93 919 q 168 963 134 963 "},"≤":{"x_min":176,"x_max":962.703125,"ha":1139,"o":"m 288 491 l 962 266 l 962 196 l 176 462 l 176 521 l 962 788 l 962 718 l 288 491 m 962 26 l 176 26 l 176 93 l 962 93 l 962 26 "},"]":{"x_min":83,"x_max":332,"ha":449,"o":"m 209 -154 l 83 -158 l 85 -129 l 85 -98 q 183 -104 128 -104 l 229 -104 l 232 386 l 232 880 l 185 880 q 134 877 162 880 q 83 872 107 874 l 85 903 l 85 932 l 205 929 l 332 929 q 326 852 332 909 q 321 766 321 794 l 321 455 l 321 2 l 332 -158 l 209 -154 "},"m":{"x_min":91,"x_max":1075,"ha":1167,"o":"m 101 155 l 101 494 q 98 568 101 529 q 91 654 96 606 q 155 647 123 647 l 221 654 l 216 537 q 317 638 261 604 q 450 672 373 672 q 629 547 581 672 q 733 639 677 606 q 860 672 789 672 q 1018 606 968 672 q 1069 429 1069 540 l 1069 298 l 1069 136 l 1075 0 q 1038 3 1063 0 q 1006 6 1013 6 q 968 3 992 6 q 938 0 943 0 q 944 203 938 68 q 950 406 950 338 q 918 536 950 486 q 810 587 887 587 q 699 540 745 587 q 648 452 653 493 q 642 376 643 410 q 641 326 641 342 l 641 314 q 644 132 641 258 q 647 0 647 6 q 607 4 621 2 q 581 5 593 5 q 542 2 570 5 q 514 0 515 0 q 519 168 514 55 q 524 321 524 280 l 524 406 q 490 534 524 482 q 383 587 457 587 q 273 541 314 587 q 223 436 231 496 q 216 314 216 376 q 219 133 216 244 q 222 0 222 22 q 183 3 207 0 q 154 6 159 6 q 117 4 134 6 q 91 0 100 1 l 101 155 "},"8":{"x_min":59,"x_max":689,"ha":749,"o":"m 110 696 q 187 853 110 797 q 370 909 264 909 q 558 854 480 909 q 636 694 636 800 q 589 575 636 621 q 467 510 543 529 l 467 499 q 630 413 572 475 q 689 247 689 351 q 597 51 689 120 q 374 -18 505 -18 q 149 48 239 -18 q 59 247 59 115 q 118 414 59 347 q 281 499 178 480 l 281 510 q 157 570 205 521 q 110 696 110 619 m 371 531 q 472 577 437 531 q 507 693 507 624 q 470 810 507 764 q 366 856 433 856 q 271 807 305 856 q 238 693 238 758 q 271 578 238 625 q 371 531 305 531 m 373 31 q 505 97 461 31 q 550 255 550 164 q 506 415 550 348 q 373 482 462 482 q 239 416 283 482 q 195 255 195 351 q 240 96 195 162 q 373 31 285 31 "},"R":{"x_min":109,"x_max":806.234375,"ha":785,"o":"m 261 0 q 223 3 248 0 q 185 8 198 8 q 148 5 168 8 q 109 0 127 2 q 118 306 109 90 q 127 598 127 523 q 122 761 127 672 q 109 931 117 849 l 203 929 l 409 935 q 618 882 529 935 q 708 719 708 830 q 634 559 708 615 q 442 473 560 503 q 620 240 533 355 q 806 0 708 124 l 732 5 l 610 0 q 449 240 529 127 q 283 455 369 353 l 251 455 l 251 307 q 256 138 251 245 q 261 0 261 31 m 570 699 q 504 835 570 791 q 344 879 439 879 l 261 875 q 253 772 255 834 q 251 701 251 709 l 251 504 q 479 542 388 504 q 570 699 570 581 "},"×":{"x_min":203.984375,"x_max":938.015625,"ha":1139,"o":"m 892 775 l 938 729 l 616 406 l 938 86 l 892 38 l 571 361 l 247 38 l 203 86 l 525 407 l 204 729 l 247 775 l 570 453 l 892 775 "},"o":{"x_min":41,"x_max":710,"ha":753,"o":"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},"5":{"x_min":75,"x_max":654,"ha":749,"o":"m 116 201 q 176 77 131 120 q 303 35 221 35 q 454 98 396 35 q 512 255 512 161 q 457 407 512 346 q 313 469 403 469 q 170 417 227 469 l 150 428 l 158 526 q 158 662 158 570 q 158 801 158 754 l 147 888 l 383 879 l 412 879 q 628 887 520 879 q 624 848 626 870 q 622 818 622 826 l 626 760 l 425 761 l 227 761 q 221 631 227 717 q 216 500 216 544 q 375 536 296 536 q 572 465 491 536 q 654 279 654 394 q 550 60 654 139 q 304 -18 447 -18 q 179 -6 231 -18 q 75 34 127 4 q 101 201 87 118 l 116 201 "},"7":{"x_min":122.609375,"x_max":729.5625,"ha":749,"o":"m 461 553 l 586 770 l 362 770 q 129 755 232 770 q 133 786 132 769 q 135 820 135 804 q 128 888 135 853 l 408 883 l 729 887 l 729 871 q 463 429 582 641 q 251 0 344 216 l 194 8 q 153 5 169 8 q 122 0 137 2 q 214 146 179 91 q 333 339 249 201 q 461 553 417 477 "},"K":{"x_min":108,"x_max":856.625,"ha":821,"o":"m 255 314 q 261 132 255 250 q 268 0 268 13 q 229 4 255 0 q 188 8 202 8 q 148 4 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 712 126 621 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 203 925 q 267 932 259 932 l 255 671 l 255 499 q 480 693 375 586 q 687 932 585 800 q 732 932 710 932 q 777 932 753 932 l 837 932 q 606 727 720 830 q 389 522 493 623 q 525 358 465 426 q 666 202 586 290 q 856 0 747 115 l 746 0 q 692 -1 716 0 q 644 -8 669 -2 q 571 92 610 44 q 477 204 532 140 l 255 459 l 255 314 "},",":{"x_min":40.28125,"x_max":272.21875,"ha":374,"o":"m 131 75 q 160 147 144 120 q 213 175 176 175 q 272 119 272 175 q 259 67 272 91 q 231 18 245 43 l 73 -243 l 40 -231 l 131 75 "},"d":{"x_min":55,"x_max":676,"ha":758,"o":"m 668 762 l 672 137 l 676 -1 q 638 3 653 1 q 611 5 623 5 q 574 2 597 5 q 547 -1 551 -1 l 557 119 q 336 -15 484 -15 q 127 86 200 -15 q 55 330 55 187 q 127 569 55 467 q 332 672 199 672 q 457 643 402 672 q 551 556 513 615 l 551 756 l 551 789 l 551 818 q 542 1025 551 927 q 609 1018 576 1018 q 639 1019 628 1018 q 675 1025 651 1020 l 668 762 m 374 57 q 515 139 473 57 q 557 332 557 222 q 513 522 557 437 q 374 607 470 607 q 236 522 278 607 q 194 332 194 438 q 235 141 194 225 q 374 57 277 57 "},"E":{"x_min":108,"x_max":613.5625,"ha":686,"o":"m 126 465 q 122 711 126 620 q 108 932 119 802 l 353 928 l 610 931 l 606 884 l 610 836 q 508 853 562 847 q 408 860 453 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 l 264 73 q 456 76 380 73 q 613 94 531 80 l 610 47 l 613 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},"Y":{"x_min":-28,"x_max":746,"ha":707,"o":"m 297 177 l 297 386 q 191 570 256 458 q 84 750 125 682 q -28 932 42 819 q 24 928 -9 932 q 63 925 59 925 q 112 927 91 925 q 146 932 134 930 q 207 800 174 866 q 275 676 239 735 l 389 475 q 509 688 451 575 q 627 932 567 801 l 683 926 q 715 927 701 926 q 746 932 729 929 q 555 627 640 769 l 432 415 l 432 240 q 435 101 432 198 q 438 0 438 5 q 401 4 426 1 q 361 6 376 6 q 319 4 334 6 q 284 0 304 2 q 292 88 288 36 q 297 177 297 140 "},"\"":{"x_min":64,"x_max":315,"ha":379,"o":"m 133 587 l 64 587 l 64 957 l 133 957 l 133 587 m 315 587 l 247 587 l 247 957 l 315 957 l 315 587 "},"±":{"x_min":169,"x_max":969,"ha":1139,"o":"m 602 549 l 969 549 l 969 482 l 602 482 l 602 247 l 534 247 l 534 482 l 169 482 l 169 549 l 534 549 l 534 779 l 602 779 l 602 549 m 969 33 l 169 33 l 169 100 l 969 100 l 969 33 "},"|":{"x_min":305,"x_max":376,"ha":683,"o":"m 376 448 l 305 448 l 305 956 l 376 956 l 376 448 m 376 -233 l 305 -233 l 305 272 l 376 272 l 376 -233 "},"b":{"x_min":78,"x_max":703,"ha":758,"o":"m 152 1018 q 219 1025 181 1018 q 212 916 214 966 q 210 788 210 866 l 210 755 l 210 555 q 419 672 283 672 q 629 569 555 672 q 703 322 703 466 q 630 79 703 173 q 414 -15 558 -15 q 296 8 350 -15 q 193 79 242 31 q 160 49 175 64 q 120 -1 145 33 l 78 -1 q 87 106 82 43 q 92 213 92 169 l 92 545 q 88 784 92 625 q 85 1025 85 944 q 152 1018 119 1018 m 383 605 q 243 520 285 605 q 202 323 202 435 q 245 133 202 218 q 383 48 288 48 q 522 132 480 48 q 564 326 564 217 q 522 519 564 434 q 383 605 480 605 "},"q":{"x_min":54,"x_max":675,"ha":758,"o":"m 608 -368 q 579 -368 591 -368 q 540 -373 567 -369 q 549 -213 548 -312 q 551 -101 551 -115 l 551 99 q 339 -15 476 -15 q 130 82 207 -15 q 54 316 54 180 q 125 564 54 456 q 333 672 197 672 q 464 636 407 672 q 557 535 520 601 q 546 655 557 594 q 586 649 576 650 q 611 648 597 648 q 674 655 640 648 l 671 433 q 669 163 671 298 q 666 -106 668 27 l 675 -373 q 643 -369 658 -370 q 608 -368 627 -368 m 373 48 q 515 134 473 48 q 557 331 557 220 q 511 514 557 433 q 372 596 466 596 q 234 512 276 596 q 193 322 193 429 q 236 133 193 218 q 373 48 279 48 "},"z":{"x_min":15.28125,"x_max":606.9375,"ha":647,"o":"m 15 29 q 164 224 88 124 q 302 416 240 323 l 418 586 l 270 586 q 181 581 218 586 q 62 565 145 577 l 68 609 l 62 654 q 181 648 115 650 q 330 646 248 646 l 363 646 l 393 646 q 606 654 500 646 l 606 626 q 453 428 545 549 q 317 246 361 306 q 194 68 273 185 l 343 68 q 456 72 400 68 q 594 86 513 77 l 588 42 l 594 0 l 280 8 q 148 4 237 8 q 15 0 59 0 l 15 29 "},"~":{"x_min":284,"x_max":1080,"ha":1368,"o":"m 850 650 q 667 750 761 650 q 511 850 573 850 q 396 793 431 850 q 362 650 362 737 l 284 650 q 339 846 284 768 q 508 924 395 924 q 697 824 606 924 q 853 725 788 725 q 969 779 936 725 q 1002 924 1002 834 l 1080 924 q 1023 727 1080 805 q 850 650 966 650 "},"³":{"x_min":48,"x_max":424,"ha":496,"o":"m 159 636 l 156 663 q 178 661 167 661 q 200 661 189 661 q 280 690 248 661 q 312 767 312 719 q 212 869 312 869 q 143 846 168 869 q 107 781 117 823 l 102 779 q 84 812 93 795 q 66 845 75 830 q 134 886 98 871 q 212 901 171 901 q 341 873 284 901 q 398 778 398 845 q 355 691 398 724 q 252 643 313 658 q 373 610 322 643 q 424 509 424 577 q 353 385 424 427 q 196 343 283 343 q 48 373 117 343 q 57 422 52 391 q 66 469 63 454 l 75 469 q 120 399 88 425 q 199 374 153 374 q 294 409 254 374 q 334 499 334 444 q 299 588 334 553 q 207 623 264 623 q 179 620 193 623 q 156 617 166 618 l 159 636 "},"[":{"x_min":116,"x_max":364.609375,"ha":449,"o":"m 127 2 l 127 386 l 127 769 l 116 932 l 235 929 l 364 929 l 363 908 l 363 872 q 263 880 313 880 l 216 880 l 216 387 l 216 -105 l 264 -105 q 329 -102 308 -105 q 364 -98 351 -99 l 363 -123 l 363 -158 l 237 -154 l 116 -158 q 121 -81 116 -138 q 127 2 127 -24 "},"L":{"x_min":108,"x_max":627.453125,"ha":629,"o":"m 126 465 q 122 712 126 621 q 108 932 119 803 q 149 930 126 932 q 188 926 173 927 q 233 929 202 926 q 268 932 265 932 q 263 797 268 883 q 258 684 258 711 q 261 332 258 577 q 264 73 264 86 l 402 73 q 512 78 458 73 q 627 94 566 84 l 624 47 l 627 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":28,"x_max":1011,"ha":1032,"o":"m 799 0 q 647 62 708 0 q 586 218 586 124 q 647 372 586 309 q 799 436 709 436 q 949 373 888 436 q 1011 223 1011 311 q 995 130 1011 176 q 918 35 972 70 q 799 0 865 0 m 863 1015 l 227 -125 l 158 -125 l 793 1015 l 863 1015 m 241 451 q 89 513 150 451 q 28 668 28 576 q 89 823 28 759 q 241 888 150 888 q 391 825 330 888 q 453 673 453 762 q 434 581 453 623 q 359 486 412 521 q 241 451 307 451 m 897 260 q 872 353 897 310 q 798 397 847 397 q 718 340 737 397 q 700 202 700 283 q 719 86 700 133 q 798 40 738 40 q 866 73 840 40 q 892 149 892 106 q 895 206 894 169 q 897 260 897 242 m 339 689 q 312 812 339 775 q 240 849 285 849 q 160 788 179 849 q 141 648 141 728 q 164 541 141 590 q 240 493 188 493 q 307 527 281 493 q 334 602 334 561 q 339 689 339 641 "},"P":{"x_min":109,"x_max":722,"ha":736,"o":"m 127 559 q 109 931 127 759 l 231 927 q 337 931 270 927 q 416 935 403 935 q 632 874 543 935 q 722 694 722 814 q 616 493 722 564 q 371 422 510 422 l 252 422 q 257 200 252 348 q 262 0 262 52 q 224 3 249 0 q 185 8 199 8 q 147 5 168 8 q 109 0 127 2 q 118 287 109 85 q 127 559 127 488 m 576 684 q 515 826 576 773 q 364 879 455 879 l 262 875 q 254 781 257 827 q 252 688 252 735 l 252 476 q 507 530 439 476 q 576 684 576 584 "},"_":{"x_min":0,"x_max":683.328125,"ha":683,"o":"m 683 -322 l 0 -322 l 0 -256 l 683 -256 l 683 -322 "},"+":{"x_min":169,"x_max":970,"ha":1139,"o":"m 603 441 l 970 441 l 970 374 l 603 374 l 603 0 l 536 0 l 536 374 l 169 374 l 169 441 l 536 441 l 536 816 l 603 816 l 603 441 "},"½":{"x_min":83,"x_max":1094.125,"ha":1172,"o":"m 250 743 l 245 836 q 181 804 205 818 q 120 768 156 791 q 104 788 117 775 q 83 808 91 801 q 200 851 141 825 q 327 913 259 877 l 336 911 q 331 724 336 850 q 326 551 326 598 l 326 391 q 301 394 319 391 q 280 397 283 397 q 254 394 271 397 q 233 391 238 391 q 246 551 242 473 q 250 743 250 629 m 859 1015 l 929 1015 l 312 -124 l 243 -124 l 859 1015 m 982 363 q 959 443 982 413 q 887 478 936 473 q 821 458 852 478 q 784 407 790 439 l 778 377 l 773 376 q 728 448 753 416 q 899 513 801 513 q 1019 476 967 513 q 1072 374 1072 439 q 955 189 1072 285 q 806 67 838 93 l 978 67 q 1094 79 1039 67 q 1090 63 1092 76 q 1088 41 1088 49 q 1094 3 1088 18 q 981 3 1056 3 q 867 3 906 3 q 791 3 842 3 q 714 3 739 3 l 714 25 q 913 198 844 125 q 982 363 982 270 "},"'":{"x_min":88.890625,"x_max":306.9375,"ha":374,"o":"m 169 858 q 196 923 177 896 q 250 951 215 951 q 289 937 272 951 q 306 903 306 923 q 295 858 306 883 q 269 812 284 833 l 122 568 l 88 576 l 169 858 "},"T":{"x_min":11,"x_max":713,"ha":725,"o":"m 11 839 l 15 884 l 11 932 q 194 927 72 932 q 361 922 316 922 q 544 927 421 922 q 713 932 668 932 q 707 883 707 911 q 707 861 707 870 q 713 834 707 852 q 609 850 666 843 q 504 857 552 857 l 428 857 q 426 767 428 830 q 424 701 424 704 l 428 220 q 442 0 428 122 q 362 8 401 3 q 323 5 344 8 q 282 0 301 2 q 289 132 282 40 q 296 259 296 225 l 296 683 l 296 857 q 11 839 164 857 "},"j":{"x_min":-55,"x_max":248,"ha":342,"o":"m 113 391 q 106 543 113 444 q 100 654 100 641 q 144 648 135 648 q 167 648 153 648 q 202 649 189 648 q 241 654 214 650 q 237 507 241 595 q 234 405 234 419 l 234 -13 l 234 -109 q 154 -303 234 -234 q -55 -372 74 -372 l -55 -333 q 78 -267 44 -323 q 113 -103 113 -212 l 113 -26 l 113 391 m 171 963 q 226 940 205 963 q 248 881 248 917 q 226 831 248 849 q 171 813 204 813 q 116 833 139 813 q 94 885 94 853 q 115 941 94 919 q 171 963 136 963 "},"1":{"x_min":72,"x_max":472,"ha":749,"o":"m 334 626 q 331 722 334 655 q 329 793 329 788 q 228 737 278 765 q 133 673 177 709 q 102 713 124 688 q 72 743 80 737 q 274 827 177 780 q 458 935 372 875 l 472 929 q 463 552 472 804 q 455 259 455 300 l 459 0 q 421 5 441 2 q 384 8 401 8 q 349 5 367 8 q 312 0 330 2 q 329 289 324 133 q 334 626 334 445 "},"<":{"x_min":176,"x_max":961.109375,"ha":1139,"o":"m 279 406 l 960 130 l 961 56 l 176 379 l 176 432 l 960 756 l 960 682 l 279 406 "},"¹":{"x_min":82,"x_max":347,"ha":496,"o":"m 255 731 l 255 833 l 123 759 q 104 780 120 763 q 82 801 87 797 q 208 850 148 822 q 337 917 269 878 l 347 912 q 341 721 347 848 q 336 529 336 593 l 336 356 q 311 358 327 356 q 289 361 295 361 q 264 358 280 361 q 242 356 248 356 q 251 498 247 407 q 255 731 255 590 "},"t":{"x_min":18,"x_max":415.21875,"ha":425,"o":"m 18 586 l 22 630 l 18 654 q 133 643 80 643 q 131 732 133 669 q 129 799 129 796 q 199 827 163 811 q 263 863 234 843 q 252 758 255 811 q 250 643 250 705 q 334 645 310 643 q 401 654 358 647 l 398 618 l 401 586 q 248 594 323 594 l 243 258 l 243 162 q 272 76 243 109 q 353 43 301 43 q 387 44 369 43 q 415 48 405 46 l 415 4 q 349 -10 378 -5 q 290 -15 319 -15 q 174 18 221 -15 q 123 118 128 51 l 123 200 l 129 387 l 133 594 q 84 592 113 594 q 18 586 55 590 "},"W":{"x_min":0,"x_max":1306.953125,"ha":1307,"o":"m 0 932 q 47 927 31 929 q 76 926 62 926 q 121 929 88 926 q 155 931 154 931 q 262 547 200 750 l 380 171 q 470 437 415 272 q 552 693 525 602 q 619 931 580 784 l 672 926 q 700 928 684 926 q 726 931 716 930 q 825 604 787 727 q 883 419 862 482 q 969 171 904 357 l 1087 522 q 1143 720 1120 623 q 1187 931 1166 816 q 1221 929 1197 931 q 1247 926 1245 926 q 1280 928 1262 926 q 1306 931 1298 930 q 1131 467 1218 716 q 990 0 1045 217 q 963 4 980 1 q 937 7 947 7 q 904 3 925 7 q 880 0 883 0 q 761 385 831 184 l 641 733 l 491 287 q 402 0 438 133 q 370 3 391 0 q 344 7 350 7 q 315 4 327 7 q 287 0 302 2 q 206 296 252 142 q 122 568 161 450 q 0 932 83 686 "},">":{"x_min":176.390625,"x_max":963,"ha":1139,"o":"m 963 379 l 176 56 l 176 130 l 858 406 l 176 682 l 176 756 l 962 432 l 963 379 "},"v":{"x_min":0,"x_max":658.328125,"ha":654,"o":"m 0 655 q 54 648 38 648 q 86 647 69 647 q 113 647 100 647 q 168 654 127 648 q 252 402 204 529 l 358 134 l 470 436 q 543 654 508 533 q 570 650 554 651 q 600 648 586 648 q 636 648 618 648 q 658 654 652 652 q 506 340 577 502 q 372 0 436 177 q 347 5 362 2 q 319 8 333 8 q 296 5 309 8 q 272 0 283 2 q 200 206 234 120 q 0 655 165 292 "},"&":{"x_min":76,"x_max":917.671875,"ha":975,"o":"m 360 -18 q 160 41 245 -18 q 76 211 76 101 q 137 382 76 315 q 314 515 199 448 q 249 618 273 569 q 225 722 225 668 q 287 872 225 812 q 441 932 349 932 q 581 891 520 932 q 643 777 643 851 q 588 640 643 701 q 453 532 533 579 q 568 390 509 459 q 690 253 627 321 q 815 530 792 379 l 829 530 l 887 466 q 814 327 856 396 q 727 209 772 259 q 807 115 760 169 q 917 0 853 61 q 855 1 896 0 q 791 2 813 2 l 739 0 l 649 110 q 515 15 586 48 q 360 -18 445 -18 m 341 475 q 234 380 267 419 q 201 273 201 340 q 258 125 201 190 q 401 61 316 61 q 508 86 458 61 q 606 154 559 111 l 341 475 m 547 770 q 524 854 547 823 q 454 886 502 886 q 363 851 402 886 q 325 769 325 817 q 344 685 325 718 q 422 575 363 652 q 514 661 481 615 q 547 770 547 708 "},"I":{"x_min":109,"x_max":271,"ha":385,"o":"m 127 465 q 123 711 127 620 q 109 932 120 803 q 154 927 129 929 q 190 925 179 925 q 238 928 209 925 q 271 931 266 931 q 263 788 271 887 q 256 659 256 690 l 256 448 l 256 283 q 263 135 256 238 q 271 0 271 31 q 231 3 258 0 q 190 8 204 8 q 151 5 172 8 q 109 0 129 2 q 118 239 109 70 q 127 465 127 408 "},"G":{"x_min":51,"x_max":942,"ha":1001,"o":"m 581 -15 q 198 107 345 -15 q 51 459 51 229 q 196 815 51 680 q 566 950 342 950 q 755 929 659 950 q 930 869 852 909 q 906 802 916 836 q 895 737 897 769 l 874 737 q 739 855 808 818 q 571 893 670 893 q 305 770 406 893 q 204 479 204 647 q 298 168 204 291 q 577 46 393 46 q 689 56 640 46 q 790 94 738 66 q 794 184 790 123 q 798 251 798 246 q 794 337 798 280 q 790 423 790 394 q 830 417 821 418 q 863 416 838 416 q 901 419 880 416 q 941 425 923 422 l 936 236 q 939 121 936 201 q 942 37 942 41 q 757 -1 843 11 q 581 -15 672 -15 "},"`":{"x_min":86.5,"x_max":303.171875,"ha":374,"o":"m 222 659 q 194 595 214 622 q 140 568 175 568 q 86 613 86 568 q 96 660 86 636 q 122 706 107 684 l 271 950 l 303 940 l 222 659 "},"r":{"x_min":89,"x_max":465.390625,"ha":488,"o":"m 99 120 l 99 400 l 99 433 q 91 654 99 548 q 125 648 114 650 q 162 647 136 647 q 232 654 195 647 q 223 588 226 626 q 220 516 220 550 q 313 628 264 589 q 437 668 362 668 l 465 668 l 459 604 l 465 537 q 427 544 448 541 q 383 551 407 548 q 256 482 292 551 q 220 312 220 413 q 222 131 220 256 q 225 0 225 6 l 157 6 l 89 0 l 99 120 "},"x":{"x_min":1,"x_max":635,"ha":632,"o":"m 264 316 l 158 461 q 78 563 120 508 q 5 655 36 619 q 97 647 51 647 q 141 649 120 647 q 177 654 162 651 q 249 538 214 592 q 334 415 284 484 q 420 533 377 473 q 501 654 464 592 q 523 650 508 652 q 550 647 539 648 q 616 654 582 647 l 371 365 q 477 210 434 267 q 635 0 519 152 q 587 3 616 0 q 551 6 558 6 q 501 4 523 6 q 465 0 479 1 q 380 140 407 98 q 295 264 352 183 q 172 84 194 117 q 123 0 151 51 l 66 5 q 33 2 55 5 q 1 0 10 0 q 131 154 63 72 q 264 316 199 236 "},"÷":{"x_min":169,"x_max":969,"ha":1139,"o":"m 641 643 q 618 593 641 615 q 566 571 596 571 q 518 592 538 571 q 498 643 498 613 q 518 692 498 670 q 567 715 539 715 q 610 703 579 715 q 641 643 641 691 m 969 374 l 169 374 l 169 441 l 969 441 l 969 374 m 641 170 q 619 120 641 141 q 570 100 598 100 q 519 120 540 100 q 498 170 498 141 q 518 221 498 199 q 568 243 538 243 q 604 235 584 243 q 632 214 624 227 q 641 170 641 201 "},"h":{"x_min":92,"x_max":665,"ha":758,"o":"m 102 136 l 102 859 q 100 934 102 894 q 94 1025 98 975 q 136 1018 126 1019 q 158 1018 146 1018 q 226 1025 188 1018 q 222 957 223 1001 q 221 888 221 913 l 221 868 l 221 543 q 322 637 264 602 q 450 672 380 672 q 608 606 558 672 q 659 429 659 541 l 659 298 l 659 136 l 665 0 q 633 3 648 1 q 597 5 617 5 q 560 3 580 5 q 529 0 540 1 q 534 202 529 68 q 540 405 540 337 q 503 533 540 481 q 394 586 467 586 q 256 508 291 586 q 221 313 221 430 q 224 133 221 244 q 227 0 227 22 q 188 3 211 0 q 161 6 164 6 q 123 4 137 6 q 92 0 108 2 l 102 136 "},".":{"x_min":100,"x_max":274,"ha":374,"o":"m 187 156 q 248 130 223 156 q 274 68 274 105 q 248 8 274 32 q 187 -15 223 -15 q 125 8 150 -15 q 100 68 100 32 q 125 130 100 105 q 187 156 150 156 "},";":{"x_min":72.609375,"x_max":312,"ha":446,"o":"m 224 636 q 287 611 262 636 q 312 548 312 586 q 287 486 312 511 q 224 461 262 461 q 162 486 188 461 q 137 548 137 512 q 162 611 137 586 q 224 636 187 636 m 164 75 q 198 157 182 140 q 244 175 214 175 q 304 119 304 175 q 296 75 304 93 q 262 18 287 56 l 103 -243 l 72 -231 l 164 75 "},"f":{"x_min":12,"x_max":432.546875,"ha":397,"o":"m 127 324 l 127 597 q 66 595 92 597 q 12 588 39 594 l 14 626 l 12 654 q 79 648 38 649 q 127 647 121 647 q 192 901 127 777 q 378 1025 257 1025 q 409 1022 400 1025 q 432 1015 418 1019 l 415 896 q 371 911 395 905 q 325 918 347 918 q 252 886 278 918 q 227 805 227 855 q 235 713 227 760 q 246 647 243 665 q 330 650 276 647 q 396 654 384 654 q 391 642 393 647 q 389 633 389 637 l 388 622 l 389 610 q 396 589 389 609 q 323 595 357 594 q 246 597 289 597 l 246 366 q 250 183 246 305 q 254 0 254 60 q 213 3 238 0 q 183 6 187 6 q 144 4 161 6 q 116 0 127 1 q 121 160 116 52 q 127 324 127 269 "},"A":{"x_min":-15.28125,"x_max":838.890625,"ha":825,"o":"m 257 639 l 387 950 q 402 945 395 947 q 417 944 409 944 q 452 950 437 944 q 576 629 536 733 q 686 359 617 526 q 838 0 755 192 q 789 3 820 0 q 751 6 758 6 q 700 4 723 6 q 663 0 677 1 q 600 199 622 137 q 543 353 579 260 l 377 358 l 215 353 l 162 205 q 130 110 145 160 q 101 0 115 59 l 44 5 q 6 2 20 5 q -15 0 -8 0 q 76 211 30 105 q 158 404 121 318 q 257 639 195 490 m 378 419 l 513 425 l 379 761 l 246 425 l 378 419 "},"6":{"x_min":64,"x_max":692,"ha":749,"o":"m 464 859 q 267 730 324 859 q 210 442 210 602 q 315 514 262 488 q 431 540 367 540 q 618 462 545 540 q 692 270 692 385 q 604 65 692 145 q 390 -15 516 -15 q 142 93 221 -15 q 64 377 64 201 q 167 745 64 581 q 462 909 270 909 q 524 905 501 909 q 579 890 547 902 l 574 827 q 521 851 547 844 q 464 859 495 859 m 554 258 q 510 409 554 347 q 380 471 466 471 q 255 409 300 471 q 210 264 210 348 q 253 105 210 172 q 384 39 297 39 q 485 73 441 39 q 540 148 529 108 q 552 206 551 187 q 554 258 554 225 "},"O":{"x_min":51,"x_max":1068,"ha":1119,"o":"m 51 465 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 757 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 277 1062 379 q 894 80 1031 175 q 560 -15 756 -15 q 447 -10 496 -15 q 304 29 398 -5 q 130 186 210 64 q 51 465 51 308 m 202 468 q 290 162 202 282 q 559 42 379 42 q 826 162 738 42 q 915 468 915 283 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 639 267 764 q 202 468 202 552 "},"n":{"x_min":89,"x_max":661,"ha":754,"o":"m 99 155 l 99 495 q 97 569 99 530 q 91 655 95 608 q 153 648 122 648 l 219 656 l 218 539 q 319 635 260 599 q 451 672 378 672 q 591 624 528 672 q 654 501 654 576 l 654 299 l 654 136 l 661 0 q 629 3 644 1 q 593 5 613 5 q 556 3 576 5 q 525 0 536 1 q 530 222 525 80 q 535 406 535 364 q 501 536 535 485 q 389 587 467 587 q 253 508 288 587 q 218 313 218 430 q 220 132 218 258 q 222 0 222 6 q 184 3 208 0 q 155 6 159 6 q 117 3 141 6 q 89 0 93 0 l 99 155 "},"3":{"x_min":75,"x_max":644,"ha":749,"o":"m 241 465 l 238 512 l 294 510 q 424 554 375 510 q 474 680 474 599 q 434 805 474 754 q 322 856 394 856 q 220 818 257 856 q 164 711 183 780 l 153 706 q 127 767 136 747 q 99 819 118 788 q 220 886 162 863 q 348 909 278 909 q 526 857 450 909 q 603 706 603 805 q 542 564 603 617 q 383 479 482 511 q 567 423 490 479 q 644 262 644 366 q 542 55 644 129 q 302 -18 441 -18 q 183 -6 240 -18 q 75 32 127 5 q 99 189 91 116 l 113 188 q 182 73 136 115 q 302 31 229 31 q 448 92 392 31 q 505 246 505 154 q 451 389 505 333 q 312 446 398 446 q 238 435 279 446 l 241 465 "},"9":{"x_min":57,"x_max":688,"ha":749,"o":"m 261 38 q 475 166 405 38 q 546 451 546 295 q 442 378 494 403 q 325 354 389 354 q 132 428 208 354 q 57 617 57 502 q 148 828 57 748 q 372 909 240 909 q 612 801 536 909 q 688 520 688 693 q 574 143 688 305 q 252 -18 461 -18 q 186 -14 211 -18 q 127 0 161 -11 l 113 90 q 180 51 143 64 q 261 38 218 38 m 372 419 q 501 482 457 419 q 546 634 546 545 q 504 790 546 725 q 373 855 462 855 q 238 791 284 855 q 193 637 193 727 q 238 482 193 545 q 372 419 284 419 "},"l":{"x_min":100,"x_max":237.5,"ha":342,"o":"m 107 118 l 107 881 q 104 965 107 915 q 101 1025 101 1016 q 169 1018 138 1018 q 237 1025 203 1018 q 228 872 230 948 q 226 684 226 797 l 226 512 l 232 111 l 237 0 q 205 3 220 1 q 169 5 189 5 q 131 3 152 5 q 100 0 111 1 l 107 118 "},"4":{"x_min":39,"x_max":691.78125,"ha":749,"o":"m 453 252 l 177 257 l 39 253 l 39 291 q 204 522 111 392 q 345 721 297 653 q 475 906 394 789 l 527 906 l 581 906 q 575 805 581 872 q 569 705 569 739 l 569 343 l 598 343 q 644 344 620 343 q 690 350 667 345 l 683 297 q 686 270 683 287 q 691 244 689 254 q 568 253 629 253 l 568 137 l 569 0 l 505 6 l 437 0 q 450 120 447 51 q 453 252 453 190 m 453 767 l 344 626 q 230 465 298 562 q 144 343 162 368 l 453 343 l 453 767 "},"p":{"x_min":83,"x_max":702,"ha":758,"o":"m 91 -106 q 89 202 91 47 q 87 513 88 358 l 83 655 q 109 650 95 652 q 146 648 124 648 q 177 650 165 648 q 213 655 188 651 q 202 535 202 591 q 297 637 246 602 q 425 672 349 672 q 630 567 558 672 q 702 322 702 463 q 629 84 702 183 q 423 -15 556 -15 q 210 99 287 -15 l 210 -101 q 214 -244 210 -148 q 219 -373 219 -340 q 185 -369 201 -370 q 151 -368 170 -368 q 130 -368 138 -368 q 83 -373 123 -368 q 87 -240 83 -329 q 91 -106 91 -151 m 384 596 q 245 514 289 596 q 202 328 202 433 q 244 134 202 220 q 383 48 286 48 q 520 131 478 48 q 563 322 563 215 q 519 509 563 423 q 384 596 475 596 "}},"cssFontWeight":"normal","ascender":1267,"underlinePosition":-133,"cssFontStyle":"normal","boundingBox":{"yMin":-373.75,"xMin":-71,"yMax":1267,"xMax":1511},"resolution":1000,"descender":-374,"familyName":"Optimer","lineHeight":1640,"underlineThickness":20},  
                Gentilis: {"glyphs":{"M":{"x_min":40.6875,"x_max":1064.8125,"ha":1120,"o":"m 1051 825 q 1007 819 1031 825 q 959 801 983 812 l 966 70 q 991 50 966 62 q 1064 29 1015 38 l 1064 0 l 756 0 l 756 29 q 831 49 802 38 q 861 70 861 61 l 855 705 l 558 0 l 524 0 l 223 700 l 217 70 q 241 50 217 62 q 315 29 266 38 l 315 0 l 40 0 l 40 29 q 113 49 87 38 q 139 70 139 61 l 145 798 q 93 819 120 813 q 47 825 67 825 l 47 855 l 241 855 q 252 852 248 855 q 262 844 257 850 q 271 827 266 838 q 284 798 276 816 l 554 185 l 813 798 q 828 829 822 818 q 837 846 833 841 q 846 853 842 852 q 857 855 851 855 l 1051 855 l 1051 825 "},"{":{"x_min":69.578125,"x_max":440.796875,"ha":467,"o":"m 440 1053 q 391 1015 414 1036 q 351 969 368 994 q 325 914 334 943 q 316 848 316 884 q 320 784 316 809 q 330 737 324 759 q 339 690 335 715 q 344 625 344 665 q 335 569 344 597 q 311 518 327 542 q 273 474 295 494 q 222 442 250 454 q 279 421 255 436 q 316 382 302 406 q 337 329 331 359 q 344 260 344 298 q 339 191 344 220 q 330 138 335 163 q 320 87 324 112 q 316 28 316 62 q 321 -37 316 -8 q 339 -89 326 -66 q 375 -132 352 -112 q 434 -172 398 -152 l 418 -214 q 320 -165 361 -190 q 253 -108 279 -140 q 215 -38 227 -77 q 203 48 203 0 q 207 114 203 88 q 217 164 211 140 q 226 216 222 188 q 231 285 231 243 q 203 369 231 340 q 125 397 176 397 l 110 397 q 103 396 106 397 q 95 395 100 396 q 81 393 91 394 l 69 429 q 190 492 149 450 q 231 585 231 534 q 228 631 231 612 q 223 667 226 651 q 217 697 220 683 q 210 726 213 711 q 205 762 207 742 q 203 810 203 782 q 218 896 203 855 q 262 970 233 936 q 331 1033 290 1004 q 423 1085 372 1061 l 440 1053 "},"¼":{"x_min":54.28125,"x_max":759.546875,"ha":814,"o":"m 644 332 l 507 153 l 644 153 l 644 332 m 759 142 q 744 124 751 132 q 729 111 737 116 l 708 111 l 708 39 q 709 34 708 36 q 715 30 710 32 q 730 25 720 27 q 755 19 739 22 l 755 0 l 569 0 l 569 19 q 608 26 593 23 q 631 31 623 29 q 641 37 639 34 q 644 42 644 39 l 644 111 l 455 111 l 442 121 l 632 381 q 665 393 648 387 q 694 405 682 399 l 708 393 l 708 153 l 749 153 l 759 142 m 66 432 l 66 455 q 114 461 95 458 q 144 469 133 465 q 158 477 154 473 q 163 484 163 481 l 163 732 q 162 753 163 746 q 156 764 161 760 q 148 768 153 766 q 131 769 142 769 q 104 766 121 768 q 62 760 87 764 l 54 782 q 92 793 69 786 q 138 807 115 800 q 183 823 162 815 q 217 838 205 831 l 231 826 l 231 484 q 234 477 231 481 q 247 469 237 473 q 274 461 256 465 q 320 455 292 458 l 320 432 l 66 432 m 214 2 q 184 -10 198 -5 q 151 -20 169 -15 l 134 0 l 651 816 q 680 828 664 821 q 711 838 696 834 l 727 819 l 214 2 "},")":{"x_min":27.65625,"x_max":359,"ha":440,"o":"m 359 450 q 336 234 359 338 q 273 42 314 129 q 175 -111 233 -45 q 48 -214 118 -177 l 27 -183 q 110 -87 71 -146 q 179 51 149 -27 q 226 225 209 129 q 244 430 244 321 q 229 622 244 528 q 188 798 215 716 q 120 946 160 880 q 27 1054 79 1012 l 48 1085 q 183 986 125 1050 q 280 840 241 923 q 339 657 319 756 q 359 450 359 557 "},"a":{"x_min":54,"x_max":628.765625,"ha":638,"o":"m 238 68 q 325 88 279 68 q 423 154 371 109 l 423 329 q 328 311 365 320 q 267 293 291 302 q 229 274 243 284 q 204 252 215 264 q 175 210 186 234 q 165 155 165 187 q 173 111 165 128 q 192 84 181 94 q 217 71 204 74 q 238 68 229 68 m 628 55 q 533 -2 571 15 q 476 -20 495 -20 q 439 11 454 -20 q 423 97 424 42 q 361 44 392 66 q 302 7 331 22 q 246 -13 272 -6 q 198 -20 220 -20 q 148 -11 174 -20 q 101 13 122 -3 q 67 59 81 31 q 54 126 54 87 q 72 212 54 177 q 115 272 90 246 q 152 302 131 288 q 207 330 172 317 q 293 356 241 344 q 423 380 344 368 l 423 475 q 417 518 423 498 q 399 553 412 538 q 364 575 386 568 q 309 583 342 583 q 266 575 287 582 q 229 556 245 568 q 205 527 214 544 q 198 490 196 511 q 184 476 199 484 q 150 462 170 469 q 110 453 130 456 q 83 452 91 450 l 73 478 q 121 543 89 512 q 194 598 153 574 q 280 636 235 622 q 369 651 326 651 q 484 612 444 651 q 525 503 525 573 l 525 120 q 532 80 525 92 q 552 68 539 68 q 576 71 561 68 q 618 86 591 74 l 628 55 "},"Z":{"x_min":40.015625,"x_max":672.125,"ha":726,"o":"m 672 198 q 669 150 670 177 q 667 97 668 124 q 665 45 666 70 q 663 0 664 19 l 59 0 l 40 30 l 522 787 l 210 787 q 187 779 200 787 q 162 755 174 772 q 139 714 149 739 q 120 653 128 688 l 82 661 l 101 865 q 135 859 120 861 q 165 855 150 856 q 195 855 179 855 l 648 855 l 665 825 l 187 68 l 541 68 q 567 74 556 68 q 589 96 579 80 q 611 139 600 112 q 634 208 621 166 l 672 198 "},"k":{"x_min":37.046875,"x_max":694.515625,"ha":695,"o":"m 37 0 l 37 29 q 106 49 81 40 q 132 70 132 58 l 132 878 q 128 926 132 909 q 114 952 124 943 q 84 963 103 960 q 37 969 66 966 l 37 996 q 129 1018 83 1006 q 208 1051 174 1031 l 234 1027 l 234 359 l 442 542 q 470 573 465 561 q 468 591 474 585 q 446 599 461 597 q 413 601 431 601 l 413 631 l 670 631 l 670 601 q 615 590 640 598 q 562 559 590 582 l 330 374 l 586 75 q 605 57 595 64 q 628 45 615 50 q 655 40 640 41 q 690 41 670 39 l 694 12 q 655 3 674 7 q 619 -1 636 0 q 589 -5 602 -4 q 569 -7 576 -7 q 523 1 541 -7 q 491 28 506 9 l 234 353 l 234 70 q 236 61 234 65 q 246 52 238 56 q 268 42 253 48 q 308 29 283 37 l 308 0 l 37 0 "},"≠":{"x_min":41.375,"x_max":568.34375,"ha":610,"o":"m 442 519 l 551 519 l 568 501 q 558 471 564 488 q 548 444 552 455 l 395 444 l 314 316 l 551 316 l 568 298 q 558 269 564 284 q 548 241 552 253 l 267 241 l 179 101 q 161 91 173 96 q 136 82 149 86 q 109 73 122 77 q 88 67 96 69 l 71 90 l 165 241 l 58 241 l 41 259 q 50 287 44 273 q 62 316 56 302 l 212 316 l 293 444 l 58 444 l 41 461 q 50 490 44 474 q 62 519 56 506 l 339 519 l 427 658 q 472 678 446 670 q 518 692 497 686 l 537 669 l 442 519 "},"U":{"x_min":33.65625,"x_max":864.34375,"ha":908,"o":"m 864 825 q 792 804 818 816 q 766 783 766 793 l 766 355 q 744 197 766 266 q 681 79 722 127 q 582 5 641 30 q 451 -20 524 -20 q 322 0 381 -20 q 221 58 264 18 q 155 158 179 98 q 132 301 132 218 l 132 783 q 107 804 132 791 q 33 825 82 816 l 33 855 l 339 855 l 339 825 q 267 804 293 816 q 241 783 241 793 l 241 335 q 256 218 241 270 q 301 131 271 167 q 375 76 331 95 q 478 58 419 58 q 563 81 526 58 q 626 142 600 104 q 664 229 651 180 q 678 327 678 277 l 678 783 q 653 804 678 791 q 579 825 628 816 l 579 855 l 864 855 l 864 825 "},"F":{"x_min":33.65625,"x_max":608.59375,"ha":664,"o":"m 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 783 q 107 804 132 791 q 33 825 82 816 l 33 855 l 587 855 l 608 838 q 605 799 607 820 q 598 757 602 778 q 590 717 595 736 q 582 685 586 698 l 550 685 q 545 737 548 716 q 534 771 541 758 q 517 788 527 783 q 494 794 507 794 l 241 794 l 241 499 l 494 499 l 514 480 q 500 459 508 470 q 483 438 491 448 q 465 418 474 427 q 450 404 457 410 q 428 421 440 414 q 402 433 417 428 q 366 439 386 437 q 316 442 345 442 l 241 442 l 241 70 q 267 52 241 62 q 359 29 293 42 l 359 0 l 33 0 "},"0":{"x_min":52,"x_max":600,"ha":652,"o":"m 489 383 q 474 547 489 476 q 435 664 459 617 q 379 735 411 711 q 312 760 347 760 q 250 741 278 760 q 203 683 222 722 q 173 583 184 644 q 163 437 163 522 q 176 273 163 344 q 213 154 190 202 q 269 82 236 106 q 339 58 301 58 q 402 76 374 58 q 449 134 430 95 q 478 236 468 174 q 489 383 489 297 m 600 408 q 579 243 600 321 q 521 106 558 165 q 430 14 483 48 q 312 -20 377 -20 q 199 14 248 -20 q 118 106 150 48 q 68 243 85 165 q 52 408 52 321 q 73 574 52 496 q 131 710 94 652 q 222 803 169 769 q 339 838 274 838 q 452 804 403 838 q 533 711 501 770 q 583 575 566 653 q 600 408 600 496 "},"]":{"x_min":27.4375,"x_max":332,"ha":428,"o":"m 51 -227 l 28 -207 q 35 -174 30 -191 q 45 -149 41 -157 l 237 -149 l 237 1007 l 51 1007 l 27 1024 q 35 1056 29 1039 q 45 1085 41 1073 l 332 1085 l 332 -227 l 51 -227 "},"8":{"x_min":64,"x_max":588,"ha":652,"o":"m 186 644 q 200 592 186 614 q 239 553 215 570 q 295 521 264 535 q 361 491 327 506 q 431 563 410 527 q 452 636 452 599 q 441 697 452 671 q 411 740 430 723 q 365 765 393 757 q 305 774 338 774 q 252 762 274 774 q 215 732 230 750 q 193 690 201 713 q 186 644 186 667 m 479 210 q 463 286 479 254 q 421 341 447 318 q 362 381 395 364 q 294 414 329 398 q 239 367 262 390 q 201 321 216 345 q 180 271 187 297 q 173 214 173 244 q 184 148 173 178 q 217 95 195 117 q 269 60 239 73 q 339 48 300 48 q 403 62 376 48 q 446 99 429 76 q 471 151 463 122 q 479 210 479 180 m 588 239 q 565 139 588 186 q 504 56 543 92 q 414 0 465 21 q 306 -20 363 -20 q 202 -2 247 -20 q 127 45 158 15 q 79 113 95 74 q 64 193 64 151 q 76 264 64 230 q 112 329 89 298 q 168 387 135 360 q 242 437 201 414 q 187 466 213 450 q 141 504 161 483 q 110 554 121 526 q 99 620 99 582 q 117 707 99 667 q 168 776 136 747 q 245 821 201 805 q 340 838 289 838 q 431 824 391 838 q 498 787 470 810 q 539 730 525 763 q 554 657 554 696 q 543 603 554 629 q 514 554 533 578 q 471 509 496 531 q 415 466 445 488 q 480 430 449 450 q 535 383 512 410 q 573 321 559 356 q 588 239 588 285 "},"R":{"x_min":27.5625,"x_max":771.921875,"ha":779,"o":"m 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 806 q 83 799 108 803 q 33 792 58 795 l 27 834 q 91 849 59 842 q 159 862 124 856 q 233 871 195 868 q 317 875 272 875 q 454 859 396 875 q 551 815 512 843 q 609 750 590 788 q 628 669 628 712 q 614 580 628 620 q 574 510 600 541 q 514 458 549 480 q 436 423 478 436 l 642 93 q 664 70 652 78 q 690 56 676 61 q 723 52 705 52 q 764 53 741 51 l 771 24 q 686 0 727 9 q 620 -10 646 -10 q 581 1 600 -10 q 553 27 563 12 l 348 408 q 331 406 339 406 l 312 406 q 277 408 295 406 q 241 414 259 410 l 241 70 q 265 50 241 62 q 339 29 289 38 l 339 0 l 33 0 m 293 818 q 241 816 267 818 l 241 468 q 272 464 259 465 q 301 464 286 464 q 465 511 408 464 q 523 648 523 558 q 509 716 523 685 q 468 770 496 748 q 396 805 440 792 q 293 818 353 818 "},"z":{"x_min":51.546875,"x_max":562.25,"ha":614,"o":"m 562 168 q 561 122 562 146 q 559 74 560 97 q 557 31 558 51 q 554 0 556 12 l 69 0 l 51 30 l 427 570 l 193 570 q 171 565 182 570 q 149 550 160 561 q 129 519 139 539 q 113 468 120 499 l 80 476 l 92 642 q 120 635 107 637 q 145 632 132 633 q 174 631 158 631 l 545 631 l 560 601 l 183 61 l 469 61 q 500 87 486 61 q 530 174 514 113 l 562 168 "},"³":{"x_min":25.5,"x_max":397,"ha":456,"o":"m 397 575 q 383 510 397 540 q 344 457 370 480 q 282 421 319 434 q 199 408 245 408 q 112 423 156 408 q 25 475 68 439 l 41 502 q 81 480 62 489 q 117 465 100 470 q 151 458 134 460 q 186 456 168 456 q 275 482 241 456 q 309 561 309 509 q 298 613 309 592 q 271 646 288 633 q 234 664 254 659 q 194 670 214 670 l 184 670 q 178 670 181 670 q 172 669 176 669 q 161 667 169 668 l 155 698 q 223 721 197 709 q 261 748 248 734 q 278 776 274 761 q 282 802 282 790 q 277 830 282 816 q 263 854 273 843 q 238 871 254 865 q 201 878 223 878 q 147 861 166 878 q 134 816 129 844 q 97 805 119 808 q 55 800 75 801 l 42 812 q 57 849 42 829 q 98 884 73 868 q 158 912 124 901 q 229 923 191 923 q 292 913 265 923 q 335 887 318 903 q 361 851 353 871 q 370 810 370 830 q 363 779 370 794 q 343 749 356 763 q 312 723 330 735 q 270 704 293 711 q 320 690 297 701 q 361 662 344 679 q 387 622 377 644 q 397 575 397 600 "},"[":{"x_min":95,"x_max":400.25,"ha":428,"o":"m 400 -168 q 391 -198 396 -182 q 380 -227 386 -215 l 95 -227 l 95 1085 l 376 1085 l 398 1067 q 390 1032 395 1050 q 380 1007 384 1015 l 190 1007 l 190 -149 l 376 -149 l 400 -168 "},"∏":{"x_min":32.984375,"x_max":828.015625,"ha":875,"o":"m 32 0 l 32 29 q 105 49 79 38 q 132 70 132 61 l 132 783 q 106 804 132 791 q 32 825 81 816 l 32 855 l 828 855 l 828 825 q 755 804 781 816 q 729 783 729 793 l 729 70 q 753 50 729 62 q 828 29 778 38 l 828 0 l 521 0 l 521 29 q 593 49 567 38 q 620 70 620 61 l 620 751 q 610 767 620 759 q 584 782 601 775 q 540 793 566 789 q 481 798 514 798 l 368 798 q 313 792 337 797 q 273 782 289 788 q 249 767 257 775 q 241 751 241 759 l 241 70 q 265 50 241 62 q 339 29 289 38 l 339 0 l 32 0 "},"T":{"x_min":6.34375,"x_max":734.5625,"ha":765,"o":"m 207 0 l 207 29 q 260 42 238 35 q 294 55 281 48 q 313 67 307 61 q 319 78 319 73 l 319 794 l 116 794 q 97 790 106 794 q 80 774 89 786 q 61 738 72 762 q 35 675 50 714 l 6 688 q 15 773 9 728 q 28 855 21 819 l 714 855 l 734 838 q 727 762 733 803 q 714 678 722 721 l 683 678 q 671 731 676 709 q 659 767 666 753 q 644 787 653 781 q 620 794 634 794 l 428 794 l 428 78 q 452 55 428 69 q 539 29 476 42 l 539 0 l 207 0 "},"j":{"x_min":-149.234375,"x_max":261,"ha":359,"o":"m 241 67 q 231 -65 241 -10 q 203 -158 221 -119 q 162 -223 186 -196 q 111 -271 139 -249 q 73 -297 93 -285 q 32 -319 52 -310 q -5 -333 12 -328 q -36 -339 -23 -339 q -77 -333 -57 -339 q -113 -321 -97 -328 q -139 -305 -129 -313 q -149 -291 -149 -297 q -139 -275 -149 -285 q -116 -253 -129 -264 q -87 -231 -102 -241 q -63 -216 -73 -221 q -18 -241 -41 -235 q 30 -247 4 -247 q 69 -234 50 -247 q 104 -190 88 -221 q 129 -106 120 -159 q 139 29 139 -52 l 139 454 q 137 510 139 489 q 126 542 135 531 q 98 560 117 554 q 44 569 79 565 l 44 596 q 94 607 72 601 q 136 620 116 613 q 175 634 156 626 q 215 651 194 642 l 241 651 l 241 67 m 261 854 q 254 818 261 835 q 238 789 248 801 q 213 769 227 776 q 183 762 199 762 q 138 778 152 762 q 125 826 125 795 q 131 862 125 845 q 148 892 137 879 q 172 911 158 904 q 203 919 187 919 q 261 854 261 919 "},"1":{"x_min":93.84375,"x_max":569.546875,"ha":652,"o":"m 114 0 l 114 35 q 203 49 167 42 q 259 65 238 57 q 289 81 280 73 q 298 96 298 89 l 298 637 q 295 679 298 664 q 285 703 293 694 q 270 710 281 707 q 237 712 258 713 q 184 707 216 711 q 108 694 152 703 l 93 728 q 161 751 122 736 q 240 781 200 765 q 316 815 280 798 q 374 844 352 831 l 400 820 l 400 96 q 407 82 400 90 q 433 66 414 74 q 485 50 452 58 q 569 35 518 42 l 569 0 l 114 0 "},"&":{"x_min":54,"x_max":912.4375,"ha":926,"o":"m 301 766 q 312 684 301 727 q 344 596 324 641 q 420 648 390 622 q 466 699 449 674 q 488 748 482 724 q 495 794 495 771 q 488 839 495 818 q 470 876 482 860 q 440 901 458 892 q 399 911 422 911 q 356 898 374 911 q 325 865 337 885 q 307 819 313 845 q 301 766 301 792 m 357 57 q 463 75 415 57 q 550 124 511 93 q 480 200 516 159 q 410 286 444 241 q 344 379 376 331 q 288 476 313 427 q 229 419 253 446 q 191 363 206 391 q 170 308 176 336 q 164 253 164 281 q 180 168 164 205 q 223 107 196 132 q 285 69 250 82 q 357 57 320 57 m 912 507 q 878 472 895 486 q 845 447 862 458 q 817 458 833 453 q 785 466 801 462 q 755 472 770 470 q 728 475 740 474 q 740 452 736 462 q 747 429 744 441 q 750 402 749 417 q 751 368 751 388 q 729 266 751 320 q 670 162 708 213 q 756 86 717 117 q 812 57 782 64 q 881 60 841 50 l 887 30 q 787 -7 828 5 q 732 -20 747 -20 q 680 7 717 -20 q 594 81 643 34 q 476 8 541 36 q 337 -20 411 -20 q 222 -3 274 -20 q 132 45 169 13 q 74 126 95 78 q 54 239 54 175 q 67 316 54 277 q 106 394 81 355 q 170 470 132 433 q 257 542 208 507 q 226 637 238 590 q 215 728 215 683 q 233 830 215 783 q 282 911 251 876 q 352 964 312 945 q 434 984 392 984 q 507 970 478 984 q 555 933 537 956 q 581 879 573 909 q 589 816 589 849 q 544 683 589 745 q 419 571 500 621 q 395 555 406 562 q 372 539 383 547 q 425 451 396 495 q 488 364 455 407 q 556 282 521 322 q 625 206 591 241 q 657 275 646 240 q 669 340 669 309 q 659 393 669 368 q 634 437 650 419 q 599 467 619 456 q 560 478 580 478 l 545 497 q 567 516 553 506 q 595 532 582 526 l 896 532 l 912 507 "},"G":{"x_min":47,"x_max":777.203125,"ha":810,"o":"m 707 805 q 705 792 711 802 q 688 770 699 782 q 663 746 677 757 q 641 726 650 734 l 619 730 q 573 765 596 751 q 523 786 549 778 q 467 796 497 793 q 405 800 438 800 q 362 792 388 800 q 309 767 337 784 q 253 721 281 749 q 202 652 225 693 q 165 556 179 611 q 152 431 152 502 q 177 267 152 337 q 243 152 202 197 q 334 83 283 106 q 437 61 385 61 q 528 70 487 61 q 604 98 570 80 l 604 328 q 597 343 604 336 q 575 357 591 350 q 532 370 559 364 q 464 384 505 377 l 464 413 l 777 413 l 777 384 q 722 359 738 375 q 706 328 706 344 l 706 104 q 615 38 655 63 q 542 1 576 14 q 479 -15 509 -11 q 419 -20 449 -20 q 284 5 350 -20 q 164 82 217 30 q 79 212 112 134 q 47 394 47 289 q 82 596 47 507 q 180 747 118 685 q 324 842 241 809 q 499 875 406 875 q 549 870 522 875 q 603 856 575 865 q 658 834 631 847 q 707 805 685 821 "},"`":{"x_min":20.34375,"x_max":297.0625,"ha":443,"o":"m 297 731 q 280 719 290 725 q 259 710 270 713 l 20 965 l 35 993 q 55 997 42 995 q 83 1002 68 999 q 111 1007 97 1005 q 134 1010 126 1009 l 297 731 "},"∞":{"x_min":54,"x_max":864,"ha":918,"o":"m 232 288 q 272 291 255 288 q 308 303 290 294 q 349 329 327 312 q 401 374 371 346 q 371 412 388 392 q 333 447 354 432 q 286 473 312 463 q 229 483 260 483 q 177 474 197 483 q 147 450 158 464 q 132 420 136 436 q 129 391 129 404 q 135 360 129 377 q 154 326 141 342 q 187 299 167 310 q 232 288 206 288 m 685 494 q 644 489 663 494 q 605 475 625 485 q 564 449 586 465 q 513 407 542 432 q 544 369 527 389 q 584 335 562 350 q 632 309 605 319 q 688 300 658 300 q 740 309 720 300 q 770 333 759 318 q 785 363 781 347 q 789 391 789 379 q 782 423 789 405 q 763 456 776 440 q 730 483 750 472 q 685 494 711 494 m 278 573 q 342 562 313 573 q 398 533 372 551 q 444 493 423 515 q 482 448 465 471 q 554 507 522 484 q 615 546 586 531 q 669 566 643 560 q 722 573 695 573 q 774 561 748 573 q 819 528 799 549 q 851 480 839 508 q 864 419 864 452 q 845 343 864 380 q 796 276 827 305 q 724 228 764 246 q 639 210 684 210 q 574 220 604 210 q 518 249 544 231 q 470 289 492 266 q 431 333 448 311 q 355 270 387 294 q 297 233 324 246 q 247 214 271 219 q 195 210 222 210 q 143 221 169 210 q 98 254 118 233 q 66 302 78 274 q 54 363 54 330 q 72 439 54 402 q 121 506 90 477 q 193 554 153 536 q 278 573 233 573 "},"p":{"x_min":37.046875,"x_max":682,"ha":736,"o":"m 590 288 q 576 398 590 347 q 539 486 562 449 q 485 544 516 523 q 422 566 455 566 q 390 558 410 566 q 345 533 370 551 q 292 486 320 515 q 234 413 263 456 l 234 144 q 290 106 264 121 q 339 83 316 91 q 382 71 362 74 q 421 68 402 68 q 488 82 457 68 q 541 124 519 96 q 577 193 564 152 q 590 288 590 234 m 682 333 q 671 253 682 294 q 643 172 661 211 q 601 97 626 133 q 548 36 577 62 q 487 -4 519 10 q 422 -20 455 -20 q 332 2 382 -20 q 234 66 282 24 l 234 -254 q 259 -276 234 -265 q 348 -296 284 -287 l 348 -326 l 37 -326 l 37 -296 q 106 -276 81 -286 q 132 -254 132 -266 l 132 481 q 129 522 132 506 q 116 549 126 539 q 88 563 106 558 q 37 569 69 567 l 37 596 q 81 606 60 601 q 121 619 102 612 q 160 633 141 625 q 200 651 180 641 l 223 627 l 230 492 q 298 563 263 533 q 363 612 332 593 q 421 641 394 632 q 468 651 448 651 q 553 629 514 651 q 621 566 593 607 q 666 466 650 525 q 682 333 682 407 "},"S":{"x_min":79.515625,"x_max":600,"ha":661,"o":"m 600 255 q 591 193 600 225 q 567 130 583 161 q 525 72 550 99 q 467 24 501 45 q 391 -7 433 4 q 298 -20 349 -20 q 249 -15 276 -20 q 195 -2 223 -10 q 140 18 167 6 q 89 46 112 30 q 81 69 84 48 q 79 116 79 89 q 81 172 79 144 q 89 219 83 201 l 116 216 q 155 147 132 176 q 207 98 179 117 q 268 70 235 79 q 336 61 301 61 q 397 73 366 61 q 452 107 428 86 q 492 158 476 129 q 508 219 508 187 q 489 290 508 261 q 441 343 471 320 q 374 385 412 366 q 297 421 336 403 q 219 460 257 440 q 152 508 181 480 q 104 570 122 535 q 86 655 86 606 q 92 701 86 676 q 111 750 98 725 q 146 797 125 774 q 198 837 168 820 q 267 864 228 854 q 356 875 307 875 q 417 870 387 875 q 475 857 448 865 q 523 837 502 849 q 557 812 545 826 q 558 796 562 808 q 544 770 553 784 q 524 743 535 756 q 505 722 513 729 l 480 726 q 440 763 461 748 q 398 789 420 779 q 356 802 377 798 q 316 807 335 807 q 251 795 278 807 q 207 766 224 783 q 182 728 190 749 q 174 687 174 706 q 192 631 174 655 q 240 585 210 606 q 308 546 270 565 q 387 508 346 528 q 465 465 427 488 q 533 412 503 442 q 581 344 563 382 q 600 255 600 306 "},"/":{"x_min":33.234375,"x_max":616.5,"ha":652,"o":"m 143 -192 q 125 -202 136 -197 q 102 -211 114 -207 q 78 -220 90 -216 q 58 -227 66 -224 l 33 -210 l 508 1051 q 549 1071 526 1063 q 591 1085 571 1079 l 616 1070 l 143 -192 "},"y":{"x_min":-31.875,"x_max":670.765625,"ha":685,"o":"m 670 601 q 637 593 650 597 q 616 583 624 588 q 603 572 608 578 q 596 555 599 565 l 369 -55 q 306 -184 341 -130 q 233 -272 271 -237 q 158 -322 196 -306 q 86 -339 120 -339 q 38 -335 60 -339 q 1 -327 16 -332 q -23 -315 -14 -322 q -31 -303 -31 -309 q -23 -286 -31 -298 q -3 -259 -15 -274 q 22 -231 8 -245 q 47 -211 36 -218 q 112 -231 80 -230 q 169 -223 144 -233 q 198 -204 181 -219 q 230 -168 214 -189 q 263 -118 247 -146 q 291 -62 279 -91 l 311 -15 l 88 555 q 65 584 82 574 q 13 601 47 594 l 13 631 l 275 631 l 275 601 q 232 595 248 598 q 206 586 215 591 q 196 574 197 581 q 198 555 194 566 l 365 123 l 522 555 q 523 573 525 565 q 511 585 520 580 q 485 594 502 590 q 444 601 469 597 l 444 631 l 670 631 l 670 601 "},"J":{"x_min":-129.421875,"x_max":376.328125,"ha":424,"o":"m 376 825 q 304 804 330 816 q 278 783 278 793 l 278 139 q 266 4 278 58 q 236 -86 255 -49 q 193 -149 218 -124 q 142 -195 169 -173 q 102 -222 124 -210 q 57 -241 80 -233 q 15 -253 35 -249 q -17 -258 -4 -258 q -58 -251 -37 -258 q -94 -236 -78 -245 q -119 -219 -109 -228 q -129 -204 -129 -210 q -120 -188 -129 -198 q -99 -168 -111 -178 q -73 -148 -87 -158 q -50 -136 -60 -139 q -17 -156 -31 -148 q 8 -168 -3 -164 q 32 -173 21 -172 q 56 -175 43 -175 q 94 -163 74 -175 q 130 -122 114 -151 q 158 -41 147 -92 q 169 89 169 10 l 169 783 q 163 792 169 787 q 143 802 158 797 q 103 813 128 808 q 36 825 77 819 l 36 855 l 376 855 l 376 825 "},"D":{"x_min":27.5625,"x_max":761,"ha":823,"o":"m 307 818 q 241 816 273 818 l 241 104 q 248 80 241 89 q 284 62 257 68 q 364 57 311 57 q 460 79 411 57 q 551 148 510 102 q 619 265 593 195 q 646 432 646 336 q 623 593 646 522 q 558 715 601 665 q 451 791 515 765 q 307 818 388 818 m 761 458 q 743 306 761 373 q 697 188 726 240 q 629 102 668 137 q 548 43 591 66 q 462 10 506 21 q 378 0 418 0 l 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 805 q 80 799 104 802 q 33 792 56 795 l 27 834 q 96 849 57 842 q 178 863 135 857 q 266 871 222 868 q 350 875 310 875 q 521 846 445 875 q 650 765 596 818 q 732 634 703 711 q 761 458 761 556 "},"$":{"x_min":59.6875,"x_max":585,"ha":652,"o":"m 153 649 q 163 604 153 624 q 193 569 174 585 q 238 541 212 554 q 293 517 263 529 l 293 756 q 227 745 253 755 q 183 720 200 735 q 160 686 167 705 q 153 649 153 668 m 493 219 q 482 276 493 251 q 452 319 471 300 q 407 352 433 337 q 354 378 382 366 l 354 76 q 406 92 381 80 q 450 122 431 103 q 481 165 469 141 q 493 219 493 190 m 354 -96 q 343 -105 347 -102 q 334 -110 339 -108 q 324 -114 330 -112 q 311 -118 319 -115 l 293 -103 l 293 -6 q 232 -1 260 -6 q 178 10 204 2 q 125 32 151 19 q 69 65 99 46 q 62 87 64 68 q 59 132 59 107 q 61 184 59 158 q 69 230 63 211 l 98 228 q 181 121 130 158 q 293 77 231 85 l 293 402 q 210 434 251 417 q 138 475 170 451 q 86 533 106 500 q 67 618 67 567 q 78 679 67 646 q 115 741 89 712 q 185 791 142 770 q 293 820 228 813 l 293 920 q 306 928 302 925 q 314 932 310 930 q 321 935 317 934 q 336 939 326 936 l 354 924 l 354 823 q 414 818 385 822 q 469 806 444 814 q 516 786 495 797 q 550 762 536 775 q 548 745 554 757 q 534 718 543 732 q 513 689 524 703 q 493 666 501 675 l 466 672 q 410 722 439 703 q 354 749 382 741 l 354 493 q 437 458 396 477 q 511 412 479 439 q 564 347 544 384 q 585 255 585 309 q 570 173 585 215 q 526 95 555 130 q 454 32 497 59 q 354 -2 411 6 l 354 -96 "},"w":{"x_min":13.5625,"x_max":966.46875,"ha":981,"o":"m 966 601 q 933 592 945 597 q 913 583 921 588 q 903 573 906 579 q 898 559 900 567 l 748 40 q 732 14 744 25 q 706 -2 720 4 q 678 -13 692 -9 q 655 -20 664 -17 l 494 439 l 355 40 q 338 14 349 24 q 314 -3 327 3 q 287 -14 300 -10 q 265 -20 274 -17 l 87 559 q 13 601 81 586 l 13 631 l 275 631 l 275 601 q 223 594 242 598 q 197 583 205 589 q 188 572 189 578 q 190 559 188 565 l 318 129 l 484 631 l 531 631 l 708 129 l 825 559 q 811 584 829 575 q 746 601 792 594 l 746 631 l 966 631 l 966 601 "},"C":{"x_min":48,"x_max":690.84375,"ha":745,"o":"m 690 143 q 607 65 647 96 q 531 15 568 34 q 458 -11 494 -3 q 387 -20 422 -20 q 263 8 324 -20 q 155 90 203 36 q 77 221 106 144 q 48 397 48 299 q 80 594 48 506 q 169 744 113 682 q 300 841 226 807 q 458 875 375 875 q 587 855 532 875 q 677 806 642 835 q 675 793 682 803 q 659 770 669 783 q 636 744 648 757 q 616 723 625 731 l 593 727 q 511 779 558 759 q 401 800 463 800 q 351 791 378 800 q 296 764 323 783 q 242 716 268 746 q 196 645 216 687 q 164 548 176 603 q 153 422 153 492 q 179 264 153 332 q 246 151 205 196 q 337 83 287 106 q 436 61 388 61 q 532 86 473 61 q 665 173 591 111 q 672 167 669 172 q 679 158 676 163 q 686 149 683 153 q 690 143 688 145 "},"X":{"x_min":21.03125,"x_max":833.53125,"ha":855,"o":"m 527 0 l 527 29 q 575 36 557 31 q 602 46 594 40 q 609 62 610 53 q 598 86 608 72 l 409 363 l 238 86 q 241 44 219 56 q 326 29 263 33 l 326 0 l 21 0 l 21 29 q 96 44 65 32 q 144 86 127 57 l 359 437 l 133 768 q 113 793 123 783 q 92 809 104 802 q 65 818 80 815 q 27 826 50 822 l 27 855 l 333 855 l 333 826 q 258 809 276 820 q 261 768 240 798 l 428 522 l 581 768 q 590 794 591 784 q 577 810 588 804 q 544 820 565 817 q 493 826 523 823 l 493 855 l 800 855 l 800 826 q 756 819 775 823 q 722 809 737 815 q 696 793 707 802 q 676 768 685 783 l 478 449 l 726 86 q 747 61 736 71 q 770 45 757 52 q 798 35 782 39 q 833 29 813 31 l 833 0 l 527 0 "},"c":{"x_min":54,"x_max":569.71875,"ha":607,"o":"m 569 129 q 492 47 525 76 q 430 2 458 17 q 374 -16 401 -12 q 315 -20 347 -20 q 218 2 265 -20 q 134 65 171 24 q 76 166 98 106 q 54 301 54 226 q 80 438 54 374 q 154 548 107 501 q 263 623 200 596 q 400 651 326 651 q 445 647 422 651 q 490 636 469 643 q 530 619 512 629 q 559 597 548 609 q 557 574 560 588 q 548 542 554 559 q 534 510 541 525 q 520 485 527 495 l 495 492 q 478 519 490 504 q 446 546 465 533 q 400 567 427 559 q 339 576 373 576 q 270 560 303 576 q 211 512 237 544 q 171 433 186 480 q 156 322 156 385 q 173 217 156 264 q 219 137 190 170 q 285 85 248 103 q 364 68 323 68 q 399 69 383 68 q 435 80 415 71 q 479 106 454 89 q 543 156 505 124 l 569 129 "},":":{"x_min":89,"x_max":250,"ha":318,"o":"m 250 83 q 242 39 250 59 q 223 4 235 19 q 193 -18 210 -10 q 156 -27 176 -27 q 104 -7 120 -27 q 89 48 89 12 q 96 91 89 71 q 116 127 103 111 q 146 151 129 142 q 183 160 164 160 q 233 140 216 160 q 250 83 250 120 m 250 575 q 242 531 250 551 q 223 496 235 511 q 193 473 210 481 q 156 464 176 464 q 104 484 120 464 q 89 540 89 504 q 96 583 89 563 q 116 618 103 603 q 146 642 129 634 q 183 651 164 651 q 233 631 216 651 q 250 575 250 611 "},"¾":{"x_min":54.796875,"x_max":759.546875,"ha":814,"o":"m 214 2 q 184 -10 198 -5 q 151 -20 169 -15 l 134 0 l 651 815 q 680 827 664 821 q 711 837 696 834 l 728 818 l 214 2 m 759 142 q 744 124 751 132 q 729 111 737 116 l 708 111 l 708 39 q 709 34 708 36 q 715 30 710 32 q 730 25 720 27 q 755 19 739 22 l 755 0 l 569 0 l 569 19 q 608 26 593 23 q 631 31 623 29 q 641 37 639 34 q 644 42 644 39 l 644 111 l 455 111 l 442 121 l 632 381 q 665 393 648 387 q 694 405 682 399 l 708 393 l 708 153 l 749 153 l 759 142 m 353 559 q 342 507 353 531 q 310 465 331 483 q 260 436 290 447 q 193 426 231 426 q 124 438 159 426 q 54 479 89 451 l 67 501 q 128 471 102 479 q 183 464 155 464 q 255 485 228 464 q 282 548 282 507 q 273 590 282 573 q 251 616 264 606 q 222 631 238 627 q 190 636 205 636 l 182 636 q 177 635 179 636 q 172 634 175 635 q 163 633 169 634 l 158 658 q 212 676 192 666 q 243 698 232 686 q 256 720 253 709 q 260 741 260 731 q 256 763 260 752 q 245 782 252 774 q 225 796 237 791 q 195 802 212 802 q 152 788 167 802 q 141 752 137 774 q 112 744 129 747 q 78 739 95 740 l 68 749 q 80 778 68 763 q 113 807 92 794 q 160 829 133 821 q 217 838 187 838 q 268 830 246 838 q 303 809 290 822 q 324 780 317 796 q 331 747 331 764 q 309 698 331 723 q 250 662 288 674 q 291 651 272 660 q 323 628 309 642 q 345 597 337 615 q 353 559 353 579 m 644 333 l 508 153 l 644 153 l 644 333 "},"m":{"x_min":37.046875,"x_max":1095.640625,"ha":1115,"o":"m 803 0 l 803 29 q 875 51 852 42 q 898 70 898 61 l 898 429 q 893 498 898 470 q 880 541 889 525 q 856 563 870 557 q 821 570 841 570 q 774 557 799 570 q 722 521 749 544 q 669 464 696 498 q 617 388 642 430 l 617 70 q 638 51 617 61 q 712 29 659 42 l 712 0 l 420 0 l 420 29 q 492 51 469 42 q 515 70 515 61 l 515 429 q 510 498 515 470 q 497 541 506 525 q 474 563 488 557 q 438 570 459 570 q 341 522 392 570 q 234 388 291 475 l 234 70 q 259 49 234 60 q 328 29 284 38 l 328 0 l 37 0 l 37 29 q 106 49 81 40 q 132 70 132 59 l 132 482 q 129 525 132 509 q 117 549 127 540 q 88 561 107 557 q 37 570 69 565 l 37 597 q 84 606 62 601 q 125 619 106 612 q 163 634 145 626 q 199 651 181 642 l 223 627 l 231 471 q 292 550 261 516 q 354 606 323 583 q 413 639 385 628 q 466 651 441 651 q 526 643 498 651 q 573 616 553 635 q 605 567 593 598 q 617 491 617 537 l 616 477 q 675 552 645 520 q 736 606 706 584 q 795 639 766 628 q 849 651 824 651 q 909 642 881 651 q 956 615 936 633 q 988 568 976 596 q 1000 502 1000 540 l 1000 70 q 1021 51 1000 61 q 1095 29 1042 42 l 1095 0 l 803 0 "},"×":{"x_min":63.078125,"x_max":505.953125,"ha":570,"o":"m 63 213 l 231 381 l 64 547 l 63 570 q 94 582 77 577 q 126 592 111 588 l 284 433 l 442 592 q 474 582 457 588 q 505 570 491 577 l 505 547 l 337 380 l 505 213 l 505 190 q 474 178 492 184 q 443 169 455 172 l 284 327 l 126 169 q 94 178 113 172 q 63 190 76 184 l 63 213 "},"K":{"x_min":33.65625,"x_max":796.46875,"ha":803,"o":"m 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 783 q 107 804 132 791 q 33 825 82 816 l 33 855 l 339 855 l 339 825 q 267 804 293 816 q 241 783 241 793 l 241 438 l 518 765 q 538 794 534 783 q 535 811 542 805 q 511 820 528 817 q 468 825 494 823 l 468 855 l 753 855 l 753 825 q 714 820 731 823 q 683 813 697 817 q 659 802 670 808 q 637 783 647 795 l 340 455 l 668 85 q 694 64 680 72 q 724 54 708 57 q 757 51 740 51 q 791 53 774 51 l 796 24 q 716 0 756 11 q 643 -10 675 -10 q 608 -3 623 -10 q 579 19 593 2 l 241 433 l 241 70 q 265 50 241 62 q 339 29 289 38 l 339 0 l 33 0 "},"7":{"x_min":70.53125,"x_max":600.234375,"ha":652,"o":"m 600 791 q 537 643 569 718 q 475 496 505 568 q 417 355 444 423 q 365 226 389 287 q 323 116 342 166 q 293 30 304 66 q 243 1 269 13 q 183 -20 217 -11 l 155 2 q 261 200 214 106 q 347 382 307 294 q 423 556 387 471 q 497 729 459 642 l 189 729 q 169 728 179 729 q 149 719 160 727 q 127 690 139 710 q 101 630 115 669 l 70 642 q 75 682 72 658 q 83 730 79 705 q 91 778 87 755 q 99 817 95 802 l 577 817 l 600 791 "},"Y":{"x_min":-0.390625,"x_max":797.6875,"ha":825,"o":"m 243 0 l 243 29 q 330 55 305 42 q 355 78 355 68 l 355 364 q 298 478 329 419 q 232 594 266 538 q 168 699 199 651 q 113 780 137 748 q 99 794 107 788 q 79 806 91 801 q 49 814 67 811 q 2 818 30 818 l 0 847 q 79 856 39 852 q 148 861 119 861 q 201 834 179 861 q 255 757 226 802 q 313 663 284 713 q 370 562 342 614 q 422 461 398 509 l 604 780 q 597 808 614 797 q 529 825 581 818 l 529 855 l 797 855 l 797 825 q 726 807 750 816 q 691 780 701 797 l 464 366 l 464 77 q 469 68 464 73 q 488 55 475 62 q 523 42 501 48 q 576 29 544 35 l 576 0 l 243 0 "},"E":{"x_min":33.65625,"x_max":647.265625,"ha":689,"o":"m 647 165 q 633 63 641 107 q 619 0 624 19 l 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 783 q 107 804 132 791 q 33 825 82 816 l 33 855 l 580 855 l 603 838 q 599 799 601 820 q 592 757 596 778 q 583 717 588 736 q 575 685 579 698 l 544 685 q 539 737 543 716 q 527 771 534 758 q 511 788 521 783 q 489 794 501 794 l 241 794 l 241 499 l 515 499 l 533 480 q 520 459 527 470 q 503 438 512 448 q 486 418 495 427 q 470 404 478 410 q 448 421 460 414 q 421 433 437 428 q 385 439 406 437 q 336 442 365 442 l 241 442 l 241 104 q 245 86 241 94 q 265 72 250 78 q 307 64 280 67 q 379 61 334 61 l 466 61 q 520 64 498 61 q 559 79 542 67 q 589 114 576 91 q 618 177 603 137 l 647 165 "},"b":{"x_min":6.828125,"x_max":644,"ha":705,"o":"m 644 333 q 633 253 644 294 q 604 172 623 211 q 555 97 584 133 q 491 36 527 62 q 411 -4 454 10 q 317 -20 368 -20 q 282 -14 305 -20 q 230 2 259 -8 q 166 29 200 13 q 95 65 131 45 l 95 878 q 91 926 95 910 q 78 952 88 943 q 51 963 69 960 q 6 969 34 966 l 6 996 q 92 1018 51 1007 q 171 1051 133 1029 l 178 1044 q 186 1036 182 1040 q 197 1027 191 1032 l 196 493 q 264 563 230 533 q 328 612 297 593 q 385 641 359 632 q 431 651 412 651 q 516 629 477 651 q 584 566 555 607 q 628 466 612 525 q 644 333 644 407 m 552 276 q 538 396 552 344 q 500 485 524 449 q 447 540 477 521 q 384 559 416 559 q 352 551 372 559 q 307 528 332 544 q 253 483 282 511 q 197 413 225 455 l 197 137 q 252 103 224 117 q 305 82 280 90 q 351 71 330 74 q 384 68 372 68 q 456 85 425 68 q 509 133 487 103 q 541 200 530 162 q 552 276 552 237 "},"L":{"x_min":33.65625,"x_max":640.484375,"ha":661,"o":"m 640 165 q 626 63 635 106 q 612 0 618 19 l 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 783 q 107 804 132 791 q 33 825 82 816 l 33 855 l 339 855 l 339 825 q 267 804 293 816 q 241 783 241 793 l 241 111 q 246 89 241 99 q 266 74 252 80 q 305 64 281 67 q 367 61 329 61 l 464 61 q 516 64 495 61 q 554 79 538 67 q 583 114 570 91 q 611 177 597 137 l 640 165 "},"½":{"x_min":54.484375,"x_max":759.421875,"ha":814,"o":"m 66 432 l 66 455 q 114 461 95 458 q 144 469 133 465 q 158 477 154 473 q 163 484 163 481 l 163 732 q 162 753 163 746 q 156 764 161 760 q 148 768 154 766 q 132 769 142 769 q 104 766 121 768 q 62 760 87 764 l 54 782 q 92 793 70 786 q 138 807 115 800 q 183 823 162 815 q 217 838 205 831 l 231 826 l 231 484 q 234 477 231 481 q 247 469 237 473 q 274 461 256 465 q 320 455 292 458 l 320 432 l 66 432 m 214 2 q 184 -10 198 -5 q 151 -20 169 -15 l 134 0 l 651 816 q 680 828 664 821 q 711 838 696 834 l 728 819 l 214 2 m 754 0 l 479 0 l 468 23 q 578 135 536 90 q 644 210 620 180 q 676 261 668 241 q 685 300 685 281 q 669 348 685 330 q 614 366 653 366 q 588 360 600 366 q 567 346 575 355 q 554 326 558 337 q 549 303 549 315 q 521 293 535 297 q 489 288 506 289 l 479 297 q 492 333 479 314 q 528 367 506 351 q 579 392 550 382 q 640 402 609 402 q 685 396 665 402 q 721 379 706 391 q 745 350 737 368 q 754 309 754 333 q 743 265 754 288 q 709 214 733 243 q 646 144 685 184 q 548 45 607 103 l 696 45 q 717 53 709 45 q 728 70 724 61 q 735 97 733 82 l 759 93 l 754 0 "},"'":{"x_min":108.515625,"x_max":238.734375,"ha":347,"o":"m 209 565 q 196 559 204 562 q 179 555 188 557 q 161 552 170 553 q 144 551 152 551 l 108 967 q 130 977 115 971 q 159 988 144 982 q 188 998 174 993 q 209 1004 202 1002 l 238 989 l 209 565 "},"v":{"x_min":13.5625,"x_max":670.765625,"ha":685,"o":"m 670 601 q 637 593 650 597 q 616 583 624 588 q 603 572 608 578 q 596 555 599 565 l 404 40 q 386 14 398 25 q 361 -2 375 4 q 334 -13 347 -9 q 312 -20 321 -17 l 88 555 q 65 584 82 574 q 13 601 47 594 l 13 631 l 275 631 l 275 601 q 232 595 248 598 q 206 586 215 591 q 196 574 197 581 q 198 555 194 566 l 365 121 l 522 555 q 524 573 525 565 q 515 585 523 580 q 492 594 507 590 q 451 601 476 597 l 451 631 l 670 631 l 670 601 "},"x":{"x_min":13.5625,"x_max":689.078125,"ha":699,"o":"m 416 0 l 416 29 q 448 33 433 30 q 471 41 463 35 q 480 59 480 48 q 466 88 480 70 l 332 271 l 204 88 q 193 59 191 70 q 208 41 196 48 q 237 33 219 35 q 270 29 254 30 l 270 0 l 13 0 l 13 29 q 59 39 40 33 q 91 54 78 45 q 114 72 105 62 q 130 92 123 82 l 295 322 l 136 540 q 118 563 127 553 q 97 581 109 574 q 66 594 84 589 q 21 602 48 599 l 21 631 l 305 631 l 305 602 q 269 596 284 599 q 246 586 254 592 q 239 569 238 579 q 252 542 240 558 l 362 391 l 466 542 q 480 569 478 558 q 474 586 481 580 q 452 596 467 593 q 416 602 437 599 l 416 631 l 674 631 l 674 602 q 589 581 619 597 q 541 540 559 566 l 399 340 l 580 92 q 598 72 588 82 q 620 54 607 62 q 649 38 632 45 q 689 29 666 31 l 689 0 l 416 0 "},".":{"x_min":89,"x_max":250,"ha":318,"o":"m 250 83 q 242 39 250 59 q 223 4 235 19 q 193 -18 210 -10 q 156 -27 176 -27 q 104 -7 120 -27 q 89 48 89 12 q 96 91 89 71 q 116 127 103 111 q 146 151 129 142 q 183 160 164 160 q 233 140 216 160 q 250 83 250 120 "},"9":{"x_min":68,"x_max":590,"ha":652,"o":"m 326 377 q 412 403 373 377 q 481 471 452 429 q 463 612 479 555 q 424 703 447 669 q 371 751 400 737 q 315 766 342 766 q 254 752 281 766 q 208 713 226 738 q 179 654 189 688 q 170 580 170 620 q 185 478 170 518 q 223 416 200 439 q 274 385 246 393 q 326 377 301 377 m 590 495 q 562 304 590 392 q 477 147 534 215 q 333 33 420 79 q 128 -29 246 -12 l 116 11 q 272 70 206 33 q 381 155 337 106 q 447 263 424 203 q 478 391 471 323 q 438 354 459 371 q 392 326 416 337 q 344 308 369 314 q 297 302 320 302 q 200 319 242 302 q 128 369 158 337 q 83 444 99 401 q 68 539 68 488 q 77 608 68 572 q 103 677 86 644 q 145 739 120 710 q 200 790 170 768 q 267 824 231 811 q 343 837 303 837 q 435 817 390 837 q 514 756 479 797 q 569 649 548 714 q 590 495 590 585 "},"l":{"x_min":40.265625,"x_max":345.734375,"ha":376,"o":"m 40 0 l 40 29 q 89 38 69 33 q 120 49 108 44 q 136 59 131 54 q 142 70 142 65 l 142 878 q 137 926 142 909 q 123 951 133 943 q 93 963 112 960 q 47 969 75 966 l 47 996 q 136 1017 95 1006 q 219 1051 177 1029 l 244 1027 l 244 70 q 267 49 244 60 q 345 29 290 38 l 345 0 l 40 0 "},"e":{"x_min":54,"x_max":588,"ha":642,"o":"m 336 580 q 271 566 301 580 q 219 527 242 552 q 181 468 196 503 q 160 393 166 434 l 451 393 q 471 398 466 393 q 477 417 477 403 q 471 463 477 435 q 451 517 466 490 q 408 561 436 543 q 336 580 381 580 m 588 377 q 555 352 575 363 q 513 332 535 340 l 156 332 q 170 231 156 279 q 210 147 184 183 q 273 89 236 111 q 357 68 310 68 q 398 70 378 68 q 441 82 418 73 q 492 110 464 92 q 558 160 520 129 q 574 146 567 155 q 584 132 580 137 q 504 52 538 82 q 439 6 469 22 q 379 -14 409 -9 q 315 -20 350 -20 q 216 2 263 -20 q 132 65 168 24 q 75 164 96 106 q 54 294 54 222 q 64 383 54 339 q 93 467 74 428 q 140 539 113 506 q 204 597 168 573 q 237 617 219 607 q 276 634 256 627 q 317 646 297 642 q 355 651 337 651 q 434 638 399 651 q 494 605 469 626 q 538 557 520 585 q 567 499 556 530 q 583 437 578 469 q 588 377 588 405 "},"^":{"x_min":67.828125,"x_max":615.140625,"ha":684,"o":"m 615 430 q 582 404 598 414 q 543 383 566 393 l 518 401 l 326 891 l 156 430 q 139 416 149 423 q 120 403 130 409 q 100 391 109 396 q 83 383 90 386 l 67 401 l 286 991 q 306 1007 294 999 q 330 1024 318 1016 q 354 1039 342 1032 q 376 1051 366 1046 l 615 430 "},"-":{"x_min":41.375,"x_max":426.609375,"ha":468,"o":"m 426 370 q 416 338 422 355 q 405 309 411 320 l 58 309 l 41 325 q 50 356 44 340 q 62 387 56 373 l 409 387 l 426 370 "},"Q":{"x_min":47,"x_max":869.4375,"ha":834,"o":"m 667 426 q 658 519 667 473 q 634 606 650 565 q 596 682 618 647 q 544 742 573 716 q 482 782 516 767 q 409 797 448 797 q 301 771 349 797 q 220 698 253 746 q 169 584 187 651 q 152 434 152 517 q 172 290 152 358 q 228 171 193 223 q 310 90 263 120 q 409 61 357 61 q 513 84 465 61 q 594 153 560 107 q 647 268 628 200 q 667 426 667 337 m 869 -79 q 836 -132 853 -109 q 802 -172 819 -156 q 772 -198 786 -189 q 747 -207 757 -207 q 664 -186 705 -207 q 582 -135 623 -165 q 501 -74 541 -106 q 420 -18 461 -41 q 389 -20 404 -20 q 252 14 315 -20 q 143 108 188 49 q 72 246 97 167 q 47 415 47 325 q 76 590 47 507 q 158 737 106 674 q 279 837 209 800 q 429 875 349 875 q 577 838 513 875 q 684 740 640 801 q 749 600 727 679 q 772 438 772 521 q 752 299 772 367 q 700 176 733 232 q 619 76 666 119 q 518 8 573 32 q 580 -28 549 -8 q 641 -66 611 -48 q 698 -96 670 -84 q 751 -109 726 -109 q 768 -106 759 -109 q 789 -97 777 -103 q 815 -81 800 -91 q 851 -56 830 -71 l 869 -79 "},"#":{"x_min":59,"x_max":666.015625,"ha":652,"o":"m 270 400 l 398 400 l 448 574 l 320 574 l 270 400 m 546 652 l 649 652 l 666 635 q 656 602 662 620 q 644 574 650 585 l 524 574 l 474 400 l 577 400 l 592 381 q 583 350 588 368 q 573 322 578 333 l 452 322 l 393 115 q 364 98 381 105 q 330 86 348 92 l 313 99 l 376 322 l 248 322 l 189 115 q 161 98 177 105 q 128 86 145 92 l 110 99 l 173 322 l 73 322 l 59 338 q 67 369 62 352 q 79 400 73 386 l 196 400 l 245 574 l 147 574 l 130 590 q 140 621 134 605 q 151 652 146 638 l 267 652 l 324 848 q 354 864 339 859 q 383 876 368 869 l 403 861 l 343 652 l 470 652 l 526 848 q 557 864 541 859 q 588 876 572 869 l 606 861 l 546 652 "},"=":{"x_min":41.375,"x_max":568.34375,"ha":610,"o":"m 568 298 q 558 269 564 284 q 548 241 552 253 l 58 241 l 41 259 q 50 287 44 273 q 62 316 56 302 l 551 316 l 568 298 m 568 501 q 558 471 564 488 q 548 444 552 455 l 58 444 l 41 461 q 50 490 44 474 q 62 519 56 506 l 551 519 l 568 501 "},"u":{"x_min":27.515625,"x_max":725.4375,"ha":736,"o":"m 725 55 q 677 25 700 39 q 634 1 654 11 q 599 -14 614 -8 q 576 -20 584 -20 q 538 11 553 -20 q 519 112 523 43 q 441 44 476 70 q 377 4 406 18 q 323 -14 347 -9 q 276 -20 298 -20 q 215 -11 244 -20 q 163 21 186 -2 q 128 85 141 44 q 115 189 115 125 l 115 482 q 112 532 115 514 q 102 559 110 550 q 76 572 93 568 q 27 579 58 575 l 27 606 q 73 613 51 608 q 114 622 94 617 q 155 635 134 627 q 197 651 175 642 l 217 624 l 217 226 q 224 147 217 179 q 244 96 231 115 q 277 69 257 77 q 320 61 296 61 q 365 67 342 61 q 412 87 388 73 q 462 123 436 101 q 519 177 489 145 l 519 482 q 515 530 519 512 q 502 559 512 549 q 473 573 492 569 q 424 579 455 577 l 424 606 q 517 625 472 612 q 600 651 562 638 l 621 624 l 621 172 q 624 104 621 130 q 636 70 627 77 q 664 68 644 65 q 718 86 684 71 l 725 55 "},"B":{"x_min":27.5625,"x_max":689,"ha":764,"o":"m 280 818 q 261 817 270 818 q 241 817 251 817 l 241 492 l 264 492 q 389 507 341 492 q 463 546 437 522 q 499 599 490 569 q 509 658 509 629 q 497 721 509 692 q 460 772 486 750 q 389 805 433 793 q 280 818 346 818 m 352 441 q 292 437 320 441 q 241 430 265 434 l 241 70 q 247 59 241 64 q 273 53 258 55 q 304 49 288 51 q 335 47 319 48 q 364 47 350 47 q 452 59 413 47 q 520 94 491 72 q 563 148 548 116 q 578 218 578 180 q 564 294 578 255 q 524 366 551 334 q 454 420 496 399 q 352 441 411 441 m 689 241 q 666 137 689 183 q 602 57 643 90 q 504 7 561 25 q 378 -10 447 -10 q 343 -9 364 -10 q 298 -8 322 -9 q 250 -7 275 -7 q 201 -5 224 -6 q 83 0 144 -2 l 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 807 q 81 800 106 803 q 33 792 56 796 l 27 834 q 88 848 54 841 q 162 861 123 856 q 241 871 201 867 q 318 875 281 875 q 440 862 385 875 q 534 826 495 849 q 593 768 572 802 q 614 692 614 734 q 579 566 614 619 q 484 491 544 514 q 565 460 528 482 q 630 405 602 437 q 673 330 657 372 q 689 241 689 288 "},"H":{"x_min":33.65625,"x_max":861.34375,"ha":908,"o":"m 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 783 q 107 804 132 791 q 33 825 82 816 l 33 855 l 339 855 l 339 825 q 267 804 293 816 q 241 783 241 793 l 241 478 l 654 478 l 654 783 q 629 804 654 791 q 555 825 604 816 l 555 855 l 861 855 l 861 825 q 789 804 815 816 q 763 783 763 793 l 763 70 q 787 50 763 62 q 861 29 812 38 l 861 0 l 555 0 l 555 29 q 627 49 601 38 q 654 70 654 61 l 654 417 l 241 417 l 241 70 q 265 50 241 62 q 339 29 289 38 l 339 0 l 33 0 "},"*":{"x_min":47.46875,"x_max":573.78125,"ha":621,"o":"m 331 805 l 508 938 q 542 917 522 929 q 572 893 561 904 l 573 865 l 352 770 l 556 682 q 554 642 555 665 q 548 604 554 619 l 523 588 l 332 732 l 358 512 q 341 503 350 508 q 323 494 333 498 q 304 486 313 489 q 287 481 295 482 l 261 493 l 289 732 l 112 599 q 95 609 105 603 q 77 621 86 615 q 61 633 69 627 q 48 644 53 639 l 47 673 l 268 768 l 63 856 q 64 874 64 864 q 65 896 65 885 q 67 916 66 907 q 71 933 69 926 l 95 949 l 288 805 l 262 1026 q 279 1035 269 1030 q 298 1044 288 1040 q 318 1053 308 1049 q 335 1059 327 1056 l 359 1044 l 331 805 "},"°":{"x_min":95,"x_max":402,"ha":497,"o":"m 328 674 q 322 712 328 694 q 308 744 317 730 q 286 766 299 758 q 256 775 272 775 q 224 768 239 775 q 196 748 208 761 q 177 717 184 735 q 170 677 170 699 q 174 639 170 657 q 188 607 179 621 q 210 585 197 594 q 240 577 224 577 q 272 583 257 577 q 300 602 288 589 q 320 633 313 615 q 328 674 328 651 m 402 709 q 385 631 402 667 q 343 570 369 596 q 286 529 317 544 q 223 515 254 515 q 171 525 195 515 q 130 553 147 535 q 104 593 113 570 q 95 643 95 616 q 110 720 95 685 q 152 782 126 756 q 210 823 178 808 q 273 838 242 838 q 323 827 300 838 q 364 799 347 816 q 391 758 381 781 q 402 709 402 734 "},"5":{"x_min":52.421875,"x_max":567,"ha":652,"o":"m 567 278 q 548 165 567 219 q 496 70 530 111 q 411 4 462 28 q 297 -20 361 -20 q 173 3 234 -20 q 52 81 111 26 l 76 126 q 141 86 112 101 q 196 62 171 71 q 242 51 221 54 q 283 48 263 48 q 359 64 327 48 q 414 109 392 81 q 447 174 436 138 q 458 248 458 210 q 446 332 458 294 q 412 397 435 370 q 355 439 390 424 q 272 454 320 454 q 240 450 258 454 q 201 440 221 447 q 161 423 181 433 q 124 399 141 413 l 92 422 q 101 478 96 446 q 113 546 107 511 q 124 620 118 582 q 135 693 130 658 q 143 761 139 729 q 148 817 146 793 l 443 817 q 478 818 463 817 q 504 823 493 820 q 526 829 516 825 l 545 809 q 528 786 538 798 q 508 764 518 774 q 488 744 498 753 q 470 729 478 735 l 207 729 q 202 678 206 709 q 195 615 199 647 q 186 554 190 583 q 178 511 181 526 q 242 524 205 519 q 313 529 278 529 q 422 508 375 529 q 501 453 469 487 q 550 373 533 418 q 567 278 567 327 "},"o":{"x_min":54,"x_max":645,"ha":699,"o":"m 540 308 q 522 410 540 362 q 476 495 504 458 q 413 554 448 532 q 343 576 378 576 q 256 556 291 576 q 199 502 220 536 q 168 421 178 468 q 159 320 159 375 q 178 219 159 267 q 226 134 197 170 q 289 76 254 97 q 355 55 324 55 q 438 72 403 55 q 495 124 473 90 q 529 203 518 157 q 540 308 540 250 m 645 329 q 633 240 645 283 q 601 158 621 196 q 552 86 581 119 q 489 30 524 53 q 416 -6 455 6 q 336 -20 378 -20 q 220 4 272 -20 q 131 71 168 28 q 74 173 94 114 q 54 301 54 232 q 65 389 54 346 q 96 471 76 432 q 144 543 116 510 q 207 600 172 576 q 281 637 241 623 q 363 651 320 651 q 478 626 426 651 q 567 559 530 602 q 624 457 604 516 q 645 329 645 398 "},"d":{"x_min":54,"x_max":712.796875,"ha":722,"o":"m 712 57 q 657 21 681 36 q 615 -2 633 7 q 584 -15 597 -11 q 561 -20 571 -20 q 525 10 539 -20 q 506 114 510 41 q 454 58 480 83 q 402 16 429 33 q 346 -10 375 -1 q 281 -20 316 -20 q 203 2 243 -20 q 130 65 163 24 q 75 166 96 106 q 54 301 54 226 q 64 381 54 339 q 94 461 75 422 q 142 534 114 499 q 206 595 171 568 q 283 636 241 621 q 373 651 325 651 q 436 643 405 651 q 505 608 468 635 l 505 863 q 502 923 505 901 q 491 957 500 945 q 462 973 481 968 q 406 980 442 977 l 406 1006 q 506 1026 462 1014 q 585 1051 550 1039 l 607 1030 l 607 172 q 608 131 607 148 q 611 103 609 114 q 615 84 613 91 q 622 72 618 76 q 645 67 628 64 q 703 86 663 70 l 712 57 m 505 177 l 505 494 q 441 554 482 533 q 352 576 401 576 q 273 560 309 576 q 211 512 237 544 q 170 433 185 480 q 156 322 156 385 q 172 217 156 264 q 214 137 189 170 q 271 85 240 103 q 330 68 302 68 q 375 77 353 68 q 419 102 397 86 q 462 137 441 117 q 505 177 484 156 "},",":{"x_min":59.40625,"x_max":264,"ha":318,"o":"m 264 47 q 253 -12 264 20 q 223 -80 243 -45 q 175 -147 203 -114 q 112 -207 147 -180 l 81 -183 q 114 -141 100 -161 q 136 -99 127 -120 q 148 -53 144 -77 q 153 0 153 -29 q 133 47 153 29 q 70 62 113 64 l 59 94 q 85 112 65 102 q 128 133 104 123 q 174 149 151 142 q 209 155 197 155 q 252 112 241 139 q 264 47 264 86 "},"\"":{"x_min":108.515625,"x_max":482.21875,"ha":590,"o":"m 209 565 q 196 559 204 562 q 179 555 188 557 q 161 552 170 553 q 144 551 152 551 l 108 967 q 130 977 115 971 q 159 988 144 982 q 188 998 174 993 q 209 1004 202 1002 l 238 989 l 209 565 m 453 565 q 439 559 447 562 q 422 555 432 557 q 404 552 413 553 q 387 551 395 551 l 351 967 q 372 977 358 971 q 402 988 386 982 q 431 998 417 993 q 453 1004 445 1002 l 482 989 l 453 565 "},"~":{"x_min":33.234375,"x_max":644.3125,"ha":678,"o":"m 644 525 q 608 456 630 492 q 559 391 586 421 q 502 343 533 362 q 438 324 471 324 q 378 341 410 324 q 313 378 346 358 q 248 415 280 398 q 187 433 216 433 q 125 406 153 433 q 69 322 97 379 l 33 340 q 69 409 47 373 q 118 475 91 445 q 175 523 145 504 q 238 543 206 543 q 302 525 269 543 q 367 488 335 508 q 431 451 400 468 q 489 434 461 434 q 550 460 521 434 q 608 542 579 486 l 644 525 "},"P":{"x_min":27.5625,"x_max":666,"ha":726,"o":"m 33 0 l 33 29 q 105 49 79 38 q 132 70 132 61 l 132 807 q 82 800 106 803 q 33 792 57 796 l 27 834 q 98 850 60 843 q 178 863 136 858 q 261 871 219 868 q 345 875 304 875 q 478 859 419 875 q 578 813 537 843 q 643 738 620 782 q 666 634 666 693 q 652 549 666 588 q 617 480 639 510 q 566 428 595 450 q 507 391 538 406 q 445 370 476 377 q 388 363 414 363 q 279 383 324 363 l 263 434 q 318 417 292 421 q 368 414 344 414 q 433 426 399 414 q 495 462 467 438 q 542 523 524 487 q 561 607 561 559 q 541 702 561 662 q 486 768 521 742 q 405 805 451 793 q 307 818 359 818 q 273 817 290 818 q 241 817 257 817 l 241 70 q 246 61 241 66 q 265 51 251 57 q 301 40 278 46 q 359 29 324 35 l 359 0 l 33 0 "},"%":{"x_min":52,"x_max":907,"ha":959,"o":"m 810 195 q 801 278 810 243 q 778 337 793 313 q 746 371 764 360 q 708 383 727 383 q 678 373 693 383 q 652 343 664 363 q 634 294 641 323 q 627 224 627 264 q 634 139 627 175 q 655 80 641 103 q 686 45 668 57 q 726 34 704 34 q 758 44 743 34 q 784 74 773 54 q 803 125 796 95 q 810 195 810 155 m 907 209 q 890 121 907 162 q 847 48 874 79 q 783 -1 820 16 q 708 -20 747 -20 q 635 -1 669 -20 q 578 48 602 16 q 541 121 555 79 q 528 209 528 162 q 544 298 528 256 q 588 370 561 339 q 652 420 616 402 q 726 438 688 438 q 800 420 767 438 q 857 371 833 402 q 894 298 881 340 q 907 209 907 257 m 242 11 q 224 1 236 6 q 199 -7 212 -3 q 172 -16 185 -12 q 151 -23 159 -20 l 134 0 l 715 805 q 759 825 734 817 q 805 839 784 833 l 825 816 l 242 11 m 334 595 q 325 678 334 643 q 302 737 317 714 q 270 771 288 760 q 232 783 251 783 q 202 773 217 783 q 176 743 188 763 q 157 694 164 723 q 150 624 150 664 q 157 539 150 575 q 178 479 164 503 q 210 444 191 456 q 250 433 228 433 q 282 443 266 433 q 308 473 297 453 q 327 524 320 494 q 334 595 334 554 m 432 608 q 415 519 432 561 q 372 446 399 477 q 308 396 344 414 q 232 378 272 378 q 159 396 192 378 q 102 446 126 414 q 65 519 78 477 q 52 608 52 561 q 68 696 52 655 q 111 769 84 738 q 175 818 139 800 q 250 837 211 837 q 324 819 291 837 q 381 769 357 801 q 418 697 405 738 q 432 608 432 655 "},"_":{"x_min":41.375,"x_max":608.359375,"ha":652,"o":"m 608 -105 q 599 -137 604 -120 q 588 -167 594 -154 l 58 -167 l 41 -148 q 50 -118 44 -135 q 62 -89 56 -102 l 592 -89 l 608 -105 "},"<":{"x_min":41.375,"x_max":568.34375,"ha":610,"o":"m 568 218 q 555 206 560 211 q 542 196 549 201 q 529 185 536 190 q 511 174 521 180 l 58 343 l 41 359 q 41 361 41 361 q 42 363 42 362 l 44 369 q 45 375 44 371 l 47 384 l 49 389 q 50 394 50 391 q 52 398 50 396 l 53 403 l 57 416 l 61 424 l 62 426 l 551 610 l 568 593 q 563 576 566 585 q 558 558 561 567 q 553 540 556 548 q 548 525 550 531 l 172 385 l 556 243 l 568 218 "},"t":{"x_min":13.265625,"x_max":458.453125,"ha":478,"o":"m 458 79 q 392 36 425 55 q 330 5 360 17 q 276 -13 301 -7 q 233 -20 250 -20 q 188 -11 209 -20 q 150 17 166 -2 q 124 70 134 37 q 115 150 115 102 l 115 567 l 27 567 l 13 585 l 66 631 l 115 631 l 115 797 l 195 868 l 217 851 l 217 631 l 438 631 l 458 611 q 443 591 452 602 q 424 571 434 580 q 405 553 415 561 q 389 543 396 545 q 340 559 373 551 q 252 567 307 567 l 217 567 l 217 208 q 220 140 217 167 q 233 97 224 113 q 256 74 242 81 q 290 68 269 68 q 349 77 313 68 q 438 114 385 86 l 458 79 "},"I":{"x_min":47.65625,"x_max":353.34375,"ha":414,"o":"m 47 0 l 47 29 q 119 49 93 38 q 146 70 146 61 l 146 783 q 121 804 146 791 q 47 825 96 816 l 47 855 l 353 855 l 353 825 q 281 804 307 816 q 255 783 255 793 l 255 70 q 279 50 255 62 q 353 29 304 38 l 353 0 l 47 0 "},";":{"x_min":59.40625,"x_max":264,"ha":318,"o":"m 264 47 q 253 -12 264 20 q 223 -80 243 -45 q 175 -147 203 -114 q 112 -207 147 -180 l 81 -183 q 114 -141 100 -161 q 136 -99 127 -120 q 148 -53 144 -77 q 153 0 153 -29 q 133 47 153 29 q 70 62 113 64 l 59 94 q 85 112 65 102 q 128 133 104 123 q 174 149 151 142 q 209 155 197 155 q 252 112 241 139 q 264 47 264 86 m 250 575 q 242 531 250 551 q 223 496 235 511 q 193 473 210 481 q 156 464 176 464 q 104 484 120 464 q 89 540 89 504 q 96 583 89 563 q 116 618 103 603 q 146 642 129 634 q 183 651 164 651 q 233 631 216 651 q 250 575 250 611 "},"6":{"x_min":75,"x_max":598,"ha":652,"o":"m 339 447 q 263 427 305 447 q 184 363 221 408 q 197 223 184 282 q 234 126 210 165 q 293 69 259 88 q 370 51 328 51 q 430 68 406 51 q 469 112 454 85 q 489 171 483 139 q 496 235 496 204 q 480 340 496 299 q 442 405 465 381 q 392 437 419 428 q 339 447 364 447 m 598 279 q 590 213 598 247 q 569 145 583 178 q 533 82 554 112 q 483 29 511 52 q 420 -6 455 7 q 343 -20 385 -20 q 239 4 288 -20 q 153 74 190 29 q 96 181 117 118 q 75 320 75 244 q 102 504 75 416 q 187 662 130 592 q 330 781 244 733 q 535 847 417 830 l 548 807 q 406 751 468 788 q 299 666 343 714 q 227 559 255 617 q 190 440 200 501 q 238 479 213 463 q 286 504 263 494 q 330 517 309 513 q 367 522 351 522 q 465 505 422 522 q 537 456 507 488 q 582 380 566 425 q 598 279 598 335 "},"n":{"x_min":37.046875,"x_max":745.953125,"ha":766,"o":"m 454 0 l 454 29 q 525 51 502 42 q 549 70 549 61 l 549 429 q 544 496 549 470 q 529 537 539 522 q 502 557 519 552 q 462 563 486 563 q 415 552 441 563 q 360 520 389 542 q 298 461 330 497 q 234 372 266 425 l 234 70 q 259 49 234 60 q 328 29 284 38 l 328 0 l 37 0 l 37 29 q 106 49 81 40 q 132 70 132 59 l 132 482 q 129 524 132 508 q 118 548 127 540 q 90 561 109 557 q 37 570 71 565 l 37 597 q 122 618 83 604 q 199 651 161 632 l 223 627 l 231 458 q 296 539 260 503 q 369 599 332 575 q 440 637 406 624 q 501 651 474 651 q 557 642 530 651 q 605 615 584 633 q 638 568 625 596 q 651 502 651 540 l 651 70 q 671 51 651 61 q 745 29 692 42 l 745 0 l 454 0 "},"∂":{"x_min":54,"x_max":641,"ha":695,"o":"m 533 398 q 499 468 522 435 q 446 525 475 501 q 384 563 416 549 q 322 577 351 577 q 251 557 282 577 q 199 503 220 537 q 168 422 179 469 q 158 321 158 375 q 176 219 158 267 q 221 134 194 170 q 281 76 249 97 q 343 55 314 55 q 417 78 382 55 q 477 146 452 102 q 518 251 503 189 q 533 390 533 313 l 533 398 m 641 489 q 625 309 641 386 q 584 174 610 231 q 527 80 559 118 q 460 20 494 43 q 394 -10 426 -1 q 336 -20 362 -20 q 217 4 270 -20 q 129 71 165 28 q 73 173 92 114 q 54 301 54 232 q 78 431 54 368 q 143 544 102 495 q 236 622 183 593 q 343 652 288 652 q 389 641 363 652 q 442 615 416 631 q 493 578 469 599 q 533 535 517 557 q 507 705 529 636 q 451 817 484 774 q 377 878 417 859 q 297 897 336 897 q 258 894 277 897 q 219 885 240 892 q 176 864 199 878 q 122 827 153 850 l 92 850 l 172 947 q 246 972 211 963 q 315 981 281 981 q 392 973 353 981 q 467 945 431 965 q 534 889 503 924 q 590 800 566 854 q 627 669 613 745 q 641 489 641 592 "},"√":{"x_min":14.25,"x_max":839.640625,"ha":820,"o":"m 839 968 q 830 936 836 953 q 819 907 824 919 l 718 907 l 485 40 q 467 14 479 25 q 442 -2 456 4 q 416 -13 429 -9 q 394 -20 402 -17 l 124 552 l 31 552 l 14 570 q 23 600 17 584 q 35 630 29 616 l 200 631 l 440 127 l 676 985 l 822 985 l 839 968 "},"≈":{"x_min":37.984375,"x_max":571.734375,"ha":610,"o":"m 571 328 q 407 219 503 219 q 351 229 379 219 q 296 252 323 240 q 241 275 268 264 q 186 286 213 286 q 129 267 154 286 q 73 217 103 249 l 37 254 q 202 365 105 365 q 262 354 232 365 q 321 331 293 343 q 374 308 349 319 q 421 298 400 298 q 453 303 437 298 q 483 319 469 309 q 511 341 498 328 q 535 367 524 353 l 571 328 m 571 505 q 407 396 503 396 q 351 406 379 396 q 296 429 323 416 q 241 451 268 441 q 186 462 213 462 q 129 444 154 462 q 73 393 103 426 l 37 430 q 202 541 105 541 q 262 530 232 541 q 321 508 293 520 q 374 485 349 495 q 421 475 400 475 q 453 480 437 475 q 483 496 469 486 q 511 518 498 505 q 535 545 524 530 l 571 505 "},"g":{"x_min":20,"x_max":670.8125,"ha":678,"o":"m 468 406 q 456 474 468 442 q 420 531 444 507 q 362 569 397 555 q 282 583 327 583 q 244 574 265 583 q 205 548 224 565 q 175 505 187 531 q 163 446 163 479 q 174 378 163 410 q 208 322 185 346 q 265 284 230 298 q 348 271 300 271 q 389 279 368 271 q 428 305 411 287 q 456 347 445 322 q 468 406 468 372 m 351 -2 q 303 3 325 0 q 263 10 282 6 q 186 -36 214 -15 q 143 -74 157 -57 q 125 -104 129 -90 q 122 -128 122 -118 q 140 -182 122 -157 q 191 -226 159 -208 q 265 -256 223 -245 q 353 -268 307 -268 q 436 -255 399 -268 q 500 -222 473 -243 q 541 -171 526 -200 q 556 -106 556 -141 q 547 -71 556 -87 q 515 -42 538 -55 q 452 -19 492 -29 q 351 -2 412 -9 m 563 434 q 539 339 563 382 q 478 265 516 296 q 392 217 440 234 q 294 200 343 200 l 291 200 q 246 154 259 172 q 234 132 234 136 q 241 116 234 124 q 268 102 248 109 q 321 87 287 94 q 408 74 355 80 q 530 50 482 66 q 607 12 578 33 q 646 -33 635 -8 q 658 -81 658 -57 q 643 -152 658 -118 q 605 -214 629 -185 q 547 -265 580 -242 q 476 -305 514 -288 q 397 -330 438 -321 q 316 -339 356 -339 q 250 -334 284 -339 q 183 -320 216 -330 q 120 -296 150 -311 q 68 -261 91 -282 q 33 -214 46 -240 q 20 -155 20 -188 q 26 -118 20 -137 q 52 -76 32 -98 q 107 -28 72 -54 q 201 28 142 -2 q 140 63 157 44 q 123 103 123 83 q 126 118 123 109 q 140 140 129 127 q 170 170 150 153 q 220 209 189 187 q 158 236 186 218 q 110 280 130 254 q 79 337 90 305 q 68 408 68 370 q 90 502 68 457 q 149 579 112 546 q 232 631 185 612 q 329 651 279 651 q 405 639 369 651 q 470 606 440 627 q 533 615 505 610 q 585 627 562 621 q 625 639 607 633 q 657 651 643 645 l 670 630 q 655 595 662 611 q 632 562 647 579 q 581 555 606 558 q 525 551 556 552 q 553 496 543 525 q 563 434 563 467 "},"²":{"x_min":40.390625,"x_max":403.78125,"ha":457,"o":"m 397 421 l 53 421 l 40 450 q 138 549 96 506 q 210 626 180 592 q 260 684 240 659 q 290 729 279 709 q 306 764 302 748 q 311 796 311 780 q 290 856 311 834 q 222 878 270 878 q 188 871 203 878 q 163 853 174 864 q 146 828 152 842 q 140 800 140 814 q 105 787 124 792 q 65 780 87 782 l 53 792 q 69 836 53 813 q 114 878 86 859 q 179 910 142 897 q 254 923 215 923 q 312 916 285 923 q 357 895 338 909 q 386 859 376 880 q 397 807 397 837 q 384 752 397 780 q 341 688 371 725 q 262 600 311 651 q 139 477 213 550 l 325 477 q 350 487 340 477 q 365 509 359 497 q 373 542 371 523 l 403 537 l 397 421 "},"≥":{"x_min":41.375,"x_max":568.34375,"ha":610,"o":"m 568 192 q 558 163 564 178 q 548 135 552 147 l 58 135 l 41 153 q 50 181 44 167 q 62 210 56 196 l 551 210 l 568 192 m 41 646 q 71 669 56 659 q 98 691 86 680 l 552 521 l 568 505 q 559 470 564 489 q 547 436 554 452 l 58 254 l 41 271 q 46 287 43 278 q 51 305 48 296 q 56 323 54 315 q 62 338 59 332 l 436 478 l 52 620 l 41 646 "},"∫":{"x_min":-139.921875,"x_max":493.25,"ha":376,"o":"m 493 965 q 483 949 493 959 q 460 927 473 938 q 431 906 446 916 q 407 892 417 896 q 378 930 392 915 q 351 953 365 944 q 327 964 338 961 q 306 968 315 968 q 269 957 284 968 q 243 920 253 946 q 228 853 233 895 q 224 750 224 812 q 226 650 224 708 q 232 526 228 592 q 241 390 236 460 q 249 253 245 320 q 255 125 253 185 q 258 20 258 65 q 245 -84 258 -38 q 214 -165 233 -130 q 170 -226 194 -200 q 121 -271 145 -252 q 82 -297 103 -285 q 42 -319 62 -310 q 3 -333 22 -328 q -27 -339 -14 -339 q -68 -333 -48 -339 q -104 -321 -88 -328 q -130 -305 -120 -313 q -139 -291 -139 -297 q -130 -275 -139 -285 q -106 -253 -120 -264 q -78 -231 -93 -241 q -53 -216 -63 -221 q -9 -241 -32 -235 q 39 -247 14 -247 q 77 -235 58 -247 q 113 -196 97 -224 q 138 -120 128 -168 q 149 0 149 -72 q 146 93 149 37 q 140 216 144 150 q 132 352 136 282 q 123 490 127 423 q 117 614 119 556 q 115 712 115 672 q 121 812 115 770 q 141 885 128 853 q 175 941 155 916 q 222 988 196 965 q 294 1035 257 1019 q 358 1051 332 1051 q 412 1039 388 1051 q 455 1014 437 1028 q 483 985 473 999 q 493 965 493 971 "},"\\":{"x_min":37.296875,"x_max":613.796875,"ha":652,"o":"m 590 -227 q 571 -220 581 -224 q 549 -211 560 -216 q 528 -202 538 -207 q 512 -192 518 -197 l 37 1070 l 62 1085 q 139 1051 101 1074 l 613 -210 l 590 -227 "},"!":{"x_min":103,"x_max":264,"ha":378,"o":"m 264 83 q 256 39 264 59 q 237 4 249 19 q 207 -18 224 -10 q 170 -27 190 -27 q 118 -7 134 -27 q 103 48 103 12 q 110 91 103 71 q 130 127 117 111 q 160 151 143 142 q 197 160 178 160 q 247 140 230 160 q 264 83 264 120 m 221 264 q 198 248 208 254 q 170 237 187 243 l 151 251 l 119 948 q 173 979 145 965 q 225 1004 202 994 l 254 987 l 221 264 "},"}":{"x_min":26.203125,"x_max":399.421875,"ha":467,"o":"m 399 441 q 278 379 318 420 q 238 285 238 338 q 240 238 238 258 q 244 203 242 219 q 251 174 247 188 q 257 145 254 161 q 262 109 260 129 q 264 62 264 89 q 248 -24 264 15 q 204 -98 233 -64 q 135 -162 176 -133 q 44 -214 94 -190 l 26 -180 q 75 -143 52 -164 q 115 -97 98 -123 q 141 -42 132 -72 q 151 23 151 -11 q 147 87 151 62 q 138 134 143 112 q 129 181 133 156 q 125 247 125 207 q 133 302 125 275 q 157 353 141 329 q 195 396 173 376 q 247 427 218 415 q 189 449 213 434 q 151 488 166 465 q 131 542 137 511 q 125 611 125 573 q 129 680 125 651 q 138 733 133 708 q 147 783 143 758 q 151 842 151 808 q 145 909 151 880 q 127 961 140 938 q 91 1004 114 985 q 32 1043 68 1023 l 48 1085 q 146 1037 105 1062 q 213 980 187 1011 q 251 911 239 949 q 264 823 264 872 q 260 757 264 783 q 251 706 256 730 q 242 655 246 682 q 238 586 238 627 q 265 502 238 531 q 343 474 292 474 l 356 474 q 364 474 360 474 q 372 475 367 475 l 387 479 l 399 441 "},"‰":{"x_min":52,"x_max":1356,"ha":1408,"o":"m 1257 196 q 1248 278 1257 243 q 1226 337 1239 313 q 1194 371 1212 360 q 1156 383 1175 383 q 1126 373 1141 383 q 1099 343 1111 363 q 1080 294 1087 324 q 1073 225 1073 265 q 1080 140 1073 176 q 1101 81 1088 104 q 1133 46 1114 58 q 1173 35 1152 35 q 1205 45 1190 35 q 1232 75 1220 55 q 1250 126 1243 95 q 1257 196 1257 156 m 1356 209 q 1339 120 1356 162 q 1296 47 1323 78 q 1232 -2 1269 15 q 1157 -21 1196 -21 q 1083 -2 1116 -21 q 1025 47 1049 15 q 988 120 1001 78 q 975 209 975 162 q 991 298 975 256 q 1035 371 1008 339 q 1099 420 1063 402 q 1173 439 1135 439 q 1248 421 1214 439 q 1305 371 1281 403 q 1342 298 1329 340 q 1356 209 1356 257 m 810 196 q 801 278 810 243 q 778 337 793 313 q 746 371 764 360 q 708 383 727 383 q 678 373 693 383 q 652 343 664 363 q 634 294 641 324 q 627 225 627 265 q 634 140 627 176 q 655 81 641 104 q 686 46 668 58 q 726 35 704 35 q 758 45 743 35 q 784 75 773 55 q 803 126 796 95 q 810 196 810 156 m 907 209 q 890 120 907 162 q 847 47 874 78 q 783 -2 820 15 q 708 -21 747 -21 q 635 -2 669 -21 q 578 47 602 15 q 541 120 555 78 q 528 209 528 162 q 544 298 528 256 q 588 371 561 339 q 652 420 616 402 q 726 439 688 439 q 800 421 767 439 q 857 371 833 403 q 894 298 881 340 q 907 209 907 257 m 242 10 q 224 0 236 5 q 199 -8 212 -4 q 172 -17 185 -13 q 151 -24 159 -21 l 134 0 l 715 805 q 759 825 734 817 q 805 839 784 833 l 825 816 l 242 10 m 334 595 q 325 678 334 643 q 302 736 317 713 q 270 770 288 759 q 232 782 251 782 q 202 772 217 782 q 176 742 188 762 q 157 693 164 723 q 150 624 150 664 q 157 539 150 575 q 178 480 164 503 q 210 445 191 457 q 250 434 228 434 q 282 444 266 434 q 308 474 297 454 q 327 525 320 494 q 334 595 334 555 m 432 608 q 415 519 432 561 q 372 446 399 477 q 308 396 344 414 q 232 378 272 378 q 159 396 192 378 q 102 446 126 414 q 65 519 78 477 q 52 608 52 561 q 68 697 52 655 q 111 770 84 738 q 175 819 139 801 q 250 838 211 838 q 324 820 291 838 q 381 770 357 802 q 418 697 405 739 q 432 608 432 656 "},"N":{"x_min":33.65625,"x_max":867.34375,"ha":901,"o":"m 33 0 l 33 29 q 107 48 83 35 q 132 70 132 61 l 132 779 q 84 811 109 800 q 33 825 60 821 l 33 855 l 177 855 q 194 853 187 855 q 207 846 200 851 q 221 830 214 840 q 242 802 229 819 l 688 187 l 688 783 q 665 805 688 791 q 589 825 643 818 l 589 855 l 867 855 l 867 825 q 793 806 818 819 q 769 783 769 793 l 769 -20 q 716 -6 735 -15 q 689 14 697 3 l 213 673 l 213 70 q 235 49 213 62 q 311 29 258 36 l 311 0 l 33 0 "},"2":{"x_min":66.421875,"x_max":567,"ha":652,"o":"m 557 0 l 86 0 l 66 50 q 207 215 147 143 q 309 343 267 287 q 380 440 352 398 q 424 514 408 481 q 446 574 440 547 q 453 627 453 601 q 445 685 453 658 q 421 733 438 713 q 379 765 405 753 q 316 777 353 777 q 265 763 288 777 q 225 729 242 749 q 199 683 208 708 q 189 633 189 657 q 169 622 178 627 q 150 612 160 616 q 129 605 141 608 q 103 600 118 602 l 84 621 q 108 694 84 656 q 171 764 132 732 q 260 817 210 796 q 362 838 310 838 q 439 826 403 838 q 501 791 474 814 q 542 731 527 768 q 558 645 558 695 q 549 584 558 615 q 521 518 540 554 q 473 441 503 483 q 402 346 444 398 q 305 228 359 293 q 180 82 250 163 l 463 82 q 484 87 475 82 q 500 100 493 92 q 512 119 507 109 q 521 142 517 130 q 532 202 529 168 l 567 194 l 557 0 "},"s":{"x_min":64.5,"x_max":474,"ha":536,"o":"m 474 192 q 460 109 474 144 q 425 51 446 75 q 377 13 403 28 q 325 -7 350 0 q 276 -17 299 -15 q 241 -20 254 -20 q 163 -7 208 -20 q 72 29 117 4 q 65 51 67 31 q 64 97 63 71 q 68 150 65 123 q 77 192 72 176 l 106 185 q 120 131 107 156 q 157 88 134 106 q 209 58 179 69 q 275 48 239 48 q 319 55 299 48 q 354 77 340 63 q 377 111 369 91 q 386 154 386 130 q 371 202 386 181 q 333 240 356 223 q 279 273 309 258 q 218 304 249 288 q 163 335 189 319 q 116 371 137 351 q 83 417 96 392 q 71 474 71 442 q 87 549 71 516 q 132 604 104 582 q 196 639 160 627 q 271 651 233 651 q 317 647 292 651 q 367 636 343 643 q 414 620 392 629 q 449 598 435 611 q 450 580 453 594 q 440 549 447 566 q 426 517 434 532 q 415 497 419 502 l 389 502 q 321 570 356 551 q 254 590 287 590 q 214 582 231 590 q 184 563 196 575 q 165 537 171 551 q 159 508 159 522 q 171 469 159 486 q 205 437 184 452 q 253 408 226 421 q 308 379 280 394 q 367 347 337 364 q 420 308 396 330 q 459 258 444 286 q 474 192 474 230 "},"?":{"x_min":54,"x_max":547,"ha":602,"o":"m 547 790 q 531 698 547 739 q 490 622 515 658 q 437 555 466 587 q 383 489 409 523 q 339 416 358 454 q 318 329 321 377 l 313 264 q 291 248 301 254 q 262 236 281 241 l 245 250 l 240 329 q 251 406 237 367 q 286 481 265 444 q 334 554 308 518 q 383 625 361 591 q 421 693 406 660 q 436 759 436 727 q 397 891 436 844 q 287 939 359 939 q 240 927 263 939 q 201 898 218 916 q 174 855 184 880 q 165 804 165 831 q 167 785 165 795 q 173 765 169 774 q 127 748 151 753 q 73 739 104 743 l 55 759 q 54 770 54 765 l 54 782 q 77 870 54 829 q 140 941 100 911 q 231 987 180 970 q 340 1004 283 1004 q 428 988 390 1004 q 493 944 467 972 q 533 877 519 916 q 547 790 547 837 m 365 83 q 357 39 365 59 q 338 4 350 19 q 308 -18 325 -10 q 271 -27 291 -27 q 219 -7 235 -27 q 204 48 204 12 q 211 91 204 71 q 231 127 218 111 q 261 151 244 142 q 298 160 279 160 q 348 140 331 160 q 365 83 365 120 "},"(":{"x_min":82,"x_max":413.359375,"ha":440,"o":"m 391 -214 q 257 -115 315 -178 q 160 31 199 -51 q 101 214 121 114 q 82 422 82 314 q 103 637 82 533 q 166 828 125 741 q 264 982 207 916 q 391 1085 321 1048 l 413 1054 q 329 958 369 1017 q 261 819 290 898 q 214 645 231 741 q 197 441 197 549 q 211 248 197 342 q 253 72 225 154 q 321 -74 281 -9 q 413 -183 361 -140 l 391 -214 "},"V":{"x_min":13.5625,"x_max":874.90625,"ha":903,"o":"m 874 825 q 802 808 828 817 q 769 781 776 800 l 510 40 q 491 14 504 25 q 462 -2 478 4 q 432 -13 446 -9 q 408 -20 417 -17 l 109 781 q 79 809 103 798 q 13 825 56 820 l 13 855 l 308 855 l 308 825 q 234 811 254 821 q 221 782 214 802 l 461 138 l 689 781 q 672 809 696 800 q 592 825 648 819 l 592 855 l 874 855 l 874 825 "},"@":{"x_min":47,"x_max":1073,"ha":1120,"o":"m 688 495 q 645 554 669 533 q 582 576 622 576 q 514 560 544 576 q 460 512 483 544 q 426 433 438 480 q 414 322 414 385 q 427 217 414 264 q 463 137 441 170 q 510 85 484 103 q 559 68 536 68 q 584 72 572 68 q 611 88 597 76 q 643 119 625 99 q 688 169 662 139 l 688 495 m 1073 372 q 1059 261 1073 313 q 1023 166 1046 209 q 971 88 1001 123 q 910 29 942 53 q 846 -7 878 5 q 784 -20 813 -20 q 753 -12 768 -20 q 726 9 738 -5 q 705 50 714 25 q 692 110 696 74 q 642 46 664 71 q 601 6 621 21 q 559 -14 580 -8 q 511 -20 538 -20 q 441 2 476 -20 q 377 65 405 24 q 330 166 348 106 q 312 301 312 226 q 321 381 312 339 q 347 461 330 422 q 391 534 365 499 q 449 595 417 568 q 520 636 481 621 q 603 651 559 651 q 631 648 618 651 q 657 639 644 646 q 684 620 669 632 q 715 588 698 608 q 751 614 733 599 q 789 651 770 629 l 810 630 q 800 588 804 611 q 793 543 796 568 q 790 490 790 518 l 790 193 q 810 103 790 132 q 862 74 830 74 q 902 95 879 74 q 944 153 924 116 q 978 240 964 190 q 992 347 992 290 q 962 550 992 461 q 881 699 933 639 q 758 791 829 759 q 600 823 686 823 q 470 805 530 823 q 359 756 410 787 q 270 681 309 724 q 204 585 231 637 q 163 475 177 533 q 149 355 149 416 q 166 202 149 273 q 214 72 183 131 q 288 -31 245 14 q 382 -108 331 -77 q 492 -156 434 -140 q 612 -173 550 -173 q 723 -161 668 -173 q 824 -131 778 -149 q 907 -93 871 -113 q 964 -55 944 -73 l 982 -92 q 919 -147 958 -118 q 829 -199 880 -175 q 714 -238 778 -222 q 578 -254 651 -254 q 364 -214 462 -254 q 196 -99 266 -174 q 86 79 125 -25 q 47 315 47 185 q 67 465 47 392 q 126 604 88 539 q 217 725 164 670 q 334 819 270 779 q 472 881 398 859 q 626 904 546 904 q 809 869 727 904 q 950 768 891 835 q 1041 601 1009 701 q 1073 372 1073 502 "},"i":{"x_min":47.046875,"x_max":338.953125,"ha":376,"o":"m 47 0 l 47 29 q 117 49 93 38 q 142 70 142 61 l 142 454 q 140 510 142 488 q 130 543 139 531 q 102 560 121 555 q 47 569 83 566 l 47 596 q 91 606 68 600 q 137 619 114 612 q 182 634 161 626 q 220 651 203 642 l 244 651 l 244 70 q 266 50 244 62 q 338 29 289 38 l 338 0 l 47 0 m 264 854 q 257 818 264 835 q 241 789 251 801 q 216 769 230 776 q 185 762 202 762 q 141 778 154 762 q 128 826 128 795 q 134 862 128 845 q 151 892 140 879 q 176 911 162 904 q 206 919 190 919 q 264 854 264 919 "},"≤":{"x_min":41.375,"x_max":568.34375,"ha":610,"o":"m 568 299 q 555 287 560 292 q 542 276 549 282 q 529 266 536 271 q 511 254 521 261 l 58 424 q 48 434 52 431 q 43 440 45 438 q 42 443 42 442 l 42 444 q 50 476 45 460 q 62 507 54 492 l 551 691 l 568 674 q 563 657 566 666 q 558 639 561 648 q 553 621 556 629 q 548 606 550 612 l 172 466 l 556 324 l 568 299 m 568 192 q 558 163 564 178 q 548 135 552 147 l 58 135 l 41 153 q 50 181 44 167 q 62 210 56 196 l 551 210 l 568 192 "},"±":{"x_min":41.375,"x_max":528.140625,"ha":570,"o":"m 527 146 q 518 116 524 133 q 507 88 512 99 l 58 88 l 41 104 q 50 133 44 118 q 62 163 56 149 l 511 163 l 527 146 m 324 248 q 294 235 310 241 q 262 227 277 230 l 246 242 l 246 432 l 58 432 l 41 448 q 51 477 45 462 q 62 507 56 493 l 246 507 l 246 692 q 275 702 258 696 q 307 712 292 708 l 324 695 l 324 507 l 511 507 l 528 490 q 518 460 524 477 q 507 432 513 443 l 324 432 l 324 248 "},"|":{"x_min":122,"x_max":217,"ha":318,"o":"m 217 -239 q 183 -260 204 -250 q 145 -275 162 -269 l 122 -259 l 122 1099 q 156 1119 141 1111 q 192 1133 172 1127 l 217 1118 l 217 -239 "},"q":{"x_min":54,"x_max":701.265625,"ha":716,"o":"m 330 68 q 375 77 353 68 q 419 102 397 86 q 462 137 441 117 q 505 177 484 156 l 505 494 q 441 554 482 533 q 352 576 401 576 q 279 560 314 576 q 216 512 244 544 q 172 433 189 480 q 156 322 156 385 q 172 217 156 264 q 214 137 189 170 q 271 85 240 103 q 330 68 302 68 m 389 -326 l 389 -296 q 479 -276 453 -287 q 505 -254 505 -266 l 505 112 q 454 56 479 81 q 402 15 429 32 q 346 -10 375 -1 q 281 -20 316 -20 q 203 2 243 -20 q 130 65 163 24 q 75 166 96 106 q 54 301 54 226 q 73 411 54 360 q 119 500 92 461 q 178 566 146 539 q 233 606 209 593 q 309 639 271 627 q 373 651 347 651 q 410 648 391 651 q 447 639 428 646 q 486 620 466 632 q 530 587 507 608 q 551 602 540 594 q 572 619 562 610 q 591 636 582 627 q 607 651 600 644 l 628 630 q 617 589 621 611 q 610 543 613 569 q 607 486 607 516 l 607 -254 q 628 -276 607 -265 q 701 -296 649 -287 l 701 -326 l 389 -326 "}," ":{"x_min":0,"x_max":0,"ha":306},"∑":{"x_min":40.015625,"x_max":684.328125,"ha":722,"o":"m 684 234 q 680 173 682 206 q 675 107 678 140 l 670 46 q 666 0 668 18 l 61 0 l 40 29 l 336 430 l 54 825 l 54 855 l 511 855 q 582 856 549 855 q 655 865 615 857 l 658 660 l 620 652 q 596 729 608 702 q 572 769 583 756 q 550 783 560 781 q 529 786 539 786 l 210 786 l 442 456 l 173 95 l 548 95 q 582 101 569 95 q 607 124 596 107 q 626 168 617 140 q 648 242 636 197 l 684 234 "},"+":{"x_min":41.859375,"x_max":528.140625,"ha":570,"o":"m 324 160 q 294 147 310 153 q 262 139 277 142 l 246 153 l 246 344 l 58 344 l 41 360 q 51 389 45 374 q 62 419 56 405 l 246 419 l 246 604 q 275 614 258 608 q 307 624 292 620 l 324 608 l 324 419 l 511 419 l 528 402 q 518 372 524 389 q 507 344 513 355 l 324 344 l 324 160 "},"¹":{"x_min":65.671875,"x_max":398.90625,"ha":456,"o":"m 80 421 l 80 449 q 141 457 117 453 q 178 467 164 462 q 196 476 191 471 q 202 486 202 481 l 202 796 q 200 821 202 812 q 193 836 199 830 q 183 840 190 838 q 163 841 176 841 q 128 838 149 840 q 75 830 107 836 l 65 857 q 113 871 85 862 q 171 890 142 880 q 227 909 201 899 q 269 927 253 919 l 287 912 l 287 486 q 291 477 287 481 q 307 467 295 472 q 340 457 318 462 q 398 449 362 453 l 398 421 l 80 421 "},"W":{"x_min":13.5625,"x_max":1154.328125,"ha":1181,"o":"m 1154 825 q 1104 814 1124 819 q 1073 803 1085 808 q 1057 793 1062 798 q 1051 783 1051 789 l 895 40 q 881 15 892 26 q 855 -2 870 5 q 826 -13 841 -9 q 801 -20 811 -17 l 580 640 l 385 40 q 369 15 381 26 q 343 -1 358 5 q 313 -12 328 -8 q 283 -20 297 -17 l 107 778 q 82 806 103 795 q 13 825 61 817 l 13 855 l 304 855 l 304 825 q 252 817 271 822 q 223 806 233 812 q 212 792 214 800 q 212 778 210 785 l 347 169 l 567 855 l 604 855 l 844 169 l 971 783 q 965 798 972 791 q 943 808 957 804 q 909 817 929 813 q 866 825 889 821 l 866 855 l 1154 855 l 1154 825 "},">":{"x_min":41.375,"x_max":568.34375,"ha":610,"o":"m 568 424 q 559 391 564 411 q 547 355 553 371 l 58 174 l 41 190 q 46 206 43 197 q 51 224 48 215 q 56 242 54 234 q 62 257 59 251 l 436 397 l 52 539 l 41 565 q 71 588 56 578 q 98 610 86 599 l 552 440 l 568 424 "},"r":{"x_min":37.046875,"x_max":528.015625,"ha":550,"o":"m 522 625 q 528 602 528 621 q 522 556 527 582 q 509 503 517 530 q 493 458 501 476 l 463 458 q 452 504 459 485 q 435 534 444 523 q 413 550 425 545 q 388 556 401 556 q 353 543 373 556 q 312 504 333 530 q 270 435 291 477 q 234 336 250 393 l 234 70 q 259 49 234 60 q 348 29 284 38 l 348 0 l 37 0 l 37 29 q 106 49 81 39 q 132 70 132 59 l 132 465 q 130 502 132 487 q 127 527 129 518 q 122 542 125 537 q 116 551 119 547 q 105 559 111 556 q 90 564 100 562 q 68 567 81 566 q 37 569 56 568 l 37 596 q 123 620 81 608 q 200 651 166 632 l 224 627 l 233 473 q 272 543 250 510 q 318 599 293 575 q 369 637 342 623 q 425 651 396 651 q 472 645 446 651 q 522 625 497 640 "},"÷":{"x_min":41.375,"x_max":527.65625,"ha":570,"o":"m 339 230 q 334 202 339 215 q 321 178 329 188 q 300 162 312 168 q 276 157 289 157 q 241 170 252 157 q 231 209 231 184 q 235 237 231 223 q 249 260 240 250 q 269 276 257 270 q 293 282 280 282 q 339 230 339 282 m 339 555 q 334 527 339 540 q 321 503 329 513 q 300 487 312 493 q 276 482 289 482 q 241 495 252 482 q 231 534 231 509 q 235 562 231 548 q 249 585 240 575 q 269 601 257 595 q 293 607 280 607 q 339 555 339 607 m 527 402 q 518 372 524 389 q 507 344 512 355 l 58 344 l 41 360 q 50 389 44 374 q 62 419 56 405 l 511 419 l 527 402 "},"h":{"x_min":37.046875,"x_max":745.953125,"ha":766,"o":"m 454 0 l 454 29 q 525 51 502 42 q 549 70 549 61 l 549 429 q 543 496 549 470 q 528 537 538 522 q 500 557 517 552 q 462 563 484 563 q 411 550 438 563 q 353 514 383 538 q 293 455 324 491 q 234 372 263 419 l 234 70 q 259 49 234 60 q 328 29 284 38 l 328 0 l 37 0 l 37 29 q 106 49 81 40 q 132 70 132 58 l 132 880 q 129 924 132 908 q 117 949 127 940 q 88 961 107 958 q 37 969 69 965 l 37 996 q 88 1007 65 1002 q 132 1019 112 1013 q 170 1033 152 1025 q 208 1051 189 1040 l 234 1027 l 233 463 q 298 541 262 507 q 370 600 334 576 q 440 638 406 625 q 501 651 474 651 q 557 642 530 651 q 605 615 584 633 q 638 568 625 596 q 651 502 651 540 l 651 70 q 671 51 651 61 q 745 29 692 42 l 745 0 l 454 0 "},"f":{"x_min":30.875,"x_max":554.734375,"ha":432,"o":"m 554 985 q 544 969 554 980 q 521 947 535 958 q 493 925 507 935 q 468 910 478 915 q 435 935 452 924 q 403 952 419 945 q 375 962 388 959 q 353 966 362 966 q 315 954 335 966 q 278 911 295 942 q 249 826 261 880 q 238 689 238 773 l 238 631 l 412 631 l 432 611 q 417 591 426 602 q 399 571 408 580 q 381 553 389 561 q 366 543 372 545 q 321 559 350 551 q 238 567 292 567 l 238 69 q 245 61 238 65 q 269 52 252 57 q 312 42 286 48 q 379 29 339 36 l 379 0 l 41 0 l 41 29 q 111 49 87 37 q 136 69 136 61 l 136 567 l 45 567 l 30 585 l 83 631 l 136 631 l 136 652 q 146 786 136 731 q 176 878 157 841 q 219 941 195 916 q 271 988 244 967 q 311 1015 289 1003 q 354 1034 332 1026 q 395 1046 375 1042 q 427 1051 414 1051 q 470 1042 448 1051 q 511 1024 493 1034 q 542 1002 530 1013 q 554 985 554 991 "},"A":{"x_min":0,"x_max":812.515625,"ha":827,"o":"m 514 363 l 394 711 l 278 363 l 514 363 m 258 302 l 183 75 q 201 44 176 54 q 282 29 226 35 l 282 0 l 0 0 l 0 29 q 73 46 46 37 q 107 75 100 54 l 359 838 q 398 869 375 855 q 438 893 421 883 l 723 75 q 733 58 727 65 q 749 45 739 50 q 775 35 759 40 q 812 29 790 31 l 812 0 l 526 0 l 526 29 q 599 42 579 32 q 612 75 619 52 l 535 302 l 258 302 "},"O":{"x_min":47,"x_max":772,"ha":834,"o":"m 667 426 q 658 519 667 473 q 634 606 650 565 q 596 682 618 647 q 544 742 573 716 q 482 782 516 767 q 409 797 448 797 q 301 771 349 797 q 220 698 253 746 q 169 584 187 651 q 152 434 152 517 q 172 290 152 358 q 228 171 193 223 q 310 90 263 120 q 409 61 357 61 q 513 84 465 61 q 594 153 560 107 q 647 268 628 200 q 667 426 667 337 m 772 439 q 741 263 772 346 q 658 117 710 180 q 536 17 605 54 q 389 -20 467 -20 q 244 15 308 -20 q 136 112 180 51 q 70 251 93 172 q 47 415 47 329 q 76 590 47 507 q 158 737 106 674 q 279 837 209 800 q 429 875 349 875 q 577 838 513 875 q 684 740 640 801 q 749 600 727 679 q 772 439 772 521 "},"3":{"x_min":46.109375,"x_max":560,"ha":652,"o":"m 560 258 q 541 150 560 201 q 487 62 523 100 q 398 2 451 24 q 275 -20 345 -20 q 221 -15 248 -20 q 164 1 193 -10 q 106 32 135 13 q 46 81 76 52 l 69 126 q 125 88 99 103 q 173 64 150 73 q 218 51 195 55 q 266 48 240 48 q 341 61 307 48 q 400 98 375 74 q 437 158 424 123 q 451 236 451 193 q 434 322 451 287 q 394 380 418 358 q 338 413 369 403 q 277 423 307 423 l 263 423 q 255 422 259 423 q 246 420 251 421 q 231 418 241 420 l 222 458 q 321 498 284 475 q 379 544 359 520 q 405 592 399 568 q 412 637 412 616 q 404 685 412 661 q 382 730 397 710 q 344 764 367 751 q 288 777 321 777 q 240 767 261 777 q 204 741 218 758 q 184 704 190 725 q 182 660 178 683 q 138 642 159 648 q 88 633 117 635 l 70 654 q 91 715 70 683 q 147 774 112 747 q 229 820 182 802 q 327 838 275 838 q 414 821 378 838 q 474 778 450 805 q 509 718 498 751 q 521 650 521 684 q 510 599 521 624 q 482 551 500 574 q 436 508 463 528 q 376 473 409 488 q 448 450 415 469 q 506 402 482 431 q 545 337 531 374 q 560 258 560 300 "},"4":{"x_min":37.53125,"x_max":593.046875,"ha":652,"o":"m 397 705 l 144 312 l 397 312 l 397 705 m 593 291 q 566 259 578 269 q 539 237 555 248 l 492 237 l 492 70 q 496 60 492 65 q 510 51 500 56 q 540 40 521 46 q 586 29 558 35 l 586 0 l 254 0 l 254 29 q 326 43 298 36 q 369 55 354 49 q 391 66 385 60 q 397 77 397 71 l 397 237 l 59 237 l 37 259 l 373 795 q 424 820 402 808 q 466 844 447 833 l 492 820 l 492 312 l 575 312 l 593 291 "}},"cssFontWeight":"normal","ascender":1214,"underlinePosition":-250,"cssFontStyle":"normal","boundingBox":{"yMin":-492,"xMin":-697.21875,"yMax":1471.453125,"xMax":1356},"resolution":1000,"descender":-394,"familyName":"Gentilis","lineHeight":1607,"underlineThickness":100}  
            };  
        }  
        const FontName = Object._getBFont();  
        const FontJson = globalThis.__Text3DFonts[FontName] || globalThis.__Text3DFonts.Helvetiker;  
        const Font = Loader.parse(FontJson);  
        Create3DText(Font);  
    } else {  
        setTimeout(InitWhenReady, 50);  
    }  
};  
InitWhenReady();
});
};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.userFunc0x1d2ae68(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.userFunc0x1d1ada8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(Object => {
    Object._isDestroyed = true;
    if (Object.threeTextMesh) {
        Object.threeTextMesh.removeFromParent();
        if (Object.threeTextMesh.geometry) Object.threeTextMesh.geometry.dispose();
        if (Object.threeTextMesh.material) {
            if (Array.isArray(Object.threeTextMesh.material)) {
                Object.threeTextMesh.material.forEach(Material => Material.dispose());
            } else {
                Object.threeTextMesh.material.dispose();
            }
        }
        Object.threeTextMesh = null;
    }
});
};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.userFunc0x1d1ada8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.userFunc0x1d615e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(Object => {
    if (!Object.threeTextMesh || !Object.threeTextMesh.material) return;
    Object.threeTextMesh.material.color.set(
        gdjs.rgbOrHexStringToNumber(eventsFunctionContext.getArgument("Color"))
    );
});
};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.userFunc0x1d615e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColor = function(Color, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.userFunc0x1d62650 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(Object => {  
    if (!Object.threeTextMesh) return;  
    if (typeof THREE.FontLoader === "undefined" || typeof THREE.TextGeometry === "undefined") return;  
    if (!globalThis.__Text3DFonts) return;
    const Loader = new THREE.FontLoader();  
    const FontName = eventsFunctionContext.getArgument("Font");  
    const FontJson = globalThis.__Text3DFonts[FontName] || globalThis.__Text3DFonts.Helvetiker;  
    const Font = Loader.parse(FontJson);  
    Object.threeFont = Font;  
    const Size = Object._getDSize();  
    const Depth = Object._getEDepth();  
    const CurveSegments = Object._getFCurveSegments();  
    const BevelEnabled = Object._getGBevelEnabled();  
    const BevelThickness = Object._getJBevelThickness();  
    const BevelSize = Object._getIBevelSize();  
    const BevelSegments = Object._getHBevelSegments();  
    const TextStr = Object._currentText;  
    const OldGeometry = Object.threeTextMesh.geometry;  
    const NewGeometry = new THREE.TextGeometry(TextStr, {  
        font: Font,  
        size: Size,  
        depth: Depth,  
        height: 5,  
        curveSegments: CurveSegments,  
        bevelEnabled: BevelEnabled,  
        bevelThickness: BevelThickness,  
        bevelSize: BevelSize,  
        bevelSegments: BevelSegments  
    });  
    NewGeometry.computeBoundingBox();  
    const Bbox = NewGeometry.boundingBox;  
    NewGeometry.translate(  
        -0.5 * (Bbox.max.x + Bbox.min.x),  
        -0.5 * (Bbox.max.y + Bbox.min.y),  
        -0.5 * (Bbox.max.z + Bbox.min.z)  
    );  
    NewGeometry.computeBoundingBox();  
    Object.threeTextMesh.geometry = NewGeometry;  
    if (OldGeometry) OldGeometry.dispose();  
    const NewBbox = NewGeometry.boundingBox;  
    const TextWidth = NewBbox.max.x - NewBbox.min.x;  
    const TextHeight = NewBbox.max.y - NewBbox.min.y;  
    const TextDepth = NewBbox.max.z - NewBbox.min.z;  
    const originalWidth = Object.getOriginalWidth();  
    const originalHeight = Object.getOriginalHeight();  
    const originalDepth = Object.getOriginalDepth();
    if (originalWidth > 0) Object.setScaleX((TextWidth || 1) / originalWidth);  
    if (originalHeight > 0) Object.setScaleY((TextHeight || 1) / originalHeight);  
    if (originalDepth > 0) Object.setScaleZ((TextDepth || 1) / originalDepth);  
});
};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.userFunc0x1d62650(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFont = function(Font, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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
if (argName === "Font") return Font;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextFontContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.userFunc0x1d2ce58 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(Object => {    
    if (!Object.threeTextMesh || !Object.threeFont) return;    
    const Size = eventsFunctionContext.getArgument("Size") 
    const Depth = Object._getEDepth();    
    const CurveSegments = Object._getFCurveSegments();    
    const BevelEnabled = Object._getGBevelEnabled();    
    const BevelThickness = Object._getJBevelThickness();    
    const BevelSize = Object._getIBevelSize();    
    const BevelSegments = Object._getHBevelSegments();    
    const TextStr = Object._currentText;  
    const OldGeometry = Object.threeTextMesh.geometry;    
    const NewGeometry = new THREE.TextGeometry(TextStr, {    
        font: Object.threeFont,    
        size: Size,    
        depth: Depth,    
        height: 5,    
        curveSegments: CurveSegments,    
        bevelEnabled: BevelEnabled,    
        bevelThickness: BevelThickness,    
        bevelSize: BevelSize,    
        bevelSegments: BevelSegments    
    });    
    NewGeometry.computeBoundingBox();    
    const Bbox = NewGeometry.boundingBox;    
    NewGeometry.translate(    
        -0.5 * (Bbox.max.x + Bbox.min.x),    
        -0.5 * (Bbox.max.y + Bbox.min.y),    
        -0.5 * (Bbox.max.z + Bbox.min.z)    
    );    
    NewGeometry.computeBoundingBox();    
    Object.threeTextMesh.geometry = NewGeometry;    
    if (OldGeometry) OldGeometry.dispose();    
    const NewBbox = NewGeometry.boundingBox;    
    const TextWidth = NewBbox.max.x - NewBbox.min.x;    
    const TextHeight = NewBbox.max.y - NewBbox.min.y;    
    const TextDepth = NewBbox.max.z - NewBbox.min.z;    
    const originalWidth = Object.getOriginalWidth();    
    const originalHeight = Object.getOriginalHeight();    
    const originalDepth = Object.getOriginalDepth();    
    if (originalWidth > 0) Object.setScaleX((TextWidth || 1) / originalWidth);    
    if (originalHeight > 0) Object.setScaleY((TextHeight || 1) / originalHeight);    
    if (originalDepth > 0) Object.setScaleZ((TextDepth || 1) / originalDepth);    
});
};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.userFunc0x1d2ce58(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSize = function(Size, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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
if (argName === "Size") return Size;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextSizeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.userFunc0x1d61010 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(Object => {  
    if (!Object.threeTextMesh || !Object.threeFont) return;  
    Object.setScaleX(1);  
    Object.setScaleY(1);  
    Object.setScaleZ(1);  
    const Size = Object._getDSize();  
    const Depth = Object._getEDepth();  
    const CurveSegments = Object._getFCurveSegments();  
    const BevelEnabled = Object._getGBevelEnabled();  
    const BevelThickness = Object._getJBevelThickness();  
    const BevelSize = Object._getIBevelSize();  
    const BevelSegments = Object._getHBevelSegments();  
    const TextStr = eventsFunctionContext.getArgument("Text");
    const OldGeometry = Object.threeTextMesh.geometry;  
    const NewGeometry = new THREE.TextGeometry(TextStr, {  
        font: Object.threeFont,  
        size: Size,  
        depth: Depth,  
        height: 5,  
        curveSegments: CurveSegments,  
        bevelEnabled: BevelEnabled,  
        bevelThickness: BevelThickness,  
        bevelSize: BevelSize,  
        bevelSegments: BevelSegments  
    });
    Object._currentText = eventsFunctionContext.getArgument("Text");  
    NewGeometry.computeBoundingBox();  
    const Bbox = NewGeometry.boundingBox;  
    NewGeometry.translate(  
        -0.5 * (Bbox.max.x + Bbox.min.x),  
        -0.5 * (Bbox.max.y + Bbox.min.y),  
        -0.5 * (Bbox.max.z + Bbox.min.z)  
    );  
    NewGeometry.computeBoundingBox();  
    Object.threeTextMesh.geometry = NewGeometry;  
    if (OldGeometry) OldGeometry.dispose();  
    const NewBbox = NewGeometry.boundingBox;  
    const TextWidth = NewBbox.max.x - NewBbox.min.x;  
    const TextHeight = NewBbox.max.y - NewBbox.min.y;  
    const TextDepth = NewBbox.max.z - NewBbox.min.z;  
    const originalWidth = Object.getOriginalWidth();  
    const originalHeight = Object.getOriginalHeight();  
    const originalDepth = Object.getOriginalDepth();  
    if (originalWidth > 0) Object.setScaleX((TextWidth || 1) / originalWidth);  
    if (originalHeight > 0) Object.setScaleY((TextHeight || 1) / originalHeight);  
    if (originalDepth > 0) Object.setScaleZ((TextDepth || 1) / originalDepth);  
});
};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.userFunc0x1d61010(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeText = function(Text, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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
if (argName === "Text") return Text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.userFunc0x1d273c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.userFunc0x1d273c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextDepthContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.userFunc0x1d27398 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.userFunc0x1d27398(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegments = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextCurveSegmentsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.userFunc0x1d273c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.userFunc0x1d273c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevel = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.BooleanTextBevelContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.userFunc0x1d60018 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.userFunc0x1d60018(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSize = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSizeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.userFunc0x1d60018 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.userFunc0x1d60018(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThickness = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelThicknessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext = {};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.GDObjectObjects1= [];


gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.userFunc0x1d604f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.GDObjectObjects1;
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.userFunc0x1d604f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegments = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextGeometry3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextGeometry3D"),
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

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.ChangeTextBevelSegmentsContext.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("TextGeometry3D::TextGeometry3D", gdjs.evtsExt__TextGeometry3D__TextGeometry3D.TextGeometry3D);
