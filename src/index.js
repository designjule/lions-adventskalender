

import Vue from 'vue/dist/vue.js';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import doors from './doors.js';

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
      return this.urlParams.get('debug') == 'true' || (new Date().getMonth() == 11 && door.number <= new Date().getDate());
    },
  },
  components: {
    "p-dialog": Dialog,
    "p-button": Button,
    "p-card": Card,
  },
});
myApp.$mount("#wrapper");
Vue.prototype.$primevue = { ripple: true };
