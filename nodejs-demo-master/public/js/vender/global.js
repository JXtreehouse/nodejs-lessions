(function(){
	
	//导航链接
	addActive();
	
	
	function addActive(){
		if($("#masterid").length){
			var $current= $("#masterid").val();
		}else{
			return false;
		}
		$('#navbar li').eq($current).addClass('active');
	}
})();
