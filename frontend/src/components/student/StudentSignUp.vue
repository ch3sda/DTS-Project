<template>
    <div class="md:p-16 bg-main-background dark:bg-gray-800 flex justify-center items-center">
        <div class="mt-24  bg-white lg:grid dark:border dark:border-gray-600 dark:border-dashed dark:bg-gray-800 md:grid-cols-2 rounded-lg shadow">
            <!-- Picside -->
            <div class="p-4 md:px-32 md:space-y-4 rounded-lg md:rounded-l-lg bg-primary-blue">
                <!-- FE LOGO -->
                <div class="flex justify-center items-center">
                    <img src="@/assets/logo/FE_logo_white_png.png" class="h-16 w-16 md:h-32 md:w-32" alt="FE Logo" />
                </div>
                <!-- TEXT -->
                <div>
                    <p class="text-white text-center text-lg md:text-2xl dark:text-white">
                        Welcome to <span class="font-semibold">AskForLeave</span>
                    </p>
                </div>
                <!-- Image -->
                <div class="hidden lg:flex justify-center items-center">
                    <img src="@/assets/picture/image1.png" alt="Image" />
                </div>
                <!-- Text -->
                <div>
                    <p class="hidden lg:block text-center text-white">Sign in to continue access</p>
                </div>
            </div>
            <!-- Formside -->
            <div class="px-16 p-8 md:px-30 rounded-lg md:rounded-r-lg">
                <div class="sticky mb-8 md:mb-16">
                    <!-- Label -->
                    <p class="mb-2 block text-base font-semibold md:text-2xl md:font-bold text-primary-blue text-center dark:text-white">
                        Create a Student Account
                    </p>
                    <p class="text-center dark:text-gray-300 text-primary-blue text-sm font-sm">
                        Please fill the form
                    </p>
                </div>
                <form class="full overflow-y-auto mt-4">

                    <!-- Input Field -->
                    <div class="h-80 overflow-y-auto">
                        <div class="max-w-md p-3 gap-2 grid grid-cols-4">
                            <!-- Last Name -->
                            <div class="md:col-span-2 col-span-4">
                            <label for="input-group-lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <div class="relative ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                                    </svg>
                                </div>
                                <input type="lastname" id="input-group-lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HYSAVUTH" required />
                            </div>
                            </div>
                            <!-- First Name -->
                            <div class="md:col-span-2 col-span-4">
                                <label for="input-group-firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                                        </svg>
                                    </div>
                                    <input type="firstname" id="input-group-firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CHANCHESDA" required />
                                </div>
                            </div>
                            <!-- Gender -->
                            <div class="md:col-span-2 col-span-2">
                                <label for="input-group-gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                            <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z"/>                                        </svg>
                                        </div>
                                        <select type="generation" id="input-group-generation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option selected value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>                                
                            </div>
                            </div>
                            <!-- Phone -->
                            <div class="col-span-2">
                                <label for="input-group-phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                                        </svg>
                                    </div>
                                    <input type="phone" id="input-group-phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="### ### ###" required />
                                </div>
                            </div>
                            <!-- Email -->
                            <div class="md:col-span-4 col-span-4">
                            <label for="input-group-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                                    </svg>  
                                </div>
                                <input type="email" id="input-group-email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@rupp.edu.kh" required />
                            </div>
                            </div>
                            <!-- OPT  -->
                            <div class="col-span-3">
                                <label for="input-group-OPT" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verify Email</label>
                                <div class="relative ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-6 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm100-200h46v-240h-36l-70 50 24 36 36-26v180Zm124 0h156v-40h-94l-2-2q21-20 34.5-34t21.5-22q18-18 27-36t9-38q0-29-22-48.5T458-600q-26 0-47 15t-29 39l40 16q5-13 14.5-20.5T458-558q15 0 24.5 8t9.5 20q0 11-4 20.5T470-486l-32 32-54 54v40Zm296 0q36 
                                            0 58-20t22-52q0-18-10-32t-28-22v-2q14-8 22-20.5t8-29.5q0-27-21-44.5T678-600q-25 0-46.5 14.5T604-550l40 16q4-12 13-19t21-7q13 0 21.5 7.5T708-534q0 14-10 22t-26 8h-18v40h20q20 0 31 8t11 22q0 13-11 22.5t-25 9.5q-17 0-26-7.5T638-436l-40 16q7 29 28.5 44.5T680-360ZM160-240h640v-480H160v480Zm0 0v-480 480Z"/>
                                        </svg>
                                    </div>
                                    <input type="OPT" id="input-group-OPT" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••" required />
                                </div>
                            </div>
                            <!-- Get Code -->
                            <div>
                                    <label for="input-group-OPTButton" class="block mb-2 text-sm font-medium text-transparent"> OTP </label>
                                    <button type="button" id="input-group-OPTButton" class="text-white bg-primary-blue hover:bg-gray-500 dark:bg-primary-blue dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-small md:font-medium rounded-lg text-xs md:text-sm py-3.5 sm:py-3 w-full text-center items-center">
                                        Get Code
                                    </button>
                            </div>

                            <!-- Password -->
                            <div class="md:col-span-4 col-span-4">
                                <label for="input-group-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                                        </svg>
                                    </div>
                                    <input type="password" id="input-group-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••••••••" required />
                                </div>
                            </div>

                            <!-- Comfirm Password -->
                            <div class="md:col-span-4 col-span-4">
                                <label for="input-group-comfirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comfirm Password</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                                        </svg>
                                    </div>
                                    <input type="comfirm-password" id="input-group-comfirm-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••••••••" required />
                                </div>
                            </div>
                            <!-- Department -->
                            <div class="md:col-span-4 col-span-4">
                            <label for="input-group-department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>                                    
                                    </svg>
                                </div>
                                <select type="generation" id="input-group-generation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="Food">Food Technology And Engineering</option>
                                    <option value="SCA">Automation and Supply Chain System And Engineering</option>
                                    <option value="DSE">Data Science And Engineering</option>
                                    <option value="EED">Enviromental Engineering</option>
                                    <option value="Bio">Bio Engineering</option>
                                    <option value="ITE">Information Technology Engineering</option>
                                    <option value="TEED">Telecommunication and Electronic Engineering</option>
                                </select>                            
                            </div>
                            </div>
                            <!-- Generation -->
                            <div class="md:col-span-2 col-span-4">
                            <label for="input-group-generation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>                                    
                                    </svg>  
                                </div>
                                <select type="generation" id="input-group-generation" class="overflow-y-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required> 
                                    <option value="G9">G1</option>
                                    <option value="G9">G2</option>
                                    <option value="G9">G3</option>
                                    <option value="G9">G4</option>
                                    <option value="G9">G5</option>
                                    <option value="G9">G6</option>
                                    <option value="G9">G7</option>
                                    <option value="G9">G8</option>
                                    <option value="G9">G9</option>
                                    <option value="G10">G10</option>
                                    <option value="G11">G11</option>
                                    <option value="G12">G12</option>
                                    <option value="G13">G13</option>
                                    <option value="G13">G14</option>
                                    <option value="G13">G15</option>
                                    <option value="G13">G16</option>
                                    <option value="G13">G17</option>
                                    <option value="G13">G18</option>
                                    <option value="G13">G19</option>
                                    <option value="G13">G20</option>
                                </select>
                            </div>
                            </div>
                            <!-- Class -->
                            <div class="md:col-span-2 col-span-4">
                            <label for="input-group-class" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>                                    
                                    </svg>  
                                </div>
                                <select type="generation" id="input-group-generation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="M1">M1</option>
                                    <option value="M2">M2</option>
                                    <option value="M3">M3</option>
                                    <option value="M4">M4</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>                            
                            </div>
                            </div>
                        </div>
                    </div>

                    <!-- Add additional fields as necessary -->
                    <div class=" p-4 ">
                        <div class="flex items-center justify-between w-full mb-4">
                            <div class="flex items-center">
                                <input id="remember-me" type="checkbox" value="" class="w-4 h-4 mr-1 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                <label for="remember-me" class="text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" class="text-xs md:text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot Password?</a>
                        </div>
                        <div class="mt-10 flex justify-center">
                            <button @click="goToDashboard" class="text-white bg-primary-blue hover:bg-gray-500 dark:bg-primary-blue dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Sign Up</button>
                        </div>
                        <div class="text-center">
                            <label for="remember" class="ms-2 text-sm text-gray-900 dark:text-gray-300">Already have an account? </label>
                            <a href="#" class="text-blue-600 text-sm hover:underline dark:text-blue-500">Sign In</a>
                        </div>
                        <div class="text-center">
                            <label for="terms" class="text-sm text-gray-900 dark:text-gray-300">Read </label>
                            <a href="#" class="text-sm text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    async goToDashboard() {
      // Update Vuex store
      await this.$store.dispatch('login', { role: 'student' });

      // Navigate to dashboard
      this.$router.push({ name: 'StudentDashboard' });
    }
  }
}
</script>
