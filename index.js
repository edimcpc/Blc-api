const express = require('express');
const app = express();

const waifuData = [
  {
    "waifuname": "Rukia",
    "link": "https://i.imgur.com/0hZcYQr.jpg",
    "stars": "𝗥",
    "possibility": "98%",
    "price": "45",
    "waifuid": "30"
  },
  {
    "waifuname": "Kon",
    "link": "https://i.imgur.com/jAsWA8x.jpg",
    "stars": "𝗥",
    "possibility": "96%",
    "price": "45",
    "waifuid": "29"
  },
  {
    "waifuname": "Kira Izuru",
    "link": "https://i.imgur.com/fPyd6LI.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "55",
    "waifuid": "28"
   },
  {
    "waifuname": "Urahara Kisuke",
    "link": "https://i.imgur.com/jSiIuwa.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "315",
    "waifuid": "27"
 },
  {
    "waifuname": "Abarai Renji",
    "link": "https://i.imgur.com/Cj6W41u.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "315",
    "waifuid": "26"
 },
  {
    "waifuname": "Kuchiki Rukia",
    "link": "https://i.imgur.com/Pp86pK1.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "315",
    "waifuid": "25"
  },
  {
    "waifuname": "Nelliel",
    "link": "https://i.imgur.com/tBZM86k.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "315",
    "waifuid": "24"
 },
  {
    "waifuname": "Isane Kotetsu",
    "link": "https://i.imgur.com/ZzRZuNI.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "315",
    "waifuid": "23"
 },
  {
    "waifuname": "Hinamori",
    "link": "https://i.imgur.com/Vmoawrr.jpg",
    "stars": "𝗦𝗥",
    "possibility": "35%",
    "price": "315",
    "waifuid": "22"
 },
  {
    "waifuname": "Shinji Hirako",
    "link": "https://i.imgur.com/nZkZHFJ.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "315",
    "waifuid": "21"
 },
  {
    "waifuname": "Kuchiki Rukia",
    "link": "https://i.imgur.com/8Dl4EJM.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "1%",
    "price": "315",
    "waifuid": "20"
 },
  {
    "waifuname": "Kurosaki Ichigo",
    "link": "https://i.imgur.com/X5f2DCE.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "19"
 },
  {
    "waifuname": "Kuchiki Rukia",
    "link": "https://i.imgur.com/4yXWSit.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "18"
 },
  {
    "waifuname": "Toshiro Hitsugaya",
    "link": "https://i.imgur.com/EcWKMeS.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "17"
 },
  {
    "waifuname": "Urahara Kisuke",
    "link": "https://i.imgur.com/CIhHKwW.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "16"
 },
  {
    "waifuname": "Hirako Shinji",
    "link": "https://i.imgur.com/gE8mqfz.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "15"
 },
  {
    "waifuname": "Kurosaki Isshin",
    "link": "https://i.imgur.com/wlyQX16.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "14"
 },
  {
    "waifuname": "Ichigo And Zangetsu",
    "link": "https://i.imgur.com/Xg2G2sK.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "1%",
    "price": "500",
    "waifuid": "13"
 },
  {
    "waifuname": " Kurosaki Ichigo",
    "link": "https://i.imgur.com/J1806nu.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "12"
 },
  {
    "waifuname": "Kurosaki Ichigo",
    "link": "https://i.imgur.com/4L2Vubu.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "1%",
    "price": "500",
    "waifuid": "11"
 },
  {
    "waifuname": "Kurosaki Ichigo",
    "link": "https://i.imgur.com/Y4DFF7q.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "1%",
    "price": "500",
    "waifuid": "10"
 },
  {
    "waifuname": "Kurosaki Ichigo",
    "link": "https://i.imgur.com/vnNzULM.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "9"
 },
  {
    "waifuname": "Grimmjow Jeagerjaquez",
    "link": "https://i.imgur.com/wVmHHiZ.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "1%",
    "price": "500",
    "waifuid": "8"
 },
  {
    "waifuname": "Shunsui Kyoraku",
    "link": "https://i.imgur.com/Rqq9fbW.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "7"
 },
  {
    "waifuname": "Ichimaru Gin",
    "link": "https://i.imgur.com/eetKlGn.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "6"
 },
  {
    "waifuname": "Sui-Feng",
    "link": "https://i.imgur.com/ZBcAKzk.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "1%",
    "price": "500",
    "waifuid": "5"
 },
  {
    "waifuname": "Kuchiki Byakuya",
    "link": "https://i.imgur.com/SaXQFkR.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "4"
 },
  {
    "waifuname": "Retsu Unohana",
    "link": "https://i.imgur.com/9VmdalR.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "3"
 },
  {
    "waifuname": "Aizen Sosuke",
    "link": "https://i.imgur.com/CUu1KNX.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "2"
 },
  {
    "waifuname": "Zaraki Kenpachi",
    "link": "https://i.imgur.com/BvVQxR1.jpg",
    "stars": "𝗦𝗦𝗥",
    "possibility": "3%",
    "price": "500",
    "waifuid": "1"
}

];

app.get('/', (req, res) => {
  res.json(waifuData);
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});