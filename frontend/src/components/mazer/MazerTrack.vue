<template>
    <div class="mt-16 w-full">
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 class="block text-4xl md:text-5xl font-bold text-primary-blue dark:text-white">
                Track
            </h3>
        </div>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div class="max-w-md p-4 mb-12 bg-white dark:border-2 border dark:border-gray-700 dark:bg-transparent shadow rounded-lg">
            <form class="flex gap-4">   
                <label for="default-search" class="mb-2text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="w-full relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-primary-blue hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-my-blue-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Search
                        </button>   
                </div>

                    <!-- FIlter -->
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-primary-blue hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-my-blue-2 p-4 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        <svg class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/>
                        </svg>
                </button>

                    <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Approved</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Decliend</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pending</a>
                        </li>
                        </ul>
                </div>
            </form>
        </div>
        <div class="relative shadow rounded-lg overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-primary-blue dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 md:px-1 py-3">
                            Document name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Submit Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Recieve Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Other
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            02
                        </th>
                        <td class="px-6 md:px-1 py-4">
                            Permission Letter
                        </td>
                        <td class="px-6 py-4">
                            07/20/2024
                        </td>
                        <td class="px-6 py-4">
                            <span class="bg-my-yellow text-white text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-my-yellow dark:text-white">
                                Pending
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            --/--/----
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-white bg-primary-blue hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700">
                                Track
                            </button>   
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            03
                        </th>
                        <td class="px-6 md:px-1 py-4">
                            Permission Letter
                        </td>
                        <td class="px-6 py-4">
                            07/20/2024
                        </td>
                        <td class="px-6 py-4">
                            <span class="bg-my-red text-white text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-my-red dark:text-white">
                                Decliend
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            07/20/2024
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-white bg-primary-blue hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700">
                                Track
                            </button>   
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            01
                        </th>
                        <td class="px-6 md:px-1 py-4">
                            Permission Letter
                        </td>
                        <td class="px-6 py-4">
                            07/20/2024
                        </td>
                        <td class="px-6 py-4">
                            <span class="bg-my-green text-white text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-my-green dark:text-white">
                                Approved
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            07/20/2024
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-white bg-primary-blue hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700">
                                Track
                            </button>   
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>