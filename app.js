const textTime = document.querySelectorAll('.text-time');

const app = new Vue({
  el:'#app',
  data:{
    currentIndex: 0,
    contacts: [
      {
        name: 'Marco',
        avatar: 'img/avatar_01.jpeg',
        visible: true,
        messages: [
          {
            date: '10/01/2022 15:50:00',
            text: 'hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2022 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2022 15:50:00',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      { 
        name: 'Fabio',
        avatar: 'img/avatar_02.jpeg',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_04.jpeg',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:20:10',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: 'img/avatar_05.jpeg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:50:00',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'si, ma preferirei andare al cinema',
            status: 'received'
          },
        ],
      },
    ],
  },

  methods:{
    
   }

})