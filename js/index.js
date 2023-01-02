
/*   for (let i = 0; i < 24; i++) {
    doors.push({ row: Math.floor(i / 5), col: i % 5, number: '' + (i + 1), imageUrl: `img/doors/${i + 1}.jpg` });
  } */
const myApp = new Vue({
  data: function() {
    return {
      doors: doors,
      displayImage: false,
      displayUrl: null,
      currentDoor: doors[0],
      urlParams: new URLSearchParams(window.location.search)
    };
  },
  computed: {
    doorTitle: function() {
      return this.currentDoor.number + ": " + this.currentDoor.title;
    },
  },
  methods: {
    openDoor: function(door) {
      if (this.canOpenDoor(door)) {
        console.log(
          "open " + door.number + ", pressed and visible: "+ this.displayImage
        );
        this.currentDoor = door;
        this.displayImage = true;
      } else {
        console.log("Day is after door number! Not opening door.");
      }
    },

    canOpenDoor: function(door) {
      if (location.hostname === "localhost" || this.urlParams.get('debug') === 'true') {
        console.log('debug mode');
        return true;
      }
      var now = new Date();
      var december = 11;
      var january = 0;
      return  (now.getMonth() == december && door.number <= now.getDate()) || now.getMonth() == january;
    },
  },
  components: {
    "p-dialog": dialog,
    "p-button": button,
    "p-card": card,
  },
});
myApp.$mount("#wrapper");
Vue.prototype.$primevue = { ripple: true };
