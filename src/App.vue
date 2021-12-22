<template>
    <section>
        <Header />
    </section>
    <div class="view">
        <transition name="fade" mode="out-in" class="route">
            <keep-alive>
                <router-view />
            </keep-alive>
        </transition>
    </div>
    <section>
        <Footer />
    </section>
</template>

<script>
import Header from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        Header,
        Footer,
    },
}
</script>
