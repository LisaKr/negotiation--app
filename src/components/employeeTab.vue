<!-- a component showing tab with the input field and submit button. is shown if the repective tab header was clicked.
input value is connected to the data property named "employee" which is being passed to the grand-parent in an emitted event.
after the valid value is submitted, input field and button are hidden and a thank-you-message appears.-->
<template>
  <div class="employee-container">
    <h3>Employee Tab</h3>
    <input
      id="input2"
      v-if="showSubmitInfoForEmployee"
      v-model="employee"
      placeholder="Enter minimal salary in euro"
      type="text"
      name="employee"
    />
    <button
      class="submit"
      v-if="showSubmitInfoForEmployee"
      @click="handleEmployeeSubmit"
    >
      Submit
    </button>

    <div class="thanks-message" v-if="!showSubmitInfoForEmployee">
      <p>
        Thank you. Your input has been submitted.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeTab",

  data() {
    return {
      employee: null
    };
  },

  props: {
    showSubmitInfoForEmployee: Boolean
  },

  methods: {
    handleEmployeeSubmit() {
      this.$parent.$emit("handleEmployee", this.employee);
    }
  }
};
</script>
