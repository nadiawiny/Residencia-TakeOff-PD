<template>
  <v-app> <!--tudo que tiver dentro dele vai funcionar com vuetify "PAI"-->
    <v-main>
      <v-app-bar color = 'green'>Maria</v-app-bar> <!--toolbar-->
        <div v-for="(message, index) in messages" :key="index">
          <message-card :messageProp="message"/>
        </div>
        <BottomBar @send-message = "addMassage($event)" />
    </v-main>
  </v-app>
  </template>
  
  <script>
    import MessageCard from './components/MessageCard.vue'
    import BottomBar from './components/BottomBar.vue'

    export default{
      components: {
        MessageCard,
        BottomBar
      },
      data(){ // onde vai ta as variaveis da nossa aplicação
        return{
  
          messages: [
            {
              name: 'Maria',
              text: 'olá'
            },
            {
              name: 'Maria',
              text: 'tudo bem?'
            }
          ]
        }
      },
      methods: {
        addMassage(e){
          this.messages.push(e)
        }
      }
      
    }
  </script>
  