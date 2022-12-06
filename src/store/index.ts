import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

// 为 store state 声明类型
export interface State {
  count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('key')

// 创建一个新的 store 实例
const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useStore () {
  return baseUseStore(key)
}

export default store
