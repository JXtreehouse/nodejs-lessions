var globalVariable = 'this is global varuable';
function globalFuction(){
	var localVariable='This is local variable';
	console.log('Visit global/local variable');
	console.log(globalVariable);
	console.log(localVariable);

	globalVariable= 'This is changed variable';

	console.log(globalVariable);
	function localFunction(){
		var innerLocalVariable = 'This is inner local variable';

		console.log('Visit global/local/innerLocal variable');
		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLocalVariable);
	}
	localFunction();
}

globalFuction();
