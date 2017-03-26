jQuery(document).ready(function($){
	/* Open the sidenav */
	$(".open_menu").click(function(){
		$(".sidenav").css("width","100%");
	});
	/* Close/hide the sidenav */
	$(".closebtn").click(function(){
		$(".sidenav").css("width","0");
	});
});