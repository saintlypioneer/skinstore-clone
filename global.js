const items = [
  //Skincare products
  {
    id: 1,
    image_url:
      "https://static.thcdn.com/images/small/original/productimg/1600/1600/11401314-1954461013882644.jpg",
    name: "3LAB Anti-Ageing Cream 60ml",
    category: "Skincare",
    price: 750.0,
  },

  {
    id: 2,
    image_url:
      "https://static.thcdn.com/images/small/original/productimg/1600/1600/12038576-2264648083937035.jpg",
    name: "Omorovicza Best Sellers Set",
    category: "Skincare",
    price: 480.0,
  },

  {
    id: 3,
    image_url:
      "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12538011-5734765050447840.jpg",
    name: "Omorovicza Evening CBD Facial Set",
    category: "Skincare",
    price: 402.0,
  },

  {
    id: 4,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/13928075-1205002137017610.jpg",
    name: " Zutta LED Mask - Sapphira",
    category: "Skincare",
    price: 399.0,
  },

  //Hair products
  {
    id: 5,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/13280908-8024900284917718.jpg",
    name: " Unplugged Styler - Cordless Flat Iron (Black)",
    category: " Hair Care",
    price: 299.0,
  },

  {
    id: 6,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/13554654-1074930173695055.jpg",
    name: " T3 Afar Travel Dryer",
    category: "Hair Care",
    price: 179.99,
  },

  {
    id: 7,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/11785994-1984985603593023.jpg",
    name: " Philip B Icelandic Blonde Shampoo 32 fl oz/947ml",
    category: "Hair Care",
    price: 150.0,
  },

  {
    id: 8,
    image_url:
      "https://static.thcdn.com/images/small/webp//productimg/original/13282502-3944891492637181.jpg",
    name: " VIRTUE Healthy Scalp Trio",
    category: "Hair Care",
    price: 134.0,
  },

  //makeup & cosmetics
  {
    id: 9,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/13937560-1154998594986205.jpg",
    name: " Chantecaille Oil Free Balancing Moisturizer 50g",
    category: "Makeup and Cosmetics",
    price: 75.0,
  },

  {
    id: 10,
    image_url:
      "https://static.thcdn.com/images/small/original/productimg/1600/1600/11567391-1644522663544346.jpg",
    name: " Dermablend Natural Finish Set (Various Shades)",
    category: "Makeup and Cosmetics",
    price: 64.0,
  },

  {
    id: 11,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/11348400-1224871519735586.jpg",
    name: " Colorescience Natural Finish Pressed Foundation SPF20 (Various Shades)",
    category: "Makeup and Cosmetics",
    price: 59.0,
  },

  {
    id: 12,
    image_url:
      "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11752239-8694597305372915.jpg",
    name: "Koh Gen Do Maifanshi Moisture Fit Concealer 7g (Various Shades)",
    category: "Makeup and Cosmetics",
    price: 63.0,
  },

  {
    id: 13,
    image_url:
      "https://static.thcdn.com/images/small/webp//productimg/original/11065895-5134853691666783.jpg",
    name: "NUDESTIX Mascara - Black",
    category: "Makeup and Cosmetics",
    price: 28.0,
  },

  {
    id: 14,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/11378683-1514991779261836.jpg",
    name: "Illamasqua Antimatter Lipstick (Various Shades)",
    category: "Makeup and Cosmetics",
    price: 11.0,
  },

  {
    id: 15,
    image_url:
      "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11742829-1834590785162913.jpg",
    name: "TONYMOLY Petit Bunny Gloss Bars (Option: 02 | Juicy Grape)",
    category: "Makeup and Cosmetics",
    price: 8.0,
  },

  {
    id: 16,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/12657561-1764964030368092.jpg",
    name: "Stila Sketch and Sculpt Brow Pencil 4g (Various Shades)",
    category: "Makeup and Cosmetics",
    price: 20.0,
  },

  //Bath & Body
  {
    id: 17,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/12507566-5965014350757716.jpg",
    name: " Mama Mio Supersize Bundle",
    category: "Bath & Body",
    price: 91.0,
  },

  {
    id: 18,
    image_url:
      "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11725414-2914576050842040.jpg",
    name: "Elemis Love Yourself Bundle",
    category: "Bath & Body",
    price: 79.6,
  },

  {
    id: 19,
    image_url:
      "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11691581-4674555612912272.jpg",
    name: "Elemis Body Performance Bundle",
    category: "Bath & Body",
    price: 108.5,
  },

  {
    id: 20,
    image_url:
      "https://static.thcdn.com/images/small/original//productimg/original/13030216-1194867945123005.jpg",
    name: "Soon Skincare Clear Day Broad Spectrum SPF50 2 oz",
    category: "Bath & Body",
    price: 48.0,
  },
];

