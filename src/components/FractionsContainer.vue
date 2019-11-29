<template>
  <div>
    <div class='fraction-container'>
        <template  v-for='([num, denom],index) in fractions'>
            <fraction 
              v-on:fractionChange='handleFractionChange' 
              :num='num' 
              :denom='denom' 
              :index='index'
              v-bind:key='`fraction-${index}`'
              v-on:calculate='calculate'
            />
            <sign 
                :value='signs[index]'
                :index='index'
                v-on:changeSign='onSignChange' 
                v-bind:key='`sign-${index}`' 
                v-if='index !== fractions.length-1'
                v-on:calculate='calculate'
              />
        </template>
        <sign :isDisabled='true' value='='/>
        <fraction :num='numeratorResult' :denom='denominatorResult' :isDisabled='true'/>
    </div>
    <button id='add-fraction' v-on:click='addFraction'>Add fraction</button>
  </div>
</template>

<script>
import fraction from './Fraction'
import sign from './Sign'
import { process } from '../utils/process'

export default {
  name: 'FractionsContainer',
  data () {
    return {
      fractions: [
        [1,2], [3,4]
      ],
      numeratorResult: null,
      denominatorResult: null,
      signs: []
    }
  },
  methods: {
    handleFractionChange({value, index}) {
      this.fractions[index] = value
    },
    addFraction() {
      this.fractions.push([1,3])
    },
    onSignChange({ value, index }){
      this.signs[index] = value
    },
    calculate() {
      var [n,d] = process(JSON.stringify(this.fractions.map(([n,d]) => [n,d])), this.signs)
      this.numeratorResult = n
      this.denominatorResult = d
    }
  },
  components: {
    fraction,
    sign,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fraction-container {
    display: flex;  
    justify-content: center;
    padding: 15px;
}

#add-fraction {
    padding: 15px 25px;
    border: 1px solid green;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
}
</style>
