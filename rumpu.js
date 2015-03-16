  document.addEventListener("DOMContentLoaded", function(event) {
	  
	  //Classes
	  var RumpuSound = function (code) {
		  this.code = code;
	  };
	  RumpuSound.prototype.getNode = function(){
		  var rumbus = document.getElementsByClassName("rumbu");
		  for (var element in rumbus){
			  if(element.getAttribute("key") == e.keyCode){
				  return element;
			  }
		  }
		  throw new NodeException ("Can't find Node with key: " + code);
	  };
	  RumpuSound.prototype.createAudioNode = function(){
		  console.log(this);
		  var audioNode = document.createElement("audio");
		  audioNode.setAttribute("autoplay", "true");
		  audioNode.setAttribute("src", this.code + ".ogg");
	  };
	  
	  var NodeException = function (message) {
		   this.message = message;
		   this.name = "NodeException";
	  };
	  
	  
	  //Globals
	  window.addEventListener( "keydown", doKeyDown, false );

	  function doKeyDown(e){
		  var sound1 = new RumpuSound(e.keyCode);
		  sound1.createAudioNode();
		  
		  /* Loop code ... Don't know how to implement it properly.
		   * setInterval(function(){
			    sound1.createAudioNode()
		  }, 200); */
	  }
  });