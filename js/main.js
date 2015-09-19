window.addEventListener('userproximity', function(event) {
	if(event.near){
		var vibrate = function(){
			navigator.vibrate([10000]);
		}
		vibInt = setInterval(vibrate, 10000);
		vibrate();
	}else{
		clearInterval(vibInt);
		navigator.vibrate(0);
	}
});
