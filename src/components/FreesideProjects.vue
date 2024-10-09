<template>
  <div class="projects">
    <ul>
      <li v-for="(project, index) in projects" :key="project.name + project.year">
        <div class="wrapper">
          <img class="image" :src="projectImage(index)" alt=""/>
          <div class="description">
            <div class="name">
              {{ project.name }}
            </div>
            <div class="location_and_year">
              {{ project.location + " | " + project.year}}
            </div>
            <div class="status">
              {{ statusLabel(project.status) }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Project, projects, ProjectStatus } from '@/data/projects';

@Component
export default class FreesideHeader extends Vue {
  images = [
    'project1.jpg',
    'project2.jpg',
    'project3.jpg',
    'project4.webp',
    'project5.webp',
    'project6.jpg',
  ]

  get projects(): Project[] {
    return projects;
  }

  statusLabel(status: ProjectStatus): string {
    switch (status) {
      case ProjectStatus.Planned:
        return 'Planned';
      case ProjectStatus.Completed:
        return 'Completed';
      default:
        return 'Unknown';
    }
  }

  projectImage(index: number): string {
    return `media/${this.images[index % this.images.length]}`;
  }
}
</script>

<style scoped lang="scss">
$clipped-corner-height: 10px;
$clipped-corner-width: 100%;

.projects {
$project-margin: 2em;

  ul {
    display: flex;
    flex-flow: row wrap;

    margin: -$project-margin 0 0 0;
    padding: 0;
    list-style-type: none;

    li {
      width: 50%;

      .wrapper {
        margin: $project-margin;
        height: 500px;
        overflow: hidden;
        position: relative;

        display: flex;
        flex-flow: column nowrap;
        justify-content: end;

        .description {
          position: relative;

          display: flex;
          flex-direction: column;

          background-color: #fff;
          margin: 2em;
          padding: 1em;

          .name {
            font-family: "Big Shoulders Display", sans-serif;
            font-weight: 800;
            line-height: 1.2em;
            text-transform: uppercase;
            font-size: 50px;
          }

          .year {
          }

          .location_and_year {
          }

          .status {
            position: absolute;
            bottom: 0.6em;
            right: 1em;
          }

          .location_and_year, .status {
            font-family: "Big Shoulders Display", sans-serif;
            font-weight: 700;
            line-height: 1.3em;
            font-size: 26px;
          }
        }

        img {
          display: block;
          object-fit: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}

@media (max-width: 1700px) {
  .projects ul li {
    width: 100%;

    .wrapper {
      .description {
        .name, .year, .location, .status {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
