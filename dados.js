
/*
  PORTAL DE ESTUDOS
  Professor Lucas Souza

  Aqui ficam as informações das disciplinas,
  turmas e materiais de estudo.
*/

window.PORTAL_DADOS = {

  professor: {
    nome: "Lucas Souza",
    titulo: "Professor Lucas Souza",
    resumo: "Pedagogo • Formador Municipal em Educação Digital e BNCC Computação • Pós-graduado em Tecnologias Digitais e Inovação na Educação • Capacitação em Robótica Educacional e Impressão 3D",
    foto: "imagens/foto-professor.jpg"
  },

  turmas: {

    "sociologia-pedagogia-out2026": {

      instituicao: "Faculdade UNIFTB",
      disciplina: "Sociologia da Educação",
      curso: "Pedagogia",
      turma: "Turma Outubro 2026",
      identificacao: "Outubro de 2026",
      modalidade: "Aulas presenciais com apoio digital",

      apresentacao:
        "Bem-vindo ao espaço de estudos da disciplina. " +
        "Aqui você encontra videoaulas e materiais " +
        "complementares para revisar os conteúdos.",

      // Pastas originais do Google Drive
      pastaVideos: "https://drive.google.com/drive/folders/1F_V2-CcWhZksRkS5BMcyR3qJk5Ihdfu4?usp=sharing",

      pastaPDFs: "https://drive.google.com/drive/folders/1kSiBGs7izJr7tolFexqUSxaGyb7unsOR",

      // MATERIAIS EM PDF — NÃO ALTERADOS
      pdfs: [
        {
          titulo: "Slides da Aula - Encontro 01",
          link: "https://drive.google.com/file/d/10V0QeJEQxDfqICcTwsbvKeAZ-givxuJP/view?usp=drivesdk"
        },
        {
          titulo: "Explicação dos Slides para Alunos",
          link: "https://drive.google.com/file/d/1m_rv8eJuq1IZkx5GrDKuqPrS2-OEEGvd/view?usp=drivesdk"
        },
        {
          titulo: "Material Explicativo de Estudo",
          link: "https://drive.google.com/file/d/1iDPR6ijZX0sCnMEzb0eXrFS8lUj5yiva/view?usp=drivesdk"
        },
        {
          titulo: "Fichas Avaliativas - Sociologia",
          link: "https://drive.google.com/file/d/1AxUGdPT2ZyfJRbdtTahPGsd95OWw5Arr/view?usp=drivesdk"
        }
      ],

      // VIDEOAULAS — NOVOS LINKS DO YOUTUBE
      videoaulas: [
        {
          titulo: "A Sociologia e a Educação",
          tema: "Videoaula 01 • Tema 1",
          link: "https://youtu.be/RsKmunpiiL0"
        },
        {
          titulo: "A Sociologia da Educação",
          tema: "Videoaula 02 • Tema 2",
          link: "https://youtu.be/7noIT8gmXqA"
        },
        {
          titulo: "Sociologia no Brasil e Educação e Família",
          tema: "Videoaula 03 • Temas 3 e 4",
          link: "https://youtu.be/rr6LZvvgl3I"
        },
        {
          titulo: "Infância, Juventude e a Escola",
          tema: "Videoaula 04 • Temas 5 e 6",
          link: "https://youtu.be/xhXn3_FCjKw"
        },
        {
          titulo: "Controle Social e Desvio Social",
          tema: "Videoaula 05 • Temas 7 e 8",
          link: "https://youtu.be/T1_pyYkKmos"
        }
      ],

      // ENCONTROS DA DISCIPLINA
      encontros: [
        {
          numero: "01",
          data: "17 de outubro de 2026",
          nome: "Primeiro encontro",
          topicos: "Temas 1 a 8 da apostila",
          videos: "5 videoaulas"
        },
        {
          numero: "02",
          data: "31 de outubro de 2026",
          nome: "Segundo encontro",
          topicos: "Temas 9 a 18 da apostila",
          videos: "Materiais em preparação"
        }
      ]

    }

  }

};
