//hàm này được gọi khi HTML tải xong
function SetupEventForDiv(){
	var obj = document.getElementById("div1");
	obj.onclick = div1_clicked;
	obj.onmouseover = F1;
	obj.onmouseout = F2;
}

//hàm này được gọi khi click lên div1
function div1_clicked(){
	var obj = document.getElementById("div1");
	obj.innerHTML = (new Date()).getSeconds();
	obj.setAttribute('style','background-color:green');
} 
//hàm này được goi khi di chuột lên div1
function F1(){
	var obj = document.getElementById('div1');
	obj.innerHTML = "IN"
}
//hàm này được goi khi di chuột ra khỏi div1
function F2(){
	var obj = document.getElementById('div1');
	obj.innerHTML = "OUT"
}