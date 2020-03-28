const clear = () => {
    document.getElementById("con_form").reset();
    $('#exampleModal').modal('hide')
}

const confirm = () => {
    html = `<div class="alert alert-success" role="alert">
       Message sent
      </div>`

    document.querySelector('.splash').insertAdjacentHTML('beforebegin', html);
    setTimeout(function() { document.querySelector('.alert').style.display = 'none'; }, 5000);

}


function sendMail(contactform) {


    emailjs.send("gmail", "resume", {

        "from_name": contactform.name.value,
        "subject": 'Emergency',
        "from_email": '',
        "message": contactform.message.value,
        "contactNumber": contactform.contactNumber.value,

    })

    .then(
        function(response) {
            console.log("SUCCESS", response);

            confirm();
            clear();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}

function sendMailTwo(form) {


    emailjs.send("gmail", "resume", {

        "from_name": form.name.value,
        "subject": form.subject.value,
        "from_email": form.email.value,
        "message": form.message.value,
        "contactNumber": "",

    })

    .then(
        function(response) {
            console.log("SUCCESS", response);

            confirm();
            clear();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}