const item_categories = [
   {category: "Skincare", img: "https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png"},
   {category: "Hair Care", img: "https://static.thcdn.com/images/small/webp/widgets/121-us/06/round_widget_ss_homepage_-_Untitled_Page_%281%29-062906.png"},
   {category: "Makeup and Cosmetics", img: "https://static.thcdn.com/images/small/webp/widgets/121-us/26/round_widget_ss_homepage_-_Untitled_Page_%282%29-062926.png"},
   {category: "Bath & Body", img: "https://static.thcdn.com/images/small/webp/widgets/121-us/07/round_widget_ss_homepage_-_Untitled_Page_%286%29-063207.png"}
];

// Global Jobs for JS
if (JSON.parse(localStorage.getItem('user'))!=null){
   document.getElementById('user_name').innerHTML = JSON.parse(localStorage.getItem('user')).name
}

function addToCart(id) {
  // this id is from items
  // localStorage key name => 'cart'
  const product = items.filter((item)=>item.id==id);
  console.log(product)
  const loc = JSON.parse(localStorage.getItem('cart')) || [];
  loc.push(product[0]);
  localStorage.setItem('cart', JSON.stringify(loc));
}

function getFilteredProducts(category) {
  // filter the product by category from items and display using render function
}

function updateBreadcrums() {
    
}

function updateQuantity(id, typeOfOperation) {
    
}

function onLoadLanding() {
    console.log("Landing");
    loadCategories();
   //  loadProducts for 'New Year Fresh Start'
   var doc = document.getElementById("container_landing_all_products");
   doc.innerHTML = "";
   items.forEach(item=>{
      var x = `
      <div
      style="
        max-width: 500px;
        font-size: 0.6rem;
        display: flex;
        flex-direction: column;
      "
      class="item_card_with_rating"
      id="item_card_with_rating"
    >
      <div class="image">
        <img
          style="width: 100%"
          src="${item.image_url}"
          alt=""
          srcset=""
        />
      </div>
      <div
        style="
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        "
        class="content"
      >
        <h1>
          ${item.name}
        </h1>
        <span
          style="
            border: 1px solid orangered;
            width: fit-content;
            padding: 5px;
            font-weight: lighter;
            font-size: small;
          "
          class="tag"
          >${item.category}</span
        >
        <span style="font-weight: bold; font-size: 1.4rem" class="price"
          >₹ ${item.price}</span
        >
        <button
          style="
            padding: 7px;
            background-color: black;
            color: white;
            border: 1px solid black;
          "
          class="primart_btn"
          onclick="addToCart(${item.id})"
        >
          QUICK BUY
        </button>
      </div>
    </div>
      `;
      doc.innerHTML += x;
   });
   // above New and Trending products
   doc = document.getElementById("container_landing_products_2");
   doc.innerHTML = "";
   for (var i=items.length/2-1; i<items.length-1; i++){
      var x = `
      <div
      style="
        max-width: 500px;
        font-size: 0.6rem;
        display: flex;
        flex-direction: column;
      "
      class="item_card_with_rating"
      id="item_card_with_rating"
    >
      <div class="image">
        <img
          style="width: 100%"
          src="${items[i].image_url}"
          alt=""
          srcset=""
        />
      </div>
      <div
        style="
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        "
        class="content"
      >
        <h1>
        ${items[i].name}
        </h1>
        <span
          style="font-weight: normal; font-size: 1.4rem; text-align: center"
          class="price"
          >₹ ${items[i].price}</span
        >
        <button
          style="
            padding: 7px;
            background-color: black;
            color: white;
            border: 1px solid black;
          "
          class="primart_btn"
          onclick="addToCart(${items[i].id})"
        >
          QUICK BUY
        </button>
      </div>
    </div>
      `;
      doc.innerHTML += x;
   }
   // for New and Trending products
   const temp_category = item_categories[Math.floor(Math.random()*(item_categories.length))].category;
   doc = document.getElementById("container_right_image_products_landing");
   doc.innerHTML = "";
   items.forEach(item=>{
      if (item.category==temp_category){
         var x = `
         <div
         style="
         max-width: 500px;
         font-size: 0.6rem;
         display: flex;
         flex-direction: column;
         "
         class="item_card_with_rating"
         id="item_card_with_rating"
      >
         <div class="image">
         <img
            style="width: 100%"
            src="${item.image_url}"
            alt=""
            srcset=""
         />
         </div>
         <div
         style="
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
         "
         class="content"
         >
         <h1>
            ${item.name}
         </h1>
         <span
            style="
               font-weight: normal;
               font-size: 1.4rem;
               text-align: center;
            "
            class="price"
            >₹ ${item.price}</span
         >
         <button
            style="
               padding: 7px;
               background-color: black;
               color: white;
               border: 1px solid black;
            "
            class="primart_btn"

          onclick="addToCart(${item.id})"
         >
            QUICK BUY
         </button>
         </div>
      </div>
         
         `;
         doc.innerHTML += x;
      }
   })
}

