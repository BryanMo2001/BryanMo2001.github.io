(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"morales_finalProject_atlas_1", frames: [[0,0,922,1152],[924,0,922,1152]]},
		{name:"morales_finalProject_atlas_2", frames: [[0,0,1151,1503]]},
		{name:"morales_finalProject_atlas_3", frames: [[0,0,922,1152],[924,0,922,1152]]},
		{name:"morales_finalProject_atlas_4", frames: [[0,0,1197,1618]]},
		{name:"morales_finalProject_atlas_5", frames: [[0,0,1196,1619]]},
		{name:"morales_finalProject_atlas_6", frames: [[0,0,1151,1503]]},
		{name:"morales_finalProject_atlas_7", frames: [[0,0,1151,1503]]}
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



(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2326,667);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2326,667);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2326,667);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2326,667);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2852,293);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3106,1542);


(lib.CachedBmp_15 = function() {
	this.initialize(ss["morales_finalProject_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["morales_finalProject_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["morales_finalProject_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["morales_finalProject_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["morales_finalProject_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["morales_finalProject_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["morales_finalProject_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["morales_finalProject_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["morales_finalProject_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.welcome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

	// sign
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-353.15,-53.15,0.2309,0.2309);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-353.65,-52.35,0.2309,0.2309);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-352.1,-52.35,0.2309,0.2309);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-353.15,-53.15,0.2309,0.2309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},6).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.6,-53.1,538.7,154.8);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
		
		function handleKeyDown(event) {
			switch (event.keyCode) {
				case 32: // spacebar
					root.frisk_mc.gotoAndPlay("standing");
			}
		}
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#67A4E0").ss(1,1,1).p("AgPAAIAfAA");
	this.shape.setTransform(-9.475,-36.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E607F8").ss(1,1,1).p("ABkAWIAgAAIAAAjIggAAgAAWg4IAAAkIBKAAIAAgkgAiCg3IAgAAIABAiIgiAAgAiDAWIAiAAIAAAjIgiAAg");
	this.shape_1.setTransform(-9.55,-54.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAlATIglAAIgkAAIAAglIBJAAg");
	this.shape_2.setTransform(11.925,-85.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3D120E").ss(1,1,1).p("AjYgrIgoAAIAAAmIgnAAIAAhOIgiAAIAAkOIAkAAIAAhMIAnAAIAAgpIAlAAIAAgmIAnAAIAAgkIFeAAIAAAlIBMAAIAAAnIAnAAIAAAlIAqAAIAABzIgrAAIAACeIgiAAIAAh4IgpAAIAAhOIgqAAIAABNIgiAAIAAhLIgrAAIAAAlIgoAAIAADEIgjAAIAAhOIglAAIAAgpIhRAAIAABRIAnAAIAAAoIAnAAIAAAnIAlAAIAABMIglAAIAABRIBOAAIAAhRIDDAAAEeieIAsAAIAAByIgsAAIAAAoIgkAAAEeieIAABNACHjDIAAAhIBLAAIAAgigAD6gsIAAAoIAAAlIieAAIAABSIAoAAIAAAnIAmAAIAABJIAAAFIAoAAIAACaIgoAAIglAAIAAAnIhNAAIAABOIAmAAIAAAqIB1AAIAAgsIAmAAIAAglIAnAAIAAgnIhNAAIAAAoIgoAAIgBhPIAAiaACqDjIglAAIgBhJABdFcIAmAAIAAhNIgkAAIgCBNIgBATAhkCWIAAgjIAoAAIAAhSIgoAAIAAgoIgqAAIAAAqIgkAAIAAgnIgmAAIAAgnIAAgDAiygEIAAgDAhkCaIAAgEIApAAIAACdIAkAAIAAApIAmAAIAAAmIBNAAIAAgTAhkCaIgBDqIAoAAIAAAlIBMAAIAAAmIgpAAIAAArIApAAIAAAmIiaAAIAAgrIglAAIAAhKIAmAAIAAkRgAAQENIgnAAIgBibIApAAIAAAoIBzAAAAQENIACAAIAAhMIAjAAIAAAnIAAADAASENIBMAAIgCglIgnAAABcFcIAAATABcFcIABAAAAPFcIBNAAAAQENIgBBP");
	this.shape_3.setTransform(-13.025,-79.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E607F8").s().p("ABkA5IAAgjIAfAAIAAAjgAiCA5IAAgjIAgAAIAAAjgAAWgUIAAgkIBJAAIABAkgAiCgVIAAgiIAgAAIAAAig");
	this.shape_4.setTransform(-9.55,-54.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67A4E0").s().p("AAVCcIgEAAIgfAAIgEAAIhOAAIAAglIgnAAIABjpIAAgFIApAAIAACcIAjAAIAAAqIAoAAIAAAlIBLAAIABgTIAAgSIAnAAIAAhOIgkAAIgCgBIgBgkIgnAAIAAgoIgiAAIAABMIgCAAIgpAAIgBibIArAAIAAAoIByAAIABBKIAlAAIAAAEIAACaIglAAIAAAngABkAmIAgAAIAAgjIggAAgAiCAmIAhAAIAAgjIghAAgAAWgnIBLAAIgBglIhKAAgAiCgoIAhAAIAAgiIghAAg");
	this.shape_5.setTransform(-9.6,-52.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC90E").s().p("AAAFgIhMAAIABhPIACAAIBLAAIABACIgCBNgAhzBRIAAhRIAmAAIAAhMIgmAAIAAgnIgnAAIAAgnIgnAAIAAhSIBRAAIAAApIAmAAIAABPIAjAAIAAjFIAnAAIAAglIArAAIAABLIAiAAIAAhMIAqAAIAABNIApAAIAAB4IAiAAIAABNIhJAAIAAAlIAlAAIAAAoIjCAAIAABRgAAri/IAAAhIBLAAIAAgig");
	this.shape_6.setTransform(-3.825,-79.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAATIgkAAIAAglIBJAAIAAAlg");
	this.shape_7.setTransform(11.925,-85.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D120E").s().p("ABeIhIAAgqIgmAAIAAhOIBNAAIAAgnIAlAAIAAiaIAoAAIAACaIgoAAIABBPIAoAAIAAgoIBNAAIAAAnIgnAAIAAAlIgmAAIAAAsgAiLIgIAAgrIglAAIAAhKIAmAAIAAkRIAmAAIgBDqIAoAAIAAAlIBMAAIAAAmIgpAAIAAArIApAAIAAAmgAAPGCIAAgmIgmAAIAAgpIgkAAIAAidIgpAAIAAgjIAoAAIAAhSIgoAAIAAgoIgqAAIAAAqIgkAAIAAgnIgmAAIAAgnIAAgDIAAADIgoAAIAAAmIgnAAIAAhOIgiAAIAAkOIAkAAIAAhMIAnAAIAAgpIAlAAIAAgmIAnAAIAAgkIFeAAIAAAlIBMAAIAAAnIAnAAIAAAlIAqAAIAABzIgrAAIAACeIgiAAIAAh4IgpAAIAAhOIgqAAIAABNIgiAAIAAhLIgrAAIAAAlIgoAAIAADEIgjAAIAAhOIglAAIAAgpIhRAAIAABRIAnAAIAAAoIAnAAIAAAnIAlAAIAABMIglAAIAABRIBOAAIAAhRIDDAAIAAgoIAkAAIAAglIAAhNIAsAAIAAByIgsAAIAAAoIgkAAIAAAlIieAAIAABSIAoAAIAAAnIAmAAIAABJIglAAIgBhJIhzAAIAAgoIgpAAIABCbIAnAAIgBBPIBNAAIAAATIAAATgAiygEIAAgDgABdFcIAChNIAkAAIAABNgAASENIAAhMIAjAAIAAAnIAAADIAAgDIAnAAIACAlgACHiiIAAghIBLgBIAAAig");
	this.shape_8.setTransform(-13.025,-79.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E907EE").ss(1,1,1).p("AAZAVIAAAfIBkAAIAAgfgAheg0IAAAgIgeAAIAAgggAheAVIAAAhIgeAAIAAghgAAYg1IBDAAIAAAiIhDAAg");
	this.shape_9.setTransform(-9.75,-57.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAhgQIhCAAIAAAhIBDAAg");
	this.shape_10.setTransform(10.725,-87.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3D120E").ss(1,1,1).p("Aikn1IAAglIFJAAIAAAmIBLAAIAAAmIAmAAIAAAkIAlAAIAABtIgkAAIgEAAAEXimIgiAAIAAhyIglAAIAAhKIgqAAIAABLIgiAAIAAhKIgpAAIAAAlIgmAAIAAC5IgiAAIAAhKIgkAAIAAglIhNAAIAABOIAlAAIAAAlIAkAAIAAAmIAnAAIAABGIgmAAIAABNIBPAAIAAhIAEXimIAkAAIABBvIglAAIAAAlIgkAAIAAglIAkAAIAAhvIAAiXAA7gRIC1AAIAAAjIiTAAIAABOIAkAAIAAAhIAAADIACAAIAjAAIAABJIAlAAIAACVIgjAAIgCAAIgjAAIAAAlIAABKIgmAAIAAAnIAkAAIAAAjIi2AAIgBhKIgmAAIAAhHIAigBIAAAjICYAAIAAglIAlAAACoFiIAAAlIglAAACmDNIAACVAjvmoIgmAAIgBBKIglAAIAAECIAmAAIAABKIAiAAIAAgmIAoAAIAAAmIAmAAIAAAkIAiAAIAAgjIAoAAIAAAkIAlAAIAABOIgmAAIAAAiAimnzIglAAIAAAlIgkAAIAAAmIAAADAheCGIgjAAIAAECIAlAAIAAkCIAAgDAA4EYIAAhvIgkAAIAABMIgqAAIAAiYIAqAAIAAAkIBtAAAA4EYIAABKIAlAAIAAhKIglAAIhMAAIAABJIghAAIAAjeIgnAAACmDNIgjAAIAAhJAgRGGIBHAAIAAggIhHAAg");
	this.shape_11.setTransform(-13.35,-79.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#67A5DF").s().p("AheCnIAAgiIgiAAIAAgBIAAkCIAAgDIAnAAIAADeIAhAAIACAEIAAAhIBIAAIAAghIACgDIAkAAIAAhKIgkAAIAAhuIgjAAIAABMIgrAAIAAiYIArAAIAAAkIBrAAIAAACIACAAIAABJIAjAAIAACVIgiAAIAAAlIgmAAIAAAkgAh8ATIAeAAIAAghIgeAAgAAYAQIBlAAIAAgeIhlAAgAAYg3IBCAAIAAgiIhCAAgAh8g4IAeAAIAAggIgeAAg");
	this.shape_12.setTransform(-9.725,-53.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E907EE").s().p("Ah8A2IAAghIAeAAIAAAhgAAZA0IAAgfIBkAAIAAAfgAAYgTIAAgiIBCAAIAAAigAh8gUIAAggIAeAAIAAAgg");
	this.shape_13.setTransform(-9.75,-57.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FECB0D").s().p("AhtFkIgDgEIAAhJIBOAAIAABKIgCADgAhwA4IAAhNIAnAAIAAhFIgnAAIAAgmIglAAIAAglIglAAIAAhOIBOAAIAAAlIAlAAIAABKIAhAAIAAi6IAmAAIAAglIAoAAIAABKIAiAAIAAhLIAqAAIAABLIAlAAIAABxIAiAAIAABwIgkAAIABAkIgDAlIAAgjIi1AAIAAADIAABHgAB0g8IBDAAIgBgiIhCAAgAAnimIBKAAIAAgmIhKAAg");
	this.shape_14.setTransform(-4.2,-79.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAEBIIAAgiIBDAAIABAigAhHghIAAgmIBJAAIAAAmg");
	this.shape_15.setTransform(6.925,-92.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D120E").s().p("Ag1IbIgBhKIglAAIAAhHIAhgBIAAAjICYAAIAAglIAlAAIAABKIgmAAIAAAnIAkAAIAAAjgAiAGIIAAkCIAiAAIACAAIAAECgACDGHIAAglIAjAAIACAAIAAAlgAgSGGIAAggIBIAAIAAAggAA4FiIAAhKIhMAAIAABJIghAAIAAjeIgnAAIAAgiIAmAAIAAhOIglAAIAAgkIgnAAIAAAjIgjAAIAAgkIglAAIAAgmIgpAAIAAAmIgiAAIAAhKIgmAAIAAkCIAlAAIABhKIAlAAIAAgmIAmAAIAAglIAkAAIACgCIAAglIFIAAIAAAmIBMAAIAAAmIAmAAIAAAkIAkAAIAABtIgkAAIgDAAIADAAIAACXIgiAAIAAhyIglAAIAAhKIgpAAIAABLIgiAAIAAhKIgpAAIAAAlIgnAAIAAC5IghAAIAAhKIgkAAIAAglIhNAAIAABOIAlAAIAAAlIAlAAIAAAmIAlAAIAABGIglAAIAABNIBPAAIAAhIIAAgDIC2AAIAAAjIiVAAIAABOIAkAAIAAAhIhsAAIAAgkIgpAAIAACYIApAAIAAhMIAkAAIAABvIAkAAIAABKgAjwmlIAAgDgACoFiIgCAAIAAiVIAlAAIAACVgACoFigACDDNIAAhJIAjAAIAABJgADzgSIgBglIAkAAIAAAlgAEWg3IAAhvIAlAAIAABvgAEWg3g");
	this.shape_16.setTransform(-13.35,-79.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E607F8").ss(1,1,1).p("ABkAWIAgAAIAAAjIggAAgAAWg4IAAAkIBKAAIAAgkgAiCg3IAgAAIAAAiIghAAgAiDAWIAhAAIAAAjIghAAg");
	this.shape_17.setTransform(-9.5,-54.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3D120E").ss(1,1,1).p("AjYgrIgoAAIAAAmIgnAAIAAhOIgiAAIAAkOIAkAAIAAhMIAnAAIAAgpIAlAAIAAgmIAnAAIAAgkIFeAAIAAAlIBMAAIAAAnIAnAAIAAAlIAqAAIAABzIgrAAIAACeIgiAAIAAh4IgpAAIAAhOIgqAAIAABNIgiAAIAAhLIgrAAIAAAlIgoAAIAADEIgjAAIAAhOIglAAIAAgpIhRAAIAABRIAnAAIAAAoIAnAAIAAAnIAlAAIAABMIglAAIAABRIBOAAIAAhRIDDAAACHjDIAAAhIBLAAIAAgigAEeieIAABNAEeieIAsAAIAAByIgsAAIAAAoIgkAAIAAAlIieAAIAABSIAoAAIAAAnIAmAAIAABJIglAAIgBhJAD6gsIAAAoACqDoIAoAAIAACaIgoAAIglAAIAAAnIhNAAIAABOIAmAAIAAAqIB1AAIAAgsIAmAAIAAglIAnAAIAAgnIhNAAIAAAoIgoAAIgBhPgACqDjIAAAFABdFcIAmAAIAAhNIgkAAIgCBNIgBATAiygEIAAgDAiygEIgmAAIAAgnIAAgDAhkCWIAAgjIAoAAIAAhSIgoAAIAAgoIgqAAIAAAqIgkAAIAAgnAhkCaIgBDqIAoAAIAAAlIBMAAIAAAmIgpAAIAAArIApAAIAAAmIiaAAIAAgrIglAAIAAhKIAmAAIAAkRIAmAAIAAgEIApAAIAACdIAkAAIAAApIAmAAIAAAmIBNAAIAAgTAAQENIgnAAIgBibIApAAIAAAoIBzAAAAQENIACAAIAAhMIAjAAIAAAnIAAADAASENIBMAAIgCglIgnAAABcFcIABAAABcFcIAAATAAPFcIBNAAAAQENIgBBP");
	this.shape_18.setTransform(-12.975,-79.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E607F8").s().p("ABkA5IAAgjIAgAAIAAAjgAiDA5IAAgjIAhAAIAAAjgAAVgUIAAgkIBLAAIAAAkgAiDgVIABgiIAgAAIAAAig");
	this.shape_19.setTransform(-9.5,-54.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#67A4E0").s().p("AAWCcIgFAAIgeAAIgFAAIhNAAIAAglIgoAAIABjpIAAgFIApAAIAACcIAkAAIAAAqIAmAAIAAAlIBNAAIAAgTIABgSIAmAAIAAhOIgkAAIgCgBIgBgkIgoAAIAAgoIghAAIAABMIgDAAIgnAAIgBibIApAAIAAAoIByAAIACBKIAlAAIAAAEIAACaIgmAAIAAAngABlAmIAfAAIAAgjIgfAAgAiCAmIAhAAIAAgjIghAAgAAWgnIBKAAIAAglIhKAAgAiCgoIAhAAIgBgiIgfAAg");
	this.shape_20.setTransform(-9.55,-53.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC90E").s().p("AAAFgIhMAAIABhOIACAAIBLAAIABABIgCBNgAhzBRIAAhRIAmAAIAAhLIgmAAIAAgoIgnAAIAAgnIgnAAIAAhSIBRAAIAAApIAmAAIAABOIAjAAIAAjEIAnAAIAAglIArAAIAABLIAiAAIAAhNIAqAAIAABPIApAAIAAB3IAiAAIAABNIhJAAIAAAmIAlAAIAAAnIjCAAIAABRgAAri/IAAAiIBLAAIAAgjg");
	this.shape_21.setTransform(-3.775,-80.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3D120E").s().p("ABeIhIAAgqIgmAAIAAhOIBNAAIAAgnIAlAAIAAiaIAoAAIAACaIgoAAIABBPIAoAAIAAgoIBNAAIAAAnIgnAAIAAAlIgmAAIAAAsgAiLIgIAAgrIglAAIAAhKIAmAAIAAkRIAmAAIgBDqIAoAAIAAAlIBMAAIAAAmIgpAAIAAArIApAAIAAAmgAAPGCIAAgmIBNAAIAAATIAAATgABdFcIAChNIAkAAIAABNgAgXFcIAAgpIgkAAIAAidIgpAAIAAgjIAoAAIAAhSIgoAAIAAgoIgqAAIAAAqIgkAAIAAgnIAAgDIAAADIgmAAIAAgnIgoAAIAAAmIgnAAIAAhOIgiAAIAAkOIAkAAIAAhMIAnAAIAAgpIAlAAIAAgmIAnAAIAAgkIFeAAIAAAlIBMAAIAAAnIAnAAIAAAlIAqAAIAABzIgrAAIAACeIgiAAIAAh4IgpAAIAAhOIgqAAIAABNIgiAAIAAhLIgrAAIAAAlIgoAAIAADEIgjAAIAAhOIglAAIAAgpIhRAAIAABRIAnAAIAAAoIAnAAIAAAnIAlAAIAABMIglAAIAABRIBOAAIAAhRIDDAAIAAgoIAkAAIAAglIAAhNIAsAAIAAByIgsAAIAAAoIgkAAIAAAlIieAAIAABSIAoAAIAAAnIAmAAIAABJIglAAIgBhJIhzAAIAAgoIgpAAIABCbIAnAAIgBBPgAjYgrIAAgDgAASENIAAhMIAjAAIAAAnIAAADIAAgDIAnAAIACAlgACHiiIAAghIBLgBIAAAig");
	this.shape_22.setTransform(-12.975,-79.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3D120E").ss(1,1,1).p("Aikn1IAAglIFJAAIAAAmIBLAAIAAAmIAmAAIAAAkIAlAAIAABtIgkAAIgEAAAEXimIgiAAIAAhyIglAAIAAhKIgqAAIAABLIgiAAIAAhKIgpAAIAAAlIgmAAIAAC5IgiAAIAAhKIgkAAIAAglIhNAAIAABOIAlAAIAAAlIAkAAIAAAmIAnAAIAABGIgmAAIAABNIBPAAIAAhIAEXimIAkAAIABBvIglAAIAAAlIgkAAIAAglIAkAAIAAhvIAAiXAA7gRIC1AAIAAAjIiTAAIAABOIAkAAIAAAhIAAADIACAAIAjAAIAABJIAlAAIAACVIgjAAIAAAlIglAAIAABKIgmAAIAAAnIAkAAIAAAjIi2AAIgBhKIgmAAIAAhHIAigBIAAAjICYAAIAAglIAlAAACoFiIgCAAIgjAAIAAAlACmDNIAACVAjvmoIgmAAIgBBKIglAAIAAECIAmAAIAABKIAiAAIAAgmIAoAAIAAAmIAmAAIAAAkIAiAAIAAgjIAoAAIAAAkIAlAAIAABOIgmAAIAAAiAimnzIglAAIAAAlIgkAAIAAAmIAAADAheCGIgjAAIAAECIAlAAIAAkCIAAgDAA4EYIAAhvIgkAAIAABMIgqAAIAAiYIAqAAIAAAkIBtAAAA4EYIAABKIAlAAIAAhKIglAAIhMAAIAABJIghAAIAAjeIgnAAACmDNIgjAAIAAhJAgRGGIBHAAIAAggIhHAAg");
	this.shape_23.setTransform(-13.35,-79.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#67A5DF").s().p("AheCnIAAgiIgiAAIAAgBIAAkBIAAgEIAnAAIAADeIAhAAIACAEIAAAhIBIAAIAAghIACgDIAkAAIAAhKIgkAAIAAhuIgjAAIAABMIgrAAIAAiZIArAAIAAAlIBrAAIAAACIACAAIAABJIAjAAIAACUIgiAAIAAAmIgmAAIAAAkgAh8ATIAeAAIAAghIgeAAgAAYAQIBlAAIAAgeIhlAAgAAYg3IBCAAIAAgiIhCAAgAh8g4IAeAAIAAggIgeAAg");
	this.shape_24.setTransform(-9.725,-53.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FECB0D").s().p("AhtFkIgDgEIAAhJIBOAAIAABKIgCADgAhwA4IAAhNIAnAAIAAhFIgnAAIAAgmIglAAIAAglIglAAIAAhOIBOAAIAAAlIAlAAIAABKIAhAAIAAi6IAmAAIAAglIAoAAIAABLIAiAAIAAhMIAqAAIAABLIAlAAIAABxIAiAAIAABwIgkAAIABAlIgDAkIAAgjIi1AAIAAADIAABHgAB0g8IBDAAIgBgiIhCAAgAAnimIBKAAIAAgmIhKAAg");
	this.shape_25.setTransform(-4.2,-79.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D120E").s().p("Ag1IbIgBhKIglAAIAAhHIAhgBIAAAjICYAAIAAglIAlAAIAABKIgmAAIAAAnIAkAAIAAAjgAiAGIIAAkCIAiAAIACAAIAAECgACDGHIAAglIAjAAIAAiVIAlAAIAACVIgjAAIgCAAIACAAIAAAlgACDGHgAgSGGIAAggIBIAAIAAAggAA4FiIAAhKIAkAAIAABKgAg1FhIAAjeIgnAAIAAgiIAmAAIAAhOIglAAIAAgkIgnAAIAAAjIgjAAIAAgkIglAAIAAgmIgpAAIAAAmIgiAAIAAhKIgmAAIAAkCIAlAAIABhKIAlAAIAAADIAAgDIAAgmIAmAAIAAglIAkAAIACgCIAAglIFIAAIAAAmIBMAAIAAAmIAmAAIAAAkIAkAAIAABtIgkAAIgDAAIADAAIAACXIAlAAIAABvIglAAIAAhvIgiAAIAAhyIglAAIAAhKIgpAAIAABLIgiAAIAAhKIgpAAIAAAlIgnAAIAAC5IghAAIAAhKIgkAAIAAglIhNAAIAABOIAlAAIAAAlIAlAAIAAAmIAlAAIAABGIglAAIAABNIBPAAIAAhIIAAgDIC2AAIAAAjIiVAAIAABOIAkAAIAAAhIhsAAIAAgkIgpAAIAACYIApAAIAAhMIAkAAIAABvIhMAAIAABJgACDDNIAAhJIAjAAIAABJgADzgSIgBglIAkAAIAAAlg");
	this.shape_26.setTransform(-13.35,-79.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:11.925,y:-85.625}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:11.925,y:-85.625}},{t:this.shape_1},{t:this.shape,p:{x:-9.475,y:-36.75}}]}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{y:-92.7}},{t:this.shape_14},{t:this.shape_13,p:{y:-57.125}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:-87.225}},{t:this.shape_9,p:{y:-57.125}}]},2).to({state:[{t:this.shape_22},{t:this.shape_7,p:{x:11.975,y:-86.325}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_2,p:{x:11.975,y:-86.325}},{t:this.shape_17},{t:this.shape,p:{x:-9.425,y:-37.45}}]},2).to({state:[{t:this.shape_26},{t:this.shape_15,p:{y:-93.05}},{t:this.shape_25},{t:this.shape_13,p:{y:-57.475}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_10,p:{y:-87.575}},{t:this.shape_9,p:{y:-57.475}}]},2).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-135.5,68.1,111.8);


(lib.trees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#411D17").s().p("AgEBvQgbgCgOgHQgNgFgTgOQgNgIgFgJQgFgIAAgVQgDgWgKgqQgKgrgCgVIgBgPIARgMIA7CSQAHAQAHAJQAJAMALADQASAEAZgVQAWgUAYgdQAOgQAaglQAGASAIAQQgKANABAfIAABHQAAAKgCAEQgFAHgRAAQgxgBgxgHg");
	this.shape.setTransform(-12.3,112.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#426377").s().p("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");
	this.shape_1.setTransform(-11.0422,-4.5125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(-14.2294,0.9493);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trees, new cjs.Rectangle(-129.8,-129.2,231.20000000000002,260.29999999999995), null);


(lib.title_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-713.05,-73.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_mc, new cjs.Rectangle(-713,-73.3,1426,146.5), null);


(lib.shop_inn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-97.9,-81.1,0.2059,0.2059);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shop_inn, new cjs.Rectangle(-97.9,-81.1,639.6999999999999,317.6), null);


(lib.savepoint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgMRKQglhmhAjNIhllFQgQg1gJgYQgQgqgTgfQg5hbh0g0QhigtiBgMQgcgCjMgIQiNgFhYgWQDDARDEhBQC+g+CdiAQCXh6BwitQBqimA6jDQAbhZAXh0QANhBAXiPIAainQA0CvAcFqQAdFrAyCtQAWBOAdA5QAjBFAxAtQA/A7BiAfQBLAYBwANQCxAVCvgFQjnBOjuAaQhtAMglAIQhRASgyAoQg0ArggBNQgWA0gVBeQhgGxg3G9QhBiBg7ipg");
	this.shape.setTransform(2.925,-20.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah8PxQg7ivhdk7QgNgsgHgWQgNgkgPgbQg7hriEg7QhvgwiVgKQhWgGixAAQicgFhmghQBLghCDgGQCzgIAhgFQCggaCph0QCxh6CDivQCCivBCjMQAghjAWh/QAOhOAUiYIAnkbQBEDKAiFnIAbEeQARCjAbB4QAVBeAcBBQAjBTA2A1QBOBLCFAgQBYAUCeAIIG/AWQhtAPjmA5QjbA2h4AOQh0AMgcAGQhPAQgvAoQguAlgcBEQgTAugSBRQhhGngxGxQgEAhgFARQgJAagQAPQhcjShakNgAu7COQDMAIAcACQCBAMBiAtQB0A0A5BbQATAfAQAqQAJAYARA1IBkFFQBBDNAkBmQA8CpBACBQA3m9BhmxQAUheAWg0QAghNA0grQAygoBRgSQAlgIBtgMQDugaDnhOQivAFiwgVQhwgNhMgYQhiggg/g6QgxgtgjhFQgdg5gWhOQgyitgdlrQgclqgzivIgbCnQgXCPgNBBQgXB0gaBZQg6DDhrCmQhvCtiXB6QidB/i/A/QjEBBjDgRQBYAWCNAFg");
	this.shape_1.setTransform(7.8,-24.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AHpKPQiaiAjAhBQi3g/jOgDQjFgCjFA1QhaAYhtArQg+AXiGA5IibBCQB4iJEkjYQEljZB5iFQA2g9Agg2QAohCANhBQARhVgahlQgThMgwhmQhNighhiTQC9CcCUC7QBEBWAaAcQA6A7A8AUQBAAWBTgOQA3gJBbggQGiiUGWi+QhKB7hwCNQhCBViNCjIjeECQgkApgPAVQgcAkgPAgQgwBhASB+QAOBqA7B0QAMAaBmCwQBGB6AcBXQhZiuifiEg");
	this.shape_2.setTransform(-1.1,-1.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AKvOqQhmiTgWgZQhrh6i+hSQjEhWjZgRQjagSjPA1QhlAZh4AwQhKAeiMA/IkDB1QCGikEejbIDmivQB/hmBZhWQBEhCAog6QA0hKAQhKQAXhrgsiCQgdhVhNiKIjbmGQBHBUCqClQCjCdBKBeQBJBcATAUQA3A7A7ATQA4ATBHgMQAygIBOgcQGaiPGKi8QAegOAQgFQAbgHAVAHQiAC+i0DbQh1COjaD2IgtA0QgYAegPAbQg8BrAVCPQASB4BGCDQApBNBeCVQBPCHAZBoQhDguhKhsgAL7PpQgchXhGh6QhmiwgMgaQg7h0gOhqQgSh+AwhhQAPggAcgkQAPgVAkgqIDekBQCNijBChVQBwiNBKh7QmWC+miCUQhbAgg3AJQhTAOhAgWQg8gUg6g7QgagchEhWQiUi7i9icQBhCTBNCgQAwBmATBMQAaBlgRBVQgNBBgoBCQggA2g2A9Qh5CFklDZQkkDYh4CJICbhCQCGg5A+gXQBtgrBagYQDFg1DFACQDOADC3A/QDABBCaCAQCfCEBZCuIAAAAg");
	this.shape_3.setTransform(-3.7,-5.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-173.1,267.9,297.5);


(lib.sans = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer_2
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(100.1,-0.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(110.35,-16.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(67.1,-16.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(100.1,-89.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(100.1,74.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},9).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.1,-89.3,641.3,915.6999999999999);


(lib.present3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AAMldMAvKAAAIAAE3EAvWgABIAAFfMgvIAAAEgvVgAsIAAkxMAu4AAAAgeFeMgu3AAAIAAla");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJOhIgHgFIgDgFIgBgEIgBgBIgBgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgCMgu2AAAIgCAAIgLgDIgGgFIgDgFIgCgEIgBgFIABgFIAAgFIACgFIAEgEIAFgEIADgBIAIAAIAAgCIACAAMAu2AAAIAAgDIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIACgFIAAgEIAAgBIACgEQgEgGABgIIABgEQgOgGgNgPQgHgHgKgQQgKgQgGgHQgNgRgYgPQgNgJgegQQhyg9hAgcIgngSQgWgKgPgKQgjgWgtg2QhUhmhBh2QgxhagMhAQgSheAkhtQAahUAuguQATgVApgaQBCgqAwABQBEABBNBMQAwAxA5BMQCDCwBPC2IAQgqQBZjTB+h6QBLhHBYgqQBggrBggCQAfAAAOAIQARAJAOAZQBGB1gGCaQgGCDhBCMQgXAygXAZQgUAVglAZQgnAbgwAaQhlA0gyAaQhXAwgzAuQggAdgqA3Qg2BDgRATQgQARgNgBIgBABIAAABIACACIAAAFIACAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFMAu3AAAIALADIAEADIACACIACAFIAEAFIAAAFIAAAEIgCAFIgCAFIgDAFIgBABIgEACIgDACIgIABMgu3AAAIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIgCAFIAAAFIAAABIgCAEIgDAFIgEAEIgFAEIgIABIgKgDgAmwqeQgJADgKAOQgWAggHAmQgIAmAGAlQALA5AwBBQBABXBTA/QAVAPA0AjQAwAgAYAUIAkAeQAWARARAKIAmATQAVAMANALQAKAJAIALQAJgIATgKQBpg6BJheQAOgTAQgXIAigwQAVgeAHgTIAEgUIAFgUQAEgLANgSQAjgzALgUQAWgvACg1QAAg2gWgvQgRgJgcAUQg9ApgqA+QgMASgQAeQgYAtgwB0QgsBnghA3QgLASgJAFQgGAFgJAAQgHABgGgFIgBAAIgPgBQgngFgpgdQgfgVglgnQgfgigRgaQgPgYgPgoIgbhEQg1h9hrhVQgSgOgMAAIgGABg");
	this.shape_1.setTransform(-0.85,-56.3753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF33FF").s().p("AAOFeIAAgBIAAgEIACgGIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEMAu3AAAIAIgCIADgCIAEgBIAAFfgEgvVAFeIAAlaMAu2AAAIAAABIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAGIAAAFIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAFIAAAGIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIACAEgEAvSgAoIgLgDMgu3AAAIAAgGIAAgEIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgGIAAgFIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgGIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgGIAAgEIAAgFIAAgFIAAgFIgCgFIAAgEIgBgDMAvJAAAIAAE3IgEgCgEgvVgArIAAkyMAu4AAAIAAAEIgCAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIAAAEIAAAGIAAAEIAAAEMgu2AAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.present3, new cjs.Rectangle(-305.5,-149.6,610.5,186.6), null);


(lib.present2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AyWgaIAAx8MAktAAAIAASDAglSXIxxAAIAAyAASXARIAASGIyJAA");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663399").s().p("AgIafIgHgIIgGgHIgCgIIACgHIAAgDIAAgFIADgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIx0AAIgPAAIgOgFIgIgIIAAgHIgCgIIACgHIAFgIIAHgFIAKAAIAAgCIAPAAIR0AAIAAgDIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgHIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIADgIIACgHIAFgFIAFgDIAJAAIAAgCIANAFIAHAHIADAIIACAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAGIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIR5AAIANAFIACACIAFAFIADAIIAAAHIgDAIIgDAHIgCACIgFADIgKADIx5AAIAAACIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIgBACIgBAFIAAAIIAAAHIgGAIIgCAFIgFACIgKADIgOgFgAgHrAQgEgDgCgDQgJgDgJgLIgOgVQgLgMgfgOQibhDiQieQg4g9g+hWQgcgkhTh1IgdgrQgPgYgHgWQgQgsAHgzQAGgvAXgtQAhhBA0gcQAhgRA6gJQBOgMA0AHQAmAFAuARQAaAKA2AaQA+AeAeAUQAqAbAZAgIAGgNIALgaQARgnAigcQAigdApgJQApgKArALQArAMAeAeQAdAcAVAzQA/CYgqDSQgRBRgbAsQgSAfgvA0Ih9CGQgUAXgKAOQgQAVgEAVQgDAcgFANQgEALgKAGQgKAHgJgDIgDgBIgCACQgIAGgIABQgIAAgHgGgAmA3aQgQACgEAJQgDAGACAMQAOBLAWApQAPAbAZAdQARAUAhAfQA9A5BEA7QAkAfALAOQArA4ADBhIAJAHQAOANAFADIAVAGIAEACQADgSAGgVQAHgWARgjQAbg4AUggIAbgqQAkg7AOhoQAHg+ABg3QgCg3gTgYQgNgCgOAHQgIAEgQALQgeAXgNAQQgPATgIAcQgFAPgFAaQAJALgCAKQgCALgLAFIgFACQgJAPgPgCQgIgBgGgKQgFgIAAgJIgKgIQgXgSgngUIhAgjQgVgMglgZIg6gmQgvgbgiAAIgKAAg");
	this.shape_1.setTransform(-1.6,-48.6756);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399FF").s().p("AAOSXIABgCIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgCIR5AAIAKgDIAFgDIAASGgAyWSXIAAyAIR0AAIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIgDAHIAAAFgASUgVIgMgFIx5AAIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIgDgHIgCgIIgIgHIgLgFIAAACIgKAAIgFADIgFAFIgDAHIgCAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAADIx0AAIAAx8MAktAAAIAASDIgDgCg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.present2, new cjs.Rectangle(-121.4,-218.6,240.9,339.9), null);


(lib.present1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AAAFoIAAloITiAAAAAAAIAAlnAzhAAIThAA");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AzhlnIThAAITiAAIAAFnIAAFoIziAAIzhAAIAAlog");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgdEdQgIgBgBgHQAAgDAEgGQgFgCgCgGQgBgEABgGQgEgJABgLQABgLAFgKIgBgFQgCgWgLgPQgJgMgXgNQgagNg2gZQgvgYgbgXQgegbggg0QgvhRABg9QABgjAOgfQANgbAUgPQAZgSAZAHQATAEATATQAQAPAXAeIBtCLQAUAaAQAJQAOAHACADIACACIABgDQARgnApg0QA+hPA4gbQAkgRAqgFQAbgCANAHQAPAGAMAVQAgA1ABBhQABApgKAZQgFANgQAWIgNAUQgNAVgIAKQgNAPgPAIQgIAFgNAEIgXAHQgLAFgSAIIgcAOQgWAJgoAJQguALgQAGQgaAIgLANQgHAGgEAIIgBAbQAJAEADAFQADAEABAEQAAAGgDADQgCADgFAAIgDAHQgDAEgGAAIgEgBgAihgOQASAOAhAYIA0AoIAcAYQAQANAOAHQAGgEAMgPQALgNAIgFQAIgFAUgDQAdgEAUgJQAqgSAggqQAYghAVg0QAVg1gKgfQhqA7g+BoIgNAUQgIAKgKAGQgMAGgQgBQgSgBgXgIQgOgGgagNQg2gdgbgXIgpglQgagVgWgGQAPA2A6Azg");
	this.shape_2.setTransform(2.9537,-66.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAAFoIAAloITiAAIAAFogAAAFoIzhAAIAAloIAAlnIThAAITiAAIAAFnIziAAIAAlnIAAFnIzhAAIThAAIAAFogAAAAAgAAAAAg");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.present1, new cjs.Rectangle(-126.9,-94.8,253.9,132.8), null);


(lib.heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AEd0BIpCAAIAApkIksAAIAAk8IpTAAIAAlAIorAAIAAE0IkjAAIAAE0Ik1AAMAAAAn5IJOAAIAAJ6IJLAAIAAKKIJRAAIAAKIISAAAIAAp+IJRAAIAAqXII5AAIAApeIJbAAMAAAgoOIkmAAIAAk0IkjAAIAAliIo4AAIAAFaIpFAAIAAE4Ik4AAIAAJ4");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgI9AoMIAAqIIpRAAIAAqKIpLAAIAAp6IpOAAMAAAgn5IE1AAIAAk0IEjAAIAAk0IIrAAIAAFAIJTAAIAAE8IEsAAIAAJkIJCAAIANAAIAAp3IE4AAIAAk5IJFAAIAAlaII4AAIAAFiIEjAAIAAE0IEmAAMAAAAoNIpbAAIAAJfIo5AAIAAKXIpRAAIAAJ+g");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0000FF").ss(4,1,1).p("AEd0BIpCAAIAApkIksAAIAAk8IpTAAIAAlAIorAAIAAE0IkjAAIAAE0Ik1AAMAAAAn5IJOAAIAAJ6IJLAAIAAKKIJRAAIAAKIISAAAIAAp+IJRAAIAAqXII5AAIAApeIJbAAMAAAgoOIkmAAIAAk0IkjAAIAAliIo4AAIAAFaIpFAAIAAE4Ik4AAIAAJ4");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000CC").s().p("EgI9AoMIAAqIIpRAAIAAqKIpLAAIAAp6IpOAAMAAAgn5IE1AAIAAk0IEjAAIAAk0IIrAAIAAFAIJTAAIAAE8IEsAAIAAJkIJCAAIANAAIAAp3IE4AAIAAk5IJFAAIAAlaII4AAIAAFiIEjAAIAAE0IEmAAMAAAAoNIpbAAIAAJfIo5AAIAAKXIpRAAIAAJ+g");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0000FF").ss(4,1,1).p("AEy1eIptAAIAAqRIlBAAIAAlTIp/AAIAAlYIpTAAIAAFLIk5AAIAAFKIlLAAMAAAAq0IJ5AAIAAKoIJ2AAIAAK6IJ8AAIAAK3ITVAAIAAqtIJ8AAIAArHIJiAAIAAqLIKHAAMAAAgrJIk7AAIAAlKIk4AAIAAl9IpiAAIAAFzIpwAAIAAFQIlPAAIAAKm");
	this.shape_4.setTransform(0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000CC").s().p("EgJnArHIAAq2Ip8AAIAAq6Ip2AAIAAqoIp5AAMAAAgq0IFLAAIAAlKIE5AAIAAlKIJTAAIAAFXIJ/AAIAAFUIFBAAIAAKQIJtAAIANAAIAAqmIFPAAIAAlQIJwAAIAAlyIJiAAIAAF8IE4AAIAAFLIE7AAMAAAArIIqHAAIAAKKIpiAAIAALIIp8AAIAAKsg");
	this.shape_5.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.4,-277.9,506.9,555.9);


(lib.christmastree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32));

	// Layer_2
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-138,-127.7,0.1873,0.1873);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-138,-127.7,0.1873,0.1873);

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(-138,-127.7,0.1873,0.1873);

	this.instance_3 = new lib.CachedBmp_11();
	this.instance_3.setTransform(-136.5,-128.3,0.1873,0.1873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},8).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-128.3,174.2,216.4);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.shop_mc.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.youtube.com/watch?v=NxYPcj5AxG4", "_blank");
		}
		
		this.background_mc.goldPres_mc.addEventListener("click",handleClickPresent);
		
		function handleClickPresent(event){
			root.background_mc.goldPres_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sans
	this.sans_mc = new lib.sans();
	this.sans_mc.name = "sans_mc";
	this.sans_mc.setTransform(5564,-214.7,0.3064,0.3064,0,0,0,387.9,375.2);

	this.timeline.addTween(cjs.Tween.get(this.sans_mc).wait(1));

	// sign
	this.sign_mc = new lib.welcome();
	this.sign_mc.name = "sign_mc";
	this.sign_mc.setTransform(899.1,-613.4,2.1651,2.1651,0,0,0,-84.6,23.7);

	this.timeline.addTween(cjs.Tween.get(this.sign_mc).wait(1));

	// christmas_tree
	this.christmas_mc = new lib.christmastree();
	this.christmas_mc.name = "christmas_mc";
	this.christmas_mc.setTransform(4761.6,-622.1,2.6696,2.6696,0,0,0,-51.9,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.christmas_mc).wait(1));

	// presents
	this.instance = new lib.present1();
	this.instance.setTransform(4955.65,-160.75,1,1,0,0,0,0,-28.4);

	this.instance_1 = new lib.present3();
	this.instance_1.setTransform(4301.5,-239.25,0.4641,0.4641,0,0,0,-0.2,-56.4);

	this.instance_2 = new lib.present2();
	this.instance_2.setTransform(5416.15,-612.25,0.6358,0.6358,0,0,0,-1,-48.7);

	this.instance_3 = new lib.present3();
	this.instance_3.setTransform(4324.85,-521.2,0.4641,0.4641,0,0,0,-0.2,-56.4);

	this.instance_4 = new lib.present2();
	this.instance_4.setTransform(5263.75,-254.6,0.6358,0.6358,0,0,0,-1,-48.7);

	this.instance_5 = new lib.present1();
	this.instance_5.setTransform(4616.2,-213.85,1,1,0,0,0,0,-28.4);

	this.instance_6 = new lib.present1();
	this.instance_6.setTransform(5292.85,-398.2,1,1,0,0,0,0,-28.4);

	this.instance_7 = new lib.present3();
	this.instance_7.setTransform(4576.5,-450.25,0.4641,0.4641,0,0,0,-0.2,-56.4);

	this.instance_8 = new lib.present2();
	this.instance_8.setTransform(5004.8,-554.4,0.6358,0.6358,0,0,0,-1,-48.7);

	this.instance_9 = new lib.present1();
	this.instance_9.setTransform(5008.3,-427.05,1,1,0,0,0,0,-28.4);

	this.instance_10 = new lib.present3();
	this.instance_10.setTransform(4807.8,-300.35,0.4641,0.4641,0,0,0,-0.2,-56.4);

	this.instance_11 = new lib.present2();
	this.instance_11.setTransform(4576.85,-554.4,0.6358,0.6358,0,0,0,-1,-48.7);

	this.instance_12 = new lib.present3();
	this.instance_12.setTransform(5170.3,-521.2,0.4641,0.4641,0,0,0,-0.2,-56.4);

	this.instance_13 = new lib.present2();
	this.instance_13.setTransform(5057.45,-320.05,0.6358,0.6358,0,0,0,-1,-48.7);

	this.instance_14 = new lib.present1();
	this.instance_14.setTransform(4502.15,-361.65,1,1,0,0,0,0,-28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// save
	this.save_mc = new lib.savepoint();
	this.save_mc.name = "save_mc";
	this.save_mc.setTransform(2647.6,-316.8,0.3824,0.3824);

	this.timeline.addTween(cjs.Tween.get(this.save_mc).wait(1));

	// shop
	this.shop_mc = new lib.shop_inn();
	this.shop_mc.name = "shop_mc";
	this.shop_mc.setTransform(2761.4,-654.65,2.4277,2.4277,0,0,0,221.8,77.7);

	this.timeline.addTween(cjs.Tween.get(this.shop_mc).wait(1));

	// trees
	this.instance_15 = new lib.trees();
	this.instance_15.setTransform(5321.85,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_16 = new lib.trees();
	this.instance_16.setTransform(5644.45,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_17 = new lib.trees();
	this.instance_17.setTransform(5590.5,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_18 = new lib.trees();
	this.instance_18.setTransform(5399.95,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_19 = new lib.trees();
	this.instance_19.setTransform(5474.95,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_20 = new lib.trees();
	this.instance_20.setTransform(5243.8,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_21 = new lib.trees();
	this.instance_21.setTransform(5043.85,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_22 = new lib.trees();
	this.instance_22.setTransform(5128.2,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_23 = new lib.trees();
	this.instance_23.setTransform(4897.05,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_24 = new lib.trees();
	this.instance_24.setTransform(4531.65,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_25 = new lib.trees();
	this.instance_25.setTransform(4790.85,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_26 = new lib.trees();
	this.instance_26.setTransform(4615.9,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_27 = new lib.trees();
	this.instance_27.setTransform(4416.05,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_28 = new lib.trees();
	this.instance_28.setTransform(4269.2,-878.75,1,1,0,0,0,-14.2,1);

	this.instance_29 = new lib.trees();
	this.instance_29.setTransform(4128.6,-910,1,1,0,0,0,-14.2,1);

	this.instance_30 = new lib.trees();
	this.instance_30.setTransform(4013,-910,1,1,0,0,0,-14.2,1);

	this.instance_31 = new lib.trees();
	this.instance_31.setTransform(3966.2,-910,1,1,0,0,0,-14.2,1);

	this.instance_32 = new lib.trees();
	this.instance_32.setTransform(3897.45,-910,1,1,0,0,0,-14.2,1);

	this.instance_33 = new lib.trees();
	this.instance_33.setTransform(3781.85,-910,1,1,0,0,0,-14.2,1);

	this.instance_34 = new lib.trees();
	this.instance_34.setTransform(3666.25,-910,1,1,0,0,0,-14.2,1);

	this.instance_35 = new lib.trees();
	this.instance_35.setTransform(3550.7,-910,1,1,0,0,0,-14.2,1);

	this.instance_36 = new lib.trees();
	this.instance_36.setTransform(3435.1,-910,1,1,0,0,0,-14.2,1);

	this.instance_37 = new lib.trees();
	this.instance_37.setTransform(3291.4,-910,1,1,0,0,0,-14.2,1);

	this.instance_38 = new lib.trees();
	this.instance_38.setTransform(3175.8,-910,1,1,0,0,0,-14.2,1);

	this.instance_39 = new lib.trees();
	this.instance_39.setTransform(2713.5,-910,1,1,0,0,0,-14.2,1);

	this.instance_40 = new lib.trees();
	this.instance_40.setTransform(3060.25,-910,1,1,0,0,0,-14.2,1);

	this.instance_41 = new lib.trees();
	this.instance_41.setTransform(2944.65,-910,1,1,0,0,0,-14.2,1);

	this.instance_42 = new lib.trees();
	this.instance_42.setTransform(2788.45,-910,1,1,0,0,0,-14.2,1);

	this.instance_43 = new lib.trees();
	this.instance_43.setTransform(2597.95,-910,1,1,0,0,0,-14.2,1);

	this.instance_44 = new lib.trees();
	this.instance_44.setTransform(2254.3,-910,1,1,0,0,0,-14.2,1);

	this.instance_45 = new lib.trees();
	this.instance_45.setTransform(2485.45,-910,1,1,0,0,0,-14.2,1);

	this.instance_46 = new lib.trees();
	this.instance_46.setTransform(2326.15,-910,1,1,0,0,0,-14.2,1);

	this.instance_47 = new lib.trees();
	this.instance_47.setTransform(2138.75,-910,1,1,0,0,0,-14.2,1);

	this.instance_48 = new lib.trees();
	this.instance_48.setTransform(2023.15,-910,1,1,0,0,0,-14.2,1);

	this.instance_49 = new lib.trees();
	this.instance_49.setTransform(1930.5,-910,1,1,0,0,0,-14.2,1);

	this.instance_50 = new lib.trees();
	this.instance_50.setTransform(1804.45,-910,1,1,0,0,0,-14.2,1);

	this.instance_51 = new lib.trees();
	this.instance_51.setTransform(1480.7,-910,1,1,0,0,0,-14.2,1);

	this.instance_52 = new lib.trees();
	this.instance_52.setTransform(1699.35,-910,1,1,0,0,0,-14.2,1);

	this.instance_53 = new lib.trees();
	this.instance_53.setTransform(1573.3,-910,1,1,0,0,0,-14.2,1);

	this.instance_54 = new lib.trees();
	this.instance_54.setTransform(1399.5,-910,1,1,0,0,0,-14.2,1);

	this.instance_55 = new lib.trees();
	this.instance_55.setTransform(1249.55,-910,1,1,0,0,0,-14.2,1);

	this.instance_56 = new lib.trees();
	this.instance_56.setTransform(1077.75,-910,1,1,0,0,0,-14.2,1);

	this.instance_57 = new lib.trees();
	this.instance_57.setTransform(962.15,-910,1,1,0,0,0,-14.2,1);

	this.instance_58 = new lib.trees();
	this.instance_58.setTransform(846.6,-910,1,1,0,0,0,-14.2,1);

	this.instance_59 = new lib.trees();
	this.instance_59.setTransform(690.4,-910,1,1,0,0,0,-14.2,1);

	this.instance_60 = new lib.trees();
	this.instance_60.setTransform(531.15,-910,1,1,0,0,0,-14.2,1);

	this.instance_61 = new lib.trees();
	this.instance_61.setTransform(384.3,-910,1,1,0,0,0,-14.2,1);

	this.instance_62 = new lib.trees();
	this.instance_62.setTransform(268.7,-910,1,1,0,0,0,-14.2,1);

	this.instance_63 = new lib.trees();
	this.instance_63.setTransform(153.15,-910,1,1,0,0,0,-14.2,1);

	this.instance_64 = new lib.trees();
	this.instance_64.setTransform(37.55,-910,1,1,0,0,0,-14.2,1);

	this.instance_65 = new lib.trees();
	this.instance_65.setTransform(5644.45,-964.4,1,1,0,0,0,-14.2,1);

	this.instance_66 = new lib.trees();
	this.instance_66.setTransform(5631.1,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_67 = new lib.trees();
	this.instance_67.setTransform(5474.95,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_68 = new lib.trees();
	this.instance_68.setTransform(5043.85,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_69 = new lib.trees();
	this.instance_69.setTransform(5243.8,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_70 = new lib.trees();
	this.instance_70.setTransform(5359.35,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_71 = new lib.trees();
	this.instance_71.setTransform(5128.2,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_72 = new lib.trees();
	this.instance_72.setTransform(4928.3,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_73 = new lib.trees();
	this.instance_73.setTransform(4812.7,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_74 = new lib.trees();
	this.instance_74.setTransform(4697.15,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_75 = new lib.trees();
	this.instance_75.setTransform(4581.55,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_76 = new lib.trees();
	this.instance_76.setTransform(4500.35,-1008.9,1,1,0,0,0,-14.2,1);

	this.instance_77 = new lib.trees();
	this.instance_77.setTransform(4384.75,-1008.9,1,1,0,0,0,-14.2,1);

	this.instance_78 = new lib.trees();
	this.instance_78.setTransform(4244.15,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_79 = new lib.trees();
	this.instance_79.setTransform(4197.35,-980.8,1,1,0,0,0,-14.2,1);

	this.instance_80 = new lib.trees();
	this.instance_80.setTransform(4128.6,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_81 = new lib.trees();
	this.instance_81.setTransform(4013,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_82 = new lib.trees();
	this.instance_82.setTransform(3881.8,-1008.9,1,1,0,0,0,-14.2,1);

	this.instance_83 = new lib.trees();
	this.instance_83.setTransform(3388.25,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_84 = new lib.trees();
	this.instance_84.setTransform(3175.8,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_85 = new lib.trees();
	this.instance_85.setTransform(3550.7,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_86 = new lib.trees();
	this.instance_86.setTransform(3781.85,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_87 = new lib.trees();
	this.instance_87.setTransform(3666.25,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_88 = new lib.trees();
	this.instance_88.setTransform(3422.6,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_89 = new lib.trees();
	this.instance_89.setTransform(2672.85,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_90 = new lib.trees();
	this.instance_90.setTransform(2829.1,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_91 = new lib.trees();
	this.instance_91.setTransform(3241.4,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_92 = new lib.trees();
	this.instance_92.setTransform(3060.25,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_93 = new lib.trees();
	this.instance_93.setTransform(2944.65,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_94 = new lib.trees();
	this.instance_94.setTransform(2750.95,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_95 = new lib.trees();
	this.instance_95.setTransform(2557.3,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_96 = new lib.trees();
	this.instance_96.setTransform(2138.75,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_97 = new lib.trees();
	this.instance_97.setTransform(2441.7,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_98 = new lib.trees();
	this.instance_98.setTransform(2254.3,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_99 = new lib.trees();
	this.instance_99.setTransform(2070,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_100 = new lib.trees();
	this.instance_100.setTransform(1804.45,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_101 = new lib.trees();
	this.instance_101.setTransform(1596.25,-1079.95,1,1,0,0,0,-14.2,1);

	this.instance_102 = new lib.trees();
	this.instance_102.setTransform(1930.5,-1008.9,1,1,0,0,0,-14.2,1);

	this.instance_103 = new lib.trees();
	this.instance_103.setTransform(1699.35,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_104 = new lib.trees();
	this.instance_104.setTransform(1249.55,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_105 = new lib.trees();
	this.instance_105.setTransform(1515.05,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_106 = new lib.trees();
	this.instance_106.setTransform(1365.1,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_107 = new lib.trees();
	this.instance_107.setTransform(1152.7,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_108 = new lib.trees();
	this.instance_108.setTransform(846.6,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_109 = new lib.trees();
	this.instance_109.setTransform(1037.15,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_110 = new lib.trees();
	this.instance_110.setTransform(921.55,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_111 = new lib.trees();
	this.instance_111.setTransform(731,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_112 = new lib.trees();
	this.instance_112.setTransform(615.45,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_113 = new lib.trees();
	this.instance_113.setTransform(499.85,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_114 = new lib.trees();
	this.instance_114.setTransform(384.3,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_115 = new lib.trees();
	this.instance_115.setTransform(268.7,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_116 = new lib.trees();
	this.instance_116.setTransform(153.15,-1040.15,1,1,0,0,0,-14.2,1);

	this.instance_117 = new lib.trees();
	this.instance_117.setTransform(37.55,-1040.15,1,1,0,0,0,-14.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7483B2").s().p("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");
	this.shape.setTransform(2729.5429,-482.4667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7483B2").s().p("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");
	this.shape_1.setTransform(2783.0955,-1027.422);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85A2D8").s().p("EnB/A9LMAAAhxZQDnBJD7AUQHQAmGpiaQBggjC/hKQCng4CAADQB2AECeA4QBZAgCyBGQDDBEECAfQCcATE1AOQJsAdE8gDQIHgGGYhMQBygVDmgyQDNgpCNgMQDigSEmAjQBlAMGhBEQGuBHFhAdQGkAiFwgSQDFgKHvg4QG3gxD9gEQD4gDFgAfQDIASGQAoQFdAeD4gFQFBgFELg+QBhgWCjgxQC+g4BFgSQEyhQDZAbQBpAMChAyQDTBAA1AMQEEA9GdgZQBygHDjgRQDJgNCMADQCMADDCAVQBvAMDfAaQGZAuD/gkQBdgNB9gdQBHgRCQglQEKhCCoAAQB3gBC1AfQEEArAmAFQE9AlHOhFQBLgLE7g1QDugpCXgRQDigaEegHQCrgEFWADQI2AEEfAMQHYAUF3A5QCFAUE/A7QEiA2CjAWQIOBIF3hQQCEgcCzg9QBngjDMhJQF3iAD6AIQB4ADCRAhQBYATCtAyQCtAyBYATQCRAhB4AEQCAAEEhgrQEMgnCUAOQCAAMCiA1QAvAPDsBZQCrBBBvAaQCcAkCGgNQCIgNCdhGQBdgqC0hpQC3hpBdgqQCchGCJgPQBygMCIAXQBfAQCXAsQDLA7AsALQCNAiBuAGQCrAIDUg4QBngbENheQCBguBPgSQB0gbBiAGQBaAGB6ApQBFAXCKAzQFZB0HJgQQEcgKIWhUIAagEQAPADAQABQBJADBMhDQAXgMAUgNQBUg4APhGQAXgXATgOQCGhmDiAoQCDAXEHBVQCdAqDLAKQB9AGDxgGIMIgSQC7gFBgAFQCdAIB6AgQBaAZClBIQCrBKBUAZQDWA/ECgVQDEgQEahJQChgqFDhYQEZhGDOgKQDxgMFcA9QA2AKDuAuQCzAjByARQF2A3F9gWQF7gVFuhgQC8gxBGgKQCTgUBrAnQBMAbBXBGQAzApBhBUQDfCyE+BHQEWA/FHgZQDygSFjhLIJQh9QCJgaBZgEQB9gGBjAdQBMAWCMBNQCKBNBNAWQCsAyDWg/QCZgtDah4QBhg2AzgUQBVgiBJACQA4ABBKAaQArAOBTAhQC8BFEBAKQB1AFFWgMQBfgDA1AHQBSALA2AkQAqAdAvA9IBOBlQBhBtCjAxQCKAqCtgEQBOgCDpgYQDDgUB0AHQCiAIEeBPQEzBVCMAOQEnAfFghmQDuhGF8itQBigtA2gPQBXgaBHAMQBIALBXA6QAyAgBhBFQDMB9EfgPQDngMEahmQBHgaCthEQCbg+BZgfQEehjDagDIBOAAQAiAjA5AWQBvAqB9gZQBLgQCZgrQCEgeBcAcQBqCoDPBjQC3BXDiASQCrAND5gZQCNgNEYgeQBjgHEHgIIAygCIAAANIAAAOIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAOMAAABo5g");
	this.shape_2.setTransform(2880,-391.4634);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-193.8,-1382.1,5953.8,1382.1), null);


// stage content:
(lib.morales_finalProject = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndPlay(1);
		}
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1")
			root.line01_txt.text = line01;
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.frisk_mc.currentFrame ==9){
				root.frisk_mc.gotoAndPlay("walking");
			}
			
			if (event.keyCode == 39 && root.background_mc.x > -2940) {
				root.frisk_mc.scaleX = 2.6534;
				root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x <960) {
				root.frisk_mc.scaleX = -2.6534;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.frisk_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.save_mc.addEventListener("click",handleClickSave);
		
		function handleClickSave(event){
			var ping_snd = createjs.Sound.play("ping");
			root.background_mc.save_mc.play();
		}
		
		this.background_mc.sans_mc.addEventListener("click",handleClickSans);
		
		function handleClickSans(event){
			var talking_snd = createjs.Sound.play("talking");
			root.background_mc.sans_mc.play();
		}
		
		this.background_mc.sign_mc.addEventListener("click",handleClickSign);
		
		function handleClickSign(event){
			var jingles_snd = createjs.Sound.play("jingles");
			root.background_mc.sign_mc.play();
		}
		
		this.background_mc.christmas_mc.addEventListener("click",handleClickChristmas);
		
		function handleClickChristmas(event){
			var snowdin_snd = createjs.Sound.play("snowdin");
			root.background_mc.christmas_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(960,330.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// button
	this.toFrame02_btn = new lib.heart();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(960,742.25,0.3989,0.3989);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.heart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.toFrame02_btn).to({_off:true},1).wait(1));

	// walking
	this.frisk_mc = new lib.walking();
	this.frisk_mc.name = "frisk_mc";
	this.frisk_mc.setTransform(551.95,833.9,1.6569,1.6569,0,0,0,-13,-79.2);
	this.frisk_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.frisk_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiWoBWFMAAAisJMEtQAAAMAAACsJg");
	this.shape.setTransform(960,540.025);

	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(960,540,1,1,0,0,0,960,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.background_mc}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(766.2,237.9,4993.8,853.0000000000001);
// library properties:
lib.properties = {
	id: '0E337FF3DA4A43F9BE140F6749B862C0',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_10.png?1716178264843", id:"CachedBmp_10"},
		{src:"images/CachedBmp_3.png?1716178264843", id:"CachedBmp_3"},
		{src:"images/CachedBmp_9.png?1716178264843", id:"CachedBmp_9"},
		{src:"images/CachedBmp_2.png?1716178264843", id:"CachedBmp_2"},
		{src:"images/CachedBmp_6.png?1716178264843", id:"CachedBmp_6"},
		{src:"images/CachedBmp_1.png?1716178264843", id:"CachedBmp_1"},
		{src:"images/morales_finalProject_atlas_1.png?1716178264781", id:"morales_finalProject_atlas_1"},
		{src:"images/morales_finalProject_atlas_2.png?1716178264781", id:"morales_finalProject_atlas_2"},
		{src:"images/morales_finalProject_atlas_3.png?1716178264781", id:"morales_finalProject_atlas_3"},
		{src:"images/morales_finalProject_atlas_4.png?1716178264781", id:"morales_finalProject_atlas_4"},
		{src:"images/morales_finalProject_atlas_5.png?1716178264781", id:"morales_finalProject_atlas_5"},
		{src:"images/morales_finalProject_atlas_6.png?1716178264781", id:"morales_finalProject_atlas_6"},
		{src:"images/morales_finalProject_atlas_7.png?1716178264781", id:"morales_finalProject_atlas_7"},
		{src:"sounds/jingles.mp3?1716178264843", id:"jingles"},
		{src:"sounds/talking.mp3?1716178264843", id:"talking"},
		{src:"sounds/snowdin.mp3?1716178264843", id:"snowdin"},
		{src:"sounds/ping.mp3?1716178264843", id:"ping"},
		{src:"sounds/damage.mp3?1716178264843", id:"damage"}
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
an.compositions['0E337FF3DA4A43F9BE140F6749B862C0'] = {
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