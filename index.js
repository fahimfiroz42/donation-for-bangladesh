const historyView=document.getElementById('history-form')
const historyBtn=document.getElementById('history-btn')
const donationBtn=document.getElementById('donation-btn')
const donationForm=document.getElementById('donation-form')
const blogBtn=document.getElementById('blog')












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
