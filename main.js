document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("msg");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document
    .getElementById("contactForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.getElementById("email").value;
      let msg = document.getElementById("msg");

      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        msg.innerHTML = "<span class='text-danger'>Email không hợp lệ</span>";
      } else {
        msg.innerHTML = "<span class='text-success'>Gửi thành công!</span>";
      }
    });
  if (name === "") {
    msg.innerText = "Vui lòng nhập tên";
    msg.style.color = "red";
    return;
  }

  if (!emailRegex.test(email)) {
    msg.innerText = "Email không hợp lệ";
    msg.style.color = "red";
    return;
  }

  msg.innerText = "Gửi thành công!";
  msg.style.color = "green";
});
