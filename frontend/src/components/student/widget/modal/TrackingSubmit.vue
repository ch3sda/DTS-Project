<template>
    <!-- Modal toggle -->
    <button data-modal-target="TrackingUser-modal" data-modal-toggle="TrackingUser-modal" class="text-white bg-primary-blue hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700" type="button">
    Track
    </button>
    <!-- Main modal -->
    <div id="TrackingUser-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-primary-blue dark:text-white">
                        Tracking
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="TrackingUser-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-2">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <ol class="relative border-s border-gray-300 dark:border-gray-600">                  
                            <li class="mb-10 ms-6">            
                                <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-my-green dark:bg-my-green">
                                    <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/>                
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-primary-blue dark:text-white">Student <span class="bg-my-green text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-my- dark:text-white ms-3">Submited</span></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1/04/20224, 6:23AM</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">You have submited your document.</p>
                            </li>
                            <li class="mb-10 ms-6">            
                                <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-my-green dark:bg-my-green">
                                    <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/>                
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-primary-blue dark:text-white">Mazer <span class="bg-my-green text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-my- dark:text-white ms-3">Approved</span></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">01/04/2024, 6:40AM</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Your document have approved.</p>
                            </li>
                            <li class="mb-10 ms-6">            
                                <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-my-yellow dark:bg-my-yellow">
                                    <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M312-146.67h336v-124.66q0-70-49-118.67t-119-48.67q-70 0-119 48.67t-49 118.67v124.66Zm168-374.66q70 0 119-49t49-119v-124H312v124q0 70 49 119t119 49ZM160-80v-66.67h85.33v-124.66q0-67.67 36.17-124.17t97.17-84.5q-61-28.67-97.17-85.17t-36.17-124.16v-124H160V-880h640v66.67h-85.33v124q0 67.66-36.17 124.16T581.33-480q61 28 97.17 84.5t36.17 124.17v124.66H800V-80H160Z"/>                
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-primary-blue dark:text-white">Head Department <span class="bg-my-yellow text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-my-yellow dark:text-white ms-3">Pending</span></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">--/--/----, -:--</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Please wait for the approve.</p>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                            </li>
                            <li class="mb-10 ms-6">            
                                <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-my-red dark:bg-my-red">
                                    <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/>
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-primary-blue dark:text-white">Teacher <span class="bg-my-red text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-my-red dark:text-white ms-3">Declined</span></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">01/04/2024, 7:25AM</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Your document have been Declined.</p>
                            </li>
                            <li class="mb-10 ms-6">            
                                <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-my-green dark:bg-my-green">
                                    <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/>                
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-primary-blue dark:text-white">Student <span class="bg-my-green text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-my- dark:text-white ms-3">Recieved</span></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">01/04/2024, 7:26AM</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Your document have been successful approved.</p>
                            </li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import StatusApproved from './status/StatusApproved.vue';

    export default {
        components: {
            // StatusApproved,
        },
    }
</script>