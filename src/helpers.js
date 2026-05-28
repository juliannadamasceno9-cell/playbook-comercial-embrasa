// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — utils/helpers.js
// ═══════════════════════════════════════════════════════════════════

export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(re, "<mark>$1</mark>");
}

export function getResistenciaColor(nivel) {
  switch (nivel) {
    case "Muito Alta": return "#1B3A6B";
    case "Alta":       return "#2E7D32";
    case "Média":      return "#F57F17";
    case "Baixa":      return "#B71C1C";
    default:           return "#546E7A";
  }
}

export function getBarreiraColor(nivel) {
  switch (nivel) {
    case "Muito Alta": return "#4A148C";
    case "Alta":       return "#1565C0";
    case "Média":      return "#E65100";
    case "Baixa":      return "#37474F";
    default:           return "#546E7A";
  }
}

export function getCriticidadeColor(nivel) {
  switch (nivel) {
    case "CRÍTICA": return { bg: "#FFEBEE", text: "#B71C1C", border: "#EF9A9A" };
    case "ALTA":    return { bg: "#FFF3E0", text: "#E65100", border: "#FFCC80" };
    case "MÉDIA":   return { bg: "#E8F5E9", text: "#2E7D32", border: "#A5D6A7" };
    default:        return { bg: "#ECEFF1", text: "#546E7A", border: "#CFD8DC" };
  }
}

