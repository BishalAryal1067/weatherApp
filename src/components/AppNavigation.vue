<template>
    <header>
        <div class="navigation-bar">
            <router-link to="/" class="nav-link"><i class="fa-solid fa-cloud-meatball"></i>Weather Information</router-link>
        </div>
        <div class="app-information">
            <i class="fa-solid fa-circle-info" @click="toggleModal"></i>
            <i class="fa-solid fa-circle-plus"></i>
        </div>
    </header>
    
    <!--Help / Information Modal-->
    <BasicModal :show-information="showInformation" @close-modal="toggleModal">
        <div class="about">
            <h3>About</h3>
            <p>The weather information app helps user to track/view the weather forecast of selected location</p>
        </div>
        <div class="how-it-works">
            <h3>
                How it works
            </h3>
            <ol>
                <li>Search for your desired location</li>
                <li>Select your location from the available results</li>
                <li>Click on the '+' button on the top right to track the weather of the location</li>
            </ol>
        </div>
        <!-- <button class="close-modal-btn" @closeModal="toggleModal">Close</button> -->
    </BasicModal>

    <BasicModal>
        
    </BasicModal>
</template>

<script setup> 
import {ref} from 'vue';

import BasicModal from './BasicModal.vue';

let showInformation = ref(false);
let toggleModal = ()=>{
    showInformation.value = !showInformation.value;
}
</script>


<style scoped>
@import url('../assets/main.css');

header{
    display: flex;
    flex-wrap: wrap;
}

.navigation-bar {
    font-family: var(--base-font);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;
    justify-content: center;
    padding: 1.5rem 0;
    color: white;
    font-size: 1.15rem;
}

.nav-link{
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: .75rem;
    cursor: pointer;
}

.app-information{
    min-width: fit-content;
    width: 25%;
    display: flex;
    align-items: center;
    gap: .85rem;
    color: rgba(245, 245, 245, 0.811);
}

.app-information i{
    font-size: 1.5rem;
    transition: all .35s ease-in-out;
}

.app-information i:hover{
    color: whitesmoke;
    cursor: pointer;
    transform: translateY(-1px);
}

.navigation-bar a{
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    gap: .75rem;
}


</style>
