<template>
    <div class='fraction-part' :class='{ disabled: isDisabled }'>
        <input v-if='!isDisabled' type='text' :value='value' v-on:input='onChange' :disabled='isDisabled'/>
        <div v-else>{{ value }}</div>
    </div>  
</template>

<script>
export default {
    name: 'FractionPart',
    props: ['isDisabled', 'value', 'onChange']
}
</script>

<style scoped>

.fraction-part  {
    width: 45px;
    height: 45px;
    border: 1px solid gray;
    border-radius: 5px;
    overflow: hidden;
    margin: 2px;
    display: flex;
    justify-content: center;
}
.disabled {
    width: 100%;
    border: none;
    border: 1px solid gray;
    border-style: dashed;
    font-size: 1.5em;
}
.disabled > div {
    min-width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
}
.fraction-part input {
    border: none;
    text-align: center;
    font-size: 1.5em;
}
</style>