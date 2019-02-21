<!-- choosing between two tabs. clicking on either tab header results in adding an active class to the tab header
and emits an event to the grand-parent (App.vue) signaling it to show the respective tab-->
<template>
  <div class="choosing-container">
    <div
      class="employer-tab"
      :class="{ active: employerTabIsShown == true }"
      @click="showEmployer"
    >
      Employer
    </div>
    <div
      class="employee-tab"
      :class="{ active: employerTabIsShown == false }"
      @click="showEmployee"
    >
      Employee
    </div>
  </div>
</template>

<script>
export default {
  name: "ChoosingTabs",

  props: {
    employerTabIsShown: Boolean
  },

  methods: {
    showEmployer() {
      this.$parent.$emit("showEmployer");
    },
    showEmployee() {
      this.$parent.$emit("showEmployee");
    }
  }
};
</script>
