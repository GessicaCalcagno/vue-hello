// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// console.log(Vue);

const { createApp } = Vue;

createApp({
  // Qui andranno dati
  data() {
    return {
      greeting:
        "Dimmi qual è il tuo segno zodiacale e dirò da quale animale ti sei evoluto! ",
      zo: "",
      zo1: "",
      message: "",
      imageUrl: "",
    };
  },
  methods: {
    // Qua mettiamo tutte le funzioni che possiamo invocare nella nostra app
    //PARTE LOGICA
    funnyMessage: function () {
      this.zoo = "";
      this.message = "Dalle scimmie ♥";
      this.imageUrl = "./img/scimmia.jpg";
    },
  },
}).mount("#app");
