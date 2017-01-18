$('document').ready(function(){
	
var arr=["#slide1","#slide2","#slide3","#slide4","#slide5","#slide6"];
	
	var i=0;
	setInterval(function(){	
	if($(arr[i]).css({"background-color": "red"}))
	{
		$(arr[i]).css({"background-color": "white"});
		$(arr[++i]).css({"background-color": "red"});
	}
	if(i==6) 
	{
		i=-1;
		$(arr[i]).css({"background-color": "white"});
		$(arr[++i]).css({"background-color": "red"});

	}		 
	},5000);	
});

