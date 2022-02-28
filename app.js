const app = new Vue({
  el:'#app',
  data:{
    contacts: [
      {
        name: 'Marco',
        avatar: 'https://picsum.photos/200',
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
        avatar: 'https://picsum.photos/200',
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
      }  
    ]
  }

  

})