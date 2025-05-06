// ANIMAÇÕES
const sucessAnimation = document.querySelector(".sucess")
const errorAnimation = document.querySelector(".error")
const modalError = document.getElementById("modal-error")
const textError = document.getElementById("text-variant-error")
const buttonApply = document.getElementById("button-apply")
const modalApply = document.getElementById("modal-apply")
const titleApply = document.getElementById("title-apply")
const esmeraldColor = "rgb(57, 255, 156)"
const whiteSmokeColor = "whitesmoke"

// WIFI
const wifiMenuButton = document.getElementById("menu-wifi");
const closeWifiButton = document.getElementById("close-wifi");
const salvarWifiButton = document.getElementById("salvar-wifi")
const modalWifi = document.getElementById("modal-wifi")
const optionsWifi = document.querySelectorAll(".opcao-wifi")
const inputRede = document.getElementById("rede")
const visibilitySenha = document.getElementById("visibility-password")
const invisibilitySenha = document.getElementById("invisibility-password")
const inputSenha = document.getElementById("senha")
const wifisContainer = document.querySelector(".wifis");
const tooglePassword = document.querySelector(".icon-toggle-password")
const reloadWifi = document.getElementById("icon-reload")
const sucessWifis = document.querySelector(".sucess-reload-wifis")
let wifiData = {
  ssid: "",
  password: ""
};

// API 
const keyInput = document.getElementById('key');
const apiMenuButton = document.getElementById("menu-api");
const modalApi = document.getElementById("modal-api")
const closeApiButton = document.getElementById("close-api");
const salvarApiButton = document.getElementById("salvar-api")
const dropdown = document.getElementById("dropdown");
const selectedCurrency = document.getElementById("selected-currency");
const selectedText = document.getElementById("selected-text");
const selectedFlag = document.getElementById("selected-flag");
const optionsList = document.getElementById("options-list");
const visibilityKey = document.getElementById("visibility-key");
const invisibilityKey = document.getElementById("invisibility-key");
const toggleKey = document.querySelector(".icon-toggle-key");
let realApiKey = "";
let isKeyMasked = true;
const mapaPais = {
  USD: "US",
  EUR: "EU",
  BRL: "BR",
  GBP: "GB",
  ARS: "AR",
  JPY: "JP",
  CNY: "CN",
  BTC: "BTC",
  AUD: "AU",
  CAD: "CA",
  CHF: "CH"
};
let apiData = {
  key: "",
  currency: ""
};

// BRAND
const brandInput = document.getElementById('brand');
const brandPlaceholder = document.getElementById('brand-placeholder');
const brandMenuButton = document.getElementById("menu-brand");
const modalBrand = document.getElementById("modal-brand")
const closeBrandButton = document.getElementById("close-brand");
const salvarBrandButton = document.getElementById("salvar-brand")
const divBgHex = document.getElementById("div-bg-color-brand")
const hexTextBrand = document.getElementById("hex-text-brand")
const inputBgColor = document.getElementById("input-transparent-hex-brand")
const hexPlaceholderBrand = document.getElementById("hex-placeholder-brand")
let bgHexColor = "";
let brandBinaryData = null;

// CLOCK
const clockInput = document.getElementById('clock');
const clockPlaceholder = document.getElementById('clock-placeholder');
const clockMenuButton = document.getElementById("menu-clock");
const modalClock = document.getElementById("modal-clock")
const closeClockButton = document.getElementById("close-clock");
const salvarClockButton = document.getElementById("salvar-clock")
const dropdownUTC = document.getElementById("dropdown-utc");
const selectedUTC = document.getElementById("selected-utc");
const textUTC = document.getElementById("text-utc");
const flagUTC = document.getElementById("flag-utc");
const optionsListUTC = document.getElementById("options-list-utc");
const divRectHex = document.getElementById("div-rect-color-clock")
const hexTextClock = document.getElementById("hex-text-clock")
const inputRectColor = document.getElementById("input-transparent-hex-clock")
const hexPlaceholderClock = document.getElementById("hex-placeholder-clock")
let selectedUTCValue = null;
let rectHexColor = "";
let clockBinaryData = null;


