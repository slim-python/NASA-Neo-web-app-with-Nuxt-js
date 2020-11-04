<template>
  <div>
    <div class="h-screen bg-indigo-700">
      <!-- navbar -->
      <NavBar />

      <!-- body -->
      <div class="h-screen w-screen bg-white py-64">
        <p class="text-center text-4xl px-8">{{ info }}</p>
        <div
          class="flex flex-col max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden md:flex-row md:h-48"
        >
          <div
            class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-indigo-600"
          >
            <div class="py-6 px-6 md:px-8 md:py-0">
              <h2 class="text-gray-700 text-2xl font-bold md:text-gray-100">
                Find
                <span class="text-blue-600 md:text-blue-100">Astroids</span> By
                ID
              </h2>

              <p class="mt-2 text-gray-600 text-lg text-sm md:text-gray-400">
                Enter the 7 digit astroid id to know more about a particular
                astroid.
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-indigo-600"
          >
            <form>
              <div
                class="flex flex-col rounded-lg border overflow-hidden lg:flex-row"
              >
                <input
                  v-model="astroid_id"
                  class="py-3 px-6 bg-white text-gray-700 outline-none placeholder-gray-500 focus:placeholder-transparent"
                  type="text"
                  placeholder="Enter 7 digit Astroid id"
                  aria-label="Enter Astroid id"
                />

                <button
                  type="button"
                  v-on:click="findbyidfunc"
                  v-on:keyup.enter="findbyidfunc"
                  class="py-3 px-4 bg-indigo-600 text-gray-100 text-sm font-semibold uppercase hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                >
                  search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "findbyid",
  data() {
    return {
      astroid_id: null,
      info: null
    };
  },
  methods: {
    findbyidfunc() {
      console.log(this.astroid_id);
      axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/neo/${this.astroid_id}?api_key=zin2gt4PC9bVJaFUMzwrs20PSawP0TfgCjId4Ebq`
        )
        .then(response => {
          this.info = response.data.name;
        });
    }
  }
};
</script>