function redirectToCategories(category){
   localStorage.setItem('category', category);
   window.location.href = './product_page.html'
}

function loadCategories(){
   const doc = document.getElementById("circular_img_with_heading_landing");
   doc.innerHTML = '';
   item_categories.forEach(item => {
      const html = `
      <div id="child" onclick="redirectToCategories('${item.category}')">
         <img
         style="width: 80%"
         src="${item.img}"
         alt="${item.category}"
         />
      </div>
      `;
      doc.innerHTML += html;
   })
}

function onLoadProductPage() {
    document.getElementById('products_page_breadcrum').innerHTML = localStorage.getItem('category') || 'View All';
    loadCategories()
    //  loadProducts for Best Sellers
   var doc = document.getElementById("container_landing_all_products");
   doc.innerHTML = "";
   items.forEach(item=>{
      if (item.category.toLowerCase()==localStorage.getItem('category').toLowerCase()){
         var x = `
      <div
      style="
        max-width: 500px;
        font-size: 0.6rem;
        display: flex;
        flex-direction: column;
      "
      class="item_card_with_rating"
      id="item_card_with_rating"
    >
      <div class="image">
        <img
          style="width: 100%"
          src="${item.image_url}"
          alt=""
          srcset=""
        />
      </div>
      <div
        style="
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        "
        class="content"
      >
        <h1>
          ${item.name}
        </h1>
        <span
          style="
            border: 1px solid orangered;
            width: fit-content;
            padding: 5px;
            font-weight: lighter;
            font-size: small;
          "
          class="tag"
          >${item.category}</span
        >
        <span style="font-weight: bold; font-size: 1.4rem" class="price"
          >₹ ${item.price}</span
        >
        <button
          style="
            padding: 7px;
            background-color: black;
            color: white;
            border: 1px solid black;
          "
          class="primart_btn"
          onclick="addToCart(${item.id})"
        >
          QUICK BUY
        </button>
      </div>
    </div>
      `;
      doc.innerHTML += x;
      }
   });
}

function onLoadSpecificProductPage() {
    const productId = localStorage.getItem('specificProductId') || '1';
    const specific_product = items.filter(item=>item.id==productId)[0];
    document.getElementById('specific_product_image').innerHTML = `
    <img width="100%" src="${specific_product.image_url}" alt="" srcset="">
    `;
    document.getElementById('specific_product_name').innerHTML = specific_product.name;
    document.getElementById('specific_product_price').innerHTML = '₹ '+specific_product.price;
}

function onLoadCheckoutPage() {
    
}

function onLoadSigninPage() {
    
}

