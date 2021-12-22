<template>
    <div class="relative w-[154px] mt-2">
        <!-- Dropdown toggle button -->
        <button
            @click="show === !show"
            class="flex items-center p-2 bg-white rounded-md w-44"
        >
            <span class="mr-4">Kategori</span>
            <svg
                class="w-5 h-5 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <!-- Dropdown List -->
        <div
            v-show="show === true"
            class="
                absolute
                right-0
                py-2
                mt-2
                bg-white
                active:bg-gray-100
                divide-y divide-gray-600
                rounded-md
                shadow-xl
                w-44
            "
        >
            <a
                href="#"
                class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-300
                    active:text-gray-700
                    hover:bg-gray-400 hover:text-white
                "
            >
                Dropdown List 1
            </a>
            <a
                href="#"
                class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-300
                    active:text-gray-700
                    hover:bg-gray-400 hover:text-white
                "
            >
                Dropdown List 2
            </a>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
