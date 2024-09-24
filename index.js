const historyView=document.getElementById('history-form')
const historyBtn=document.getElementById('history-btn')
const donationBtn=document.getElementById('donation-btn')
const donationForm=document.getElementById('donation-form')
const blogBtn=document.getElementById('blog')
const modal=document.getElementById('my_modal_1')
const modal1=document.getElementById('my_modal_5')
const donate2=document.getElementById('donate2')
const donate3=document.getElementById('donate3')
const donateBtn1=document.getElementById('donate1')



// reusable function to get input value
function getInputValueById(id){
    const inputValue=document.getElementById(id).value
    const convert=Number(inputValue)
    return convert
    
}
// reusable function to get innerText and convert to number
function getInnerTextById(id){
    const inputValue=document.getElementById(id).innerText
    const convert=Number(inputValue)
    return convert
    
}

// reusable function to get innerText

function getInnerTextValueById(id){
    const inputValue=document.getElementById(id)
    return inputValue
    
}

// reusable function to toggle the btn
function toggleForm(historyBtn, donationBtn, historyView, donationForm) {
    historyBtn.classList.toggle('bg-lightgreen');
    historyView.classList.toggle('hidden');
    donationBtn.classList.toggle('bg-lightgreen');
    donationBtn.classList.toggle('text-lightdark', 'bg-white');
    donationForm.classList.toggle('hidden');
  }


// reusable function to donate button
  function donate(id, totalId, balanceId, location) {
    const convertNumber = getInputValueById(id);
    const totalValue = getInnerTextById(totalId);
    const totalBalance = getInnerTextById(balanceId);
  
    if (convertNumber > totalBalance || convertNumber <= 0 || isNaN(convertNumber)) {
      modal.showModal();
      return;
    } else {
      modal1.showModal();
    }
  
    const remainingBalance = totalBalance - convertNumber;
    const addRemainigBalance = getInnerTextValueById(balanceId);
    addRemainigBalance.innerText = remainingBalance;
  
    const subtotal = convertNumber + totalValue;
    const locationAmount = getInnerTextValueById(totalId);
    locationAmount.innerText = subtotal;
  
    // create new div
    const newDiv = document.createElement('div');
    newDiv.classList.add("border", "rounded-xl", "p-5");
    newDiv.innerHTML = `<h1 class="font-bold text-xl">${convertNumber} Taka is Donated for ${location} at ${location}, Bangladesh</h1>
               <p class="text-lightdark text-base font-light">Date : ${new Date().toDateString()} ${new Date().toTimeString()}</p>
  `;
    // push the item
    historyView.appendChild(newDiv);
  }


//   donate button 1
  donateBtn1.addEventListener('click', function() {
    donate('donate-value', 'total-amount-noakhali', 'total-balance', 'famine-2024 at Noakhali');
  });
  
//   donate button 2
  donate2.addEventListener('click', function() {
    donate('donate-value-feni', 'total-amount-feni', 'total-balance', 'famine-2024 at Feni');
  });
  

//donate button 3
   
  donate3.addEventListener('click', function() {
    donate('donate-value-quota', 'total-amount-quota', 'total-balance', 'Quota Movement-2024');
  });



// history form functionality
historyBtn.addEventListener('click', function() {
    toggleForm(historyBtn, donationBtn, historyView, donationForm);
  });
  


// donation form back functionality
donationBtn.addEventListener('click', function() {
    toggleForm(donationBtn, historyBtn, donationForm, historyView);
  });