// GIF
const gifInput = document.getElementById('gif');
const gifPlaceholder = document.getElementById('gif-placeholder');
const gifMenuButton = document.getElementById("menu-gif");
const modalGif = document.getElementById("modal-gif")
const closeGifButton = document.getElementById("close-gif");
const salvarGifButton = document.getElementById("salvar-gif")
let gifFileToUpload = null

// CONFIRM
const modalConfirm =  document.getElementById("modal-confirm");
const closeConfirmButton = document.getElementById("close-confirm");
const confirmButton = document.getElementById("confirm-button");
const ssidConfirm = document.getElementById("ssid-confirm");
const passwordConfirm = document.getElementById("password-confirm");
const keyConfirm = document.getElementById("key-confirm");
const currencyConfirm = document.getElementById("currency-confirm");
const uploadBrandConfirm = document.getElementById("upload-brand-confirm");
const bgHexConfirm = document.getElementById("bg-hex-confirm");
const rectHexConfirm = document.getElementById("rect-hex-confirm");
const uploadClockConfirm = document.getElementById("upload-clock-confirm");
const utcConfirm = document.getElementById("utc-confirm");
const uploadGifConfirm = document.getElementById("upload-gif-confirm")
const visibilityWifiConfirm = document.getElementById("visibility-wifi-confirm")
const invisibilityWifiConfirm = document.getElementById("invisibility-wifi-confirm")
const toogleWifiConfirm = document.querySelector(".icon-toggle-wifi-confirm")
const visibilityKeyConfirm = document.getElementById("visibility-key-confirm")
const invisibilityKeyConfirm = document.getElementById("invisibility-key-confirm")
const toogleKeyConfirm = document.querySelector(".icon-toggle-key-confirm")
let realWifiConfirm = "";
let sensitivyKey = "";

// MANUAL
const closeButtonManual = document.getElementById("close-icon-manual")
const modalManual = document.getElementById("modal-manual")
const buttonManual = document.getElementById("button-manual")

// Ouvindo Click Ouvindo Click Ouvindo Click Ouvindo Click
// Ouvindo Click Ouvindo Click Ouvindo Click Ouvindo Click
// Ouvindo Click Ouvindo Click Ouvindo Click Ouvindo Click
// Ouvindo Click Ouvindo Click Ouvindo Click Ouvindo Click

wifiMenuButton.addEventListener('click', () => {
  reloadWifi.classList.remove("rotation");
  resetValue(inputRede)
  resetValue(inputSenha)
  inputSenha.type = "password"
  invisibilitySenha.style.display =  "none"
  visibilitySenha.style.display = "block"
  fadeIn(modalWifi)
  
});

closeWifiButton.addEventListener('click', () =>{
    fadeOut(modalWifi)
    
})

tooglePassword.addEventListener('click', () => {
  const isPassword = inputSenha.type === 'password';
  inputSenha.type = isPassword ? 'text' : 'password';

  // Alterna visibilidade dos ícones
  visibilitySenha.style.display = isPassword ? "none" : "block";
  invisibilitySenha.style.display = isPassword ? "block" : "none";

});

reloadWifi.addEventListener('click', async () => {
  reloadWifi.classList.remove("rotation");
  void reloadWifi.offsetWidth;
  reloadWifi.classList.add("rotation");

  const carregou = await carregarRedes();
  
  if (carregou) {
    setTimeout(() => {
    reloadWifi.classList.remove("rotation");
    fadeOut(reloadWifi)}
    , 1000);
    setTimeout(() => {fadeIn(sucessWifis)}, 1500)
    setTimeout(() => {fadeOut(sucessWifis)}, 4000)
    setTimeout(() => {fadeIn(reloadWifi)}, 4500)
  }
});

apiMenuButton.addEventListener('click', () => {
  selectedText.textContent = "Your desired conversion";
  selectedText.style.color = "rgba(255, 255, 255, 0.44)";
  selectedText.style.fontWeight = "400";
  selectedFlag.style.display = "none";
  keyInput.style.paddingTop = "20px"
  resetValue(keyInput)
  fadeIn(modalApi)

});

closeApiButton.addEventListener('click', () =>{
  fadeOut(modalApi)
  
})

selectedCurrency.addEventListener("click", () => {
  const isOpen = optionsList.style.display === "block";
  optionsList.style.display = isOpen ? "none" : "block";
});

