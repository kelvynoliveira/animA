import { campi } from './campi.js';

// =============================================
// CONSTANTES E CONFIGURAÇÕES
// =============================================

// Mapeamento de siglas de estados para nomes completos
const ESTADOS_MAP = {
  "RN": "Rio Grande do Norte",
  "BA": "Bahia",
  "SP": "São Paulo",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "SC": "Santa Catarina",
  "RS": "Rio Grande do Sul",
  "RJ": "Rio de Janeiro",
  "GO": "Goiás",
  "AM": "Amazonas",
  "PE": "Pernambuco",
  "PB": "Paraíba",
  "SE": "Sergipe"
};

function getFotoPath(marca, campus) {
  // Padroniza nomes removendo acentos, espaços e caracteres especiais
  const marcaFormatada = marca.toUpperCase();
  const campusFormatado = campus
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s+/g, '_') // Substitui espaços por _
    .toUpperCase();

  // Mapeamento de extensões suportadas
  const extensoes = ['.jpg', '.jpeg', '.png', '.webp'];
  
  // Caminho base
  const basePath = './IMG';

  // Verifica as extensões possíveis
  for (const ext of extensoes) {
    const caminho = `${basePath}/${marcaFormatada}/${campusFormatado}${ext}`;
    // Em produção, você verificaria se o arquivo existe
    // Aqui assumimos que existe pelo menos uma versão
    if (caminho) return caminho;
  }

  // Fallback para uma imagem padrão se não encontrar
  return './IMG/default.jpg';
}

