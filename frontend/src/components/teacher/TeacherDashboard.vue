<template>
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <!-- Hello -->
        <div class="flex items-center h-16 mb-4 rounded">
           <p class="md:text-2xl text-xl text-primary-blue dark:text-white">
                Hello! PROFESSOR...
           </p>
        </div>
        <!-- Sorting -->
        <div class="grid grid-cols-1 p-4 gap-4 mb-4">
           <div class="flex items-center rounded ">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-primary-blue bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-blue dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-900" type="button">
                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>                  
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Sort by</span>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-primary-blue">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yearly</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Monthly</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Weekly</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All time</a>
                        </li>
                    </ul>
                </div>
           </div>
        </div>
        <!-- Widget -->
        <div class="grid md:grid-cols-3 grid-cols-2 gap-6 sm:gap-8 md:gap-4 mb-4">
           <div class="flex items-center justify-center rounded h-48 md:h-64">
                <RequestTotals />
           </div>
           <div class="flex items-center justify-center rounded h-48 md:h-64">
                <TodayRequests />
           </div>
        </div>
        <!-- Other -->
        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
              </svg>
           </p>
        </div>
     </div>
</template>

<script>
//import <<file name>> from "path"
//import RequestedTotals from "./widget/RequestedTotals.vue";
//import ApprovedTotals from "./widget/ApprovedTotals.vue";
import TodayRequests from "./widget/TodayRequests.vue";
import RequestTotals from "./widget/RequestTotals.vue";
//import RequestTotals from "./widget/RequestTotals.vue";
//import RequestTotals from "./widget/RequestTotals.vue";
export default {
components: {
  RequestTotals,
  TodayRequests,
},

};
</script>