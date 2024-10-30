(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Безымянный_6_HTML5 Canvas_atlas_1", frames: [[0,0,1099,1719],[1101,0,832,832]]}
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



(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2632,915);


(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2632,915);


(lib.зеленыйчмошник = function() {
	this.initialize(ss["Безымянный_6_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.космонавт = function() {
	this.initialize(img.космонавт);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12253,13399);


(lib.ракета = function() {
	this.initialize(img.ракета);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2701,2701);


(lib.солнце = function() {
	this.initialize(ss["Безымянный_6_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
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
	this.instance = new lib.зеленыйчмошник();
	this.instance.setTransform(0,0,0.3022,0.3022);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,332.1,519.4), null);


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
	this.instance = new lib.солнце();
	this.instance.setTransform(0,0,0.0307,0.0307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,25.6,25.6), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ракета();
	this.instance.setTransform(0,0,0.1233,0.1233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,333,333), null);


// stage content:
(lib.Безымянный6_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,130];
	// timeline functions:
	this.frame_0 = function() {
		playSound("d953d9deb99eff9");
	}
	this.frame_130 = function() {
		playSound("_0ae2c61ec9be619");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(130).call(this.frame_130).wait(155));

	// зеленый_чмошник_png
	this.instance = new lib.Символ3();
	this.instance.setTransform(2142.4,559.7,1,1,0,0,0,166,259.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).wait(1).to({rotation:-0.4166,x:2096.65,y:560.05},0).wait(1).to({rotation:-0.8333,x:2050.9,y:560.4},0).wait(1).to({rotation:-1.2499,x:2005.1,y:560.8},0).wait(1).to({rotation:-1.6665,x:1959.35,y:561.15},0).wait(1).to({rotation:-2.0832,x:1913.6,y:561.5},0).wait(1).to({rotation:-2.4998,x:1867.9,y:561.85},0).wait(1).to({rotation:-2.9165,x:1822.1,y:562.2},0).wait(1).to({rotation:-3.3331,x:1776.35,y:562.6},0).wait(1).to({rotation:-3.7497,x:1730.6,y:563},0).wait(1).to({rotation:-4.1664,x:1684.8,y:563.35},0).wait(1).to({rotation:-4.583,x:1639.05,y:563.7},0).wait(1).to({rotation:-4.9996,x:1593.25,y:564.05},0).wait(1).to({rotation:-5.4163,x:1547.55,y:564.45},0).wait(1).to({rotation:-5.8329,x:1501.8,y:564.8},0).wait(1).to({rotation:-6.2495,x:1456,y:565.2},0).wait(1).to({rotation:-6.6662,x:1410.3,y:565.55},0).wait(1).to({rotation:-7.0828,x:1364.45,y:565.9},0).wait(1).to({rotation:-7.4994,x:1318.75,y:566.3},0).wait(1).to({rotation:-7.9161,x:1273,y:566.6},0).wait(1).to({rotation:-8.3327,x:1227.2,y:567},0).wait(1).to({rotation:-8.7494,x:1181.4,y:567.4},0).wait(1).to({rotation:-9.166,x:1135.7,y:567.75},0).wait(1).to({rotation:-9.5826,x:1089.95,y:568.05},0).wait(1).to({rotation:-9.9993,x:1044.2,y:568.45},0).wait(1).to({rotation:-10.4159,x:998.4,y:568.8},0).wait(1).to({rotation:-10.8325,x:952.65,y:569.15},0).wait(1).to({rotation:-11.2492,x:930.75,y:597.2},0).wait(1).to({rotation:-11.6658,x:914.95,y:640.2},0).wait(1).to({rotation:-12.0824,x:890.15,y:678.1},0).wait(1).to({rotation:-12.4991,x:855.05,y:707.4},0).wait(1).to({rotation:-12.9157,x:815.15,y:729.45},0).wait(1).to({rotation:-13.3324,x:817.25,y:728.7},0).wait(1).to({rotation:-13.749,x:819.4,y:728},0).wait(1).to({rotation:-14.1656,x:821.55,y:727.3},0).wait(1).to({rotation:-14.5823,x:823.7,y:726.55},0).wait(1).to({rotation:-14.9989,x:825.85,y:725.85},0).wait(1).to({rotation:-12.4991,x:827.95,y:725.15},0).wait(1).to({rotation:-9.9993,x:830.15,y:724.4},0).wait(1).to({rotation:-7.4994,x:830.25},0).wait(1).to({rotation:-4.9996,x:828.25,y:725},0).wait(1).to({rotation:-2.4998,x:825.85,y:725.8},0).wait(1).to({rotation:0,x:823.7,y:726.55},0).wait(1).to({x:821.55,y:727.25},0).wait(1).to({x:819.45,y:728},0).wait(1).to({x:817.4,y:728.65},0).wait(1).to({x:815.15,y:729.45},0).wait(1).to({x:817.5,y:714.55},0).wait(1).to({x:819.7,y:699.65},0).wait(1).to({x:821.8,y:684.75},0).wait(1).to({x:823.75,y:669.8},0).wait(1).to({x:825.55,y:654.85},0).wait(1).to({x:827.2,y:639.85},0).wait(1).to({x:828.6,y:624.9},0).wait(1).to({x:829.8,y:609.85},0).wait(1).to({x:830.7,y:594.85},0).wait(1).to({x:831.15,y:579.75},0).wait(1).to({x:831,y:564.7},0).wait(1).to({x:829.9,y:549.7},0).wait(1).to({x:826.45,y:535.05},0).wait(1).to({x:815.15,y:527.85},0).wait(1).to({x:820.15,y:552.9},0).wait(1).to({x:824.5,y:578.15},0).wait(1).to({x:828,y:603.55},0).wait(1).to({x:830.4,y:629.05},0).wait(1).to({x:831.15,y:654.65},0).wait(1).to({x:828.55,y:680.05},0).wait(1).to({x:815.15,y:700.65},0).wait(1).to({x:779.55,y:637.2},0).wait(1).to({x:743.9,y:573.85},0).wait(1).to({x:708.1,y:510.55},0).wait(1).to({x:672.25,y:447.35},0).wait(1).to({x:636.25,y:384.15},0).wait(1).to({x:600.1,y:321},0).wait(1).to({x:563.85,y:258},0).wait(1).to({x:527.5,y:195.1},0).wait(1).to({x:490.9,y:132.2},0).wait(1).to({x:454.15,y:69.45},0).wait(1).to({x:417.1,y:6.9},0).wait(1).to({x:379.7,y:-55.55},0).wait(1).to({x:341.9,y:-117.6},0).wait(1).to({x:303.35,y:-179.25},0).wait(1).to({x:263.45,y:-240},0).wait(1).to({x:216.75,y:-294.55},0).wait(5).to({x:2142.4,y:559.7},0).to({_off:true},1).wait(65));

	// Слой_7
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(1088.2,663.8,1,1,0,0,0,13.5,13.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).wait(1).to({regX:12.8,regY:12.8,scaleX:6.0715,scaleY:6.0714,skewX:-3.662,skewY:-3.4202,x:1084.5,y:660.45},0).wait(1).to({scaleX:11.1431,scaleY:11.143,skewX:-7.3239,skewY:-6.8403,x:1081.25,y:658.1},0).wait(1).to({scaleX:16.2145,scaleY:16.2147,skewX:-10.9859,skewY:-10.2605,x:1077.7,y:656.2},0).wait(1).to({scaleX:21.2862,scaleY:21.2858,skewX:-14.6479,skewY:-13.6807,x:1074,y:654.75},0).wait(1).to({scaleX:26.3574,scaleY:26.3572,skewX:-18.3098,skewY:-17.1008,x:1070.1,y:653.8},0).wait(1).to({scaleX:31.4284,scaleY:31.4287,skewX:-21.9718,skewY:-20.521,x:1066.1,y:653.35},0).wait(1).to({scaleX:36.5003,scaleY:36.5003,skewX:-25.6338,skewY:-23.9412,x:1062,y:653.4},0).wait(1).to({scaleX:41.5712,scaleY:41.571,skewX:-29.2957,skewY:-27.3613,x:1057.95,y:654.05},0).wait(1).to({scaleX:46.6427,scaleY:46.6433,skewX:-32.9577,skewY:-30.7815,x:1053.85,y:655.2},0).wait(1).to({scaleX:51.7141,scaleY:51.7147,skewX:-36.6196,skewY:-34.2016,x:1049.9,y:656.9},0).wait(1).to({scaleX:56.7861,scaleY:56.7854,skewX:-40.2816,skewY:-37.6218,x:1046,y:659.15},0).wait(1).to({scaleX:61.8569,scaleY:61.857,skewX:-43.9436,skewY:-41.042,x:1042.4,y:661.9},0).wait(1).to({scaleX:66.9279,scaleY:66.9281,skewX:-47.6055,skewY:-44.4621,x:1038.95,y:665.2},0).wait(1).to({scaleX:72,scaleY:72.0006,skewX:-51.2675,skewY:-47.8823,x:1035.7,y:669},0).wait(1).to({scaleX:70.8668,scaleY:70.8509,skewX:-54.9295,skewY:-51.3025,x:1077.75,y:669.6},0).wait(1).to({scaleX:69.7343,scaleY:69.7028,skewX:-58.5914,skewY:-54.7226,x:1119.95,y:670.05},0).wait(1).to({scaleX:68.6013,scaleY:68.5551,skewX:-62.2534,skewY:-58.1428,x:1162.35,y:670.4},0).wait(1).to({scaleX:67.4685,scaleY:67.407,skewX:-65.9154,skewY:-61.563,x:1204.9,y:670.5},0).wait(1).to({scaleX:66.3354,scaleY:66.2591,skewX:-69.8876,skewY:-65.2934,x:1247.8,y:670.7},0).wait(1).to({scaleX:65.2027,scaleY:65.1105,skewX:-73.8599,skewY:-69.0239,x:1290.8,y:670.65},0).wait(1).to({scaleX:64.0691,scaleY:63.9621,skewX:-77.8321,skewY:-72.7543,x:1334,y:670.4},0).wait(1).to({scaleX:62.9375,scaleY:62.8136,skewX:-81.8044,skewY:-76.4848,x:1377.3,y:669.9},0).wait(1).to({scaleX:61.8027,scaleY:61.665,skewX:-85.7766,skewY:-80.2152,x:1420.75,y:669.15},0).wait(1).to({scaleX:60.6705,scaleY:60.5173,skewX:-89.7489,skewY:-83.9457,x:1464.25,y:668.1},0).wait(1).to({scaleX:59.5381,scaleY:59.3682,skewX:-93.7211,skewY:-87.6761,x:1507.85,y:666.85},0).wait(1).to({scaleX:58.4053,scaleY:58.2208,skewX:-97.6934,skewY:-91.4066,x:1551.5,y:665.35},0).wait(1).to({scaleX:57.2718,scaleY:57.0715,skewX:-101.6656,skewY:-95.137,x:1595.1,y:663.55},0).wait(1).to({scaleX:56.1375,scaleY:55.9224,skewX:-105.6379,skewY:-98.8675,x:1638.8,y:661.5},0).wait(1).to({scaleX:55.0063,scaleY:54.7747,skewX:-109.6101,skewY:-102.5979,x:1682.5,y:659.25},0).wait(1).to({scaleX:53.8727,scaleY:53.625,skewX:-113.5824,skewY:-106.3284,x:1726.1,y:656.75},0).wait(1).to({scaleX:52.74,scaleY:52.4782,skewX:-117.5546,skewY:-110.0588,x:1769.65,y:653.95},0).wait(1).to({scaleX:51.6068,scaleY:51.3292,skewX:-121.5269,skewY:-113.7893,x:1813.2,y:650.95},0).wait(1).to({scaleX:50.4737,scaleY:50.1807,skewX:-125.4991,skewY:-117.5197,x:1856.6,y:647.7},0).wait(1).to({scaleX:49.3401,scaleY:49.0318,skewX:-129.4714,skewY:-121.2502,x:1899.95,y:644.35},0).wait(1).to({scaleX:48.2075,scaleY:47.8834,skewX:-133.4436,skewY:-124.9806,x:1943.15,y:640.65},0).wait(1).to({scaleX:47.0742,scaleY:46.7348,skewX:-137.4159,skewY:-128.7111,x:1986.25,y:636.8},0).wait(1).to({scaleX:45.9412,scaleY:45.5865,skewX:-141.3881,skewY:-132.4415,x:2029.25,y:632.85},0).wait(1).to({scaleX:44.8084,scaleY:44.4389,skewX:-145.3604,skewY:-136.172,x:2072.05,y:628.6},0).wait(1).to({scaleX:43.6748,scaleY:43.2904,skewX:-145.3591,skewY:-135.9289,x:2112.15,y:624.95},0).wait(1).to({scaleX:42.5423,scaleY:42.1418,skewX:-145.3578,skewY:-135.6858,x:2152.2,y:621.3},0).wait(1).to({scaleX:41.409,scaleY:40.9933,skewX:-145.3565,skewY:-135.4427,x:2192.25,y:617.6},0).wait(9).to({_off:true},1).wait(157));

	// космонавт_png
	this.instance_2 = new lib.космонавт();
	this.instance_2.setTransform(-99,1101,0.0212,0.0212);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({_off:true},3).wait(226));

	// ракета_png___копия
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(-189.5,812.3,1,1,0,0,0,166.5,166.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1).to({rotation:0.3488,x:-174.3,y:794.5},0).wait(1).to({rotation:0.6976,x:-158.9,y:776.95},0).wait(1).to({rotation:1.0464,x:-143.4,y:759.55},0).wait(1).to({rotation:1.3952,x:-127.6,y:742.4},0).wait(1).to({rotation:1.7441,x:-111.6,y:725.4},0).wait(1).to({rotation:2.0929,x:-95.45,y:708.7},0).wait(1).to({rotation:2.4417,x:-79.05,y:692.15},0).wait(1).to({rotation:2.7905,x:-62.45,y:675.75},0).wait(1).to({rotation:3.1393,x:-45.65,y:659.6},0).wait(1).to({rotation:3.4881,x:-28.7,y:643.65},0).wait(1).to({rotation:3.8369,x:-11.5,y:627.9},0).wait(1).to({rotation:4.1857,x:5.9,y:612.3},0).wait(1).to({rotation:4.5346,x:23.55,y:596.95},0).wait(1).to({rotation:4.8834,x:41.35,y:581.75},0).wait(1).to({rotation:5.2322,x:59.3,y:566.85},0).wait(1).to({rotation:5.581,x:77.5,y:552.05},0).wait(1).to({rotation:5.9298,x:95.9,y:537.45},0).wait(1).to({rotation:6.2786,x:114.55,y:523.1},0).wait(1).to({rotation:6.6274,x:133.4,y:508.95},0).wait(1).to({rotation:6.9762,x:152.35,y:494.95},0).wait(1).to({rotation:7.325,x:171.55,y:481.25},0).wait(1).to({rotation:7.6739,x:190.95,y:467.65},0).wait(1).to({rotation:8.0227,x:210.6,y:454.25},0).wait(1).to({rotation:8.3715,x:230.4,y:441.05},0).wait(1).to({rotation:8.7203,x:250.45,y:428.1},0).wait(1).to({rotation:9.0691,x:270.7,y:415.3},0).wait(1).to({rotation:9.4179,x:291.15,y:402.75},0).wait(1).to({rotation:9.7667,x:311.85,y:390.4},0).wait(1).to({rotation:10.1155,x:332.65,y:378.2},0).wait(1).to({rotation:10.4643,x:353.75,y:366.25},0).wait(1).to({rotation:10.8132,x:375,y:354.45},0).wait(1).to({rotation:11.162,x:396.45,y:342.85},0).wait(1).to({rotation:11.5108,x:418.15,y:331.4},0).wait(1).to({rotation:11.8596,x:440.05,y:320.25},0).wait(1).to({rotation:12.2084,x:462.1,y:309.25},0).wait(1).to({rotation:12.5572,x:484.35,y:298.45},0).wait(1).to({rotation:12.906,x:506.85,y:287.85},0).wait(1).to({rotation:13.2548,x:529.6,y:277.4},0).wait(1).to({rotation:13.6037,x:552.5,y:267.25},0).wait(1).to({rotation:13.9525,x:575.6,y:257.25},0).wait(1).to({rotation:14.3013,x:598.9,y:247.45},0).wait(1).to({rotation:14.6501,x:622.45,y:237.85},0).wait(1).to({rotation:14.9989,x:646.15,y:228.45},0).wait(1).to({rotation:12.8562,x:670.1,y:219.25},0).wait(1).to({rotation:10.7135,x:694.2,y:210.2},0).wait(1).to({rotation:8.5708,x:718.6,y:201.35},0).wait(1).to({rotation:6.4281,x:743.1,y:192.75},0).wait(1).to({rotation:4.2854,x:767.9,y:184.35},0).wait(1).to({rotation:2.1427,x:792.9,y:176.1},0).wait(1).to({rotation:0,x:818.05,y:168.1},0).wait(1).to({scaleX:0.8414,scaleY:0.8414,rotation:9.9997,x:870.9,y:164.45},0).wait(1).to({scaleX:0.6828,scaleY:0.6828,rotation:19.9995,x:923.7,y:160.9},0).wait(1).to({scaleX:0.5242,scaleY:0.5242,rotation:29.9992,x:976.55,y:157.3},0).wait(1).to({scaleX:0.3656,scaleY:0.3656,x:1029.4,y:153.65},0).wait(1).to({scaleX:0.1867,scaleY:0.1867,x:1082.25,y:150.05},0).wait(1).to({scaleX:0.0077,scaleY:0.0077,x:1135.1,y:146.4},0).to({_off:true},1).wait(207));

	// ракета_png
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(-77.5,1167.5,1,1,0,0,0,166.5,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-59.6,y:1155.5},0).wait(1).to({x:-41.75,y:1143.55},0).wait(1).to({x:-23.9,y:1131.55},0).wait(1).to({x:-6.05,y:1119.6},0).wait(1).to({x:11.8,y:1107.65},0).wait(1).to({x:29.65,y:1095.65},0).wait(1).to({x:47.5,y:1083.7},0).wait(1).to({x:65.35,y:1071.75},0).wait(1).to({x:83.25,y:1059.75},0).wait(1).to({x:101.1,y:1047.8},0).wait(1).to({x:118.95,y:1035.85},0).wait(1).to({x:136.8,y:1023.85},0).wait(1).to({x:154.65,y:1011.9},0).wait(1).to({x:172.45,y:999.9},0).wait(1).to({x:190.3,y:987.95},0).wait(1).to({x:208.15,y:976},0).wait(1).to({x:226.05,y:964},0).wait(1).to({x:243.9,y:952.05},0).wait(1).to({x:261.75,y:940.1},0).wait(1).to({x:279.6,y:928.1},0).wait(1).to({x:297.45,y:916.15},0).wait(1).to({x:315.3,y:904.2},0).wait(1).to({x:333.15,y:892.2},0).wait(1).to({x:351,y:880.25},0).wait(1).to({x:368.9,y:868.3},0).wait(1).to({x:386.75,y:856.3},0).wait(1).to({x:404.6,y:844.35},0).wait(1).to({x:422.45,y:832.35},0).wait(1).to({x:440.3,y:820.4},0).wait(1).to({x:458.15,y:808.45},0).wait(1).to({x:476,y:796.45},0).wait(1).to({x:493.85,y:784.5},0).wait(1).to({x:511.7,y:772.55},0).wait(1).to({x:529.6,y:760.55},0).wait(1).to({x:547.45,y:748.6},0).wait(1).to({x:565.3,y:736.65},0).wait(1).to({x:583.15,y:724.65},0).wait(1).to({x:601,y:712.7},0).wait(1).to({x:618.85,y:700.7},0).wait(1).to({x:636.7,y:688.75},0).wait(1).to({x:654.55,y:676.8},0).wait(1).to({x:672.45,y:664.8},0).wait(1).to({x:690.3,y:652.85},0).wait(1).to({x:708.15,y:640.9},0).wait(1).to({x:726,y:628.9},0).wait(1).to({x:743.85,y:616.95},0).wait(1).to({x:761.7,y:605},0).wait(1).to({x:779.55,y:593},0).wait(1).to({x:797.4,y:581.05},0).wait(1).to({x:815.3,y:569.1},0).wait(1).to({scaleX:0.8414,scaleY:0.8414,x:838.2,y:535.45},0).wait(1).to({scaleX:0.6828,scaleY:0.6828,x:861.1,y:501.8},0).wait(1).to({scaleX:0.5242,scaleY:0.5242,x:884,y:468.15},0).wait(1).to({scaleX:0.3656,scaleY:0.3656,x:906.9,y:434.5},0).wait(1).to({scaleX:0.1867,scaleY:0.1867,x:929.85,y:400.9},0).wait(1).to({scaleX:0.0077,scaleY:0.0077,x:952.75,y:367.25},0).to({_off:true},1).wait(228));

	// Слой_14
	this.instance_5 = new lib.CachedBmp_12();
	this.instance_5.setTransform(330.8,326.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_13();
	this.instance_6.setTransform(330.8,326.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},216).to({state:[{t:this.instance_6}]},53).to({state:[]},15).wait(1));

	// Слой_1
	this.instance_7 = new lib.фон();
	this.instance_7.setTransform(-49,0,0.63,0.5373);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56).to({x:0},0).wait(43).to({x:-49},0).wait(50).to({x:0},0).to({_off:true},135).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50.2,2867.7,1978.5);
// library properties:
lib.properties = {
	id: '99FAA0BBE241CD4388083EB6994A47AC',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_13.png", id:"CachedBmp_13"},
		{src:"images/CachedBmp_12.png", id:"CachedBmp_12"},
		{src:"images/космонавт_.png", id:"космонавт"},
		{src:"images/ракета_.png", id:"ракета"},
		{src:"images/фон_.png", id:"фон"},
		{src:"images/Безымянный_6_HTML5 Canvas_atlas_1.png", id:"Безымянный_6_HTML5 Canvas_atlas_1"},
		{src:"sounds/_0ae2c61ec9be619.mp3", id:"_0ae2c61ec9be619"},
		{src:"sounds/d953d9deb99eff9.mp3", id:"d953d9deb99eff9"}
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
an.compositions['99FAA0BBE241CD4388083EB6994A47AC'] = {
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