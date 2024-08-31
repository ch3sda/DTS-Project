<template>
  <div class="flex p-64 ">
    <div class="size-full">
      <image src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600"></image>
    </div>
    <div class="ml-32 size-full">  
      <form class="mt-16 max-w-sm mx-auto">
        <div class="mb-9 input-group-password block mb-2 text-sm font-medium text-gray-900 text-center dark:text-white">Sign in</div>
        <form class="max-w-sm mx-auto"></form>
      <label for="input-group-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
      <div class="mb-5">
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
          />
        </div>
      </div>
      <div class="mb-5">
        <label for="input-group-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
            </svg>
          </div>
          <input
            type="password"
            id="input-group-password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••••••••••"
          />
        </div>
      </div>
      <div class="flex items-center  w-full mb-5">
        <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        <a href="#" class="mt-4 ml-32 text-blue-600 hover:underline dark:text-blue-500">Forgot Password?</a>
    </div>
    <div class="flex justify-center">
        <button class="mt-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    </div>
    <div class="text-center mt-30">
      <label for="remember" class="ms-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Don't have an account?<a href="#" class="ml-2 text-blue-600 hover:underline dark:text-blue-500">Sign Up</a></label>
    </div>
    <div class="text-center mt-32">
      <label for="remember" class=" text-sm font-medium  text-gray-900 dark:text-gray-300">Read<a href="#" class="ml-2 text-blue-600 hover:underline dark:text-blue-500">term and conditions</a></label>
    </div>
      </form>
    </div>
  </div>

</template>