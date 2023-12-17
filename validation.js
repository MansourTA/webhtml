document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (firstName === '' || lastName === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
        } else if (!validateName(firstName) || !validateName(lastName)) {
            alert('Le nom et le prénom ne doivent pas contenir de chiffres.');
        } else if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse e-mail valide.');
        } else {
            alert('Formulaire soumis avec succès!');
            // form.submit(); // Soumettre le formulaire si la validation réussit
        }
    });

    function validateName(name) {
        const re = /^[A-Za-z]+$/; // Expression régulière pour les lettres uniquement
        return re.test(name);
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
