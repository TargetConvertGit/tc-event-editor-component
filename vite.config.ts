import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("Ph"), // 排除以 'ph-' 开头的组件
      },
    }),
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true,
      },
      imports: ["vue", "vue-i18n"],
    }),
  ],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: "./src/index.ts",
      name: "TCEventEditorComponent",
      // the name of the output files when the build is run
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "@phosphor-icons/vue", "vue-i18n", "v-calendar"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          "v-calendar": "vCalendar",
          "@phosphor-icons/vue": "Ph",
        },
      },
    },
  },
});
