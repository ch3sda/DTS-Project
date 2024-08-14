<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h1 class="text-xl font-bold text-center">{{ message }}</h1>
    <button @click="fetchMessage" class="bg-blue-500 text-white rounded p-2">
      Hi
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Click the button to fetch message!",
    };
  },
  methods: {
    fetchMessage() {
      axios
        .get("http://127.0.0.1:8000/api/hello/")
        .then((response) => {
          this.message = response.data.message;
        })
        .catch((error) => {
          console.error("Error fetching message:", error);
        });
    },
  },
};
</script>
