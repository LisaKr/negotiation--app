<!-- a component showing tab with the input field and submit button. is shown if the repective tab header was clicked.
input value is connected to the data property named "employer" which is being passed to the grand-parent in an emitted event.
after the valid value is submitted, input field and button are hidden and a thank-you-message appears.-->
<template>
  <div class="employer-container">
    <h3>Employer Tab</h3>
    <input
      id="input1"
      v-if="showSubmitInfoForEmployer"
      v-model="employer"
      placeholder="Enter maximal offer in euro"
      type="text"
      name="employer"
    />

    <button v-if="showSubmitInfoForEmployer" @click="handleEmployerSubmit">
      Submit
    </button>

    <div class="thanks-message" v-if="!showSubmitInfoForEmployer">
      <p>
        Thank you. Your input has been submitted.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployerTab",
  props: {
    showSubmitInfoForEmployer: Boolean
  },

  data() {
    return {
      employer: null
    };
  },

  methods: {
    handleEmployerSubmit() {
      this.$parent.$emit("handleEmployer", this.employer);
    }
  }
};
</script>