document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    optionsList.style.display = "none";
  }
});

// Toggle visibilidade
toggleKey.addEventListener("click", () => {
  isKeyMasked = !isKeyMasked;
  keyInput.value = isKeyMasked
    ? "*".repeat(realApiKey.length)
    : realApiKey;
  if (!keyInput === "") {
    keyInput.style.paddingTop = isKeyMasked ? "20px" : "15px";
  	}
  visibilityKey.style.display = isKeyMasked ? "block" : "none";
  invisibilityKey.style.display = isKeyMasked ? "none" : "block";
});

brandMenuButton.addEventListener('click', () => {
    brandPlaceholder.textContent = "Choose your file";
    brandPlaceholder.style.color = "rgba(255, 255, 255, 0.44)";
    brandPlaceholder.style.fontWeight = "400";

    hexPlaceholderBrand.style.display = "block"
    inputBgColor.style.display = "none"
    hexTextBrand.style.display = "none"
    inputBgColor.value = ""
    inputBgColor.classList.remove("input-padding-hex")
    
    fadeIn(modalBrand)
  
});

closeBrandButton.addEventListener('click', () =>{
    brandInput.value = '';
    brandPlaceholder.style.color = "rgba(255, 255, 255, 0.44)";
    brandPlaceholder.style.fontWeight = "400";
    fadeOut(modalBrand);
    
})

selectedUTC.addEventListener("click", () => {
  const isOpen = optionsListUTC.style.display === "block";
  optionsListUTC.style.display = isOpen ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!dropdownUTC.contains(e.target)) {
    optionsListUTC.style.display = "none";
  }
  inputRectColor.addEventListener("blur", () => {
    const isEmpty = inputRectColor.value.trim() === "";
    if (isEmpty) {
      hexPlaceholderClock.style.display = "block";
      inputRectColor.style.display = "none";
      hexTextClock.style.display = "none";
      inputRectColor.classList.remove("input-padding-hex");
      inputRectColor.value = "";
    }
  });
});

clockMenuButton.addEventListener('click', () => {
  clockPlaceholder.textContent = "Choose your file";
  clockPlaceholder.style.color = "rgba(255, 255, 255, 0.44)";
  clockPlaceholder.style.fontWeight = "400";
  textUTC.textContent = "Your desired timezone";
  textUTC.style.color = "rgba(255, 255, 255, 0.44)";
  textUTC.style.fontWeight = "400";

  hexPlaceholderClock.style.display = "block"
  inputRectColor.style.display = "none"
  hexTextClock.style.display = "none"
  inputRectColor.value = ""
  inputRectColor.classList.remove("input-padding-hex")

  fadeIn(modalClock)

});

closeClockButton.addEventListener('click', () =>{
  clockInput.value = ''
  clockPlaceholder.style.color = "rgba(255, 255, 255, 0.44)";
  clockPlaceholder.style.fontWeight = "400";
  fadeOut(modalClock)
})

gifMenuButton.addEventListener('click', () => {
  gifPlaceholder.textContent = "Choose your file";
  gifPlaceholder.style.color = "rgba(255, 255, 255, 0.44)";
  gifPlaceholder.style.fontWeight = "400";
  fadeIn(modalGif)

});

closeGifButton.addEventListener('click', () =>{
  gifInput.value = ''
  gifPlaceholder.style.color = "rgba(255, 255, 255, 0.44)";
  gifPlaceholder.style.fontWeight = "400";
  fadeOut(modalGif)
  
})

buttonApply.addEventListener('click', () =>{
  if (passwordConfirm.textContent === "No change") {
      visibilityWifiConfirm.style.display = "none"
  } 
  
  if (keyConfirm.textContent === "No change") {
      visibilityKeyConfirm.style.display = "none"
  } 

  fadeIn(modalConfirm)
})

closeConfirmButton.addEventListener('click', () => {
    fadeOut(modalConfirm)
});

