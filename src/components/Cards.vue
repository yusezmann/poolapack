<template>
    <div class="flex flex-row rounded-lg space-x-3">
        <div
            v-for="items in $store.state.products"
            :key="items.id"
            class="border-2 shadow-lg rounded-lg w-full h-full"
        >
            <img
                class="h-36 w-full shadow-lg rounded-lg mb-4"
                :src="`${items.imgUrl}`"
                alt=""
            />
            <div class="mx-4">
                <h1 class="font-normal text-sm mb-2">
                    {{ $store.state.name }}
                </h1>
                <h2 class="font-bold text-base mb-2">
                    Rp {{ $store.state.price }}
                </h2>
                <span class="font-normal text-xs mb-2"
                    >MOQ: {{ qty }} Meter</span
                >
                <span class="flex flex-row mb-2 py-2 border-b-2">
                    <Rating
                        class="h-3"
                        :grade="5"
                        :maxStars="1"
                        :hasCounter="true"
                    />
                    <span class="mx-2">
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
                                stroke="#D1D1D1"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                    <h1
                        class="
                            font-normal
                            text-xs
                            align-text-bottom
                            text-secondary
                        "
                    >
                        Terjual {{ jual }}
                    </h1>
                </span>
                <h3 class="font-normal text-secondary mb-4">Kab.Bandung</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from './Rating.vue'
export default {
    props: {
        images: {
            type: String,
            default: () => 'Polyester',
        },
        namaProduk: {
            type: String,
            default: () => 'Polyester',
        },
        harga: {
            type: Number,
            default: () => 10000,
        },
        qty: {
            type: Number,
            default: () => 100,
        },
        jual: {
            type: Number,
            default: () => 10000,
        },
    },
    components: {
        Rating,
    },
    created() {
        this.$store.dispatch('getProduct')
    },
}
</script>

<style></style>
