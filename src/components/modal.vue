<!-- A pop-up element appearing after both values have been submitted -->
<template>
    <div class="modal">
        <div @click="closeModal" class="closing">X</div>
        <h2>
            {{ result }}
        </h2>

        <p>Employer is prepared to pay max: {{ this.employer }} Euro</p>

        <p>Employee is prepared to accept min: {{ this.employee }} Euro</p>
    </div>
</template>

<script>
import Weather from "./weather";

export default {
    name: "Modal",

    props: ["employer", "employee"],

    data: function() {
        return {
            result: null
        };
    },
    //on load of the modal we calculate whether it was a success or a failure
    mounted() {
        if (this.employer - this.employee >= 0) {
            this.result = "Success";
        } else {
            this.result = "Failure";
        }
    },

    methods: {
        closeModal() {
            this.$emit("close-modal");
        }
    }
};
</script>