toogleWifiConfirm.addEventListener('click', () => {
  if (passwordConfirm.textContent !== "No change") {
    const isMasked = passwordConfirm.textContent.includes('*');
    passwordConfirm.textContent = isMasked
      ? realWifiConfirm // mostrar senha real
      : formatSensitive(realWifiConfirm, true);

    visibilityWifiConfirm.style.display = isMasked ? "none" : "block";
    invisibilityWifiConfirm.style.display = isMasked ? "block" : "none";
  }

});

toogleKeyConfirm.addEventListener('click', () => {
  if (keyConfirm.textContent !== "No change") {
  const isMasked = keyConfirm.textContent.includes('*');
  keyConfirm.textContent = isMasked
    ? `${realApiKey.slice(0, 11)}...${realApiKey.slice(-11)}`
    : formatSensitive(realApiKey, true);

  visibilityKeyConfirm.style.display = isMasked ? "none" : "block";
  invisibilityKeyConfirm.style.display = isMasked ? "block" : "none";
  }
});

buttonManual.addEventListener('click', () => {
  fadeIn(modalManual)
})
closeButtonManual.addEventListener('click', () => {
  fadeOut(modalManual)
});

// Ao carregar doc Ao carregar doc Ao carregar doc Ao carregar doc
// Ao carregar doc Ao carregar doc Ao carregar doc Ao carregar doc
// Ouvindo Change Ouvindo Change Ouvindo Change Ouvindo Change
// Ouvindo Change Ouvindo Change Ouvindo Change Ouvindo Change

document.addEventListener("DOMContentLoaded", () => {

carregarRedes()
carregarMoedas()
carregarUTCs();

brandInput.addEventListener('change', () => {
    if (brandInput.files.length === 0) {
      brandPlaceholder.textContent = "Choose your file";
      return;
    }
  
    let fileName = brandInput.files[0].name.toLowerCase();
  
    // Truncar se passar de 30 caracteres
    const maxLength = 28;
    if (fileName.length > maxLength) {
      fileName = fileName.slice(0, maxLength - 3) + "...";
    }
  
    brandPlaceholder.textContent = fileName;
    brandPlaceholder.style.color = "rgb(57, 255, 156)";
    brandPlaceholder.style.fontWeight = "500";
  });

  clockInput.addEventListener('change', () => {
      if (clockInput.files.length === 0) {
        clockPlaceholder.textContent = "Choose your file";
        return;
      }
    
      let fileName = clockInput.files[0].name.toLowerCase();
    
      // Truncar se passar de 30 caracteres
      const maxLength = 28;
      if (fileName.length > maxLength) {
        fileName = fileName.slice(0, maxLength - 3) + "...";
      }
    
      clockPlaceholder.textContent = fileName;
      clockPlaceholder.style.color = "rgb(57, 255, 156)";
      clockPlaceholder.style.fontWeight = "500";
    });
  

    gifInput.addEventListener('change', () => {
        if (gifInput.files.length === 0) {
          gifPlaceholder.textContent = "Choose your file";
          return;
        }
      
        let fileName = gifInput.files[0].name.toLowerCase();
      
        // Truncar se passar de 30 caracteres
        const maxLength = 28;
        if (fileName.length > maxLength) {
          fileName = fileName.slice(0, maxLength - 3) + "...";
        }
      
        gifPlaceholder.textContent = fileName;
        gifPlaceholder.style.color = "rgb(57, 255, 156)";
        gifPlaceholder.style.fontWeight = "500";
      });
    
    });

// ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs
// ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs
// ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs
// ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs ForEachs

let wifiName = null;

optionsWifi.forEach(option => {
  option.addEventListener("click", () => {
    wifiName = option.textContent;
    inputRede.value = String(wifiName)
  });
});

// Funções Modais Funções Modais Funções Modais Funções Modais 
// Funções Modais Funções Modais Funções Modais Funções Modais 
// Funções Modais Funções Modais Funções Modais Funções Modais 
// Funções Modais Funções Modais Funções Modais Funções Modais 

let redesTeste = false;

