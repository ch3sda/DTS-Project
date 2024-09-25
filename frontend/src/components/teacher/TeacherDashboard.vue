<template>
    <div class="mt-14">
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 for="countries" class="block text-4xl md:text-5xl font-bold text-primary-blue dark:text-white">Dashboard</h3>
        </div>   
        <!-- Hello -->
        <div class="p-4 flex items-center h-16 mb-4 rounded">
           <p class="md:text-2xl text-xl text-primary-blue dark:text-white">
                Hello! HYSAVUTH CHANCHESDA...
           </p>
        </div>
        <!-- Sorting -->
        <div class="grid grid-cols-1 p-4 gap-4">
            <form class="block items-center w-40 rounded">
                <label for="countries" class="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white">Sort by</label>
                <!-- Wrapper for the custom select and icon -->
                <div class="relative ">
                    <!-- SVG icon positioned on the left inside the select -->
                    <svg class="absolute  left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-500 pointer-events-none dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                    </svg>

                    <!-- Select element -->
                    <select id="countries" class="appearance-none bg-gray-50 border border-gray-300 text-primary-blue text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 pl-10 dark:bg-primary-blue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
                        <option selected>All time</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Today">Today</option>
                    </select>
                </div>
            </form>
        </div>
        <!-- Label -->
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Your Graph</h3>
        </div>   
        <!-- Graph -->
         <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 p-4 grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 md:gap-4 mb-4">
            <div class="flex gap-4 items-center justify-center rounded h-88 ">
                <IncomingPieGraphType1 />
            </div>
            <div class="flex gap-4 items-center justify-center rounded h-88 ">
                <IncomingLineGraphType1 />
            </div>
         </div>
     </div>
</template>

<script>
//import <<file name>> from "path"
//Self Normal

//Self Graph
import IncomingPieGraphType1 from "./widget/graph/IncomingPieGraphType1.vue"
import IncomingLineGraphType1 from "./widget/graph/IncomingLineGraphType1.vue";



export default {
components: {
    //Self Normal

    //Self Graph
    IncomingPieGraphType1,
    IncomingLineGraphType1,
},

};
</script>