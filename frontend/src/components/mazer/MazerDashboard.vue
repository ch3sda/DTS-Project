<template>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <!-- Hello -->
            <div class="flex items-center h-16 mb-4 rounded">
               <p class="md:text-2xl text-xl text-primary-blue dark:text-white">
                    Hello! HYSAVUTH CHANCHESDA...
               </p>
            </div>
            <!-- Sorting -->
            <div class="grid grid-cols-1 p-4 gap-4 mb-4">
                <form class="block items-center w-40 rounded">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort by</label>

                    <!-- Wrapper for the custom select and icon -->
                    <div class="relative ">
                        <!-- SVG icon positioned on the left inside the select -->
                        <svg class="absolute  left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                        </svg>

                        <!-- Select element -->
                        <select id="countries" class="appearance-none w-40 bg-gray-50 border border-gray-300 text-primary-blue text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 pl-10 dark:bg-primary-blue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
                            <option selected>All time</option>
                            <option value="Yearly">Yearly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Today">Today</option>
                        </select>
                    </div>
                </form>

            </div>
            <!-- Widget -->
            <div class="grid md:grid-cols-4 grid-cols-2 gap-6 sm:gap-8 md:gap-4 mb-4">
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <RequestedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <ApprovedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <DeclinedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <PendingTotals />
               </div>
            </div>
            <!-- Other -->
            <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <ChartsBar />
            </div>
         </div>
</template>

<script>
  //import <<file name>> from "path"
    import RequestedTotals from "./widget/RequestedTotals.vue";
    import ApprovedTotals from "./widget/ApprovedTotals.vue";
    import DeclinedTotals from "./widget/DeclinedTotals.vue";
    import PendingTotals from "./widget/PendingTotals.vue";
    import ChartsBar from "./widget/ChartsBar.vue"

    export default {
    components: {
      RequestedTotals,
      ApprovedTotals,
      DeclinedTotals,
      PendingTotals,
      ChartsBar,
    },

  };
</script>