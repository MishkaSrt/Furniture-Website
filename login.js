document.getElementById('login').addEventListener('submit',function(event){
        event.preventDefault();
    
        let errors = {};
    
        let form = event.target;
    
        let username = form.querySelector('[name = "username"]').value;
    
        if(username.length < 4) {
            errors.username = 'Min 4 letters';
        }
    
        let password = form.querySelector('[name = "password"]').value;
        if(password.length < 7){
            errors.password = 'Min 7 letters';
        }

        form.querySelectorAll('.error-text').forEach(item => {
            item.textContent = ' ';
        });
    
        for(let name in errors){
            let errorPlaceholder = document.getElementById('error_' + name);
    
            if(errorPlaceholder){
                errorPlaceholder.textContent = errors[name];
            }
    
        }
        if(Object.keys(errors).length === 0){
            form.submit();
        }
        console.log(errors);
        
    })