<template>
    <div class='error'>{{ message }}</div>
</template>

<script>
export default {
    name: 'Error',
    props: ['message']
}
</script>

<style>
.error {
      padding: 15px 25px;
      color: red;
}
</style>