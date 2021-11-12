const doors = [
  { row: 0, col: 0, number: '15', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 0, col: 1, number:  '2', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 0, col: 2, number: '16', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 0, col: 3, number: '20', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 1, col: 0, number: '19', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 1, col: 1, number:  '4', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 1, col: 2, number: '10', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 1, col: 3, number:  '8', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 2, col: 0, number:  '3', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 2, col: 1, number:  '1', prices: [{sponsor: "Kreissparkasse Böblingen", text: "1 x Weiler Taler im Wert von 20,- €"}, {sponsor: "Kreissparkasse Böblingen", text: "1 x Weiler Taler im Wert von 20,- €"}, {sponsor: "Kreissparkasse Böblingen", text: "1 x Weiler Taler im Wert von 20,- €"}, {sponsor: "Kreissparkasse Böblingen", text: "1 x Weiler Taler im Wert von 20,- €"}, {sponsor: "Kreissparkasse Böblingen", text: "1 x Weiler Taler im Wert von 20,- €"}] },
  { row: 2, col: 2, number: '24', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 2, col: 3, number: '11', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 3, col: 0, number:  '7', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 3, col: 1, number: '14', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 3, col: 2, number: '17', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 3, col: 3, number:  '6', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 4, col: 0, number: '18', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 4, col: 1, number:  '5', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 4, col: 2, number: '21', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 4, col: 3, number: '23', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 5, col: 0, number: '22', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 5, col: 1, number: '12', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 5, col: 2, number:  '9', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] },
  { row: 5, col: 3, number: '13', prices: [{sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€"}, {sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€"}] }
];

/*   for (let i = 0; i < 24; i++) {
    doors.push({ row: Math.floor(i / 5), col: i % 5, number: '' + (i + 1), imageUrl: `img/doors/${i + 1}.jpg` });
  } */
const myApp = new Vue({
  data() {
    return {
      doors,
      displayImage: false,
      displayUrl: null,
      currentDoor: doors[0]
    }
  },
  computed: {
    doorTitle: function () {
      return this.currentDoor.number + ': ' + this.currentDoor.title;
    }
  },
  methods: {
    openDoor: function (door) {
      if (this.canOpenDoor(door)) {
        console.log(`open ${door.number}, pressed and visible: ${this.displayImage}`);
        this.currentDoor = door;
        this.displayImage = true;
      } else {
        console.log('Day is after door number! Not opening door.')
      }
    },

    canOpenDoor: function (door) {
      return door.number <= new Date().getDate();
    }

    /*       getRandomImage: function () {
            const max = 11;
            this.currentNumber = (Math.floor(Math.random() * Math.floor(max)) + 1);
            return 'img/doors/' + this.currentNumber + '.jpg';
          } */
  },
  components: {
    'p-dialog': dialog,
    'p-button': button,
    'p-card': card
  }
});
myApp.$mount('#wrapper');
Vue.prototype.$primevue = { ripple: true };