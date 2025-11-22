<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();

const printPage = () => {
  if (typeof window !== 'undefined' && window.print) {
    window.print();
  }
}
const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>

<template>
  <section class="min-h-[70vh] flex items-center">
    <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{
        opacity: 1,
        y: 0,
        transition: { duration: 500, ease: 'easeOut' }
      }"
        class="space-y-6"
    >
      <p class="text-xs uppercase tracking-[0.3em] text-sky-400">
        {{ t('hero.badge') }}
      </p>

      <div class="space-y-2">
        <h1 class="text-4xl sm:text-5x1 font-semibold tracking-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="text-lg text-slate-300">
          {{ t('hero.summary') }}
        </p>
      </div>
      <p class="text-sm text-slate-400">
        {{ t('hero.location') }}
      </p>
      <div class="flex flex-wrap gap-3 pt-2">
        <button
            type="button"
            @click="printPage"
            class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition"
        >
          {{ t('hero.primaryCta') }}
        </button>
        <button
          type="button"
          @click="scrollToContact"
          class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-500 text-slate-900 text-sm font-medium hover:bg-sky-400 transition"
          >
          {{ t('hero.secondaryCta')}}
        </button>

      </div>

    </div>
  </section>
</template>

<style scoped>

</style>