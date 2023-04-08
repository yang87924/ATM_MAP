
//滑動效果
window.onload=function(){

    let boxes = document.querySelectorAll('.box')
    let aa = document.querySelectorAll('.bb')
    console.log(aa)
    
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

