<script setup>
import {useI18n} from "vue-i18n";

const {t, tm} = useI18n();
</script>

<template>
  <section
      id="skills"
      class="scroll-mt-24"
  >
    <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 400, ease: 'easeOut', delay: 80 }
        }"
        class="space-y-6"
    >
      <div class="space-y-1">
        <p class="text-xs uppercase tracking-[0.3em] text-sky-400">
          {{ t('skills.heading') }}
        </p>
        <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
          {{ t('skills.subtitle') }}
        </h2>
      </div>
      <div
          class="grid gap-4 sm:gap-6 sm:grid-cols-2"
      >
        <div class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 space-y-3">
          <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-[0.2em]">
            {{ t('skills.coreTitle')}}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in tm('skills.core')"
              :key="item"
              class="px-2.5 py-1 rounded-full bg-slate-800 text-xs text-slate-100 border border-slate-700"
              >
              {{item}}
            </li>
          </ul>
        </div>

        <div class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 space-y-3">
          <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-[0.2em]">
            {{ t('skills.backendTitle')}}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in tm('skills.backend')"
              :key="item"
              class="px-2.5 py-1 rounded-full bg-slate-800 text-xs text-slate-100 border border-slate-700"
              >
              {{item}}
            </li>
          </ul>
        </div>

        <div class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 space-y-3">
          <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-[0.2em]">
            {{ t('skills.toolingTitle')}}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in tm('skills.tooling')"
              :key="item"
              class="px-2.5 py-1 rounded-full bg-slate-800 text-xs text-slate-100 border border-slate-700"
              >
              {{item}}
            </li>
          </ul>
        </div>

        <div class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 space-y-3">
          <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-[0.2em]">
            {{ t('skills.devopsTitle')}}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
                v-for="item in tm('skills.devops')"
                :key="item"
                class="px-2.5 py-1 rounded-full bg-slate-800 text-xs text-slate-100 border border-slate-700"
            >
              {{item}}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/60 p-4 space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          {{ t('skills.keywordsTitle')}}
        </p>
        <p class="text-xs sm:text-sm text-slate-300">
          {{ t('skills.keywordsText')}}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>