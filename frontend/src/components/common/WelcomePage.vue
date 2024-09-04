<template>
    <div class="flex mt-16 justify-center items-center">
      <div class="p-64 rounded-lg shadow">
        <div class="rounded-lg dark:border-primary-blue dark:border-2 shadow grid grid-cols-2 w-full"
        >
          <!-- Picside -->
            <div class="p-8 rounded-lg bg-primary-blue">
                <image
                    src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600"></image>
            </div>
          <!-- Formside -->
          <div class="p-8 text-center">
            <form>
              <div
                class="mb-2 input-group-password block text-2xl font-bold text-gray-900 text-center dark:text-white">Choose Your Role
            </div>
            <label class="text-gray-600 dark:text-white text-white text-sm font-sm">
                Please Kindly Select Your Role
            </label>
            <div class="p-8 rounded-lge">
                <image
                    src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600"></image>
            </div>

            <form class="max-w-sm mx-auto">
                <select id="Student" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Student">Student</option>
                    <option value="Headdepartment"> Headdeprtment</option>
                    <option value="Teacher">Teacher</option>
                </select>
            </form>
            <div class="flex justify-center">
                <button class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continoue as a student</button>
            </div>
            <div class="text-center mt-30">
                <label for="remember" class="ms-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Read term and<a href="#" class="ml-2 text-blue-600 hover:underline dark:text-blue-500">Conditions</a></label>
            </div>
            </form>

          </div>
        </div>
      </div>
    </div>
</template>
