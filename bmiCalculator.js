function cal(){
	var height=document.querySelector('#input1').value;
	var weight=document.querySelector('#input2').value;
	var result=document.querySelector('#output');

	if(height=='' && weight==''){
		result.innerHTML='Please provide a valid height and weight';
	}
	else if(height=='' || height<=0){
		result.innerHTML='Please provide a valid height';
	}
	else if(weight=='' || weight<=0){
		result.innerHTML='Please provide a valid weight';
	}
	else{
		var meter=height/100;
		var meterSq=Number(meter**2);
		var o=weight/meterSq;
		result.innerHTML=o.toFixed(2);
	} 
}