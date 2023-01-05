
// 取得modal物件
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// 獲取所有圖片
var images = document.getElementsByTagName("img");
// 遍歷所有圖片
for (var i = 0; i < images.length; i++) {
	var img = images[i];
  	// 為每個圖片註冊點擊事件
	img.onclick = function() {
		// 獲取模态窗口和圖片元素
		// 當用戶點擊圖片時，顯示模态窗口
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}
}
// 當用戶點擊模态窗口的关閉按鈕時，隱藏模态窗口
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}
