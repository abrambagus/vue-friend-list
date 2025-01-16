const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "2313131323",
          email: "namuel@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "2313131323",
          email: "julie@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
