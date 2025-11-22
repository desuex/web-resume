<script setup>
import {useI18n} from "vue-i18n";
const {t, tm} = useI18n();
</script>

<template>
  <section
      id="about"
      class="scroll-mt-24"
  >
    <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 400, ease: 'easeOut' }
        }"
        class="space-y-6"
    >
      <div class="space-y-1">
        <p class="text-xs uppercase tracking-[0.3em] text-sky-400">
          {{ t('about.heading') }}
        </p>
        <h2 class="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          {{ t('about.subtitle') }}
        </h2>
      </div>
      <div class="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
        <p>{{ t('about.paragraph1')}}</p>
        <p>{{ t('about.paragraph2')}}</p>
      </div>

      <div
        class="grid gap-6 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] mt-4"
      >
        <ul class="space-y-2 text-sm text-slate-300">
          <li
              v-for="item in tm('about.highlights')"
              :key="item"
              class="flex gap-2"
          >
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-[0.2em]">
          {{ t('about.currentlyTitle')}}
        </h3>
        <p class="text-sm text-slate-300">
          {{ t('about.currentlyText')}}
        </p>
      </div>

    </div>

  </section>
</template>

<style scoped>

</style>