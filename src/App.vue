<template>
  <div id="app" class="main">
    <!-- Header with title-->
    <Header></Header>
    <!-- The whole shebang with employer/employee tabs, telling it which emitted events to listen to and passing props-->
    <MainContainer
      @showEmployer="showEmployer"
      @showEmployee="showEmployee"
      @handleEmployer="handleEmployerSubmit"
      @handleEmployee="handleEmployeeSubmit"
      :employerTabIsShown="employerTabIsShown"
      :showSubmitInfoForEmployer="showSubmitInfoForEmployer"
      :showSubmitInfoForEmployee="showSubmitInfoForEmployee"
    >
    </MainContainer>
    <!-- show modal when both fields have been filled with numeric values-->
    <Modal
      v-if="employee != null && employer != null"
      :employer="employer"
      :employee="employee"
      @close-modal="closeModal"
    >
    </Modal>

    <InputError v-if="showError"></InputError>
  </div>
</template>

<script>
import Header from "./components/header";
import MainContainer from "./components/mainContainer";
import InputError from "./components/inputError";
import Modal from "./components/modal";

export default {
  name: "App",

  components: {
    Modal,
    Header,
    MainContainer,
    InputError
  },

  data() {
    return {
      employer: null,
      employee: null,
      employerTabIsShown: true,
      showSubmitInfoForEmployer: true,
      showSubmitInfoForEmployee: true,
      showError: false
    };
  },

  methods: {
    //decide which tab (employer/employee) to show based on which tab is clicked
    showEmployer() {
      this.employerTabIsShown = true;
    },

    showEmployee() {
      this.employerTabIsShown = false;
    },
    //checking if the provided value is a number or not. show the error if not.
    //if yes, proceed to put it into data and hide submit options
    handleEmployerSubmit(value) {
      if (isNaN(value)) {
        this.showError = true;
        document.getElementById("input1").value = "";
      } else {
        document.getElementById("input1").value = "";
        this.showError = false;
        this.employer = parseInt(value);
        this.showSubmitInfoForEmployer = false;
      }
    },

    handleEmployeeSubmit(value) {
      if (isNaN(value)) {
        this.showError = true;
        document.getElementById("input2").value = "";
      } else {
        this.showError = false;
        document.getElementById("input2").value = "";
        this.employee = parseInt(value);
        this.showSubmitInfoForEmployee = false;
      }
    },

    //resetting everything after closing modal
    closeModal() {
      this.employee = null;
      this.employer = null;
      this.showSubmitInfoForEmployer = true;
      this.showSubmitInfoForEmployee = true;
    }
  }
};
</script>
