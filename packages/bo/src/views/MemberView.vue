<template>
  <q-card>
    <div class="text-center bg-primary text-white">멤버</div>
    <q-card-section>
      <!-- @update:model-value 이벤트로 QInput에 바인딩 된 데이터가 변경되면 상위 컴포넌트의 @update로 변경된 정보를 전달함 -->
      <q-input dense
          v-model="_name"
          :readonly="!editable"
          :borderless="!editable"
          @update:model-value="val => emit('update', props.mid,'name', val)" />
      <q-input dense
          v-model="_team"
          :readonly="!editable"
          :borderless="!editable"
          @update:model-value="val => emit('update', props.mid,'team', val)" />
      <q-input dense
          v-model="_contact"
          :readonly="!editable"
          :borderless="!editable"
          @update:model-value="val => emit('update', props.mid,'contact', val)" />
    </q-card-section>
  </q-card>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    mid: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    team: {
      type: String,
      default: ''
    },
    contact: {
      type: String,
      default: ''
    },
    // for edit
    editable: {
      type: Boolean,
      default: false
    }
  })

  // emits 정의
  const emit = defineEmits(['update'])

  // 컴포넌트 내부에서 사용할 멤버 데이터
  const _name = ref(props.name)
  const _team = ref(props.team)
  const _contact = ref(props.contact)
</script>

<style scoped>

</style>