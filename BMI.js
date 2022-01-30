const body = document.body
document.querySelector('form').addEventListener('submit', handleEvent)
let result= document.createElement('div')
let bimNumber=document.createElement('p')
let rangeNum=document.createElement('p')
let status =document.createElement('p')
let health_risk=document.createElement('p')


result.classList.add('result')

function handleEvent(e){
	e.preventDefault() 
	let weight = document.getElementById('weight').value
	let height = document.getElementById('height').value
	calcBMI(height, weight)
}

function calcBMI(height, weight){
	const bmi = (weight / Math.pow((height/100),2)).toFixed(2) 
	if(bmi != 'NaN'){
		let nutritionStatus 
		let bmiRange
		let risk

	if (bmi < 18.5) {
		nutritionStatus= 'Under Weight'
		bmiRange='Range: 18.4 and below'
		risk='Malnutrision Risk'
	}
	else if(bmi >= 18.5 & bmi <= 24.9){
		nutritionStatus='Normal Weight'
		bmiRange='Range: 18.5 - 24.9'
		risk='Low Risk'
	}
	else if(bmi>=25 & bmi<= 29.9){
		nutritionStatus='Overweight'
		bmiRange='Range: 25 - 29.9'
		risk='Enchanced Risk'
	}
	else if(bmi>=30 & bmi<= 34.9){
		nutritionStatus='Moderately Obese'
		bmiRange='Range: 30 - 39.9'
		risk='Medium Risk'
	}
	else if(bmi>=35 & bmi<= 39.9){
		nutritionStatus='Severely Obese'
		bmiRange='Range: 35 - 39.9'
		risk='High Risk'
	}
	else{
		nutritionStatus='Very Severely Obese'
		bmiRange='Range: 40 and above'
		risk='Very High Risk'
	}
	showResult(bmi,bmiRange,nutritionStatus,risk)
	}
}

	function showResult(bmi,bmiRange,nutritionStatus,risk){
		bimNumber.innerText=`Your BMI: ${bmi}`
		rangeNum.innerText= bmiRange
		status.innerText= `BMI Category: ${nutritionStatus}`
		health_risk.innerText=`Health Risk: ${risk}`
		result.append(bimNumber)
		result.append(bmiRange)
		result.append(status)
		result.append(health_risk)
		

		body.append(result)
	}

