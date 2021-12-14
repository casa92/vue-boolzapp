// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            lastAccess: '',
            userFilterText: '',
            currentActiveContact: 0,
            newMessage: '',
            thisContactImg : 'img/avatar',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
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
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
     
        methods: {
            showThisContact: function(index) {
                this.currentActiveContact = index;
            },
            sendNewMessage: function() {
                const newMessageTrimmed = this.newMessage.trim();
                if (newMessageTrimmed.length > 2) {
                    this.contacts[this.currentActiveContact].messages.push({
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: newMessageTrimmed,
                        status: 'sent'
                    });
                    this.newMessage = '';

                    setTimeout(() => {
                        this.contacts[this.currentActiveContact].messages.push({
                            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                            text: 'ok',
                            status: 'received'
                        })
                    }, 1000);
                    
                };
               
            },
            searchFilterText: function() {
                const newSearchFilterText = this.userFilterText.trim();
                this.contacts.forEach((element) => {
                    if( element.name.toLowerCase().includes( newSearchFilterText.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },
            lastDateMessage: function() {
                return this.messages[this.messages.length - 1];
                
            },
            
        },

        updated() {
            const container = this.$el.querySelector("#chat-container");
            container.scrollTop = container.scrollHeight;
        },

        mounted() {
            const container = this.$el.querySelector("#chat-container");
            container.scrollTop = container.scrollHeight;
        }
    }
)


console.log(lastDateMessage);