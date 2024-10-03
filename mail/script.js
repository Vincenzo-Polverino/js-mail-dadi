console.log('linked');

//Chiedi all’utente la sua email
let mail = prompt('inserisci la tua email')

let mail_list = ['prova@test.com', 'caio@sempronio.com', 'tizio@qualcosa.com']

// controlla che sia nella lista di chi può accedere
let present_mail = mail_list.includes(mail)

//stampa un messaggio appropriato sull’esito del controllo.
if(present_mail === true){
    console.log('E-mail presente in lista');
    
}else{
    console.log('E-mail non presente in lista');   
}
