<template>
  <div class="hello">
    <span>{{value}}</span>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <button type="button" @click="undo" :disabled="!canUndo">Undo</button>
    <button type="button" @click="redo" :disabled="!canRedo">Redo</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    value () {
      return this.$store.state.value;
    }
  },
  methods: {
    decrement(){
      this.$store.commit('changeValue', -1);
    },
    increment(){
      this.$store.commit('changeValue', 1);
    }
  }
}
</script>