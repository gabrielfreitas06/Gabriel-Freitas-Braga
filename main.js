/*                                    Meu Site                                              */

/* Variáveis */

/* Variáveis pelo Bootstrap */
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
/* Variáveis pelo Bootstrap */


/* Variáveis */



/* Função do Bootstrap para fazer um modal */
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})