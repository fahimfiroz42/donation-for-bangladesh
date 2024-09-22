const historyView=document.getElementById('history-form')
const historyBtn=document.getElementById('history-btn')
const donationBtn=document.getElementById('donation-btn')
const donationForm=document.getElementById('donation-form')
const blogBtn=document.getElementById('blog')

const donate2=document.getElementById('donate2')
const donate3=document.getElementById('donate3')

const donateBtn1=document.getElementById('donate1')



// reusable function to get input value
function getInputValueById(id){
    const inputValue=document.getElementById(id).value
    const convert=parseFloat(inputValue)
    return convert
    
}
// reusable function to get innerText and convert to number
function getInnerTextById(id){
    const inputValue=document.getElementById(id).innerText
    const convert=parseFloat(inputValue)
    return convert
    
}

// reusable function to get innerText

function getInnerTextValueById(id){
    const inputValue=document.getElementById(id)
    return inputValue
    
}


donateBtn1.addEventListener('click',function(){
  
    const convertNumber=getInputValueById('donate-value')
    const totalValue=getInnerTextById('total-amount-noakhali')
    const totalBalance=getInnerTextById('total-balance')
    const remainingBalance=totalBalance-convertNumber
    const addRemainigBalance=getInnerTextValueById('total-balance')
    addRemainigBalance.innerText=remainingBalance

    const subtotal=convertNumber+totalValue
    const noakhaliAmount=getInnerTextValueById('total-amount-noakhali')
    noakhaliAmount.innerText = subtotal
// create new div 
    const newDiv=document.createElement('div')
    newDiv.classList.add("border" ,"rounded-xl", "p-5")
    newDiv.innerHTML=`<h1 class="font-bold text-xl">${convertNumber} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
             <p class="text-lightdark text-base font-light">Date : ${new Date().toDateString()} ${new Date().toTimeString()}</p>
`
// push the item
historyView.appendChild(newDiv)
 


})

donate2.addEventListener('click',function(){
    const convertNumber=getInputValueById('donate-value-feni')
    const totalValue=getInnerTextById('total-amount-feni')
    const totalBalance=getInnerTextById('total-balance')
    const remainingBalance=totalBalance-convertNumber
    const addRemainigBalance=getInnerTextValueById('total-balance')
    addRemainigBalance.innerText=remainingBalance

    const subtotal=convertNumber+totalValue
    const feniAmount=getInnerTextValueById('total-amount-feni')
    feniAmount.innerText = subtotal

// create new div 
const newDiv=document.createElement('div')
newDiv.classList.add("border" ,"rounded-xl", "p-5")
newDiv.innerHTML=`<h1 class="font-bold text-xl">${convertNumber} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
         <p class="text-lightdark text-base font-light">Date : ${new Date().toDateString()} ${new Date().toTimeString()}</p>
`
// push the item
historyView.appendChild(newDiv)



})

donate3.addEventListener('click',function(){
    const convertNumber=getInputValueById('donate-value-quota')
    const totalValue=getInnerTextById('total-amount-quota')
    const totalBalance=getInnerTextById('total-balance')
    const remainingBalance=totalBalance-convertNumber
    const addRemainigBalance=getInnerTextValueById('total-balance')
    addRemainigBalance.innerText=remainingBalance

    const subtotal=convertNumber+totalValue
    const quotaAmount=getInnerTextValueById('total-amount-quota')
    quotaAmount.innerText = subtotal

    // create new div 
const newDiv=document.createElement('div')

newDiv.classList.add("border" ,"rounded-xl", "p-5")
newDiv.innerHTML=`<h1 class="font-bold text-xl">${convertNumber} Taka is Donated for Quota Movement-2024 , Bangladesh</h1>
        <p class="text-lightdark text-base font-light">Date : ${new Date().toDateString()} ${new Date().toTimeString()}</p>
`
// push the item
historyView.appendChild(newDiv)


})














// history form functionality
historyBtn.addEventListener('click',function(){


    historyBtn.classList.add('bg-lightgreen')
    historyView.classList.remove('hidden')
    donationBtn.classList.remove('bg-lightgreen')
    donationBtn.classList.add('text-lightdark','bg-white')
    donationForm.classList.add('hidden')

})

// donation form back functionality


donationBtn.addEventListener('click',function(){
    
    historyBtn.classList.remove('bg-lightgreen')
    historyView.classList.add('hidden')
    // historyBtn.classList.add('text-lightdark','bg-white')
    donationBtn.classList.add('bg-lightgreen')
    donationBtn.classList.remove('text-lightdark','bg-white')
    donationForm.classList.remove('hidden')
})
