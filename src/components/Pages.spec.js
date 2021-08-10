import { shallowMount } from '@vue/test-utils'
import Pages from '@/components/Pages.vue'

describe('Pages.vue', () => {
  it('starts in SPLASH state', () => {
    const state = 'SPLASH'
    const wrapper = shallowMount(Pages, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
