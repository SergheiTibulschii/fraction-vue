<template>
    <div :class='classes'>
        <fractionPart :value='num' :onChange='handleNumChange' :isDisabled='isDisabled'/>
        <fractionPart v-if='num !== 0' :value='denom' :onChange='handleDenomChange' :isDisabled='isDisabled'/>
    </div>
</template>

<script>
import fractionPart from './FractionPart'

export default {
    name: 'Fraction',
    props: [ 'isDisabled', 'num', 'denom', 'index' ],
    data() {
        return {
            value: [this.num, this.denom]
        }
    },
    components: {
        fractionPart
    },
    methods: {
        handleNumChange(evt) {
            const { value } = evt.target
            this.value[0] = value && +value
            this.$emit('fractionChange', {value: this.value, index: this.index})
            if(value) this.$emit('calculate')
        },
        handleDenomChange(evt) {
            const { value } = evt.target
            this.value[1] = value && +value
            this.$emit('fractionChange', {value: this.value, index: this.index})
            if(value) this.$emit('calculate')
        }
    },
    computed: {
        classes() {
         return {
             fraction: true,
             nullable: this.num === 0
            }
        }
    }
}
</script>

<style scoped>
.fraction {
    display: flex;
    flex-direction: column;
    padding: 5px;
}
.nullable {
    justify-content: center;
}
.result {
    display: flex;
    flex-direction: column;
}
</style>