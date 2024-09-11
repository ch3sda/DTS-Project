  <template>
    <div id="app" class="bg-main-background dark:bg-gray-800 min-h-screen">
      <LoginPage />
      <!-- <MazerNavbar />
      <MazerSidebar />
      <div class="p-4 sm:ml-64">
        <router-view />
    </div> -->
    </div>
  </template>


<script>
  //import <<file name>> from "path"
    // import WelcomePage from './components/common/WelcomePage.vue';
    import LoginPage from './components/common/LoginPage.vue';

  //Student Part
  // import StudentSidebar from "./components/student/StudentSidebar.vue";

  //Mazer Part
  // import MazerNavbar from "./components/mazer/MazerNavbar.vue";
  // import MazerSidebar from "./components/mazer/MazerSidebar.vue";

  //Teacher Part
  // import TeacherSidebar from "./components/teacher/TeacherSidebar.vue";


  //HeadDepartment Part
  // import HeadDepartmentSidebar from "./components/headdepartment/HeadDepartmentSidebar.vue";

  export default {
    name: 'app',
    data() {
      return {
        isDarkMode: false, // Default value; adjust based on the current theme
      };
    },
    components: {

      LoginPage,
      // WelcomePage,

      // Student //
      // StudentSidebar,

      // Mazer //
      // MazerNavbar,
      // MazerSidebar,

      // Teacher //
      // TeacherSidebar,
  
      // HeadDepartment //
      // HeadDepartmentSidebar,

    },
    mounted() {
      this.initializeTheme();
      this.setupThemeToggle();
    },
    methods: {
      initializeTheme() {
        this.isDarkMode =
          localStorage.getItem('color-theme') === 'dark' ||
          (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

        document.documentElement.classList.toggle('dark', this.isDarkMode);
      },
      setupThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle');

        if (themeToggleBtn) {
          themeToggleBtn.addEventListener('click', () => {
            this.isDarkMode = !this.isDarkMode;
            document.documentElement.classList.toggle('dark', this.isDarkMode);
            localStorage.setItem('color-theme', this.isDarkMode ? 'dark' : 'light');
          });
        }
      }
    }
  };
</script>

  <style scoped>
  /* Scoped styles */
  
  </style>