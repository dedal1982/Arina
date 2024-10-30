(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Безымянный_1_HTML5 Canvas_atlas_1", frames: [[876,873,287,287],[0,873,874,321],[834,0,610,871],[0,0,832,832]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.планета2pngкопия = function() {
	this.initialize(ss["Безымянный_1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.планета1pngкопия = function() {
	this.initialize(ss["Безымянный_1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ракетаpngкопия = function() {
	this.initialize(ss["Безымянный_1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.солнце = function() {
	this.initialize(ss["Безымянный_1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3126,2083);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.планета1pngкопия();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,874,321), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.солнце();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,832,832), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.планета2pngкопия();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,287,287), null);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ракетаpngкопия();
	this.instance.setTransform(-407.3,-341.75,1,1,-14.9983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.3,-499.6,814.6,999.2);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ракетаpngкопия();
	this.instance.setTransform(-407.3,-341.7,1,1,-14.9983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.3,-499.5,814.6,999.1);


// stage content:
(lib.Безымянный1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// солнце_png
	this.instance = new lib.Символ3();
	this.instance.setTransform(1592,320,1,1,0,0,0,416,416);

	this.instance_1 = new lib.солнце();
	this.instance_1.setTransform(1176,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9906,scaleY:0.9906,rotation:-1.7237,y:320.05},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,rotation:-3.4474,x:1591.95,y:320},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,rotation:-5.1711,x:1592},0).wait(1).to({scaleX:0.9623,scaleY:0.9623,rotation:-6.8948,y:320.05},0).wait(1).to({scaleX:0.9529,scaleY:0.9529,rotation:-8.6185,x:1591.95,y:320},0).wait(1).to({scaleX:0.9435,scaleY:0.9435,rotation:-10.3422},0).wait(1).to({scaleX:0.9341,scaleY:0.9341,rotation:-12.0659},0).wait(1).to({scaleX:0.9246,scaleY:0.9246,rotation:-13.7896,x:1592,y:319.95},0).wait(1).to({scaleX:0.9152,scaleY:0.9152,rotation:-15.5133},0).wait(1).to({scaleX:0.9058,scaleY:0.9058,rotation:-17.237,y:320},0).wait(1).to({scaleX:0.8964,scaleY:0.8964,rotation:-18.9607,x:1591.95},0).wait(1).to({scaleX:0.8869,scaleY:0.8869,rotation:-20.6844},0).wait(1).to({scaleX:0.8775,scaleY:0.8775,rotation:-22.4081,x:1592},0).wait(1).to({scaleX:0.8681,scaleY:0.8681,rotation:-24.1318,x:1591.95,y:319.95},0).wait(1).to({scaleX:0.8587,scaleY:0.8587,rotation:-25.8555,x:1592},0).wait(1).to({scaleX:0.8493,scaleY:0.8493,rotation:-27.5792,x:1591.95,y:320},0).wait(1).to({scaleX:0.8398,scaleY:0.8398,rotation:-29.3029,y:319.95},0).wait(1).to({scaleX:0.8304,scaleY:0.8304,rotation:-31.0266},0).wait(1).to({scaleX:0.821,scaleY:0.821,rotation:-32.7503,y:320},0).wait(1).to({scaleX:0.8116,scaleY:0.8116,rotation:-34.474,y:319.95},0).wait(1).to({scaleX:0.8021,scaleY:0.8021,rotation:-36.1977,y:320},0).wait(1).to({scaleX:0.7927,scaleY:0.7927,rotation:-37.9214},0).wait(1).to({scaleX:0.7833,scaleY:0.7833,rotation:-39.6451,y:319.95},0).wait(1).to({scaleX:0.7739,scaleY:0.7739,rotation:-41.3688,y:320},0).wait(1).to({scaleX:0.7645,scaleY:0.7645,rotation:-43.0926,x:1592},0).wait(1).to({scaleX:0.755,scaleY:0.755,rotation:-44.8163,y:319.95},0).wait(1).to({scaleX:0.7456,scaleY:0.7456,rotation:-46.54},0).wait(1).to({scaleX:0.7362,scaleY:0.7362,rotation:-48.2637,x:1591.95},0).wait(1).to({scaleX:0.7268,scaleY:0.7268,rotation:-49.9874,y:320},0).wait(1).to({scaleX:0.7174,scaleY:0.7174,rotation:-51.7111},0).wait(1).to({scaleX:0.7079,scaleY:0.7079,rotation:-53.4348,x:1592,y:319.95},0).wait(1).to({scaleX:0.6985,scaleY:0.6985,rotation:-55.1585,x:1591.95},0).wait(1).to({scaleX:0.6891,scaleY:0.6891,rotation:-56.8822},0).wait(1).to({scaleX:0.6797,scaleY:0.6797,rotation:-58.6059,x:1592,y:320},0).wait(1).to({scaleX:0.6703,scaleY:0.6703,rotation:-60.3296,x:1591.95,y:319.95},0).wait(1).to({scaleX:0.6608,scaleY:0.6608,rotation:-62.0533,x:1592,y:320},0).wait(1).to({scaleX:0.6514,scaleY:0.6514,rotation:-63.777},0).wait(1).to({scaleX:0.642,scaleY:0.642,rotation:-65.5007,x:1591.95},0).wait(1).to({scaleX:0.6326,scaleY:0.6326,rotation:-67.2244,x:1592,y:319.95},0).wait(1).to({scaleX:0.6231,scaleY:0.6231,rotation:-68.9481,x:1591.95,y:320},0).wait(1).to({scaleX:0.6137,scaleY:0.6137,rotation:-70.6718},0).wait(1).to({scaleX:0.6043,scaleY:0.6043,rotation:-72.3955,x:1592},0).wait(1).to({scaleX:0.5949,scaleY:0.5949,rotation:-74.1192,x:1591.95},0).wait(1).to({scaleX:0.5855,scaleY:0.5855,rotation:-75.8429,y:319.95},0).wait(1).to({scaleX:0.576,scaleY:0.576,rotation:-77.5666,y:320},0).wait(1).to({scaleX:0.5666,scaleY:0.5666,rotation:-79.2903},0).wait(1).to({scaleX:0.5572,scaleY:0.5572,rotation:-81.014,x:1592,y:319.95},0).wait(1).to({scaleX:0.5478,scaleY:0.5478,rotation:-82.7377},0).wait(1).to({scaleX:0.5383,scaleY:0.5383,rotation:-84.4614,x:1591.95},0).wait(1).to({scaleX:0.5541,scaleY:0.5541,rotation:-81.2621},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,rotation:-78.0627,y:320},0).wait(1).to({scaleX:0.5857,scaleY:0.5857,rotation:-74.8634,y:319.95},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,rotation:-71.6641,y:320},0).wait(1).to({scaleX:0.6173,scaleY:0.6173,rotation:-68.4648},0).wait(1).to({scaleX:0.6331,scaleY:0.6331,rotation:-65.2654,x:1592},0).wait(1).to({scaleX:0.6489,scaleY:0.6489,rotation:-62.0661,y:319.95},0).wait(1).to({scaleX:0.6647,scaleY:0.6647,rotation:-58.8668,x:1591.95,y:320},0).wait(1).to({scaleX:0.6805,scaleY:0.6805,rotation:-55.6674},0).wait(1).to({scaleX:0.6962,scaleY:0.6962,rotation:-52.4681,x:1592,y:319.95},0).wait(1).to({scaleX:0.712,scaleY:0.712,rotation:-49.2688,x:1591.95},0).wait(1).to({scaleX:0.7278,scaleY:0.7278,rotation:-46.0695},0).wait(1).to({scaleX:0.7436,scaleY:0.7436,rotation:-42.8701},0).wait(1).to({scaleX:0.7594,scaleY:0.7594,rotation:-39.6708,y:320},0).wait(1).to({scaleX:0.7752,scaleY:0.7752,rotation:-36.4715,y:319.95},0).wait(1).to({scaleX:0.791,scaleY:0.791,rotation:-33.2721,y:320},0).wait(1).to({scaleX:0.8068,scaleY:0.8068,rotation:-30.0728},0).wait(1).to({scaleX:0.8226,scaleY:0.8226,rotation:-26.8735},0).wait(1).to({scaleX:0.8384,scaleY:0.8384,rotation:-23.6742,x:1592,y:319.95},0).wait(1).to({scaleX:0.8541,scaleY:0.8541,rotation:-20.4748,y:320},0).wait(1).to({scaleX:0.8699,scaleY:0.8699,rotation:-17.2755,x:1591.95},0).wait(1).to({scaleX:0.8857,scaleY:0.8857,rotation:-14.0762},0).wait(1).to({scaleX:0.9015,scaleY:0.9015,rotation:-10.8768},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,rotation:-7.6775},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,rotation:-4.4782,x:1592,y:320.05},0).wait(1).to({scaleX:0.9489,scaleY:0.9489,rotation:-1.2789},0).wait(1).to({scaleX:0.9647,scaleY:0.9647,rotation:1.9205},0).wait(1).to({scaleX:0.9805,scaleY:0.9805,rotation:5.1198},0).wait(1).to({scaleX:0.9963,scaleY:0.9963,rotation:8.3191},0).wait(1).to({scaleX:1.012,scaleY:1.012,rotation:11.5185,y:320},0).wait(1).to({scaleX:1.0278,scaleY:1.0278,rotation:14.7178,x:1591.95,y:320.05},0).wait(1).to({scaleX:1.0436,scaleY:1.0436,rotation:17.9171,x:1592,y:320},0).wait(1).to({scaleX:1.0594,scaleY:1.0594,rotation:21.1164},0).wait(1).to({scaleX:1.0752,scaleY:1.0752,rotation:24.3158},0).wait(1).to({scaleX:1.091,scaleY:1.091,rotation:27.5151},0).wait(1).to({scaleX:1.1068,scaleY:1.1068,rotation:30.7144},0).wait(1).to({scaleX:1.1226,scaleY:1.1226,rotation:33.9138},0).wait(1).to({scaleX:1.1384,scaleY:1.1384,rotation:37.1131,y:320.05},0).wait(1).to({scaleX:1.1541,scaleY:1.1541,rotation:40.3124,y:320},0).wait(1).to({scaleX:1.1699,scaleY:1.1699,rotation:43.5117,x:1591.95},0).wait(1).to({scaleX:1.1857,scaleY:1.1857,rotation:46.7111},0).wait(1).to({scaleX:1.2015,scaleY:1.2015,rotation:49.9104,x:1592,y:320.05},0).wait(1).to({scaleX:1.2173,scaleY:1.2173,rotation:53.1097,y:320},0).wait(1).to({scaleX:1.2331,scaleY:1.2331,rotation:56.3091},0).wait(1).to({scaleX:1.2489,scaleY:1.2489,rotation:59.5084,x:1591.95},0).wait(1).to({scaleX:1.2647,scaleY:1.2647,rotation:62.7077,x:1592,y:320.05},0).wait(1).to({scaleX:1.2805,scaleY:1.2805,rotation:65.907,y:320},0).wait(1).to({scaleX:1.2963,scaleY:1.2963,rotation:69.1064,x:1591.95},0).wait(1).to({scaleX:1.3121,scaleY:1.3121,rotation:72.3057,x:1592,y:320.05},0).to({_off:true},1).wait(1));

	// ракета_png___копия
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(1884,1208.5);

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(-228.5,-203.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},99).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:-228.5,y:-203.8},99).wait(1));

	// планета1_png___копия
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(414.4,753.5,1,1,0,0,0,339.4,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:437,rotation:0.8836,x:512,y:755},0).wait(1).to({rotation:1.7672,x:511.95,y:756.5},0).wait(1).to({rotation:2.6508,x:511.9,y:758},0).wait(1).to({rotation:3.5344,x:511.75,y:759.5},0).wait(1).to({rotation:4.418,x:511.7,y:760.95},0).wait(1).to({rotation:5.3016,x:511.55,y:762.5},0).wait(1).to({rotation:6.1853,x:511.4,y:764},0).wait(1).to({rotation:7.0689,x:511.2,y:765.5},0).wait(1).to({rotation:7.9525,x:511.05,y:766.95},0).wait(1).to({rotation:8.8361,x:510.8,y:768.45},0).wait(1).to({rotation:9.7197,x:510.6,y:770},0).wait(1).to({rotation:10.6033,x:510.3,y:771.4},0).wait(1).to({rotation:11.4869,x:510.05,y:772.95},0).wait(1).to({rotation:12.3705,x:509.7,y:774.35},0).wait(1).to({rotation:13.2541,x:509.35,y:775.85},0).wait(1).to({rotation:14.1377,x:509,y:777.35},0).wait(1).to({rotation:15.0213,x:508.6,y:778.75},0).wait(1).to({rotation:15.9049,x:508.2,y:780.2},0).wait(1).to({rotation:16.7885,x:507.8,y:781.65},0).wait(1).to({rotation:17.6721,x:507.4,y:783.15},0).wait(1).to({rotation:18.5558,x:506.95,y:784.55},0).wait(1).to({rotation:19.4394,x:506.45,y:786},0).wait(1).to({rotation:20.323,x:505.9,y:787.35},0).wait(1).to({rotation:21.2066,x:505.35,y:788.8},0).wait(1).to({rotation:22.0902,x:504.8,y:790.2},0).wait(1).to({rotation:22.9738,x:504.25,y:791.55},0).wait(1).to({rotation:23.8574,x:503.65,y:793},0).wait(1).to({rotation:24.741,x:503.05,y:794.35},0).wait(1).to({rotation:23.7733,x:503.65,y:792.85},0).wait(1).to({rotation:22.8056,x:504.35,y:791.35},0).wait(1).to({rotation:21.8379,x:505,y:789.8},0).wait(1).to({rotation:20.8702,x:505.55,y:788.25},0).wait(1).to({rotation:19.9025,x:506.15,y:786.7},0).wait(1).to({rotation:18.9348,x:506.65,y:785.15},0).wait(1).to({rotation:17.9671,x:507.25,y:783.55},0).wait(1).to({rotation:16.9994,x:507.75,y:782},0).wait(1).to({rotation:16.0317,x:508.2,y:780.45},0).wait(1).to({rotation:15.0639,x:508.65,y:778.85},0).wait(1).to({rotation:14.0962,x:509.05,y:777.25},0).wait(1).to({rotation:13.1285,x:509.45,y:775.65},0).wait(1).to({rotation:12.1608,x:509.8,y:774.05},0).wait(1).to({rotation:11.1931,x:510.15,y:772.4},0).wait(1).to({rotation:10.2254,x:510.4,y:770.85},0).wait(1).to({rotation:9.2577,x:510.7,y:769.15},0).wait(1).to({rotation:8.29,x:510.95,y:767.5},0).wait(1).to({rotation:7.3223,x:511.2,y:765.95},0).wait(1).to({rotation:6.3546,x:511.35,y:764.25},0).wait(1).to({rotation:5.3869,x:511.55,y:762.65},0).wait(1).to({rotation:4.4192,x:511.7,y:760.95},0).wait(1).to({rotation:3.4515,x:511.8,y:759.35},0).wait(1).to({rotation:2.4838,x:511.9,y:757.7},0).wait(1).to({rotation:1.5161,x:511.95,y:756.05},0).wait(1).to({rotation:0.5484,y:754.45},0).wait(1).to({rotation:-0.4193,y:752.75},0).wait(1).to({rotation:-1.387,y:751.1},0).wait(1).to({rotation:-2.3548,x:511.9,y:749.45},0).wait(1).to({rotation:-3.3225,x:511.8,y:747.8},0).wait(1).to({rotation:-4.2902,x:511.65,y:746.15},0).wait(1).to({rotation:-5.2579,x:511.55,y:744.5},0).wait(1).to({rotation:-4.5018,x:511.65,y:745.8},0).wait(1).to({rotation:-3.7458,x:511.75,y:747.1},0).wait(1).to({rotation:-2.9897,x:511.8,y:748.4},0).wait(1).to({rotation:-2.2337,x:511.9,y:749.65},0).wait(1).to({rotation:-1.4776,x:511.95,y:751},0).wait(1).to({rotation:-0.7216,y:752.25},0).wait(1).to({rotation:0.0345,y:753.5},0).wait(1).to({rotation:0.7905,y:754.85},0).wait(1).to({rotation:1.5466,y:756.1},0).wait(1).to({rotation:2.3027,x:511.9,y:757.35},0).wait(1).to({rotation:3.0587,x:511.8,y:758.65},0).wait(1).to({rotation:3.8148,x:511.75,y:759.95},0).wait(1).to({rotation:4.5708,x:511.65,y:761.25},0).wait(1).to({rotation:5.3269,x:511.55,y:762.5},0).wait(1).to({rotation:6.0829,x:511.45,y:763.8},0).wait(1).to({rotation:6.839,x:511.3,y:765.1},0).wait(1).to({rotation:7.595,x:511.1,y:766.4},0).wait(1).to({rotation:8.3511,x:510.95,y:767.65},0).wait(1).to({rotation:9.1071,x:510.75,y:768.9},0).wait(1).to({rotation:9.8632,x:510.55,y:770.2},0).wait(1).to({rotation:10.6192,x:510.25,y:771.5},0).wait(1).to({rotation:11.3753,x:510.05,y:772.75},0).wait(1).to({rotation:12.1313,x:509.8,y:774},0).wait(1).to({rotation:12.8874,x:509.5,y:775.25},0).wait(1).to({rotation:13.6434,x:509.2,y:776.5},0).wait(1).to({rotation:14.3995,x:508.9,y:777.75},0).wait(1).to({rotation:15.1555,x:508.6,y:779},0).wait(1).to({rotation:15.9116,x:508.25,y:780.25},0).wait(1).to({rotation:16.6676,x:507.85,y:781.5},0).wait(1).to({rotation:17.4237,x:507.5,y:782.75},0).wait(1).to({rotation:18.1797,x:507.1,y:783.95},0).wait(1).to({rotation:18.9358,x:506.65,y:785.15},0).wait(1).to({rotation:19.6918,x:506.25,y:786.35},0).wait(1).to({rotation:20.4479,x:505.85,y:787.6},0).wait(7));

	// планета_2_png___копия
	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(1436.4,-144,1,1,0,0,0,143.5,143.5);

	this.instance_6 = new lib.планета2pngкопия();
	this.instance_6.setTransform(1801,736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:1411.3,y:-124.25},0).wait(1).to({x:1386.9,y:-104.75},0).wait(1).to({x:1363.05,y:-85.45},0).wait(1).to({x:1339.85,y:-66.4},0).wait(1).to({x:1317.25,y:-47.5},0).wait(1).to({x:1295.3,y:-28.85},0).wait(1).to({x:1273.9,y:-10.35},0).wait(1).to({x:1253.15,y:7.9},0).wait(1).to({x:1233.05,y:25.95},0).wait(1).to({x:1213.55,y:43.8},0).wait(1).to({x:1194.65,y:61.45},0).wait(1).to({x:1176.35,y:78.9},0).wait(1).to({x:1158.65,y:96.1},0).wait(1).to({x:1141.6,y:113.1},0).wait(1).to({x:1125.2,y:129.95},0).wait(1).to({x:1109.35,y:146.5},0).wait(1).to({x:1094.15,y:162.9},0).wait(1).to({x:1079.55,y:179.1},0).wait(1).to({x:1065.55,y:195.1},0).wait(1).to({x:1052.2,y:210.85},0).wait(1).to({x:1039.45,y:226.45},0).wait(1).to({x:1027.3,y:241.8},0).wait(1).to({x:1015.8,y:256.95},0).wait(1).to({x:1004.9,y:271.95},0).wait(1).to({x:994.6,y:286.7},0).wait(1).to({x:984.9,y:301.25},0).wait(1).to({x:975.85,y:315.55},0).wait(1).to({x:967.4,y:329.7},0).wait(1).to({x:959.55,y:343.65},0).wait(1).to({x:952.3,y:357.35},0).wait(1).to({x:945.7,y:370.85},0).wait(1).to({x:939.7,y:384.2},0).wait(1).to({x:934.3,y:397.3},0).wait(1).to({x:929.55,y:410.2},0).wait(1).to({x:925.4,y:422.85},0).wait(1).to({x:921.85,y:435.35},0).wait(1).to({x:918.9,y:447.65},0).wait(1).to({x:916.6,y:459.7},0).wait(1).to({x:914.9,y:471.6},0).wait(1).to({x:913.8,y:483.25},0).wait(1).to({x:913.3,y:494.7},0).wait(1).to({x:913.45,y:505.95},0).wait(1).to({x:914.2,y:517},0).wait(1).to({x:915.55,y:527.85},0).wait(1).to({x:917.5,y:538.5},0).wait(1).to({x:920.1,y:548.9},0).wait(1).to({x:923.3,y:559.15},0).wait(1).to({x:927.1,y:569.15},0).wait(1).to({x:931.55,y:579},0).wait(1).to({x:936.6,y:588.6},0).wait(1).to({x:942.25,y:598},0).wait(1).to({x:948.5,y:607.2},0).wait(1).to({x:955.4,y:616.2},0).wait(1).to({x:962.85,y:624.95},0).wait(1).to({x:971,y:633.55},0).wait(1).to({x:979.7,y:641.95},0).wait(1).to({x:989,y:650.1},0).wait(1).to({x:998.95,y:658.05},0).wait(1).to({x:1009.55,y:665.85},0).wait(1).to({x:1020.7,y:673.4},0).wait(1).to({x:1032.5,y:680.75},0).wait(1).to({x:1044.9,y:687.9},0).wait(1).to({x:1057.9,y:694.8},0).wait(1).to({x:1071.5,y:701.55},0).wait(1).to({x:1085.75,y:708.1},0).wait(1).to({x:1100.6,y:714.4},0).wait(1).to({x:1116.1,y:720.5},0).wait(1).to({x:1132.15,y:726.45},0).wait(1).to({x:1148.85,y:732.15},0).wait(1).to({x:1166.15,y:737.65},0).wait(1).to({x:1184.1,y:742.95},0).wait(1).to({x:1202.6,y:748},0).wait(1).to({x:1221.8,y:752.9},0).wait(1).to({x:1241.55,y:757.6},0).wait(1).to({x:1261.9,y:762.05},0).wait(1).to({x:1282.9,y:766.35},0).wait(1).to({x:1304.5,y:770.4},0).wait(1).to({x:1326.75,y:774.25},0).wait(1).to({x:1349.6,y:777.9},0).wait(1).to({x:1373.05,y:781.35},0).wait(1).to({x:1397.1,y:784.6},0).wait(1).to({x:1421.8,y:787.6},0).wait(1).to({x:1447.1,y:790.45},0).wait(1).to({x:1473,y:793.05},0).wait(1).to({x:1499.55,y:795.5},0).wait(1).to({x:1526.65,y:797.7},0).wait(1).to({x:1554.45,y:799.7},0).wait(1).to({x:1582.8,y:801.5},0).wait(1).to({x:1611.8,y:803.1},0).wait(1).to({x:1641.4,y:804.5},0).wait(1).to({x:1671.65,y:805.65},0).wait(1).to({x:1702.45,y:806.65},0).wait(1).to({x:1733.95,y:807.4},0).wait(1).to({x:1766,y:808},0).wait(1).to({x:1798.7,y:808.35},0).wait(1).to({x:1832,y:808.5},0).wait(1).to({x:1865.9,y:808.45},0).wait(1).to({x:1900.5,y:808.2},0).to({_off:true},1).wait(1));

	// фон_png
	this.instance_7 = new lib.фон();
	this.instance_7.setTransform(0,-4,0.6148,0.5208);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(324.2,-163.4,1979.1000000000001,1871.5);
// library properties:
lib.properties = {
	id: '323B163396D947428404C612D422A90F',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/фон_.png", id:"фон"},
		{src:"images/Безымянный_1_HTML5 Canvas_atlas_1.png", id:"Безымянный_1_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['323B163396D947428404C612D422A90F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;