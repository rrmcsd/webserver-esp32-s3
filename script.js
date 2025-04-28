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
let brandHeaderData = null;

// CLOCK
const clockInput = document.getElementById('clock');
const clockPlaceholder = document.getElementById('clock-placeholder');
const clockMenuButton = document.getElementById("menu-clock");
const modalClock = document.getElementById("modal-clock")
const closeClockButton = document.getElementById("close-clock");
const salvarClockButton = document.getElementById("salvar-clock")
let clockHeaderData = null;
const dropdownUTC = document.getElementById("dropdown-utc");
const selectedUTC = document.getElementById("selected-utc");
const textUTC = document.getElementById("text-utc");
const flagUTC = document.getElementById("flag-utc");
const optionsListUTC = document.getElementById("options-list-utc");
let selectedUTCValue = null;
const divRectHex = document.getElementById("div-rect-color")
const hexText = document.getElementById("hex-text")
const inputRectColor = document.getElementById("input-transparent-hex")
const hexPlaceholder = document.getElementById("hex-placeholder")
let rectHexColor = "";

// GIF
const gifInput = document.getElementById('gif');
const gifPlaceholder = document.getElementById('gif-placeholder');
const gifMenuButton = document.getElementById("menu-gif");
const modalGif = document.getElementById("modal-gif")
const closeGifButton = document.getElementById("close-gif");
const salvarGifButton = document.getElementById("salvar-gif")
let gifHeaderData = null;

// CONFIRM
const modalConfirm =  document.getElementById("modal-confirm");
const closeConfirmButton = document.getElementById("close-confirm");
const confirmButton = document.getElementById("confirm-button");
const ssidConfirm = document.getElementById("ssid-confirm");
const passwordConfirm = document.getElementById("password-confirm");
const keyConfirm = document.getElementById("key-confirm");
const currencyConfirm = document.getElementById("currency-confirm");
const uploadBrandConfirm = document.getElementById("upload-brand-confirm");
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

selected.addEventListener("click", () => {
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
    fadeIn(modalBrand)
  
});

closeBrandButton.addEventListener('click', () =>{
    fadeOut(modalBrand)
    
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
      hexPlaceholder.style.display = "block";
      inputRectColor.style.display = "none";
      hexText.style.display = "none";
      inputRectColor.classList.remove("input-padding-hex");
      inputRectColor.value = "";
    }
  });
});

clockMenuButton.addEventListener('click', () => {
  clockPlaceholder.textContent = "Choose your file";
  textUTC.textContent = "Your desired timezone";
  textUTC.style.color = "rgba(255, 255, 255, 0.44)";
  textUTC.style.fontWeight = "400";

  hexPlaceholder.style.display = "block"
  inputRectColor.style.display = "none"
  hexText.style.display = "none"
  inputRectColor.value = ""
  inputRectColor.classList.remove("input-padding-hex")
  

  fadeIn(modalClock)

});

closeClockButton.addEventListener('click', () =>{
  clockInput.value = ''
  fadeOut(modalClock)
})

gifMenuButton.addEventListener('click', () => {
  gifPlaceholder.textContent = "Choose your file";
  fadeIn(modalGif)

});

closeGifButton.addEventListener('click', () =>{
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
    brandInput.value = '';
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
        gifInput.value = ''
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
    const response = await fetch("https://worldtimeapi.org/api/timezone");
    const timezones = await response.json();

    // Ordena os timezones em ordem alfabética
    timezones.sort((a, b) => a.localeCompare(b));

    optionsListUTC.innerHTML = ""; // Limpa o dropdown antes de popular

    timezones.forEach(tz => {
      const timezoneLabel = tz; // Ex: "America/Sao_Paulo"

      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `<span>${timezoneLabel}</span>`;

      div.addEventListener("click", () => {
        textUTC.textContent = timezoneLabel;
        textUTC.style.color = "rgb(57, 255, 156)";
        textUTC.style.fontWeight = "500";
        optionsListUTC.style.display = "none";
        selectedUTCValue = timezoneLabel; // Salva direto o nome
      });

      optionsListUTC.appendChild(div);
    });

  } catch (error) {
    console.error("❌ Failed to fetch UTC options:", error);
    optionsListUTC.innerHTML = "<div class='option error-wifi-options'>Failed to load timezones</div>";
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
  rectHexColor = null;
  brandHeaderData = null;
  clockHeaderData = null;
  gifHeaderData = null;

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
  }
  if (hasCurrency) {
    apiData.currency = currency;
  }

  keyConfirm.textContent = formatSensitive(key, true);
  keyConfirm.style.color = esmeraldColor;
  if (currency !== "Your desired conversion") {
  currencyConfirm.textContent = currency;
  currencyConfirm.style.color = esmeraldColor;
  };
  showSucess();
  setTimeout(() => fadeOut(modalApi), 2000);
});


