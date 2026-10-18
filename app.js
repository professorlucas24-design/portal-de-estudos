
/*
  PORTAL DE ESTUDOS
  Professor Lucas Souza
  Arquivo responsável pelo funcionamento do portal.
*/

(() => {
  "use strict";

  const dados = window.PORTAL_DADOS;
  const app = document.getElementById("app");
  const ano = document.getElementById("year");

  if (ano) {
    ano.textContent = `© ${new Date().getFullYear()}`;
  }

  // Ícones utilizados no portal.
  const icones = {
    livro: "📘",
    video: "▶",
pdf: "PDF",
    faculdade: "🏛",
    turma: "👥",
    calendario: "📅",
    dica: "✦"
  };

  // Cria elementos de maneira segura.
  function elemento(tag, classe = "", texto = null) {
    const item = document.createElement(tag);

    if (classe) {
      item.className = classe;
    }

    if (texto !== null && texto !== undefined) {
      item.textContent = String(texto);
    }

    return item;
  }

  function adicionar(pai, ...filhos) {
    filhos.forEach(filho => pai.appendChild(filho));
    return pai;
  }

  function icone(nome) {
    return elemento("span", "icon", icones[nome] || "✦");
  }

  function selo(texto) {
    return elemento("span", "chip", texto);
  }

  // Informações do professor e fotografia.
  function perfil() {
    const caixa = elemento("div", "profile-box");
    const foto = elemento("div", "profile-photo");
    const origem = dados.professor.foto;

    if (origem) {
      const imagem = elemento("img");
      imagem.src = origem;
      imagem.alt = "Foto do Professor Lucas Souza";

      imagem.onerror = () => {
        foto.replaceChildren(
          elemento("span", "initials", "LS")
        );
      };

      foto.appendChild(imagem);
    } else {
      foto.appendChild(
        elemento("span", "initials", "LS")
      );
    }

    const informacoes = elemento("div", "profile-copy");

    adicionar(
      informacoes,
      elemento(
        "span",
        "profile-kicker",
        "RESPONSÁVEL PELO MATERIAL"
      ),
      elemento(
        "strong",
        "profile-name",
        dados.professor.titulo
      ),
      elemento(
        "span",
        "profile-qualifications",
        dados.professor.resumo
      )
    );

    return adicionar(caixa, foto, informacoes);
  }

  // Cabeçalho azul principal.
  function cabecalho(titulo, descricao, turma = null) {
    const area = elemento("section", "hero");
    const conteudo = elemento("div", "hero-content");
    const esquerda = elemento("div", "hero-left");

    const etiqueta = elemento("div", "hero-flag");

    adicionar(
      etiqueta,
      elemento("span", "hero-flag-dot"),
      elemento(
        "span",
        "",
        turma ? "ESPAÇO DA TURMA" : "PORTAL DE APRENDIZAGEM"
      )
    );

    adicionar(
      esquerda,
      etiqueta,
      elemento("h1", "hero-title", titulo),
      elemento("p", "hero-lead", descricao)
    );

    if (turma) {
      const selos = elemento("div", "hero-chips");

      adicionar(
        selos,
        selo(turma.curso),
        selo(turma.turma)
      );

      esquerda.appendChild(selos);
    }

    const arte = elemento("div", "hero-art");
    const circulo = elemento("div", "hero-circle");
    const interior = elemento("div", "hero-circle-inner");

    const livro = elemento("div", "hero-book");
    livro.innerHTML = `
  <svg
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 108px; height: 108px; display: block;"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bookStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#dff7ff"/>
        <stop offset="100%" stop-color="#7fd8ff"/>
      </linearGradient>

      <linearGradient id="pageFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(173,232,255,0.20)"/>
        <stop offset="100%" stop-color="rgba(77,182,255,0.06)"/>
      </linearGradient>

      <linearGradient id="nodeStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#9ee9ff"/>
        <stop offset="100%" stop-color="#2fc7ff"/>
      </linearGradient>

      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- brilho central -->
    <circle cx="80" cy="84" r="44" fill="#3dbbff" opacity="0.08"/>
    <circle cx="80" cy="84" r="30" fill="#68d4ff" opacity="0.08"/>

    <!-- feixes / conexões subindo -->
    <g stroke="url(#nodeStroke)" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.95">
      <path d="M80 86 L80 54" filter="url(#softGlow)"/>
      <path d="M80 74 L58 60" filter="url(#softGlow)"/>
      <path d="M80 74 L102 60" filter="url(#softGlow)"/>
      <path d="M80 62 L44 50" filter="url(#softGlow)"/>
      <path d="M80 62 L116 50" filter="url(#softGlow)"/>
      <path d="M58 60 L44 50" opacity="0.65"/>
      <path d="M102 60 L116 50" opacity="0.65"/>
      <path d="M58 60 L80 54" opacity="0.55"/>
      <path d="M102 60 L80 54" opacity="0.55"/>
    </g>

    <!-- nós -->
    <g fill="#9ee9ff" stroke="#dff7ff" stroke-width="1.5">
      <circle cx="80" cy="54" r="4.5" filter="url(#softGlow)"/>
      <circle cx="58" cy="60" r="3.8" filter="url(#softGlow)"/>
      <circle cx="102" cy="60" r="3.8" filter="url(#softGlow)"/>
      <circle cx="44" cy="50" r="3.6" filter="url(#softGlow)"/>
      <circle cx="116" cy="50" r="3.6" filter="url(#softGlow)"/>
    </g>

    <!-- partículas -->
    <g fill="#8be5ff" opacity="0.85">
      <circle cx="66" cy="46" r="1.8"/>
      <circle cx="74" cy="42" r="1.6"/>
      <circle cx="90" cy="43" r="1.8"/>
      <circle cx="96" cy="49" r="1.5"/>
      <circle cx="52" cy="70" r="1.4"/>
      <circle cx="108" cy="72" r="1.4"/>
    </g>

    <!-- livro -->
    <g transform="translate(0,4)">
      <!-- página esquerda -->
      <path
        d="M80 104
           C71 95, 56 90, 36 92
           L36 62
           C55 60, 70 65, 80 74
           Z"
        fill="url(#pageFill)"
        stroke="url(#bookStroke)"
        stroke-width="3"
        stroke-linejoin="round"
      />

      <!-- página direita -->
      <path
        d="M80 104
           C89 95, 104 90, 124 92
           L124 62
           C105 60, 90 65, 80 74
           Z"
        fill="url(#pageFill)"
        stroke="url(#bookStroke)"
        stroke-width="3"
        stroke-linejoin="round"
      />

      <!-- centro do livro -->
      <path
        d="M80 74 L80 104"
        stroke="url(#bookStroke)"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- linhas das páginas -->
      <path d="M48 72 C58 71, 66 73, 74 78" stroke="#8fe5ff" stroke-width="1.6" opacity="0.75" fill="none"/>
      <path d="M86 78 C94 73, 102 71, 112 72" stroke="#8fe5ff" stroke-width="1.6" opacity="0.75" fill="none"/>

      <!-- base do livro -->
      <path
        d="M34 92
           C48 90, 64 94, 80 104
           C96 94, 112 90, 126 92"
        stroke="#a8edff"
        stroke-width="2.4"
        stroke-linecap="round"
        fill="none"
        opacity="0.95"
      />
    </g>
  </svg>
`;

    adicionar(
      interior,
      livro,
      elemento(
        "span",
        "hero-art-caption",
        "EDUCAÇÃO • CONHECIMENTO • TECNOLOGIA"
      )
    );

    circulo.appendChild(interior);
    arte.appendChild(circulo);

    adicionar(conteudo, esquerda, arte);
    area.appendChild(conteudo);

    return area;
  }

  // Títulos das seções.
  function tituloSecao(etiqueta, titulo, descricao) {
    const area = elemento("div", "section-head");

    return adicionar(
      area,
      elemento("span", "eyebrow", etiqueta),
      elemento("h2", "section-title", titulo),
      elemento("p", "section-description", descricao)
    );
  }

  // Destaque da instituição, disciplina e turma.
  function identificacao(turma) {
    const area = elemento("section", "turma-highlight");
    const grade = elemento("div", "turma-grid");

    const itens = [
      {
        titulo: "FACULDADE",
        valor: turma.instituicao,
        simbolo: "faculdade"
      },
      {
        titulo: "DISCIPLINA",
        valor: turma.disciplina,
        simbolo: "livro"
      },
      {
        titulo: "TURMA",
        valor: turma.turma,
        simbolo: "turma"
      }
    ];

    itens.forEach(item => {
      const cartao = elemento("div", "turma-card");
      const cabeca = elemento("div", "turma-card-head");

      adicionar(
        cabeca,
        icone(item.simbolo),
        elemento("span", "", item.titulo)
      );

      adicionar(
        cartao,
        cabeca,
        elemento("strong", "turma-card-value", item.valor)
      );

      grade.appendChild(cartao);
    });

    area.appendChild(grade);
    return area;
  }

  // Botões para as pastas do Google Drive.
  function botaoMaterial(titulo, descricao, link, tipo) {
    const disponivel =
      typeof link === "string" &&
      /^https:\/\/.+/i.test(link);

    const principal = tipo === "video";

    const classe = [
      "resource-card",
      principal ? "resource-primary" : "resource-secondary",
      disponivel ? "" : "resource-pending"
    ].join(" ");

    const botao = elemento(
      disponivel ? "a" : "div",
      classe
    );

    if (disponivel) {
      botao.href = link;
      botao.target = "_blank";
      botao.rel = "noopener noreferrer";
    }

    const simbolo = elemento("div", "resource-icon");
    simbolo.appendChild(
      icone(principal ? "video" : "pdf")
    );

    const textos = elemento("div", "resource-copy");

    adicionar(
      textos,
      elemento("strong", "resource-title", titulo),
      elemento(
        "span",
        "resource-desc",
        disponivel
          ? descricao
          : "Pasta do Google Drive ainda não vinculada."
      )
    );

    const final = elemento("div", "resource-trailing");

    final.appendChild(
      disponivel
        ? elemento("span", "icon", "→")
        : elemento("span", "pending-tag", "Em breve")
    );

    return adicionar(botao, simbolo, textos, final);
  }

  // Cartões dos encontros da disciplina.
  function cartaoEncontro(encontro) {
    const cartao = elemento("article", "meeting-card");
    const numero = elemento(
      "div",
      "meeting-number",
      encontro.numero
    );

    const conteudo = elemento("div", "meeting-copy");
    const data = elemento("div", "meeting-meta");

    adicionar(
      data,
      icone("calendario"),
      elemento("span", "", encontro.data)
    );

    adicionar(
      conteudo,
      data,
      elemento("h3", "meeting-title", encontro.nome),
      elemento("p", "meeting-topics", encontro.topicos),
      elemento("span", "meeting-label", encontro.videos)
    );

    return adicionar(cartao, numero, conteudo);
  }

  // Página inicial do professor.
  function paginaInicial() {
    document.title =
      "Portal de Estudos | Professor Lucas Souza";

    app.appendChild(
      cabecalho(
        "Portal de Estudos",
        "Um ambiente de aprendizagem criado pelo " +
        "Professor Lucas Souza para compartilhar " +
        "videoaulas e materiais de apoio."
      )
    );

    const area = elemento("section", "content-region");
    const boasVindas = elemento("div", "home-welcome");
    const simbolo = elemento("div", "home-welcome-icon");

    
simbolo.innerHTML = `
  <svg width="36" height="36" viewBox="0 0 24 24"
       fill="none" stroke="#1769CE"
       stroke-width="1.7"
       stroke-linecap="round"
       stroke-linejoin="round">
    <path d="M2 9l10-5 10 5-10 5-10-5z"/>
    <path d="M6 11v5c0 2 3 4 6 4s6-2 6-4v-5"/>
    <path d="M22 9v6"/>
  </svg>
`;


    const texto = elemento("div", "home-welcome-copy");

    adicionar(
      texto,
      elemento("span", "eyebrow", "BEM-VINDO!"),
      elemento(
        "h2",
        "home-welcome-title",
        "Seu espaço de aprendizagem"
      ),
      elemento(
        "p",
        "",
        "Este portal reúne materiais complementares " +
        "das disciplinas ministradas pelo professor. " +
        "Cada turma possui seu próprio link de acesso."
      )
    );

    adicionar(boasVindas, simbolo, texto);

    const aviso = elemento("div", "access-note");

    adicionar(
      aviso,
      icone("dica"),
      elemento(
        "span",
        "",
        "Para acessar sua disciplina, utilize o link " +
        "compartilhado no grupo da sua turma."
      )
    );

    adicionar(area, boasVindas, aviso, perfil());
    app.appendChild(area);
  }

  // Página específica de uma turma.
  function paginaDaTurma(turma) {
    document.title =
      `${turma.disciplina} | Professor Lucas Souza`;

    app.appendChild(
      cabecalho(
        turma.disciplina,
        turma.apresentacao,
        turma
      )
    );

    const area = elemento("div", "content-region");
    const professor = elemento("div", "class-info");

    adicionar(
      professor,
      perfil(),
      selo(turma.modalidade)
    );

    area.appendChild(professor);
    area.appendChild(identificacao(turma));

    area.appendChild(
      tituloSecao(
        "BIBLIOTECA DIGITAL",
        "Videoaulas e materiais de estudo",
        "Acesse os conteúdos complementares " +
        "disponibilizados para sua turma."
      )
    );

    const botoes = elemento("div", "resource-grid");

    adicionar(
      botoes,
      botaoMaterial(
        "Assistir às videoaulas",
        "Clique para abrir a pasta de vídeos",
        turma.pastaVideos,
        "video"
      ),
      botaoMaterial(
        "Materiais em PDF",
        "Apostilas, atividades e leituras",
        turma.pastaPDFs,
        "pdf"
      )
    );

    area.appendChild(botoes);

    const aviso = elemento("div", "support-note");

    adicionar(
      aviso,
      icone("dica"),
      elemento(
        "span",
        "",
        "Aproveite os materiais para revisar " +
        "os assuntos estudados nos encontros presenciais."
      )
    );

    area.appendChild(aviso);

    area.appendChild(
      tituloSecao(
        "ORGANIZAÇÃO DA DISCIPLINA",
        "Nossos encontros",
        "Confira os conteúdos de cada encontro."
      )
    );

    const encontros = elemento("div", "meetings");

    turma.encontros.forEach(encontro => {
      encontros.appendChild(
        cartaoEncontro(encontro)
      );
    });

    area.appendChild(encontros);

    const observacao = elemento("div", "bottom-note");

    adicionar(
      observacao,
      elemento(
        "strong",
        "",
        "Aprender é um processo contínuo."
      ),
      elemento(
        "span",
        "",
        "Estes materiais complementam os encontros " +
        "presenciais e não substituem as avaliações " +
        "da plataforma oficial da instituição."
      )
    );

    area.appendChild(observacao);
    app.appendChild(area);
  }

  // Identifica qual turma foi acessada pelo link.
  const parametros = new URLSearchParams(
    window.location.search
  );

  const codigoTurma = parametros.get("turma");

  if (!codigoTurma) {
    paginaInicial();
  } else if (
    dados.turmas &&
    Object.prototype.hasOwnProperty.call(
      dados.turmas,
      codigoTurma
    )
  ) {
    paginaDaTurma(dados.turmas[codigoTurma]);
  } else {
    const erro = elemento("div", "error-state");

    adicionar(
      erro,
      elemento("h1", "", "Turma não encontrada"),
      elemento(
        "p",
        "",
        "Confira o endereço recebido ou solicite " +
        "um novo link ao professor."
      )
    );

    const voltar = elemento(
      "a",
      "return-link",
      "Voltar ao portal"
    );

    voltar.href = "./";
    erro.appendChild(voltar);

    app.appendChild(erro);
  }

})();



