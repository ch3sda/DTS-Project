<template>
  <div class="md:p-16 bg-main-background dark:bg-gray-800 flex justify-center items-center">
    <div class="dark:border-2 dark:border-primary-blue dark:border-dashed dark:bg-gray-800 mt-24 lg:grid bg-white lg:grid-cols-2 rounded-lg shadow">
          <!-- Picside -->
        <div class="p-4 md:px-32 md:space-y-4 rounded-lg md:rounded-l-lg bg-primary-blue">
          <!-- FE LOGO -->
          <div class="flex justify-center items-center">
            <img src="@/assets/logo/FE_logo_white_png.png" class="h-16 w-16 md:h-32 md:w-32" alt="FE Logo" />
          </div>
          <!-- TEXT -->
          <div>
            <p class="text-white text-center text-lg lg:text-2xl darrk:text-white">
              Welcome to <span class="font-semibold"> AskForLeave</span>
            </p>
          </div>
          <!-- Image -->
          <div class="hidden lg:flex justify-center items-center">
            <img  src="@/assets/picture/image1.png" class="" alt="Image" />
          </div>
          <!-- Text -->
          <div>
            <p class="hidden lg:block text-center text-white"> Sign in to continoue access</p>
          </div> 
        </div>
        <!-- Formside -->
        <div class="px-16 bg-main-background dark:bg-gray-800 p-8 lg:px-32 rounded-lg lg:rounded-r-lg">
          <form class="space-y-8 md:space-y-16">
           <div class="space-y-4">
            <!-- Label -->
            <p class="mb-2 input-group-password block text-2xl font-bold text-primary-blue text-center dark:text-white">
              Choose Your Role
            </p>
            <!-- Sub Label -->
            <p class="text-center dark:text-white text-primary-blue text-sm font-sm">
              Please Kindly Select Your Role
            </p>
            <!-- Image -->
            <div class="flex items-center justify-center">
              <img src="@/assets/picture/image2.png" class="w-40 h-24 md:w-72 md:h-48" alt="Choose Role">
            </div>
           </div>

            <div class="space-y-3 md:space-y-4">
              <!-- User Select -->
              <div class="max-w-sm mx-auto">
                <select  v-model="selectedRole"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Student">Student</option>
                  <option value="HeadDepartment">HeadDeprtment</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
              <!-- Continue -->
              <div class="flex justify-center">
                <button @click="continueAs" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Continue as {{ selectedRole }}
                  </button>
              </div>
              <!-- Term&con -->
              <div class="text-center mt-30">
                <label for="remember" class="ms-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Read<a
                    href="#" class="ml-2 text-blue-600 hover:underline dark:text-blue-500">Term & Conditions</a></label>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRole: "Student" // Default role selection (could be set dynamically)
    };
  },
  methods: {
    continueAs() {
      this.selectedRole = this.selectedRole.toLowerCase();
      console.log('Selected Role:', this.selectedRole); // Debugging
        // Dynamic routing based on role selection
      switch (this.selectedRole) {
        case "student":
          this.$router.push({ name: 'StudentSignUp' });
          break;
        case "headdepartment":
          this.$router.push({ name: 'HeadDepartmentSignUp' });
          break;
        case "teacher":
          this.$router.push({ name: 'TeacherSignUp' });
          break;
        default:
          this.$router.push({ name: 'WelcomePage' }); // Default redirect if role is not recognized
      }
    }
  }
};
</script>