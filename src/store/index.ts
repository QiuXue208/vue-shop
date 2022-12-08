import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

const state = {
  count: 0,
  isCollapse: false,
  user: getItem(USER) || {
    username: 'admin',
    id: '123456',
    token: 'ajnfveoirjmmfoemrmklemrer'
  }
}

// 为 store state 声明类型
export type State = typeof state

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('key')

// 创建一个新的 store 实例
const store = createStore<State>({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    },
    setUserInfo (state, payload) {
      setItem(USER, payload)
      state.user = payload
    }
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useStore () {
  return baseUseStore(key)
}

export default store
