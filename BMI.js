function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('bmiResult').innerHTML = '<span>Please enter valid values!</span>';
        document.getElementById('bmiCategory').innerText = '';
        return;
    }

    // Calculate BMI
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    // Display BMI Result
    document.getElementById('bmiResult').innerHTML = `Your BMI is: <span>${bmi}</span>`; // Use backticks here

    // Determine Category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese'; // Capitalized for consistency
    }

    document.getElementById('bmiCategory').innerHTML = `Category: <span>${category}</span>`; // Use backticks here
       }