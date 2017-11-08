
var app = new Vue({
  el: '#app',
  data: {
    comics: [
        "https://imgs.xkcd.com/comics/thermostat.png",
        "https://imgs.xkcd.com/comics/i_2x.png",
        "https://imgs.xkcd.com/comics/skins.png",
        "https://imgs.xkcd.com/comics/geologist_2x.png",
        "https://imgs.xkcd.com/comics/snare_2x.png"
    ],
    link: "https://imgs.xkcd.com/comics/thermostat.png",
    arr_index: 0
  },
  methods: {
      change_comic: function () {
          if (app.arr_index + 1 == app.comics.length)
              app.arr_index = 0
          else 
              app.arr_index = app.arr_index + 1
          app.link = app.comics[app.arr_index]
      }
  }
})