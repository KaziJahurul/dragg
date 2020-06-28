var $before = $('.before');
var $after = $('.after');


var img1 = false;
var img2 = false;
var img3 = false;
var img4 = false;

var tl = gsap.timeline();

function completeDragg(argument) {
	if ( img1 && img2 && img3 && img4 ) {
		$before.hide();
		$after.fadeIn();
		tl.to(".after_map", {scale: 1, duration: 1})
		  .to(".after_text_bg", {x: 0, duration: 1})
		  .to(".after_text", {x: 0, duration: 1});
	}
}

Draggable.create(".img1", {
	bounds: $before,
	edgeResistance: 0.65,
	type: "x,y",
    autoScroll: true,
    onDragEnd:function() {
		img1 = true;
		completeDragg();
	}
});

Draggable.create(".img2", {
	bounds: $before,
	edgeResistance: 0.65,
	type: "x,y",
    autoScroll: true,
    onDragEnd:function() {
    	img2 = true;
    	completeDragg();
	}
});

Draggable.create(".img3", {
	bounds: $before,
	edgeResistance: 0.65,
	type: "x,y",
    autoScroll: true,
    onDragEnd:function() {
    	img3 = true;
    	completeDragg();
	}
});

Draggable.create(".img4", {
	bounds: $before,
	edgeResistance: 0.65,
	type: "x,y",
    autoScroll: true,
    onDragEnd:function() {
    	img4 = true;
    	completeDragg();
	}
});