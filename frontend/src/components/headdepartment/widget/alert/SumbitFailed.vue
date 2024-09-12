<template>
    <div>
        <div v-if="isAlertVisible" id="alert-failed-submit" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
        <div class="flex items-center">
            <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-semibold">Submit Failed!</h3>
        </div>
        <div class="mt-2 mb-4 ">
            <span class="font-sm">Your submit is failed due to few reason, Please read down below <br></span>
            <span class="text-sm font-sm">
              1 . Check your internet connection.<br>
              2 . The date format must be <span class="font-semibold"> MM/DD/YYYY.</span> <br>
              3 . Fill all the form.
            </span>
        </div>
        <div class="flex">
            <button @click="dismissAlert" id="alert-failed-submit-btn" type="button" class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
            Dismiss
            </button>
        </div>
        </div>
        <button type="button" @click="showAlert" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                Failed Alert
        </button>
    </div>
</template>

<script>
import { Dismiss } from 'flowbite';

export default {
  data() {
    return {        
      isAlertVisible: false, // Alert is initially visible
    };
  },
  methods: {
    dismissAlert() {
      const $targetElSucessful = document.getElementById('alert-failed-submit');
      const $triggerElSucessful = document.getElementById('alert-failed-submit-btn');

      if ($targetElSucessful) {
        const options = {
          transition: 'transition-opacity',
          duration: 1000,
          timing: 'ease-out',
          // callback functions
          onHide: ( targetElSucessful) => {
            console.log('element has been dismissed');
            console.log(targetElSucessful);
          },
        };

        const dismiss = new Dismiss($targetElSucessful, $triggerElSucessful, options);
        dismiss.hide();
        this.isAlertVisible = false; // Update state to hide alert in UI
      } else {
        console.error('Element not found');
      }
    },
    showAlert() {
      this.isAlertVisible = true; // Show the alert again
    },
  },
};
</script>