// Dados completos das instituições (estrutura mais limpa)
const DADOS = {
  "Bahia": {
    marcas: {
      "AGES|IRECE": {
        campus: "IRECE",
        vendor: "ARUBA",
        aps: 20,
        foto: getFotoPath("AGES", "IRECE"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/AGES/IRECE/AGES_IRECE%20(inspiralli)/SITE%20SURVEY%20-%20Ages_Irece.pdf?csf=1&web=1&e=a8ohrC"
      },
      "UNIFACS|TANCREDONEVES": {
        campus: "TANCREDONEVES",
        vendor: "RUCKUS",
        aps: 61,
        foto: getFotoPath("UNIFACS", "TANCREDONEVES"),
        pdf: ""
      },
      "UNIFG|GUANAMBI": {
        campus: "GUANAMBI",
        vendor: "ARUBA",
        aps: 62,
        foto: getFotoPath("UNIFG", "GUANAMBI"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNIFG%20(BA)/UNIFG_GUANAMBI_SEDE/Site%20Survey%20-%20São%20Sebastião.pdf?csf=1&web=1&e=MwyN6G"
      },
      "UNIFG|VASCODAGAMA": {
        campus: "GUANAMBI2",
        vendor: "ARUBA",
        aps: 34,
        foto: getFotoPath("UNIFG", "VASCODAGAMA"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNIFG%20(BA)/UNIFG_GUANAMBI_VASCO%20DA%20GAMA/Site%20Survey%20-%20Vasco%20da%20Gama.pdf?csf=1&web=1&e=ep3533"
      },
      "UNIFG|BRUMADO": {
        campus: "BRUMADO",
        vendor: "ARUBA",
        aps: 24,
        foto: getFotoPath("UNIFG", "BRUMADO"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNIFG%20(BA)/UNIFG_BRUMADO/Site%20Survey%20-%20Brumado.pdf?csf=1&web=1&e=aQOEnR"
      }
    }
  },
  "São Paulo": {
    marcas: {
      "USJT|CUBATAO": {
        campus: "CUBATAO",
        vendor: "ARUBA",
        aps: 20,
        foto: getFotoPath("USJT", "CUBATAO"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/SUDESTE/USJT/CUBATÃO/SAOJUDAS_CUBATAO/CUBATAO_NOVO_ARUBA.pdf?csf=1&web=1&e=HitFdk"
      },
      "UAM|MOOCA": {
        campus: "MOOCA",
        vendor: "ARUBA",
        aps: 141,
        foto: getFotoPath("UAM", "MOOCA"),
        pdf: ""
      }
    }
  },
  "Minas Gerais": {
    marcas: {
      "UNIBH|ESTORIL": {
        campus: "ESTORIL",
        vendor: "ARUBA",
        aps: 236,
        foto: getFotoPath("UNIBH", "ESTORIL"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/SUDESTE/UNIBH/ESTUDO_WIFI_UNIBH_V3.pdf?csf=1&web=1&e=J6CORq"
      },
      "FASEH|VESPASIANO": {
        campus: "VESPASIANO",
        vendor: "ARUBA",
        aps: 83,
        foto: getFotoPath("FASEH", "VESPASIANO"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/SUDESTE/FASEH/FASEH_VESPASIANO/SITE%20SURVEY%20-%20Faseh.pdf?csf=1&web=1&e=z4e0gX"
      }
    }
  },
  "Pará": {
    marcas: {
      "UNA|TUCURUI": {
        campus: "TUCURUI",
        vendor: "ARUBA",
        aps: 13,
        foto: getFotoPath("UNA", "TUCURUI"),
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORTE/UNA/TUCURUÍ/UNA_TUCURUI.pdf?csf=1&web=1&e=pbetFG"
      }
    }
  }
};

// =============================================
// VARIÁVEIS GLOBAIS
// =============================================
let estadoSelecionadoLayer = null;
let geojsonLayer = null;
const map = L.map('mapa-brasil').setView([-15, -55], 4);

// =============================================
// FUNÇÕES PRINCIPAIS
// =============================================

/**
 * Inicializa o aplicativo
 */
function init() {
  configurarTema();
  configurarMapa();
  carregarGeoJSON();
  adicionarMarcadores();
}

/**
 * Configura o tema claro/escuro
 */
function configurarTema() {
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    toggleBtn.classList.toggle("moon", !isDark);
    toggleBtn.classList.toggle("sun", isDark);
  });
}

/**
 * Configuração básica do mapa
 */
function configurarMapa() {
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
}

/**
 * Carrega o GeoJSON dos estados brasileiros
 */
function carregarGeoJSON() {
  fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
    .then(res => res.json())
    .then(data => {
      geojsonLayer = L.geoJSON(data, {
        style: estiloEstado,
        onEachFeature: configurarInteracaoEstado
      }).addTo(map);
    });
}

/**
 * Define o estilo visual para cada estado
 */

// Função para obter o caminho da logo
function getLogoPath(marca) {
  const formatos = ['jpg', 'png', 'webp', 'jpeg'];
  const marcaFormatada = marca.toUpperCase();
  
  for (const formato of formatos) {
    const caminho = `LOGOS/${marcaFormatada}.${formato}`;
    // Em produção, verifique se o arquivo existe
    return caminho; // Assumindo que existe
  }
  
  return 'LOGOS/anima.png'; // Fallback
}

function estiloEstado(feature) {
  const estado = feature.properties.name;
  const hasData = DADOS.hasOwnProperty(estado);
  
  return {
    color: hasData ? '#1976d2' : '#aaa',
    weight: 1,
    fillOpacity: hasData ? 0.4 : 0.1,
    fillColor: hasData ? '#4815ef' : '#f0f0f0'
  };
}

/**
 * Configura interações para cada estado no mapa
 */
function configurarInteracaoEstado(feature, layer) {
  const estado = feature.properties.name;
  
  layer.on('click', () => {
    geojsonLayer.eachLayer(l => geojsonLayer.resetStyle(l));
    estadoSelecionadoLayer = null;
    
    exibirEstado(estado);
    
    estadoSelecionadoLayer = layer;
    layer.setStyle({
      color: '#000000',
      weight: 3,
      fillOpacity: 0.6
    });
    layer.bringToFront();
    map.fitBounds(layer.getBounds());
  });
}

/**
 * Adiciona marcadores para cada campus no mapa
 */
function adicionarMarcadores() {
  campi.forEach(campus => {
    const estadoCompleto = ESTADOS_MAP[campus.Estado] || campus.Estado;
    const idMarcador = `${campus.Marca}|${campus.Campus}`;
    
    if (DADOS[estadoCompleto]?.marcas[idMarcador]) {
      const logoPath = getLogoPath(campus.Marca);
      const logo = `<img src="${logoPath}" alt="${campus.Marca}" class="logo-marcador">`;
      
      const popupContent = `
        <div class="popup-content">
          ${logo}<strong>${campus.Marca}</strong><br>
          Campus: ${formatarNome(campus.Campus)}<br>
          Cidade: ${campus.Cidade}<br>
          Estado: ${estadoCompleto}
        </div>
      `;

      L.marker([campus.Latitude, campus.Longitude])
        .addTo(map)
        .bindPopup(popupContent)
        .on('click', () => exibirEstado(estadoCompleto));
    }
  });
}


/**
 * Exibe as marcas de um estado específico
 */
function exibirEstado(estado) {
  document.getElementById('estado-selecionado').textContent = estado;
  document.title = `WIFI - ${estado}`;
  
  const marcas = DADOS[estado]?.marcas;
  if (!marcas) {
    document.getElementById('marcas-lista').innerHTML = '<p>Nenhuma marca cadastrada.</p>';
    document.getElementById('detalhes-vendor').innerHTML = '';
    return;
  }

  const lista = Object.keys(marcas).map(marca => {
    const logoPath = getLogoPath(marca.split('|')[0]);
const logo = `<img src="${logoPath}"...`;
    return `
      <button class="marca-button" onclick="exibirMarca('${estado}', '${marca}')">
        ${logo}${marca.split('|')[0]}
      </button>
    `;
  }).join('');

  document.getElementById('marcas-lista').innerHTML = lista;
  document.getElementById('detalhes-vendor').innerHTML = '';
  
  // Rolagem suave para o topo
  document.getElementById('painel-detalhes').scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Exibe os detalhes de uma marca específica
 */
function exibirMarca(estado, marca) {
  const info = DADOS[estado].marcas[marca];
  const [marcaNome, campusNome] = marca.split('|');
  const nomeFormatado = formatarNome(campusNome);
  const logoPath = getLogoPath(marcaNome);
  const fotoPath = getFotoPath(marcaNome, campusNome);

  document.getElementById('detalhes-vendor').innerHTML = `
    <div class="detalhes-container">
      <div class="cabecalho-marca">
        <img src="${logoPath}" alt="Logo ${marcaNome}" class="logo-detalhe">
        <h3>${marcaNome} - ${nomeFormatado}</h3>
      </div>
      <div class="info-marca">
        <p><strong>Vendor:</strong> ${info.vendor}</p>
        <p><strong>APs:</strong> ${info.aps}</p>
      </div>
      <div class="foto-container">
        <img src="${fotoPath}" alt="Foto do campus ${campusNome}" class="foto-campus"
             onerror="this.src='./IMG/default.jpg'">
      </div>
      ${info.pdf ? `
      <div class="pdf-link-container">
        <a href="${info.pdf}" target="_blank" class="pdf-button" 
           onclick="trackPDFOpen('${estado}','${marca}')">
          📄 Ver Survey Completo
        </a>
      </div>` : ''}
    </div>
  `;
}

/**
 * Formata nomes em uppercase para formato legível
 */
function formatarNome(nome) {
  return nome.toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Exibe todos os dados consolidados
 */
function exibirTodosOsDados() {
  if (estadoSelecionadoLayer && geojsonLayer) {
    geojsonLayer.resetStyle(estadoSelecionadoLayer);
    estadoSelecionadoLayer = null;
  }
  
  map.setView([-15, -55], 4);
  destacarEstadosComDados();
  
  document.getElementById('estado-selecionado').textContent = 'Todos os Estados';
  document.getElementById('marcas-lista').innerHTML = '';
  
  const { lista, totalAPs } = gerarListaConsolidada();
  document.getElementById('detalhes-vendor').innerHTML = `
    <div class="total-container">
      <div class="total-card">
        <div class="total-icon">📶</div>
        <div>
          <div class="total-label">Total de Access Points</div>
          <div class="total-value">${totalAPs}</div>
        </div>
      </div>
      ${lista.join('')}
    </div>
  `;
}

/**
 * Destaca estados que possuem dados
 */
function destacarEstadosComDados() {
  geojsonLayer.eachLayer(layer => {
    const estado = layer.feature.properties.name;
    if (DADOS.hasOwnProperty(estado)) {
      layer.setStyle({
        color: '#000',
        weight: 3,
        fillOpacity: 0.6
      });
      layer.bringToFront();
    } else {
      geojsonLayer.resetStyle(layer);
    }
  });
}

/**
 * Gera a lista consolidada de todas as marcas
 */

function gerarListaConsolidada() {
  let lista = [];
  let totalAPs = 0;

  for (const estado in DADOS) {
    for (const marca in DADOS[estado].marcas) {
      const info = DADOS[estado].marcas[marca];
      const marcaNome = marca.split('|')[0];
      const logoPath = getLogoPath(marcaNome);
      const logo = `<img src="${logoPath}" alt="Logo ${marcaNome}" class="logo-consolidado">`;
      
      lista.push(`
        <div class="item-consolidado">
          ${logo}
          <div>
            <strong>${marcaNome}</strong> - ${formatarNome(info.campus)} (${estado})<br>
            Vendor: ${info.vendor}<br>
            APs: ${info.aps}
          </div>
        </div>
      `);
      totalAPs += info.aps;
    }
  }

  return { lista, totalAPs };
}
// Função opcional para analytics
function trackPDFOpen(estado, marca) {
  console.log(`PDF aberto: ${marca} - ${estado}`);
  // Adicione aqui tracking (Google Analytics, etc)
}

// Inicializa o aplicativo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);