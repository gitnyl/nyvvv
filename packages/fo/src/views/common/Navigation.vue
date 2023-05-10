<template>
  <div class="q-pa-md q-gutter-sm">
    <div>
      <div class="q-gutter-sm">
        <q-btn size="sm" color="primary" @click="selectGoodService" label="Select 'Good service'" />
        <q-btn v-if="selected" size="sm" color="red" @click="unselectNode" label="Unselect node" />
      </div>
    </div>
    <q-tree
        :nodes="props"
        default-expand-all
        v-model:selected="selected"
        node-key="label"
    />
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  setup () {
    const selected = ref(null)

    return {
      selected,

      selectGoodService () {
        if (selected.value !== 'Good service') {
          selected.value = 'Good service'
        }
      },

      unselectNode () {
        selected.value = null
      },

      props: [
        {
          label: 'Root', // root depth
          avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
          children: [
            {
              label: 'A10001',  // 1depth
              icon: 'menu',
              children: [ // 2depth
                {
                  label: 'A20001',
                  icon: 'lock',
                },
                {
                  label: 'A20002'
                }
              ]
            },
            {
              label: 'B10001',
              icon: 'photo',
              children: [
                {
                  label: 'B20001'
                },
                {
                  label: 'B20002'
                },
                {
                  label: 'B20003'
                }
              ]
            }
          ]
        }
      ]
    }
  },



}
</script>