// ═══════════════════════════════════════════════════════════════════════════
// EMBRASA PLAYBOOK v5.0 — data.js
// Dados técnico-comerciais reais da Embrasa Indústria de Embalagens
// ═══════════════════════════════════════════════════════════════════════════

export const EMBRASA = {
  nome: "Embrasa Indústria de Embalagens",
  fundacao: 1973,
  slogan: "Maior produtora latino-americana de sacaria soldada",
  colaboradores: 2200,
  area: "120.000 m²",
  site: "https://embrasa.com.br",
  catalogo: "https://embrasa.com.br/arquivos/EMB_apresentacao_2025.pdf",
  whatsapp: "5519998483707",
  logo: "https://embrasa.com.br/wp-content/uploads/2024/01/EMB_marca-embrasa_pos-cor.png",
  unidades: [
    { nome: "Sumaré-SP", tipo: "Matriz", estado: "SP" },
    { nome: "Artur Nogueira-SP", tipo: "Filial", estado: "SP" },
    { nome: "Catalão-GO", tipo: "Filial", estado: "GO" },
    { nome: "Taquara-RS", tipo: "Filial", estado: "RS" },
    { nome: "Riachão do Jacuípe-BA", tipo: "Filial", estado: "BA" },
  ],
};

// ─── PRODUTOS ─────────────────────────────────────────────────────────────
export const PRODUTOS = [
  {
    id: "soldada",
    nome: "Sacaria Soldada",
    tag: "Líder de Mercado",
    tagColor: "#1B3A6B",
    descricao: "Embalagem soldada de alta performance com impressão de até 10 cores em 4 lados. Tecnologia exclusiva de soldagem ultrassônica garantindo resistência superior.",
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-soldada_2026.pdf",
    specs: {
      impressao: "Até 10 cores / 4 lados",
      valvulas: ["Normal", "Est. Dobrável", "Est. Selagem", "TNT"],
      tratamentos: ["UV", "Nano furos"],
      filmes: ["PPCast 20g/m²", "PPCast 38g/m²"],
      dimensoes: { largura: "40–65 cm", comprimento: "62–112 cm" },
      gramaturas: "Personalizada",
    },
    scores: { resistencia: 5, barreira: 4, estetica: 5, automacao: 5, custo: 3, sustentabilidade: 4 },
    beneficios: [
      "Impressão premium 10 cores em 4 lados",
      "Soldagem ultrassônica — resistência superior",
      "Compatível com ensacadeiras automáticas",
      "Variedade de válvulas para diferentes aplicações",
      "UV e nano furos para produtos higroscópicos",
    ],
    limitacoes: [
      "Custo superior à sacaria costurada",
      "Não indicada para produtos muito abrasivos sem revestimento",
    ],
    segmentos: ["nutricao", "sementes", "fertilizantes", "quimicos", "minerios", "alimenticio", "ecommerce", "construcao", "polimeros"],
  },
  {
    id: "costurada",
    nome: "Sacaria Costurada",
    tag: "Custo-Benefício",
    tagColor: "#2E7D32",
    descricao: "Embalagem costurada com excelente custo-benefício. Disponível na versão normal ou sanfonada com impressão em até 10 cores.",
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-costurada_2026.pdf",
    specs: {
      impressao: "Até 10 cores / 2 lados",
      versoes: ["Normal", "Sanfonada"],
      furos: ["Micro furos"],
      laminacao: ["13 g/m²", "15 g/m²"],
      dimensoes: { largura: "40–65 cm", comprimento: "60–110 cm" },
    },
    scores: { resistencia: 4, barreira: 3, estetica: 3, automacao: 3, custo: 5, sustentabilidade: 4 },
    beneficios: [
      "Melhor custo-benefício do portfólio",
      "Versão sanfonada aumenta volume de armazenagem",
      "Impressão em 2 lados com até 10 cores",
      "Micro furos para desaeração de farinha e similares",
      "Laminação opcional para barreira",
    ],
    limitacoes: [
      "Impressão limitada a 2 lados",
      "Menor hermeticidade comparada à soldada",
    ],
    segmentos: ["nutricao", "sementes", "fertilizantes", "alimenticio", "construcao"],
  },
  {
    id: "polietileno",
    nome: "Sacaria PE 140μm",
    tag: "Premium Visual",
    tagColor: "#6A1B9A",
    descricao: "Embalagem de polietileno 140 microns com barreira superior e visual premium. Disponível em branca e transparente para 25 e 50kg.",
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-polietileno_2026.pdf",
    specs: {
      impressao: "Até 10 cores / 4 lados",
      espessura: "140 μm",
      cores: ["Branca", "Transparente"],
      capacidade: ["25 kg", "50 kg"],
    },
    scores: { resistencia: 4, barreira: 5, estetica: 5, automacao: 4, custo: 4, sustentabilidade: 3 },
    beneficios: [
      "Barreira à umidade superior",
      "Visual premium — transparente ou branco",
      "Impressão 4 lados com alta definição",
      "Ideal para produtos que exigem isolamento",
      "Excelente para branding no varejo",
    ],
    limitacoes: [
      "Custo superior à sacaria de PP",
      "Menor resistência à abrasão que PP",
    ],
    segmentos: ["quimicos", "minerios", "alimenticio", "ecommerce", "construcao", "polimeros"],
  },
  {
    id: "bb-tubular",
    nome: "Big Bag Tubular 4 Alças",
    tag: "Mais Popular",
    tagColor: "#E65100",
    descricao: "Big Bag tubular com 4 alças. Único no Brasil certificado para transporte de produtos perigosos (ANTT 5947/2021). Disponível com material reciclado PIR/PCR.",
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_bigbag-tubular_2026.pdf",
    specs: {
      gramaturas: ["160 g/m²", "190 g/m²", "220 g/m²"],
      dimensoes: ["90×90 cm", "94×94 cm", "99×99 cm"],
      normas: ["NBR-16029", "INMETRO 320/21", "ANTT 5947/2021"],
      materiais: ["PP Virgem", "PIR", "PCR"],
    },
    scores: { resistencia: 5, barreira: 3, estetica: 3, automacao: 4, custo: 4, sustentabilidade: 5 },
    beneficios: [
      "Único certificado ANTT para produtos perigosos no Brasil",
      "Certificação NBR-16029 e INMETRO",
      "Disponível em PIR/PCR (material reciclado)",
      "Alta capacidade de carga",
      "4 alças para içamento seguro",
    ],
    limitacoes: [
      "Requer equipamento de movimentação (empilhadeira/ponte rolante)",
      "Não indicado para produtos muito finos sem liner",
    ],
    segmentos: ["nutricao", "sementes", "fertilizantes", "quimicos", "minerios", "alimenticio"],
  },
  {
    id: "bb-travado",
    nome: "Big Bag Travado",
    tag: "Empilhamento Superior",
    tagColor: "#1565C0",
    descricao: "Big Bag com sistema de travamento que permite empilhamento seguro. Disponível com trava de rede ou ráfia com impressão em 4 lados.",
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_bigbag-travado_2026.pdf",
    specs: {
      gramaturas: ["190 g/m²", "220 g/m²", "235 g/m²"],
      dimensoes: ["105×105 cm"],
      travamento: ["Rede", "Ráfia"],
      impressao: "4 lados",
    },
    scores: { resistencia: 5, barreira: 4, estetica: 4, automacao: 3, custo: 3, sustentabilidade: 4 },
    beneficios: [
      "Sistema de travamento único — empilhamento seguro",
      "Gramatura reforçada para cargas pesadas",
      "Impressão 4 lados para rastreabilidade",
      "Ideal para armazéns com espaço vertical limitado",
      "Dois sistemas de trava: rede ou ráfia",
    ],
    limitacoes: [
      "Dimensão única 105×105 cm",
      "Custo superior ao tubular padrão",
    ],
    segmentos: ["sementes", "polimeros", "minerios"],
  },
  {
    id: "bb-gota",
    nome: "Big Bag Gota (1 Alça)",
    tag: "Agilidade Operacional",
    tagColor: "#00695C",
    descricao: "Big Bag monoalça (gota) para operações com agilidade de içamento. Disponível com liner valvulado e material reciclado PIR/PCR.",
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_bigbag-gota_2026.pdf",
    specs: {
      gramaturas: ["149 g/m²", "152 g/m²"],
      dimensoes: ["88×88 cm", "94×94 cm"],
      acessorios: ["Liner valvulado"],
      materiais: ["PP Virgem", "PIR", "PCR"],
    },
    scores: { resistencia: 4, barreira: 4, estetica: 3, automacao: 5, custo: 4, sustentabilidade: 5 },
    beneficios: [
      "Operação mais ágil — 1 alça facilita içamento",
      "Liner valvulado para produtos finos",
      "PIR/PCR — compromisso ambiental",
      "Ideal para silos e tombadoras",
      "Menor custo que big bags com 4 alças",
    ],
    limitacoes: [
      "Menor estabilidade lateral que 4 alças",
      "Não indicado para transporte rodoviário de perigosos",
    ],
    segmentos: ["nutricao", "fertilizantes", "minerios"],
  },
];

