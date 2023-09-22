function lweshaOnclick(){
	let saveFile = () => {
	//Get the data from each elements on the from
	const name = document.getElementById('txtName');
	const age  = document.getElementById('age');
	const email = document.getElementById('textEmail');
	const country = document.getElementById('country');
	const msg     = document.getElementById('msg');

	//This variable stores all the data 
	let data =
	'\r Name: '+name.value: + name.value + '\r\n'+ '\r\n' +
	'Age: '+ email.value + '\r\n' +
	'Country: '+ country.value + '\r\n ' +
	'Message: '+ msg.value;

	//Covert the text to BLOB.
	const textToBLOB = new Blob([data],{
		 type: 'text/plain'
	});
	const sFileName   = 'userData.text'; //This file is for saving data

	let newLink       = document.createElement("a");
	newLink.download  = sFileName;

    if (window.webkitURL != null) {
    	     newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }else{
    	newLink.href      = window.URL.createObjectURL(textToBLOB);
    }
    newLink.click();
}
}