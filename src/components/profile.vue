<template>
    <div class="flex flex-row my-2">
        <img src="../assets/img/RFQQ.jpg" class="w-9 h-9" alt="" />
        <div class="flex flex-col">
            <h1 class="font-bold text-base text-footer">Bahtera Bara</h1>
            <span class="font-normal text-xs text-secondary">Kab.Bandung</span>
            <span class="flex flex-row">
                <Rating
                    :class="[rates ? 'hidden' : 'block', 'h-3']"
                    :grade="5"
                    :maxStars="5"
                    :hasCounter="true"
                />
                <h1
                    :class="[
                        ulasan ? 'hidden' : 'block',
                        'font-normal',
                        'text-xs',
                        'align-text-bottom',
                        'text-secondary',
                    ]"
                >
                    (100 Ulasan)
                </h1>
            </span>
        </div>
        <img src="../assets/img/Group.png" class="w-14 h-4" alt="" />
    </div>
</template>

<script>
import Rating from './Rating.vue'
export default {
    props: {
        rates: {
            type: Boolean,
            default: () => false,
        },
        ulasan: {
            type: Boolean,
            default: () => false,
        },
    },
    components: {
        Rating,
    },
}
</script>

<style></style>
