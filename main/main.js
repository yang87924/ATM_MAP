let datas;
fetch('main.json')
    .then(response => response.json())
    .then(data=>{
        datas=data;
        showdata();
    });
//how
function showdata(){
    const Remote_areas=document.getElementById('Remote_areas')
    const no_register=document.getElementById('no_register')
    const post_office=document.getElementById('post_office')
    const ATM=document.getElementById('ATM')
    const register=document.getElementById('register')
    let div1 = document.createElement("div");
    div1.innerHTML=datas.ATM
    ATM.appendChild(div1)
    let div2 = document.createElement("div");
    div2.innerHTML=datas.Remote_areas
    Remote_areas.appendChild(div2)

    let div3 = document.createElement("div");
    div3.innerHTML=datas.no_register
    no_register.appendChild(div3)

    let div4 = document.createElement("div");
    div4.innerHTML=datas.post_office
    post_office.appendChild(div4)

    let div5 = document.createElement("div");
    div5.innerHTML=datas.register
    register.appendChild(div5)
}
//捲動箭頭
$(document).ready(function() {
    // 當使用者滾動網頁時
    $(window).scroll(function() {
      // 如果網頁已經滾到一定高度，就顯示懸浮按鈕
      if ($(this).scrollTop() > 100) {
        $('.floating-button').fadeIn();
      } else {
        $('.floating-button').fadeOut();
      }
    });
  
    // 點擊懸浮按鈕時回到網頁頂部
    $('.floating-button img').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 500);
    });
  });
  //QA
$(function(){
  $('.Q').click(function(){
    $(this).parent().next().slideToggle('slow')
    //alert($(this))
    //$(this).parent().next().children().slideToggle("slow");
  })
  $('.Q').mouseenter(function(){
    $('.Q').css("cursor", "pointer")
    $('.Q').css('color', 'black')
    $(this).css('color', 'red')
  })
//超連結
  $("#mymap").click(function() {
    window.location.href = "../map/ATM_MAP.html";
  });
  $('#mymap').mouseenter(function(){
    $("#mymap").css("cursor", "pointer")
  })
  $("#my6000").click(function() {
    window.location.href = "https://6000.gov.tw/Register/Index";
  });
  $('#my6000').mouseenter(function(){
    $("#my6000").css("cursor", "pointer")
  })
})

// //滑動效果
window.onload=function(){

let boxes = document.querySelectorAll('.box')
// let aa = document.querySelectorAll('.aa')
// console.log(aa)

window.addEventListener('scroll', checkBoxes)
checkBoxes();
function checkBoxes() {
  let triggerBottom = window.innerHeight*0.8
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      //console.log(1111)
      box.classList.add('show')
    } else {
      //console.log(1111)
      box.classList.remove('show')
    }
  })
}


}
