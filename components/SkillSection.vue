<template>
    <div>
        <div 
            v-for="(item, index) in props.skillArrayAll" 
            :key="index"
            class="border-t border-myColor-borderGery py-4"
        >
            <h4 class="text-2xl w-full font-bold">{{ item.skillName }}</h4>
            <!-- <button @click="clickName(item.skillName)">emit傳名字按鈕</button> -->
            <span 
                v-for="(skillitem, itemIndex) in item.skillArr" 
                class="inline-block text-l p-3 mr-3 mt-3 bg-myColor-ButtonGreen rounded-full"
                :key="itemIndex"
            >
                {{ skillitem }}
                <!-- <button @click="clickitem(skillitem)">emit傳item按鈕</button> -->
            </span>
            <!-- <button @click="props.test">props test button</button> -->
        </div>
        <!-- <span>{{testObj}}</span> -->
    </div>
</template>

<script setup>
const props = defineProps({
    skillArrayAll: {
        type: Array,
        default: () => [],
    },
    test: {
        type: Function,
        default: () => {},
    },
    testObj: {
        type: Object,
        default: () => {},
    }
})

// 讓他回傳一個emit
// const emit = defineEmits(['clickSkillName','clickSkillItem'])

// const clickName = (name) => {
//     console.log('clickName');
//     emit("clickSkillName", name)
// }

// const clickitem = (item) => {
//     console.log('clickitem');
//     emit("clickSkillItem", item)
// }

</script>
