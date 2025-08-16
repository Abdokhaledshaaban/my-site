

// nav bar

let dropdown_btn = document.getElementsByClassName('dropdown');
let dropdown_list = document.getElementsByClassName('dropdown-content')

dropdown_btn.onclick = function(){
    dropdown_list.style.display = 'block'
}


let nav_bar = document.getElementById('nav_bar')


    nav_bar.innerHTML = `


      <div class="container">
            <div class="top_nav">
                <a href="#"><img src="img/logo nav 1.png" alt=""></a>

                <div class="links">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#foo_main">Contact</a></li>
                        <li class="dropdown">
                            <a class="drop_menu" href="">جميع الدورات <i class="fa-solid fa-angle-down"></i></a>
                            <ul class="dropdown-content">
                                <li><a href="excel.html">Excel</a></li>
                                <li><a href="power bi.html">Power BI</a></li>
                                <li><a href="power query.html">Power Query</a></li>
                                <li><a href="analysis.html">Data Analysis</a></li>
                                <li><a href="access.html">Access</a></li>
                                <li><a href="pivot table.html">pivot table</a></li>
                                <li><a href="دوال الاكسيل.html">دوال الاكسيل</a></li>
                                <li><a class="last" href="word.html">Word</a></li>
                            </ul>
                        </li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="about us.html">About Us</a></li>
                    </ul>
                </div>
                   <span class="search-icon" onclick="openSearch()"><i class="fa-solid fa-magnifying-glass"></i></span>

                    <!-- نافذة البحث -->
                    <div id="searchOverlay" class="search-overlay">
                      <span class="closebtn" onclick="closeSearch()">&times;</span>
                      <div class="search-overlay-content">
                        <input type="text" placeholder="اكتب ما تريد البحث عنه..." id="searchInput">
                        <div class="results" id="results"></div>
                      </div>
                    </div>

            </div>
        </div>


`


// searchInput.addEventListener('input', (e) => {
//     const q = e.target.value.trim().toLowerCase();
//     if (!q) {
//         renderButtons(videosData.map((it, idx) => ({ ...it, __originalIndex: idx })));
//         return;
//     }
//     const filtered = videosData
//         .map((it, idx) => ({ ...it, __originalIndex: idx }))
//         .filter(item =>
//             (item.buttonText && item.buttonText.toLowerCase().includes(q)) ||
//             (item.title && item.title.toLowerCase().includes(q)) ||
//             (item.description && item.description.toLowerCase().includes(q))
//         );
//     renderButtons(filtered);
// });

let foo_main = document.getElementById('foo_main')

foo_main.innerHTML = `


 <div class="container">
            <div class="right">
                <img src="img/footer logo.png" alt="">

                <div class="hello">
                    <p class="foo">Data Cell</p>
                    <p>اكاديمية Data Cell لتعلم الاكسيل</p>
                </div>

                <div class="social_links">

                    <a href="https://youtube.com/@khaledshaaban?si=nE-wLnr3F3f6qOvl">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/share/1FXn8WjE4s/">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://chat.whatsapp.com/BG29xzeOdV8DOxjk9hb5Yo">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://t.me/onlineeducationkhaled">
                        <i class="fa-brands fa-telegram"></i>
                    </a>

                </div>
            </div>

            <div class="left">
                <div class="courses_list">

                    <a href="index.html">Home<i class="fa-solid fa-caret-right"></i></a>
                    <a href="excel.html">Excel<i class="fa-solid fa-caret-right"></i></a>
                    <a href="power bi.html">Power BI<i class="fa-solid fa-caret-right"></i></a>
                    <a href="power query.html">Power Query<i class="fa-solid fa-caret-right"></i></a>
                    <a href="analysis.html">Data Analysis<i class="fa-solid fa-caret-right"></i></a>
                    <a href="word.html">Word<i class="fa-solid fa-caret-right"></i></a>
                    <a href="access.html">Access<i class="fa-solid fa-caret-right"></i></a>
                    <a href="pivot table.html">pivot table<i class="fa-solid fa-caret-right"></i></a>
                    <a href="دوال الاكسيل.html">دوال الاكسيل<i class="fa-solid fa-caret-right"></i></a>
                    <a href="about us.html">About Us<i class="fa-solid fa-caret-right"></i></a>

                </div>
            </div>

            <div class="end">
                <p>اتمنى ان تكون قد حصلت على الاستفادة الكاملة من جميع الدورات
                    , لمتابعة كل جديد وكي لا يفوتك كل جديد زرنا عى قناة الـ YouTube
                </p>
            </div>

        </div>

        <div class="copy_right">
            <p>copyright &copy; Data Cell - Khaled Shaaban</p>
            <p>Terms & Conditions | Privacy Policy</p>
        </div>

`




// end nav bar

let myBtn = document.getElementById('myBtn')

window.onscroll = function(){
    if(scrollY >= 100){
        myBtn.style.display = 'block'
        nav_bar.style.background = '#0d2746'
    }else{
        myBtn.style.display = 'none'
        nav_bar.style.background = '#0a1e35'
    }
}

myBtn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}



   let pagesData = [];

// تحميل بيانات البحث من JSON
fetch("search.json")
  .then(response => response.json())
  .then(data => pagesData = data);

// فتح نافذة البحث
function openSearch() {
  document.getElementById("searchOverlay").style.height = "100%";
  document.getElementById("searchInput").focus();
}

// إغلاق نافذة البحث
function closeSearch() {
  document.getElementById("searchOverlay").style.height = "0%";
  document.getElementById("results").innerHTML = "";
  document.getElementById("searchInput").value = "";
}

// البحث أثناء الكتابة
document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value.trim().toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (query.length > 0) {
    const results = pagesData.filter(page =>
      page.title.toLowerCase().includes(query) ||
      page.content.toLowerCase().includes(query)
    );

    if (results.length > 0) {
      results.forEach(page => {
        resultsDiv.innerHTML += `
          <div class="result-item">
            <a href="${page.url}">${page.title}</a>
            <p>${page.content.substring(0, 100)}...</p>
          </div>
        `;
      });
    } else {
      resultsDiv.innerHTML = "<p>لا توجد نتائج.</p>";
    }
  }
});