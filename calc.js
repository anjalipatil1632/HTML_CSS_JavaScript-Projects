var num1= document.getElementById('num1');
var num2= document.getElementById('num2');
var result= document.getElementById('percentageresult');
var form1= document.getElementById('percentageform');



form1.addEventListener('submit',function(event){
	
	alert("5");
		if(!num1.value || !num2.value ){
			alert("Please enter correct values");
		}
		else{
			var x=parseFloat(num1.value);
			var y=parseFloat(num2.value);
			
			var ans = x/y;
            var percentage= ans*100;
            
            result.innerText= "Answer: "+percentage+"%";
            event.preventDefault();
		}
});

