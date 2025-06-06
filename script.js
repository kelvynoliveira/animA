const logos = {
  "UNP": "https://imgur.com/wXnVZm6.png",
  "UNIFACS": "https://imgur.com/qsecgEn.png",
  "USJT": "https://imgur.com/ii7VLD7.png",
  "UAM": "https://imgur.com/kCyupaH.png",
  "UNA": "https://imgur.com/es2fcNa.png",
  "FASEH": "https://imgur.com/niWbuY3.png",
  "JACOBINA": "https://imgur.com/KC2br2M.png",
  "IRECE": "https://imgur.com/KC2br2M.png",
  "BURITIS": "https://imgur.com/MGAYmV7.png",
  "UNIFG-Guanambi": "https://imgur.com/IwAQjsi.png",
  "UNIFG-São Sebastião": "https://imgur.com/IwAQjsi.png",
  "UNIFG-Brumado": "https://imgur.com/IwAQjsi.png"
};

const dados = {
  "Rio Grande do Norte": {
    marcas: {
      "UNP": { campus: "Salgado Filho", vendor: "ARUBA", aps: 92, foto: "https://i.imgur.com/IQYXEHw.jpeg",
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNP/SALGADO%20FILHO/SITE%20SURVEY%20-%20UNP%20-%20SALGADO%20FILHO.pdf?csf=1&web=1&e=NhIkKj"
      }
    }
  },
  "Bahia": {
    marcas: {
      "JACOBINA": { campus: "Jacobina", vendor: "ARUBA", aps: 39, foto: "https://i.imgur.com/LfShK9a.jpeg",
      pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/AGES/JACOBINA/AGES_JACOBINA/AGES_JACOBINA.pdf?csf=1&web=1&e=Cc2r8w"
     },
      "IRECE": { campus: "Irece", vendor: "ARUBA", aps: 20, foto: "https://i.imgur.com/EEQ3SMj.jpeg",
      pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/AGES/IRECE/AGES_IRECE%20(inspiralli)/SITE%20SURVEY%20-%20Ages_Irece.pdf?csf=1&web=1&e=a8ohrC"
     },
      "UNIFACS": { campus: "CPB", vendor: "RUCKUS", aps: 61, foto: "https://i.imgur.com/T4Odt0P.jpeg",
      pdf: ""
     },
              "UNIFG-Guanambi": { campus: "Guanambi", vendor: "ARUBA", aps: 62, foto: "https://i.imgur.com/6X1ckmn.jpeg",
      pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNIFG%20(BA)/UNIFG_GUANAMBI_SEDE/Site%20Survey%20-%20S%C3%A3o%20Sebasti%C3%A3o.pdf?csf=1&web=1&e=MwyN6G"
     },
      "UNIFG-São Sebastião": { campus: "São Sebastião", vendor: "ARUBA", aps: 34, foto: "https://i.imgur.com/1WEPLMm.jpeg",
      pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNIFG%20(BA)/UNIFG_GUANAMBI_VASCO%20DA%20GAMA/Site%20Survey%20-%20Vasco%20da%20Gama.pdf?csf=1&web=1&e=ep3533"
     },
      "UNIFG-Brumado": { campus: "Brumado", vendor: "ARUBA", aps: 24, foto: "https://imgur.com/dPrUPBq.jpeg",
      pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORDESTE/UNIFG%20(BA)/UNIFG_BRUMADO/Site%20Survey%20-%20Brumado.pdf?csf=1&web=1&e=aQOEnR"
      }
    }
  },
  "São Paulo": {
    marcas: {
      "USJT": { campus: "Cubatão", vendor: "ARUBA", aps: 20, foto: "https://i.imgur.com/bcQMmFx.jpeg",
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/SUDESTE/USJT/CUBAT%C3%83O/SAOJUDAS_CUBATAO/CUBATAO_NOVO_ARUBA.pdf?csf=1&web=1&e=HitFdk"
       },
      "UAM": { campus: "Mooca", vendor: "ARUBA", aps: 141, foto: "https://imgur.com/4beBAvq.jpeg",
        pdf: ""
       }
    }
  },
  "Minas Gerais": {
    marcas: {
      "BURITIS": { campus: "Buritis", vendor: "ARUBA", aps: 236, foto: "https://imgur.com/0m7S5NR.jpeg",
        pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/SUDESTE/UNIBH/ESTUDO_WIFI_UNIBH_V3.pdf?csf=1&web=1&e=J6CORq"
       },
      "FASEH": { campus: "Vespasiano", vendor: "ARUBA", aps: 83, foto: "https://i.imgur.com/c5yPJ29.jpeg",
      pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/SUDESTE/FASEH/FASEH_VESPASIANO/SITE%20SURVEY%20-%20Faseh.pdf?csf=1&web=1&e=z4e0gX"
       }
    }
  },
  "Pará": {
    marcas: {
      "UNA": { 
        campus: "Tucuruí",
         vendor: "ARUBA",
       aps: 13,
        foto: "https://i.imgur.com/qd0mqsb.jpeg",
         pdf: "https://animaeducacao.sharepoint.com/:b:/r/sites/OperaesTI-BRASIL/Documentos%20Compartilhados/General/0.1%20EKAHAU%20-%20PROJECTS/ESTUDOS%20PRONTOS/NORTE/UNA/TUCURU%C3%8D/UNA_TUCURUI.pdf?csf=1&web=1&e=pbetFG"
      }
    }
  }
};

