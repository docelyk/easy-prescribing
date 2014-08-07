

$(document).ready(function(){
	var $window = $(window);
	function checkWidth(){
		if($window.width() > 768){
			$('#nav').addClass('pull-right');
		} else {
			if($('#nav').hasClass('pull-right')){
				$('#nav').removeClass('pull-right');
			}
		}
	}

	checkWidth();

	$window.resize(checkWidth);
});
