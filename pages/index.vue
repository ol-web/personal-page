<template>
  <div class="wrapper">
    <Menu />

    <main class="content">
      <About />

      <div class="projects sloped">
        <Projects
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :items="project.items"
        />
        <Miscellaneous :items="miscellaneousProjects" />
      </div>

      <div class="skills sloped">
        <SkillsList
          v-for="(skill, index) in skills"
          :key="index"
          :title="skill.title"
          :items="skill.items"
        />
      </div>

      <div class="contact sloped-top">
        <ContactMethods />
        <ContactForm />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import projects from '@/static/data/projects.json'
import miscellaneousProjects from '@/static/data/miscellaneousProjects.json'
import skills from '@/static/data/skills.json'

export default Vue.extend({
  data() {
    return {
      projects,
      miscellaneousProjects,
      skills
    }
  }
})
</script>

<style lang="scss" scoped>
@keyframes slideFromBelow {
  from {
    transform: translateY(100px);
  }

  to {
    transform: translateX(0);
  }
}

.wrapper {
  display: flex;
}

.content {
  padding: 10px;
  min-height: calc(100vh - 50px);
  max-width: 1200px;
  animation: slideFromBelow 1s;

  @include media-up(md) {
    margin-left: 100px;
  }

  @include media-up(xl) {
    margin: 0 auto;
  }
}

.projects {
  background: $coffee;
  margin-top: 50px;
  padding: 25px 0;
}

.skills {
  background: $coffee;
  margin-top: 50px;
  padding: 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  align-items: flex-start;

  @include media-up(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.contact {
  background: $coffee;
  margin-top: 50px;
  padding: 5px;
}

@include media-up(md) {
  .content,
  .projects,
  .skills,
  .contact {
    padding: 25px;
  }
}
</style>