const campusPinos = [
  {
    estado: "Rio Grande do Norte",
    marca: "UNP",
    campus: "Salgado Filho",
    endereco: "Av. Sen. Salgado Filho, 1610 - Lagoa Nova, Natal - RN, 59056-000",
    lat: -5.825,
    lng: -35.211
  },
  {
    estado: "Bahia",
    marca: "JACOBINA",
    campus: "Jacobina",
    endereco: "BR-324, 701 - Pedra Branca, Jacobina - BA, 44700-000",
    lat: -11.181,
    lng: -40.511
  },
  {
    estado: "Bahia",
    marca: "IRECE",
    campus: "Irecê",
    endereco: "Rua Atacadã - Irecê, BA, 44900-000",
    lat: -11.303,
    lng: -41.853
  },
  {
    estado: "Bahia",
    marca: "UNIFACS",
    campus: "CPB",
    endereco: "Av. Luís Viana Filho, 3100 - Pituaçu, Salvador - BA, 41720-200",
    lat: -12.981,
    lng: -38.456
  },
  {
    estado: "Bahia",
    marca: "UNIFG",
    campus: "Guanambi",
    endereco: "Av. Barão do Rio Branco, 459 - Centro, Guanambi - BA, 46430-000",
    lat: -14.223,
    lng: -42.779
  },
  {
    estado: "Bahia",
    marca: "UNIFG",
    campus: "São Sebastião",
    endereco: "Av. Pedro Felipe Duarte, 4911 - São Sebastião, Guanambi - BA, 46430-000",
    lat: -14.226,
    lng: -42.776
  },
  {
    estado: "Bahia",
    marca: "UNIFG",
    campus: "Brumado",
    endereco: "Brumado, BA, 46100-000",
    lat: -14.203,
    lng: -41.665
  },
  {
    estado: "São Paulo",
    marca: "USJT",
    campus: "Cubatão",
    endereco: "R. São Paulo, 328 - Jardim São Francisco, Cubatão - SP, 11500-020",
    lat: -23.891,
    lng: -46.426
  },
  {
    estado: "São Paulo",
    marca: "UAM",
    campus: "Mooca",
    endereco: "R. Dr. Almeida Lima, 1134 - Mooca, São Paulo - SP, 03101-001",
    lat: -23.553,
    lng: -46.598
  },
  {
    estado: "Minas Gerais",
    marca: "BURITIS",
    campus: "Buritis",
    endereco: "Av. Professor Mário Werneck, 1685 - Buritis, Belo Horizonte - MG, 30575-180",
    lat: -19.954,
    lng: -43.973
  },
  {
    estado: "Pará",
    marca: "UNA",
    campus: "Tucuruí",
    endereco: "Av. A, 1006 - Santa Mônica, Tucuruí - PA, 68455-150",
    lat: -3.765,
    lng: -49.678
  },
  {
    estado: "Minas Gerais",
    marca: "FASEH",
    campus: "Vespasiano",
    endereco: "R. São Paulo, 958 - Parque Jardim Alterosa, Vespasiano - MG, 33200-000",
    lat: -19.688,
    lng: -43.924
  }
];

let estadoSelecionadoLayer = null;
let geojsonLayer = null;

