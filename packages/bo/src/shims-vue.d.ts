/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* 전역 property type 지정 */
declare module 'vue' {
  interface ComponentCustomProperties {
    $test : string,
  }
}
export {}

