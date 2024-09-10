<template>
  <div class="flex justify-center items-center">
    <div class="p-64 rounded-lg shadow">
      <div class="rounded-lg dark:border-primary-blue dark:border-2 shadow grid grid-cols-2 w-full">
        <!-- Picside -->
        <div class="p-8 rounded-lg bg-primary-blue">
          <image src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600">
          </image>
        </div>
        <!-- Formside -->
        <div class="p-8">
          <form>
            <div class="mb-2 input-group-password block text-2xl font-bold text-gray-900 text-center dark:text-white">
              Create a Headdepartment account</div>
            <label class="flex mb-16 justify-center text-gray-600 dark:text-white text-white text-sm font-sm">
              Please fill all the form
            </label>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                  name</label>
                <input type="text" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Chanvanny" required />
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                  name</label>
                <input type="text" id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lann" required />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                </label>

                <div class="flex mb-6">
                  <!-- otp output -->
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                      </svg>
                    </div>
                    <input type="text" id="input-group-1"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com">
                  </div>

                </div>

              </div>
              <div>
                <form class="max-w-sm mx-auto">
                  <label for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    
                  <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Female" selected>Famale</option>
                    <option value="Male">Male</option>
                  </select>
                  <div class="relative flex">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z"/>
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verify Email
                </label>

                <div class="flex mb-6">
                  <!-- otp output -->
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                        fill="currentColor">
                        <path
                          d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm100-200h46v-240h-36l-70 50 24 36 36-26v180Zm124 0h156v-40h-94l-2-2q21-20 34.5-34t21.5-22q18-18 27-36t9-38q0-29-22-48.5T458-600q-26 0-47 15t-29 39l40 16q5-13 14.5-20.5T458-558q15 0 24.5 8t9.5 20q0 11-4 20.5T470-486l-32 32-54 54v40Zm296 0q36 0 58-20t22-52q0-18-10-32t-28-22v-2q14-8 22-20.5t8-29.5q0-27-21-44.5T678-600q-25 0-46.5 14.5T604-550l40 16q4-12 13-19t21-7q13 0 21.5 7.5T708-534q0 14-10 22t-26 8h-18v40h20q20 0 31 8t11 22q0 13-11 22.5t-25 9.5q-17 0-26-7.5T638-436l-40 16q7 29 28.5 44.5T680-360ZM160-240h640v-480H160v480Zm0 0v-480 480Z" />
                      </svg>
                    </div>
                    <input type="text" id="input-group-1"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="OTP Code">
                  </div>
                  <div>
                  <!-- out button -->
                   <a href="" type="sumbit" class=" w-16">
                    <div class="h-full bg-primary-blue rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                      fill="#ffffff">
                      <path
                        d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                    </svg>
                    </div>
                  </a>

                </div>
                </div>

              </div>

              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number
                </label>

                <div class="flex mb-6">
                  <!-- otp output -->
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                      </svg>
                    </div>
                    <input type="text" id="input-group-1"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="097 323 288 8">
                  </div>

                </div>

              </div>
            </div>
            <div class="">
              <label for="input-group-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path
                      d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                  </svg>
                </div>
                <input type="password" id="input-group-password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••••••••" />
              </div>
            </div>
            <div class="mb-5">
              <label for="input-group-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path
                      d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                  </svg>
                </div>
                <input type="password" id="input-group-password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••••••••" />
              </div>
            </div>
            <form class="mx-auto">
              <label for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
              <select id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="ITE" selected>Information Technology Engineering</option>
                <option value="BIo">Bio Engineering</option>
                <option value="SCA">Supply Chain & Automation Engineering</option>
                <option value="TEE">Telecommunication & Electric Engineering</option>
                <option value="BIO">Enviromental Engineering</option>

              </select>
            </form>
            <div class="flex justify-center items-center mb-6 botton-center">
              <button type="submit"
                class=" mt-16   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create
                Headdepartment account
              </button>
            </div>
            <div class="mb-9 text-center">
              <label for="remember" class="mt-2 ml-32 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already
                have an account?<a href="#" class="ml-2 text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>