<template>
  <nav class="menu">
    <button
      aria-label="Toggle
      menu"
      class="btn"
      @click="toggleMenu"
    >
      <transition name="fade" mode="out-in">
        <span :key="active" aria-hidden="true">{{ !active ? '☰' : '×' }}</span>
      </transition>
    </button>

    <transition name="slide-left">
      <ul v-show="active" class="list">
        <li class="list-item">
          <button
            aria-label="Go to the about section"
            class="navbtn"
            @click="scrollTo('.about-logo')"
          >
            <i class="icon-info icon" />
          </button>
        </li>
        <li class="list-item">
          <button
            aria-label="Go to the projects section"
            class="navbtn"
            @click="scrollTo('.projects')"
          >
            <i class="icon-html icon" />
          </button>
        </li>
        <li class="list-item">
          <button
            aria-label="Go to the skills section"
            class="navbtn"
            @click="scrollTo('.skills')"
          >
            <i class="icon-code icon" />
          </button>
        </li>
        <li class="list-item">
          <button
            aria-label="Go to the contact section"
            class="navbtn"
            @click="scrollTo('.contact')"
          >
            <i class="icon-user icon" />
          </button>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleMenu() {
      this.active = !this.active
    },
    scrollTo(selector: string) {
      this.active = false

      document
        .querySelector(selector)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
})
</script>

<style lang="scss" scoped>
.btn {
  @include focus-visible;
  font-size: 48px;
  position: fixed;
  top: 0;
  left: 0;
  background: $chocolate;
  border: 0;
  color: $vanilla;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.navbtn {
  @include focus-visible;
  border: 0;
  background: transparent;
  display: block;
  color: inherit;
  padding: 0;
  width: 100%;
  height: 100%;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 100%;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  min-width: 100px;
  background: $chocolate;
  width: 100%;
  z-index: 5;
  padding-top: 75px;
  display: flex;
  overflow: auto;
  justify-content: space-evenly;

  @include media-up(md) {
    display: flex !important;
  }
}

.list-item {
  background: $coffee;
  border-top: 3px solid $vanilla;
  border-bottom: 3px solid $vanilla;
  font-size: 36px;
  margin: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  transition: transform $transition;

  @include media-up(lg) {
    &:hover {
      transform: scale(1.1);
    }
  }
}

@include media-up(md) {
  .list {
    display: flex;
    width: auto;
    padding-top: 0;
  }

  .list-item {
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
    border: 3px solid $vanilla;
  }

  .btn {
    display: none;
  }
}
</style>
