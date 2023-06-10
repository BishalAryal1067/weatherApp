<script setup>
import {ref} from 'vue';
import AppNavigation from './components/AppNavigation.vue';
import HomeComponent from './components/HomeComponent.vue';




</script>

<template>
 <AppNavigation :toggle-modal="toggleModal"/>
 <HomeComponent/>
 <RouterView/> 
</template>