function exibirEstado(estado) {
  document.getElementById('estado-selecionado').textContent = estado;
  const marcas = dados[estado]?.marcas;
  if (!marcas) {
    document.getElementById('marcas-lista').innerHTML = '<p>Nenhuma marca cadastrada.</p>';
    document.getElementById('detalhes-vendor').innerHTML = '';
    return;
  }
  const lista = Object.keys(marcas).map(marca => {
    const logo = logos[marca] ? `<img src="${logos[marca]}" alt="Logo ${marca}">` : '';
    return `<button class="marca-button" onclick="exibirMarca('${estado}', '${marca}')">${logo}${marca}</button>`;
  }).join('');
  document.getElementById('marcas-lista').innerHTML = lista;
  document.getElementById('detalhes-vendor').innerHTML = '';
  document.title = `WIFI - ${estado}`;
   document.getElementById('painel-detalhes').scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
function showPDFModal(url) {
  const modal = document.createElement('div');
  modal.className = 'pdf-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">&times;</button>
      <iframe src="${url}" frameborder="0"></iframe>
    </div>
  `;
  document.body.appendChild(modal);
  
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
  });
}

function exibirMarca(estado, marca) {
  const info = dados[estado].marcas[marca];
  document.getElementById('detalhes-vendor').innerHTML = `
  <div style="background-color: var(--panel-bg); padding: 15px 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); color: var(--text-color);">
    <p><strong>Marca:</strong> ${marca}</p>
    <p><strong>Campus:</strong> ${info.campus}</p>
    <p><strong>Vendor:</strong> ${info.vendor}</p>
    <p><strong>Access Points:</strong> ${info.aps}</p>
    ${info.foto ? `<img src="${info.foto}" alt="Foto do campus" style="width:100%;max-width:300px;margin-top:10px;border-radius:6px;">` : ''}
    ${info.pdf ? `<div style='margin-top:15px; text-align:center;'>
      <a href='${info.pdf}' target='_blank' style='display:inline-block; padding:10px 20px; font-size:14px; background-color:#1565c0; color:white; border-radius:8px; text-decoration:none; box-shadow: 0 4px 6px rgba(0,0,0,0.2); transition: transform 0.2s;'>
        📄 <span style='margin-left:8px;'>Ver Survey Completo</span>
      </a>
    </div>` : ''}
  </div>
`;
}

// Configuração do tema
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  toggleBtn.classList.remove("sun", "moon");
  toggleBtn.classList.add(isDark ? "sun" : "moon");
});

// Configuração do mapa
const map = L.map('mapa-brasil').setView([-15, -55], 4);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);


// Adiciona os pinos no mapa
campusPinos.forEach(campus => {
  const logo = logos[campus.marca] ? `<img src="${logos[campus.marca]}" alt="${campus.marca}" style="width: 20px; vertical-align: middle; margin-right: 5px;">` : '';
  const popupContent = `
    <div style="font-size: 14px;">
      ${logo}<strong>${campus.marca}</strong><br>
      Campus: ${campus.campus}<br>
      Estado: ${campus.estado}
    </div>
  `;

  L.marker([campus.lat, campus.lng])
    .addTo(map)
    .bindPopup(popupContent)
    .on('click', () => exibirEstado(campus.estado));
});

// Carrega o GeoJSON dos estados
fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
  .then(res => res.json())
  .then(data => {
    geojsonLayer = L.geoJSON(data, {
      style: feature => {
        const estado = feature.properties.name;
        const hasData = dados.hasOwnProperty(estado);
        return {
          color: hasData ? '#1976d2' : '#aaa',
          weight: 1,
          fillOpacity: hasData ? 0.4 : 0.1,
          fillColor: hasData ? '#4815ef' : '#f0f0f0'
        };
      },
      onEachFeature: (feature, layer) => {
        const estado = feature.properties.name;
        layer.on('click', () => {
          // 1. Resetar todos os estados
          geojsonLayer.eachLayer(l => geojsonLayer.resetStyle(l));
        
          // 2. Limpar variável de destaque anterior
          estadoSelecionadoLayer = null;
        
          // 3. Mostrar painel do estado clicado
          exibirEstado(estado);
        
          // 4. Aplicar novo destaque
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
    }).addTo(map);
  });

function exibirTodosOsDados() {
  if (estadoSelecionadoLayer && geojsonLayer) {
    geojsonLayer.resetStyle(estadoSelecionadoLayer);
    estadoSelecionadoLayer = null;
  }
  map.setView([-15, -55], 4); // <- centro do Brasil com zoom padrão

  geojsonLayer.eachLayer(layer => {
    const estado = layer.feature.properties.name;
    if (dados.hasOwnProperty(estado)) {
      layer.setStyle({
        color: '#000',
        weight: 3,
        fillOpacity: 0.6
      });
      layer.bringToFront();
    } else {
      geojsonLayer.resetStyle(layer); // mantém padrão para estados sem dados
    }
  });

  document.getElementById('estado-selecionado').textContent = 'Todos os Estados';
  const lista = [];
  let totalAPs = 0;

  for (const estado in dados) {
    const marcas = dados[estado].marcas;
    for (const marca in marcas) {
      const info = marcas[marca];
      const logo = logos[marca] ? `<img src="${logos[marca]}" alt="Logo ${marca}" style="width: 28px; height: 28px; border-radius: 4px; margin-right: 10px;">` : '';

      lista.push(
        `<div style="display: flex; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #444; padding-bottom: 8px;">
          ${logo}
          <div>
            <strong>${marca}</strong> - ${info.campus} (${estado})<br>
            Vendor: ${info.vendor}<br>
            APs: ${info.aps}
          </div>
        </div>`
      );
      totalAPs += info.aps;
    }
  }

  document.getElementById('marcas-lista').innerHTML = '';
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