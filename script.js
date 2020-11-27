var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;


for(var i = 0; i < keys.length; i++) 
{
	keys[i].onclick = function(e) 
	{
		var input = document.querySelector('.screen');
		var value = input.innerHTML;
		var key = this.innerHTML;
		var total;
		if(key == 'C') 
		{
			input.innerHTML = '';
			decimalAdded = false;
		}

		else if(key == '=') 
		{
			var equation = value;
			var lastChar = equation[equation.length - 1];

			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			if(equation)
			{
				total = eval(equation);
				if(total.toString().indexOf('.') != -1)
					total = total.toFixed(1);
          
			input.innerHTML = total;
			}

			decimalAdded = false;
		}


		else if(operators.indexOf(key) > -1) 
		{

			var lastChar = value[value.length - 1];

			if(value != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += key;
	
			else if(value == '' && key == '-') 
				input.innerHTML += key;

			if(operators.indexOf(lastChar) > -1 && value.length > 1) 
			{
				input.innerHTML = value.replace(/.$/, key);
			}

			decimalAdded = false;
		}

		else if(key == '.') 
		{
			if(!decimalAdded) 
			{
				input.innerHTML += key;
				decimalAdded = true;
			}
		}

		else 
		{
			input.innerHTML += key;
		}

		e.preventDefault();
	} 
}