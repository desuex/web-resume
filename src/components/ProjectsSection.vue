<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const {t, tm} = useI18n();
const projects = computed(() => tm('projects.items'));

// import optimoveLogo from '../assets/logos/optimove.svg'
// import streamwaveLogo from '../assets/logos/streamwave.svg'
// import lexpointLogo from '../assets/logos/lexpoint.svg'
// import aerotripLogo from '../assets/logos/aerotrip.svg'
//
// const logos = {
//   optimove: optimoveLogo,
//   streamwave: streamwaveLogo,
//   lexpoint: lexpointLogo,
//   aerotrip: aerotripLogo,
// }
</script>

<template>
  <section
      id="projects"
      class="scroll-mt-24"
  >
    <div
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { duration: 400, ease: 'easeOut', delay: 120 }
      }"
      class="space-y-6"
    >
      <div class="space-y-1">
        <p class="text-xs uppercase tracking-[0.3em] text-sky-400">
          {{ t('projects.heading') }}
        </p>
        <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
          {{ t('projects.subtitle') }}
        </h2>
      </div>

      <div class="space-y-4">
        <article
          v-for="project in projects"
          :key="project.id"
          class="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 transition hover:border-sky-600/70 hover:bg-slate-900/70"
        >
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-center gap-4">
              <div
                class="w-[180px] h-10 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden shrink-0"
                >
                <span class="text-xs font-semibold tracking-wide text-slate-200">
                  {{ project.logoLabel }}
                </span>
                <!--
                <img
                  :src="logos[project.id]"
                  :alt="project.logoLabel"
                  class="w-full h-full object-contain"
                />
                -->
              </div>

              <div class="space-y-0.5">
                <h3 class="text-sm sm:text-base font-semibold text-slate-50">
                  {{project.company}}
                </h3>
                <p class="text-xs sm:text-sm text-slate-300">
                  {{project.role}}
                </p>
                <p class="text-xs text-slate-400">
                  {{ project.period }} · {{ project.location }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>{{project.summary}}</p>
            <ul
                v-if="Array.isArray(project.details)"
                class="list-disc list-outside ml-5 space-y-1 marker:text-sky-500"
            >
              <li v-for="(item, index) in project.details" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="mt-4 flex flex-col gap-2">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              {{project.stackTitle}}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="inline-flex px-2.5 py-1 rounded-full bg-slate-800 text-[11px] sm:text-xs text-slate-100 border border-slate-700 group-hover:border-sky-600/60"
                >
                {{tech}}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>