// BRAND
salvarBrandButton.addEventListener("click", () => {
  if (!brandInput.files || brandInput.files.length === 0) {
    return showError("Please select a .jpg file to launch your branded device.");
  }

  const file = brandInput.files[0];

  if (!file.name.toLowerCase().endsWith(".jpg")) {
    return showError("Only .jpg files are allowed for your startup brand.");
  }

  if (file.size > 40960) {
    return showError("Brand must be 40K or less.");
  }

  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  img.onload = async function () {
    URL.revokeObjectURL(objectUrl);
    if (img.width !== 100 || img.height !== 100) {
      return showError("The .jpg image must be exactly 100x100 pixels.");
    }

    try {
      brandHeaderData = await convertJPGtoHeader(file, "brand", 100, 100);
      if (brandPlaceholder.textContent !== "Choose your file") {
      uploadBrandConfirm.textContent = brandPlaceholder.textContent
      uploadBrandConfirm.style.color = esmeraldColor;
      };
      showSucess();
      setTimeout(() => fadeOut(modalBrand), 2000);
    } catch (e) {
      showError("Failed to convert brand image.");
    }
  };

  img.onerror = function () {
    URL.revokeObjectURL(objectUrl);
    showError("Error reading image.");
  };

  img.src = objectUrl;
});

// CLOCK
salvarClockButton.addEventListener("click", () => {
  const hasUTC = !!selectedUTCValue;
  const hasFile = clockInput.files && clockInput.files.length > 0;
  const hexInput = inputRectColor.value.trim();

  if (hexInput.includes("#")) {
    return showError("Do not use '#' in the HEX color. Enter only the 6 characters.");
  }

  const hexOnly = hexInput.toUpperCase();
  const hasHex = hexOnly.length === 6;

  if (hexInput.length > 0 && !hasHex) {
    return showError("HEX color must have exactly 6 characters.");
  } else if (hasHex) {
    rectHexColor = hexToRGB565(hexOnly);
    rectHexConfirm.textContent = "#" + inputRectColor.value;
    rectHexConfirm.style.color = esmeraldColor;
  }

  if (!hasUTC && !hasFile && !hasHex) {
    return showError("Please select a UTC timezone, a .jpg image, or a HEX color.");
  }

  if ((hasUTC || hasHex) && !hasFile) {
    if (textUTC.textContent !== "Your desired timezone") {
      utcConfirm.textContent = textUTC.textContent;
      utcConfirm.style.color = esmeraldColor;
    };
    showSucess();
    setTimeout(() => fadeOut(modalClock), 2000);
    return;
  }

  const file = clockInput.files[0];

  if (!file.name.toLowerCase().endsWith(".jpg")) {
    return showError("Only .jpg files are allowed for clock background.");
  } 
  if (file.size > 40960) {
    return showError("Clock background must be 40K or less.");
  }

  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  img.onload = async function () {
    URL.revokeObjectURL(objectUrl);
    if (img.width !== 240 || img.height !== 240) {
      return showError("The .jpg image must be exactly 240x240 pixels.");
    }

    try {
      clockHeaderData = await convertJPGtoHeader(file, "clockbg", 240, 240);
    
      // 🧹 Novo código: verificar tamanho do conteúdo gerado
      const contentSizeInBytes = new Blob([clockHeaderData.content]).size;
      if (contentSizeInBytes > 512000) { // por exemplo, 20 KB limite
        return showError("Clock header must be 500KB or less after conversion.");
      }
    
      if (clockPlaceholder.textContent !== "Choose your file") {
        uploadClockConfirm.textContent = clockPlaceholder.textContent;
        uploadClockConfirm.style.color = esmeraldColor;
      }
      showSucess();
      setTimeout(() => fadeOut(modalClock), 2000);
    } catch (e) {
      showError("Failed to convert clock image.");
    }
  };

  img.onerror = function () {
    URL.revokeObjectURL(objectUrl);
    showError("Error reading clock image.");
  };

  img.src = objectUrl;
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

  if (file.size > 40960) {
    return showError("GIF must be 40K or less.");
  }

  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  img.onload = async function () {
    URL.revokeObjectURL(objectUrl);
    if (img.width !== 240 || img.height !== 240) {
      return showError("GIF must be 240x240px.");
    }

    try {
      gifHeaderData = await convertGIFtoHeader(file, "animation");
      if (gifPlaceholder.textContent !== "Choose your file"){
      uploadGifConfirm.textContent = gifPlaceholder.textContent
      uploadGifConfirm.style.color = esmeraldColor;
      };
      showSucess();
      setTimeout(() => fadeOut(modalGif), 2000);
    } catch (e) {
      showError("Failed to convert gif.");
    }
  };

  img.onerror = function () {
    URL.revokeObjectURL(objectUrl);
    showError("Error reading GIF.");
  };

  img.src = objectUrl;
});

// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES

