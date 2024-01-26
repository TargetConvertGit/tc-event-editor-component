<script setup lang="ts">
import { TCEventEditorApp, setApiUrlBase } from "./index";

const dd = ref(`{}`);
const editor = ref();
setApiUrlBase("https://tc-adsystem-stg.southeastasia.cloudapp.azure.com");

const submit = () => {
  editor?.value.saveData();
};
const token = ref("Bearer 118|Ferl16ncLAUXJC9jr1x1v6Be0qDMRm0GdHMTfOfV");
const timezone = ref("Asia/Tokyo");
const locale = ref("en-US");
const init = ref({
  apiUrl: "https://tc-adsystem-stg.southeastasia.cloudapp.azure.com",
  token: token,
  locale: locale,
  timezone: timezone,
  isProd: false,
});
</script>

<template>
  <div class="bg-dark-1 bg-opacity-70 h-screen w-full py-10">
    {{ dd }}
    <div @click="locale = 'zh-TW'">zh-TW</div>
    <div @click="locale = 'en-US'">en-US</div>
    <div
      class="bg-light-5 rounded w-5/6 h-full flex mx-auto flex-col my-auto font-jura"
    >
      <span class="p1-b p-1" @click="submit">建立自動化規則</span>
      <TCEventEditorApp v-model:data="dd" ref="editor" :initial="init" />
    </div>
  </div>
</template>
