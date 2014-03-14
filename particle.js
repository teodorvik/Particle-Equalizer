// Global variables
var MAX_PARTICLES = 5;
var particleSystem;
var lastTime = Date().getTime();

// Particle definition
function Particle(position, velocity) {
	this.position = position;
	this.velocity = velocity;
	this.lifetime = 0; 
}

Particle.prototype.removeParticle = function() {

	var index = particleSystem.indexOf(this);
	if (index > -1) {
		    particleSystem.splice(index, 1);
	}	
};

// Particle system definition

var ParticleSystem = function() {
	particleSystem = new Array();

	var i = 0;
	particleSystem.addParticle = function() {
		particleSystem.push(new Particle(i));
		i++;
	};

	particleSystem.createNewParticle = function() {
		// TODO - function som ändrar position och pruttar ut en ny partikel
	};

	particleSystem.calculatePositions = function() {
		//TODO - ändra positionerna på alla partiklar i systemet.
		var timeNow = Date().getTime();
		var time = timeNow - lastTime;

		for(var i = 0; i < MAX_PARTICLES; i++) {
			particleSystem[i].position = particleSystem[i].position + time*particleSystem[i].velocity;
		}

		lastTime = timeNow;

	};

	/*particleSystem.removeParticle = function(id) {
		/*
			var array = [2, 5, 9];
			var index = array.indexOf(5);
			Then remove it with splice:

			if (index > -1) {
			    array.splice(index, 1);
			}
		* /

		particleSystem.splice(id, 1);
		
	};*/

	particleSystem.tickLifetime = function() {
		//TODO - Lägg till ett på alla partiklars lifetime
	};

	return particleSystem;
};

// Test function
function particleTest() {

	var particleSystem = new ParticleSystem();

	for(var i = 0; i < MAX_PARTICLES; i++) {		
		particleSystem.addParticle();
	}

	alert(particleSystem[0].position);

	//particleSystem[0].removeParticle();


}

