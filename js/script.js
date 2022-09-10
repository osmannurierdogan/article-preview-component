const article = Vue.createApp({
  data() {
    return {
      isShareScreenOpened: false,
      windowWidth: {
        phone: "24em",
        desktop: "90em",
      },
      currentWindowWidth: null,
    };
  },
  // created() {
  //   this.currentWindowWidth = window.innerWidth;
  //   if (this.currentWindowWidth >= windowWidth.desktop) {
  //     this.currentWindowWidth = temp;
  //   } else if (
  //     this.currentWindowWidth >= windowWidth.phone &&
  //     this.currentWindowWidth < windowWidth.desktop
  //   ) {
  //     this.currentWindowWidth = temp;
  //   }
  //   // if(this.currentWindowWidth >= windowWidth.desktop){}
  // },
  computed: {
    displayShareBox() {
      // return this.isShareScreenOpened ? "block" : "none";
      return this.isShareScreenOpened ? "visible" : "invisible";
    },
    mobileShare() {
      return this.isShareScreenOpened
        ? "mobile-share--open"
        : "mobile-share--close";
    },
  },
}).mount("#article");
