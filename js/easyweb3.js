
function isMetamaskInstall(){
	// check brower is or not install metamask
	if (typeof window.ethereum !== 'undefined') {
		console.log('MetaMask is installed!');
		return 0;
	}
}

async function connectMeta(){
	ethereum.request({ method: 'eth_requestAccounts' });
}

async function getAccount(){
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	showAccount.innerHTML = account;
	return account
}

async function chainChange(_chainId){
	ethereum.on('chainChanged', (_chainId) => window.location.reload());
}

async function chainId(){
	const chainId = await ethereum.request({ method: 'eth_chainId' });
	return chainId;
}

async function ethRequest(etype, eargs, resex, errex){
	ethereum.request({
    	method: etype,
    	eargs,
  	}).then((result) => {
    	// The result varies by RPC method.
    	// For example, this method will return a transaction hash hexadecimal string on success.
	})
  	.catch((error) => {
    	// If the request fails, the Promise will reject with an error.
 	});
}


