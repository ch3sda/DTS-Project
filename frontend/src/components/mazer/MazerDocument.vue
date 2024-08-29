<template>
    <div class="mt-14">
        <!-- Alert -->
        <div v-if="showAlert" id="alert-successful-submit" class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
            <div class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <h3 class="text-lg font-medium">Successful</h3>
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
                <button @click="showAlert = false" type="button" class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800" aria-label="Close">
                    Dismiss
                </button>
            </div>
        </div>
        <!-- Labal -->
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 for="countries" class="block text-4xl md:text-5xl font-bold text-primary-blue dark:text-white">Document</h3>
        </div>            
        <!-- Widget -->
        <div class="flex justify-center border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 grid grid-cols-1 lg:grid-cols-3 p-4 sm:gap-8 md:gap-16 mb-4">
            <section class="w-full lg:col-span-2 rounded-lg bg-white dark:bg-primary-blue shadow py-8 px-4 lg:py-6">
                    <h2 class="mb-4 text-xl font-medium primary-blue dark:text-white">Permission Letter</h2>
                    <hr class="h-px my-4 bg-primary-blue border-1 dark:bg-gray-700">
                    <form action="#">
                        <div class=" my-6 md:my-6">
                            <label class="mb-4 text-xl font-medium text-primary-blue dark:text-white">Date</label>
                            <div id="date-range-picker" date-rangepicker datepicker-autohide class="flex my-4 items-center">
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </div>
                                    <input id="datepicker-range-start" name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
                                </div>
                                <span class="mx-4 text-gray-500">to</span>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </div>
                                    <input id="datepicker-range-end" name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
                                </div>
                            </div>
                            <div class="mt-8 sm:col-span-2">
                                <label class="mb-4 text-xl font-medium text-primary-blue dark:text-white">Reason</label>
                                <textarea id="description" rows="8" class="block p-2.5 mt-4 w-full text-sm text-primary-blue 
                                bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                                 dark:focus:border-primary-500" placeholder="Your Reason here..."></textarea>
                            </div>
                        </div>
                        <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-my-blue dark:bg-my-blue-2 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-my-blue-2 dark:hover:bg-my-blue">
                            Submit
                        </button>
                    </form>
            </section>
            <section class="mt-4 md:mt-0 col-span-1 lg:max-w-sm w-full ">
                <div id="MazerPreviewPDF" data-modal-target="readMazerPDF" data-modal-toggle="readMazerPDF" class="p-4 bg-white border border-gray-200 rounded-lg shadow lg:p-5 dark:bg-gray-800 dark:border-gray-700 relative group">
                    <!-- Tooltip text -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 -top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm rounded px-2 py-1">
                        Click to Preview
                    </div>
                    <a role="status" href="#" class="blur blur-1 shadow animate-pulse md:p-10 dark:border-gray-700">
                        <div class="flex justify-center">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>                           
                        </div>
                        <div class="flex justify-center">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>                           
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                        <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                            <svg class="flex-shrink-0 w-32 h-32 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="M319.33-246.67h321.34v-66.66H319.33v66.66Zm0-166.66h321.34V-480H319.33v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/>
                            </svg>
                        </div>
                        <div class="flex justify-center">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>                           
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>                        
                        <span class="sr-only">Loading...</span>
                    </a>
                </div>
                <div class="flex mt-4 gap-4">
                    <button id="MazerDownloadPDF" type="button" class="text-white bg-my-red hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-200 dark:bg-my-red-2 dark:hover:bg-red-700 dark:focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Download PDF</button>
                    <button id="MazerPreviewPDF" data-modal-target="readMazerPDF" data-modal-toggle="readMazerPDF" type="button" class="text-my-red hover:text-white border dark:border-my-red-2 border-my-red hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Preview</button>
                </div>
                <!-- Main modal -->
                <div id="readMazerPDF" tabindex="-1" aria-hidden="true" class="p-8 md:p-0 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden">
                    <div class="relative p-4 w-full h-[550px] lg:w-[60vh] md:h-[60vh] bg-white rounded-lg shadow dark:bg-gray-800 overflow-auto">
                        <!-- Modal Content -->
                        <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
                            <h3 class="text-lg font-semibold dark:text-white">Preview</h3>
                            <button type="button" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="readMazerPDF">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="block md:flex justify-center items-center space-x-4 ">
                            <div class="p-4">
                                <iframe
                                    class="w-full h-[450px] rounded-lg shadow"
                                    src="https://drive.google.com/file/d/1ql-1e_BdJtD2xBOthh16VeS1TFnHxHtA/preview"
                                    frameborder="0">
                                </iframe>
                            </div>
                            <!-- Additional content -->
                            <div  class=" space-y-2 flex flex-col">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { 
    initModals, 
    initFlowbite 
} from 'flowbite'

export default {
  setup() {
    const showAlert = ref(true)
    const showModal = ref(false)

    onMounted(() => {
      // Initialize Flowbite components
      initModals();
      initFlowbite();
    });

    // Return reactive properties to be used in the template
    return {
      showAlert,
      showModal
    }
  }
}
</script>
