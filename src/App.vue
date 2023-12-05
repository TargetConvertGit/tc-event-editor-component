<script setup lang="ts">
import { ref } from "vue";
import { TCEventEditorApp, setApiUrlBase, setToken } from "./index";

const dd = ref(`{
 
}`);
const showModal = ref(false);
const editor = ref();
setApiUrlBase("https://tc-adsystem-stg.southeastasia.cloudapp.azure.com");
setToken("Bearer 7|IMZYBXtkk2b4DXnscSaexanLbcBbjvd7dP5Djj6Q");

const submit = () => {
  editor?.value.saveData();
};
</script>

<template>
  <!-- <div class="flex gap-5 h-screen">
    <div class="flex flex-col space-y-2 w-full">
      <textarea
        class="form-textarea h-full rounded border p-5"
        v-model="dd"
      ></textarea>
    </div>
    <TCEventEditorApp v-model:data="dd" class="w-full h-full" ref="editor" />
  </div> -->
  <div class="bg-dark-1 bg-opacity-70 h-screen w-full py-10">
    <div class="bg-light-5 rounded w-5/6 h-full flex mx-auto flex-col my-auto">
      <span class="p1-b p-1" @click="submit">建立自動化規則</span>
      <TCEventEditorApp v-model:data="dd" ref="editor" />
    </div>
  </div>
</template>

<style scoped></style>
