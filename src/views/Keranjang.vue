<template>
    <div class="grid grid-cols-12 gap-[20px] mx-[98px] mt-7 mb-8">
        <div class="col-span-9">
            <h1
                class="
                    border-2
                    px-4
                    py-2
                    rounded-t-lg
                    font-bold
                    text-base text-footer
                "
            >
                Keranjang
            </h1>
            <h1
                class="
                    border-2
                    px-4
                    py-2
                    rounded-b-lg
                    font-normal
                    text-xs text-footer
                "
            >
                <input type="checkbox" />
                Pilih Semua Pesanan
            </h1>
        </div>
        <div class="col-span-3 border-2 rounded-lg shadow-xl">
            <div class="flex flex-col mx-2 my-4">
                <h1 class="font-bold text-footer text-base mb-7">Ringkasan</h1>
                <span
                    class="
                        flex flex-row
                        justify-between
                        font-normal
                        text-footer text-base
                        mb-2
                    "
                >
                    Total Harga:
                    <h2>Rp.{{ harga }}</h2>
                </span>
                <span
                    class="
                        flex flex-row
                        justify-between
                        font-normal
                        text-footer text-base
                        pb-2
                        mb-7
                        border-b-2
                    "
                >
                    Diskon:
                    <h2>Rp.{{ diskon }}</h2>
                </span>
                <span
                    class="
                        flex flex-row
                        justify-between
                        font-normal
                        text-secondary text-base
                        mb-7
                    "
                >
                    Total Harga:
                    <h2 class="font-bold text-footer">Rp.{{ total }}</h2>
                </span>
                <button
                    class="bg-yellow rounded-lg w-full px-3 py-1 text-white"
                >
                    Buat Pesanan (0)
                </button>
            </div>
        </div>
        <div class="col-span-9">
            <div
                class="flex flex-row px-4 py-2 space-x-2 border-2 rounded-t-lg"
            >
                <input class="self-center" type="checkbox" />
                <img src="../assets/img/RFQQ.jpg" class="w-9 h-9" alt="" />
                <div class="flex flex-col">
                    <h1 class="font-bold text-base text-footer">
                        Bahtera Bara
                    </h1>
                    <span class="font-normal text-xs text-secondary"
                        >Kab.Bandung</span
                    >
                </div>
                <img src="../assets/img/Group.png" class="w-14 h-4" alt="" />
            </div>
            <div class="border-2 rounded-b-lg px-4 py-2">
                <div class="flex flex-row">
                    <div class="flex flex-row h-20">
                        <input class="self-center mr-2" type="checkbox" />
                        <img
                            class="w-20 h-20 mr-2"
                            src="../assets/img/Frame 485.jpg"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col">
                        <h1 class="font-bold text-lg text-footer mb-2">
                            Poly PE MVS L158 100 / 70
                        </h1>
                        <span class="font-normal text-base text-footer mb-1"
                            >MOQ: 100 Meter</span
                        >
                        <span class="font-normal text-sm text-footer mb-9"
                            >Kelipatan Order: 100 Meter</span
                        >
                    </div>
                </div>
                <div class="flex flex-row space-x-6 h-8 w-full">
                    <div class="border ml-17 rounded-lg">
                        <span class="flex flex-row px-4 py-1"
                            >Varian:
                            <img
                                class="w-6 h-6"
                                src="../assets/img/Frame 485.jpg"
                                alt=""
                            />
                            Lorem, ipsum.
                        </span>
                    </div>
                    <h1 class="font-bold text-base text-footer">
                        Rp.10000 /Meter
                    </h1>
                    <Counter class="-mt-1" :warnaplus="true" />
                    <h1 class="font-bold text-base text-footer">Rp.10000</h1>
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
                            stroke="#EEF2F5"
                            stroke-width="1.5"
                        />
                    </svg>
                    <button>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
                                stroke="#FD4A5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                stroke="#FD4A5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.78999C5.99999 22 5.90999 20.78 5.79999 19.21L5.14999 9.14"
                                stroke="#FD4A5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10.33 16.5H13.66"
                                stroke="#FD4A5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.5 12.5H14.5"
                                stroke="#FD4A5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import Dropdown from '../components/dropdown.vue'
export default {
    props: {
        harga: {
            type: Number,
            default: () => 0,
        },
        diskon: {
            type: Number,
            default: () => 0,
        },
        total: {
            type: Number,
            default: () => 0,
        },
    },
    components: { Counter, Dropdown },
    data() {
        return { count: 0 }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    },
}
</script>

<style></style>
