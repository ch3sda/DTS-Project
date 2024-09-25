import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Correct path to store

// Importing components
import HeadDepartmentNotification from "@/components/headdepartment/HeadDepartmentNotification.vue";
import HeadDepartmentDashboard from "@/components/headdepartment/HeadDepartmentDashboard.vue";
import HeadDepartmentIncoming from '@/components/headdepartment/HeadDepartmentIncoming.vue';
import HeadDepartmentSignUp from '@/components/headdepartment/HeadDepartmentSignUp.vue';

import MazerDashboard from '@/components/mazer/MazerDashboard.vue';
import MazerDocument from '@/components/mazer/MazerDocument.vue';
import MazerIncoming from '@/components/mazer/MazerIncoming.vue';   
import MazerNotification from '@/components/mazer/MazerNotification.vue';
import MazerTrack from '@/components/mazer/MazerTrack.vue';

import StudentDashboard from '@/components/student/StudentDashboard.vue';
import StudentDocument from '@/components/student/StudentDocument.vue';
import StudentNotification from '@/components/student/StudentNotification.vue';
import StudentTrack from '@/components/student/StudentTrack.vue';
import StudentSignUp from '@/components/student/StudentSignUp.vue';

import TeacherDashboard from '@/components/teacher/TeacherDashboard.vue';
import TeacherIncoming from '@/components/teacher/TeacherIncoming.vue';
import TeacherNotification from '@/components/teacher/TeacherNotification.vue';
import TeacherSignUp from '@/components/teacher/TeacherSignUp.vue';

import WelcomePage from '@/components/common/WelcomePage.vue';
import SigninPage from '@/components/common/SigninPage.vue';

// Define routes
const routes = [
    // Head Department
    { path: '/headdepartment/notification', name: 'HeadDepartmentNotification', component: HeadDepartmentNotification, meta: { requiresAuth: false , role: 'headdepartment' }},
    { path: '/headdepartment/dashboard', name: 'HeadDepartmentDashboard', component: HeadDepartmentDashboard, meta: { requiresAuth: false , role: 'headdepartment' }},
    { path: '/headdepartment/incoming', name: 'HeadDepartmentIncoming', component: HeadDepartmentIncoming, meta: { requiresAuth: false , role: 'headdepartment' }},
    { path: '/headdepartment/signup', name: 'HeadDepartmentSignUp', component: HeadDepartmentSignUp, meta: { requiresAuth: false , role: 'headdepartment' }},

    // Mazer
    { path: '/mazer/dashboard', name: 'MazerDashboard', component: MazerDashboard, meta: { requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/document', name: 'MazerDocument', component: MazerDocument, meta: { requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/incoming', name: 'MazerIncoming', component: MazerIncoming, meta: { requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/notification', name: 'MazerNotification', component: MazerNotification, meta: { requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/track', name: 'MazerTrack', component: MazerTrack, meta: { requiresAuth: false , role: 'mazer' }},

    // Student
    { path: '/student/dashboard', name: 'StudentDashboard', component: StudentDashboard, meta: { requiresAuth: false , role: 'student' }},
    { path: '/student/document', name: 'StudentDocument', component: StudentDocument, meta: { requiresAuth: false , role: 'student' }},
    { path: '/student/notification', name: 'StudentNotification', component: StudentNotification, meta: { requiresAuth: false , role: 'student' }},
    { path: '/student/track', name: 'StudentTrack', component: StudentTrack, meta: { requiresAuth: false , role: 'student' }},
    { path: '/student/signup', name: 'StudentSignUp', component: StudentSignUp, meta: { requiresAuth: false, role: 'student' }},

    // Teacher
    { path: '/teacher/signup', name: 'TeacherSignUp', component: TeacherSignUp, meta: { requiresAuth: false, role: 'teacher' }},
    { path: '/teacher/dashboard', name: 'TeacherDashboard', component: TeacherDashboard, meta: { requiresAuth: false , role: 'teacher' }},
    { path: '/teacher/incoming', name: 'TeacherIncoming', component: TeacherIncoming, meta: { requiresAuth: false , role: 'teacher' }},
    { path: '/teacher/notification', name: 'TeacherNotification', component: TeacherNotification, meta: { requiresAuth: false , role: 'teacher' }},
    
    // Common
    { path: '/welcome', name: 'WelcomePage', component: WelcomePage },
    { path: '/signin', name: 'SigninPage', component: SigninPage },

    // Redirects
    { path: '/teacher/', redirect: '/teacher/dashboard' },
    { path: '/student/', redirect: '/student/dashboard' },
    { path: '/headdepartment/', redirect: '/headdepartment/dashboard' },
    { path: '/mazer/', redirect: '/mazer/dashboard' },
    { path: '', redirect: '/welcome' },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated; // Check authentication status
    const userRole = store.state.userRole; // Get user role from Vuex

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({ name: 'SigninPage' }); // Redirect to sign-in if not authenticated
        } else if (to.meta.role && to.meta.role !== userRole) {
            next({ name: 'WelcomePage' }); // Redirect if the user's role does not match
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
