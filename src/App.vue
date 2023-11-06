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
  <h1 @click="submit">TC Event Editor Demo</h1>
  <div class="flex gap-5">
    <div class="flex flex-col space-y-2 w-full">
      <textarea
        class="form-textarea h-full rounded border p-5"
        v-model="dd"
      ></textarea>
    </div>
    <TCEventEditorApp
      v-model:data="dd"
      class="w-fit min-w-[50%]"
      ref="editor"
    />
  </div>
</template>

<style scoped></style>
