<script setup>
import {
  NConfigProvider,
  NGlobalStyle,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
  ruRU,
  dateRuRU
} from 'naive-ui'
import { theme } from '#tailwind-config'

const colorMode = useColorMode()

const themeVars = {
  common: {
    fontFamily: 'Roboto, ui-sans-serif, system-ui',
    primaryColor: theme.colors.lime[500],
    primaryColorHover: theme.colors.lime[600],
    primaryColorPressed: theme.colors.lime[700],
    primaryColorSuppl: theme.colors.lime[800],
    warningColor: theme.colors.orange[500],
    warningColorHover: theme.colors.orange[600],
    warningColorPressed: theme.colors.orange[700],
    warningColorSuppl: theme.colors.orange[800],
    infoColor: theme.colors.blue[500],
    infoColorHover: theme.colors.blue[600],
    infoColorPressed: theme.colors.blue[700],
    infoColorSuppl: theme.colors.blue[800],
    successColor: theme.colors.green[500],
    successColorHover: theme.colors.green[600],
    successColorPressed: theme.colors.green[700],
    successColorSuppl: theme.colors.green[800],
    borderRadius: theme.borderRadius.DEFAULT,
    heightSmall: '34px',
    heightMedium: '42px',
    heightLarge: '47px',
    cardColor: '#FFFFFF'
  },
  Card: {
    paddingMedium: '25px 32px 26px',
    paddingHuge: '50px 64px 52px',
    lineHeight: 1.4,
    titleFontWeight: 700
  },
  Button: {
    textColorPrimary: '#FFFFFF',
    textColorHoverPrimary: '#FFFFFF',
    textColorPressedPrimary: '#FFFFFF',
    textColorFocusPrimary: '#FFFFFF',
    // borderRadiusTiny: theme.borderRadius.sm,
    // borderRadiusSmall: theme.borderRadius.sm,
    // borderRadiusMedium: theme.borderRadius.sm,
    // borderRadiusLarge: theme.borderRadius.lg,
    fontWeight: 500
  },
  //   Input: {
  //     borderRadius: theme.borderRadius.sm
  //   },
  //   Avatar: {
  //     borderRadius: theme.borderRadius.sm
  //   },
  //   Pagination: {
  //     itemBorderRadius: theme.borderRadius.sm
  //   },
  Tabs: {
    tabFontWeight: 700,
    tabFontWeightActive: 700
  },
  Tag: {
    borderRadius: '6px'
  }
}

const darkThemeVars = Object.assign({}, themeVars)
darkThemeVars.common.cardColor = '#1E1E2D'

const loading = ref(true)
const uiTheme = ref(null)

const { hook } = useNuxtApp()
hook('page:finish', () => {
  uiTheme.value = colorMode.value === 'dark' ? darkTheme : null
  setTimeout(() => {
    loading.value = false
  }, 500)
})

watch(
  () => colorMode.value,
  () => {
    if (loading.value) return
    uiTheme.value = colorMode.value === 'dark' ? darkTheme : null
  }
)

const themeOverrides = computed(() => {
  const vars = { ...{}, ...themeVars }
  vars.common.cardColor =
    colorMode.value === 'dark' ? theme.colors.gray[800] : theme.colors.gray[100]
  vars.common.modalColor =
    colorMode.value === 'dark' ? theme.colors.gray[800] : theme.colors.gray[100]
  vars.Tag.color =
    colorMode.value === 'dark' ? theme.colors.gray[700] : theme.colors.gray[200]
  return vars
})
</script>

<template>
  <div
    class="h-full bg-gray-200 dark:bg-gray-900 transition-colors duration-300 flex flex-col flex-1"
  >
    <n-config-provider
      :theme="uiTheme"
      :theme-overrides="themeOverrides"
      :locale="ruRU"
      :date-locale="dateRuRU"
      :inline-theme-disabled="false"
      class="flex flex-col flex-1"
    >
      <n-global-style />
      <n-message-provider placement="bottom-left">
        <n-notification-provider>
          <slot />
        </n-notification-provider>
      </n-message-provider>
    </n-config-provider>

    <transition name="fade">
      <slot name="loading">
        <div
          v-if="loading"
          class="bg-gray-800 fixed inset-0 z-50 flex flex-col justify-center items-center"
        ></div>
      </slot>
    </transition>
  </div>
</template>

<style>
.n-config-provider {
  height: 100%;
}
</style>
