<template>
    <q-item-label 
        :title="title"
    >
    
    </q-item-label>
    
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            name: String,
            required: true
        }
    }, 
    setup() {
        
    },
})
</script>