async function carregarRedes() {
  try {
    let redes;

    if (redesTeste) {
      // Ambiente de TESTE
      redes = ["Mr. Robot 2.4G", "Suite Master", "Georgia 5G"];
    } else {
      // Ambiente REAL
      const res = await fetch("/scan");
      redes = await res.json();
    }

    const antigos = Array.from(wifisContainer.querySelectorAll("p"));
    antigos.forEach(p => p.classList.add("fade-out"));

    setTimeout(() => {
      antigos.forEach(p => p.remove());
    }, 1000);

    const delayInicial = 2000;

    redes.forEach((ssid, index) => {
      const p = document.createElement("p");
      p.classList.add("opcao-wifi", "fade-out");
      p.textContent = ssid;

      p.addEventListener("click", () => {
        inputRede.value = ssid;
      });

      setTimeout(() => {
        wifisContainer.appendChild(p);
        fadeIn(p, index)
        requestAnimationFrame(() => p.classList.remove("fade-out"));
      }, delayInicial + index * 1500);
    });

    return true; // ✅ sucesso

  } catch (e) {
    console.error("Erro ao buscar redes:", e);
    wifisContainer.innerHTML = "<p class='opcao-wifi error-wifi-options'>Error when searching for networks.</p>";
    fadeIn(wifisContainer);
    return false; // ❌ erro
  }
}


function getFlag(code) {
  const pais = mapaPais[code] || code.slice(0, 2).toUpperCase();
  return `https://flagsapi.com/${pais}/flat/32.png`;
}

async function carregarMoedas() {
  try {
    const res = await fetch("https://economia.awesomeapi.com.br/json/available/uniq");
    const data = await res.json();
    const moedas = Object.keys(data).sort();

    moedas.forEach(code => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `
        <img src="${getFlag(code)}" alt="Flag">
        <span>${code}</span>
      `;
      div.addEventListener("click", () => {
        selectedText.textContent = code;
        selectedText.style.color = "rgb(57, 255, 156)";
        selectedText.style.fontWeight = "500";
      
        selectedFlag.src = getFlag(code);
        selectedFlag.style.display = "inline";
        optionsList.style.display = "none";
      });
      optionsList.appendChild(div);
    });
  } catch (e) {
    console.error("Erro ao carregar moedas:", e);
  }
}

async function carregarUTCs() {
  try {
    optionsListUTC.innerHTML = ""; // Limpa antes

    // Gera a lista a partir do timezoneMap
    const timezoneNames = Object.keys(timezoneMap);
    timezoneNames.sort((a, b) => a.localeCompare(b)); // Ordena por nome

    timezoneNames.forEach(tzName => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `<span>${tzName}</span>`;

      div.addEventListener("click", () => {
        textUTC.textContent = tzName;
        textUTC.style.color = "rgb(57, 255, 156)";
        textUTC.style.fontWeight = "500";
        optionsListUTC.style.display = "none";
        selectedUTCValue = timezoneMap[tzName]; // AQUI: Salva o POSIX já mapeado
        console.log(selectedUTCValue)
      });

      optionsListUTC.appendChild(div);
    });

  } catch (error) {
    console.error("❌ Failed to load timezone list:", error);
    optionsListUTC.innerHTML = "<div class='option error-wifi-options'>Failed to load timezones</div>";
  }
}

function formatSensitive(value, isPassword = false) {
  if (isPassword) {
    if (value.length > 25) {
      return '*'.repeat(25);
    } else {
      return '*'.repeat(value.length);
    }
  }

  return value;
}

keyInput.addEventListener("input", (e) => {
  const selectionStart = keyInput.selectionStart;
  const selectionEnd = keyInput.selectionEnd;
  const currentLength = keyInput.value.length;

  const delta = currentLength - realApiKey.length;

  // CASO 1: Deleção (seleção ou backspace)
  if (delta < 0) {
    const start = selectionStart;
    const end = start - delta;
    realApiKey = realApiKey.slice(0, start) + realApiKey.slice(end);
  }

  // CASO 2: Inserção ou colagem
  else if (delta > 0) {
    const inserted = e.data || ""; // pega o que foi digitado (ou colado)
    const start = selectionStart - inserted.length;
    realApiKey = realApiKey.slice(0, start) + inserted + realApiKey.slice(start);
  }

  // CASO 3: texto apagado todo (ou limpado manualmente)
  if (keyInput.value === "") {
    realApiKey = "";
  }

  if (isKeyMasked) {
    keyInput.value = "*".repeat(realApiKey.length);
  }
});

