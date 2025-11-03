// LOGIN
const correctKey = "2328";
const login = document.getElementById("login");
const app = document.getElementById("app");
const loginBtn = document.getElementById("loginBtn");
const keyInput = document.getElementById("keyInput");
const loginMsg = document.getElementById("loginMsg");

loginBtn.addEventListener("click", () => {
  if (keyInput.value.trim() === correctKey) {
    login.style.opacity = 0;
    setTimeout(() => {
      login.style.display = "none";
      app.style.display = "block";
    }, 350);
  } else {
    loginMsg.textContent = "Key incorreta!";
  }
});

// ELEMENTOS
const tabNormal = document.getElementById("tabNormal");
const tabMax = document.getElementById("tabMax");
const maxExtra = document.getElementById("maxExtra");
const injetarNormal = document.getElementById("injetarNormal");
const injetarMax = document.getElementById("injetarMax");

const slider = document.getElementById("slider");
const barra = document.getElementById("barra");
const percent = document.getElementById("percent");
const sliderSuav = document.getElementById("slider-suav");
const barraSuav = document.getElementById("barra-suav");
const percentSuav = document.getElementById("percent-suav");

const togglePrecision = document.getElementById("toggle-precision");
const toggleRecoil = document.getElementById("toggle-recoil");

// FUNÇÃO RESET
function resetSliders() {
  slider.value = 50;
  barra.style.width = "50%";
  percent.textContent = "50%";
  sliderSuav.value = 50;
  barraSuav.style.width = "50%";
  percentSuav.textContent = "50%";
  togglePrecision.checked = false;
  toggleRecoil.checked = false;
}

// TROCAR ABAS
function setTab(normal) {
  resetSliders();
  if (normal) {
    tabNormal.classList.add("active");
    tabMax.classList.remove("active");
    maxExtra.style.display = "none";
    injetarNormal.style.display = "inline-block";
    injetarMax.style.display = "none";
  } else {
    tabNormal.classList.remove("active");
    tabMax.classList.add("active");
    maxExtra.style.display = "block";
    injetarNormal.style.display = "none";
    injetarMax.style.display = "inline-block";
  }
}
tabNormal.addEventListener("click", () => setTab(true));
tabMax.addEventListener("click", () => setTab(false));
setTab(true);

// SLIDERS
slider.addEventListener("input", () => {
  barra.style.width = slider.value + "%";
  percent.textContent = slider.value + "%";
});
sliderSuav.addEventListener("input", () => {
  barraSuav.style.width = sliderSuav.value + "%";
  percentSuav.textContent = sliderSuav.value + "%";
});

// FUNÇÃO TOGGLE INJETAR
function toggleInjetar(button, appScheme, pkg, iosUrl) {
  let injetado = false;
  button.addEventListener("click", () => {
    if (!injetado) {
      button.textContent = "INJETADO";
      button.style.background = "var(--green)";
      button.style.boxShadow = "0 0 16px var(--green)";
      injetado = true;

      // Abrir app
      window.location.href = appScheme;
      setTimeout(() => {
        if (confirm("Não abriu o app? Deseja ir para a loja?")) {
          const ua = navigator.userAgent || "";
          if (/android/i.test(ua)) {
            window.open(`https://play.google.com/store/apps/details?id=${pkg}`, "_blank");
          } else if (/iphone|ipad/i.test(ua)) {
            window.open(iosUrl, "_blank");
          }
        }
      }, 100000);

    } else {
      button.textContent = "INJETAR";
      button.style.background = "#555";
      button.style.boxShadow = "0 8px 0 rgba(0,0,0,0.35)";
      injetado = false;
    }
  });
}

// APLICANDO NOS BOTÕES
toggleInjetar(injetarNormal, "freefire://", "com.dts.freefireth", "https://apps.apple.com/br/app/free-fire/id1305098906");
toggleInjetar(injetarMax, "freefiremax://", "com.dts.freefiremax", "https://apps.apple.com/br/app/free-fire-max/id1481939334");