divRectHex.addEventListener('click', () => {
  hexPlaceholder.style.display = "none"
  inputRectColor.style.display = "block"
  hexText.style.display = "block"
  inputRectColor.classList.add("input-padding-hex")
  inputRectColor.focus()

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
  const titleApply = document.getElementById("title-apply"); // certifique-se do ID correto
  const baseText = "Applying";
  let dotCount = 0;

  const interval = setInterval(() => {
    dotCount = (dotCount + 1) % 4; // 0, 1, 2, 3 → zera
    titleApply.textContent = baseText + ".".repeat(dotCount);
  }, 500);
}

// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 
// CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL CONVERTION TOOL 

// BRAND E CLOCK
async function convertJPGtoHeader(inputFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = 240;
        canvas.height = 240;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 240, 240);

        const imageData = ctx.getImageData(0, 0, 240, 240).data;

        const rgb565Array = [];

        for (let i = 0; i < imageData.length; i += 4) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];

          const r5 = (r >> 3) & 0x1F;
          const g6 = (g >> 2) & 0x3F;
          const b5 = (b >> 3) & 0x1F;

          const rgb565 = (r5 << 11) | (g6 << 5) | b5;
          rgb565Array.push(`0x${rgb565.toString(16).padStart(4, '0')}`);
        }

        const lines = [];
        for (let i = 0; i < rgb565Array.length; i += 12) {
          lines.push(rgb565Array.slice(i, i + 12).join(", "));
        }

        let output = `int clockbg_width=240;\n`;
        output += `int clockbg_height=240;\n`;
        output += `const unsigned short clockbg[57600] = {\n`;
        output += lines.join(",\n");
        output += `\n};`;

        resolve({
          fileName: "clockbg.h",
          content: output
        });
      };

      img.onerror = () => reject("Erro ao carregar imagem");
      img.src = e.target.result;
    };

    reader.onerror = () => reject("Erro ao ler arquivo");
    reader.readAsDataURL(inputFile);
  });
}

// GIF
async function convertGIFtoHeader(file, variableName = "animation") {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const arrayBuffer = e.target.result;
      const byteArray = new Uint8Array(arrayBuffer);

      let output = `//\n// ${variableName}\n`;
      output += `// Data size = ${byteArray.length} bytes\n`;
      output += `//\n// GIF, Compression=LZW, Size: 240 x 240, 8-Bpp\n`;
      output += `// (frame count not extracted here)\n//\n`;
      output += `#ifndef PROGMEM\n#define PROGMEM\n#endif\n`;
      output += `const uint8_t ${variableName}[] PROGMEM = {\n`;

      const hexLines = [];
      for (let i = 0; i < byteArray.length; i += 16) {
        const line = Array.from(byteArray.slice(i, i + 16))
          .map(b => `0x${b.toString(16).padStart(2, "0")}`)
          .join(", ");
        hexLines.push(line);
      }

      output += hexLines.join(",\n") + "\n};";
      
      resolve({
        fileName: `${variableName}.h`,
        content: output
      });
    };

    reader.onerror = () => reject("Erro ao ler o arquivo .gif");
    reader.readAsArrayBuffer(file);
  });
}

function downloadHeader({ fileName, content }) {
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

  try {
    // 1️⃣ Primeiro envia clockbg
    if (clockHeaderData?.content) {
      await sendFileInParts(clockHeaderData.content, "/upload_clock_part");
    }

    // 2️⃣ Depois envia brand
    if (brandHeaderData?.content) {
      await sendFileInParts(brandHeaderData.content, "/upload_brand_part");
    }

    // 3️⃣ Depois envia gif
    if (gifHeaderData?.content) {
      await sendFileInParts(gifHeaderData.content, "/upload_gif_part");
    }

    // 4️⃣ Depois envia o restante da configuração (wifi, apiKey, currency, utc, cor)
    const config = {};
    if (wifiData?.ssid && wifiData?.password) {
      config.ssid = wifiData.ssid;
      config.password = wifiData.password;
    }
    if (apiData?.key && apiData?.currency) {
      config.apikey = apiData.key;
      config.currency = apiData.currency;
    }
    if (selectedUTCValue) {
      config.utc = selectedUTCValue;
    }
    if (rectHexColor) {
      config.color = rectHexColor;
    }

    const resConfig = await fetch("/apply_config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ config }) // mesmo vazio!
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

async function sendFileInParts(fileContent, endpoint) {
  const chunkSize = 1000;
  const totalParts = Math.ceil(fileContent.length / chunkSize);

  for (let i = 0; i < totalParts; i++) {
    const part = fileContent.slice(i * chunkSize, (i + 1) * chunkSize);
    const payload = JSON.stringify({ part, isLastPart: (i === totalParts - 1) }); // <-- 👈 ALTERADO AQUI

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload
    });

    if (!res.ok) {
      throw new Error(`Failed to send part ${i + 1}/${totalParts} to ${endpoint}`);
    }
    console.log(`✅ Parte ${i + 1}/${totalParts} enviada com sucesso`);
  }
}