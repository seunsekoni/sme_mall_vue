<template>
  <div>
    <Header/>
    <Listing />
    <Footer />
    <auth-modal></auth-modal>
  </div>
</template>

<script>
import Header from './Header'
import Listing from './Listing'
import Footer from './Footer'
import AuthModal from './AuthModal'
export default {
  name: 'LandingPage',
  components: {
    Header,
    Listing,
    Footer,
    AuthModal
  }
}
</script>
