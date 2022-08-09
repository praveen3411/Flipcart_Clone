let navbar = () => {
  return `
    <div id="whole_nav">
      <div id="hdoffer">
        <div>
          <p>
            BIG SAVING DAY'S India's favorite deals are ending soon show now &
            save now
          </p>
        </div>
        <div>
          <p
            style="color: white; font-size: 20px; font-weight: bold"
            onclick="cutoffer()"
          >
            X
          </p>
        </div>
      </div>

      <div id="cont_searchbar">
      <a href="index.html" id="anchor">
        <div id="logo">
         <img
         onClick="homez()"
         src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
         alt="img.logo"
       />
        </div>
        </a>

        <div id="searchbar">
          <input 
            type="text"
            placeholder="Search for products,brands and more"
          /><button>Search</button>
        </div>

        <div id="log">
          <div id="lg">
            ACCOUNT
            <br />
            praveen
          </div>
        </div>

        <div id="cartpg">
          <div>
            <a href="# "><i class="fa-solid fa-heart"></i></a>
          </div>
          <div id="productnos" onclick="cartpage()">
            <a href="# "><i class="fa-solid fa-bag-shopping"></i></a>
            <p></p>
          </div>
          <div>
            <a href=" #"><i class="fa-solid fa-certificate"></i></a>
          </div>
        </div>
      </div>

      <nav id="nav">
        <div id="product_pages">
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0cbdf75060e1a919.png?q=100"
              alt="mobiles"
            />
            <div class="dropbtn" onclick="makeupp()">MOBILES</div>
            <div class="dropdown-content">
              <p>MI</p>
              <p>REAL ME</p>
              <p>SAMSUNG</p>
              <p>POCKO</p>
              <p>VIVO</p>
              <p>OPPO</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5560d29a3109eebe.png?q=100"
              alt=""
            />
            <div class="dropbtn" onclick="brushpage()">CATAGAROES</div>
            <div class="dropdown-content">
              <p  onClick="fashion()"><span onClick="fashionone()">FASHION</span></p>
              <p onClick="mensone()">MEN</p>
              <p>ETHNIC</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/98cc8f5bd6768c30.png?q=100"
              alt=""
            />
            <div class="dropbtn">ELECTRONICS</div>
            <div class="dropdown-content">
              <p>Mobiles</p>
              <p>Laptops</p>
              <p>TV & divices</p>
              <p>Smart Watches</p>
              <p>Computer Asssories</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/247231c4cf9f2003.png?q=100"
              alt=""
            />
            <div class="dropbtn">BEAUTY</div>
            <div class="dropdown-content">
              <p>Skin Cares</p>
              <p>Makeup Kits</p>
              <p>Lady Fashion</p>
              <p>Mens Fashion</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/bb72d6c9df0c3c82.png?q=100"
              alt=""
            />
            <div class="dropbtn">HOME</div>
            <div class="dropdown-content">
              <p>Blankets</p>
              <p>Wood Work</p>
              <p>Home Decoration</p>
              <p>Sofas</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/bc440e23d55bd111.png?q=100"
              alt=""
            />
            <div class="dropbtn">APPLIENCES</div>
            <div class="dropdown-content">
              <p>Cabels</p>
              <p>Televisions</p>
              <p>Power Banks</p>
              <p>Microwave</p>
              <p>Front-Load LG</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/270cdf47bcc0e89d.png?q=100"
              alt=""
            />
            <div class="dropbtn">FURNITURE</div>
            <div class="dropdown-content">
              <p>Chairs</p>
              <p>Wood Work</p>
              <p>Dining Tables</p>
              <p>Bar Stools</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/c575255f0c11b324.png?q=100"
              alt=""
            />
            <div class="dropbtn">TRAVEL</div>
            <div class="dropdown-content">
              <p>Train Tickets</p>
              <p>Bus Tickets</p>
              <p>Plane Tickets</p>
              <p>Luxery Life</p>
            </div>
          </div>
          <div class="dropdown">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1064d8830bdc0181.png?q=100"
              alt=""
            />
            <div class="dropbtn">Grocery</div>
            <div class="dropdown-content">
              <p>Soaps</p>
              <p>Vegatables</p>
              <p>Eating</p>
              <p>Drinks</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- Scrool Bar -->
   `;
};

export { navbar };