// ─── SEGMENTOS ────────────────────────────────────────────────────────────
export const SEGMENTOS = {
  nutricao: {
    id: "nutricao",
    nome: "Nutrição Animal",
    cor: "#1B3A6B",
    corClaro: "#E8EDF5",
    emoji: "🐄",
    descricao: "Ração, premix, suplementos e ingredientes para alimentação animal exceto pet food.",
    mercado: "Mercado brasileiro de ração animal movimenta R$ 70 bilhões/ano com crescimento de 8% ao ano impulsionado pela produção de proteína animal.",
    produtosEnvasados: ["Ração para bovinos", "Ração para aves e suínos", "Premix vitamínico", "Suplemento mineral", "Farinha de peixe", "Farelo de soja"],
    necessidades: [
      { item: "Resistência mecânica ao envase", critica: "CRÍTICA" },
      { item: "Barreira à umidade (anti-empedramento)", critica: "CRÍTICA" },
      { item: "Impressão para branding e rastreabilidade", critica: "ALTA" },
      { item: "Compatibilidade com ensacadeiras automáticas", critica: "ALTA" },
      { item: "Desaeração para farináceos", critica: "MÉDIA" },
    ],
    problemas: [
      "Rompimento da embalagem no transporte rodoviário",
      "Empedramento do produto por umidade",
      "Perda de identidade visual na prateleira",
      "Entupimento de ensacadeiras por excesso de ar",
    ],
    recomendacoes: {
      primaria: ["soldada", "bb-tubular"],
      alternativa: ["costurada", "bb-gota"],
      justificativa: "Sacaria soldada para 25–50kg com nano furos para desaeração. Big Bag tubular para granel acima de 500kg.",
    },
    regulatorio: "RNC — Rótulo de Nutrição e Composição. Registro MAPA obrigatório.",
    logistica: "Paletes padrão 1,00×1,20m. Empilhamento máx. 5 sacas. Carga fechada recomendada.",
    argumentos: {
      comprador: [
        "Redução de 35% nas perdas por rompimento vs embalagem padrão",
        "ROI positivo em 90 dias com redução de reclamações e devoluções",
        "Compatibilidade total com suas ensacadeiras — sem paradas",
      ],
      tecnico: [
        "Soldagem ultrassônica garante 30% mais resistência que costura",
        "Nano furos calibrados eliminam bolsão de ar sem comprometer barreira",
        "PPCast 38g/m² certificado para produto higroscópico",
      ],
      diretor: [
        "Maior produtora latino-americana — rastreabilidade e conformidade garantidas",
        "5 unidades industriais — supply chain resiliente e sem risco de desabastecimento",
        "Suporte técnico especializado por segmento — não apenas vendas de embalagem",
      ],
    },
    perguntas: [
      { pergunta: "O produto é higroscópico?", revela: "Necessidade de barreira e nano furos vs laminação" },
      { pergunta: "Qual o peso por embalagem?", revela: "Produto (sacaria vs big bag) e gramatura necessária" },
      { pergunta: "Qual tipo de envase? (manual/automático)", revela: "Compatibilidade com válvula e dimensões" },
      { pergunta: "Há transporte a granel ou fracionado?", revela: "Mix de embalagens — big bag + sacaria" },
      { pergunta: "Exige registro MAPA?", revela: "Requisitos de rastreabilidade e impressão" },
    ],
    riscos: [
      { risco: "Gramatura insuficiente", consequencia: "Rompimento no transporte → perda de produto + cliente insatisfeito", tipo: "CRÍTICO" },
      { risco: "Ausência de nano furos em farináceos", consequencia: "Entupimento de ensacadeiras automáticas → parada de linha", tipo: "ALTO" },
      { risco: "Laminação inadequada para ração higroscópica", consequencia: "Empedramento do produto → devolução em massa", tipo: "ALTO" },
    ],
  },

  sementes: {
    id: "sementes",
    nome: "Sementes",
    cor: "#1E5631",
    corClaro: "#E8F5E9",
    emoji: "🌱",
    descricao: "Sementes tratadas e não tratadas para culturas agrícolas — soja, milho, pastagem e outras.",
    mercado: "Brasil é o maior produtor e exportador de soja do mundo. Mercado de sementes certificadas cresce 12% ao ano.",
    produtosEnvasados: ["Sementes de soja tratada", "Sementes de milho tratado", "Sementes de pastagem", "Sementes de hortaliças", "Sementes de algodão"],
    necessidades: [
      { item: "Hermeticidade absoluta (produto tratado quimicamente)", critica: "CRÍTICA" },
      { item: "Resistência a fungicidas e inseticidas", critica: "CRÍTICA" },
      { item: "Impressão com lote, validade e registro MAPA", critica: "CRÍTICA" },
      { item: "Barreira à umidade para manutenção de germinação", critica: "ALTA" },
      { item: "Resistência mecânica para empilhamento", critica: "ALTA" },
    ],
    problemas: [
      "Contaminação por contato com agroquímicos externos",
      "Perda de poder germinativo por umidade",
      "Não conformidade com rótulo MAPA",
      "Rompimento durante manejo e distribuição",
    ],
    recomendacoes: {
      primaria: ["soldada", "bb-travado"],
      alternativa: ["costurada", "bb-tubular"],
      justificativa: "Sacaria soldada com laminação para hermeticidade. Big Bag travado para sementes ensacadas em lotes grandes.",
    },
    regulatorio: "Registro obrigatório MAPA (Lei nº 10.711/2003). Rótulo com nome, lote, pureza, germinação e prazo de validade.",
    logistica: "Temperatura e umidade controladas no armazenamento. Paletes plásticos recomendados.",
    argumentos: {
      comprador: [
        "Zero reclamações por perda de germinação com nossa barreira certificada",
        "Impressão de rótulo MAPA integrada — sem custo adicional de etiqueta",
        "Resistência 40% superior para empilhamento em armazém",
      ],
      tecnico: [
        "Laminação 15g/m² forma barreira contínua sem microporos",
        "Estrutura soldada resiste a fungicidas sem degradação do filme",
        "Dimensões calibradas para ensacadeiras de precisão",
      ],
      diretor: [
        "Conformidade regulatória MAPA garantida — zero risco de embargo",
        "Rastreabilidade por lote impressa na embalagem",
        "Parceiro estratégico de Syngenta, BASF e Bayer no Brasil",
      ],
    },
    perguntas: [
      { pergunta: "A semente é tratada quimicamente?", revela: "Necessidade de resistência química e hermeticidade" },
      { pergunta: "Qual o registro MAPA do produto?", revela: "Campos obrigatórios de impressão no rótulo" },
      { pergunta: "Qual o ambiente de armazenamento?", revela: "Especificação de barreira à umidade" },
      { pergunta: "Haverá exportação?", revela: "Exigências adicionais de embalagem para mercado externo" },
      { pergunta: "Qual o tipo de fechamento necessário?", revela: "Costura vs. válvula — compatibilidade com linha" },
    ],
    riscos: [
      { risco: "Embalagem sem barreira para semente tratada", consequencia: "Contaminação cruzada → recall e multa MAPA", tipo: "CRÍTICO" },
      { risco: "Impressão incompleta do rótulo MAPA", consequencia: "Produto embargado + multa até R$ 1,5M", tipo: "CRÍTICO" },
      { risco: "Gramatura insuficiente para empilhamento", consequencia: "Rompimento em armazém → perda do lote + devolução", tipo: "ALTO" },
    ],
  },

  fertilizantes: {
    id: "fertilizantes",
    nome: "Fertilizantes",
    cor: "#5D4037",
    corClaro: "#EFEBE9",
    emoji: "🌾",
    descricao: "NPK, ureia, micronutrientes e fertilizantes simples e compostos para uso agrícola.",
    mercado: "Brasil consome 45 milhões de toneladas de fertilizantes/ano. 85% importado — demanda por embalagem de alta performance.",
    produtosEnvasados: ["NPK granulado", "Ureia prilled", "Sulfato de amônio", "Micronutrientes", "Calcário dolomítico", "Superfosfato"],
    necessidades: [
      { item: "Resistência a produtos corrosivos (ureia, amônia)", critica: "CRÍTICA" },
      { item: "Hermeticidade para produtos higroscópicos", critica: "CRÍTICA" },
      { item: "Resistência mecânica ao empilhamento 6+ sacas", critica: "ALTA" },
      { item: "Compatibilidade com envase automático de alta velocidade", critica: "ALTA" },
      { item: "Barreira anti-UV para longa exposição", critica: "MÉDIA" },
    ],
    problemas: [
      "Empedramento da ureia por absorção de umidade",
      "Corrosão do filme por contato com fertilizantes nitrogenados",
      "Rompimento no transporte rodoviário em longas distâncias",
      "Entupimento de ensacadeiras por produto empedrado",
    ],
    recomendacoes: {
      primaria: ["soldada", "bb-tubular"],
      alternativa: ["costurada", "bb-gota"],
      justificativa: "Sacaria soldada com PPCast 38g/m² e válvula estéril para ureia. Big Bag tubular 220g/m² para granel.",
    },
    regulatorio: "Registro MAPA. Fichas de segurança FISPQ. ANTT para transporte de amônia.",
    logistica: "Armazenagem coberta e arejada. Empilhamento máx. 6 sacas. Big Bag em área coberta.",
    argumentos: {
      comprador: [
        "PPCast 38g/m² resiste à ureia sem degradação — garantido em campo",
        "Redução de 50% nas devoluções por empedramento",
        "Envase a 2.500 sacas/hora — zero entupimento",
      ],
      tecnico: [
        "Filme PPCast certificado para contato com fertilizantes nitrogenados",
        "Válvula estéril impede entrada de umidade pós-envase",
        "Big Bag 220g/m² suporta 2.000kg em 5 ciclos de uso",
      ],
      diretor: [
        "Único fornecedor com certificação ANTT para amônia no Brasil",
        "5 plantas industriais — entrega em 72h para todo Brasil",
        "Gestão de estoque com previsão mensal garantida",
      ],
    },
    perguntas: [
      { pergunta: "Qual o índice de umidade relativa do armazém?", revela: "Especificação de barreira e tipo de válvula" },
      { pergunta: "O produto é nitrogenado ou fosfatado?", revela: "Compatibilidade química do filme" },
      { pergunta: "Qual a velocidade da ensacadeira?", revela: "Tipo de válvula e geometria da embalagem" },
      { pergunta: "O produto é exportado?", revela: "Normas internacionais de embalagem" },
      { pergunta: "Empilhamento máximo em armazém?", revela: "Gramatura mínima necessária" },
    ],
    riscos: [
      { risco: "Filme incompatível com fertilizante nitrogenado", consequencia: "Degradação do filme → vazamento + contaminação do solo", tipo: "CRÍTICO" },
      { risco: "Válvula inadequada para produto higroscópico", consequencia: "Empedramento → devolução + perda de cliente", tipo: "ALTO" },
      { risco: "Gramatura insuficiente para empilhamento", consequencia: "Rompimento em armazém → perda de safra inteira", tipo: "ALTO" },
    ],
  },

  quimicos: {
    id: "quimicos",
    nome: "Químicos",
    cor: "#7B341E",
    corClaro: "#FBE9E7",
    emoji: "⚗️",
    descricao: "Produtos químicos industriais incluindo enxofre, sílica, carbonatos e outros insumos regulamentados.",
    mercado: "Mercado brasileiro de insumos químicos cresce 6% a.a. Regulação crescente exige embalagens certificadas.",
    produtosEnvasados: ["Enxofre elementar", "Sílica pirogênica", "Carbonato de cálcio", "Sulfato de cobre", "Cloreto de sódio industrial", "Dióxido de manganês"],
    necessidades: [
      { item: "Certificação para produtos perigosos (ONU/ANTT)", critica: "CRÍTICA" },
      { item: "Hermeticidade absoluta para pós ultrafinos", critica: "CRÍTICA" },
      { item: "Resistência química ao produto envasado", critica: "CRÍTICA" },
      { item: "Identificação de risco (GHS/CLP)", critica: "ALTA" },
      { item: "Rastreabilidade por lote", critica: "ALTA" },
    ],
    problemas: [
      "Falta de certificação para transporte de perigosos",
      "Vazamento de pó fino durante transporte",
      "Não conformidade com GHS — multas da ANVISA",
      "Rejeição de carga na alfândega por embalagem irregular",
    ],
    recomendacoes: {
      primaria: ["bb-tubular", "soldada"],
      alternativa: ["polietileno"],
      justificativa: "Big Bag tubular certificado ANTT para perigosos. Sacaria soldada com polietileno para pós ultrafinos.",
    },
    regulatorio: "ANTT 5947/2021 para perigosos. GHS/CLP obrigatório. NBR 7500. FISPQ.",
    logistica: "Área de risco separada. Transporte em veículo adequado. Empilhamento conforme FISPQ.",
    argumentos: {
      comprador: [
        "Único Big Bag certificado ANTT para perigosos no Brasil",
        "Zero risco de embargo na fiscalização — conformidade documentada",
        "Redução de 80% nos incidentes de vazamento com nossa estrutura",
      ],
      tecnico: [
        "Liner interno de polietileno soldado evita contato do produto com o tecido",
        "Certificação ONU para classes 4.1, 5.1 e 8",
        "Impressão GHS/CLP integrada — rótulo de risco em 4 idiomas",
      ],
      diretor: [
        "Conformidade ANTT elimina risco jurídico no transporte",
        "Auditoria de segurança química periódica disponível",
        "Histórico zero de acidentes com nossa embalagem certificada",
      ],
    },
    perguntas: [
      { pergunta: "O produto é classificado como perigoso pela ONU?", revela: "Classe de risco e certificação necessária" },
      { pergunta: "Qual a granulometria do produto?", revela: "Necessidade de liner e tipo de filme" },
      { pergunta: "Há exportação para a União Europeia?", revela: "CLP europeu e exigências específicas" },
      { pergunta: "O produto é oxidante ou inflamável?", revela: "Classe de risco ANTT e restrições de transporte" },
      { pergunta: "Qual o tipo de descarga? (gravidade, tombadora)", revela: "Configuração do bico de saída do big bag" },
    ],
    riscos: [
      { risco: "Big Bag sem certificação ANTT para perigoso", consequencia: "Apreensão da carga + multa de R$ 500/tonelada", tipo: "CRÍTICO" },
      { risco: "Impressão GHS incompleta ou incorreta", consequencia: "Embargo na alfândega + multa ANVISA", tipo: "CRÍTICO" },
      { risco: "Liner inadequado para pó ultrafino", consequencia: "Contaminação ambiental + responsabilidade civil", tipo: "CRÍTICO" },
    ],
  },

  minerios: {
    id: "minerios",
    nome: "Minérios",
    cor: "#37474F",
    corClaro: "#ECEFF1",
    emoji: "⛏️",
    descricao: "Calcário, minerais industriais, pós minerais e rochas trituradas para uso agro e industrial.",
    mercado: "Setor mineral brasileiro movimenta US$ 30 bilhões/ano. Calcário agrícola: 60 milhões de t/ano.",
    produtosEnvasados: ["Calcário agrícola", "Talco industrial", "Caulim", "Barita", "Feldspato", "Quartzo moído"],
    necessidades: [
      { item: "Resistência à abrasão para pós minerais", critica: "CRÍTICA" },
      { item: "Hermeticidade para pós ultrafinos (talco, sílica)", critica: "CRÍTICA" },
      { item: "Alta gramatura para produtos pesados", critica: "ALTA" },
      { item: "Resistência à umidade para calcário", critica: "ALTA" },
      { item: "Desaeração para pós muito finos", critica: "MÉDIA" },
    ],
    problemas: [
      "Abrasão do filme por partículas minerais angulares",
      "Contaminação de pó na linha de envase",
      "Rompimento por sobrepeso ou queda",
      "Empedramento do calcário por umidade",
    ],
    recomendacoes: {
      primaria: ["soldada", "bb-tubular"],
      alternativa: ["polietileno"],
      justificativa: "Sacaria soldada com PPCast reforçado para abrasão. PE 140μm para pós ultrafinos de alto valor.",
    },
    regulatorio: "NBR para minerais. DNPM/ANM para extração. Transporte: ANTT para alguns minerais.",
    logistica: "Peso elevado — palete reforçado. Big Bag em cimenteiras e mineradoras.",
    argumentos: {
      comprador: [
        "PPCast reforçado — 3x mais resistente à abrasão que filme padrão",
        "Zero perda de produto durante envase de pós ultrafinos",
        "Big Bag suporta 2.500kg — reduz custo logístico em 40%",
      ],
      tecnico: [
        "Filme com aditivo anti-abrasão homologado para minerais",
        "Nano furos calibrados para granulometria 200 mesh",
        "Gramatura 220g/m² para produtos com densidade > 1,8 t/m³",
      ],
      diretor: [
        "Parceiro de Vale, Gerdau e Votorantim no segmento mineral",
        "Redução de 25% no custo de embalagem vs importada",
        "5 plantas no Brasil — entrega em até 48h para mineradoras",
      ],
    },
    perguntas: [
      { pergunta: "Qual a granulometria do mineral?", revela: "Tipo de filme e necessidade de nano furos" },
      { pergunta: "Qual a densidade aparente do produto?", revela: "Gramatura mínima do filme e do big bag" },
      { pergunta: "O produto é abrasivo (angular)?", revela: "Especificação do aditivo anti-abrasão" },
      { pergunta: "Qual o destino? (agrícola/industrial)", revela: "Normas aplicáveis e requisitos de impressão" },
      { pergunta: "Há mistura de produtos no mesmo palete?", revela: "Risco de contaminação cruzada — barreira necessária" },
    ],
    riscos: [
      { risco: "Filme sem aditivo anti-abrasão", consequencia: "Microperfurações → contaminação + devolução em massa", tipo: "CRÍTICO" },
      { risco: "Gramatura insuficiente para mineral denso", consequencia: "Rompimento no içamento → acidente de trabalho", tipo: "CRÍTICO" },
      { risco: "Nano furos inadequados para granulometria", consequencia: "Entupimento de válvula → parada de linha", tipo: "ALTO" },
    ],
  },

  alimenticio: {
    id: "alimenticio",
    nome: "Alimentício",
    cor: "#E65100",
    corClaro: "#FBE9E7",
    emoji: "🌾",
    descricao: "Farinha de trigo e farináceos, açúcar, amido, fermento e outros alimentos industriais e de varejo.",
    mercado: "Setor de farinha de trigo: 13 milhões de t/ano no Brasil. Crescimento do varejo premium impulsiona embalagens diferenciadas.",
    produtosEnvasados: ["Farinha de trigo tipo 1", "Farinha integral", "Açúcar cristal", "Açúcar refinado", "Amido de milho", "Fubá", "Fermento biológico seco"],
    necessidades: [
      { item: "Aprovação ANVISA para contato com alimento", critica: "CRÍTICA" },
      { item: "Barreira à umidade (anti-empedramento)", critica: "CRÍTICA" },
      { item: "Desaeração para farináceos", critica: "ALTA" },
      { item: "Impressão premium para varejo", critica: "ALTA" },
      { item: "Rastreabilidade (lote, validade, origem)", critica: "ALTA" },
    ],
    problemas: [
      "Empedramento da farinha por umidade",
      "Contaminação por embalagem não food-grade",
      "Perda visual na prateleira do varejo",
      "Entupimento de ensacadeiras por excesso de ar",
    ],
    recomendacoes: {
      primaria: ["soldada", "polietileno"],
      alternativa: ["costurada", "bb-tubular"],
      justificativa: "Sacaria soldada com micro furos para farinha. PE 140μm transparente para apresentação premium no varejo.",
    },
    regulatorio: "RDC ANVISA para embalagem em contato com alimento. SIF/SIE para industrializados. Rotulagem obrigatória.",
    logistica: "Temperatura ambiente controlada. Empilhamento máx. 8 sacas de 25kg. Palete GMA.",
    argumentos: {
      comprador: [
        "Embalagem certificada ANVISA — aprovação automática na auditoria",
        "Micro furos calibrados eliminam bolsão de ar em farinha",
        "Impressão 10 cores — diferenciação máxima no varejo",
      ],
      tecnico: [
        "Filme food-grade certificado RDC 27/2010",
        "Micro furos 60μm — desaeração sem entrada de umidade",
        "Laminação BOPP para barreira e brilho premium",
      ],
      diretor: [
        "Conformidade ANVISA e SIF — zero risco de embargo",
        "Diferenciação de marca comprovada em teste de gôndola",
        "Parceiro de Bunge, Cargill e M. Dias Branco",
      ],
    },
    perguntas: [
      { pergunta: "Destino é varejo ou indústria?", revela: "Exigência de impressão premium vs funcional" },
      { pergunta: "Qual o teor de umidade do produto?", revela: "Especificação de barreira e micro furos" },
      { pergunta: "Produto tem registro SIF/SIE?", revela: "Campos obrigatórios de impressão" },
      { pergunta: "Qual o formato de envase? (ensacadeira vertical/horizontal)", revela: "Geometria e válvula da embalagem" },
      { pergunta: "Há exportação?", revela: "Certificações adicionais e idiomas no rótulo" },
    ],
    riscos: [
      { risco: "Embalagem sem certificação food-grade", consequencia: "Embargo sanitário + recall obrigatório + multa ANVISA", tipo: "CRÍTICO" },
      { risco: "Ausência de micro furos em farinha fina", consequencia: "Entupimento de ensacadeiras + parada de linha", tipo: "ALTO" },
      { risco: "Impressão sem campos obrigatórios ANVISA", consequencia: "Produto embargado na fiscalização", tipo: "ALTO" },
    ],
  },

  ecommerce: {
    id: "ecommerce",
    nome: "E-commerce",
    cor: "#6A1B9A",
    corClaro: "#F3E5F5",
    emoji: "📦",
    descricao: "Embalagens para logística e e-commerce — Shopee, Mercado Livre, Magalu e logística de última milha.",
    mercado: "E-commerce brasileiro cresceu 26% em 2024. Mercado de embalagens para e-commerce: R$ 8 bilhões e aceleração contínua.",
    produtosEnvasados: ["Produtos fracionados", "Granulados de pet", "Suplementos", "Sementes embaladas", "Cosméticos", "Alimentos secos"],
    necessidades: [
      { item: "Resistência a múltiplos manuseios", critica: "CRÍTICA" },
      { item: "Visual premium para unboxing experience", critica: "ALTA" },
      { item: "Identificação e rastreabilidade", critica: "ALTA" },
      { item: "Fechamento hermético ao consumidor", critica: "ALTA" },
      { item: "Sustentabilidade (PCR/PIR)", critica: "MÉDIA" },
    ],
    problemas: [
      "Embalagem danificada na última milha",
      "Experiência de unboxing ruim — perda de recompra",
      "Rastreabilidade insuficiente para marketplace",
      "Embalagem não alinhada com ESG da marca",
    ],
    recomendacoes: {
      primaria: ["polietileno", "soldada"],
      alternativa: ["costurada"],
      justificativa: "PE transparente para apresentação do produto. Sacaria soldada impressa para branding forte no envio.",
    },
    regulatorio: "Código de Defesa do Consumidor. Marketplaces: requisitos Shopee, ML, Magalu. LGPD para dados de rastreio.",
    logistica: "CEP por CEP — variabilidade alta. Embalagem deve resistir a 3+ manuseios. Peso dimensional para frete.",
    argumentos: {
      comprador: [
        "PE transparente aumenta taxa de recompra em 18% — visão do produto",
        "Impressão 10 cores integra identidade visual de ponta a ponta",
        "Resistência comprovada em 5 manuseios — zero devolução por dano",
      ],
      tecnico: [
        "PE 140μm: resistência pontual superior ao OPP padrão de e-commerce",
        "Selagem térmica hermética — sem entrada de umidade ou odor",
        "QR Code impresso para rastreabilidade end-to-end",
      ],
      diretor: [
        "Diferenciação de marca no momento de maior emoção do cliente — unboxing",
        "Redução de 30% nas devoluções por embalagem danificada",
        "Opção PCR disponível para comunicação ESG da marca",
      ],
    },
    perguntas: [
      { pergunta: "O produto precisa de visual premium no unboxing?", revela: "PE transparente vs sacaria opaca" },
      { pergunta: "Qual o marketplace principal? (Shopee/ML/Magalu)", revela: "Requisitos de embalagem por plataforma" },
      { pergunta: "O produto é perecível ou frágil?", revela: "Nível de barreira e resistência necessários" },
      { pergunta: "Há política ESG da marca?", revela: "Opção PCR/PIR e comunicação ambiental" },
      { pergunta: "Qual o volume mensal de pedidos?", revela: "Escala e customização possível" },
    ],
    riscos: [
      { risco: "Embalagem frágil para última milha", consequencia: "Taxa de devolução acima de 5% → bloqueio no marketplace", tipo: "ALTO" },
      { risco: "Visual genérico sem identidade de marca", consequencia: "Perda de recompra + baixa avaliação no marketplace", tipo: "MÉDIO" },
      { risco: "Ausência de QR/código de rastreio", consequencia: "Não conformidade com marketplace + penalidade", tipo: "MÉDIO" },
    ],
  },

  construcao: {
    id: "construcao",
    nome: "Construção Civil",
    cor: "#455A64",
    corClaro: "#ECEFF1",
    emoji: "🏗️",
    descricao: "Cimento, gesso, argamassa, cal e outros insumos para construção civil.",
    mercado: "Setor de construção civil: R$ 400 bilhões/ano no Brasil. Gesso: 8 milhões de t/ano. Mercado aquecido com Minha Casa Minha Vida.",
    produtosEnvasados: ["Cimento Portland", "Gesso de construção", "Argamassa colante", "Cal virgem e hidratada", "Rejunte", "Massa corrida"],
    necessidades: [
      { item: "Resistência a produtos alcalinos (cal, cimento)", critica: "CRÍTICA" },
      { item: "Hermeticidade para cal virgem (reação com umidade)", critica: "CRÍTICA" },
      { item: "Resistência mecânica para 40–50kg", critica: "ALTA" },
      { item: "Desaeração para pós finos", critica: "ALTA" },
      { item: "Impressão para normas técnicas (ABNT)", critica: "ALTA" },
    ],
    problemas: [
      "Reação da cal virgem com umidade → risco de incêndio",
      "Empedramento do gesso por absorção de água",
      "Rompimento de cimento na paletização",
      "Impressão incompleta das normas ABNT",
    ],
    recomendacoes: {
      primaria: ["soldada", "costurada"],
      alternativa: ["polietileno"],
      justificativa: "Sacaria soldada para cal virgem e gesso. Costurada para argamassa e cimento (custo-benefício).",
    },
    regulatorio: "ABNT NBR para cada produto. INMETRO para cal. ANVISA para gesso médico. ABCP para cimento.",
    logistica: "Palete ABCP para cimento. Big Bag para granel. Armazenagem coberta e seca obrigatória.",
    argumentos: {
      comprador: [
        "Hermeticidade garantida para cal virgem — zero risco de reação",
        "Valida norma ABNT impressa — aprovação imediata em obra",
        "Resistência 50kg em 6 sacas empilhadas — padrão construtora",
      ],
      tecnico: [
        "Filme com barreira alcalina certificada para cal e cimento",
        "Micro furos para desaeração de gesso sem entrada de umidade",
        "Impressão ABNT/INMETRO integrada na arte final",
      ],
      diretor: [
        "Conformidade ABNT e INMETRO — zero risco de embargo de obra",
        "Parceiro de Votorantim Cimentos, Saint-Gobain e Cimento Brasil",
        "Redução de 20% nas perdas por embalagem inadequada",
      ],
    },
    perguntas: [
      { pergunta: "O produto reage com umidade? (cal virgem)", revela: "Nível crítico de hermeticidade necessário" },
      { pergunta: "Qual a norma ABNT aplicável?", revela: "Campos obrigatórios de impressão" },
      { pergunta: "Empilhamento máximo no armazém?", revela: "Gramatura mínima necessária" },
      { pergunta: "Venda direta à obra ou via distribuidor?", revela: "Exigência visual e de rastreabilidade" },
      { pergunta: "Produto tem certificação INMETRO?", revela: "Selos e campos obrigatórios no rótulo" },
    ],
    riscos: [
      { risco: "Embalagem permeável para cal virgem", consequencia: "Reação exotérmica → incêndio em armazém → responsabilidade civil", tipo: "CRÍTICO" },
      { risco: "Ausência de norma ABNT na embalagem", consequencia: "Produto reprovado em obra + devolução do lote", tipo: "ALTO" },
      { risco: "Gramatura insuficiente para 50kg", consequencia: "Rompimento na paletização → perda do lote", tipo: "ALTO" },
    ],
  },

  polimeros: {
    id: "polimeros",
    nome: "Polímeros",
    cor: "#1A237E",
    corClaro: "#E8EAF6",
    emoji: "🔬",
    descricao: "Resinas termoplásticas, masterbatch, nylon, PET e outros polímeros industriais.",
    mercado: "Mercado de polímeros no Brasil: 8 milhões de t/ano. Importações representam 40% — embalagem adequada é crítica para manutenção de propriedades.",
    produtosEnvasados: ["Polipropileno (PP)", "Nylon PA6/PA66", "PET reciclado", "Masterbatch", "HDPE", "Elastômeros"],
    necessidades: [
      { item: "Barreira à umidade absoluta (higroscopicidade)", critica: "CRÍTICA" },
      { item: "Resistência electrostática (ESD) para alguns polímeros", critica: "CRÍTICA" },
      { item: "Empilhamento seguro em armazém de alto pé-direito", critica: "ALTA" },
      { item: "Rastreabilidade e conformidade (FDA, REACH)", critica: "ALTA" },
      { item: "Impressão com especificação técnica do polímero", critica: "ALTA" },
    ],
    problemas: [
      "Absorção de umidade degrada propriedades mecânicas do polímero",
      "Contaminação por partículas estranhas",
      "Rompimento no içamento com empilhadeira",
      "Não conformidade com FDA/REACH para exportação",
    ],
    recomendacoes: {
      primaria: ["bb-travado", "soldada"],
      alternativa: ["polietileno"],
      justificativa: "Big Bag travado para resinas em granel. Sacaria soldada com alta barreira para embalagem de 25kg.",
    },
    regulatorio: "FDA para polímeros food-grade. REACH para exportação UE. ABNT para materiais de construção. ISO 9001.",
    logistica: "Big Bag em armazém de alto pé-direito. Paletes plásticos anti-ESD. Temperatura máx. 40°C.",
    argumentos: {
      comprador: [
        "Barreira de umidade certificada — mantém MFI do polímero após 6 meses",
        "Big Bag travado permite empilhamento em 4 alturas — maximiza espaço",
        "Conformidade FDA/REACH impressa na embalagem — aprovação aduaneira",
      ],
      tecnico: [
        "WVTR < 3 g/m²/dia — barreira certificada para PA e PET higroscópico",
        "Liner de PE soldado impede contaminação por particulado",
        "Impressão com código de rastreio ISO — conformidade EU",
      ],
      diretor: [
        "Redução de 30% no refugo por degradação de polímero higroscópico",
        "Big Bag travado reduz custo de armazenagem em 35% — mais produto/m²",
        "Conformidade FDA/REACH — acesso imediato ao mercado americano e europeu",
      ],
    },
    perguntas: [
      { pergunta: "O polímero é higroscópico? (PA, PET, PC)", revela: "Especificação de WVTR e tipo de barreira" },
      { pergunta: "Há exportação para USA ou EU?", revela: "Exigências FDA e REACH no rótulo" },
      { pergunta: "Qual o MFI alvo do polímero?", revela: "Nível de barreira necessário para manutenção das props." },
      { pergunta: "Há risco de contaminação eletrostática?", revela: "Necessidade de liner ou filme anti-ESD" },
      { pergunta: "Qual o empilhamento máximo no CD?", revela: "Big Bag travado vs tubular — sistema de trava" },
    ],
    riscos: [
      { risco: "Embalagem com barreira insuficiente para PA/PET", consequencia: "Degradação das propriedades → peças rejeitadas + recall", tipo: "CRÍTICO" },
      { risco: "Ausência de conformidade FDA/REACH", consequencia: "Carga retida na alfândega + perda do contrato de exportação", tipo: "CRÍTICO" },
      { risco: "Contaminação por liner inadequado", consequencia: "Refugo de produção + responsabilidade civil ao cliente", tipo: "ALTO" },
    ],
  },
};