/* BIBLIOTECA DE VIDEOAULAS — PROFESSOR LUCAS SOUZA */
/* Cole este bloco APÓS o código que já existe no app.js */

(() => {
  const params = new URLSearchParams(location.search);
  const codigoTurma = params.get("turma");

  if (!codigoTurma) return;

  const turma = window.PORTAL_DADOS?.turmas?.[codigoTurma];
  if (!turma) return;

  // Faz o botão azul abrir a biblioteca interna.
  const botaoPrincipal = document.querySelector(".resource-primary");

  if (botaoPrincipal) {
    botaoPrincipal.style.cursor = "pointer";

    botaoPrincipal.addEventListener("click", evento => {
      evento.preventDefault();

      const destino = new URL(location.href);
      destino.searchParams.set("pagina", "videos");

      location.href = destino.href;
    });

    if (botaoPrincipal.tagName !== "A") {
      botaoPrincipal.tabIndex = 0;
      botaoPrincipal.setAttribute("role", "button");

      botaoPrincipal.addEventListener("keydown", evento => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          botaoPrincipal.click();
        }
      });
    }
  }

  if (params.get("pagina") !== "videos") return;

  // Títulos iniciais. Os links serão cadastrados no dados.js.
  const titulosPadrao = [
    { titulo: "A Sociologia e a Educação", tema: "Tema 1", link: "" },
    { titulo: "A Sociologia da Educação", tema: "Tema 2", link: "" },
    { titulo: "Sociologia no Brasil e Educação e Família", tema: "Temas 3 e 4", link: "" },
    { titulo: "Infância, Juventude e a Escola", tema: "Temas 5 e 6", link: "" },
    { titulo: "Controle Social e Desvio Social", tema: "Temas 7 e 8", link: "" }
  ];

  const videos = Array.isArray(turma.videoaulas)
    && turma.videoaulas.length
    ? turma.videoaulas
    : titulosPadrao;

  function proteger(texto) {
    return String(texto ?? "").replace(/[&<>"']/g, caractere => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);
  }

  function obterIdDrive(link) {
    const url = String(link || "");
    const resultado = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
      || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

    return resultado ? resultado[1] : null;
  }

  const estilo = document.createElement("style");
  estilo.textContent = `
    .biblioteca {
      max-width: 1180px;
      margin: 0 auto;
      padding: 34px 20px 75px;
    }

    .biblioteca-voltar {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #1769c9;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      margin-bottom: 26px;
    }

    .biblioteca-cabecalho {
      background: linear-gradient(120deg, #0a2342, #1555a2);
      color: white;
      padding: 34px;
      border-radius: 22px;
      margin-bottom: 25px;
    }

    .biblioteca-cabecalho h1 {
      font-size: clamp(26px, 4vw, 38px);
      margin: 9px 0 13px;
    }

    .biblioteca-cabecalho p {
      color: #d7eaff;
      line-height: 1.65;
      margin: 0;
    }

    .biblioteca-etiqueta {
      font-size: 11px;
      color: #9cd0ff;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .biblioteca-grade {
      display: grid;
      grid-template-columns: minmax(0, 1.65fr) minmax(280px, 1fr);
      gap: 20px;
      align-items: start;
    }

    .biblioteca-player,
    .biblioteca-lista {
      background: white;
      border: 1px solid #dce7f3;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 8px 25px rgba(15, 65, 120, .05);
    }

    .biblioteca-tela {
      background: #0b1e34;
      aspect-ratio: 16 / 9;
      border-radius: 13px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #dcecff;
      padding: 18px;
    }

    .biblioteca-tela iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }

    .biblioteca-placeholder {
      line-height: 1.6;
      font-size: 14px;
    }

    .biblioteca-player h2 {
      font-size: 20px;
      margin: 19px 0 8px;
    }

    .biblioteca-player p,
    .biblioteca-lista > p {
      color: #63768c;
      font-size: 13px;
      line-height: 1.6;
    }

    .biblioteca-lista h2 {
      font-size: 20px;
      margin: 2px 0 7px;
    }

    .biblioteca-item {
      display: flex;
      align-items: center;
      gap: 13px;
      width: 100%;
      background: #f5f9ff;
      border: 1px solid #e0eaf5;
      border-radius: 13px;
      padding: 14px;
      margin-top: 10px;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      color: #153454;
      transition: .2s;
    }

    .biblioteca-item:hover {
      background: #eaf4ff;
      border-color: #8dc2ff;
    }

    .biblioteca-item.ativo {
      background: #e7f2ff;
      border-color: #1877f2;
      box-shadow: inset 3px 0 #1877f2;
    }

    .biblioteca-numero {
      background: #1769ce;
      color: white;
      width: 37px;
      height: 37px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex: none;
    }

    .biblioteca-item strong {
      display: block;
      font-size: 13px;
      margin-bottom: 5px;
    }

    .biblioteca-item small {
      font-size: 12px;
      color: #63768c;
    }

    .biblioteca-alternativo {
      margin-top: 22px;
      padding: 17px;
      border-radius: 15px;
      background: #eef6ff;
      border: 1px solid #d7e9ff;
    }

    .biblioteca-alternativo strong {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .biblioteca-alternativo p {
      font-size: 12px;
      color: #63768c;
      line-height: 1.5;
      margin: 0 0 14px;
    }

    .biblioteca-link {
      display: block;
      padding: 13px;
      background: linear-gradient(120deg, #2588ff, #1357b5);
      border-radius: 11px;
      color: white;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      font-size: 13px;
    }

    .biblioteca-link:hover {
      filter: brightness(1.09);
    }

    @media (max-width: 850px) {
      .biblioteca-grade {
        grid-template-columns: 1fr;
      }

      .biblioteca-cabecalho {
        padding: 25px;
      }
    }
  `;

  document.head.appendChild(estilo);

  const principal = document.getElementById("app");
  principal.replaceChildren();

  const urlVoltar = new URL(location.href);
  urlVoltar.searchParams.delete("pagina");

  const biblioteca = document.createElement("div");
  biblioteca.className = "biblioteca";

  biblioteca.innerHTML = `
    <a class="biblioteca-voltar" href="${proteger(urlVoltar.href)}">
      ← Voltar à disciplina
    </a>

    <section class="biblioteca-cabecalho">
      <span class="biblioteca-etiqueta">PORTAL DE ESTUDOS</span>
      <h1>Biblioteca de Videoaulas</h1>
      <p>
        ${proteger(turma.disciplina)}
        • ${proteger(turma.instituicao)}
        • ${proteger(turma.turma)}
      </p>
    </section>

    <div class="biblioteca-grade">

      <section class="biblioteca-player">
        <div class="biblioteca-tela" id="telaVideo">
          <div class="biblioteca-placeholder">
            ▶<br>
            Escolha uma videoaula para começar.
          </div>
        </div>
        <h2 id="tituloVideo">Selecione um conteúdo</h2>
        <p id="descricaoVideo">
          Assista aos conteúdos complementares da disciplina.
        </p>
      </section>

      <section class="biblioteca-lista">
        <h2>Suas videoaulas</h2>
        <p>Escolha o assunto que deseja estudar.</p>

        <div id="listaVideoaulas"></div>

        <div class="biblioteca-alternativo">
          <strong>Problemas para assistir?</strong>
          <p>
            Caso o vídeo não carregue no navegador,
            você pode acessar os arquivos pelo Google Drive.
          </p>

          <a class="biblioteca-link"
             id="abrirPastaDrive"
             target="_blank"
             rel="noopener noreferrer">
            ↗ Se o vídeo não abrir, clique aqui
          </a>
        </div>
      </section>

    </div>
  `;

  principal.appendChild(biblioteca);

  const lista = document.getElementById("listaVideoaulas");
  const tela = document.getElementById("telaVideo");
  const titulo = document.getElementById("tituloVideo");
  const descricao = document.getElementById("descricaoVideo");
  const alternativa = document.getElementById("abrirPastaDrive");

  if (turma.pastaVideos) {
    alternativa.href = turma.pastaVideos;
  } else {
    alternativa.removeAttribute("href");
    alternativa.textContent = "Pasta do Drive ainda não cadastrada";
  }

  videos.forEach((video, indice) => {
    const item = document.createElement("button");

    item.type = "button";
    item.className = "biblioteca-item";

    const numero = document.createElement("span");
    numero.className = "biblioteca-numero";
    numero.textContent = String(indice + 1).padStart(2, "0");

    const texto = document.createElement("span");

    const nome = document.createElement("strong");
    nome.textContent = video.titulo || `Videoaula ${indice + 1}`;

    const tema = document.createElement("small");
    tema.textContent = video.tema || "Material complementar";

    texto.append(nome, tema);
    item.append(numero, texto);
    lista.appendChild(item);

    item.addEventListener("click", () => {
      document.querySelectorAll(".biblioteca-item")
        .forEach(botao => botao.classList.remove("ativo"));

      item.classList.add("ativo");

      titulo.textContent = video.titulo || "Videoaula";
      descricao.textContent = video.tema || "Material complementar";

      const id = obterIdDrive(video.link);

      tela.replaceChildren();

      if (id) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://drive.google.com/file/d/${id}/preview`;
        iframe.title = titulo.textContent;
        iframe.allow = "autoplay; fullscreen";
        iframe.setAttribute("allowfullscreen", "");
        tela.style.padding = "0";
        tela.appendChild(iframe);
      } else {
        const aviso = document.createElement("div");
        aviso.className = "biblioteca-placeholder";
        aviso.textContent =
          "O link desta videoaula ainda será cadastrado.";
        tela.style.padding = "18px";
        tela.appendChild(aviso);
      }
    });
  });
})();



