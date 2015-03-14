  document.addEventListener("DOMContentLoaded", function(event) {
	  window.addEventListener( "keydown", doKeyDown, false );
	  
	  var rumbus = document.getElementsByClassName("rumbu");
	  
	  for  (var item in rumbus) {
		  item.addEventListener( "click", doKeyDown, false);
	  }

	  function doKeyDown(e){
		  for (var element in rumbus) {
			  if(element.getAttribute("key") == e.keyCode){
				  var prototype = document.createElement("audio");
				  prototype.setAttribute("autoplay", "true");
				  prototype.setAttribute("src", e.keyCode + ".ogg");
				  prototype.addEventListener("ended", destroyMe);
				  document.body.appendChild(prototype);
			  }
		  }
	  }
	  
	  function destroyMe(event){
		  if (event.target.parentNode) {
			  event.target.parentNode.removeChild(event.target);
		  }
	  }
  });