const myfromdata = document.getElementById("Contact");

myfromdata.addEventListener("submit", (userdata) => {
  userdata.preventDefault();

  const userName     = document.getElementById("name").value.trim();
  const userMobile    = document.getElementById("mobile").value.trim();
  const userEmail    = document.getElementById("email").value.trim();
  const userMessages = document.getElementById("message").value.trim();

  let Errname    = document.getElementById("nameErr");
  let Errmobile  = document.getElementById("mobileErr");
  let Erremail   = document.getElementById("emailErr");
  let Errmessage = document.getElementById("messageErr");

  Errname.textContent = "";
  Errmobile.textContent = "";
  Erremail.textContent = "";
  Errmessage.textContent = "";

  let isvalid = true;

  if (!userName) {
    Errname.textContent = "please fill the name";
    isvalid = false;
  } else if (userName.length > 50) {
    Errname.textContent = "Name must be 50 character or less";
    isvalid = false;
  }

  const mobilePattern = /^[6789][0-9]{9}$/;
  if (!userMobile) {
    Errmobile.textContent = "please fill the mobile number";
    isvalid = false;
  } else if (!mobilePattern.test(userMobile)) {
    Errmobile.textContent = "please fill the correct mobile number";
    isvalid = false;
  }

  const emailPattern = /^[a-z0-9_%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!userEmail) {
    Erremail.textContent = "please fill the your email";
    isvalid = false;
  } else if (!emailPattern.test(userEmail)) {
    Erremail.textContent = "please correct the your email";
    isvalid = false;
  }

  if (!userMessages) {
    Errmessage.textContent = "please fill the your feedback";
    isvalid = false;
  }

  if (isvalid) {
    const userinfo = {
      userName,
      userMobile,
      userEmail,
      userMessages,
    };

    console.log(userinfo);
    alert("Data saved in console part...!!");
    myfromdata.reset();
  }
});