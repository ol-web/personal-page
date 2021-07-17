<template>
  <div class="about sloped-bottom">
    <header class="header">
      <img
        class="logo about-logo"
        srcset="/mo.jpg 200w, /mo@2x.jpg 400w"
        alt=""
      />
      <h1 class="name">Michał Olejniczak</h1>
      <p class="title">Front End Developer</p>
    </header>

    <div class="attachments">
      <section class="cv">
        <h3 class="cv__header"><i class="icon-doc icon" /></h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/cv-eng.pdf"
          class="cv__attachment"
          >CV (ENG)</a
        >
      </section>
      <section class="cv">
        <h3 class="cv__header"><i class="icon-doc icon" /></h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/cv-pl.pdf"
          class="cv__attachment"
          >CV (PL)</a
        >
      </section>

      <p class="description">
        I am a <strong>front end developer</strong> passionate about web
        technologies from a young age. I love to create unique and interesting
        projects with <strong>Javascript</strong> - from simple websites to even
        entire games. My favorite front end ecosystem right now is the
        <strong>Vue framework</strong>, but I'm always looking forward to
        learning the next cool new thing to build cool new things with!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.about {
  margin-top: 150px;
  background: $coffee;
  text-align: center;
}

.logo {
  display: inline-block;
  max-width: 200px;
  margin-top: -120px;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    100% 100%,
    30% 100%,
    0% 100%,
    0% 30%
  );
}

.name {
  margin: 5px 0;
  font-size: 42px;
  letter-spacing: 2px;
  text-shadow: 0 0 5px $dark-transparent;
}

.title {
  margin: 0;
  letter-spacing: 1px;
}

.header {
  background: $chocolate;
  padding-bottom: 20px;
}

.description {
  padding: 25px;
  padding-top: 0;
  font-size: 20px;
}

.attachments {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cv {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 15px;
  flex-grow: 1;
}

.cv__header {
  background: $chocolate;
  margin: 0;
  padding: 10px 5px;
  font-size: 24px;
}

.cv__attachment {
  @include focus-visible($color: black, $outline-offset: -2px);
  padding: 10px 5px;
  display: block;
  color: $chocolate;
  background: $vanilla;
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
</style>
