<template>
   <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white dark:bg-primary-blue sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-primary-blue">
         <ul class="space-y-2 font-medium">
            <li>
               <router-link to="/headdepartment/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                   <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h260v-586.66h-260v586.66Zm326.66 0h260v-294h-260v294Zm0-360.66h260v-226h-260v226Z"/>
                 </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
               </router-link>
            </li>
            <li>
               <router-link to="/headdepartment/notification" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                   <path d="M160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z"/>
                 </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Notifcations </span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-800 dark:text-red-300">9</span>
               </router-link>
            </li>
            <li>
               <router-link to="/headdepartment/incoming" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                   <path d="M200-200v-397.33h66.67v284L753.33-800 800-753.33 313.33-266.67h284V-200H200Z"/>
                 </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Incoming  </span>
               </router-link>
            </li>
         </ul>
         <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
               <router-link to="/headdepartment/setting" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                 <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                   <path d="m382-80-18.67-126.67q-17-6.33-34.83-16.66-17.83-10.34-32.17-21.67L178-192.33 79.33-365l106.34-78.67q-1.67-8.33-2-18.16-.34-9.84-.34-18.17 0-8.33.34-18.17.33-9.83 2-18.16L79.33-595 178-767.67 296.33-715q14.34-11.33 32.34-21.67 18-10.33 34.66-16L382-880h196l18.67 126.67q17 6.33 35.16 16.33 18.17 10 31.84 22L782-767.67 880.67-595l-106.34 77.33q1.67 9 2 18.84.34 9.83.34 18.83 0 9-.34 18.5Q776-452 774-443l106.33 78-98.66 172.67-118-52.67q-14.34 11.33-32 22-17.67 10.67-35 16.33L578-80H382Zm55.33-66.67h85l14-110q32.34-8 60.84-24.5T649-321l103.67 44.33 39.66-70.66L701-415q4.33-16 6.67-32.17Q710-463.33 710-480q0-16.67-2-32.83-2-16.17-7-32.17l91.33-67.67-39.66-70.66L649-638.67q-22.67-25-50.83-41.83-28.17-16.83-61.84-22.83l-13.66-110h-85l-14 110q-33 7.33-61.5 23.83T311-639l-103.67-44.33-39.66 70.66L259-545.33Q254.67-529 252.33-513 250-497 250-480q0 16.67 2.33 32.67 2.34 16 6.67 32.33l-91.33 67.67 39.66 70.66L311-321.33q23.33 23.66 51.83 40.16 28.5 16.5 60.84 24.5l13.66 110Zm43.34-200q55.33 0 94.33-39T614-480q0-55.33-39-94.33t-94.33-39q-55.67 0-94.5 39-38.84 39-38.84 94.33t38.84 94.33q38.83 39 94.5 39ZM480-480Z"/>              
                 </svg>
                  <span class="ms-3">Settings</span>
               </router-link>
            </li>
            <li>
               <router-link to="/headdepartment/help" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                   <path d="M482-244.67q17.67 0 29.83-12.16Q524-269 524-286.67q0-17.66-12.17-29.83-12.16-12.17-29.83-12.17-17.67 0-29.83 12.17Q440-304.33 440-286.67q0 17.67 12.17 29.84 12.16 12.16 29.83 12.16Zm-35.33-148.66h64q0-28.34 6.83-49 6.83-20.67 41.17-50.34 29.33-26 43-50.5 13.66-24.5 13.66-55.5 0-54-36.66-85.33-36.67-31.33-93.34-31.33-51.66 0-88.5 26.33Q360-662.67 344-620l57.33 22q9-24.67 29.5-42t52.5-17.33q33.34 0 52.67 18.16 19.33 18.17 19.33 44.5 0 21.34-12.66 40.17-12.67 18.83-35.34 37.83-34.66 30.34-47.66 54-13 23.67-13 69.34ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/>               
                 </svg>
                  <span class="ms-3">Help</span>
               </router-link>
            </li>
         </ul>
      </div>
   </aside>
   </template>