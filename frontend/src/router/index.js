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
import Forbidden from '@/components/common/ForbiddenPage.vue';

// Define routes
const routes = [
    // Head Department
    { path: '/headdepartment/notification', name: 'HeadDepartmentNotification', component: HeadDepartmentNotification, meta: { title:"Notification" ,  requiresAuth: true , role: 'headdepartment' }},
    { path: '/headdepartment/dashboard', name: 'HeadDepartmentDashboard', component: HeadDepartmentDashboard, meta: { title:"Dashboard" , requiresAuth: true , role: 'headdepartment' }},
    { path: '/headdepartment/incoming', name: 'HeadDepartmentIncoming', component: HeadDepartmentIncoming, meta: { title:"Incoming" ,  requiresAuth: true , role: 'headdepartment' }},
    { path: '/headdepartment/signup', name: 'HeadDepartmentSignUp', component: HeadDepartmentSignUp, meta: { title:"SignUp" , requiresAuth: false , role: 'headdepartment' }},

    // Mazer
    { path: '/mazer/dashboard', name: 'MazerDashboard', component: MazerDashboard, meta: { title:"Dashboard" ,  requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/document', name: 'MazerDocument', component: MazerDocument, meta: { title:"Document" ,  requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/incoming', name: 'MazerIncoming', component: MazerIncoming, meta: { title:"Incoming" ,  requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/notification', name: 'MazerNotification', component: MazerNotification, meta: { title:"Notification" ,  requiresAuth: false , role: 'mazer' }},
    { path: '/mazer/track', name: 'MazerTrack', component: MazerTrack, meta: { title:"Track" ,  requiresAuth: false , role: 'mazer' }},

    // Student
    { path: '/student/dashboard', name: 'StudentDashboard', component: StudentDashboard, meta: { title:"Dashboard" ,  requiresAuth: true , role: 'student' }},
    { path: '/student/document', name: 'StudentDocument', component: StudentDocument, meta: { title:"Document" ,  requiresAuth: true , role: 'student' }},
    { path: '/student/notification', name: 'StudentNotification', component: StudentNotification, meta: { title:"Incoming" ,  requiresAuth: true , role: 'student' }},
    { path: '/student/track', name: 'StudentTrack', component: StudentTrack, meta: { title:"Track" ,  requiresAuth: true , role: 'student' }},
    { path: '/student/signup', name: 'StudentSignUp', component: StudentSignUp, meta: { title:"SignUp" ,  requiresAuth: false, role: 'student' }},

    // Teacher
    { path: '/teacher/signup', name: 'TeacherSignUp', component: TeacherSignUp, meta: { title:"SignUp" , requiresAuth: false, role: 'teacher' }},
    { path: '/teacher/dashboard', name: 'TeacherDashboard', component: TeacherDashboard, meta: { title:"Dashboard" , requiresAuth: true , role: 'teacher' }},
    { path: '/teacher/incoming', name: 'TeacherIncoming', component: TeacherIncoming, meta: { title:"Incoming" , requiresAuth: true , role: 'teacher' }},
    { path: '/teacher/notification', name: 'TeacherNotification', component: TeacherNotification, meta: { title:"Notification" , requiresAuth: true , role: 'teacher' }},
    
    // Common
    { path: '', name: 'WelcomePage', component: WelcomePage, meta: { title:"Welcome" , requiresAuth: false } },
    { path: '/signin', name: 'SigninPage', component: SigninPage, meta: { title:"SignIn" , requiresAuth: false }},
    { name: 'Forbidden', component: Forbidden , meta: { title:"403 Error" , requiresAuth: false }},

    // Redirects
    { path: '/teacher/', redirect: '/teacher/dashboard'},
    { path: '/student/', redirect: '/student/dashboard' },
    { path: '/headdepartment/', redirect: '/headdepartment/dashboard' },
    { path: '/mazer/', redirect: '/mazer/dashboard' },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

import { nextTick } from 'vue';
// Navigation guard
router.beforeEach(async (to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated; // Check authentication status
    const userRole = store.state.userRole; // Get user role from Vuex
    await nextTick(); // Ensure state is fully updated

    // If the user is authenticated and trying to access sign-in, sign-up, or welcome pages, redirect to their respective dashboard
    if (isAuthenticated) {
        if (to.name === 'SigninPage' || to.name === 'StudentSignUp' || to.name === 'HeadDepartmentSignUp' || to.name === 'TeacherSignUp' || to.name === 'WelcomePage') {
            if (userRole === 'student') {
                next({ name: 'StudentDashboard' });
            } else if (userRole === 'headdepartment') {
                next({ name: 'HeadDepartmentDashboard' });
            } else if (userRole === 'teacher') {
                next({ name: 'TeacherDashboard' });
            } else if (userRole === 'mazer') {
                next({ name: 'MazerDashboard' });
            } else {
                next({ name: 'SigninPage' }); // Fallback to sign-in if userRole is undefined
            }
        }
    }
        // Dynamic Title
        document.title = `AskForLeave - ${to.meta.title}`;

        if (to.matched.some(record => record.meta.requiresAuth)) {
            // Redirect to sign-in if not authenticated and the route requires authentication
            if (!isAuthenticated) {
                next({ name: 'SigninPage' });
            } else if (to.meta.role && to.meta.role !== userRole) {
                next({ name: 'Forbidden' }); // Redirect if the user's role does not match
            } else {
                next();
            }
        } else {
            next(); // Proceed if no authentication required
        }
    
});

export default router;
