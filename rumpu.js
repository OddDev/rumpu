  document.addEventListener("DOMContentLoaded", function(event) {
	  
	  //Classes
	  var RumpuSound = function (code, looper) {
	      this.looper = looper;
	      this.code = code;
	  };
	  
	  var Looper = function(active){
	      this.active = active;
	  };
	  
	  RumpuSound.prototype.play = function(){
	  	var audio = new Audio(this.getCode() + ".ogg");
	  	audio.play();
	  };
	  
	  RumpuSound.prototype.getLooper = function(){
	      return this.looper;
	  };
	  
	  RumpuSound.prototype.addLooper = function(looper){
	      this.looper.push(looper);
	  };
	  
	  RumpuSound.prototype.getCode = function(){
	      return this.code;
	  };
	  
	  RumpuSound.prototype.setCode = function(code){
	      this.code = code;
	  };
	  
	  Looper.prototype.isActive = function(){
	      return this.active;
	  }
	  
	  Looper.prototype.setActive = function(active){
	      this.active = active;
	  }
	  
	  //Classes - Exceptions
	  var NodeException = function (message) {
		   this.message = message;
		   this.name = "NodeException";
	  };
	  
	  
	  //Globals
	  //Globals Variables
	  var rumpus = [];
	  
	  //Globals Eventlisteners
	  window.addEventListener( "keydown", onKeyDown, false );
	  var clickNodes = document.getElementsByClassName("rumpu");
	  for(var l = 0; l < clickNodes.length; l ++ ){
	      clickNodes[l].addEventListener("click", onClick, false ); 
	  }
	  
	  //Globals Functions
	  function onKeyDown(event){
	      playThis(event.keyCode);
	  };
	  
	  function onClick(event){
	      playThis(event.target.getAttribute("key"));
	  };
	  
	  function playThis(code){
	      for(var k = 0; k<rumpus.length; k++){
	          (rumpus[k].getCode() == code) ? rumpus[k].play() : null;
	      }
	  };
	  
	  //Initialize
	  var rumpuNodes = document.getElementsByClassName("rumpu");
	  for(var i = 0; i<rumpuNodes.length; i++){
	      var looperNodes = rumpuNodes[i].getElementsByClassName("looper");
	      var looper = [];
	      for(var j = 0; j<looperNodes.length; j++){
	          looper.push(new Looper((looperNodes[j].getAttribute("id") === "active") ? true : false));
	      }
	      rumpus.push(new RumpuSound(rumpuNodes[i].getAttribute("key"), looper));
	  }
	  
	  
	  
	  
	  
	  
	  
	  function doKeyDown(e){
		  var sound1 = new RumpuSound(e.keyCode);
		  sound1.createAudioNode();
		  
		  /* Loop code ... Don't know how to implement it properly.
		   * setInterval(function(){
			    sound1.createAudioNode()
		  }, 200); */
	  }
  });