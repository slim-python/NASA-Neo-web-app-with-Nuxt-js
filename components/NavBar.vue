<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-6 py-3">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <nuxt-link to="/">
              <a
                class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                href="#"
                >NASA neo</a
              ></nuxt-link
            >
          </div>
        </div>

        <div class="flex items-center py-2 -mx-1 md:mx-0">
          <nuxt-link to="/findbyid">
            <a
              class="px-3 py-2 mx-1 rounded text-center text-sm font-medium leading-5 hover:bg-gray-200 md:mx-2 md:w-auto"
              href="#"
              >Search astroids by Id
            </a>
          </nuxt-link>

          <nuxt-link to="/findbydate">
            <a
              class="px-3 py-2 mx-2 rounded text-center text-sm font-medium leading-5 hover:bg-gray-200 md:mx-0 md:w-auto"
              href="#"
            >
              Search astroids by date
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

