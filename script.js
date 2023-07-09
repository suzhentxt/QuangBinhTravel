$(document).ready(function() {
	// Xử lý khi form đăng nhập được submit
	$("#loginForm").submit(function(e) {
	  e.preventDefault();
	  // Thực hiện xử lý đăng nhập
	  // ...
	});
  
	// Xử lý khi form đăng ký được submit
	$("#signupForm").submit(function(e) {
	  e.preventDefault();
	  // Thực hiện xử lý đăng ký
	  // ...
	});
  
	// Xử lý khi modal đăng ký được đóng
	$("#signupModal").on("hidden.bs.modal", function() {
	  $(this).detach().appendTo("body");
	});
  
	// Xử lý khi người dùng cuộn trang
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 50) {
		$('#back-to-top').fadeIn();
	  } else {
		$('#back-to-top').fadeOut();
	  }
	});
  
	// Cuộn trang về đầu khi nhấp vào nút "back-to-top"
	$('#back-to-top').click(function() {
	  $('body,html').animate({
		scrollTop: 0
	  }, 400);
	  return false;
	});
  });
  