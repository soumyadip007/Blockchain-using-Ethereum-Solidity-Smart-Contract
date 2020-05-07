const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi there!']
    })
    .send({ from: accounts[0] });
});


describe('Inbox',()=>{
	
	  it('console a contract',async () => {
  			console.log(inbox);
 	  });


	  it('deploys a contract', () => {
	  			console.log(inbox.options.address);
	  			assert.ok(inbox.options.address);
	  });

	 it('has a default method',async () => {
	  		const message=await inbox.methods.message().call();
	  		console.log('Defaulr '+message);
	  });

	  it('can change the method',async () => {
	  		
	  		await inbox.methods.setMessage('Bye, Setter()')
	  								.send({from: accounts[0], gas:'1000000'});
	  		
	  		const message=await inbox.methods.message().call();
	  		console.log('Just Retrived '+message);
	  		console.log(inbox.options.address);
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