function clearConfirm() {
  const valuesConfirm = document.querySelectorAll(".value-confirm");
  fadeOut(modalConfirm);

  // Resetar variáveis usadas no /apply
  wifiData = { ssid: "", password: "" };
  apiData = { key: "", currency: "" };
  selectedUTCValue = "";
  rectHexColor = "";
  bgHexColor = ""
  brandBinaryData = null;
  clockBinaryData = null;
  gifFileToUpload = null;

  setTimeout(() => {
    valuesConfirm.forEach((value) => {
      value.textContent = "No change";
      value.style.color = whiteSmokeColor;
    });
  }, 1000);
}

// VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES
// VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES
// VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES
// VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES VALIDAÇÕES

// WIFI
salvarWifiButton.addEventListener("click", () => {
  const ssid = inputRede.value.trim();
  const password = inputSenha.value.trim();

  if (!ssid) {
    return showError("Please fill in the name of your selected Wi-Fi network.");
  }
  if (!password) {
    return showError("Please fill in the password of your selected Wi-Fi network.");
  } 
  if (password.length < 6) {
    return showError("Password must be at least 6 characters long.");
  }

  realWifiConfirm = password;
  ssidConfirm.textContent = ssid;
  ssidConfirm.style.color = esmeraldColor
  passwordConfirm.textContent = formatSensitive(password, true);
  passwordConfirm.style.color = esmeraldColor
  wifiData = { ssid, password };

  showSucess();
  setTimeout(() => { 
    fadeOut(modalWifi);
    fadeOut(wifisContainer);
  }, 2000);
});


salvarApiButton.addEventListener("click", () => {
  const key = realApiKey.trim();
  const currency = selectedText.textContent;

  const hasKey = key !== "";
  const hasCurrency = currency !== "Your desired conversion";

  if (!hasKey && !hasCurrency) {
    return showError("Please enter the API key or select a currency.");
  }

  if (hasKey) {
    apiData.key = key;
    keyConfirm.textContent = formatSensitive(key, true);
    keyConfirm.style.color = esmeraldColor;
  }
  
  if (hasCurrency) {
    apiData.currency = currency;
  }

  if (currency !== "Your desired conversion") {
  currencyConfirm.textContent = currency;
  currencyConfirm.style.color = esmeraldColor;
  };
  showSucess();
  setTimeout(() => fadeOut(modalApi), 2000);
});


// BRAND
salvarBrandButton.addEventListener("click", async () => {
  const hexInputBrand = inputBgColor.value.trim();
  const hasFileBrand = brandInput.files && brandInput.files.length > 0;

  if (hexInputBrand.includes("#")) {
    return showError("Do not use '#' in the HEX color. Enter only the 6 characters.");
  }

  const hexOnly = hexInputBrand.toUpperCase();
  const hasHex = hexOnly.length === 6;

  if (hexInputBrand.length > 0 && !hasHex) {
    return showError("HEX color must have exactly 6 characters.");
  } else if (hasHex) {
    bgHexColor = hexToRGB565(hexOnly);
    bgHexConfirm.textContent = "#" + hexOnly;
    bgHexConfirm.style.color = esmeraldColor;
  }

  if (!hasFileBrand && !hasHex) {
    return showError("Please select a .jpg image, or a HEX color.");
  }

  if (hasHex && !hasFileBrand) {
    showSucess();
    setTimeout(() => fadeOut(modalBrand), 2000);
    return;
  }

  const file = brandInput.files[0];

  if (!file.name.toLowerCase().endsWith(".jpg")) {
    return showError("Only .jpg files are allowed for your startup brand.");
  }

  if (file.size > 30720) {
    return showError("Brand must be 30KB or less.");
  }

  try {
    brandBinaryData = await lowerJPG(file, 100);

    if (brandPlaceholder.textContent !== "Choose your file") {
      uploadBrandConfirm.textContent = brandPlaceholder.textContent;
      uploadBrandConfirm.style.color = esmeraldColor;
    }

    showSucess();
    setTimeout(() => fadeOut(modalBrand), 2000);
  } catch (errMsg) {
    showError(errMsg);
  }

  brandInput.value = '';
});


