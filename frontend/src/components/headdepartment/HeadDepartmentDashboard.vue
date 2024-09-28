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
        <!-- Label -->
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Your Graph</h3>
        </div>   
        <!-- Graph row 1-->
         <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 p-4 grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 md:gap-4 mb-4">
            <div class="flex gap-4 items-center justify-center rounded ">
                <IncomingRowGraphType2 />
            </div>
            <div class="flex gap-4 items-center justify-center rounded ">
                <IncomingPieGraphType1 />
            </div>
            <!-- <div class="gap-4 items-center justify-center rounded">
                <IncomingLineGraphType1 />
            </div> -->
            <div class="hidden lg:flex lg:col-span-2 gap-4 items-center justify-center rounded h-88 ">
                <IncomingColGraphType1 />
            </div>
            <div class="hidden row-span-3 gap-4 items-center justify-center rounded ">
                <IncomingRowGraphType1 />
            </div>

         </div>
        <!-- Label -->
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Student's List</h3>
        </div>
        <!--Search box-->
                <div class="max-w-lg w-full justify-center items-center p-4 mb-12 bg-white dark:border-2 border dark:border-gray-700 dark:bg-transparent shadow rounded-lg">
                    <form class="w-full gap-4">   
                        <label for="default-search" class="mb-2text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="w-full relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-primary-blue hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-my-blue-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Search
                                </button>   
                        </div>
                    </form>
                    <div>
                    <div class="gap-4 mt-4 flex">
                        <form class="max-w-sm ">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label>  
                        <select id="small" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="G9" selected>G9</option>
                            <option value="G10">G10</option>
                            <option value="G11">G11</option>
                            <option value="G12">G12</option>
                            <option value="G13">G13</option>
                            </select>    
                        </form>
                        <form class="max-w-sm ">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                            <select id="small" class="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="M1" selected>M1</option>
                            <option value="M2">M2</option>
                            <option value="M3">M3</option>
                            <option value="M4">M4</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="A3">A3</option>
                            <option value="A4">A4</option>
                            </select>
                        </form>
                    </div>
                    </div>
                </div>
        <!-- Table -->
         <div class="relative shadow rounded-lg overflow-x-auto lg:w-2/3 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-primary-blue dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Generation
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4">
                                HYSAVUTH CHANCHESDA
                            </td>
                            <td class="px-6 py-4">
                                G9
                            </td>
                            <td class="px-6 py-4">
                                M3
                            </td>
                            <td class="px-6 py-4">
                                This student had been asked for permission<span class="font-semibold text-my-red dark:text-white"> 10 </span>times.
                                <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4">
                                LANN CHANVANNY
                            </td>
                            <td class="px-6 py-4">
                                G9
                            </td>
                            <td class="px-6 py-4">
                                M3
                            </td>
                            <td class="px-6 py-4">
                                This student had been asked for permission<span class="font-semibold text-my-red dark:text-white"> 10 </span>times.
                                <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <td class="px-6 py-4">
                                HENG SREYLOING
                            </td>
                            <td class="px-6 py-4">
                                G9
                            </td>
                            <td class="px-6 py-4">
                                M3
                            </td>
                            <td class="px-6 py-4">
                                This student had been asked for permission<span class="font-semibold text-my-red dark:text-white"> 10 </span>times.
                                <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>  
         </div>
     </div>
</template>

<script>
//import <<file name>> from "path"
//Self Normal

//Self Graph
import IncomingPieGraphType1 from "./widget/graph/IncomingPieGraphType1.vue"

// import IncomingLineGraphType1 from "./widget/graph/IncomingLineGraphType1.vue";

import IncomingColGraphType1 from "./widget/graph/IncomingColGraphType1.vue";
import IncomingRowGraphType1 from "./widget/graph/IncomingRowGraphType1.vue"
import IncomingRowGraphType2 from "./widget/graph/IncomingRowGraphType2.vue";




export default {
components: {
    //Self Normal

    //Self Graph
    IncomingPieGraphType1,
    // IncomingLineGraphType1,
    IncomingColGraphType1,
    IncomingRowGraphType1,
    IncomingRowGraphType2,
},  

};
</script>