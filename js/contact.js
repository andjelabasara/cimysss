//ovde smo odradili validacije

const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const messagesOne = document.getElementById('poruka');

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Ime je obavezno!!')
  }


  if (email.value.length <= 6) {
    messages.push('Email mora biti duži od 6 karaktera!!')
  }

  if (email.value.length >= 35) {
    messages.push('Email mora biti kraci od 35 karaktera!!')
  }

  if (email.value === 'email') {
    messages.push('Email nije lozinka!!')
  }

  if(messagesOne.value.length < 100){
    messages.push('Upišite neki duži komentar, želimo da vidimo koliko ste uzbudjeni oko putovanja :)')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})