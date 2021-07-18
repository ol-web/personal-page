<template>
  <div class="octagon-container">
    <section class="octagon">
      <h2 class="category-header" v-text="title" />
      <ul class="item-list">
        <li v-for="(item, index) in items" :key="index" class="project">
          <img
            class="preview"
            :class="{ lazyload: lazy }"
            height="310"
            width="400"
            v-bind="
              lazy
                ? {
                    'data-src': item.imageSrc
                  }
                : {
                    src: item.imageSrc
                  }
            "
            alt=""
          />
          <div class="info">
            <h3 class="title" v-text="item.title" />
            <p class="description" v-text="item.description" />

            <div class="links-container">
              <a
                v-for="(link, index2) in item.links"
                :key="index2"
                class="rectangular-link"
                target="_blank"
                rel="noopener noreferrer"
                :href="link.href"
                v-text="link.label"
              />
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
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    lazy: {
      type: Boolean,
      default: true
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

.project {
  position: relative;
  overflow: hidden;
  margin: 5px;
  z-index: 500;

  @include media-down(lg) {
    margin: 12px;
  }
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(113, 91, 77, 0.95);
  transform: translateY(-100%);
  transition: $transition;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  text-align: center;

  @include media-down(lg) {
    position: static;
    transform: none;
    padding: 12px;
  }
}

.project:hover > .info,
.info:focus-within {
  transform: translateY(0);
}

.preview {
  width: 100%;
  display: block;
  height: auto;
}

.title {
  margin: 0;
  margin-bottom: 5px;
}

.description {
  margin: 0 5px;
  font-size: 12px;
  margin-bottom: 5px;

  @include media-up(lg) {
    font-size: 18px;
  }
}

.links-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
