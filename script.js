
      function openSidebar() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("openBtn").style.display = "none";
        document.querySelector(".content").classList.add("content-shifted");
      }

      function closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("openBtn").style.display = "block";
        document.querySelector(".content").classList.remove("content-shifted");
      }
