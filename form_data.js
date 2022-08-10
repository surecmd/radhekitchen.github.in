

const scriptURL = 'https://script.google.com/macros/s/AKfycbyKwY9tqQvlrskQBnF1-YXJs_ME8zX0OYUW7KAZV-gVhv_6m8UHYhqvPgPMkPaJKNIIgA/exec'
  const form = document.forms['submit-to-google-sheet']
  const success = document.getElementById('success')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
       success.innerHTML = 'Data is successfully send.';
       setTimeout(function(){
        success.innerHTML = '';
       },10000)
       form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })