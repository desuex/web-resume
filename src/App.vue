<script setup>
import Home from "./pages/Home.vue";
import {useI18n} from "vue-i18n";
import {useHead} from "@vueuse/head";
import {watch} from "vue";
import {onBeforeUnmount, onMounted, ref, computed} from "vue";

const {locale, t} = useI18n();

const SITE_URL = 'https://dsxm.org'

const navItems = [
  {id: 'about', key: 'about'},
  {id: 'skills', key: 'skills'},
  {id: 'projects', key: 'projects'},
  {id: 'contact', key: 'contact'},
]

const activeSectionId = ref('about')
let observer = null;

const switchLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)

  const url = new URL(window.location.href)
  url.searchParams.set('lang', lang)
  window.history.replaceState({}, '', url.toString())
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  activeSectionId.value = id
}

onMounted(() => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return
  }

  const headerOffset = 72

  observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null

        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry
          }
        }

        if (mostVisible && mostVisible.target && mostVisible.target.id) {
          activeSectionId.value = mostVisible.target.id
        }
      },
      {
        root: null,
        rootMargin: `-${headerOffset}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75]
      },
  )
  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

const pageTitle = computed(() => t('meta.title'))
const pageDescription = computed(() => t('meta.description'))
const ogLocale = computed(() => locale.value === 'ru' ? 'ru_RU' : 'en_US')
useHead({
      title: pageTitle,
      meta: [
        {name: 'description', content: pageDescription},

        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: SITE_URL},
        {property: 'og:title', content: pageTitle},
        {property: 'og:description', content: pageDescription},
        {property: 'og:locale', content: ogLocale},
        { property: 'og:image', content: `${SITE_URL}/og-image.png` },

        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:url', content: SITE_URL},
        {name: 'twitter:title', content: pageTitle},
        {name: 'twitter:description', content: pageDescription},
        { name: 'twitter:image', content: `${SITE_URL}/og-image.png`},

        {name: 'theme-color', content: '#0f172a'},
      ],
      link: [
        {rel: 'canonical', href: SITE_URL},

        {rel: 'alternate', hreflang: 'en', href: `${SITE_URL}?lang=en`},
        {rel: 'alternate', hreflang: 'ru', href: `${SITE_URL}?lang=ru`},
        {rel: 'alternate', hreflang: 'x-default', href: SITE_URL},

        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicons/favicon-64x64.png'},
        {rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicons/favicon-128x128.png'},
      ]
    }
)

</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <header class="border-b border-slate-800 sticky top-0 z-20 bg-slate-950/90 backdrop-blur">
      <div
          class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4"
      >
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center sm font-bold">
            EK
          </div>
          <span class="text-sm text-slate-300">
            {{ t('hero.name') }}
          </span>
        </div>

        <nav class="hidden sm:flex items-center gap-4 text-xs sm:text-sm">
          <button
              v-for="item in navItems"
              :key="item.id"
              type="button"
              @click="scrollToSection(item.id)"
              :class="[
                  'relative pb-1 transition underline-offset-4',
                  activeSectionId === item.id ? 'text-sky-300' : 'text-slate-300 hover:text-sky-300 hover:underline'
              ]"
          >
            {{ t(`nav.${item.key}`) }}
            <span
                v-if="activeSectionId === item.id"
                class="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-sky-500 rounded-full"
            ></span>
          </button>
        </nav>


        <div class="flex items-center gap-2 text-xs sm:text-sm">
          <button
              type="button"
              @click="switchLocale('en')"
              :class="[
                'px-2 py-1 rounded transition border',
                locale === 'en'
                ? 'bg-slate-800 border-sky-500 text-sky-300'
                : 'border-transparent hover:bg-slate-800 text-slate-300'
            ]"
          >
            EN
          </button>
          <button
              type="button"
              @click="switchLocale('ru')"
              :class="[
                'px-2 py-1 rounded transition border',
                locale === 'ru'
                ? 'bg-slate-800 border-sky-500 text-sky-300'
                : 'border-transparent hover:bg-slate-800 text-slate-300'
            ]"
          >
            RU
          </button>
        </div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-10">
      <Home/>
    </main>
  </div>
</template>

<style scoped>
</style>
