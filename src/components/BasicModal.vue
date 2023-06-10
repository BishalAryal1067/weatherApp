<template>
    <Transition name="outer-body">
        <div class="information-modal" v-show="showInformation">
            <Transition name="inner-body">
                <div class="modal-content" v-if="showInformation">
                    <slot></slot>
                    <button class="close-modal-btn" @click="$emit('closeModal')">Close</button>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
defineEmits(['closeModal']);
defineProps({
    showInformation: {
        type: Boolean,
        default: false,
    }
})
</script>

<style  scoped>
@import url('../assets/main.css');

* {
    font-family: var(--base-font);
}

.information-modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.269);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: antiquewhite;
    min-width: fit-content;
    min-height: fit-content;
    box-sizing: border-box;
    padding: 2rem 4rem;
    border-radius: .5rem;
}


p,
li {
    font-size: 1.1rem;
}

.outer-body-enter-active,
.outer-body-leave-active{
  transition: opacity .45s ease-in-out;
}

.outer-body-enter-from,
.outer-body-leave-to{
    opacity:0;
}

.inner-body-enter-active,
.inner-body-leave-active{
  transition: all .5s ease-in-out;
}

.inner-body-enter-from{
    opacity: 0;
    transform: scale(.65);
}

.inner-body-leave-to{
    opacity: 1;
    transform: scale(1);
}

.close-modal-btn{
    font-family: var(--base-font);
    background-color: rgba(223, 13, 13, 0.825);
    color: whitesmoke;
    font-size: 1.1rem;
    border: none;
    outline: transparent;
    padding:.5rem 1.75rem;
    border-radius: .25rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
}
</style>