// ─── ESPECIFICAÇÕES TÉCNICAS ─────────────────────────────────────────────
export const ESPECIFICACOES = [
  // NUTRIÇÃO ANIMAL
  { id:"e01", segmento:"nutricao", produto:"Ração para aves/suínos", peso:"40 kg", largura:"52 cm", comprimento:"86 cm", fundo:"Fundo de papel / válvula", filme:"PPCast 20 g/m²", desaeracao:"Nano furos Ø0,3mm", gramatura:"80 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada + nano furos", aplicacao:"Envase automático 1.800 sc/h", resistencia:"Alta", barreira:"Média", obs:"Nano furos evitam bolsão de ar no envase", criticidade:"ALTA" },
  { id:"e02", segmento:"nutricao", produto:"Premix vitamínico", peso:"25 kg", largura:"45 cm", comprimento:"76 cm", fundo:"Válvula estéril selagem", filme:"PPCast 38 g/m²", desaeracao:"Micro furos Ø0,1mm", gramatura:"90 g/m²", valvula:"Estéril selagem", laminacao:"15 g/m²", estrutura:"Soldada + laminação", aplicacao:"Produto higroscópico premium", resistencia:"Alta", barreira:"Alta", obs:"Laminação obrigatória — produto absorve umidade em 48h", criticidade:"CRÍTICA" },
  { id:"e03", segmento:"nutricao", produto:"Suplemento mineral bovino", peso:"30 kg", largura:"48 cm", comprimento:"82 cm", fundo:"Fundo costurado", filme:"PP Ráfia 80 g/m²", desaeracao:"Não", gramatura:"80 g/m²", valvula:"Boca costurada", laminacao:"13 g/m²", estrutura:"Costurada + laminação", aplicacao:"Distribuição rural a granel", resistencia:"Média", barreira:"Média", obs:"Versão sanfonada aumenta volume 20%", criticidade:"MÉDIA" },
  { id:"e04", segmento:"nutricao", produto:"Farinha de peixe", peso:"50 kg", largura:"58 cm", comprimento:"100 cm", fundo:"Válvula dobrável", filme:"PPCast 38 g/m²", desaeracao:"Nano furos Ø0,5mm", gramatura:"100 g/m²", valvula:"Estéril dobrável", laminacao:"15 g/m²", estrutura:"Soldada reforçada + laminação", aplicacao:"Produto abrasivo e odorante", resistencia:"Muito Alta", barreira:"Alta", obs:"Reforço extra de gramatura pelo peso elevado", criticidade:"ALTA" },

  // SEMENTES
  { id:"e05", segmento:"sementes", produto:"Semente de soja tratada", peso:"50 kg", largura:"60 cm", comprimento:"105 cm", fundo:"Válvula dobrável", filme:"PPCast 38 g/m²", desaeracao:"Sem furos", gramatura:"100 g/m²", valvula:"Estéril dobrável", laminacao:"15 g/m²", estrutura:"Soldada + laminação total", aplicacao:"Semente tratada — hermeticidade total", resistencia:"Muito Alta", barreira:"Muito Alta", obs:"Hermeticidade obrigatória — produto tratado com fungicida", criticidade:"CRÍTICA" },
  { id:"e06", segmento:"sementes", produto:"Semente de milho tratado", peso:"15 kg", largura:"38 cm", comprimento:"62 cm", fundo:"Válvula selagem", filme:"PPCast 20 g/m²", desaeracao:"Sem furos", gramatura:"85 g/m²", valvula:"Estéril selagem", laminacao:"13 g/m²", estrutura:"Soldada + laminação", aplicacao:"Embalagem de 15kg para fazendeiro", resistencia:"Alta", barreira:"Alta", obs:"Lacre de segurança MAPA obrigatório", criticidade:"CRÍTICA" },
  { id:"e07", segmento:"sementes", produto:"Semente de pastagem", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Boca costurada", filme:"PP Ráfia 70 g/m²", desaeracao:"Não", gramatura:"75 g/m²", valvula:"Boca costurada", laminacao:"Não", estrutura:"Costurada padrão", aplicacao:"Distribuição regional a custo reduzido", resistencia:"Média", barreira:"Baixa", obs:"Produto menos sensível à umidade — custo-benefício", criticidade:"MÉDIA" },

  // FERTILIZANTES
  { id:"e08", segmento:"fertilizantes", produto:"NPK granulado", peso:"50 kg", largura:"60 cm", comprimento:"105 cm", fundo:"Válvula dobrável", filme:"PPCast 38 g/m²", desaeracao:"Nano furos Ø0,5mm", gramatura:"95 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada + nano furos", aplicacao:"Envase automático alta velocidade", resistencia:"Alta", barreira:"Média", obs:"Nano furos essenciais para envase > 2.000 sc/h", criticidade:"ALTA" },
  { id:"e09", segmento:"fertilizantes", produto:"Ureia prilled", peso:"50 kg", largura:"60 cm", comprimento:"105 cm", fundo:"Válvula estéril selagem", filme:"PPCast 38 g/m²", desaeracao:"Sem furos", gramatura:"100 g/m²", valvula:"Estéril selagem", laminacao:"15 g/m²", estrutura:"Soldada + laminação anti-ureia", aplicacao:"Ureia — produto extremamente higroscópico", resistencia:"Alta", barreira:"Muito Alta", obs:"Filme PPCast certificado contra degradação por ureia", criticidade:"CRÍTICA" },
  { id:"e10", segmento:"fertilizantes", produto:"Micronutrientes (Zn, B, Mn)", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula selagem", filme:"PPCast 38 g/m²", desaeracao:"Micro furos Ø0,1mm", gramatura:"90 g/m²", valvula:"Estéril selagem", laminacao:"15 g/m²", estrutura:"Soldada + barreira dupla", aplicacao:"Micronutrientes de alta pureza", resistencia:"Alta", barreira:"Muito Alta", obs:"Barreira dupla garante pureza do produto", criticidade:"CRÍTICA" },

  // QUÍMICOS
  { id:"e11", segmento:"quimicos", produto:"Enxofre elementar Cl4.1", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula selagem + liner", filme:"PPCast 38 g/m² + liner PE", desaeracao:"Sem furos", gramatura:"100 g/m²", valvula:"Estéril selagem", laminacao:"15 g/m²", estrutura:"Soldada + liner + laminação", aplicacao:"Produto perigoso Classe 4.1 ONU", resistencia:"Alta", barreira:"Muito Alta", obs:"Certificação ONU/ANTT obrigatória — liner interno anti-estático", criticidade:"CRÍTICA" },
  { id:"e12", segmento:"quimicos", produto:"Sílica pirogênica", peso:"20 kg", largura:"42 cm", comprimento:"72 cm", fundo:"Válvula TNT", filme:"PPCast 38 g/m²", desaeracao:"Nano furos especiais", gramatura:"95 g/m²", valvula:"Válvula TNT", laminacao:"15 g/m²", estrutura:"Soldada + válvula TNT + nano furos", aplicacao:"Pó ultrafino densidade 0,04 g/cm³", resistencia:"Alta", barreira:"Alta", obs:"Válvula TNT exclusiva para pós ultraleves — evita refluxo", criticidade:"CRÍTICA" },
  { id:"e13", segmento:"quimicos", produto:"Carbonato de cálcio", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula dobrável", filme:"PPCast 20 g/m²", desaeracao:"Nano furos Ø0,3mm", gramatura:"80 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada padrão", aplicacao:"Produto não perigoso — custo-benefício", resistencia:"Média", barreira:"Média", obs:"Produto de menor criticidade — estrutura padrão", criticidade:"MÉDIA" },

  // MINÉRIOS
  { id:"e14", segmento:"minerios", produto:"Calcário agrícola PRNT 80%", peso:"40 kg", largura:"52 cm", comprimento:"90 cm", fundo:"Válvula dobrável", filme:"PPCast 20 g/m²", desaeracao:"Nano furos Ø0,5mm", gramatura:"80 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada padrão", aplicacao:"Distribuição para pequenas propriedades", resistencia:"Alta", barreira:"Baixa", obs:"Produto de baixo custo — estrutura simples adequada", criticidade:"MÉDIA" },
  { id:"e15", segmento:"minerios", produto:"Talco industrial 325 mesh", peso:"20 kg", largura:"42 cm", comprimento:"72 cm", fundo:"Válvula TNT", filme:"PPCast 38 g/m²", desaeracao:"Nano furos especiais", gramatura:"95 g/m²", valvula:"Válvula TNT", laminacao:"15 g/m²", estrutura:"Soldada + TNT + barreira", aplicacao:"Pó ultrafino abrasivo 325 mesh", resistencia:"Alta", barreira:"Alta", obs:"TNT essencial — talco entope válvulas convencionais", criticidade:"CRÍTICA" },
  { id:"e16", segmento:"minerios", produto:"Caulim para cerâmica", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula dobrável", filme:"PPCast 38 g/m²", desaeracao:"Nano furos Ø0,3mm", gramatura:"90 g/m²", valvula:"Estéril dobrável", laminacao:"13 g/m²", estrutura:"Soldada + laminação", aplicacao:"Caulim premium para indústria cerâmica", resistencia:"Alta", barreira:"Média", obs:"Laminação protege cor branca do caulim contra umidade", criticidade:"ALTA" },

  // ALIMENTÍCIO
  { id:"e17", segmento:"alimenticio", produto:"Farinha de trigo varejo 5kg", peso:"5 kg", largura:"28 cm", comprimento:"50 cm", fundo:"Fundo soldado", filme:"PPCast 20 g/m² food-grade", desaeracao:"Micro furos Ø0,1mm", gramatura:"75 g/m²", valvula:"Não aplicável", laminacao:"BOPP 13 g/m²", estrutura:"Soldada + BOPP premium", aplicacao:"Varejo premium — gôndola de supermercado", resistencia:"Média", barreira:"Alta", obs:"BOPP garante brilho e barreira para produto varejo", criticidade:"ALTA" },
  { id:"e18", segmento:"alimenticio", produto:"Farinha de trigo indústria 25kg", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula dobrável", filme:"PPCast 20 g/m² food-grade", desaeracao:"Micro furos Ø0,1mm", gramatura:"80 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada + micro furos food-grade", aplicacao:"Envase industrial padaria/indústria", resistencia:"Alta", barreira:"Média", obs:"Food-grade obrigatório — certificação ANVISA", criticidade:"ALTA" },
  { id:"e19", segmento:"alimenticio", produto:"Açúcar refinado 1kg", peso:"1 kg", largura:"18 cm", comprimento:"32 cm", fundo:"Fundo soldado", filme:"PE 140 μm transparente", desaeracao:"Não", gramatura:"140 μm", valvula:"Não aplicável", laminacao:"Não", estrutura:"PE transparente premium", aplicacao:"Varejo premium — visualização do produto", resistencia:"Baixa", barreira:"Alta", obs:"Transparência do PE permite ver o açúcar — decisão de compra", criticidade:"ALTA" },
  { id:"e20", segmento:"alimenticio", produto:"Açúcar cristal 50kg", peso:"50 kg", largura:"62 cm", comprimento:"108 cm", fundo:"Boca costurada", filme:"PP Ráfia 90 g/m²", desaeracao:"Micro furos", gramatura:"90 g/m²", valvula:"Boca costurada", laminacao:"13 g/m²", estrutura:"Costurada + laminação", aplicacao:"Granel industrial — usina para indústria", resistencia:"Alta", barreira:"Média", obs:"Uso industrial — custo-benefício vs. embalagem varejo", criticidade:"MÉDIA" },

  // E-COMMERCE
  { id:"e21", segmento:"ecommerce", produto:"Polybag granulado pet 2kg", peso:"2 kg", largura:"22 cm", comprimento:"38 cm", fundo:"Fundo soldado", filme:"PE 140 μm branco", desaeracao:"Não", gramatura:"140 μm", valvula:"Não aplicável", laminacao:"Não", estrutura:"PE branco premium", aplicacao:"D2C marketplace — unboxing experience", resistencia:"Média", barreira:"Alta", obs:"Impressão 6 cores no PE — diferenciação na última milha", criticidade:"ALTA" },
  { id:"e22", segmento:"ecommerce", produto:"Suplemento granulado 5kg", peso:"5 kg", largura:"28 cm", comprimento:"52 cm", fundo:"Fundo soldado", filme:"PE 140 μm transparente", desaeracao:"Não", gramatura:"140 μm", valvula:"Não aplicável", laminacao:"Não", estrutura:"PE transparente + impressão", aplicacao:"D2C premium — visualização do produto", resistencia:"Média", barreira:"Alta", obs:"QR Code para rastreabilidade no marketplace", criticidade:"ALTA" },

  // CONSTRUÇÃO CIVIL
  { id:"e23", segmento:"construcao", produto:"Gesso de construção", peso:"20 kg", largura:"42 cm", comprimento:"72 cm", fundo:"Válvula dobrável", filme:"PPCast 20 g/m²", desaeracao:"Micro furos Ø0,1mm", gramatura:"80 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada + micro furos", aplicacao:"Gesso sensível à umidade", resistencia:"Alta", barreira:"Média", obs:"Micro furos imprescindíveis — gesso empedra rapidamente", criticidade:"CRÍTICA" },
  { id:"e24", segmento:"construcao", produto:"Argamassa colante AC-II", peso:"20 kg", largura:"42 cm", comprimento:"72 cm", fundo:"Boca costurada", filme:"PP Ráfia 75 g/m²", desaeracao:"Micro furos", gramatura:"75 g/m²", valvula:"Boca costurada", laminacao:"Não", estrutura:"Costurada padrão", aplicacao:"Argamassa — custo-benefício", resistencia:"Média", barreira:"Baixa", obs:"Produto de menor criticidade — costurada adequada", criticidade:"MÉDIA" },
  { id:"e25", segmento:"construcao", produto:"Cal virgem CL90", peso:"8 kg", largura:"30 cm", comprimento:"55 cm", fundo:"Válvula selagem", filme:"PPCast 38 g/m²", desaeracao:"Sem furos", gramatura:"90 g/m²", valvula:"Estéril selagem", laminacao:"15 g/m²", estrutura:"Soldada + laminação anti-umidade", aplicacao:"Cal virgem — reação exotérmica com umidade", resistencia:"Alta", barreira:"Muito Alta", obs:"HERMETICIDADE CRÍTICA — cal + umidade = risco de incêndio", criticidade:"CRÍTICA" },
  { id:"e26", segmento:"construcao", produto:"Cimento Portland CP-II 50kg", peso:"50 kg", largura:"62 cm", comprimento:"108 cm", fundo:"Válvula dobrável", filme:"PPCast 20 g/m²", desaeracao:"Nano furos Ø0,5mm", gramatura:"85 g/m²", valvula:"Estéril dobrável", laminacao:"Não", estrutura:"Soldada + nano furos reforçada", aplicacao:"Cimento — líder de volume", resistencia:"Muito Alta", barreira:"Média", obs:"Volume mais crítico — resistência mecânica em 1ª lugar", criticidade:"ALTA" },

  // POLÍMEROS
  { id:"e27", segmento:"polimeros", produto:"Polipropileno (PP) pellets", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula dobrável", filme:"PPCast 38 g/m²", desaeracao:"Nano furos", gramatura:"90 g/m²", valvula:"Estéril dobrável", laminacao:"13 g/m²", estrutura:"Soldada + laminação", aplicacao:"Resina PP — armazenagem longa", resistencia:"Alta", barreira:"Alta", obs:"Laminação protege contra UV — polímero se degrada", criticidade:"CRÍTICA" },
  { id:"e28", segmento:"polimeros", produto:"Nylon PA6 granulado", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula selagem", filme:"PPCast 38 g/m² + liner BOPP", desaeracao:"Sem furos", gramatura:"95 g/m²", valvula:"Estéril selagem", laminacao:"BOPP 15 g/m²", estrutura:"Soldada + BOPP barreira dupla", aplicacao:"PA6 higroscópico — barreira máxima", resistencia:"Alta", barreira:"Muito Alta", obs:"WVTR < 3 g/m²/dia — PA absorve 3% em 48h sem barreira", criticidade:"CRÍTICA" },
  { id:"e29", segmento:"polimeros", produto:"PET reciclado pellets", peso:"25 kg", largura:"46 cm", comprimento:"80 cm", fundo:"Válvula dobrável", filme:"PPCast 38 g/m²", desaeracao:"Nano furos", gramatura:"90 g/m²", valvula:"Estéril dobrável", laminacao:"13 g/m²", estrutura:"Soldada + laminação", aplicacao:"PET reciclado — market ESG", resistencia:"Alta", barreira:"Alta", obs:"Impressão com % PCR do produto — comunicação ESG", criticidade:"CRÍTICA" },
  { id:"e30", segmento:"polimeros", produto:"Masterbatch concentrado", peso:"20 kg", largura:"42 cm", comprimento:"72 cm", fundo:"Válvula selagem", filme:"PPCast 38 g/m² + liner PE negro", desaeracao:"Sem furos", gramatura:"95 g/m²", valvula:"Estéril selagem", laminacao:"15 g/m²", estrutura:"Soldada + liner anti-contaminação", aplicacao:"Masterbatch — zero tolerância a contaminação", resistencia:"Alta", barreira:"Muito Alta", obs:"Liner PE negro anti-estático + anti-contaminação", criticidade:"CRÍTICA" },
];

// ─── GLOSSÁRIO ────────────────────────────────────────────────────────────
export const GLOSSARIO = [
  { termo: "PPCast", def: "Filme de polipropileno cast (extrusão em plancha) com alta claridade e resistência mecânica superior ao ráfia." },
  { termo: "Nano furos", def: "Microperfurações com diâmetro 0,1–0,5mm para desaeração de produto durante envase sem comprometer a barreira." },
  { termo: "Válvula estéril", def: "Sistema de fechamento hermético que permite o enchimento da embalagem e veda automaticamente após o envase." },
  { termo: "Laminação", def: "Camada adicional de filme colada ao tecido de PP para aumentar barreira à umidade. Gramaturas: 13–15 g/m²." },
  { termo: "WVTR", def: "Water Vapor Transmission Rate — taxa de transmissão de vapor d'água. Quanto menor, maior a barreira da embalagem." },
  { termo: "BOPP", def: "Biaxially Oriented Polypropylene — filme PP biorientado. Alta transparência e barreira superior ao PPCast." },
  { termo: "Ráfia PP", def: "Tecido de tiras de polipropileno trançadas. Base da maioria das embalagens industriais de baixo custo." },
  { termo: "Big Bag / FIBC", def: "Flexible Intermediate Bulk Container — embalagem flexível de grande porte (500–2.000kg) para transporte a granel." },
  { termo: "Gramatura", def: "Massa por unidade de área (g/m²) do tecido. Quanto maior, maior a resistência mecânica da embalagem." },
  { termo: "NBR-16029", def: "Norma ABNT para Big Bags — especifica requisitos de construção, teste e rastreabilidade dos FIBCs." },
  { termo: "INMETRO 320/21", def: "Portaria que regulamenta a certificação de Big Bags no Brasil — teste de carga 5:1." },
  { termo: "ANTT 5947/2021", def: "Resolução que regula o transporte rodoviário de produtos perigosos em Big Bags no Brasil." },
  { termo: "PIR", def: "Post-Industrial Recycled — material reciclado de refugo industrial. Propriedades similares ao virgem." },
  { termo: "PCR", def: "Post-Consumer Recycled — material reciclado pós-consumo. Demonstra compromisso ESG." },
  { termo: "GHS/CLP", def: "Globally Harmonized System — padrão internacional de rotulagem de produtos químicos perigosos com pictogramas." },
  { termo: "Liner", def: "Revestimento interno do Big Bag em polietileno para isolamento do produto do tecido externo." },
  { termo: "Válvula TNT", def: "Válvula com manta de TNT (tecido-não-tecido) para produtos com granulometria ultrafina que entopem válvulas convencionais." },
  { termo: "Ensacadeira", def: "Equipamento automático ou semiautomático para envase de produtos em embalagens. Define geometria da embalagem." },
  { termo: "UV", def: "Tratamento anti-UV do filme de PP para exposição ao sol — evita degradação e perda de resistência." },
  { termo: "FISPQ", def: "Ficha de Informações de Segurança de Produto Químico — obrigatória para produtos perigosos conforme ABNT NBR 14725." },
];

// ─── KPIS EMBRASA ────────────────────────────────────────────────────────
export const KPIS = [
  { label: "Fundação", valor: "1973", icon: "🏭", sub: "52 anos de mercado" },
  { label: "Colaboradores", valor: "2.200+", icon: "👥", sub: "Time especializado" },
  { label: "Área Produtiva", valor: "120.000 m²", icon: "📐", sub: "5 unidades industriais" },
  { label: "Capacidade", valor: "50M sc/ano", icon: "📦", sub: "Sacarias produzidas" },
  { label: "Cores de impressão", valor: "10 cores", icon: "🎨", sub: "4 lados simultâneos" },
  { label: "Certificações", valor: "NBR+INMETRO+ANTT", icon: "🛡️", sub: "Únicas no Brasil" },
];

// ─── DIFERENCIAIS ─────────────────────────────────────────────────────────
export const DIFERENCIAIS = [
  { titulo: "Maior Produtora Latino-Americana", desc: "Líder absoluta em sacaria soldada na América Latina desde 1995. Escala industrial incomparável.", icon: "🏆" },
  { titulo: "5 Unidades no Brasil", desc: "Sumaré/SP, Artur Nogueira/SP, Catalão/GO, Taquara/RS, Riachão do Jacuípe/BA — supply chain resiliente.", icon: "🗺️" },
  { titulo: "Único Big Bag para Perigosos (ANTT)", desc: "Único fabricante brasileiro com Big Bag certificado para transporte de produtos perigosos pela ANTT 5947/2021.", icon: "🛡️" },
  { titulo: "Impressão 10 Cores / 4 Lados", desc: "Tecnologia de impressão simultânea em 4 faces com até 10 cores — diferenciação máxima de marca.", icon: "🎨" },
  { titulo: "Válvula TNT Exclusiva", desc: "Tecnologia proprietária para ensaque de pós ultrafinos que entopem válvulas convencionais.", icon: "⚙️" },
  { titulo: "PIR/PCR Disponível", desc: "Embalagens com material reciclado pós-industrial e pós-consumo para estratégias ESG.", icon: "♻️" },
  { titulo: "Suporte Técnico por Segmento", desc: "Equipe de engenharia especializada por setor industrial — não apenas venda de embalagem.", icon: "🔬" },
  { titulo: "72h para Todo Brasil", desc: "5 plantas industriais garantem entrega em 72h para qualquer ponto do território nacional.", icon: "🚛" },
];

// ─── SIMULADOR PERGUNTAS ──────────────────────────────────────────────────
export const SIMULADOR_PERGUNTAS = [
  {
    id: "tipo",
    pergunta: "Qual o tipo de produto a ser embalado?",
    opcoes: [
      { id: "sacaria", label: "Sacaria (até 50kg)", icon: "📦" },
      { id: "bigbag", label: "Big Bag (acima de 200kg)", icon: "🏗️" },
    ],
  },
  {
    id: "higroscopico",
    pergunta: "O produto é higroscópico (absorve umidade)?",
    opcoes: [
      { id: "sim", label: "Sim", icon: "💧" },
      { id: "nao", label: "Não", icon: "🌵" },
    ],
  },
  {
    id: "barreira",
    pergunta: "Necessita de barreira química ou isolamento?",
    opcoes: [
      { id: "alta", label: "Barreira Alta (químicos/polímeros)", icon: "🛡️" },
      { id: "media", label: "Barreira Média (alimentício/nutrição)", icon: "⚖️" },
      { id: "baixa", label: "Barreira Baixa (calcário/argamassa)", icon: "📋" },
    ],
  },
  {
    id: "envase",
    pergunta: "Qual o tipo de envase?",
    opcoes: [
      { id: "automatico", label: "Automático (> 1.000 sc/h)", icon: "⚡" },
      { id: "semi", label: "Semiautomático", icon: "🔧" },
      { id: "manual", label: "Manual", icon: "👐" },
    ],
  },
  {
    id: "impressao",
    pergunta: "Qual a necessidade de impressão?",
    opcoes: [
      { id: "premium", label: "Premium (10 cores, 4 lados)", icon: "🎨" },
      { id: "padrao", label: "Padrão (2–4 cores)", icon: "🖨️" },
      { id: "funcional", label: "Funcional (rótulo + normas)", icon: "📋" },
    ],
  },
  {
    id: "perigoso",
    pergunta: "O produto é classificado como perigoso (ONU/ANTT)?",
    opcoes: [
      { id: "sim", label: "Sim (exige certificação)", icon: "⚠️" },
      { id: "nao", label: "Não", icon: "✅" },
    ],
  },
  {
    id: "sustentabilidade",
    pergunta: "Há exigência de sustentabilidade (ESG/PCR)?",
    opcoes: [
      { id: "sim", label: "Sim (PCR/PIR obrigatório)", icon: "♻️" },
      { id: "preferencial", label: "Preferencial", icon: "🌱" },
      { id: "nao", label: "Não", icon: "➖" },
    ],
  },
];
