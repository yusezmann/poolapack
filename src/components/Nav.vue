<template>
    <div class="border-b-2 shadow-lg">
        <div class="mt-[18px] flex flex-row justify-end border-b-2 pb-4">
            <router-link to="#">
                <div class="flex flex-row">
                    <img src="../assets/icons/clipboard.svg" alt="" /> Sample
                </div>
            </router-link>
            <router-link to="#">
                <div class="flex flex-row ml-4">
                    <img src="../assets/icons/heart.svg" alt="" /> Wishlist
                </div>
            </router-link>
            <router-link to="#">
                <div class="flex flex-row ml-4">
                    <img src="../assets/icons/3d-square.svg" alt="" />
                </div>
            </router-link>
            <router-link to="#">
                <div class="flex flex-row ml-4">
                    <img src="../assets/icons/sms-notification.svg" alt="" />
                </div>
            </router-link>
            <router-link to="#">
                <div class="flex flex-row ml-4 mr-[92px]">
                    <img src="../assets/icons/user-square.svg" alt="" /> User
                </div>
            </router-link>
        </div>
        <div class="flex flex-row my-8 mx-[98px]">
            <img
                class="w-[290px] h-[59px]"
                src="../assets/img/Logo.png"
                alt=""
            />
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
            <div class="relative">
                <input
                    class="
                        w-[650px]
                        h-[50px]
                        focus:placeholder-accent
                        focus:bg-white
                        focus:border-secondary
                        focus:outline-none
                        border-2
                    "
                    placeholder=" Search..."
                    type="text"
                />
                <button
                    class="
                        border-2 border-yellow
                        bg-yellow
                        w-[80px]
                        h-[44px]
                        absolute
                        right-[0.2rem]
                        top-[0.2rem]
                    "
                >
                    <i class="fas fa-search text-white"></i>
                </button>
            </div>
            <router-link class="ml-4" to="/keranjang">
                <img src="../assets/icons/Frame 771.svg" alt="" />
            </router-link>
        </div>
        <div class="flex flex-row mx-[98px] mb-4">
            <div class="flex flex-row">
                <svg
                    width="2"
                    height="20"
                    viewBox="0 0 2 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.25"
                        y1="0.588623"
                        x2="1.25"
                        y2="19.5886"
                        stroke="#383535"
                        stroke-width="1.5"
                    />
                </svg>
                <router-link class="mx-10" to="#">Tentang Kami</router-link>
            </div>
            <div class="flex flex-row">
                <svg
                    width="2"
                    height="20"
                    viewBox="0 0 2 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.25"
                        y1="0.588623"
                        x2="1.25"
                        y2="19.5886"
                        stroke="#383535"
                        stroke-width="1.5"
                    />
                </svg>
                <router-link class="mx-10" to="#">Cara Belanja</router-link>
            </div>
            <div class="flex flex-row">
                <svg
                    width="2"
                    height="20"
                    viewBox="0 0 2 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.25"
                        y1="0.588623"
                        x2="1.25"
                        y2="19.5886"
                        stroke="#383535"
                        stroke-width="1.5"
                    />
                </svg>
                <router-link class="mx-10" to="#">Referal</router-link>
            </div>
            <div class="flex flex-row">
                <svg
                    width="2"
                    height="20"
                    viewBox="0 0 2 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.25"
                        y1="0.588623"
                        x2="1.25"
                        y2="19.5886"
                        stroke="#383535"
                        stroke-width="1.5"
                    />
                </svg>
                <router-link class="mx-10" to="#">Blog</router-link>
            </div>
            <div class="flex flex-row">
                <svg
                    width="2"
                    height="20"
                    viewBox="0 0 2 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.25"
                        y1="0.588623"
                        x2="1.25"
                        y2="19.5886"
                        stroke="#383535"
                        stroke-width="1.5"
                    />
                </svg>
                <router-link class="mx-10" to="#">RFQ</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
}
</script>

<style></style>
