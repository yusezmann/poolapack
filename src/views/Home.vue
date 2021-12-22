<template>
    <section>
        <Breadcrumb />
    </section>
    <section>
        <ProductDetail />
    </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import ProductDetail from '../components/ProductDetail.vue'
export default {
    components: { Breadcrumb, ProductDetail },
}
</script>
