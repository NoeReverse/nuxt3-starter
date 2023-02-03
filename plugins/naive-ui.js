import { setup } from '@css-render/vue3-ssr'

// To make the naive-ui library work for server-side rendering
// See: https://www.naiveui.com/en-US/dark/docs/ssr
export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const { collect } = setup(nuxtApp.vueApp)
    const originalRenderMeta = nuxtApp.ssrContext?.renderMeta
    nuxtApp.ssrContext = nuxtApp.ssrContext || {}
    nuxtApp.ssrContext.renderMeta = () => {
      if (!originalRenderMeta) {
        return {
          headTags: collect()
        }
      }
      const originalMeta = originalRenderMeta()
      if ('then' in originalMeta) {
        return originalMeta.then((resolvedOriginalMeta) => {
          return {
            ...resolvedOriginalMeta,
            headTags: resolvedOriginalMeta.headTags + collect()
          }
        })
      } else {
        return {
          ...originalMeta,
          headTags: originalMeta.headTags + collect()
        }
      }
    }
  }
})
