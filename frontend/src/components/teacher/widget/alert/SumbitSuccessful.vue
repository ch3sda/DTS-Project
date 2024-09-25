
<template>
    <div>
        <!-- Alert -->
        <div v-if="isAlertVisible" id="alert-successful-submit" class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
        <div class="flex items-center">
            <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-semibold"> Submit Successful!</h3>
        </div>
        <div class="mt-2 mb-4 text-sm">
            Your document has been successfully submitted, waiting for approval from other parties.
        </div>
        <div class="flex">
            <button type="button" class="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
            View track
            </button>
            <button id="alert-successful-submit-btn" type="button" @click="dismissAlert" class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800" aria-label="Close">
            Dismiss
            </button>
        </div>
        </div>
        <!-- New button to show the alert again -->
        <button type="button" @click="showAlert" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
        Successful Alert
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
      const $targetElSucessful = document.getElementById('alert-successful-submit');
      const $triggerElSucessful = document.getElementById('alert-successful-submit-btn');

      if ($targetElSucessful) {
        const options = {
          transition: 'transition-opacity',
          duration: 1000,
          timing: 'ease-out',
          // callback functions
          onHide: (context, targetElSucessful) => {
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