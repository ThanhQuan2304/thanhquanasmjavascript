// định vị vị trí của con trỏ chuột 
document.querySelector('.sp-btn').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
  
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
    
  }

  // tăng giảm số lượng sản phẩm
  let soLuongElement = document.getElementById('soLuong')
  let soLuong = soLuongElement.value;
  let render = (soLuong) =>{
    soLuongElement.value = soLuong;
  }
  // Phép cộng
  let phepCong = ()=>{
    soLuong++
    render(soLuong);
  }
  //Phép trừ
  let phepTru =()=>{
    if(soLuong > 1){
        soLuong--;
    } 
    render(soLuong)
  }
 // nếu nhập vào giá trị khác số hoặc số bé hơn 0
  soLuongElement.addEventListener('input', ()=>{
    soLuong = soLuongElement.value;
    soLuong = parseInt(soLuong);
    if(soLuong != isNaN || soLuong == 0){
        soLuong = 1;
       
    } 
    render(soLuong)

  });

  // Thanh trượt login-register
  var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");

      function register() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
      }
      function login() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
      }
  