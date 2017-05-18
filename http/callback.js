function learn(sth){

	console.log(sth);

}

function we(callback,sth){

	sth+= 'is cool';
	callback(sth);
}

we(learn,'nodejs');

we(function(sth){
	console.log(sth);
},'AlexZ33')