// ==========================================
// BIBLIOTECA DE PDFs - PROFESSOR LUCAS SOUZA
// ==========================================

(() => {
  const parametros = new URLSearchParams(window.location.search);
  const codigoTurma = parametros.get("turma");
  const turma = window.PORTAL_DADOS?.turmas?.[codigoTurma];

  if (!turma) return;

  // Abre a biblioteca de PDFs dentro do portal
  const botaoPDF = [...document.querySelectorAll("a, button")]
    .find(elemento =>
      elemento.textContent.trim().includes("Materiais em PDF") ||
      (elemento.tagName === "A" &&
       elemento.href === turma.pastaPDFs)
    );

  if (botaoPDF) {
    botaoPDF.addEventListener("click", evento => {
      evento.preventDefault();
      evento.stopImmediatePropagation();

      const endereco = new URL(window.location.href);
      endereco.searchParams.set("pagina", "pdfs");
      window.location.href = endereco.toString();
    }, true);
  }

  if (parametros.get("pagina") !== "pdfs") return;

  const app = document.querySelector("#app");
  if (!app) return;

  const estilo = document.createElement("style");

  estilo.textContent = `
    .pdf-biblioteca {
      max-width: 1150px;
      margin: 30px auto;
      padding: 20px;
      color: #173456;
    }

    .pdf-voltar {
      background: transparent;
      border: 1px solid #b8cfe8;
      color: #174c85;
      padding: 11px 18px;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 22px;
      font-weight: 600;
    }

    .pdf-cabecalho {
      background: linear-gradient(120deg, #113c70, #1876bf);
      color: white;
      border-radius: 16px;
      padding: 26px;
      margin-bottom: 22px;
    }

    .pdf-cabecalho h2 {
      margin: 0 0 8px;
      color: white;
    }

    .pdf-cabecalho p {
      margin: 0;
      color: #e3f0ff;
    }

    .pdf-grade {
      display: grid;
      grid-template-columns: 290px minmax(0, 1fr);
      gap: 20px;
      align-items: start;
    }

    .pdf-lista, .pdf-leitor {
      background: white;
      border: 1px solid #dce6f0;
      border-radius: 15px;
      padding: 18px;
      box-shadow: 0 4px 18px rgba(15, 49, 83, 0.06);
    }

    .pdf-lista h3 {
      margin: 0 0 15px;
      color: #123d70;
    }

    .pdf-item {
      width: 100%;
      display: block;
      text-align: left;
      background: #f3f7fc;
      color: #214766;
      border: 1px solid #e0e9f3;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 10px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
    }

    .pdf-item:hover, .pdf-item.ativo {
      background: #175eaa;
      color: white;
      border-color: #175eaa;
    }

    .pdf-leitor {
      min-height: 400px;
    }

    .pdf-leitor h3 {
      color: #123d70;
      margin: 0 0 15px;
    }

    .pdf-leitor iframe {
      width: 100%;
      height: 650px;
      border: none;
      border-radius: 10px;
      background: #f3f7fc;
    }

    .pdf-ajuda {
      display: block;
      text-align: center;
      background: #1769ce;
      color: white !important;
      border-radius: 12px;
      padding: 16px;
      margin-top: 20px;
      font-weight: 700;
      text-decoration: none;
    }

    .pdf-ajuda:hover {
      background: #104e9c;
    }

    @media (max-width: 750px) {
      .pdf-grade {
        grid-template-columns: 1fr;
      }

      .pdf-biblioteca {
        padding: 10px;
      }

      .pdf-leitor iframe {
        height: 500px;
      }
    }
  `;

  document.head.appendChild(estilo);

  app.innerHTML = `
    <section class="pdf-biblioteca">
      <button class="pdf-voltar" id="voltarDisciplinaPDF">
        ← Voltar à disciplina
      </button>

      <div class="pdf-cabecalho">
        <h2>📚 Biblioteca de Materiais em PDF</h2>
        <p>Selecione um documento para ler dentro do portal.</p>
      </div>

      <div class="pdf-grade">
        <div class="pdf-lista">
          <h3>Documentos disponíveis</h3>
          <div id="listaPDFs"></div>
        </div>

        <div class="pdf-leitor" id="visualizadorPDF">
          <h3>Visualizador de documentos</h3>
          <p>Escolha um material na lista ao lado para começar a leitura.</p>
        </div>
      </div>

      <a class="pdf-ajuda" id="abrirPastaPDF"
         target="_blank" rel="noopener noreferrer">
        Se o PDF não abrir, clique aqui
      </a>
    </section>
  `;

  document.getElementById("voltarDisciplinaPDF")
    .addEventListener("click", () => {
      const endereco = new URL(window.location.href);
      endereco.searchParams.delete("pagina");
      window.location.href = endereco.toString();
    });

  const lista = document.getElementById("listaPDFs");
  const leitor = document.getElementById("visualizadorPDF");

  const documentos = Array.isArray(turma.pdfs) ? turma.pdfs : [];

  if (documentos.length === 0) {
    lista.textContent = "Nenhum documento cadastrado.";
  }

  documentos.forEach((documento, indice) => {
    const botao = document.createElement("button");
    botao.className = "pdf-item";
    botao.type = "button";
    botao.textContent = `📄 ${indice + 1}. ${documento.titulo}`;

    botao.addEventListener("click", () => {
      document.querySelectorAll(".pdf-item")
        .forEach(item => item.classList.remove("ativo"));

      botao.classList.add("ativo");
      leitor.replaceChildren();

      const titulo = document.createElement("h3");
      titulo.textContent = documento.titulo;
      leitor.appendChild(titulo);

      const id = documento.link?.match(/\/file\/d\/([^/]+)/)?.[1];

      if (!id) {
        const aviso = document.createElement("p");
        aviso.textContent = "Este documento ainda não possui um link válido.";
        leitor.appendChild(aviso);
        return;
      }

      const iframe = document.createElement("iframe");
      iframe.src = `https://drive.google.com/file/d/${id}/preview`;
      iframe.title = documento.titulo;
      iframe.setAttribute("allowfullscreen", "");

      leitor.appendChild(iframe);
    });

    lista.appendChild(botao);
  });

  const pasta = document.getElementById("abrirPastaPDF");
  pasta.href = turma.pastaPDFs || "#";

})();



