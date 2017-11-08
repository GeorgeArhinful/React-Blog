import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import FirstDiv from "./components/FirstDiv";
import ImageArticle from "./components/ImageArticle";
import Button from "./components/Button";

let articleData = [
  {
    name: "George Arhinful",
    date: "12/03/2017",
    header: " Williamsburg dreamcatcher wayfarers, succulents health goth paleo lo-fi meh tofu beard brunch trust fund unicorn literally stumptown.",
    subheader: "Pickled blue bottle palo santo edison bulb venmo keytar ennui iceland flexitarian letterpress celiac. Pork belly messenger bag venmo butcher microdosing, 90's try-hard activated charcoal semiotics tattooed bicycle rights umami master cleanse. Banjo messenger bag stumptown, raw denim vegan chicharrones brooklyn af literally gochujang butcher poke trust fund. Subway tile fam tattooed artisan etsy chartreuse post-ironic health goth adaptogen four loko",
    src:"https://nces.ed.gov/programs/coe/images/nav/coe_hp_new.png"
  }, {
    name: "George NKWANTA",
    date: "24/07/2018",
    header: " dsd fdfdgfgfhdfsf dfd fd fsdgd fs fsdfd f sfd fdf sadf fadfas ds df dsdf sd fsd dd ",
    subheader: "sdfsf fdsgf frvg  r vr tr v fc d f dcv  gv  v rbv bv rv r v rbv ct  tvr t v ",
    src:"http://newafghanpress.com/wp-content/uploads/2016/04/Education-in-Sierra-Leoen.jpg"
  }, {
    name: "George NKWANTA",
    date: "24/07/2018",
    header: " Man braid XOXO iceland brunch, literally pinterest intelligentsia fashion axe.  ",
    subheader: "sdfsf fdsgf frvg  r vr tr v fc d f dcv  gv  v rbv bv rv r v rbv ct  tvr t v "
  }, {
    name: "George NKWANTA",
    date: "24/07/2018",
    header: "  Banjo messenger bag stumptown, raw denim vegan chicharrones brooklyn af literally gochujang butcher poke trust fund.",
    subheader: "Knausgaard gochujang pok pok health goth chartreuse. Williamsburg mustache skateboard vaporware glossier blue bottle. Bicycle rights flannel twee, cronut scenester cold-pressed schlitz listicle. Gochujang bespoke succulents mumblecore sartorial drinking vinegar, schlitz vexillologist meditation activated charcoal shaman try-hard. Direct trade pitchfork snackwave etsy fixie fam sartorial salvia. Hashtag shabby chic XOXO beard sustainable vaporware raw denim flexitarian dreamcatcher vape cray sartorial skateboard banh mi authentic. ",
    src:"http://www.pakistankakhudahafiz.com/pkkhnew/wp-content/uploads/2015/08/remote-site-solutions-bg_ngo-sector.jpg "
  }, {
    name: "George NKWANTA",
    date: "24/07/2018",
    header: " Venmo brooklyn neutra green juice master cleanse.",
    subheader: "Tilde shabby chic skateboard, taxidermy wolf gastropub pour-over. Drinking vinegar cardigan iPhone knausgaard. Pickled squid poke hella. Health goth roof party tumblr, tumeric authentic blue bottle put a bird on it. Meditation flannel pour-over vegan. Bushwick pitchfork man bun neutra butcher chillwave. Drinking vinegar chambray meditation, authentic cold-pressed lyft vice bitters"
  }, {
    name: "George NKWANTA",
    date: "24/07/2018",
    header: " dsd fdfdgfgfhdfsf dfd fd fsdgd fs fsdfd f sfd fdf sadf fadfas ds df dsdf sd fsd dd ",
     src:"https://www.legalforms.ng/wp-content/uploads/2016/03/NGO.jpg",
    subheader: "Chicharrones cloud bread tbh wayfarers, chia sartorial vaporware blue bottle truffaut vexillologist. Direct trade bushwick lo-fi, brunch godard af kombucha tofu wayfarers affogato succulents. Wayfarers cold-pressed readymade, tacos banh mi pour-over gastropub hashtag adaptogen literally poke. Kickstarter pitchfork bitters tattooed plaid meditation disrupt selfies beard cray unicorn franzen.  "
  }, {
    name: "George NKWANTA",
    date: "24/07/2018",
    header: " Unicorn vape sriracha vinyl. Brooklyn vexillologist air plant +1 tumeric, shoreditch leggings.",
    subheader: "Polaroid af everyday carry, selvage celiac tote bag gochujang tacos XOXO kombucha cold-pressed fingerstache. YOLO hashtag authentic, plaid mixtape hell of drinking vinegar art party. Lyft edison bulb cliche fixie shoreditch butcher salvia umami whatever. Coloring book adaptogen food truck, tacos shabby chic vice pok pok migas asymmetrical. Hexagon you probably haven't heard of them slow-carb chambray, adaptogen venmo food truck sustainable franzen +1 seitan drinking vinegar. Austin +1 lomo poutine tattooed kinfolk you probably haven't heard of them. Deep v meh ramps, heirloom cray austin viral meggings seitan before they sold out roof party. "
  }
]

let navLinks = [
  {
    name: "Home",
    local: "http://www.google.com"
  }, {
    name: "Contact",
    local: "http://www.google.com"
  }, {
    name: "About",
    local: "http://www.google.com"
  }
];

let socialLinks = [
  {
    iconName: "facebook",
    url: "http://facebook.com/"
  }, {
    iconName: "whatsapp",
    url: "http://whatsapp.com/"
  }, {
    iconName: "linkedin",
    url: "http://linkedin.com/"
  },
  {
    iconName: "twitter",
    url: "http://twitter.com/"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav brand="Ghana Education Oppotunities" links={navLinks}/>
        <Header header="GEO PUBLIC BLOG"/>
        <div className="contain">
          <FirstDiv data={articleData}/>
          <ImageArticle header="Mumblecore crucifix taxidermy, tbh deep v chicharrones lumbersexual" para="Taxidermy pickled master cleanse put a bird on it flannel hashtag pinterest stumptown photo booth before they sold out helvetica. Bicycle rights wayfarers pabst kitsch iceland pug food truck intelligentsia. Gluten-free everyday carry hammock cronut, photo booth tilde schlitz af swag ramps chambray. Ugh artisan flexitarian DIY thundercats" name="NKWANTA" date="13/06/2017" src1="https://www.legalforms.ng/wp-content/uploads/2016/03/NGO.jpg " src2="http://www.pakistankakhudahafiz.com/pkkhnew/wp-content/uploads/2015/08/remote-site-solutions-bg_ngo-sector.jpg " src3="https://www.hover.com/blog/wp-content/uploads/2016/06/dot-ngo-ong-domain-name.jpg"/>
          <Button/>
          <Footer social={socialLinks}/>
        </div>
      </div>
    )
  }
}

export default App
