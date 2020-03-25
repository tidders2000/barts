const clear = () => {
    document.getElementById("contact_form").reset();
    $('#wmodal').modal('hide')
}

const confirm = () => {
    html = `<div class="alert alert-success" role="alert">
   Message sent
  </div>`

    document.querySelector('.container-fluid').insertAdjacentHTML('beforebegin', html);
    setTimeout(function() { document.querySelector('.alert').style.display = 'none'; }, 5000);

}


function sendMail(contactform) {

    emailjs.send("gmail", "resume", {
        "from_name": contactform.name.value,
        "from_email": contactform.email.value,
        "subject": contactform.subject.value,
        "message": contactform.message.value,
        "contact": contactform.contactNumber.value,


    })

    .then(
        function(response) {
            console.log("SUCCESS", response);
            clear();
            confirm();

        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}
// clear down fields
//display success alert
//auto close alert