// CLOCK
salvarClockButton.addEventListener("click", async () => {
  const hasUTC = !!selectedUTCValue;
  const hasFile = clockInput.files && clockInput.files.length > 0;
  const hexInput = inputRectColor.value.trim();
  const hexOnly = hexInput.toUpperCase();
  const hasHex = hexOnly.length === 6;

  if (hexInput.includes("#")) {
    return showError("Do not use '#' in the HEX color. Enter only the 6 characters.");
  }

  if (hexInput.length > 0 && !hasHex) {
    return showError("HEX color must have exactly 6 characters.");
  } else if (hasHex) {
    rectHexColor = hexToRGB565(hexOnly);
    rectHexConfirm.textContent = "#" + hexOnly;
    rectHexConfirm.style.color = esmeraldColor;
  }

  if (!hasUTC && !hasFile && !hasHex) {
    return showError("Please select a UTC timezone, a .jpg image, or a HEX color.");
  }

  if (textUTC.textContent !== "Your desired timezone") {
    utcConfirm.textContent = textUTC.textContent;
    utcConfirm.style.color = esmeraldColor;
  }

  if ((hasUTC || hasHex) && !hasFile) {
    showSucess();
    setTimeout(() => fadeOut(modalClock), 2000);
    return;
  }

  const file = clockInput.files[0];

  if (!file.name.toLowerCase().endsWith(".jpg")) {
    return showError("Only .jpg files are allowed for clock background.");
  }
  if (file.size > 61440) {
    return showError("Clock background must be 60KB or less.");
  }

  try {
    clockBinaryData = await lowerJPG(file);

    if (clockPlaceholder.textContent !== "Choose your file") {
      uploadClockConfirm.textContent = clockPlaceholder.textContent;
      uploadClockConfirm.style.color = esmeraldColor;
    }

    showSucess();
    setTimeout(() => fadeOut(modalClock), 2000);
  } catch (errMsg) {
    showError(errMsg);
  }

  clockInput.value = '';
});

// GIF
salvarGifButton.addEventListener("click", async () => {
  if (!gifInput.files || gifInput.files.length === 0) {
    return showError("Please select a .gif file.");
  }

  const file = gifInput.files[0];

  if (!file.name.toLowerCase().endsWith(".gif")) {
    return showError("Only .gif files are allowed.");
  }

  if (file.size > 1024000) {
    return showError("GIF must be 1MB or less.");
  }

  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  img.onload = async function () {
    URL.revokeObjectURL(objectUrl);
    if (img.width !== 240 || img.height !== 240) {
      return showError("GIF must be 240x240px.");
    }

    // ⚡ Guarda direto o arquivo
    gifFileToUpload = file;

    if (gifPlaceholder.textContent !== "Choose your file") {
      uploadGifConfirm.textContent = gifPlaceholder.textContent;
      uploadGifConfirm.style.color = esmeraldColor;
    }

    showSucess();
    setTimeout(() => fadeOut(modalGif), 2000);
  };

  img.onerror = function () {
    URL.revokeObjectURL(objectUrl);
    showError("Error reading GIF.");
  };

  img.src = objectUrl;
  gifInput.value = ''
});


// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES

divRectHex.addEventListener('click', () => {
  hexPlaceholderClock.style.display = "none"
  inputRectColor.style.display = "block"
  hexTextClock.style.display = "block"
  inputRectColor.classList.add("input-padding-hex")
  inputRectColor.focus()

});

divBgHex.addEventListener('click', () => {
  hexPlaceholderBrand.style.display = "none"
  inputBgColor.style.display = "block"
  hexTextBrand.style.display = "block"
  inputBgColor.classList.add("input-padding-hex")
  inputBgColor.focus()

});

function resetValue(element) {
  element.value = ''
}

function showSucess() {
  document.body.style.pointerEvents = "none";
  fadeIn(sucessAnimation)
  setTimeout(() => {
      fadeOut(sucessAnimation)
      document.body.style.pointerEvents = "auto";
  }, 2000)
};

function showError(txt) {
  document.body.style.pointerEvents = "none";
  textError.textContent = String(txt)
  fadeIn(modalError)
  fadeIn(errorAnimation);        // mostra o vídeo
  setTimeout(() => {
      fadeOut(modalError);
      fadeOut(errorAnimation)
      document.body.style.pointerEvents = "auto";
  }, 3000)
  };

