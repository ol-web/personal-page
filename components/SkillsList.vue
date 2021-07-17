<template>
  <div class="octagon-container">
    <section class="octagon">
      <h3 class="header" v-text="title" />
      <ul class="list">
        <li
          v-for="(skill, index) in items"
          :key="index"
          class="list-item"
          v-text="skill"
        />
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 0;
  filter: drop-shadow(0 0 5px $dark-transparent);
}

.list-item {
  padding: 15px;
  margin: 15px 0;
  background: $vanilla;
  color: $chocolate;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
}

.header {
  margin: 20px 10px;
  font-size: 24px;
}
</style>
