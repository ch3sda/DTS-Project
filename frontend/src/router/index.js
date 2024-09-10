import { createRouter, createWebHistory } from 'vue-router';
import HeadDepartmentNotification from "@/components/headdepartment/HeadDepartmentNotification.vue";
// import HeadDepartmentSidebar from "@/components/headdepartment/HeadDepartmentSidebar.vue";
import HeadDepartmentDashboard from "@/components/headdepartment/HeadDepartmentDashboard.vue";
import HeadDepartmentIncoming from '@/components/headdepartment/HeadDepartmentIncoming.vue';
import HeadDepartmentRegister from '@/components/headdepartment/HeadDepartmentRegister.vue';

// Mazer
import MazerDashboard from '@/components/mazer/MazerDashboard.vue';
import MazerDocument from '@/components/mazer/MazerDocument.vue';
import MazerIncoming from '@/components/mazer/MazerIncoming.vue';   
import MazerNotification from '@/components/mazer/MazerNotification.vue';
// import MazerSidebar from '@/components/mazer/MazerSidebar.vue';
import MazerTrack from '@/components/mazer/MazerTrack.vue';

// Student
import StudentDashboard from '@/components/student/StudentDashboard.vue';
import StudentDocument from '@/components/student/StudentDocument.vue';
import StudentNotification from '@/components/student/StudentNotification.vue';
import StudentTrack from '@/components/student/StudentTrack.vue';

// Teacher
import TeacherDashboard from '@/components/teacher/TeacherDashboard.vue';
import TeacherIncoming from '@/components/teacher/TeacherIncoming.vue';
import TeacherNotification from '@/components/teacher/TeacherNotification.vue';

// Common
import WelcomePage from '@/components/common/WelcomePage.vue';

const routes = [
    // Head Department
    {
        path: '/headdepartment/notification',
        name: 'HeadDepartmentNotification',
        component: HeadDepartmentNotification
    },
    {
        path: '/headdepartment/dashboard',
        name: 'HeadDepartmentDashboard',
        component: HeadDepartmentDashboard
    },
    {
        path: '/headdepartment/incoming',
        name: 'HeadDepartmentIncoming',
        component: HeadDepartmentIncoming
    },
    {
        path: '/headdepartment/register',
        name: 'HeadDepartmentRegister',
        component: HeadDepartmentRegister
    },

    // Mazer
    {
        path: '/mazer/dashboard',
        name: 'MazerDashboard',
        component: MazerDashboard
    },
    {
        path: '/mazer/document',
        name: 'MazerDocument',
        component: MazerDocument
    },
    {
        path: '/mazer/incoming',
        name: 'MazerIncoming',
        component: MazerIncoming
    },
    {
        path: '/mazer/notification',
        name: 'MazerNotification',
        component: MazerNotification
    },
    {
        path: '/mazer/track',
        name: 'MazerTrack',
        component: MazerTrack
    },

    // Student
    {
        path: '/student/dashboard',
        name: 'StudentDashboard',
        component: StudentDashboard
    },
    {
        path: '/student/document',
        name: 'StudentDocument',
        component: StudentDocument
    },
    {
        path: '/student/notification',
        name: 'StudentNotification',
        component: StudentNotification
    },
    {
        path: '/student/track',
        name: 'StudentTrack',
        component: StudentTrack
    },

    // Teacher
    {
        path: '/teacher/dashboard',
        name: 'TeacherDashboard',
        component: TeacherDashboard
    },
    {
        path: '/teacher/incoming',
        name: 'TeacherIncoming',
        component: TeacherIncoming
    },
    {
        path: '/teacher/notification',
        name: 'TeacherNotification',
        component: TeacherNotification
    },
    // Common
    {
        path: '/welcome',
        name:'WelcomePage',
        component: WelcomePage
    },


     // Redirect from /teacher/ to /teacher/dashboard
    {
        path: '/teacher',
        redirect: '/teacher/dashboard'
    },
    {
        path: '/student',
        redirect: '/student/dashboard'
    },
    {
        path: '/headdepartment',
        redirect: '/headdepartment/dashboard'
    },
    {
        path: '/mazer',
        redirect: '/mazer/dashboard'
    },
    {
        path: '',
        redirect: '/welcome'
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; // Export the router directly
