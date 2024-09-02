<template>
    
    <!--Check box-->
    <div class="max-w-md p-4 mt-16 mb-4">
        <div class="flex items-center gap-24 w-full">
            <input id="checkbox-table-search-1" type="checkbox" class="w-10 h-10 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex gap-4 w-full;">
                <button id="approve" class="text-primary-blue bg-gray-100 border border-gray-500 hover:bg-green-500 hover:border-green-00 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-blue dark:text-white dark:hover:bg-green-400 dark:hover:border-green-300 dark:focus:ring-gray-900" type="button">
                    <svg class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-50 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/>
                    </svg>
                    <span class="flex-1 hover:text-white ms-3 whitespace-nowrap">Approve</span>
                </button>
                <button id="decline" class="text-primary-blue bg-gray-100 border border-gray-500 hover:bg-red-500 hover:border-red-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-blue dark:text-white dark:hover:bg-red-800 dark:hover:border-red-700 dark:focus:ring-gray-900" type="button">
                    <svg class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-50 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    </svg>
                    <span class="flex-1 hover:text-white ms-3 whitespace-nowrap">Decline</span>
                </button>
            </div>
        </div>
    </div>
    
           
   <!-- all incomings-->
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> </thead>
           
           <tbody>
               <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                   <td class="w-4 p-4">
                       <div class="flex items-center">
                           <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                           <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                           <span class=" w-4 h-4 ml-8  bg-orange-400 border-2 border-white rounded-full"></span>
                       </div>
                   </td>
                   <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       Incoming Permission Request."
                   </th>
                   <td class="px-6 py-4 text-gray-800 dark:text-white">
                        HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                   </td>
                   <td>
                       1 Apr
                   </td>
               </tr>
               <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            <span class=" w-4 h-4 ml-8 bg-orange-400 border-2 border-white rounded-full"></span>
                        </div>
                    </td>
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Incoming Permission Request."
                    </th>
                    <td class="px-6 py-4 text-gray-800 dark:text-white">
                        HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                    </td>
                    <td>
                        1 Apr
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            <span class=" w-4 h-4 ml-8 bg-orange-400 border-2 border-white rounded-full"></span>
                        </div>
                    </td>
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Incoming Permission Request."
                    </th>
                    <td class="px-6 py-4 text-gray-800 dark:text-white">
                        HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                    </td>
                    <td>
                        1 Apr
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            <span class=" w-4 h-4 ml-8 bg-orange-400 border-2 border-white rounded-full"></span>
                        </div>
                    </td>
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Incoming Permission Request."
                    </th>
                    <td class="px-6 py-4 text-gray-800 dark:text-white">
                        HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                    </td>
                    <td>
                        1 Apr
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            <span class=" w-4 h-4 ml-8 bg-orange-400 border-2 border-white rounded-full"></span>
                        </div>
                    </td>
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Incoming Permission Request."
                    </th>
                    <td class="px-6 py-4 text-gray-800 dark:text-white">
                        HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                    </td>
                    <td>
                        1 Apr
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            <span class=" w-4 h-4 ml-8 bg-orange-400 border-2 border-white rounded-full"></span>
                        </div>
                    </td>
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Incoming Permission Request."
                    </th>
                    <td class="px-6 py-4 text-gray-800 dark:text-white">
                        HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                    </td>
                    <td>
                        1 Apr
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            <span class=" w-4 h-4 ml-8 bg-orange-400 border-2 border-white rounded-full"></span>
                        </div>
                    </td>
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Incoming Permission Request."
                    </th>
                    <td class="px-6 py-4 text-gray-800 dark:text-white">
                         HENG SREYLOING for permission, on 01 / 04/ 2024.<a href="#" class="text-blue-400 font-semibold " >View here!</a> 
                    </td>
                    <td>
                        1 Apr
                    </td>
                </tr>
               
               
               
                   
           </tbody>
       </table>
   </div>
   
   </template>