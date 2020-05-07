const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3= new Web3(ganache.provider());

class Car{

	park(){
		return 'stopped';
	}

	drive(){
		return 'room'
	}
}


beforeEach (()=>{

	consol.log('Before each');
	const car=new Car();

});


describe('Car',()=>{
	
	it('can park',()=>{
		//const car=new Car();
		assert.equal(car.park(),'stopped');
	});


	it('can park',()=>{
		//const car=new Car();
		assert.equal(car.park(),'stopped');
	});

});