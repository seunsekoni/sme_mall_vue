<template>
    <div class="">
        <Header />
            <slot />
        <Footer />
    <auth-modal></auth-modal>
    </div>
</template>

<script>
import Header from '../HomePage/Header'
import Footer from '../HomePage/Footer'
import AuthModal from '../HomePage/AuthModal'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    AuthModal
  }
}
</script>
