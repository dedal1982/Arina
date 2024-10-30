(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Безымянный_2_HTML5 Canvas_atlas_1", frames: [[514,0,133,134],[0,0,512,875],[0,877,778,270]]}
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



(lib.колесао = function() {
	this.initialize(ss["Безымянный_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крыло = function() {
	this.initialize(ss["Безымянный_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.машина = function() {
	this.initialize(ss["Безымянный_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.птица = function() {
	this.initialize(img.птица);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3684,5235);


(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4500,3880);// helper functions:

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
	this.instance = new lib.колесао();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,133,134), null);


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
	this.instance = new lib.крыло();
	this.instance.setTransform(0,0,0.3787,0.3787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,193.9,331.4), null);


(lib.крылоправое = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(97,165.7,1,1,0,0,0,97,165.7);

	this.instance_1 = new lib.крыло();
	this.instance_1.setTransform(0,0,0.3787,0.3787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:96.9,scaleY:0.9918,x:96.9},0).wait(1).to({scaleY:0.9836},0).wait(1).to({scaleY:0.9755},0).wait(1).to({scaleY:0.9673},0).wait(1).to({scaleY:0.9591,y:165.65},0).wait(1).to({scaleY:0.9509},0).wait(1).to({scaleY:0.9427},0).wait(1).to({scaleY:0.9345},0).wait(1).to({scaleY:0.9264},0).wait(1).to({scaleY:0.9182,y:165.7},0).wait(1).to({scaleY:0.91},0).wait(1).to({scaleY:0.9018},0).wait(1).to({scaleY:0.8936,y:165.65},0).wait(1).to({scaleY:0.8855},0).wait(1).to({scaleY:0.8773},0).wait(1).to({scaleY:0.8691},0).wait(1).to({scaleY:0.8609},0).wait(1).to({scaleY:0.6165},0).wait(1).to({scaleY:0.3722,y:165.6},0).wait(1).to({scaleY:0.4748},0).wait(1).to({scaleY:0.5774,y:165.65},0).wait(1).to({scaleY:0.6801},0).wait(1).to({scaleY:0.7827},0).wait(1).to({scaleY:0.8853},0).wait(1).to({scaleY:0.7996},0).wait(1).to({scaleY:0.7139},0).wait(1).to({scaleY:0.6281},0).wait(1).to({scaleY:0.5424},0).wait(1).to({scaleY:0.4567,y:165.6},0).wait(1).to({scaleY:0.5424,y:165.65},0).wait(1).to({scaleY:0.6281,y:165.7},0).wait(1).to({scaleY:0.7138},0).wait(1).to({scaleY:0.7996},0).wait(1).to({scaleY:0.8853},0).wait(1).to({scaleY:0.7971},0).wait(1).to({scaleY:0.7089,y:165.65},0).wait(1).to({scaleY:0.6207},0).wait(1).to({scaleY:0.5325},0).wait(1).to({scaleY:0.4444},0).wait(1).to({scaleY:0.5085},0).wait(1).to({scaleY:0.5727},0).wait(1).to({scaleY:0.6368},0).wait(1).to({scaleY:0.701},0).wait(1).to({scaleY:0.7651,y:165.7},0).wait(1).to({scaleY:0.8292,y:165.65},0).wait(1).to({scaleY:0.8934,y:165.7},0).wait(1).to({scaleY:0.9575,y:165.65},0).wait(1).to({scaleY:0.879},0).wait(1).to({scaleY:0.8005},0).wait(1).to({scaleY:0.7221},0).wait(1).to({scaleY:0.6436},0).wait(1).to({scaleY:0.5651},0).wait(1).to({scaleY:0.4866},0).wait(1).to({scaleY:0.4081},0).wait(1).to({scaleY:0.4664},0).wait(1).to({scaleY:0.5248},0).wait(1).to({scaleY:0.5832,y:165.7},0).wait(1).to({scaleY:0.6415,y:165.65},0).wait(1).to({scaleY:0.6999},0).wait(1).to({scaleY:0.7582,y:165.7},0).wait(1).to({scaleY:0.8166,y:165.65},0).wait(1).to({scaleY:0.8749},0).wait(1).to({scaleY:0.9333,y:165.7},0).wait(5).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.9,331.4);


(lib.крылолевое = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(97,165.7,1,1,0,0,0,97,165.7);

	this.instance_1 = new lib.крыло();
	this.instance_1.setTransform(0,0,0.3787,0.3787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:96.9,scaleY:0.9918,x:96.9},0).wait(1).to({scaleY:0.9836},0).wait(1).to({scaleY:0.9755},0).wait(1).to({scaleY:0.9673},0).wait(1).to({scaleY:0.9591,y:165.65},0).wait(1).to({scaleY:0.9509},0).wait(1).to({scaleY:0.9427},0).wait(1).to({scaleY:0.9345},0).wait(1).to({scaleY:0.9264},0).wait(1).to({scaleY:0.9182,y:165.7},0).wait(1).to({scaleY:0.91},0).wait(1).to({scaleY:0.9018},0).wait(1).to({scaleY:0.8936,y:165.65},0).wait(1).to({scaleY:0.8855},0).wait(1).to({scaleY:0.8773},0).wait(1).to({scaleY:0.8691},0).wait(1).to({scaleY:0.8609},0).wait(1).to({scaleY:0.6165},0).wait(1).to({scaleY:0.3722,y:165.6},0).wait(1).to({scaleY:0.4748},0).wait(1).to({scaleY:0.5774,y:165.65},0).wait(1).to({scaleY:0.6801},0).wait(1).to({scaleY:0.7827},0).wait(1).to({scaleY:0.8853},0).wait(1).to({scaleY:0.7996},0).wait(1).to({scaleY:0.7139},0).wait(1).to({scaleY:0.6281},0).wait(1).to({scaleY:0.5424},0).wait(1).to({scaleY:0.4567,y:165.6},0).wait(1).to({scaleY:0.5424,y:165.65},0).wait(1).to({scaleY:0.6281,y:165.7},0).wait(1).to({scaleY:0.7138},0).wait(1).to({scaleY:0.7996},0).wait(1).to({scaleY:0.8853},0).wait(1).to({scaleY:0.7971},0).wait(1).to({scaleY:0.7089,y:165.65},0).wait(1).to({scaleY:0.6207},0).wait(1).to({scaleY:0.5325},0).wait(1).to({scaleY:0.4444},0).wait(1).to({scaleY:0.5085},0).wait(1).to({scaleY:0.5727},0).wait(1).to({scaleY:0.6368},0).wait(1).to({scaleY:0.701},0).wait(1).to({scaleY:0.7651,y:165.7},0).wait(1).to({scaleY:0.8292,y:165.65},0).wait(1).to({scaleY:0.8934,y:165.7},0).wait(1).to({scaleY:0.9575,y:165.65},0).wait(1).to({scaleY:0.879},0).wait(1).to({scaleY:0.8005},0).wait(1).to({scaleY:0.7221},0).wait(1).to({scaleY:0.6436},0).wait(1).to({scaleY:0.5651},0).wait(1).to({scaleY:0.4866},0).wait(1).to({scaleY:0.4081},0).wait(1).to({scaleY:0.4664},0).wait(1).to({scaleY:0.5248},0).wait(1).to({scaleY:0.5832,y:165.7},0).wait(1).to({scaleY:0.6415,y:165.65},0).wait(1).to({scaleY:0.6999},0).wait(1).to({scaleY:0.7582,y:165.7},0).wait(1).to({scaleY:0.8166,y:165.65},0).wait(1).to({scaleY:0.8749},0).wait(1).to({scaleY:0.9333,y:165.7},0).wait(5).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.9,331.4);


(lib.колесо = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(66.5,67,1,1,0,0,0,66.5,67);

	this.instance_1 = new lib.колесао();
	this.instance_1.setTransform(148.6,20.4,1,1,105.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-2.6471,x:66.55},0).wait(1).to({rotation:-5.2941,y:66.95},0).wait(1).to({rotation:-7.9412,x:66.5},0).wait(1).to({rotation:-10.5882,y:67},0).wait(1).to({rotation:-13.2353,x:66.55},0).wait(1).to({rotation:-15.8824},0).wait(1).to({rotation:-18.5294},0).wait(1).to({rotation:-21.1765,x:66.5},0).wait(1).to({rotation:-23.8235,x:66.55},0).wait(1).to({rotation:-26.4706},0).wait(1).to({rotation:-29.1176},0).wait(1).to({rotation:-31.7647,x:66.5,y:66.95},0).wait(1).to({rotation:-34.4118},0).wait(1).to({rotation:-37.0588,x:66.55,y:67},0).wait(1).to({rotation:-39.7059,x:66.5,y:66.95},0).wait(1).to({rotation:-42.3529,x:66.55},0).wait(1).to({rotation:-45,y:67},0).wait(1).to({rotation:-47.6471,x:66.5},0).wait(1).to({rotation:-50.2941,x:66.55},0).wait(1).to({rotation:-52.9412,x:66.5},0).wait(1).to({rotation:-55.5882,y:66.95},0).wait(1).to({rotation:-58.2353},0).wait(1).to({rotation:-60.8824,x:66.55},0).wait(1).to({rotation:-63.5294},0).wait(1).to({rotation:-66.1765,x:66.5},0).wait(1).to({rotation:-68.8235,x:66.55,y:67},0).wait(1).to({rotation:-71.4706},0).wait(1).to({rotation:-74.1176},0).wait(1).to({rotation:-76.7647,x:66.5,y:66.95},0).wait(1).to({rotation:-79.4118,y:67},0).wait(1).to({rotation:-82.0588,x:66.55},0).wait(1).to({rotation:-84.7059,x:66.5},0).wait(1).to({rotation:-87.3529,x:66.55,y:66.95},0).wait(1).to({rotation:-90,x:66.5,y:67},0).wait(1).to({rotation:-87.3529,x:66.55,y:66.95},0).wait(1).to({rotation:-84.7059,x:66.5,y:67},0).wait(1).to({rotation:-82.0588,x:66.55},0).wait(1).to({rotation:-79.4118,x:66.5},0).wait(1).to({rotation:-76.7647,y:66.95},0).wait(1).to({rotation:-74.1176,x:66.55,y:67},0).wait(1).to({rotation:-71.4706},0).wait(1).to({rotation:-68.8235},0).wait(1).to({rotation:-66.1765,x:66.5,y:66.95},0).wait(1).to({rotation:-63.5294,x:66.55},0).wait(1).to({rotation:-60.8824},0).wait(1).to({rotation:-58.2353,x:66.5},0).wait(1).to({rotation:-55.5882},0).wait(1).to({rotation:-52.9412,y:67},0).wait(1).to({rotation:-50.2941,x:66.55},0).wait(1).to({rotation:-47.6471,x:66.5},0).wait(1).to({rotation:-45,x:66.55},0).wait(1).to({rotation:-42.3529,y:66.95},0).wait(1).to({rotation:-39.7059,x:66.5},0).wait(1).to({rotation:-37.0588,x:66.55,y:67},0).wait(1).to({rotation:-34.4118,x:66.5,y:66.95},0).wait(1).to({rotation:-31.7647},0).wait(1).to({rotation:-29.1176,x:66.55,y:67},0).wait(1).to({rotation:-26.4706},0).wait(1).to({rotation:-23.8235},0).wait(1).to({rotation:-21.1765,x:66.5},0).wait(1).to({rotation:-18.5294,x:66.55},0).wait(1).to({rotation:-15.8824},0).wait(1).to({rotation:-13.2353},0).wait(1).to({rotation:-10.5882,x:66.5},0).wait(1).to({rotation:-7.9412,y:66.95},0).wait(1).to({rotation:-5.2941,x:66.55},0).wait(1).to({rotation:-2.6471,y:67},0).wait(1).to({rotation:0,x:66.5},0).wait(1).to({rotation:5.6651,x:66.45},0).wait(1).to({rotation:11.3301,x:66.5},0).wait(1).to({rotation:16.9952,x:66.45},0).wait(1).to({rotation:22.6602,y:67.05},0).wait(1).to({rotation:28.3253,x:66.5},0).wait(1).to({rotation:33.9903},0).wait(1).to({rotation:39.6554},0).wait(1).to({rotation:45.3204,x:66.45},0).wait(1).to({rotation:50.9855},0).wait(1).to({rotation:56.6505,x:66.5},0).wait(1).to({rotation:62.3156,x:66.45},0).wait(1).to({rotation:67.9806,x:66.5,y:67},0).wait(1).to({rotation:73.6457,x:66.45},0).wait(1).to({rotation:79.3107,x:66.5,y:67.05},0).wait(1).to({rotation:84.9758,x:66.45,y:67},0).wait(1).to({rotation:90.6408},0).wait(1).to({rotation:96.3059},0).wait(1).to({rotation:101.9709,y:66.95},0).wait(1).to({rotation:107.636},0).wait(1).to({rotation:113.301,y:67},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.4,188.9,188.8);


(lib.ПТИЦА = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.крылолевое();
	this.instance.setTransform(219.65,311.55,1.0464,1,0,-74.9998,104.9992,79.5,161.2);

	this.instance_1 = new lib.птица();
	this.instance_1.setTransform(166.95,174,0.0672,0.0672,-14.9926);

	this.instance_2 = new lib.крылоправое();
	this.instance_2.setTransform(384.65,165.7,1,1,0,0,0,97,165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ПТИЦА, new cjs.Rectangle(33,0,464.1,513.8), null);


(lib.машина_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо();
	this.instance.setTransform(616,266.4,1,1,0,0,0,66.5,67);

	this.instance_1 = new lib.колесо();
	this.instance_1.setTransform(200,266.4,1,1,0,0,0,66.5,67);

	this.instance_2 = new lib.машина();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.машина_1, new cjs.Rectangle(0,0,778,333.4), null);


// stage content:
(lib.Безымянный2_HTML5Canvas = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ПТИЦА();
	this.instance.setTransform(1112.25,1380.4,1,1,0,0,0,248.5,256.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:265,scaleX:0.995,scaleY:0.995,rotation:-0.2778,x:1131.8,y:1353.3},0).wait(1).to({scaleX:0.9899,scaleY:0.9899,rotation:-0.5555,x:1134.5,y:1326.55},0).wait(1).to({scaleX:0.9849,scaleY:0.9849,rotation:-0.8333,x:1136.85,y:1300.1},0).wait(1).to({scaleX:0.9799,scaleY:0.9799,rotation:-1.1111,x:1138.85,y:1273.95},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,rotation:-1.3889,x:1140.45,y:1248.15},0).wait(1).to({scaleX:0.9698,scaleY:0.9698,rotation:-1.6666,x:1141.8,y:1222.6},0).wait(1).to({scaleX:0.9647,scaleY:0.9647,rotation:-1.9444,x:1142.65,y:1197.35},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,rotation:-2.2222,x:1143.25,y:1172.4},0).wait(1).to({scaleX:0.9547,scaleY:0.9547,rotation:-2.4999,x:1143.5,y:1147.7},0).wait(1).to({scaleX:0.9496,scaleY:0.9496,rotation:-2.7777,x:1143.3,y:1123.3},0).wait(1).to({scaleX:0.9446,scaleY:0.9446,rotation:-3.0555,x:1142.85,y:1099.25},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,rotation:-3.3333,x:1142,y:1075.4},0).wait(1).to({scaleX:0.9345,scaleY:0.9345,rotation:-3.611,x:1140.8,y:1051.9},0).wait(1).to({scaleX:0.9295,scaleY:0.9295,rotation:-3.8888,x:1139.3,y:1028.7},0).wait(1).to({scaleX:0.9244,scaleY:0.9244,rotation:-4.1666,x:1137.35,y:1005.7},0).wait(1).to({scaleX:0.9194,scaleY:0.9194,rotation:-4.4444,x:1135.15,y:983},0).wait(1).to({scaleX:0.9144,scaleY:0.9144,rotation:-4.7221,x:1132.6,y:960.55},0).wait(1).to({scaleX:0.9093,scaleY:0.9093,rotation:-4.9999,x:1129.65,y:938.35},0).wait(1).to({scaleX:0.9043,scaleY:0.9043,rotation:-5.2777,x:1126.35,y:916.4},0).wait(1).to({scaleX:0.8992,scaleY:0.8992,rotation:-5.5554,x:1122.75,y:894.85},0).wait(1).to({scaleX:0.8942,scaleY:0.8942,rotation:-5.8332,x:1118.85,y:873.4},0).wait(1).to({scaleX:0.8892,scaleY:0.8892,rotation:-6.111,x:1114.5,y:852.2},0).wait(1).to({scaleX:0.8841,scaleY:0.8841,rotation:-6.3888,x:1109.9,y:831.35},0).wait(1).to({scaleX:0.8791,scaleY:0.8791,rotation:-6.6665,x:1104.9,y:810.7},0).wait(1).to({scaleX:0.874,scaleY:0.874,rotation:-6.9443,x:1099.6,y:790.3},0).wait(1).to({scaleX:0.869,scaleY:0.869,rotation:-7.2221,x:1093.95,y:770.1},0).wait(1).to({scaleX:0.864,scaleY:0.864,rotation:-7.4998,x:1088,y:750.2},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,rotation:-7.7776,x:1081.65,y:730.55},0).wait(1).to({scaleX:0.8539,scaleY:0.8539,rotation:-8.0554,x:1075.05,y:711.1},0).wait(1).to({scaleX:0.8489,scaleY:0.8489,rotation:-8.3332,x:1068.05,y:691.85},0).wait(1).to({scaleX:0.8438,scaleY:0.8438,rotation:-8.6109,x:1060.75,y:672.9},0).wait(1).to({scaleX:0.8388,scaleY:0.8388,rotation:-8.8887,x:1053.1,y:654.15},0).wait(1).to({scaleX:0.8337,scaleY:0.8337,rotation:-9.1665,x:1045.1,y:635.6},0).wait(1).to({scaleX:0.8287,scaleY:0.8287,rotation:-9.4443,x:1036.85,y:617.25},0).wait(1).to({scaleX:0.8237,scaleY:0.8237,rotation:-9.722,x:1028.25,y:599.2},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,rotation:-9.9998,x:1019.25,y:581.3},0).wait(1).to({scaleX:0.8136,scaleY:0.8136,rotation:-10.2776,x:1010,y:563.65},0).wait(1).to({scaleX:0.8085,scaleY:0.8085,rotation:-10.5553,x:1000.4,y:546.15},0).wait(1).to({scaleX:0.8035,scaleY:0.8035,rotation:-10.8331,x:990.5,y:528.9},0).wait(1).to({scaleX:0.7985,scaleY:0.7985,rotation:-11.1109,x:980.25,y:511.85},0).wait(1).to({scaleX:0.7934,scaleY:0.7934,rotation:-11.3887,x:969.65,y:495},0).wait(1).to({scaleX:0.7884,scaleY:0.7884,rotation:-11.6664,x:958.75,y:478.3},0).wait(1).to({scaleX:0.7834,scaleY:0.7834,rotation:-11.9442,x:947.6,y:461.9},0).wait(1).to({scaleX:0.7783,scaleY:0.7783,rotation:-12.222,x:936.05,y:445.6},0).wait(1).to({scaleX:0.7733,scaleY:0.7733,rotation:-12.4997,x:924.2,y:429.5},0).wait(1).to({scaleX:0.7682,scaleY:0.7682,rotation:-12.7775,x:912.05,y:413.6},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,rotation:-13.0553,x:899.55,y:397.9},0).wait(1).to({scaleX:0.7582,scaleY:0.7582,rotation:-13.3331,x:886.8,y:382.35},0).wait(1).to({scaleX:0.7531,scaleY:0.7531,rotation:-13.6108,x:873.7,y:367.05},0).wait(1).to({scaleX:0.7481,scaleY:0.7481,rotation:-13.8886,x:860.3,y:351.85},0).wait(1).to({scaleX:0.743,scaleY:0.743,rotation:-14.1664,x:846.5,y:336.85},0).wait(1).to({scaleX:0.738,scaleY:0.738,rotation:-14.4442,x:832.55,y:322},0).wait(1).to({scaleX:0.733,scaleY:0.733,rotation:-14.7219,x:818.15,y:307.35},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,rotation:-14.9997,x:803.5,y:292.9},0).wait(1).to({scaleX:0.7229,scaleY:0.7229,x:788.55,y:278.6},0).wait(1).to({scaleX:0.7178,scaleY:0.7178,x:773.35,y:264.5},0).wait(1).to({scaleX:0.7128,scaleY:0.7128,x:757.75,y:250.5},0).wait(1).to({scaleX:0.7078,scaleY:0.7078,x:741.85,y:236.7},0).wait(1).to({scaleX:0.7027,scaleY:0.7027,x:725.65,y:223.05},0).wait(1).to({scaleX:0.6977,scaleY:0.6977,x:709.25,y:209.55},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:692.45,y:196.2},0).wait(1).to({scaleX:0.6876,scaleY:0.6876,x:675.35,y:182.95},0).wait(1).to({scaleX:0.6826,scaleY:0.6826,x:658,y:169.8},0).wait(1).to({scaleX:0.6775,scaleY:0.6775,x:640.35,y:156.85},0).wait(1).to({scaleX:0.6725,scaleY:0.6725,x:622.35,y:144.1},0).wait(1).to({scaleX:0.6675,scaleY:0.6675,x:604.15,y:131.35},0).wait(1).to({scaleX:0.6624,scaleY:0.6624,x:585.55,y:118.85},0).wait(1).to({scaleX:0.6574,scaleY:0.6574,x:566.65,y:106.45},0).wait(1).to({scaleX:0.6523,scaleY:0.6523,x:547.5,y:94.15},0).wait(1).to({scaleX:0.6473,scaleY:0.6473,x:528.1,y:81.95},0).wait(1).to({scaleX:0.6423,scaleY:0.6423,x:508.35,y:69.8},0).wait(1).to({scaleX:0.6372,scaleY:0.6372,x:488.25,y:57.85},0).wait(1).to({scaleX:0.6322,scaleY:0.6322,x:467.95,y:46},0).wait(1).to({scaleX:0.6272,scaleY:0.6272,x:447.4,y:34.3},0).wait(1).to({scaleX:0.6221,scaleY:0.6221,x:426.45,y:22.65},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,x:405.3,y:11.15},0).wait(1).to({scaleX:0.612,scaleY:0.612,x:383.8,y:-0.35},0).wait(1).to({scaleX:0.607,scaleY:0.607,x:362,y:-11.65},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:339.95,y:-22.9},0).wait(1).to({scaleX:0.5969,scaleY:0.5969,x:317.65,y:-34.05},0).wait(1).to({scaleX:0.5919,scaleY:0.5919,x:295,y:-45.1},0).wait(1).to({scaleX:0.5868,scaleY:0.5868,x:272.1,y:-56.05},0).wait(1).to({scaleX:0.5818,scaleY:0.5818,x:248.9,y:-66.95},0).wait(1).to({scaleX:0.5768,scaleY:0.5768,x:225.5,y:-77.75},0).wait(1).to({scaleX:0.5717,scaleY:0.5717,x:201.7,y:-88.45},0).wait(1).to({scaleX:0.5667,scaleY:0.5667,x:177.7,y:-99.1},0).wait(1).to({scaleX:0.5617,scaleY:0.5617,x:153.45,y:-109.65},0).wait(1).to({scaleX:0.5566,scaleY:0.5566,x:128.85,y:-120.2},0).to({_off:true},1).wait(1));

	// птица_png
	this.instance_1 = new lib.ПТИЦА();
	this.instance_1.setTransform(1402.75,980.95,1,1,0,0,0,248.5,256.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:248.2,regY:256.8,scaleX:0.308,scaleY:0.308,rotation:-29.9998,x:-174.85,y:62.1},85).to({regX:248.5,regY:256.9,scaleX:0.2836,scaleY:0.2836,rotation:0,x:-261.65,y:-11.3},3).to({_off:true},1).wait(1));

	// колесао_png
	this.instance_2 = new lib.машина_1();
	this.instance_2.setTransform(1478.35,963.1,1,1,0,0,0,389,166.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regY:180.4,x:1454.8,y:970.15},0).wait(1).to({x:1431.1,y:963.75},0).wait(1).to({x:1407.2,y:957.5},0).wait(1).to({x:1383.1,y:951.45},0).wait(1).to({x:1358.8,y:945.6},0).wait(1).to({x:1334.35,y:939.95},0).wait(1).to({x:1309.65,y:934.45},0).wait(1).to({x:1284.75,y:929.2},0).wait(1).to({x:1259.7,y:924.1},0).wait(1).to({x:1234.4,y:919.2},0).wait(1).to({x:1208.9,y:914.5},0).wait(1).to({x:1183.25,y:910},0).wait(1).to({x:1157.4,y:905.65},0).wait(1).to({x:1131.3,y:901.5},0).wait(1).to({x:1105.05,y:897.6},0).wait(1).to({x:1078.6,y:893.85},0).wait(1).to({x:1051.95,y:890.25},0).wait(1).to({x:1025.1,y:886.9},0).wait(1).to({x:998,y:883.75},0).wait(1).to({x:970.75,y:880.75},0).wait(1).to({x:943.3,y:877.95},0).wait(1).to({x:915.7,y:875.35},0).wait(1).to({x:887.85,y:872.95},0).wait(1).to({x:859.8,y:870.7},0).wait(1).to({x:831.55,y:868.65},0).wait(1).to({x:803.1,y:866.85},0).wait(1).to({x:774.5,y:865.2},0).wait(1).to({x:745.65,y:863.7},0).wait(1).to({x:716.6,y:862.45},0).wait(1).to({x:687.4,y:861.35},0).wait(1).to({x:657.95,y:860.5},0).wait(1).to({x:628.35,y:859.8},0).wait(1).to({x:598.5,y:859.25},0).wait(1).to({x:568.5,y:858.95},0).wait(1).to({x:538.3,y:858.85},0).wait(1).to({x:507.85,y:858.9},0).wait(1).to({x:477.25,y:859.15},0).wait(1).to({x:446.4,y:859.6},0).wait(1).to({x:415.4,y:860.25},0).wait(1).to({x:384.25,y:861.05},0).wait(1).to({x:352.8,y:862.1},0).wait(1).to({x:321.2,y:863.3},0).wait(1).to({x:289.4,y:864.7},0).wait(1).to({x:257.4,y:866.3},0).wait(1).to({x:225.15,y:868.05},0).wait(1).to({x:192.75,y:870.05},0).wait(1).to({x:160.15,y:872.2},0).wait(1).to({x:127.35,y:874.55},0).wait(1).to({x:94.3,y:877.1},0).wait(1).to({x:61.1,y:879.8},0).wait(1).to({x:27.7,y:882.75},0).wait(1).to({x:-5.9,y:885.85},0).wait(1).to({x:-39.75,y:889.15},0).wait(1).to({x:-73.75,y:892.65},0).wait(1).to({x:-107.95,y:896.35},0).wait(1).to({x:-142.4,y:900.25},0).wait(1).to({x:-177,y:904.3},0).wait(1).to({x:-211.85,y:908.6},0).wait(1).to({x:-246.85,y:913.05},0).wait(1).to({x:-282.1,y:917.7},0).wait(1).to({x:-317.5,y:922.5},0).wait(1).to({x:-353.15,y:927.55},0).wait(1).to({x:-389,y:932.8},0).to({_off:true},1).wait(1));

	// фон_jpg
	this.instance_3 = new lib.фон();
	this.instance_3.setTransform(0,-17,0.2691,0.334);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-173,350.1,2040.4,1287.1999999999998);
// library properties:
lib.properties = {
	id: '2B6628487162314FA3FC4A9E89A06E8C',
	width: 1210,
	height: 1279,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/птица_.png", id:"птица"},
		{src:"images/фон_.jpg", id:"фон"},
		{src:"images/Безымянный_2_HTML5 Canvas_atlas_1.png", id:"Безымянный_2_HTML5 Canvas_atlas_1"}
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
an.compositions['2B6628487162314FA3FC4A9E89A06E8C'] = {
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