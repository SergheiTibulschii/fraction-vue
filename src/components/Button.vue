<template>
    <button @click="onClick">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: ['text', 'onClick']
}
</script>

<style>
button {
    display: inline-block;
    background: transparent;
    border: 1px solid green;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
</style>