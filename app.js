const textTime = document.querySelectorAll('.text-time');

const app = new Vue({
  el:'#app',
  data:{
    currentIndex: 0,
    newMessage: '',
    search: '',
    isActiveNav: false,
    isActiveProfile: false,
    activeMessage: null,
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
          },
          {
            date: '10/01/2022 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
          },
          {
            date: '10/01/2022 15:50:00',
            text: 'Tutto fatto!',
            status: 'received',
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
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
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
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Ah scusa!',
            status: 'received',
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
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'si, ma preferirei andare al cinema',
            status: 'received',
          },
        ],
      },
    ],
  },

  methods:{
    sendMessageAuto: function(currentIndex){
      setTimeout(() => {
        const item = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: 'ok',
          status: 'received',
        };
        this.contacts[currentIndex].messages.push(item);
      }, 3000)
    },

    sendMessage: function(currentIndex){
      if(this.newMessage !== ''){
        const item = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
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

    openDropdownProfile: function(){
      this.isActiveProfile = !this.isActiveProfile
    },

    openDropdownMessage: function(currentIndex, i){
      
      if (this.activeMessage == i){
        this.activeMessage = null
      } else {
        this.activeMessage = i;
      }
    },
    deleteMessage: function(i){
      this.contacts[this.currentIndex].messages.splice(i, 1);
      if (this.activeMessage == i){
        this.activeMessage = null
      } else {
        this.activeMessage = i;
      }
    }
   },

})



