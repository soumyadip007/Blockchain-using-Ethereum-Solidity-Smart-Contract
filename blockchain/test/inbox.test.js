const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3= new Web3(ganache.provider());

let accounts;

beforeEach(async()=>{
	//list of all ac
	accounts=await web3.eth.getAccounts();


});


describe('Inbox',()=>{
	
	it('Deploys a contract',()=>{
		console.log(accounts);
	});

});


/*
Synchronous 
beforeEach(()=>{

	web3.eth.getAccounts()
		.then(fetchAccounts=>{
			console.log(fetchAccounts);
		});

});

*/

/*
class Car{

	park(){
		return 'stopped';
	}

	drive(){
		return 'room'
	}
}

let car;

beforeEach(()=>{

	//consol.log('Before each');
	car=new Car();
	
});


describe('Car',()=>{
	
	it('can park',()=>{
		//const car=new Car();
		assert.equal(car.park(),'stopped');
	});


	it('can drive',()=>{
		//const car=new Car();
		assert.equal(car.drive(),'room');
	});

});
*/