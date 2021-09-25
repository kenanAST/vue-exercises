app = Vue.createApp({
    data(){
        return {
            inputValue: '',
            inputValueThree: '',
            confirmedValue: '',
        }
    },

    methods: {
        showAlert(){
            alert('You have clicked the button');
        },

        updateValue(event){
            this.inputValue = event.target.value; 
        },

        confirmValue(){
            this.confirmedValue = this.inputValueThree;
        },

        updateValueThree(event){
            this.inputValueThree = event.target.value; 
        }

    }

});

app.mount("#assignment");