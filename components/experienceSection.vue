<template>
    <div>
        <div class="py-4">
            <h4 class="text-2xl w-full font-bold">工作經歷</h4>
            <!-- 未來v for -->
            <div
                v-for="(index) in 2" :key="index"
                class="border-b border-myColor-borderGery py-4">
                <h5>全球華人1111 - 前端工程師</h5>
                <p>2023/05-現</p>
                <button>做了什麼(點開)</button>
            </div>
        </div>
    </div>
</template>