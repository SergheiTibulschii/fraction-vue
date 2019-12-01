<template>
  <div id='frations-wrapper'>
    <div class='group'>
      <error :message='error'/>
    </div>
    <div class='group'>
        <template  v-for='([num, denom],index) in fractions'>
            <fraction 
              :num='num' 
              :denom='denom' 
              :index='index'
              v-bind:key='`fraction-${index}`'
              @fractionChange='handleFractionChange' 
              @calculate='calculate'
            />
            <sign 
                :value='signs[index]'
                :index='index'
                v-bind:key='`sign-${index}`' 
                v-if='index !== fractions.length-1'
                @changeSign='onSignChange' 
                @calculate='calculate'
                @signError='onSignError'
                @registerSign='handleSignRegistration'
                :pattern='signsPattern'
              />
        </template>
        <sign :isDisabled='true' value='='/>
        <fraction :num='numeratorResult' :denom='denominatorResult' :isDisabled='true'/>
    </div>
    <div class='group'>
      <vButton id='add-fraction' text='Add fraction' :onClick='addFraction' />
    </div>
  </div>
</template>

<script>
import fraction from './Fraction'
import sign from './Sign'
import { process } from '../utils/process'
import error from '@/components/Error'
import button from '@/components/Button'

export default {
  name: 'FractionsContainer',
  data () {
    return {
      error: '',
      fractions: [
        [1,2], [1,2]
      ],
      numeratorResult: null,
      denominatorResult: null,
      signsPattern: ['+','/','*','-'],
      signs: []
    }
  },
  methods: {
    handleSignRegistration(index) {
      this.signs[index] = null
    },
    isFractionValid([n,d]) {
      let isValid = true
      this.error = ''

      if(d === 0) {
        this.error = "Denominator can't be less than 0"
        isValid = false
      } else if (!n || !d) {
        this.error = 'Fractions must contain both the numerator and the denominator value'
        isValid = false
      }

      return isValid
    },
    isSignValid(s){
      return this.signsPattern.includes(s)
    },
    handleFractionChange({value, index}) {
      this.fractions[index] = value
    },
    addFraction() {
      this.fractions.push([1,3])
    },
    onSignChange({ value, index }){
      this.signs[index] = value
    },
    onSignError(message) {
      this.error = message
    },
    calculate() {
      if(this.fractions.every(this.isFractionValid) && this.signs.every(this.isSignValid)) {
          var [n,d] = process(JSON.stringify([...this.fractions]), this.signs)
          this.numeratorResult = n
          this.denominatorResult = d
      }
    }
  },
  components: {
    fraction,
    sign,
    error,
    vButton: button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#frations-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.group {
    display: flex;  
    justify-content: center;
    padding: 15px;
}

#add-fraction {
    display: block;
    padding: 15px 25px;
    border: 1px solid green;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background: transparent;
}
</style>
