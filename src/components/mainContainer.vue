<template>
  <div class="tab-container">
    <!-- Two tabs to choose from -->
    <ChoosingTabs :employerTabIsShown="employerTabIsShown"></ChoosingTabs>
    <!-- Employer tab -->
    <EmployerTab
      v-if="employerTabIsShown"
      :showSubmitInfoForEmployer="showSubmitInfoForEmployer"
    ></EmployerTab>
    <!-- Employee Tab -->
    <EmployeeTab
      v-if="!employerTabIsShown"
      :showSubmitInfoForEmployee="showSubmitInfoForEmployee"
    ></EmployeeTab>
  </div>
</template>

<script>
import ChoosingTabs from "./choosingTabs";
import EmployerTab from "./employerTab";
import EmployeeTab from "./employeeTab";

export default {
  name: "MainContainer",

  components: {
    ChoosingTabs,
    EmployerTab,
    EmployeeTab
  },

  props: {
    employer: Number,
    employee: Number,
    employerTabIsShown: Boolean,
    showSubmitInfoForEmployer: Boolean,
    showSubmitInfoForEmployee: Boolean
  }
};
</script>
