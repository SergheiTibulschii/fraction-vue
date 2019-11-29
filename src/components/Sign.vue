<template>
    <input v-bind:class="classes" type='text' maxlength="1" v-on:input='$event => handleSignChange($event, index)' :value='value' :disabled='isDisabled'/>
</template>

<script>
import fractionPart from './FractionPart'

export default {
    name: 'Sign',
    props: [
     'isDisabled', 'value', 'index'
    ],
    data() {
        return {}
    },
    methods: {
        handleSignChange(evt, index) {
            const { data } = evt
            this.$emit('changeSign', {value: data, index})
            if(data) this.$emit('calculate')
        }
    },
    computed: {
        classes(){
            return ({
            sign: true,
            disabled: this.isDisabled
         })
        }
    }
}
</script>

<style scoped>
.sign {
    width: 25px;
    height: 25px;
    align-self: center;
    border-radius: 3px;
    border: 1px solid gray;
    font-size: 1.5em;
}
.disabled {
    border: none;
}
.error {
    border: 1px solid red;
}
</style>