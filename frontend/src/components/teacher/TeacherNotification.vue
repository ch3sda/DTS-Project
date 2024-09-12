<template>
    <div class="mt-14 w-full">
        <div class="grid grid-cols-1 p-4 gap-4">
            <h3 class="block text-4xl md:text-5xl font-bold text-primary-blue dark:text-white">
                Notifcations
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
                        <button id="FilterDropdownNotificationButton" data-dropdown-toggle="FilterDropdownNotification" class="text-white bg-primary-blue hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-my-blue-2 p-4 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                <svg class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/>
                                </svg>
                        </button>
        
                            <!-- Dropdown menu -->
                        <div id="FilterDropdownNotification" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="checkbox-notification-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="checkbox-notification-item-12" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Approved</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox-notification-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-notification-item-13" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Declined</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox-notification-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-notification-item-14" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">System</label>
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
                                <path d="M146.67-279.33q -26.34-3.34-46.5-21.94Q80-319.87 80-346v-333.33q0-13 6.17-24.84 6.16-11.83 20.5-19.16l316-156.67L728-723.33q10 6.66 18.83 20Q755.67-690 758.67-678h-88.34L422.67-805.33l-276 137v389Zm100 159.33q-27 0-46.84-20.17Q180-160.33 180-186.67V-578q0-26.33 19.83-46.5 19.84-20.17 46.84-20.17h566.66q26.34 0 46.5 20.17Q880-604.33 880-578v391.33q0 26.34-20.17 46.5Q839.67-120 813.33-120H246.67ZM530-367.33 246.67-508.67v322h566.66v-322L530-367.33Zm0-71.34L809.33-578H250.67L530-438.67ZM813.33-578H246.67h566.66Z"/>
                            </svg>
                            <label>Mark as read</label>
                        </button>
                        <button id="decline" class="gap-2 hover:text-white text-primary-blue bg-gray-100 border border-gray-500 hover:bg-red-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:text-white dark:hover:bg-red-600 dark:focus:ring-gray-900" type="button">
                            <svg class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/>
                            </svg>
                            <label>Delete</label>
                        </button>
                    </div>
                </div> 
            </div>  
            
            <!-- Table -->
            <div class="relative shadow rounded-lg overflow-x-auto">
                <table class="w-full whitespace-nowrap text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-primary-blue dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Other
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
                            <td class="px-6 py-4">
                                System Message!
                            </td>
                            <td class="px-6 py-4">
                                We have released a new <span class="text-primary-blue dark:text-white font-semibold">Version (1.2.0)</span> with a new feature. <a href="" class="text-primary-blue dark:text-blue-500 font-semibold">View here!</a>
                            </td>
                            <td class="px-6 py-4">
                                1 Apr
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                <input id="checkbox-01" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </th>
                            <td class="px-6 py-4">
                                Request Responded!
                            </td>
                            <td class="px-6 py-4">
                                You have <span class="text-my-green font-semibold">Approved</span> HYSAVUTH CHANCHESDA for permission, on 01 / 04 / 2024. <a href="" class="text-primary-blue dark:text-blue-500 font-semibold">View here!</a>
                            </td>
                            <td class="px-6 py-4">
                                1 Apr
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                <input id="checkbox-02" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </th>
                            <td class="px-6 py-4">
                                Request Responded!
                            </td>
                            <td class="px-6 py-4">
                                You have <span class="text-my-red font-semibold">Declined</span> HYSAVUTH CHANCHESDA for permission, on 01 / 04 / 2024. <a href="" class="text-primary-blue dark:text-blue-500 font-semibold">View here!</a>
                            </td>
                            <td class="px-6 py-4">
                                1 Apr
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800  dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                            </th>
                            <td class="px-6 py-4">
                                System Message!
                            </td>
                            <td class="px-6 py-4">
                                Thank you for used our platform. We hope to serve you as much as we could! 
                            </td>
                            <td class="px-6 py-4">
                                1 Apr
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input id="checkbox-03" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">                       
                            </th>
                            <td class="px-6 py-4">
                                System Message!
                            </td>
                            <td class="px-6 py-4">
                                You have created your account as a Student, Here is a toturial for Student's privilege <a href="" class="text-primary-blue dark:text-blue-500 font-semibold">View here!</a>
                            </td>
                            <td class="px-6 py-4">
                                1 Apr
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>