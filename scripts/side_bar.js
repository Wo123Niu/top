/*requirejs.config({
	paths:{
		jquery:"jquery-1.11.3"
	}
});

requirejs(["jquery"],function($){
	$('body').css('backgroundColor','red');
});



requirejs(['jquery','validata'],function($,validata){
	console.info(validata.isEqual(1,2));
});*/

requirejs.config({
	paths:{
		jquery:"jquery-1.11.3"
	}
});

requirejs(["jquery"],function($){
	//$('body').css('backgroundColor','red');
	$('#backTop').on('click',move);
	//$('#backTop').on('click',go);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});

	checkPosition($(window).height());

	function move(){
		if($(window).scrollTop()!=0){
			if(!$('html,body').is(":animated")){
				$('html,body').animate({
					scrollTop:0
				},800);
			}
		}
	}

	function go(){
		$('html,body').scrollTop(0);
	}

	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}



});



