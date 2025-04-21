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
const inputSenha = document.getElementById("senha")
let wifiData = {
  ssid: "",
  password: ""
};

// API 
const apiInput = document.getElementById('api');
const keyInput = document.getElementById('key');
const apiPlaceholder = document.getElementById('api-placeholder');
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

wifiMenuButton.addEventListener('click', () => {
  resetValue(inputRede)
  resetValue(inputSenha)
  inputSenha.type = "password"
  visibilitySenha.src = "https://files.catbox.moe/9ojj61.webp"
  fadeIn(modalWifi)
  
});

closeWifiButton.addEventListener('click', () =>{
    fadeOut(modalWifi)
    
})

visibilitySenha.addEventListener('click', () => {
  const isPassword = inputSenha.type === 'password';

  inputSenha.type = isPassword ? 'text' : 'password';
  visibilitySenha.src = isPassword
    ? 'https://files.catbox.moe/qflp3n.webp'
    : 'https://files.catbox.moe/9ojj61.webp';
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

clockMenuButton.addEventListener('click', () => {
  clockPlaceholder.textContent = "Choose your file";
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

// Ouvindo Change Ouvindo Change Ouvindo Change Ouvindo Change
// Ouvindo Change Ouvindo Change Ouvindo Change Ouvindo Change

document.addEventListener("DOMContentLoaded", () => {
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

});

document.addEventListener("DOMContentLoaded", () => {
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
  
  });

  document.addEventListener("DOMContentLoaded", () => {
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

carregarMoedas();

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
  setTimeout(() => fadeOut(modalWifi), 2000);
});

// API
salvarApiButton.addEventListener("click", () => {
  const key = keyInput.value.trim();
  const currency = selectedText.textContent;

  if (!key) {
    return showError("Please enter your AwesomeAPI APIkey.");
  }
  if (currency === "Your desired conversion") {
    return showError("Please select your desired conversion currency.");
  }

  apiData = { key, currency };
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
  if (!clockInput.files || clockInput.files.length === 0) {
    return showError("Please select a .jpg file for clock background.");
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

// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO
// APLICANDO APLICANDO APLICANDO APLCICANDO APLICANDO

let brandHeader = { fileName: 'brand.h', content: '...' };
let clockHeader = { fileName: 'clockbg.h', content: '...' };
let gifHeader = { fileName: 'animation.h', content: '...' };
let userConfig = {
  ssid: "MyNetwork",
  password: "12345678",
  apikey: "abc-123",
  currency: "USD"
};

buttonApply.addEventListener('click', async () => {
  fadeIn(modalApply);
  applyAnimation();

  const payload = {
    brand: brandHeader?.content || null,
    clock: clockHeader?.content || null,
    gif: gifHeader?.content || null,
    config: userConfig
  };

  try {
    const res = await fetch("/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const responseText = await res.text();
    if (res.ok) {
      showSucess();
      setTimeout(() => {
        fadeOut(modalApply)
      }, 2000)
      console.log("ESP32 response:", responseText);
    } else {
      showError("ESP32 rejected the apply request.");
      setTimeout(() => {
        fadeOut(modalApply)
      }, 2000)
    }
  } catch (e) {
    console.error("Error sending apply:", e);
    showError("Error sending apply.");
  }
});


// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES
// ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES ANIMAÇÕES

function resetValue(element) {
  element.value = ''
}

function showSucess() {
  sucessAnimation.style.display = "inline";         // mostra o vídeo
  sucessAnimation.currentTime = 0;                  // reinicia o vídeo do começo
  sucessAnimation.play();   
};

function showError(txt) {
textError.textContent = String(txt)
fadeIn(modalError)
errorAnimation.style.display = "inline";        // mostra o vídeo
errorAnimation.playbackRate = 0.8;
errorAnimation.currentTime = 0;                  // reinicia o vídeo do começo
errorAnimation.play();

let repeatCount = 1;
errorAnimation.onended = () => {
  if (repeatCount < 2) {
    repeatCount++;
    errorAnimation.currentTime = 0;
    errorAnimation.play();
  } else {
    errorAnimation.onended = null; // limpa o evento
    fadeOut(modalError);
    errorAnimation.style.display = "none";
  }
};  
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
