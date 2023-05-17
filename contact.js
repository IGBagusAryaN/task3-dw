function submitData(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == ""){
        return alert("Nama harus diisi")
    }else if(email =="") {
        return alert("Email harus diisi")
    }else if(phone =="") {
        return alert("Phone harus diisi")
    }else if(subject =="") {
        return alert("Subject harus dipilih")
    }else if(message =="") {
        return alert("Message harus diisi")
    }

    let emailReceiver = "aryabagus453@gmail.com"

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silahkan kontak saya dinomor ${phone}, Terima kasih.`
    a.click();

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    let emailer = {
        name,
        email,
        subject,
        message,
    };
}

