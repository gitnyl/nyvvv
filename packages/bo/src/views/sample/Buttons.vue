<template>
  <!-- standard -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="standard" />
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
  </div>

  <!-- custom -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="custom" />
    <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
    <q-btn flat style="color: #FF0080" label="Fuchsia Flat" />
    <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
    <q-btn outline style="color: goldenrod;" label="Goldenrod" />
    <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Purple text" />
  </div>

  <!-- with-icon -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="with-icon" />
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div>

  <!-- round -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="round" />
    <q-btn round color="primary" icon="shopping_cart" />
    <q-btn round color="secondary" icon="navigation" />
    <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
    <q-btn round color="brown-5" icon="directions" />
    <q-btn round color="deep-orange" icon="edit_location" />
    <q-btn round color="purple" glossy icon="local_grocery_store" />
    <q-btn round color="black" icon="my_location" />
  </div>

  <!-- design -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="design" />
    <q-btn flat color="primary" label="Flat" />
    <q-btn flat rounded color="primary" label="Flat Rounded" />
    <q-btn flat round color="primary" icon="card_giftcard" />

    <q-btn outline color="primary" label="Outline" />
    <q-btn outline rounded color="primary" label="Outline Rounded" />
    <q-btn outline round color="primary" icon="card_giftcard" />

    <q-btn push color="primary" label="Push" />
    <q-btn push color="primary" round icon="card_giftcard" />
    <q-btn push color="white" text-color="primary" label="Push" />
    <q-btn push color="white" text-color="primary" round icon="card_giftcard" />

    <q-btn unelevated color="primary" label="Unelevated" />
    <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
    <q-btn unelevated round color="primary" icon="card_giftcard" />

    <br>
    <q-btn no-caps color="primary" label="No caps" />

    <q-btn class="glossy" color="teal" label="Glossy" />
    <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
    <q-btn class="glossy" round color="primary" icon="card_giftcard" />
    <q-btn class="glossy" round color="secondary" icon="local_florist" />
    <q-btn class="glossy" round color="deep-orange" icon="local_activity" />
  </div>

  <!-- size -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="size" />
    <q-btn
        v-for="size in sizes" :key="`btn_size_dense_sq_${size}`"
        dense
        color="primary"
        :size="size"
        :label="`Size ${size}`"
    />
  </div>

  <!-- disable -->
  <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" align="middle" label="disable" />
    <q-btn :disable="!progress" color="negative" @click="progress = false" label="Stop" />
  </div>

  <!-- indicators -->
  <div class="q-pa-md q-gutter-md">
    <div class="q-gutter-md q-ml-none">
      <q-badge rounded color="yellow" />
      <q-badge rounded color="green" />
      <q-badge rounded color="red" />
      <q-badge rounded class="q-mr-sm" color="blue" />Status

      <q-btn round icon="notifications">
        <q-badge floating color="red" rounded />
      </q-btn>
      <q-btn color="blue">
        Notifications
        <q-badge color="red" rounded floating />
      </q-btn>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const loading = ref([
      false,
      false,
      false,
      false,
      false,
      false
    ])

    const progress = ref(false)

    function simulateProgress (number) {
      // we set loading state
      loading.value[ number ] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[ number ] = false
      }, 3000)
    }

    return {
      sizes: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ],
      loading,
      progress,
      simulateProgress
    }
  }
}
</script>