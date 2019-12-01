<template>
    <div id='header'>
        <router-link class='menu-item' to='/'>Fractions</router-link>
        <router-link class='menu-item' to='/comments'>Headers</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderMenu'
}
</script>

<style>
#header {
    display: flex;
    padding: 10px;
}
.menu-item {
    padding: 10px 15px;
    border: 1px solid green;
    border-radius: 5px;
    display: block;
    color: black;
}
.menu-item:not(:last-child) {
    margin-right: 10px;
}
</style>