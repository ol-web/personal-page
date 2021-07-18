<template>
  <ul class="list" aria-label="Contact methods">
    <li class="list-item">
      <i class="icon-mail icon icon" />
      <p class="method antibot-cotact">
        <a href="mailto:ol_web@outlook.com" class="method-link"
          >ol_web@outlook.com</a
        >
      </p>
    </li>

    <li class="list-item">
      <i class="icon-github icon icon" />
      <p class="method">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="method-link"
          href="https://github.com/ol-web"
          >ol-web</a
        >
      </p>
    </li>
    <li class="list-item">
      <i class="icon-linkedin icon icon" />
      <p class="method">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="method-link"
          href="www.linkedin.com/in/ol-web"
          >Michał Olejniczak</a
        >
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.list-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5px;
  flex-grow: 1;
}

.icon {
  background: $chocolate;
  padding: 10px 5px;
  font-size: 24px;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    100% 100%,
    0 100%,
    0% 70%,
    0% 30%
  );
}

.method {
  margin: 0;
  background: $vanilla;
  color: $chocolate;
  padding: 10px 5px;
}

.method-link {
  @include focus-visible;
  color: $chocolate;
}
</style>
