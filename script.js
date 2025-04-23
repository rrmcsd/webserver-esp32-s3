// ANIMAÇÕES
const sucessAnimation = document.querySelector(".sucess")
const errorAnimation = document.querySelector(".error")
const modalError = document.getElementById("modal-error")
const textError = document.getElementById("text-variant-error")
const buttonApply = document.getElementById("button-apply")
const modalApply = document.getElementById("modal-apply")
const titleApply = document.getElementById("title-apply")

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

// GIF
const gifInput = document.getElementById('gif');
const gifPlaceholder = document.getElementById('gif-placeholder');
const gifMenuButton = document.getElementById("menu-gif");
const modalGif = document.getElementById("modal-gif")
const closeGifButton = document.getElementById("close-gif");
const salvarGifButton = document.getElementById("salvar-gif")
let gifHeaderData = null;

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

  await carregarRedes();  // Agora permitido
  showSucess();
});

apiMenuButton.addEventListener('click', () => {
  selectedText.textContent = "Your desired conversion";
  selectedText.style.color = "rgba(255, 255, 255, 0.44)";
  selectedText.style.fontWeight = "400";
  selectedFlag.style.display = "none";
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
});


clockMenuButton.addEventListener('click', () => {
  clockPlaceholder.textContent = "Choose your file";
  textUTC.textContent = "Your desired timezone";
  textUTC.style.color = "rgba(255, 255, 255, 0.44)";
  textUTC.style.fontWeight = "400";
  fadeIn(modalClock)

});

closeClockButton.addEventListener('click', () =>{
  fadeOut(modalClock)
})

gifMenuButton.addEventListener('click', () => {
  gifPlaceholder.textContent = "Choose your file";
  fadeIn(modalGif)

});

closeGifButton.addEventListener('click', () =>{
  fadeOut(modalGif)
  
})

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

async function carregarRedes() {
  try {
    const res = await fetch("/scan");
    const redes = await res.json();

    const antigos = Array.from(wifisContainer.querySelectorAll("p"));

    // FadeOut + remoção suave dos antigos
    antigos.forEach((p, index) => {
      setTimeout(() => {
        fadeOut(p);
        setTimeout(() => p.remove(), 500); // remove após fade
      }, 250 * index);
    });

    // ⏳ Aguarda TODOS os antigos sumirem + 2s extras antes de mostrar os novos
    const tempoTotalParaRemover = 250 * antigos.length + 2000;

    // Adiciona os novos elementos com fadeIn sequencial
    redes.forEach((ssid, index) => {
      const p = document.createElement("p");
      p.classList.add("opcao-wifi");
      p.textContent = ssid;
      p.style.opacity = 0;

      p.addEventListener("click", () => {
        inputRede.value = ssid;
      });

      // Aguarda todo o fadeOut + delay de entrada individual
      setTimeout(() => {
        wifisContainer.appendChild(p);
        fadeIn(p);
      }, tempoTotalParaRemover + 750 * index);
    });

  } catch (e) {
    console.error("Erro ao buscar redes:", e);
    wifisContainer.innerHTML = "<p class='opcao-wifi error-wifi-options'>Error when searching for networks.</p>";
    fadeIn(wifisContainer);
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
    const response = await fetch("https://timeapi.io/api/TimeZone/AvailableTimeZones");
    const timezones = await response.json();

    optionsListUTC.innerHTML = ""; // Limpa antes
    timezones.forEach(tz => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `<span>${tz}</span>`;
      div.addEventListener("click", () => {
        textUTC.textContent = tz;
        textUTC.style.color = "rgb(57, 255, 156)";
        textUTC.style.fontWeight = "500";
        optionsListUTC.style.display = "none";
        selectedUTCValue = tz;
      });
      optionsListUTC.appendChild(div);
    });
  } catch (error) {
    console.error("❌ Failed to fetch UTC options:", error);
    optionsListUTC.innerHTML = "<div class='option error-wifi-options'>Failed to load timezones</div>";
  }
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

  wifiData = { ssid, password };
  showSucess();
  setTimeout(() => { 
    fadeOut(modalWifi)
    fadeOut(wifisContainer)
  }, 2000);
});

salvarApiButton.addEventListener("click", () => {
  const key = keyInput.value.trim();
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

  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  img.onload = async function () {
    URL.revokeObjectURL(objectUrl);
    if (img.width !== 100 || img.height !== 100) {
      return showError("The .jpg image must be exactly 100x100 pixels.");
    }

    try {
      brandHeaderData = await convertJPGtoHeader(file, "brand", 100, 100);
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

  if (!hasUTC && !hasFile) {
    return showError("Please select a UTC timezone or a .jpg image.");
  }

  if (hasUTC && !hasFile) {
    showSucess();
    setTimeout(() => fadeOut(modalClock), 2000);
    return;
  }

  const file = clockInput.files[0];

  if (!file.name.toLowerCase().endsWith(".jpg")) {
    return showError("Only .jpg files are allowed for clock background.");
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

  if (file.size > 1048576) {
    return showError("GIF must be 1MB or less.");
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

function resetValue(element) {
  element.value = ''
}

function showSucess() {
  fadeIn(sucessAnimation)
  setTimeout(() => {
      fadeOut(sucessAnimation)
  }, 3000)
};

function showError(txt) {
  textError.textContent = String(txt)
  fadeIn(modalError)
  fadeIn(errorAnimation);        // mostra o vídeo
  setTimeout(() => {
      fadeOut(modalError);
      fadeOut(errorAnimation)
  }, 4000)
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
async function convertJPGtoHeader(inputFile, variableName, width, height) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        // Redimensionar para o tamanho desejado
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height).data;

        let output = `int ${variableName}_width=${width};\n`;
        output += `int ${variableName}_height=${height};\n`;
        output += `const unsigned short ${variableName}[${width * height}] ={\n`;

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

        // Quebra em linhas de 12 valores por linha
        const lines = [];
        for (let i = 0; i < rgb565Array.length; i += 12) {
          lines.push(rgb565Array.slice(i, i + 12).join(", "));
        }

        output += lines.join(",\n") + "\n};";

        resolve({
          fileName: `${variableName}.h`,
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

// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO

buttonApply.addEventListener('click', async () => {
  fadeIn(modalApply);
  applyAnimation();

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

  const payload = {
    config: Object.keys(config).length > 0 ? config : undefined,
    brand: brandHeaderData?.content || undefined,
    clock: clockHeaderData?.content || undefined,
    gif: gifHeaderData?.content || undefined
  };

  try {
    const res = await fetch("/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const responseText = await res.text();
    if (res.ok) {
      setTimeout(() => showSucess(), 2000);
      setTimeout(() => fadeOut(modalApply), 4000);
      console.log("ESP32 response:", responseText);
    } else {
      showError("ESP32 rejected the apply request.");
      setTimeout(() => fadeOut(modalApply), 4000);
    }
  } catch (e) {
    console.error("Error sending apply:", e);
    showError("Error sending apply.");
  }
});
