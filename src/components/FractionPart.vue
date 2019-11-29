<template>
    <div class='fraction-part' :class='{ disabled: isDisabled }'>
        <input type='text' :value='value' v-on:input='onChange' :disabled='isDisabled'/>
    </div>
</template>

<script>
export default {
    name: 'FractionPart',
    props: ['isDisabled', 'value', 'onChange'],
}
</script>

<style scoped>
:root {
    --fraction-width: 40px;
}

.fraction-part  {
    width: 45px;
    height: 45px;
    border: 1px solid gray;
    border-radius: 5px;
    overflow: hidden;
    margin: 2px;
}
.disabled {
    border: none;
}
.fraction-part input {
    font-size: 1.5em;
}
</style>