function fadeIn(obj) {
  obj.classList.remove('display-hidden')
  obj.classList.add('display-show')
  obj.classList.remove('fade-out')
  obj.classList.add('fade-in')
};

function fadeOut(obj) {
  obj.classList.remove('fade-in')
  obj.classList.add('fade-out')
  setTimeout(() => {
    obj.classList.remove('display-show')
    obj.classList.add('display-hidden')
  }, 500);
};

function applyAnimation() {
  const titleApply = document.getElementById("title-apply");
  const baseText = "Applying";
  let dotCount = 0;

  // Limpa qualquer intervalo anterior salvo no próprio elemento
  if (titleApply.dataset.intervalId) {
    clearInterval(Number(titleApply.dataset.intervalId));
  }

  const intervalId = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    titleApply.textContent = baseText + ".".repeat(dotCount);
  }, 500);

  // Salva o novo ID como atributo de dados
  titleApply.dataset.intervalId = intervalId;
}
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 

// JPG
async function lowerJPG(file, size = 240) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = async function () {
      URL.revokeObjectURL(objectUrl);

      if (img.width !== size || img.height !== size) {
        reject(`The .jpg image must be exactly ${size}x${size} pixels.`);
        return;
      }

      try {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, size, size);

        const blob = await new Promise(resolveBlob => canvas.toBlob(resolveBlob, 'image/jpeg'));
        const arrayBuffer = await blob.arrayBuffer();
        resolve(new Uint8Array(arrayBuffer));
      } catch (e) {
        reject("Failed to process image.");
      }
    };

    img.onerror = function () {
      URL.revokeObjectURL(objectUrl);
      reject("Error loading image.");
    };

    img.src = objectUrl;
  });
}

// HEX TO RGB565
function hexToRGB565(hex) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const rgb565 = ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3);
  return rgb565; // <-- Agora retorna um número (não string)
}

// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
confirmButton.addEventListener('click', async () => {
  fadeIn(modalApply);
  applyAnimation();
  await fetch('/start_apply', { method: 'POST' });

  try {
    // 1️⃣ Primeiro envia clockbg
    if (clockBinaryData) {
      await sendBinary(clockBinaryData, "/upload_clock_part");
      clockBinaryData = null;
    }

    // 2️⃣ Depois envia brand
    if (brandBinaryData) {
      await sendBinary(brandBinaryData, "/upload_brand_part");
      brandBinaryData = null;
    }

    // 3️⃣ Depois envia GIF puro (campo .gifFileToUpload esperado no backend)
    if (gifFileToUpload) {
      await sendBinary(gifFileToUpload, "/upload_gif_part");
      gifFileToUpload = null;
    }

    // 4️⃣ Depois envia configurações normais
    const config = {};
    if (wifiData?.ssid && wifiData?.password) {
      config.ssid = wifiData.ssid;
      config.password = wifiData.password;
    }
    if (apiData?.key) {
      config.apikey = apiData.key;
    }
    if (apiData?.currency) {
      config.currency = apiData.currency;
    }
    if (selectedUTCValue) {
      config.utc = selectedUTCValue;
    }
    if (typeof bgHexColor === "number") {
      config.bgcolor = bgHexColor;
    }
    if (typeof rectHexColor === "number") {
      config.color = rectHexColor;
    }

    const resConfig = await fetch("/apply_config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ config })
    });

    if (!resConfig.ok) {
      throw new Error("Failed to send configuration");
    }

    clearConfirm();
    setTimeout(() => showSucess(), 2000);
    setTimeout(() => fadeOut(modalApply), 4000);
    console.log("✅ Todo o envio finalizado com sucesso!");

  } catch (e) {
    console.error("❌ Erro no envio:", e);
    showError("Failed to upload all data.");
    setTimeout(() => fadeOut(modalApply), 4000);
  }
});


async function sendBinary(fileData, endpoint, fieldName = "file") {
  const formData = new FormData();
  formData.append(fieldName, fileData instanceof Blob ? fileData : new Blob([fileData]));

  const res = await fetch(endpoint, { method: "POST", body: formData });
  if (!res.ok) throw new Error(`Failed to send to ${endpoint}`);
}
