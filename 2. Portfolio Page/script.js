var typed = new Typed(".typing", {
    strings: ["Programmer", "Developer", "Learner"],
    typeSpeed: 100,
    backSpeed: 6,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Programmer", "Developer", "Learner"],
    typeSpeed: 100,
    backSpeed: 6,
    loop: true
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbzSKZnI9zfUT4EcszVGt9vJ2W7YwJsueC9SCPtb2IXpzuuRHrcT1oUrboultGAkgVaupQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// .then(response => console.log('Success!', response))
.then(response => {
    msg.innerHTML="Message Sent Successfully"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})
