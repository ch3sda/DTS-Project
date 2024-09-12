<template>
    <div class="mt-14 w-full">
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 class="block text-4xl md:text-5xl font-bold text-primary-blue dark:text-white">
                Incoming
            </h3>
        </div>

        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <!--Search box-->
                    <div class="max-w-md p-4 mb-12 bg-white dark:border-2 border dark:border-gray-700 dark:bg-transparent shadow rounded-lg">
                    <form class="flex gap-4">   
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
        
                            <!-- FIlter -->
                        <button id="FilterDropdownIncomingButton" data-dropdown-toggle="FilterDropdownIncoming" class="text-white bg-primary-blue hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-my-blue-2 p-4 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                <svg class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/>
                                </svg>
                        </button>
        
                            <!-- Dropdown menu -->
                        <div id="FilterDropdownIncoming" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="checkbox-incoming-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="checkbox-incoming-item-12" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">All time</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox-incoming-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-incoming-item-13" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Today</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox0-incoming-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-incoming-item-14" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">This Week</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox0-incoming-item-15" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-incoming-item-15" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">This Month</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox0-incoming-item-16" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-incoming-item-16" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">This Year</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>

        <!--Check box-->
            <div class="flex mb-4 w-full justify-between md:gap-32">
                <input id="selectAllLog" type="checkbox" class="w-11 h-11 text-blue-700 bg-gray-100 border-gray-500 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-500 dark:focus:ring-gray-900">
                <div class="gap-4">
                    <div class="flex gap-4 w-full;">
                        <button id="approve" class="gap-2 hover:text-white text-primary-blue bg-gray-100 border border-gray-500 hover:bg-green-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:text-white dark:hover:bg-green-600 dark:focus:ring-gray-900" type="button">
                            <svg class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/>
                            </svg>
                            <label>Approve</label>
                        </button>
                        <button id="decline" class="gap-2 hover:text-white text-primary-blue bg-gray-100 border border-gray-500 hover:bg-red-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:text-white dark:hover:bg-red-600 dark:focus:ring-gray-900" type="button">
                            <svg class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            </svg>
                            <label>Decline</label>
                        </button>
                    </div>
                </div> 
            </div>

        <!-- all incomings-->
        <div class="relative dark:border-gray-600 overflow-x-auto shadow rounded-lg">
            <table class="w-full whitespace-nowrap text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-primary-blue dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Other
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                        </tr>
                </thead> 
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                        </th>
                        <td class="px-6 py-4 flex items-center">
                            <div class=" w-4 h-4 flex items-center bg-orange-400 border-2 border-white rounded-full"></div>
                        </td>
                        <td class="px-6 py-4">
                            Incoming Permission Request!
                        </td>
                        <td class="px-6 py-4">
                           HENG SREYLOING have request for absent permission on 01 / 04/ 2024.
                           <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                            </button>                               
                        </td>
                        <td class="px-6 py-4">
                            1 Apr
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                        </th>
                        <td class="px-6 py-4 flex items-center">
                            <div class=" w-4 h-4 flex items-center bg-orange-400 border-2 border-white rounded-full"></div>
                        </td>
                        <td class="px-6 py-4">
                            Incoming Permission Request!
                        </td>
                        <td class="px-6 py-4">
                          LANN CHANVANNY have request for absent permission on 01 / 04/ 2024.
                          <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                            </button>                          
                        </td>
                        <td class="px-6 py-4">
                            1 Apr
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                        </th>
                        <td class="px-6 py-4 flex items-center">
                            <div class=" w-4 h-4 flex items-center bg-orange-400 border-2 border-white rounded-full"></div>
                        </td>
                        <td class="px-6 py-4">
                            Incoming Permission Request!
                        </td>
                        <td class="px-6 py-4">
                           HYSAVUTH CHANCHESDA have request for absent permission on 01 / 04/ 2024.
                           <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                            </button>                          
                        </td>
                        <td class="px-6 py-4">
                            1 Apr
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                        </th>
                        <td class="px-6 py-4 flex items-center">
                            <div class=" w-4 h-4 flex items-center bg-orange-400 border-2 border-white rounded-full"></div>
                        </td>
                        <td class="px-6 py-4">
                            Incoming Permission Request!
                        </td>
                        <td class="px-6 py-4">
                           SOPHEA DANETH have request for absent permission on 01 / 04/ 2024.
                           <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                            </button>                          
                        </td>
                        <td class="px-6 py-4">
                            1 Apr
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                        </th>
                        <td class="px-6 py-4 flex items-center">
                            <div class=" w-4 h-4 flex items-center bg-orange-400 border-2 border-white rounded-full"></div>
                        </td>
                        <td class="px-6 py-4">
                            Incoming Permission Request!
                        </td>
                        <td class="px-6 py-4">
                           SUN RACHANA have request for absent permission on 01 / 04/ 2024.
                           <button data-modal-target="request-view-modal" data-modal-toggle="request-view-modal" class="text-primary-blue dark:text-blue-500 font-semibold " >
                                View here!
                            </button>                          
                        </td>
                        <td class="px-6 py-4">
                            1 Apr
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

        <!-- Main modal -->
        <div id="request-view-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="font-bold text-xl text-primary-blue dark:text-white">
                            Permission Request
                        </h3>
                        <button data-modal-toggle="request-view-modal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <div class="p-4">
                            <iframe 
                                class="w-full h-[450px] rounded-lg shadow" 
                                src="https://drive.google.com/file/d/1ql-1e_BdJtD2xBOthh16VeS1TFnHxHtA/preview" 
                                frameborder="0">
                            </iframe>
                        </div>

                        <!-- Main Accordion: Request Information -->
                        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-600">
                        <div class="border border-gray-200 dark:border-gray-600 rounded-lg" id="request-information" data-accordion="collapse">
                            <!-- Quick Information (Open by default) -->
                            <div class="p-4" id="request-quick-information">
                                <h2 id="request-quick-information-head" class="flex items-center justify-between w-full">
                                    <button type="button" class="bg-transparent dark:bg-transparent flex items-center justify-between w-full" aria-hidden="true" aria-expanded="true" data-accordion-target="#request-quick-information-body" aria-controls="request-quick-information-body">
                                        <span class="font-semibold text-xl text-primary-blue dark:text-white">Request Information</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0 text-primary-blue dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="request-quick-information-body" class="mt-8 space-y-6 md:space-y-4 block">
                                    <!-- Student Information -->
                                    <div class="flex gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Student<br><span class="font-normal text-sm md:text-base"> HYSAVUTH CHANCHESDA</span></h2>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Gender<br><span class="font-normal text-sm md:text-base"> Male</span></h2>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Year<br><span class="font-normal text-sm md:text-base"> 3</span></h2>
                                    </div>
                                    <!-- Permission Date -->
                                    <div class="flex gap-6 md:gap-24">
                                        <div class="flex gap-6">
                                            <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Start Date<br><span class="font-normal text-sm md:text-base"> 04/01/2024</span></h2>
                                            <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">End Date<br><span class="font-normal text-sm md:text-base"> 04/02/2024</span></h2>
                                        </div>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Total<br><span class="font-normal text-sm md:text-base"> 2 <span>Days</span></span></h2>
                                    </div>
                                    <!-- Teacher Involved -->
                                    <div class="gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Teacher Involved<br><span class="font-normal text-sm md:text-base"> Toem Theara , Khim Chamroeun , Vantha</span></h2>
                                    </div>
                                    <!-- Permission Reason -->
                                    <div class="gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Reason<br></h2>
                                        <div class="text-primary-blue dark:text-white mt-2 p-2 border rounded-lg dark:border-gray-600">
                                            <p class="font-normal text-sm md:text-base">
                                                Greeting Teacher! I would like to ask permission for today because I have to attend a training program at NICC!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-600">

                            <!-- Detail Information (Collapsed by default) -->
                            <div class="p-4" id="request-detail-information">
                                <h2 id="request-detail-information-head" class="flex items-center justify-between w-full">
                                    <button type="button" class="bg-transparent dark:bg-transparent flex items-center justify-between w-full" aria-hidden="true"  aria-expanded="false"  data-accordion-target="#request-detail-information-body" aria-controls="request-detail-information-body">
                                        <span class="font-semibold text-xl text-primary-blue dark:text-white">Detail Information</span>
                                        <svg data-accordion-icon class="w-3 h-3 shrink-0 text-primary-blue dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="request-detail-information-body" class="hidden mt-8 space-y-6 md:space-y-4">
                                    <!-- Student Information -->
                                    <div class="flex gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Student<br><span class="font-normal text-sm md:text-base"> HYSAVUTH CHANCHESDA</span></h2>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Gender<br><span class="font-normal text-sm md:text-base"> Male</span></h2>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Year<br><span class="font-normal text-sm md:text-base"> 3</span></h2>
                                    </div>
                                    <!-- Mazer & Class -->
                                    <div class="flex gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Mazer<br><span class="font-normal text-sm md:text-base"> LANN CHANVANNY</span></h2>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Class<br><span class="font-normal text-sm md:text-base"> M3</span></h2>
                                    </div>
                                    <!-- Permission Date -->
                                    <div class="flex gap-6 md:gap-24">
                                        <div class="flex gap-6">
                                            <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Start Date<br><span class="font-normal text-sm md:text-base"> 04/01/2024</span></h2>
                                            <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">End Date<br><span class="font-normal text-sm md:text-base"> 04/02/2024</span></h2>
                                        </div>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Total<br><span class="font-normal text-sm md:text-base"> 2 <span>Days</span></span></h2>
                                    </div>
                                    <!-- Teacher Involved -->
                                    <div class="gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Teacher Involved<br><span class="font-normal text-sm md:text-base"> Toem Theara , Khim Chamroeun , Vantha</span></h2>
                                    </div>
                                    <!-- H.Department & Department -->
                                    <div class="flex gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">H.Department<br><span class="font-normal text-sm md:text-base"> Srun Sovila</span></h2>
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Department<br><span class="font-normal text-sm md:text-base"> ITE</span></h2>
                                    </div>
                                    <!-- Requested Date -->
                                    <div class="flex gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Request date<br><span class="font-normal text-sm md:text-base"> 04/01/2024, 6:13 AM</span></h2>
                                    </div>
                                    <!-- Permission Reason -->
                                    <div class="gap-6 md:gap-24">
                                        <h2 class="text-primary-blue dark:text-white font-semibold text-base md:text-lg">Reason<br></h2>
                                        <div class="text-primary-blue dark:text-white mt-2 p-2 border rounded-lg dark:border-gray-600">
                                            <p class="font-normal text-sm md:text-base">
                                                Greeting Teacher! I would like to ask permission for today because I have to attend a training program at NICC!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-toggle="request-view-modal" type="button" class="text-white bg-my-green hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-my-green dark:hover:bg-green-700 dark:focus:ring-green-800">Approved</button>
                        <button data-modal-toggle="request-view-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-my-red rounded-lg border border-gray-200 hover:bg-red-800 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-my-red dark:border-gray-600 dark:hover:bg-red-700">Declined</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>