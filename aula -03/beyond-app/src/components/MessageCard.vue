<template>
    <v-card :class="messageProp.name != 'Eu' ? 'teal' : 'purple'" outlined class="ma-3 accent-4">
     <v-card-subtitle class="front-weight-bold">{{ messageProp.name }}</v-card-subtitle>
     <v-card-text>{{ messageProp.text }}</v-card-text>
   </v-card> 
 </template>
 
<script>
export default {
    props: {
        messageProp: {
            type: Object,
            required: true
        }
        
    }

}
</script>