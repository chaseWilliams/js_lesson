

var app = new Vue({
  el: '#app',
  data: {
    link: "https://imgs.xkcd.com/comics/thermostat.png"
  },
  methods: {
      get_data: function () {
          var num = Math.floor(Math.random() * 700)
          var url = "https://xkcd.com/" + num + "/info.0.json"
          $.getJSON(url, 
          function (data) {
            console.log(data)
              //Vue.set(app, "link", data.img)
          })
          
      }
  }
})