// ACESSO ÀS DISCIPLINAS NA PÁGINA INICIAL
(() => {
  const parametros = new URLSearchParams(window.location.search);
  if (parametros.has("turma")) return;

  const area = document.querySelector("#app .content-region");
  const boasVindas = area?.querySelector(".home-welcome");
  const turmas = window.PORTAL_DADOS?.turmas;
  if (!area || !boasVindas || !turmas) return;

  // Substitui o aviso antigo por uma lista de disciplinas.
  area.querySelector(".access-note")?.remove();
  const apresentacao = boasVindas.querySelector(".home-welcome-copy p");
  if (apresentacao) {
    apresentacao.textContent =
      "Aqui você encontra as disciplinas, videoaulas e materiais de estudo " +
      "disponibilizados pelo professor. Selecione sua disciplina para continuar.";
  }

  const secao = document.createElement("section");
  secao.className = "minhas-disciplinas";
  secao.innerHTML = `
    <div class="section-head">
      <span class="eyebrow">ÁREA DO ESTUDANTE</span>
      <h2 class="section-title">Disciplinas disponíveis</h2>
      <p class="section-description">Clique na disciplina para acessar os conteúdos.</p>
    </div>
    <div class="resource-grid" style="grid-template-columns: 1fr; margin-top: 20px;"></div>
  `;

  const lista = secao.querySelector(".resource-grid");
  Object.entries(turmas).forEach(([codigo, turma]) => {
    const acesso = document.createElement("a");
    acesso.className = "resource-card resource-primary";
    acesso.href = `?turma=${encodeURIComponent(codigo)}`;
    acesso.style.textDecoration = "none";
    acesso.innerHTML = `
      <div class="resource-icon">📘</div>
      <div class="resource-copy">
        <strong class="resource-title"></strong>
        <span class="resource-desc"></span>
      </div>
      <div class="resource-trailing">→</div>
    `;
    acesso.querySelector(".resource-title").textContent = turma.disciplina;
    acesso.querySelector(".resource-desc").textContent =
      `${turma.instituicao} • ${turma.curso} • ${turma.turma}`;
    lista.appendChild(acesso);
  });

  secao.style.margin = "32px 0";
  boasVindas.after(secao);
})();


// BOTÃO VOLTAR À PÁGINA INICIAL
(() => {
  const parametros = new URLSearchParams(window.location.search);

  // Exibe o botão somente na página da disciplina.
  if (!parametros.has("turma") || parametros.has("pagina")) return;

  const area = document.querySelector("#app .content-region");
  if (!area) return;

  const voltar = document.createElement("a");
  voltar.textContent = "← Voltar à página inicial";

  const inicio = new URL(window.location.href);
  inicio.search = "";
  inicio.hash = "";
  voltar.href = inicio.href;

  Object.assign(voltar.style, {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 18px",
    marginBottom: "24px",
    background: "#eaf3ff",
    color: "#1555a2",
    border: "1px solid #c7def8",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "14px",
    textDecoration: "none"
  });

  area.prepend(voltar);
})();
