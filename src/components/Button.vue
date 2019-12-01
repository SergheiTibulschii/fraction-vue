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
</style>