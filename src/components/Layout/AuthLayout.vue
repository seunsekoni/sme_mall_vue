<template>
    <div class="">
        <Header />
        <section class="all-listing-wrapper section-bg">
          <div class="container">
              <div class="row">
                <slot ></slot>
              </div>
          </div>
        </section><!-- ends: .all-listing-wrapper -->
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
