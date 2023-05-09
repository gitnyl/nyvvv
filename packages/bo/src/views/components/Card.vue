<template>
  <div class="">
    <!-- q-pb-sm : 추가되는 버튼이 멤버 리스트 우측 상단에 위치하도록 -->
    <div class="row justify-end q-pb-sm">
      <q-btn dense icon="add" round color="positive" @click="addMember" />
    </div>
    <div>
      <Info>
        <b>Member Data :</b>
        {{ members }}
      </Info>
    </div>

    <!-- q-gutter : 간격, q-col-gutter-lg : col 간격 -->
    <div class="row q-col-gutter-lg">
      <div v-for="m in members" :key="m" class="col-6 col-md-4">
        <!-- 수정 버튼  -->
        <q-btn
            v-if="!m.editable"
            unelevated dense flat
            size="sm"
            color="grey"
            icon="edit"
            @click="m.editable = true" />
        <q-btn
            v-else
            unelevated dense round
            size="sm"
            color="primary"
            icon="check"
            @click="store(m.mid)" />
        <!-- @update 이벤트 바인딩 -->
        <Member
          :mid="m.mid"
          :name="m.name"
          :team="m.team"
          :contact="m.contact"
          :editable="m.editable"
          @update="updateMember" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import { uid } from 'quasar'  // Quasar 에서 제공하는 고유 아이디 생성 유틸
import { useQuasar } from 'quasar'  // for SessionStorage

// const members = reactive([
//   { mid: uid(), name: '김땡땡', team: '1팀', contact: '010-0000-0000' },
//   { mid: uid(), name: '이땡땡', team: '2팀', contact: '010-1111-1111' },
//   { mid: uid(), name: '박땡땡', team: '3팀', contact: '010-2222-2222' },
//   { mid: uid(), name: '정땡땡', team: '4팀', contact: '010-3333-3333' }
// ])

// get Member Component
const Member = defineAsyncComponent(() => import('../MemberView.vue'))

// add member
const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })
}

// edit member
const updateMember = (mid, key, val) => {
  const findMember = members.find(m => m.mid === mid)

  // members 객체에서 전달받은 고유의 mid 값의 멤버가 존재하면 해당 멤버의 데이터를 업데이트
  if (findMember) findMember[key] = val
}

// 저장
// $q 객체 정의
const $q = useQuasar()

// members 반응형 객체의 초기값을 로컬 세션 스토리지의 members 키값을 가져오게 하고, 해당 키값을 갖는 데이터가 없는 경우 빈 배열로 정의
const members = reactive($q.sessionStorage.getItem('members') || [])

// Member 정보를 세션 스토리지에 저장 (수정시 members 전체 데이터를 로컬 세션 스토리지에 members 라는 키값으로 저장)
const store = (mid) => {
  // 로컬 세션 스토리지의 데이터를 임시로 가져와서
  const tempMembers = $q.sessionStorage.getItem('members') || []
  const findMember = members.find(m => m.mid === mid)
  // 해당 mid 멤버 검색
  const findTempMember = tempMembers.find(m => m.mid === mid)

  if (findMember) {
    findMember.editable = false

    // 기존 데이터에 현재 저장하려는 맴버의 데이터가 있으면 정보 업데이트
    if (findTempMember) {
      findTempMember.name = findMember.name
      findTempMember.team = findMember.team
      findTempMember.contact = findMember.contact
    }
    // 없으면 신규 데이터로 추가
    else {
      tempMembers.unshift(findMember)
    }

    // 업데이트된 새맴버 정보를 로컬 세션 스토리지에 저장
    $q.sessionStorage.set('members', tempMembers)
  }
}

</script>

<style scoped>

</style>