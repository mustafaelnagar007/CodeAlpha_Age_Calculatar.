
 function submit(){
    
    const day = parseInt(document.getElementById('days').value);
    const month = parseInt(document.getElementById('Months').value) -1; 
   const year = parseInt(document.getElementById('Years').value);
   const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();
            const currentDay = today.getDate();
     console.log(today)

    const birthDate = new Date(year, month, day);
    let age = currentYear - birthDate.getFullYear();
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }
    let resultDiv = document.getElementById('result');
    if (isNaN(age) || age <= 0) {
        resultDiv.classList.remove('hidden');
        resultDiv.textContent = "Please enter a valid date of birth.";
    } else {
        resultDiv.classList.remove('hidden');

        resultDiv.textContent = `You are ${age} years old.`;
    }
}

