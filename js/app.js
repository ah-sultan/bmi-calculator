const submitBtn = document.getElementById('submitBtn')
let resultView = document.getElementById('view')
let bmiResult = document.getElementById('bmi-value')
let ctgText = document.getElementById('textMsg')


submitBtn.addEventListener('click', function () {

    const hFeet = parseInt(document.getElementById('feet').value)
    const hInchee = parseInt(document.getElementById('inchee').value)
    const weight = parseInt(document.getElementById('weight').value)

    totalInchee = (hFeet * 12) + hInchee

    incheeToMeter = totalInchee * 0.0254

    meterValue = incheeToMeter * incheeToMeter

    bmiValue = weight / meterValue

    bmiResult.innerHTML = bmiValue.toFixed(2)

    showMess(bmiValue)
})


function showMess(bmiValue) {


    if (bmiValue < 18.5) {
        ctgText.innerHTML = "You Are Under Weight"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        ctgText.innerHTML = "You Are Normal"
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        ctgText.innerHTML = "You Are Overweight"
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
        ctgText.innerHTML = "You Are Obese"
    } else if (bmiValue >= 35 && bmiValue <= 39.9) {
        ctgText.innerHTML = "You Are Severely Obese"
    } else if (bmiValue >= 40) {
        ctgText.innerHTML = "You Are Morbidly Obese"
    }
}

showMess()