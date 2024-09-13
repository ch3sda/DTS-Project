<template>
  <div id="app" class="bg-main-background dark:bg-gray-800 min-h-screen">
    <WelcomePage class="" />
    <!-- Conditionally render Navbar based on the user's role -->
    <component :is="getNavbarComponent" />
    <!-- Conditionally render Sidebar based on the user's role -->
    <component :is="getSidebarComponent" />
      <!-- Main Content (router-view for the dashboard) -->
      <div class="p-4 sm:ml-64">
        <router-view />
      </div>
  </div>
</template>

<script>
import WelcomePage from './components/common/WelcomePage.vue';

// Importing sidebar and navbar components
import StudentSidebar from './components/student/StudentSidebar.vue';
import TeacherSidebar from './components/teacher/TeacherSidebar.vue';
import MazerSidebar from './components/mazer/MazerSidebar.vue';
import HeadDepartmentSidebar from './components/headdepartment/HeadDepartmentSidebar.vue';

import StudentNavbar from './components/student/StudentNavbar.vue';
import TeacherNavbar from './components/teacher/TeacherNavbar.vue';
import MazerNavbar from './components/mazer/MazerNavbar.vue';
import HeadDepartmentNavbar from './components/headdepartment/HeadDepartmentNavbar.vue';

// import { mapState } from 'vuex'; // Importing mapState to access Vuex store state

export default {
  name: 'app',
  data() {
    return {
      isDarkMode: false, // Default value; adjust based on the current theme
    };
  },
components: {
  WelcomePage,
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
  },
  computed: {
    // Mapping userRole from Vuex state
    userRole() {
      const role = this.$store.getters.userRole;
      console.log('User Role:', role); // Log the userRole to the console
      return role;
    },
    // ...mapState({
    //   userRole: state => state.userRole,
    // }),
    
    getSidebarComponent() {
      switch (this.userRole) {
        case 'teacher':
          return TeacherSidebar;
        case 'mazer':
          return MazerSidebar;
        case 'headdepartment':
          return HeadDepartmentSidebar;
        case 'student':
          return StudentSidebar;
        default:
          return null;
      }
    },
    getNavbarComponent() {
      switch (this.userRole) {
        case 'teacher':
          return TeacherNavbar;
        case 'mazer':
          return MazerNavbar;
        case 'headdepartment':
          return HeadDepartmentNavbar;
        case 'student':
          return StudentNavbar;
        default:
          return null;
      }
    }
  }
};
</script>

<style scoped>
/* Scoped styles */
</style>
