
//função para verificar se o email digitado é válido e enviar uma mensagem de erro caso não seja

function checkEmail() {
    //primeiro, verifica se o input não foi prenchido ou se não é do tipo @gmail.com

    if (document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 || document.forms[0].email.value.indexOf('gmail')==-1 || document.forms[0].email.value.indexOf('com')==-1) {
        //não sendo a primeira opção testada, testa se o email não é do tipo @hotmail.com

        if (document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 || document.forms[0].email.value.indexOf('hotmail')==-1 || document.forms[0].email.value.indexOf('com')==-1) {
            //não sendo a segunda opção testada, testa se o email não é do tipo @rocketseat.com

            if (document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 || document.forms[0].email.value.indexOf('rocketseat')==-1 || document.forms[0].email.value.indexOf('com')==-1) {
                // não sendo a terceira, é emitido um alerta com uma mensagem ao usuário
                
                alert("Escreva um email do tipo: @gmail.com, @rocketseat.com ou @hotmail.com")
                return false;
            }
            
        }
    }
    
}

