<template>
    <div class="md:p-16 bg-main-background dark:bg-gray-800 flex justify-center items-center">
        <div class="mt-24 lg:grid dark:border dark:border-gray-600 dark:border-dashed dark:bg-gray-800 md:grid-cols-2 rounded-lg shadow">
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
            <div class="px-16 p-8 md:px-32 rounded-lg md:rounded-r-lg">
                <div class="sticky mb-8 md:mb-16">
                    <!-- Label -->
                    <p class="mb-2 block text-base font-semibold md:text-2xl md:font-bold text-primary-blue text-center dark:text-white">
                        Create a Student Account
                    </p>
                </div>
                <form class="h-32 overflow-y mt-4">
                    <label for="input-group-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <div class="mb-4">
                        <div class="relative mb-4">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="email" id="input-group-email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@rupp.edu.kh" required />
                        </div>
                    </div>
                    <div class="mb-4">
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
                    <!-- Add additional fields as necessary -->
                    <div class="flex items-center justify-between w-full mb-4">
                        <div>
                            <input id="remember-me" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                            <label for="remember-me" class="text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-xs md:text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot Password?</a>
                    </div>
                    <div class="mt-10 flex justify-center">
                        <button @click="goToDashboard" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    </div>
                    <div class="text-center">
                        <label for="remember" class="ms-2 text-sm text-gray-900 dark:text-gray-300">Don't have an account?</label>
                        <a href="#" class="text-blue-600 text-sm hover:underline dark:text-blue-500">Sign Up</a>
                    </div>
                    <div class="text-center">
                        <label for="terms" class="text-sm text-gray-900 dark:text-gray-300">Read</label>
                        <a href="#" class="text-sm text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
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
      await this.$store.dispatch('login', { role: 'headdepartment' });

      // Navigate to dashboard
      this.$router.push({ name: 'HeadDepartmentDashboard' });
    }
  }
}
</script>
