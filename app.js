      document.addEventListener("DOMContentLoaded", function () {
        // Game card hover effect enhancement
        const gameCards = document.querySelectorAll(".game-card");
        gameCards.forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-15px)";
          });

          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
          });
        });

        // Category card hover effect
        const categoryCards = document.querySelectorAll(".category-card");
        categoryCards.forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px)";
          });

          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
          });
        });

        // Download button animation
        const downloadBtns = document.querySelectorAll(
          ".btn-download-sm, .btn-download"
        );
        downloadBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            this.innerHTML =
              '<i class="fas fa-spinner fa-spin"></i> Загрузка...';
            setTimeout(() => {
              this.innerHTML = '<i class="fas fa-check"></i> Успешно!';
              this.style.background =
                "linear-gradient(to right, var(--success), var(--accent))";
            }, 1500);
          });
        });

        // Search functionality
        const searchInput = document.querySelector(".search-bar input");
        searchInput.addEventListener("keyup", function (e) {
          if (e.key === "Enter") {
            alert(`Поиск по запросу: "${this.value}"`);
            this.value = "";
          }
        });
      });