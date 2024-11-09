<template>
<!-- 對話窗 -->
  <div 
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50" 
    :class="{hidden:popupHidden}"
    id="modal"
>
    <div class="bg-white rounded-lg w-96 p-6">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800">標題</h2>
        <button id="closeModal" @click="closeModel" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p class="mt-4 text-gray-600">這是一個使用 Tailwind CSS 實現的對話窗模組範例。你可以在這裡放任何內容，像是訊息、表單等。{{ prop.data }}</p>
      <!-- <div class="mt-6 flex justify-end">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" id="closeBtn">關閉</button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
    const prop = defineProps({
        data:{
            type: Object,
            default: () => ({}),
            required: true
        },
        popupHidden:{
            type: Boolean,
            default: true,
        }
    })

    const emit = defineEmits(['popupHidden'])
    const closeModel = () => {
        emit("popupHidden", true)
    }
</script>