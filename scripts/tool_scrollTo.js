define(['jquery'],function($){

	function ScrollTo(opts){
		this.opts=$.extend({},ScrollTop.DEFAULTS,opts);
		this.$el=$('html,body');
	};

	ScrollTo.prototype.move=function(){
		var opts=this.opts;
		this.$el.animate({
			scrollTop:opts.dest
		},opts.speed);
	};

	ScrollTo.prototype.go=function(){
		this.$el.scrollTop(this.opts.dest);
	};

	ScrollTo.DEFAULTS={
		dest:0,
		speed:800
	};
	return {
		ScrollTo:ScrollTo
	};
});