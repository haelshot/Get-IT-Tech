function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/2348188164188?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
}

function sendToEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value;

    const emailSubject = subject;
    const emailBody = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const mailtoUrl = `mailto:abdukul18@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.open(mailtoUrl, '_blank');
}

$(document).ready(function(){
    $('.collapse').collapse('hide');
  });