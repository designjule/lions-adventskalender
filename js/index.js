
/*   for (let i = 0; i < 24; i++) {
    doors.push({ row: Math.floor(i / 5), col: i % 5, number: '' + (i + 1), imageUrl: `img/doors/${i + 1}.jpg` });
  } */
const myApp = new Vue({
  data() {
    return {
      doors,
      displayImage: false,
      displayUrl: null,
      currentDoor: doors[0],
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
          `open ${door.number}, pressed and visible: ${this.displayImage}`
        );
        this.currentDoor = door;
        this.displayImage = true;
      } else {
        console.log("Day is after door number! Not opening door.");
      }
    },

    canOpenDoor: function(door) {
      return door.number <= new Date().getDate();
    },

    /*       getRandomImage: function () {
            const max = 11;
            this.currentNumber = (Math.floor(Math.random() * Math.floor(max)) + 1);
            return 'img/doors/' + this.currentNumber + '.jpg';
          } */
  },
  components: {
    "p-dialog": dialog,
    "p-button": button,
    "p-card": card,
  },
});
myApp.$mount("#wrapper");
Vue.prototype.$primevue = { ripple: true };
