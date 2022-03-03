const textTime = document.querySelectorAll('.text-time');

const app = new Vue({
  el:'#app',
  data:{
    currentIndex: 0,
    newMessage: '',
    search: '',
    isActiveNav: false,
    ActiveMessage: null,
    contacts: [
      {
        name: 'Marco',
        avatar: 'img/avatar_01.jpeg',
        visible: true,
        messages: [
          {
            date: '10/01/2022 15:50:00',
            text: 'hai portato a spasso il cane?',
            status: 'sent',
            isActiveMessage: false
          },
          {
            date: '10/01/2022 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
            isActiveMessage: false
          },
          {
            date: '10/01/2022 15:50:00',
            text: 'Tutto fatto!',
            status: 'received',
            isActiveMessage: false
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
            status: 'sent',
            isActiveMessage: false
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            isActiveMessage: false
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            isActiveMessage: false
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
            status: 'received',
            isActiveMessage: false
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            isActiveMessage: false
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Ah scusa!',
            status: 'received',
            isActiveMessage: false
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
            status: 'sent',
            isActiveMessage: false
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'si, ma preferirei andare al cinema',
            status: 'received',
            isActiveMessage: false
          },
        ],
      },
    ],
  },

  methods:{
    sendMessageAuto: function(currentIndex){
      setTimeout(() => {
        const item = {
          date: '28/02/2022 12:18:36',
          text: 'ok',
          status: 'received',
        };
        this.contacts[currentIndex].messages.push(item);
      }, 3000)
    },

    sendMessage: function(currentIndex){
      if(this.newMessage !== ''){
        const item = {
          date: '28/02/2022 12:18:36',
          text: this.newMessage,
          status: 'sent',
        };
        this.contacts[currentIndex].messages.push(item);
        this.newMessage = '';
        this.sendMessageAuto(currentIndex)
      }

    },
    findChat: function(){
      for (i = 0; i < this.contacts.length; i++){
        
        if (this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())){
          this.contacts[i].visible = true
        } else {
          this.contacts[i].visible = false
        }
      }
    },
    openDropdownNav: function(){
      this.isActiveNav = !this.isActiveNav
    },
    openDropdownMessage: function(currentIndex, i){
      
      if (this.ActiveMessage == i){
        this.ActiveMessage = null
      } else {
        this.ActiveMessage = i;
      }
    },
    deleteMessage: function(){
      
    }
   },

})



