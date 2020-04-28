import { mount } from "@vue/test-utils";
import BlurBug from "./BlurBug.vue";
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

const options = {
  sync: false
};

const setValue = async input => {
  input.trigger("focus");
  input.setValue("bbb");
  input.trigger("blur");
  await Vue.nextTick();
};

it.each(["#alpha", "#beta"])(
  "Presents validation error on blur for %s",
  async id => {
    const wrapper = mount(BlurBug, options);
    const input = wrapper.find(id);
    await setValue(input, "bbb");
    expect(wrapper.text()).toMatch("That's not a digit!");
  }
);
