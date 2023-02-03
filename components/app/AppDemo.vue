<script setup>
import { NInput, NButton, NSwitch } from 'naive-ui'

const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value) => (colorMode.preference = value ? 'dark' : 'light')
})
</script>

<template>
  <div
    class="h-full flex flex-col justify-center items-center py-8 bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <div class="container">
      <div class="mb-8">
        <p class="text-3xl font-bold mb-2">Hello, World!</p>
        <p class="text-lg">
          This is a starter that helps you get started developing a website or
          web application on Nuxt 3, which adds a CSS framework, a library of UI
          elements, several useful libraries, and customizations that take the
          chore out of it.
        </p>
      </div>
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-4 lg:mb-8"
      >
        <div
          class="rounded p-4 flex flex-col justify-between bg-white dark:bg-gray-800 shadow border-2 border-gray-200 dark:border-gray-700 hover:border-lime-500 hover:dark:border-lime-600 transition-colors duration-300"
        >
          <div>
            <p class="text-xl font-bold mb-2">Naive UI</p>
            <p class="mb-4">
              <a
                href="https://www.naiveui.com/en-US/os-theme"
                target="_blank"
                class="success"
              >
                UI library</a
              >, which contains a huge number of components user interface
              components and supports very flexible design customization.
            </p>
          </div>
          <div class="flex space-x-2">
            <n-input></n-input>
            <n-button secondary>Отправить</n-button>
          </div>
        </div>
        <div
          class="rounded p-4 flex flex-col justify-between bg-white dark:bg-gray-800 shadow border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:dark:border-blue-600 transition-colors duration-300"
        >
          <div>
            <p class="text-xl font-bold mb-2">Tailwind CSS</p>
            <p class="mb-4">
              <a href="https://tailwindcss.com/" target="_blank"
                >CSS framework</a
              >, which allows you to create any design in minutes. Works in
              combination with the module
              <a href="https://color-mode.nuxtjs.org/" target="_blank"
                >NuxtColorMode</a
              >, making it easy to adapt the design for light and dark themes.
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="font-medium">Dark theme</p>
            <client-only>
              <n-switch v-model:value="isDark" />
            </client-only>
          </div>
        </div>
        <div
          class="rounded p-4 flex flex-col justify-between bg-white dark:bg-gray-800 shadow border-2 border-gray-200 dark:border-gray-700 hover:border-yellow-500 hover:dark:border-white transition-colors duration-300"
        >
          <div>
            <p class="text-xl font-bold mb-2">Useful tools</p>
            <p class="mb-4">
              Irreplaceable
              <a href="https://vueuse.org/" target="_blank">VueUse</a>, which
              has a bunch of useful utilities, handy
              <a href="https://google-fonts.nuxtjs.org/" target="_blank"
                >Google Fonts Module</a
              >
              that automates font loading, and there's also a preprocessor SASS
              and a number of prewritten styles. A huge number of sites can be
              made without installing additional dependencies.
            </p>
          </div>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">
        To start development, remove this component from the file
        pages/index.vue. <br />The component itself is stored in the folder
        /components/app.
      </p>
    </div>
  </div>
</template>
