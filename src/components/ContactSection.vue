<script setup>
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const {t, tm} = useI18n();
const EMAIL = 'hire@dsxm.org'
const GITHUB = 'https://github.com/desuex'
const LINKEDIN = 'https://linkedin.com/in/dsxm'
const TELEGRAM = 'https://t.me/dsmexe'
import telegramIcon from '../assets/icons/telegram.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import emailIcon from '../assets/icons/email.svg'
const contacts = computed(() => [
  {label: EMAIL, url: `mailto:${EMAIL}`, icon: emailIcon},
  {label: GITHUB, url: GITHUB, icon: githubIcon},
  {label: LINKEDIN, url: LINKEDIN, icon: linkedinIcon},
  {label: TELEGRAM, url: TELEGRAM, icon: telegramIcon},
]);
</script>

<template>
  <section
      id="contact"
      class="scroll-mt-24"
  >
    <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 400, ease: 'easeOut', delay: 140 }
        }"
        class="space-y-6"
    >
      <div class="space-y-1">
        <p class="text-xs uppercase tracking-[0.3em] text-sky-400">
          {{ t('contact.heading') }}
        </p>
        <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
          {{ t('contact.subtitle') }}
        </h2>
      </div>

      <div class="space-y-4 text-sm sm:text-base text-slate-300">
        <div
          v-for="item in contacts"
          :key="item.url"
          class="flex items-center gap-3"
        >
          <div class="w-6 h-6 rounded-full bg-sky-100 border border-sky-500/40">
            <img
                :src="item.icon"
                :alt="item.label"
                class="w-full h-full object-contain"
            />
          </div>
          <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-sky-300 transition underline-offset-4 hover:underline"
          >
            {{ item.label }}
          </a>
        </div>
      </div>

      <p class="mt-6 text-xs sm:text-sm text-slate-500">
        {{ t('contact.footer')}}
      </p>
    </div>
  </section>
</template>

<style scoped>

</style>