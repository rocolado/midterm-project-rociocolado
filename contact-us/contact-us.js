const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("textarea");
const submitBtn = document.getElementById("submit");

const form = {
    fullName: "",
    email: "",
    phone: "",
    message: ""
}

const postContactUs = () => {
    fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",
        body: JSON.stringify(form)
    })
    .then((response) => {
        if (response.status === 201) {
            const responseHTML = document.getElementById("form-response");
            let p = '<p id="p-success">El formulario se ha enviado correctamente</p>';

            responseHTML.innerHTML = p;
        } else {
            const responseHTML = document.getElementById("form-response");
            let p = '<p id="p-error">Error al enviar el formulario</p>';

            responseHTML.innerHTML = p;
        }

        clearForm();
    });
};

const clearForm = () => {
    fullName.value = "";
    email.value = ""; 
    phone.value = ""; 
    message.value = ""; 
    submitBtn.value = ""; 
}

const submit = (event) => {
    event.preventDefault();

    form.fullName = fullName.value;
    form.email = email.value;
    form.phone = phone.value;
    form.message = message.value;

    postContactUs();
}

submitBtn.addEventListener("click", submit);
