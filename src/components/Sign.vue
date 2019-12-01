<template>
    <input 
        v-bind:class="classes" 
        type='text'
        @input='$event => handleSignChange($event, index)' 
        :value='value' 
        :disabled='isDisabled'
        maxlength="2"
    />
</template>

<script>
import fractionPart from './FractionPart'

export default {
    name: 'Sign',
    props: [
     'isDisabled', 'value', 'index', 'pattern'
    ],
    methods: {
        handleSignChange(evt, index) {
            const { data } = evt
            evt.target.value = data;
            if(!this.pattern.includes(data)) {
                this.$emit('signError', `Please use one of the specified signs ${this.pattern.join(',')}`)
                return
            }
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
    },
    beforeMount() {
        this.$emit('registerSign', this.index)
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
    background: transparent;
}
.error {
    border: 1px solid red;
}
input {
        border: none;
    text-align: center;
}
</style>