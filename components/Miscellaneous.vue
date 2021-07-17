<template>
  <div class="octagon-container">
    <section class="octagon miscellaneous-projects">
      <h2 class="category-header">Miscellaneous</h2>
      <ul class="item-list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="miscellaneous-project"
        >
          <div class="preview">
            <p class="category" v-text="item.type" />
            <h3 class="title" v-text="item.title" />
          </div>
          <div class="info-container">
            <div class="info">
              <p class="description" v-text="item.description" />
              <div class="links-container">
                <a
                  v-for="(link, index) in item.links"
                  :key="index"
                  class="rectangular-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :href="link.href"
                  v-text="link.label"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss" scoped>
.category-header {
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 48px;
  text-shadow: 0 0 5px $dark-transparent;

  @include media-down(md) {
    font-size: 26px;
  }
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.miscellaneous-projects {
  @include media-up(sm) {
    padding-bottom: 160px;
  }
}

.miscellaneous-project {
  position: relative;
  margin: 5px;

  @include media-down(lg) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.description {
  color: $chocolate;
  margin: 0;
  margin-bottom: 15px;
  font-size: 12px;
}

.category {
  background: $dark-transparent;
  padding: 15px 5px;
  color: $vanilla;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  padding-left: 15px;
  align-items: center;
  display: flex;

  @include media-down(md) {
    display: block;
  }
}

.title {
  background: $vanilla;
  padding: 15px 5px;
  margin: 0;
  padding-right: 15px;
  word-break: break-all;

  @include media-down(md) {
    padding-left: 15px;
  }
}

.preview {
  display: flex;
  color: $chocolate;
  position: relative;
  z-index: 10;
  text-align: center;
  justify-content: center;
  align-items: stretch;
  line-height: 30px;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  background: $chocolate;

  @include media-down(md) {
    flex-direction: column;
  }
}

.info-container {
  height: 0;
  z-index: 20;
  flex-direction: column;
  text-align: center;
  display: flex;
  position: absolute;
  left: 0;
  width: 100%;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  overflow: hidden;

  @include media-down(lg) {
    height: auto;
    position: static;
  }
}

.info {
  transform: translateY(-100%);
  background: $vanilla;
  transition: $transition;
  padding: 20px 30px;
  overflow: hidden;

  @include media-down(lg) {
    transform: none;
    padding: 32px 42px;
  }
}

.links-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.miscellaneous-project:hover .info,
.info:focus-within {
  transform: translateY(0);
}

.miscellaneous-project:hover .info-container,
.info-container:focus-within {
  height: auto;
}
</style>
