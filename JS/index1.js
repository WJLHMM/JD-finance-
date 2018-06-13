window.onload=function(){ (function(){	          

	var html = document.documentElement;  
	var windowWidth = html.clientWidth;  
	html.style.fontSize = windowWidth /97.57+ 'px';   

	console.log(windowWidth);
	console.log(html.style.fontSize);

})();         }

