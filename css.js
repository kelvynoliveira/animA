const dados = {
  'São Paulo': {
    marcas: {
      'Anhembi Morumbi': { vendor: 'Aruba', aps: 120 },
      'São Judas': { vendor: 'Ruckus', aps: 80 }
    }
  },
  'Minas Gerais': {
    marcas: {
      'UNA': { vendor: 'Aruba', aps: 65 }
    }
  }
};

function exibirEstado(estado) {
  document.getElementById('estado-selecionado').textContent = estado;
  const marcas = dados[estado].marcas;
  const lista = Object.keys(marcas)
    .map(marca => `<button onclick="exibirMarca('${estado}', '${marca}')">${marca}</button>`)
    .join('');
  document.getElementById('marcas-lista').innerHTML = lista;
}

function exibirMarca(estado, marca) {
  const info = dados[estado].marcas[marca];
  document.getElementById('detalhes-vendor').innerHTML =
    `<p><strong>Vendor:</strong> ${info.vendor}</p>
     <p><strong>APs:</strong> ${info.aps}</p>`;
}
