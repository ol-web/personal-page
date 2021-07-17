<template>
  <form
    aria-label="Submit mail"
    class="form"
    method="POST"
    enctype="text/plain"
    @submit.prevent="submit"
  >
    <div class="input-container">
      <label class="label" for="topic">Topic: </label>
      <input
        id="topic"
        v-model="topic"
        class="input"
        type="text"
        name="topic"
      />
    </div>
    <div class="input-container">
      <label class="label" for="message">Message:</label>
      <textarea
        id="message"
        v-model="message"
        class="input"
        name="message"
        cols="10"
        rows="10"
      ></textarea>
    </div>
    <button class="submit-btn" type="submit">Open in Mail App</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      topic: '',
      message: ''
    }
  },
  methods: {
    submit() {
      open(
        `mailto:ol_web@outlook.com?subject=${this.topic}&body=${this.message}`
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
}

.input-container {
  position: relative;
  margin: 10px;
}

.input {
  @include focus-visible;
  border: 0;
  border-top: 10px solid $chocolate;
  border-bottom: 10px solid $chocolate;
  min-height: 70px;
  padding: 10px;
  background: $vanilla;
  color: $chocolate;
  width: 100%;
  display: block;
  padding-top: 75px;
  transition: $transition;
}

.label {
  font-size: 32px;
  font-weight: bold;
  color: $vanilla;
  background: $chocolate;
  display: block;
  align-self: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  padding: 20px 10px;
}

.submit-btn {
  @include focus-visible($color: black, $outline-offset: -2px);
  margin: 5px;
  background: $vanilla;
  color: $chocolate;
  min-height: 70px;
  padding: 20px;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 2px;
  border: 0;
  transition: $transition;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

.submit-btn:hover {
  box-shadow: 0 0 20px 0px $dark-transparent;
}

.submit-btn:active {
  transform: translateY(2px);
}
</style>