function onSignIn() {
  var signInArr = JSON.parse(localStorage.getItem("signUpUserDetails")) || [];
  // select the signin button as below--
  // var signInBtn=document.querySelector(".signin_div>div >div:nth-child(1) >input:nth-child(1)");

  var email = document.querySelector(
    ".signin_div .child1 div:nth-child(2) input"
  ).value;
  var pass = document.querySelector(
    ".signin_div >.parent >.child1 div:nth-child(3) input"
  ).value;

  // console.log(email,pass);
  if (email == "" || pass == "") {
    alert("Fill all inputs");
  } else {
    var flag = 0;
    signInArr.map(function (ele) {
      if (ele.pass == pass && ele.email == email) {
        flag = 1;
      }
    });
    if (flag == 1) {
      alert("SIgn In Sucessful");
      window.location.href = "index.html";
    } else {
      alert("Please enter valid email or password");
    }
  }
}

function onSignUp() {
  var signUpUserDetailsArr =
    JSON.parse(localStorage.getItem("signUpUserDetails")) || [];
  const doc = document.getElementsByClassName("signup_div");
  var name = document.querySelector(".signup_div >div .inp1 input ");
  name = name.value;

  var email = document.querySelector(".signup_div >div .inp2 input ");
  email = email.value;

  var email_confirm = document.querySelector(".signup_div >div .inp3 input ");
  email_confirm = email_confirm.value;

  var pass = document.querySelector(".signup_div >div .inp4 input ");
  pass = pass.value;

  var pass_confirm = document.querySelector(".signup_div >div .inp5 input ");
  pass_confirm = pass_confirm.value;

  var phone = document.querySelector(".signup_div >div .inp6 input ");
  phone = phone.value;
  // console.log(name,email,email_confirm,pass,pass_confirm,phone);
  if (
    name == "" ||
    email == "" ||
    email_confirm == "" ||
    pass == "" ||
    pass_confirm == ""
  ) {
    alert("Please fill all the required inputs");
  } else if (
    !email.includes("@gmail.com") &&
    !email.includes("@rediffmail.com")
  ) {
    alert("Enter a Valid Gmail or Rediffmail");
  } else if (email != email_confirm) {
    alert("Missmatch in Email");
  } else if (pass.length < 8) {
    alert("Use Atleast 8 characters for password");
  } else if (pass != pass_confirm) {
    alert("Missmatch in Password");
  } else if (phone.length != 10 && phone.length >= 1) {
    alert("Enter Valid Phone Number");
  } else {
    alert("SIGN UP SUCCESSFUL");
    var obj = {
      name: name,
      email: email,
      pass: pass,
    };
    // console.log(obj);
    signUpUserDetailsArr.push(obj);
    localStorage.setItem(
      "signUpUserDetails",
      JSON.stringify(signUpUserDetailsArr)
    );
    window.location.href = "./index.html";
  }

  //not taking phone number as it is optional in web page **
}

function onLoadSignupPage() {

}


var passwordDiv = document.querySelector(" input[type='password']");
if (passwordDiv != null) {
  passwordDiv.parentNode.children[1].addEventListener("click", showPassFunc);
  console.log(passwordDiv.parentNode.children[1]);

  function showPassFunc() {
    // console.log(passwordDiv.children[0]);
    passwordDiv.parentNode.children[0].setAttribute("type", "text");
    passwordDiv.parentNode.children[1].innerHTML = "hide";
    passwordDiv.parentNode.children[1].addEventListener("click", hidePassFunc);
  }
  function hidePassFunc() {
    passwordDiv.parentNode.children[0].setAttribute("type", "password");
    passwordDiv.parentNode.children[1].innerHTML = "show";
    passwordDiv.parentNode.children[1].addEventListener("click", showPassFunc);
  }
}

function submitOrder(){
  event.preventDefault();
  const email = document.getElementById('email');
  const name = document.getElementById('f_name');
  const address = document.getElementById('address');
  const number = document.getElementById('number');
  const card_number = document.getElementById('card_number');
  const card_name = document.getElementById('card_name');
  const expiry_month = document.getElementById('month');
  const expiry_year = document.getElementById('year');
  const cvv = document.getElementById('cvv');
  // console.log("card_number");
  if (email.value.length == 0 ||
    name.value.length == 0 ||
    address.value.length == 0 ||
    number.value.length == 0 ||
    card_number.value.length == 0 ||
    card_name.value.length == 0 ||
    expiry_month.value.length == 0 ||
    expiry_year.value.length == 0 ||
    cvv.value.length == 0){
      window.alert("Please Enter valid details.");
      return;
    }
  else{
    window.alert("Order Placed! Have a great Day.");
  window.location.href = './index.html';
  }
}