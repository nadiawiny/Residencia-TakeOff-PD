<template>
  <v-app> <!--tudo que tiver dentro dele vai funcionar com vuetify "PAI"-->
    <v-main>
      <v-app-bar color = 'green'>Maria</v-app-bar> <!--toolbar-->
        <div v-for="(message, index) in messages" :key="index">
          <message-card :messageProp="message"/>
        </div>
      <v-app-bar fixed bottom color = '#424242'><!--bottom-bar-->
        <v-text-field v-model="textInput" @keyup.enter="sendMessage()" solo hide-details label="Enviar mensagem..."></v-text-field>
        <v-btn @click="sendMessage()" icon color="blue">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-app-bar> 
    </v-main>
  </v-app>
  </template>
  
  <script>
    import MessageCard from './components/MessageCard.vue'
    export default{
      components: {
        MessageCard
      },
      data(){ // onde vai ta as variaveis da nossa aplicação
        return{
          textInput: '',
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
        sendMessage(){
          let message = {
            name: "Eu",
            text: this.textInput
          }
          this.messages.push(message)
          this.textInput = ''
        }
      }
      
    }
  </script>
  