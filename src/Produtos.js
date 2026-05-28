// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — components/Produtos.js
// Portfólio de produtos com fichas técnicas completas
// ═══════════════════════════════════════════════════════════════════
import { useState } from "react";
import { PRODUTOS, SEGMENTOS } from "./data.js";
import {
  SectionHeader,
  Card,
  ScoreBar,
  ProductTag,
  Callout,
  Button,
} from "./UI.js";

const SCORE_LABELS = {
  resistencia: "Resistência Mecânica",
  barreira: "Barreira à Umidade",
  estetica: "Estética / Impressão",
  automacao: "Automação / Envase",
  custo: "Custo-Benefício",
  sustentabilidade: "Sustentabilidade",
};

const SCORE_COLORS = {
  resistencia: "#1B3A6B",
  barreira: "#1565C0",
  estetica: "#6A1B9A",
  automacao: "#E65100",
  custo: "#2E7D32",
  sustentabilidade: "#00695C",
};

export function Produtos({ produtoInicial }) {
  const [ativo, setAtivo] = useState(produtoInicial || PRODUTOS[0].id);
  const produto = PRODUTOS.find((p) => p.id === ativo);

  if (!produto) return null;

  const segsAtendidos = produto.segmentos
    .map((s) => SEGMENTOS[s])
    .filter(Boolean);

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Portfólio de Produtos"
        subtitle="6 produtos industriais com fichas técnicas completas e links para PDF oficial"
        icon="📦"
      />

      {/* Seletor */}
      <div
        style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}
      >
        {PRODUTOS.map((p) => (
          <button
            key={p.id}
            onClick={() => setAtivo(p.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 8,
              fontFamily: "inherit",
              border: `2px solid ${ativo === p.id ? p.tagColor : "#E8ECF0"}`,
              background: ativo === p.id ? p.tagColor + "12" : "#fff",
              cursor: "pointer",
              color: ativo === p.id ? p.tagColor : "#546E7A",
              fontWeight: ativo === p.id ? 700 : 500,
              fontSize: 13,
              transition: "all 0.15s",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                background: p.tagColor,
                flexShrink: 0,
              }}
            />
            {p.nome}
          </button>
        ))}
      </div>

      {/* Ficha */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Coluna esquerda */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card padding={24}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <div>
                <h2
                  style={{
                    margin: "0 0 6px",
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#1B3A6B",
                  }}
                >
                  {produto.nome}
                </h2>
                <ProductTag label={produto.tag} color={produto.tagColor} />
              </div>
              <a
                href={produto.pdf}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  background: "#1B3A6B",
                  color: "#fff",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                📄 PDF Técnico
              </a>
            </div>
            <p
              style={{
                margin: "0 0 20px",
                fontSize: 13,
                color: "#546E7A",
                lineHeight: 1.6,
              }}
            >
              {produto.descricao}
            </p>

            <div style={{ borderTop: "1px solid #F0F4FA", paddingTop: 16 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#90A4AE",
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Especificações
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {produto.specs &&
                  Object.entries(produto.specs).map(([key, val]) => (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: "#78909C",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "#263238",
                          fontWeight: 700,
                          textAlign: "right",
                          maxWidth: "55%",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {Array.isArray(val)
                          ? val.join(", ")
                          : typeof val === "object"
                          ? Object.values(val).join(" / ")
                          : val}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </Card>

          {/* Benefícios e Limitações */}
          <Card padding={20}>
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#2E7D32",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                ✓ Benefícios
              </div>
              {produto.beneficios.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    padding: "5px 0",
                    borderBottom:
                      i < produto.beneficios.length - 1
                        ? "1px solid #F0F4FA"
                        : "none",
                  }}
                >
                  <span
                    style={{ color: "#2E7D32", fontWeight: 900, flexShrink: 0 }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: 13, color: "#37474F" }}>{b}</span>
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#B71C1C",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                ⚠ Limitações
              </div>
              {produto.limitacoes.map((l, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    padding: "5px 0",
                    borderBottom:
                      i < produto.limitacoes.length - 1
                        ? "1px solid #F0F4FA"
                        : "none",
                  }}
                >
                  <span style={{ color: "#E65100", flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: 13, color: "#546E7A" }}>{l}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Coluna direita */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card padding={20}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#1B3A6B",
                marginBottom: 16,
              }}
            >
              📊 Scores de Performance
            </div>
            {Object.entries(produto.scores).map(([key, val]) => (
              <ScoreBar
                key={key}
                label={SCORE_LABELS[key] || key}
                value={val}
                color={SCORE_COLORS[key] || "#1B3A6B"}
              />
            ))}
          </Card>

          <Card padding={20}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#1B3A6B",
                marginBottom: 14,
              }}
            >
              🌐 Segmentos Atendidos
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {segsAtendidos.map((seg) => (
                <div
                  key={seg.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "7px 10px",
                    background: seg.corClaro,
                    borderRadius: 6,
                    border: `1px solid ${seg.cor}20`,
                  }}
                >
                  <span style={{ fontSize: 16 }}>{seg.emoji}</span>
                  <span
                    style={{ fontSize: 12, fontWeight: 700, color: seg.cor }}
                  >
                    {seg.nome}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// components/Comparador.js — inline
// ═══════════════════════════════════════════════════════════════════
export function Comparador() {
  const [selecionados, setSelecionados] = useState(["soldada", "costurada"]);

  function toggle(id) {
    if (selecionados.includes(id)) {
      if (selecionados.length > 1)
        setSelecionados((s) => s.filter((x) => x !== id));
    } else {
      if (selecionados.length < 4) setSelecionados((s) => [...s, id]);
    }
  }

  const produtos = PRODUTOS.filter((p) => selecionados.includes(p.id));

  const scoreKeys = Object.keys(PRODUTOS[0].scores);

  function getBest(key) {
    return Math.max(...produtos.map((p) => p.scores[key]));
  }

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Comparador de Produtos"
        subtitle="Compare até 4 embalagens lado a lado em todos os critérios de performance"
        icon="⚖️"
      />

      <Callout type="info">
        Selecione de 1 a 4 produtos para comparar. Os melhores scores em cada
        critério são destacados.
      </Callout>

      {/* Seletor */}
      <div
        style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}
      >
        {PRODUTOS.map((p) => {
          const sel = selecionados.includes(p.id);
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 8,
                fontFamily: "inherit",
                border: `2px solid ${sel ? p.tagColor : "#E8ECF0"}`,
                background: sel ? p.tagColor : "#fff",
                cursor: "pointer",
                color: sel ? "#fff" : "#546E7A",
                fontWeight: 700,
                fontSize: 13,
                transition: "all 0.15s",
              }}
            >
              {sel ? "✓ " : ""}
              {p.nome}
            </button>
          );
        })}
      </div>

      {/* Tabela comparativa */}
      <Card padding={0} style={{ overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    padding: "16px 20px",
                    background: "#0D2347",
                    textAlign: "left",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    width: 160,
                  }}
                >
                  CRITÉRIO
                </th>
                {produtos.map((p) => (
                  <th
                    key={p.id}
                    style={{
                      padding: "16px 20px",
                      background: "#0D2347",
                      textAlign: "center",
                      minWidth: 160,
                    }}
                  >
                    <div
                      style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}
                    >
                      {p.nome}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: p.tagColor,
                        fontWeight: 700,
                        marginTop: 2,
                      }}
                    >
                      {p.tag}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scoreKeys.map((key, ri) => {
                const best = getBest(key);
                return (
                  <tr
                    key={key}
                    style={{ background: ri % 2 === 0 ? "#fff" : "#FAFBFD" }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#37474F",
                      }}
                    >
                      {SCORE_LABELS[key] || key}
                    </td>
                    {produtos.map((p) => {
                      const val = p.scores[key];
                      const isBest = val === best;
                      const color = SCORE_COLORS[key] || "#1B3A6B";
                      return (
                        <td
                          key={p.id}
                          style={{ padding: "14px 20px", textAlign: "center" }}
                        >
                          <div
                            style={{
                              display: "inline-flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 4,
                              padding: "8px 16px",
                              borderRadius: 8,
                              background: isBest ? color + "12" : "transparent",
                              border: isBest
                                ? `1px solid ${color}30`
                                : "1px solid transparent",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 18,
                                fontWeight: 900,
                                color: isBest ? color : "#78909C",
                              }}
                            >
                              {val}/5 {isBest && "★"}
                            </span>
                            <div
                              style={{
                                width: 60,
                                height: 4,
                                background: "#E8ECF0",
                                borderRadius: 2,
                              }}
                            >
                              <div
                                style={{
                                  width: `${val * 20}%`,
                                  height: "100%",
                                  background: isBest ? color : "#B0BEC5",
                                  borderRadius: 2,
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              {/* PDF links */}
              <tr
                style={{
                  background: "#F8FAFD",
                  borderTop: "2px solid #E8ECF0",
                }}
              >
                <td
                  style={{
                    padding: "14px 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#78909C",
                  }}
                >
                  Ficha Técnica
                </td>
                {produtos.map((p) => (
                  <td
                    key={p.id}
                    style={{ padding: "14px 20px", textAlign: "center" }}
                  >
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "6px 14px",
                        background: "#1B3A6B",
                        color: "#fff",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      📄 PDF
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
