(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"morales_newHaiku_atlas_1", frames: [[0,0,861,97]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["morales_newHaiku_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glass
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(12,1,1).p("AAPuSIdJAAIAAOrIAAOsI9JAAI9IAAIAAusIAAurIdIAAIAAOrIAAOsAAPAZIdJAAEggVgRuMBArAAAMAAAAjdMhArAAAgA85AZIdIAA");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("EggVARvMAAAgjdMBArAAAMAAAAjdgA85AZIAAOsIdIAAIdJAAIAAusIAAurI9JAAI9IAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.window, new cjs.Rectangle(-212.9,-119.5,425.9,239), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rays
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(8,1,1).p("ALF4gQA/gQAohBQAWgmADgDQAPgSARAAQCXAoAEAAQBFAABohLQAZgTAtghQAjgXARAAAVtxAIAAAyIBGAAQA7geAngxQAggpAAAAQAFAABIBLQBSBLAuAAQAKAAAIgIQAEgFALgMQAZgXA5AIADb5IQAGh/ASg0QAihjBcAIQBKAFBEiAQANgZAghHQAXgzAKgKAW9iUQBigBBXhBQAVgPAggdQAWgUAFAAQAiAAAGAHQAEAQAFAPQAZBJChBrAZJIbQADgCADgDQAVgSA6gXQA/gYAWAAQAlAABMBPQBNBQAAApALFWpQgGAMgOAMQgHAGgNAKQAOAVAwCDQApBzAvCPIAABuIgoAAAUdO1IAKAAQACAzAkAHQAVAFApgDQAAAOAVAhQAMAVAgAyQBBBqAABCQgKAAgKAKEgFUgiCQgcAPgVAiQgVAhAAAcQAAAoAWARQAfAQARAKQBGApAACmA2KtuQhliXgkjgQgZieAMh1Aqo5cIAKAAQAAgQgehbQgehbAAgRQAAgpAZhGQAZhHAAgNAxU0wIAUAAQAAhOgjhJQgjhIAAgqQAAhXAeijQAeiiAAgXA2yJ/QgKAAgIgFQgJgFgNAAQhBAAglA/QgXApgWBgQgYBpgOAhQgdA+gzAAQADAAACABQgBAOgfgNQgSgHgegPAtwVPQgHgCgdgUQgmgSg7AAQguAAgsAyQgeAigqBMQgwBXgRAXQgkAyggAAQgMAAgFgEQgHgFhCg9ApOYhIhGAAQgKAUgBBSQgBB6gCAhQgPDLhvAAQhQgUg8geAgoaPQgSAbgFANQgHATAAAfQAAAHAPBGQAPBRAAA5QAABugZAmQgPAWg8AZA28CfQAFhdhug/Qg2geg4gNQgCAAhhAsQhoAtgqAAQAAgigUhVQgUhWAAgMA7eQGQALABgEAIQgHALAAgUg");
	this.shape.setTransform(-6.925,12.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF33").ss(8,1,1).p("AJm6EQAdh5AHh1QAHgjASgRQAUgSAxgMQAygNA1hdQA3hhgSg5ASg0cQAKgGBHgvQApgbANAAQC0AoAKAAQBaAAArgpQAMgLAWgWQAVgSAbgIAaKneQAkgRAzhAQAvg7AGAAQAnAABMA3QAmAbAgAcQAqAAAqgeQBchBAJgFAgP7KQhHgLgVgUQgIgHAAgRQAAgYAjgaQAJgHBCgqQBthFAAhDQAAgOg2hWQg5hcgIgcAYwENQBshBBSg6QApgbA7AAQAbAAA1A8QAZAcBLAtQA4AqgaAtIAUAKQAFgLAPgXQAXghAbgXAVeLFIC+BGQALAFAGAVQAMAtAVAxQANAdAUAPQALAIAVAKQAjATAABPQAJgCAYgPQAhgUAYgNAEcYXQgNAKgMABQgFACAAAgQAAALAeCQQAeCPAAAWQAAAZgUCMIAoAAAT/cbQACgJABgLQAAACAAADQgBAHgCAIQgFAVgKATIAAAKQAIgQAHgigAPsUJQCKCGBKCBQBEB3AABYQAAAYgCAQA01xAQgThDgugyQgogrgZAAQgKAAgoAPQgpAPgJAAQglAAgwg0QgkgmgJgUA6elUQgJg0gsgsQgqgqgiAAQgUAAgmAjQgnAjg1AAQgCAAg+gtQhMgthGAAIAAgKAoN56IAAAKIg8AAQgPgigPguQAAgDAPgyQAPgzAAgBQAAgjgRgqQgLgagjhEQhbisg4iiAu70wQihgkgYidQgHgzAGhQQAIhpAAgGQAAgcAAgpQAAgcgIgNQgRgZhfAAIAAgKA6JVtQBYgTATgyQAHgTACgjQACgqACgZQAMABA1AUQAyATAPAAQAUgWAWgXQArgtAtAAIAAAKAv3clQAVk2BmgbQAcgIA5ANQA0AMAUgKAjhajQgsAWgLAJQgRAMgFAUQgGAdgHCeQgSDChVBnQgXAeglAdQggAagFAIEggZAKxQBXj4BkgBQANAABCARQAtALAdgT");
	this.shape_1.setTransform(-1.425,10.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF33").ss(8,1,1).p("AGP7UQgsgWgZgVQgzgpAAguQAAgtBGhaQBGhaAAgtQAAgkg1grQgpgggagJAMB2oQAagKAQgfQAJgSAQgqQAihPBZAAQBnAAAehBQARglAAhsAZTq6IAKAAQBTjmBehBQA3gmBiANIAAhkAbzAJQA2hQAngqQAggjAPAAQAWAABQA9QBiBLBGAfQALgTAchKQAbhEAEgGAZdJrQAQAAAigKQAhgKAMAAQAcAACECgQCFCgAbAAQACAABagjQBbgjAMAAACzajIg8AAQgpAzgLBIQgFAggBBeQAABNgOAqQgUA+g5AoAIbZnIAygeIAyAAQAAADAFAsQAFAsAAAOQAAAygjBtQgRA2gSAvQAAAoADACQAFAFAqAIAUdS5QAOgUAPgMQAMgKAJgSQA2BeBACrQA9CjABACEgNIghGIAUAAQgFBEgZChQgUB+AAB9QAAAIAKBFQAKBEAAAjEgF8gkYQAeAwArA8QAtA+ATAbQA/BcAAA9QAABKgNAlQgjBTgqB+EggAgMAIAAAKIAyAAQA9gfAvgrQAjgkACAAQAWAAALATQAMAaAIAPQAgA8BkAAQAfgFAiAFQBFAKAkAyA2U1YQACgDACgCQAyg8ALgLQAOgOALAAQArAAAXAyQAPAkAJAVQASAoAWAhA+cSRQATgKAcg7QAihQAUgrQBOioBRAAQA8AAAxgnQAygxAVgWA2KeTQBxicA7iSQA5imAphmQAJAAALAKQAMAKANAAQAPAAAKgNQAKgNAyhUEgKyAkZQAnhzAlhdQAjhTALgcQAchJAAiKQgPhBgPhKQgeiTAAg2IgKAAEgjSAIRQAOgUBUiDQA4hZAQAAQAUAAATAPQATAPAWAAQANAAAKgJQAKgNAGgIQAbgeBAAA");
	this.shape_2.setTransform(-2.925,7.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFF33").ss(8,1,1).p("ATmugQAihmAoh9QAbhOAPgYQAOgXAZgBQARgBA1AEQBkAABOhlQA0hDAZhSAK23aQBGgrAdhOQANgiAHgJQAOgRAbABQAAghAeicQAeidAAhAAcWjQQAHg+AVgPQALgIALAFQBdAAB2A3QB2A3BWAAQBEAAAahRQAGgTAKgvQAIgnAHgOAbkE/QAUgEApgNQAmgNABAAQAIAAAmAmQAWAWA8A8QB6B4AtAAQAlAAA+glQA8glA4g4AZESHQADgeAWgxQAUgqAZgnQAlAfAUCBQAEAcATDAQADAAAHAFQAGAFAOAAQBzhNAjg/AIWZ7IgUAAQAcCUhLC5QgTAvgiBQQgYA/AEAlANqXlIAKAUQBIgeADAAQBEAAAbCiQAVB9gLCFIA8AAQANgKAHgHQAOgOAGgTAiR56QAfgGAygjQA0gmAug0QB4iFAAh0QAAg6hyg9QhDglhOgYA8zw2QArAABogtQBggtACAAQAvAABUBBQBUBBA8AAEgljgAoIAAAUQBAAACAhPQBSgzAHgDQAsgZAUAAQAZAABIAmQBQArAwAJQAhAGA4gHQBHgJAUAAAoD/2QAMgUgXAcQgTAWAAAPQAAAwAQAkQADAHAfA2QAyBVAACWQAAASgGAnQgGAlgIAfA0X6OQAcgWBmgIQA9AAAcAUQAZARALArQADAOAMBZQALBRATBCAxjQjIiCAAQgWCcikC6QhGBPhFAxQhHAygsAAArfWLQA1AHANAVQAEAGAAAVQAAAChnCGQhvCagiBpAhfaPQAKAAAEgBQAGgCAAgHIAKAAQgPAPg3AfQgeARAAAlQAAAaAPAxQAPAxAAApQAAAggWBEQgQAxgMAaA7jL3QArgJBEh1QAnhDAHgMQAYgjAOAAQAJAAAfAPQAfAPAEAAQAWAAADgCQAAAAAZgm");
	this.shape_3.setTransform(-16.425,5.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF33").ss(8,1,1).p("EAFYgjSIiCAAQhLABgSAlQgHAMAAAyQAAAvA+DEQBADBAEAOIgUAAAQe2oIAAiWQCsBDAYi2QAIg6gHhkQgHhzAAgMAD06sIAKAAAWutQQA9gBBbhQQAtgoAmgnQANAAAZAKQAZAKAMAAQA1AABIiNQAmhLAvhyAbGAxQBFhKAngeQAggZAUAAQADAAA2AoQA9AmAggIAaeLtQAsgdA9ggQA5gdAIAAQAFAABRA6QBbBBA1AvQAagSAihSACuY/IgeAAQAAC2gMBIQgfC1hqAtARaU7QAKAAAhgKQAigKANAAQBmAAAqBwQAOAiASBOQAVBWANAoAJ6ZxQAABEAeCfQAeCeAACCQAAAYgNAMQg+A3gFAEA9H1YQAzAABMgZQBMgZAMAAQAjAuAnAwQBPBgAgAKQAIACAmADQAjADAdAMEggFgJ+QBDgJBDgpQA2goACAAQAgAAAWAdQAYAqAQAYQA/BfCPAAEgEJgi0QgIAaghC3QgbCaggAvEgQxggKIBEAAQCCgBAKD+QACA5gFCKQgEBpAHAbAyfaFQgkjZA2h2QAuhkBggFQAAgFAFgPQAFgPAAgFA5/SlQgfgKgSgSQgVgWAAgeQAAhRAggaQAVgQA0AAQA2AAAUgMQAkgWAFhJAqFZxIAUAAIAABGQgKAQADBQQACAvAEBwQADDXhSgKEghpAF7QASgIBVgzQBDgpAZAAQAOAAApAZQApAZAJAAQAHAAAugUQA3gXAWgH");
	this.shape_4.setTransform(-2.425,13.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF33").ss(8,1,1).p("ASlxPQAyAACQgiQCHggA9AGQAAg+AMhOQAPhtADgfAIv2jQgUAegKAAIAAiWQAHgdAqgxQAagdA/hDQB6iKAAh2AYXiPQCbjYAqgtQBShZBRAAQANAAA0AKQA1AKAMAAQAbAAAgg4QAxhSAqgqAZnJcQAzg4AugJQAJgCBAAFQArAEAmgbQA0glBDhsAWpTwQAigMAYgbQASgVAYAAQAWAAASAZQAKANAUAqQAnBQApAAQAQAAAcgIQAdgIAbgOAFJdwQgyAGgYArQgQAeAAAkQAAANAKBaQAKBaAAAMQAAAngUAbQgYAfgGAhALFayICgAAQAfAPAlANQAWAOAAAwQAAACgGA9QgMBCggAfIAABQIARgBQAWgCAfgHEgLugibQAAAHgZBGQgZBGAAANQAAAUAMAQQARATAJAQQAlA+gFCdQgCBGA2BHQAfAnAPATQAcAjAOAaEgDIgkxQAAA3AQA9QAEASAeBdQAyCcAACdQAAA7geAeQgUAVgUAAQgeAAgogUEggUgN9QAJAAA9gKQA+gKANAAQBAAAAfAKQAgALAOAcQAMAYAHA3QAIBOAHA2IAyAAEgiWABKQBIh3A2goQAogcA7AAQAsAAA0AaQBPApAABQIAeAAQAAgcAUgnA4+5rQBjAPAgAIQAzANAcA2QBUCjgBA9QgQAqANAsIAeAAA5cZiQgfglgNgtQgGgZAAgSQAAg+ATgNQAGgEAIACQAGACABAAQAcAKAfAKQA9AUAUAAQBDAAAjhiQAchPgJg/EgRWAiSQgCgGgCgFQgWhDgXhHQgxiaAAhDQCEA0BlheQBfhZAAiVEgGaAkSQgBgigTh5QgUh+AAgCQAAiJAhgMQALgEASAJQAWAJAGAAQAKgoAAiCQADAAAFACQAKACAMAGEggoAOcQAWg0AYhYQAahlAMguQAsijAqAAQANAABIBLQBHBLAOAAQAPAAAPgWQASgbACgpEgF8Ai6QgVAygJAeIAAAIEgGaAkUIAAgC");
	this.shape_5.setTransform(8.075,0.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF33").ss(8,1,1).p("AY/8JQgWAAg1gKQg2gKgLAAQgmAAg+AeQhQAoAAA3QAPAeAPAiQAeBGAABgQAABMgUATQgKAKgoAAQgTAAgcgUQgjgbgmgNEAJNggNQgyAdAAApQAAANAKA8QAKA8AAAMQAABGgfAgQgLAMgaARQgoAagMAIAZnsrQARgHBJg1QA3goAoAAQACAABTAZQBSAZANAAQAXAAAagbQATgUBDhJAclA5QAKAAAVAFQAVAFANAAQAzAABahBQBahAAnAAQAnAAAkAeQAWgQANgeQAJgSAQgtAYrMnQBWgMBYgbQBFgVAqAAQACAABiBBQBiBBACAAQANAAAzgxQA3g0AagJASlVhIC+AAIAHAFQAHAFAGAAIAAD6QAuAABoBuQAAgoAKgKAL3bnQABBLAUA6QATA6AAATQAAAMgKAoQgKAoAAANQAAAQAHATQADAMAKAcA9+1HQAgAAAwgPQAxgPABAAQAVAAArAnQALALBNBQQCICMBcAeEgj6gF9QAdA1AZARQAQAKAZAAQBaAAA6gyQAagZANgJQAWgQAaAAQArAXAtAWQBaAtARAAQAFAAAtgUQAsgUAfAAEgEYgjfQAADBACBWQACCNAGBkAr4/HQhPAMgPAWQgGAIAAA1QAAAmAQAqQAEAKAeBCQAyBtAABuQAAAXgGALQgDAGgVAUA34RRQAji8ATgQQAHgGASAEQAWAEATgGIAAgKAwieHQgDgEgCgDQh8jBgYgmQgbgsAAgrQAAglAqgcQAJgGBFgiEgJYAhPQAAgWgFhgQgFhhAAgKQAAg/AYgjQANgTAjgYQAfgVAJgUQANgggPg9EgiMAGDQAeAABmhQQBmhQABAAQAOAABNAdQBRAeADABABFarQgMAVg0A/QgtBAAAA5QAAAVAZA0QAsBiACADQA2CBgzA5");
	this.shape_6.setTransform(-6.925,11.3125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF33").ss(8,1,1).p("ACz4HQgSgGhWg9QhehEgzgZQBTgjBwgoQBUgeAYgNQAjgVALgiQAKgeAAhNQAAgsgehAQgehAAAhiALj1nIAUAAQgEicBNjRQAnhqAwhjQgCAAgFgBQgKgDgNgGAY1uHQABgBAHgQQAGgRANggQAahEARgQQAEAAA7AZQA7AZASAAQAiAABXhiQBThdAag7AaZjBQAUAAA9gyQAegZAdgZQAaAABgA3QAwAbAtAcQAjAAAfgtQAfguAShPEggGgK0QgIADgGAGQAAAFgBAFQgDAKgGAAIAoAAQABAABRgoQBRgoACAAQALAABmBLIBmBLQAPAAAMgGQANgJAKgFAo6+/IgUAAQgHAHgBAMQgCAIAAAXQAAAOAPAbQAPAcAABRQAAAMgKBBQgKBBAAANQAAAZATATQARASgGAhAz08VQgGARgqAvQgoAsgCACQAUAoA2BDQBYBtAIALQB4CgAACPAxyTIQhgATgnBWQgXAygPB9QgOB2gZAsQgnBHhjgDIAAAKAtvYXQAEgFAPAAQAhAAARAnQAKAYAAARQAAAUgPA7QgPA7AAA0QAAACAKBCQAKBKAAAwQAAAagLApQgLAngOAbQgCADgCAEQgKAAgDgBQgHgCAAgHIAYADAiCaoIgoAAQgDAngWD6QgYDrgVAaQAOAAAjgZQAVgPAygoEgh4AD+QBRAAA4gtQAZgWAMgJQAUgOAVAAQAMAAAhAKQAgAKANAAQAJAAASgSQAZgZArgRA9MSCQgDg1ABgfQABg4AMgkQAihnCHAdQAAgOAehRQAehRAAgYAcHJwQAHgTAXg6QATguABgHQAUAABsAyQBsAyAiAAQAAhAAThEQAZheAGgsAUnUiIAjAOQAPAGAPAAQAgAAAegZQAdgZAEAAQAxAAC1DJQBbBlBZBsQAKAAAKgUAG3aUIAAgKIgeAAIAACgQAJAPAFAlQAGAlAAAkIAABZQgJA4gzAUIAAAKQBGAAAogKAONaAIAAgKICCAAQAHAOAXAiQAUAlAAAtQAAAZgtA+QgtBYAACb");
	this.shape_7.setTransform(-7.925,2.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF33").ss(8,1,1).p("EAKYgimQg5AQgIAQQgFAIAABLQAAAMAKBGQAKBGAAANQAAA6gtA0Qg6A2gbAaASqx4QAAgLgPiMQgPiLAAgoQBvgBBEh/QAzhhAAhVAaUogQA1g1A8hPQAsg6AIAAQANAAAbAKQAcAKAMAAQAwAAAigxQAng4AYh9AaUEbQAdhGA8gpQArgdAXAAQDiAoAEAAQBQAAAogcQBDgvAIiGAZiPrQAhgPCOgtQAeAAAoAkQANALBBBEQBtBzBTAAQAOAAAWABQAQAAANgIQAcgQA0hXAHGa7IgyAAQgCAIgFBoQgGBxgKBIQglDyhug7AQyZ1IgeAAIAADIQAIAPAGAfQAGAeAAATQAAArgeAeQgSATg0ArIgSgeQgMgSAAgMAXqXLIgeAAIAABaQAgAVBDDZQA9DGAAATQAAAQgkAlQg0A0gqBGEgj1gTwQApAUCJACQCgABAgAHQAcAECPBuQCRBwAOAEQANAEAEAEQACAGAFAEQASAPBsAbEgi0gEDQAJAFAQAAQABAAB5gtQB5gtACAAQABAACkBkQCjBkACAAQAGAAAUgPQAXgSAQgHEgCRghWQgoBGAAAZQAAAMAUA8QAUA7AAA7QAABbgYAhQgWAdhKAWAtz+2QgeAlgRAjQgNAcAAAPQAAA0BJBBQAnAgAPAOQAaAZAFARQAIAaAQBZQAQBbAAAYIgKAAA0hR3QgdAFgGADQgNAGgJAVQgJAWg2DVQg3DahbCGQgbAphDBDAslVTQhVBEhOD6QhLDwAACsAknYvIgeAAQgGAyADCIQABBFACBLQAABNgxBOQgaApgjAsA9RK1QAgggBOheQA+hKAIAAQAXAAAaAKQAZAKAkAA");
	this.shape_8.setTransform(-16.425,6.6523);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFF33").ss(8,1,1).p("AAd8BIgdAAQAAgDgFgYQgFgYAAgOQAAhMAdgsQAVgeAygdQA/gkAUgRQAtgnAVhAIhGAAAPd4lQgNALgWAKQgTAJgGAAQAAglgei8QAAgzAEgOQADgNAMgCQAbgEAGgCQAbgJAfgeQABgBAlg0QApg6AfgnAUxvNQADgEACgDQAvhCBIhwQAwhLAIAAQANAAAvAKQAwAKAMAAQCFAABgh3QAigrAVgwQASgpgCgTAa3hBQAph4A4gcQAUgLAdgBQARgBAggBQA7gFAlg+QAzhVAmjgA4+3zQAKgLAzgdQAzgeAIAAQAWAAANAdQAOAqAJAYQAnBfBxAAEgiWgKhQAdgCA9geQA7gcAfAAQABAAB0AyQB0AyACAAQAHAAAwgKQAxgKApAAEgGughLQgmAQgdAtQgXAhAAALQAmAyApA4QBTBxASA4IAABaIgUAAIAAAKA0Sa8QgCgDgdgbQgTgSAAgRQAAg2CaikQCbiaABgDIg8AAApYf8Qg/gUgMgcQgFgLAAhMQAAg7AOgsQATg9AvgzEgCgAiSQA7gbAHhJQACgXgEgZQgEgVAAgBQgUhBgUhDQgoiGAAgnQAAglAEABQAbAEAdgNA/sFsQACgBABAAQCMhAA/hGQAagcAJgFQASgMAkAAQAfAKAhAKQBBAUAQAAA+SVKQBLgyAyiOQAjhkAAgmQAdABAkgUQAlgVAwAAAdXLoQAFgJAFgiQAFggAFgFQBIACABAAQAvgCAkgSQBjgyAtjAAZJUYQAfgFBKgZQABAAApAjQA0AqAvAhQCaBqBQgQAJXayIgeAAIAABGQANAdAIAsQAJAvAAAtQgSB6gHAkQgFAWAAgKQAAgOAFACAU7Y6QgXAPgcALQgTAHgEAHQgGAIAAB/QAAAPAUFA");
	this.shape_9.setTransform(-12.925,8.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).to({state:[{t:this.shape_7}]},5).to({state:[{t:this.shape_8}]},5).to({state:[{t:this.shape_9}]},5).wait(5));

	// sun
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AvzPzQmimjAApQQAApQGimjQGjmiJQAAQJQAAGjGiQGjGjAAJQQAAJQmjGjQmjGjpQAAQpQAAmjmjg");

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.8,-238.8,492.8,486.8);


(lib.cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lightning
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(8,1,1).p("AGrq8Qi9DNjUCkQAnAUAWAtQAVApgBAvQgCBLg2BiQhCB3jGDlQi8DZhDCKAQ0wEQiNE7hzFCIBpgmQjDI5j6I+AmWqcQjAF8iQGZQA5AMAdAFQj4GjirHY");
	this.shape.setTransform(3.55,148.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF33").ss(8,1,1).p("EAHKghOQhVEBg3ClQAdAFA3AJQgZDnhbEFQhDDAiCEXQhJCbiQE3Qh4ENg8DSEAPmgjNQghCNgQCXQgHA9ASAgQAOAWAaAGQAaAHAQgSQggEqh+F6QgtCFhKDDQgqBthTDaQhkENiEGNQhKDfiTG/QiCGLjGIuQhSDrhZD6QgGgUgPgoEgILggXQhyF4iMHLQAhgWAqATQApASAPAoQAOAhgEAtQgCAegMAyQiLJJj8Io");
	this.shape_1.setTransform(-10.425,296.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF33").ss(8,1,1).p("AL51iIksOtQAiALAngEQAlgEAggSQgUDThPD/QgsCQh1E3QhvEngvChQhKD+gODWAhh1wQi+GGjzFuQAZAMAdgEQAdgEAWgSQhFN5kKNQ");
	this.shape_2.setTransform(-44.7,211.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFF33").ss(8,1,1).p("AQz9VQkaJSkeIiQCIABERABQBICXAADMQgBCXgsDaQhDFOh/GWQhQEBimHXAFU5sQlCGVp+MqIRniSQhbJIkoKnQi2GkmkMCAr48KQhcDbiXC1QghAngMAUQgWAkgDAgQgDAeAOAmQAEALAZA2QBcDEgNERQgJCuhDE6");
	this.shape_3.setTransform(-1.2023,238.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF33").ss(8,1,1).p("AQm+bQiADtitDKQAqAZAzgDQAcCbhEDvQgTBCgpCDQgiBzgLBTACW6xQiNENkbIZQBOgXBKA7QBGA6ARBWQAOBKgVBcQgOA+gnBkQnESPoCSc");
	this.shape_4.setTransform(-8.625,248);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF33").ss(8,1,1).p("ATc+bQiBDtisDKQApAZAzgDQAdCbhFDvQgTBCgoCDQgiBzgMBTANgrtImdLmQCrAaBDAMQAGGEjFG9Qh9EckxHiAm16ZQhWDLh7C5Qh7C4ibCeQhABBgZAsQgnBEATA6QAMAiAnAnQA8A7AEAFQA5BGACBxQABBPgeB6QiKI5jZIpAFL6xQiNENkbIZQBOgXBJA7QBHA6AQBWQAPBKgVBcQgOA+goBkQnDSPoCSc");
	this.shape_5.setTransform(-26.75,248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[]},3).to({state:[{t:this.shape_1}]},6).to({state:[]},4).to({state:[{t:this.shape_2}]},4).to({state:[]},4).to({state:[{t:this.shape_3}]},2).to({state:[]},4).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_5}]},5).to({state:[]},5).wait(1));

	// rain
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#66CCFF").ss(8,1,1).p("AGo7xIAAEFAg33YIAAEsAQB6gIAAFKAOctYQgEAQgBAUQAAALABAbQAKCngGC0ANqjNQgJAOAAAiIAAFXAU5o/QAAC+gCF+AAXrLQAACuABFaAGTrLQgPD6AHD6AHGI3IAAD6AhBGMIAAIdAQfJfIAAE2AF2gDIAAAnALdUcQABCjABFHAD/SYQAJAGAAAWIAAH4Aze8PIAAJFAn57dIAADxAsv6MIAAFKAoOwgQgJAYAAAeIAAELAwMu8QABAGgGAHQgIALgCACQgCAGABAIQAAABAEAOQAQAygCBSQgDBuACAYA0kltIAAFMAtrEKIAAJFAm9kbIAAJhAsHQrIAAGbAmzReIAAKyA03NFIgBIn");
	this.shape_6.setTransform(12.575,294.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#66CCFF").ss(8,1,1).p("AFwvPIAACvAKn7dQAKATAAAYIAADjARDunQAKAfAAAbQAABagCC3ABO7nIAAEEEASTggyIAAGHAg8oCIAABjQgBCDgCEEAFSj+IAAFoACUKGIAAGvAKxKGIAAF9AS7IiQAACKgCERAODCcIAAE2AJ1vPIAAGlAUhV4QgEAFAAAFQAADvACB4AN5WBIAAFeAGNYUQAGgDAJAEQAIAFADAIQAFAJgCAZQgIBBgBBSQAAAxACBjAiXdLQAKAMAAAbQAABAgCCBAwI//IAAGGAvAhAQAJARAAAhQgBB9AAD/AzGqEIAAFKA0gKGQANAGAAAeQgGBNADCKAsDGMIAAIdAkiFkQgBkEAAiBAk4yXQgfFPAOE8AsDslIAAFfAvWTzIAAHiAlfPbQAAByABDk");
	this.shape_7.setTransform(16.2,270.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#66CCFF").ss(8,1,1).p("AFA0LIgBJEAJi3AIAAFpAPUztIAAH+AVa1aQAABkACDHAUWiqIAAGRAIvMrIAAIJASKPCQAABagCC0AOOh4IAAH/AF7h4IAAHXACBE3IAAHMAA7XVIAAG4ALaZ1IAAFKAzF+0IASAAIAMAAAyz++QAAAFAAAFQACFMAABEAvVyxIAAHgAiE1xQAEAWAAAsQAACHgCEPAoivCQAGAfAAA/IAAHyAng50IAAHDAoFjIQgEDIABCzA1RgoQgGAAgEACIAAE/AueHhQALDUgHDbAngZgQgEANACAfQAFBLgDBmAlUOaIAAG4AxNUMIAAGH");
	this.shape_8.setTransform(5.075,262.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#66CCFF").ss(8,1,1).p("EAS7ghVIAAEYAIm4tIAAFyADI6TIAAFgAKzoIIAAIwABGKzQAFATgCAdQgGBcADBaAFULvIAAEYAWNIcQAACXACEsAR1BQIAAGkAU/x1QAACZgCE0AOZwHIAAGlARDW1IAAGcAGkZrIAAHrALbHqIAAM3A167jIAAFgAsC4ZIAADcAk11lIAAFUAAUshQACB7AAD4Au2lUIAAD7AxWH+IAAHhAiCCfQgJAQAAAmQAACKABEYAprgJIAAGFAywuZIAAGRAiyWZQAADAgBGEA2OZhQAACdACE6AsWVTIAAHCApNMhIAAFe");
	this.shape_9.setTransform(-3,283.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#66CCFF").ss(8,1,1).p("AIG6mQAKAsgBBLQgCBgACAZAD/vfIAABkAMI09IAAGuATn0vQADAFAAAGQAADggBBvAPQ+MIAAIxASGh4QAEAbgDAtQgFCyAEDJAFinWQAABVADGeAJoC/IAAGkADDEtIAAFBAO8HNIAAF9ALWXVIAAG0ACbWsIAAGbAUSRYQAACagCEzAwp8UIAAFVAk6+gIAAGbAro+gIAAH/AgzlAIAAA+QgDEAAAAzAwfrkIAAIoAtrIJIAAGvA0RC/QAED3gCDgAkcCNIAAJPAmAuFIAAJPAslxrIAAFVAmoXfIAAHCAwfYlIAAEDAoWNoIAAFp");
	this.shape_10.setTransform(-0.55,284.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#66CCFF").ss(8,1,1).p("ACL4AIAAEiALu+6IAAHsEATkggyQAACagCEyANVnUQALAIAAAZQgHD7ADDuAHfscIAAG5AOiNYQgGAAgEACIAAECAPev4IAAGbAQQXaIAAF8AJ1bKIAAFpAE/M6IAAH2AyT0QIAAE2Aie40QAKASACAaQABANgBAjQgGB/AEB7Aou1WQgDDNABETApfmBIgEFAAzjo1IAAGlAlAExIAAEsAihRjQALABAEALQAEAKgDALQgJCbAGCRAtTAPIAAEYAgcxIQAAB4gCDxAgKasQAABnACDPAsXYCIAAFUAx/PQIAAE1");
	this.shape_11.setTransform(-0.925,279.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#66CCFF").ss(8,1,1).p("AJd37IAAGaAThznQAJALAAAWQAAGfgCDPARciMIAAE3AJnFfIAAJjABBH/QAAB/gBD+AR6FLIAAIVADrgwIAAFxAIrtJIAAIJAU/QwQAHFXgDFmQgBAcAAAbAEeY5IgBH0AMVWjQgFDoACFSEgVCgkdQAACxABFiAAP7YQACCqAAFVAmKs1QAVACAJASQgNARgEAaQgDAQAAAgIAAE2AsH+MIAAHrAj+jSIAAGHAxlH/IAAHNAtCsDIgBKpAxlcMQALgCAIAKQAIAJgBALQAAAJgEANQgDAHgFANQgFAOAAAfQABBEAACIAnMb3QANEQgIEXArKNoIAAHh");
	this.shape_12.setTransform(-3.5057,274.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#66CCFF").ss(8,1,1).p("EAQLghEIAAErAFO90QAKAAAAASIAAF1ACGzAIAAFKATpqtIAAHMANPOhQAGAKADAOQABAJAAARQAAB/gCD7ADghxIAAJ1ALzh7IAAIiAKFwqIAAHDANNwMIAAEEEAPZAgKIAAm4AFsP5IAAGlEgRwgiqIAAFfAmB61IAAFzAmLw+IAAEEArBrfIAAJ4AiXl3QANDagHDJAx2BTQAHASAAAoIgBE7ArhEUQABC0ABFpAzo0QIAAHqAicVzQADgEAAgFQAAkDgCiCEgN2AgzQAIgBACgBIAAkrAjTarQAIAaAAA4QAACPgCEfAm9IiIAANAAwnWxQgFjjADiZ");
	this.shape_13.setTransform(8.575,279.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#66CCFF").ss(8,1,1).p("AHkyiIAAkEAQV6WQAWANgFAOQgBAGgKAKQgGAJAAAXIAAE7ALz3OIAAl0AAE9qIAAGwAQ9oXIAAHDAInoUQADAEAAAHIAAHIAIcMUQAFgXAAgtIgBm9ABALqIAAlvATtBzQADD6ADH1AFsfEIAAkYALLd+IAAnMArB0QIAAkYEgTygiWIAAHWAuA9CIAAG6AhnrVQAJghAAgoQgBjuAAh4AtYhUIAAnNAv4r9IAAIcAj1DXIAAj5AheZ7QgCCMACCLAorZcIAAI7ArMMIIABLS");
	this.shape_14.setTransform(2.625,283.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#66CCFF").ss(8,1,1).p("ABJ+SQAAAegDAmQgDC0ACDWAN13OQgBAVgBAsQgFDXAEDxEAHVghQIAAGSAKXj1QADAhgDA2QgFBzACECAQ4qjIAAHXAgoq3IAAJFAFeMRQAKAPAAAfQgBBxAADeABFEnIAAGHADbzUIAAFzAJ20GIAAGvASZUkQAFAiAABFQAADsgCHaAFdXuQAUALAEAWQgYAJAAAwQAAC1ABBaAhQQ2IAAIwANSLMIAAF+Al8/sIAAHEAow9+IAAGmEgSdggeIAAG6AvpGzIAAHIAqAgsIAAIwAnCx6IAAHXAsgxcIAAI6AvzwgIAAOGAw9ToQAKFngGGAAnlF3QANEcgJEp");
	this.shape_15.setTransform(15.075,301.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#66CCFF").ss(8,1,1).p("AJYzjIAAFPASU0BIAAG4AOi/cIAAFyAUC/6IAAFyAOslyQAUAfAAAmIAAEbAHLhYIAADRAEXlyIAAGlAIRKgQALAFAIAKQAHAKAAAMQgFgDgHACQgGADgDAGQgFAHAAASIAAGGATELcQAACIACESAB3xNIAAHXAQGYlIAAH0AC9aTIAAGaEgUBgjrIAAFLAvpz3IAAF8AjI2DQAAC6ACF2Ara8AIAAGHAqmhOQgOAWgBAaQgCARAJApQAJA2gDBcQgDBsADAnAoInCIAAKBAjIkOQAAByACDhAs0MsIAAFoAg8H/QACB/AAD+Ax/hiIAAIvAqeVTIAAFUAkOZNIAAGaAwvVcIAAJZAq8eNIAAFf");
	this.shape_16.setTransform(5.075,274.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#66CCFF").ss(8,1,1).p("ABA8AIAAIJALfieQAVAPAAAyQgBAvAABhAE8qBQAJAUACAcQAAANgBAmQgDBDACCbAFiCrIAAHCAUJSJQAGAVACAcQAAAJAAAoQAAC8gCDsAIyTkQACBrABDWAgFVTIAAGGAp06PQADAEAAAHIAAHJAqLvCQAGAaAAA2IAAGmEgTeggEIAAF8AkhBPQAKFMgGE3As5C1IAAITAyOxrIAAIxAoMb3QACAQgCAPQgCCQABBfA0QQ6IAAHXApdQSIAAFV");
	this.shape_17.setTransform(23.625,277.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},3).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},4).to({state:[{t:this.shape_15}]},5).to({state:[{t:this.shape_16}]},5).to({state:[{t:this.shape_17}]},3).to({state:[]},4).wait(1));

	// cloud
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AncMnQhzgPh2hNQhZg6hshrIgvgtQgbgZgYgPQgUgMgigPIg3gZQhXgrg+hNQg/hOgXheQgRAJgPgTQgOgSAHgSQAGgQARgOQAJgHAYgOQBOgsBOhOQAzgzBShkQBYhqArgtQBNhRBLgvQBag5BhgOQBrgRBWAoIBPAsQAwAbAjAGQArAHA1gOQAhgKA7gaIHCjNQBLghAogNQBCgUA2AFQBCAGBWAxQCjBeBsCXQAeAqAzBYQA0BYAdApIA7BRQAiAwASAmQAaA6AIBNQAGA2gCBXQgDBVgOA1QgTBKgwAnQgvAmhXAKQhlAGgxAHQhqAPivBmQheA3gqAUQhNAmhCAOQhUARiMgKQisgNg3ADQg2ADi9AmQhsAWhPAAQgfAAgagDg");
	this.shape_18.setTransform(-0.0163,-0.0056);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.1,-81,312.5,607.4);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#00CCFF").ss(3,1,1).p("ALBAAQAAEkjODPQjPDOkkAAQkjAAjPjOQjOjPAAkkQAAkjDOjPQDPjOEjAAQEkAADPDOQDODPAAEjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnyHzQjOjPAAkkQAAkjDOjPQDPjOEjAAQEkAADPDOQDODPAAEjQAAEkjODPQjPDOkkAAQkjAAjPjOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AnyHzQjOjPAAkkQAAkjDOjPQDPjOEjAAQEkAADPDOQDODPAAEjQAAEkjODPQjPDOkkAAQkjAAjPjOg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00CCFF").ss(3,1,1).p("ANoAAQAAFpkAD/Qj/EAlpAAQloAAj/kAQkAj/AAlpQAAloEAj/QD/kAFoAAQFpAAD/EAQEAD/AAFog");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ApnJoQj/j/AAlpQAAloD/j/QD/j/FoAAQFpAAD/D/QD/D/AAFoQAAFpj/D/Qj/D/lpAAQloAAj/j/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.6,-88.6,177.3,177.3);


// stage content:
(lib.morales_newHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {poem:0,artwork:1};
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
			root.gotoAndStop("artwork");
		}
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1")
			root.line01_txt.text = line01;
		}
		
		var line01 = "Lightning, heavy rain";
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2")
			root.line02_txt.text = line02;
		}
		
		var line02 = "Hours later out my window";
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3")
			root.line03_txt.text = line03;
		}
		
		var line03 = "Sun shines from nowhere";
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("poem");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(480,499.05);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.toFrame01_btn = new lib.circlebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(864,451.95);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// window
	this.instance = new lib.window();
	this.instance.setTransform(367.55,356.5,1.5891,2.1018,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// cloud
	this.instance_1 = new lib.cloud();
	this.instance_1.setTransform(276.8,175.15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// sun
	this.instance_2 = new lib.sun();
	this.instance_2.setTransform(605,194.4,1,1,0,0,0,-7,12.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("Sun shines from nowhere", "bold 40px 'Arial'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 47;
	this.line03_txt.lineWidth = 543;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(489.05,221.85);

	this.line02_txt = new cjs.Text("Hours later out my window", "bold 40px 'Arial'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 47;
	this.line02_txt.lineWidth = 543;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(489.05,152.75);

	this.line01_txt = new cjs.Text("Lightning, heavy rain", "bold 40px 'Arial'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 47;
	this.line01_txt.lineWidth = 543;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(489.05,71.4);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(283.2,9.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EhMyAzZMAAAhmxMCZlAAAMAAABmxg");
	this.shape.setTransform(476.55,321.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFF9C","#FF0814"],[0,1],0,0,0,0,0,613.2).s().p("EhPOA12MAAAhrsMCedAAAMAAABrsg");
	this.shape_1.setTransform(477.325,321.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(450.2,292.5,534.3,373.29999999999995);
// library properties:
lib.properties = {
	id: 'B22CA2F180DD85408A6BF5E594E568FC',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/morales_newHaiku_atlas_1.png", id:"morales_newHaiku_atlas_1"}
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
an.compositions['B22CA2F180DD85408A6BF5E594E568FC'] = {
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