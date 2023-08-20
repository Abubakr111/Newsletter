const input = document.getElementById('email'),
    subscibe = document.getElementById('submit');

function validateEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
     }
   
subscibe.addEventListener('click', function(e){
    if(validateEmail(input.value)) {
        const secondDiv = document.querySelector('.container-2'),
        firstDiv =  document.querySelector('.container'),
        enterEmail = document.getElementById('email-input'),
        dismiss = document.querySelector('.dismiss');
        
        secondDiv.style.display = 'block';
        firstDiv.style.display = 'none';
        enterEmail.textContent = input.value;
        
        
    dismiss.addEventListener('click', function(){
        window.location.reload();
    })

    }
    else {
        const valid = document.getElementById('required');

        valid.style.display = 'block';
        input.style.border = '1px solid red';
        input.style.backgroundColor = 'hsl(2, 58%, 92%)';
        input.style.color = 'red';
        
        
    }
})


