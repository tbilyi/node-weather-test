console.log('Client side javascript file is loaded!')

fetch('/weather?address=boston').then((response)=>{
	response.json().then((data)=>{
		if( data.error ){
			console.log(`nooooo! ${data.error}`);
		} else {
			console.log(`yes! ${data.forecast}`);
		}

	})
})