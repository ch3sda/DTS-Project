<template>
        <div class="mt-14">
            <div class="grid grid-cols-1 p-4 gap-4">
                <h3 for="countries" class="block text-4xl md:text-5xl font-bold text-primary-blue dark:text-white">Dashboard</h3>
            </div>   
            <!-- Hello -->
            <div class="p-4 flex items-center h-16 mb-4 rounded">
               <p class="md:text-2xl text-xl text-primary-blue dark:text-white">
                    Hello! HYSAVUTH CHANCHESDA...
               </p>
            </div>
            <!-- Label -->
            <div class="grid grid-cols-1 p-4 gap-4">
                <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Your Requests</h3>
            </div>            
            <!-- Widget -->
            <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 p-4 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8 sm:gap-8 md:gap-4 mb-4">
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <RequestedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <ApprovedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <DeclinedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <PendingTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <RequestAvailable />
               </div>
            </div>
            <!-- Label -->
            <div class="grid grid-cols-1 p-4 gap-4">
                <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Your Graph</h3>
            </div>   
            <!-- Graph -->
            <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 p-4 grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 md:gap-4 mb-4">
                <div class="flex md:row-span-2 gap-4 items-center justify-center rounded h-88 ">
                    <SelfRowGraphType1 />
                </div>
                <div class="flex gap-4 items-center justify-center rounded h-88 ">
                    <SelfPieGraphType1 />
                </div>
                <div class="flex gap-4 items-center justify-center rounded h-88 ">
                    <SelfColGraphType1 />
                </div>
            </div>

            <!-- Label -->
            <div class="grid grid-cols-1 p-4 gap-4">
                <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Incoming Requests</h3>
            </div>            
            <!-- Widget -->
            <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 p-4 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8 sm:gap-8 md:gap-4 mb-4">
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <IncomingRequestedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <IncomingApprovedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <IncomingDeclinedTotals />
               </div>
               <div class="flex items-center justify-center rounded h-48 md:h-64">
                    <IncomingPendingTotals />
               </div>
            </div>
            <!-- Label -->
            <div class="grid grid-cols-1 p-4 gap-4">
                <h3 for="countries" class="block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">Incoming Requests's Graph</h3>
            </div>   
            <!-- Graph -->
            <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 p-4 grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 md:gap-4 mb-4">
                <div class="flex md:row-span-2 gap-4 items-center justify-center rounded h-88 ">
                    <IncomingRowGraphType1 />
                </div>
                <div class="flex gap-4 items-center justify-center rounded h-88 ">
                    <IncomingPieGraphType1 />
                </div>
                <div class="flex gap-4 items-center justify-center rounded h-88 ">
                    <IncomingColGraphType1 />
                </div>
            </div>

         </div>
</template>

<script>
  //import <<file name>> from "path"
    //Self Normal
    import RequestedTotals from "./widget/self/normal/SelfRequestedTotals.vue";
    import ApprovedTotals from "./widget/self/normal/SelfApprovedTotals.vue";
    import DeclinedTotals from "./widget/self/normal/SelfDeclinedTotals.vue";
    import PendingTotals from "./widget/self/normal/SelfPendingTotals.vue";
    import RequestAvailable from "./widget/self/normal/SelfRequestAvailable.vue";

    //Self Graph
    import SelfPieGraphType1 from "./widget/self/graph/SelfPieGraphType1.vue"
    import SelfRowGraphType1 from "./widget/self/graph/SelfRowGraphType1.vue";
    import SelfColGraphType1 from "./widget/self/graph/SelfColGraphType1.vue";
    
    //Incoming Normal
    import IncomingRequestedTotals from "./widget/incoming/normal/IncomingRequestedTotals.vue";
    import IncomingDeclinedTotals from "./widget/incoming/normal/IncomingDeclinedTotals.vue";
    import IncomingApprovedTotals from "./widget/incoming/normal/IncomingApprovedTotals.vue";
    import IncomingPendingTotals from "./widget/incoming/normal/IncomingPendingTotals.vue";

    //Incoming Graph
    import IncomingPieGraphType1 from "./widget/incoming/graph/IncomingPieGraphType1.vue";
    import IncomingColGraphType1 from "./widget/incoming/graph/IncomingColGraphType1.vue";
    import IncomingRowGraphType1 from "./widget/incoming/graph/IncomingRowGraphType1.vue";


    export default {
    components: {
        //Self Normal
        RequestedTotals,
        ApprovedTotals,
        DeclinedTotals,
        PendingTotals,
        RequestAvailable,

        //Self Graph
        SelfPieGraphType1,
        SelfRowGraphType1,
        SelfColGraphType1,

        //Incoming Normal
        IncomingApprovedTotals,
        IncomingRequestedTotals,
        IncomingDeclinedTotals,
        IncomingPendingTotals,

        //Incoming Graph
        IncomingPieGraphType1,
        IncomingRowGraphType1,
        IncomingColGraphType1
    },

  };
</script>