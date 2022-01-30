const body = document.body
document.querySelector('form').addEventListener('submit', handleEvent)
let result= document.createElement('div')
let status =document.createElement('p')
result.classList.add('result')

function handleEvent(e){
	e.preventDefault()
	let weight = document.getElementById('weight').value
	let height = document.getElementById('height').value
	calcBMI(height, weight)
}

function calcBMI(height, weight){
	const bmi = (weight / Math.pow((height/100),2)).toFixed(2) 
	alert(bmi)
	/*if(bmi != 'NaN'){
		let nutritionStatus 
	if (bmi<18.5) {
		nutritionStatus= 'UnderWeight'
	}
	else if(bmi>=18.5& bmi<= 24.9){
		nutritionStatus='Normal Weight'
	}
	else if(bmi>=25& bmi<= 29.9){
		nutritionStatus='Overweight'
	}
	else{
		nutritionStatus='Obese'
	}
	function showResult(bmi,nutritionStatus){
		bimNumber.innerText='BMI': ${bmi}
		status.innerText=nutritionStatus
		result.append(bimNumber)
		result.append(status)
		body.append(result)
	}

}