<template>
    <div class="flex flex-row my-4 mx-2 border-t-2 border-b-2 h-8 rounded-xl">
        <button @click="$store.commit('decrement')">
            <i
                :class="[
                    warnamin ? 'border-yellow' : 'border-footer',
                    'fas',
                    'fa-minus',
                    'border-2',
                    'bg-white',
                    'px-1',
                    'py-1',
                    'h-8',
                    'w-8',
                    'rounded-lg',
                    'text-center',
                ]"
            ></i>
        </button>
        <p class="border-secondary h-7 w-12 text-center">
            {{ $store.state.count }}
        </p>
        <button @click="$store.commit('increment')">
            <i
                :class="[
                    warnaplus ? 'border-footer' : 'border-yellow',
                    'fas',
                    'fa-plus',
                    'border-2',
                    'bg-white',
                    'px-1',
                    'py-1',
                    'h-8',
                    'w-8',
                    'rounded-lg',
                    'text-center',
                ]"
            ></i>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        warnamin: {
            type: Boolean,
            default: () => false,
        },
        warnaplus: {
            type: Boolean,
            default: () => false,
        },
    },
}
</script>

<style></style>