// Simulador logic
export function calcularRecomendacao(respostas) {
  const { tipo, higroscopico, barreira, envase, impressao, perigoso, sustentabilidade } = respostas;

  if (tipo === "bigbag") {
    if (perigoso === "sim") {
      return {
        produto: "Big Bag Tubular 4 Alças",
        produtoId: "bb-tubular",
        estrutura: "Tecido PP 220 g/m² + Liner PE soldado",
        gramatura: "220 g/m²",
        filme: "Polipropileno ráfia + Liner PE",
        valvula: "Boca de enchimento padrão ANTT",
        desaeracao: "Conforme produto",
        justificativa: "Único Big Bag certificado ANTT 5947/2021 para produtos perigosos no Brasil.",
        diferenciais: ["Certificação ANTT 5947/2021", "NBR-16029", "INMETRO 320/21", "Liner interno anti-contaminação"],
        pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_bigbag-tubular_2026.pdf",
      };
    }
    if (barreira === "alta" || higroscopico === "sim") {
      return {
        produto: "Big Bag Travado",
        produtoId: "bb-travado",
        estrutura: "Tecido PP 235 g/m² + Liner BOPP",
        gramatura: "235 g/m²",
        filme: "PP ráfia com trava rede",
        valvula: "Boca de enchimento com trava",
        desaeracao: "Sem furos (produto higroscópico)",
        justificativa: "Empilhamento seguro e barreira superior para produtos que exigem isolamento e armazenagem vertical.",
        diferenciais: ["Sistema de travamento exclusivo", "Empilhamento 4 alturas", "Liner BOPP barreira dupla", "Impressão 4 lados rastreabilidade"],
        pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_bigbag-travado_2026.pdf",
      };
    }
    return {
      produto: "Big Bag Gota (1 Alça)",
      produtoId: "bb-gota",
      estrutura: "Tecido PP 152 g/m²",
      gramatura: "152 g/m²",
      filme: "PP ráfia standard",
      valvula: "Monoalça para içamento",
      desaeracao: "Liner valvulado opcional",
      justificativa: "Agilidade operacional máxima para produtos de fluxo contínuo com tombadoras e silos.",
      diferenciais: ["1 alça — içamento ágil", "Liner valvulado para pós", "PIR/PCR disponível", "Compatível com tombadoras"],
      pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_bigbag-gota_2026.pdf",
    };
  }

  // Sacaria
  if (barreira === "alta" && higroscopico === "sim") {
    if (impressao === "premium") {
      return {
        produto: "Sacaria Soldada Premium",
        produtoId: "soldada",
        estrutura: "PPCast 38 g/m² + Laminação 15 g/m² + Impressão 10 cores 4 lados",
        gramatura: "38 g/m²",
        filme: "PPCast 38 g/m²",
        valvula: "Estéril selagem",
        desaeracao: "Sem furos (produto higroscópico)",
        justificativa: "Máxima barreira com impressão premium — ideal para produtos de alto valor que exigem proteção e diferenciação visual.",
        diferenciais: ["PPCast 38 g/m² barreira máxima", "Válvula estéril selagem hermética", "10 cores 4 lados premium", "Laminação 15 g/m²"],
        pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-soldada_2026.pdf",
      };
    }
    return {
      produto: "Sacaria Soldada + Laminação",
      produtoId: "soldada",
      estrutura: "PPCast 38 g/m² + Laminação 15 g/m²",
      gramatura: "38 g/m²",
      filme: "PPCast 38 g/m²",
      valvula: "Estéril selagem",
      desaeracao: "Sem furos (produto higroscópico)",
      justificativa: "Barreira superior à umidade para produtos higroscópicos. Válvula estéril garante hermeticidade pós-envase.",
      diferenciais: ["Barreira WVTR certificada", "Válvula estéril hermética", "PPCast resistente a fertilizantes", "Anti-empedramento garantido"],
      pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-soldada_2026.pdf",
    };
  }

  if (barreira === "alta" && perigoso === "nao") {
    return {
      produto: "Sacaria PE 140μm",
      produtoId: "polietileno",
      estrutura: "Polietileno 140 μm branco ou transparente",
      gramatura: "140 μm",
      filme: "Polietileno 140 μm",
      valvula: "Não aplicável",
      desaeracao: "Não",
      justificativa: "Barreira química e visual premium em polietileno. Transparente permite ver o produto — ideal para varejo e e-commerce.",
      diferenciais: ["Transparência total do produto", "Barreira química superior", "Impressão 10 cores 4 lados", "Food-grade certificado ANVISA"],
      pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-polietileno_2026.pdf",
    };
  }

  if (envase === "automatico" || envase === "semi") {
    if (impressao === "premium" || impressao === "padrao") {
      return {
        produto: "Sacaria Soldada + Nano Furos",
        produtoId: "soldada",
        estrutura: "PPCast 20 g/m² + Nano furos Ø0,3mm + Impressão 10 cores",
        gramatura: "20 g/m²",
        filme: "PPCast 20 g/m²",
        valvula: "Estéril dobrável",
        desaeracao: "Nano furos Ø0,3mm",
        justificativa: "Soldada com nano furos para envase automático de alta velocidade sem bolsão de ar, com impressão premium.",
        diferenciais: ["Compatível com ensacadeiras 2.000+ sc/h", "Nano furos calibrados anti-bolsão", "10 cores 4 lados", "Válvula dobrável automática"],
        pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-soldada_2026.pdf",
      };
    }
  }

  if (barreira === "baixa" || barreira === "media") {
    return {
      produto: "Sacaria Costurada",
      produtoId: "costurada",
      estrutura: "PP Ráfia 80 g/m² + Costura ou Laminação 13 g/m²",
      gramatura: "80 g/m²",
      filme: "PP Ráfia",
      valvula: "Boca costurada",
      desaeracao: "Micro furos (se farináceo)",
      justificativa: "Melhor custo-benefício para produtos de barreira média ou baixa. Laminação opcional para proteção adicional.",
      diferenciais: ["Melhor custo-benefício", "Sanfonada aumenta volume 20%", "Micro furos para farináceos", "Laminação opcional"],
      pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-costurada_2026.pdf",
    };
  }

  // Default
  return {
    produto: "Sacaria Soldada Padrão",
    produtoId: "soldada",
    estrutura: "PPCast 20 g/m² + Impressão 4 cores",
    gramatura: "20 g/m²",
    filme: "PPCast 20 g/m²",
    valvula: "Estéril dobrável",
    desaeracao: "Conforme produto",
    justificativa: "Solução versátil de alto desempenho para a maioria das aplicações industriais.",
    diferenciais: ["Maior produtora da América Latina", "Impressão 10 cores 4 lados", "Compatível com ensacadeiras automáticas", "Suporte técnico especializado"],
    pdf: "https://embrasa.com.br/wp-content/uploads/2026/03/Embrasa_sacaria-soldada_2026.pdf",
  };
}
