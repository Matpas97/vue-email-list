// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const NUM_EMAILS = 10;

const app = new Vue({
  el: '#app',
  data: {
    loading: true,
    emails: [],
  },
  created() {
    let countdown = 0;

    for (let i = 0; i < NUM_EMAILS; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          console.log(response);
          const { data, status } = response;
          countdown++;
          if (status === 200) {
            this.emails.push(data.response);
          }
          if (countdown === NUM_EMAILS) {
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log('ERRORE!', error);
        });
    }
  },
});

