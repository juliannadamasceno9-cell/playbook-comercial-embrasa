// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — components/Views.js
// Múltiplas views: Segmento, Riscos, Glossario, Diferenciais,
// Argumentos, FluxoDecisao, Perguntas, Recomendacoes
// ═══════════════════════════════════════════════════════════════════
import { useState, useMemo } from "react";
import {
  SEGMENTOS,
  PRODUTOS,
  GLOSSARIO,
  DIFERENCIAIS,
  EMBRASA,
  KPIS,
} from "./data.js";
import {
  Badge,
  SectionHeader,
  Card,
  Callout,
  Button,
  Tabs,
  EmptyState,
} from "./UI.js";
import { getCriticidadeColor } from "./helpers.js";

// ─── SEGMENTO VIEW ───────────────────────────────────────────────────────
export function SegmentoView({ segId, onNavigate }) {
  const [tab, setTab] = useState("visao");
  const seg = SEGMENTOS[segId];
  if (!seg) return <EmptyState icon="🔍" title="Segmento não encontrado" />;

  const prodRec = PRODUTOS.filter((p) =>
    seg.recomendacoes.primaria.includes(p.id)
  );
  const prodAlt = PRODUTOS.filter((p) =>
    seg.recomendacoes.alternativa.includes(p.id)
  );

  const tabs = [
    { id: "visao", label: "Visão do Mercado", icon: "🌐" },
    { id: "recs", label: "Recomendações", icon: "⭐" },
    { id: "flow", label: "Perguntas Consultivas", icon: "❓" },
    { id: "argumentos", label: "Argumentos", icon: "💬" },
    { id: "riscos", label: "Riscos", icon: "⚠️" },
  ];

  return (
    <div className="view-container fade-in">
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, ${seg.cor}EE 0%, ${seg.cor} 100%)`,
          borderRadius: 12,
          padding: "32px 40px",
          marginBottom: 24,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            fontSize: 80,
            opacity: 0.15,
          }}
        >
          {seg.emoji}
        </div>
        <div style={{ fontSize: 36, marginBottom: 8 }}>{seg.emoji}</div>
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: "-0.02em",
          }}
        >
          {seg.nome}
        </h2>
        <p
          style={{
            margin: 0,
            opacity: 0.85,
            fontSize: 14,
            maxWidth: 480,
            lineHeight: 1.6,
          }}
        >
          {seg.mercado}
        </p>
      </div>

      <Tabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "visao" && (
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          <Card padding={20}>
            <div
              style={{
                fontWeight: 800,
                color: "#1B3A6B",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              📦 Produtos Envasados
            </div>
            {seg.produtosEnvasados.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 0",
                  borderBottom:
                    i < seg.produtosEnvasados.length - 1
                      ? "1px solid #F0F4FA"
                      : "none",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    background: seg.cor,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: "#37474F" }}>{p}</span>
              </div>
            ))}
          </Card>

          <Card padding={20}>
            <div
              style={{
                fontWeight: 800,
                color: "#1B3A6B",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              🎯 Necessidades Técnicas
            </div>
            {seg.necessidades.map((n, i) => {
              const c = getCriticidadeColor(n.critica);
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "7px 0",
                    borderBottom:
                      i < seg.necessidades.length - 1
                        ? "1px solid #F0F4FA"
                        : "none",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 12, color: "#546E7A", flex: 1 }}>
                    {n.item}
                  </span>
                  <Badge level={n.critica} />
                </div>
              );
            })}
          </Card>

          <Card padding={20}>
            <div
              style={{
                fontWeight: 800,
                color: "#B71C1C",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              ⚠️ Problemas dos Clientes
            </div>
            {seg.problemas.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "7px 0",
                  borderBottom:
                    i < seg.problemas.length - 1 ? "1px solid #F0F4FA" : "none",
                }}
              >
                <span style={{ color: "#E65100", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 13, color: "#546E7A" }}>{p}</span>
              </div>
            ))}
          </Card>

          <Card padding={20}>
            <div
              style={{
                fontWeight: 800,
                color: "#1B3A6B",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              📋 Regulatório & Logística
            </div>
            <Callout type="warn">{seg.regulatorio}</Callout>
            <Callout type="info">{seg.logistica}</Callout>
          </Card>
        </div>
      )}

      {tab === "recs" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Callout type="tip">{seg.recomendacoes.justificativa}</Callout>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <div>
              <div
                style={{
                  fontWeight: 800,
                  color: "#2E7D32",
                  fontSize: 13,
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                ⭐ Recomendação Primária
              </div>
              {prodRec.map((p) => (
                <Card
                  key={p.id}
                  padding={16}
                  style={{
                    marginBottom: 10,
                    borderLeft: `3px solid ${p.tagColor}`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: "#1B3A6B",
                      marginBottom: 4,
                    }}
                  >
                    {p.nome}
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#546E7A", marginBottom: 10 }}
                  >
                    {p.descricao.substring(0, 80)}...
                  </div>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      color: p.tagColor,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    📄 Ver Ficha PDF →
                  </a>
                </Card>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  color: "#78909C",
                  fontSize: 13,
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                ◆ Alternativa / Complementar
              </div>
              {prodAlt.map((p) => (
                <Card
                  key={p.id}
                  padding={16}
                  style={{ marginBottom: 10, border: "1px dashed #D8E2F0" }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#37474F",
                      marginBottom: 4,
                    }}
                  >
                    {p.nome}
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#78909C", marginBottom: 10 }}
                  >
                    {p.descricao.substring(0, 80)}...
                  </div>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      color: "#546E7A",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    📄 Ver Ficha PDF →
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "flow" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Callout type="info">
            Use estas perguntas como roteiro consultivo durante a visita ou
            chamada com o cliente.
          </Callout>
          {seg.perguntas.map((p, i) => (
            <Card
              key={i}
              padding={18}
              style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: seg.cor,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#1B3A6B",
                    fontSize: 14,
                    marginBottom: 6,
                  }}
                >
                  ❓ {p.pergunta}
                </div>
                <div style={{ fontSize: 12, color: "#546E7A" }}>
                  <span style={{ fontWeight: 700, color: "#2E7D32" }}>
                    O que revela:{" "}
                  </span>
                  {p.revela}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "argumentos" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {Object.entries(seg.argumentos).map(([perfil, args]) => {
            const icons = { comprador: "💼", tecnico: "🔧", diretor: "👔" };
            const labels = {
              comprador: "Comprador / Gerente",
              tecnico: "Engenheiro / Técnico",
              diretor: "Diretor / CEO",
            };
            const colors = {
              comprador: "#1B3A6B",
              tecnico: "#2E7D32",
              diretor: "#6A1B9A",
            };
            return (
              <Card key={perfil} padding={20}>
                <div
                  style={{
                    fontWeight: 800,
                    color: colors[perfil],
                    fontSize: 15,
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 20 }}>{icons[perfil]}</span>
                  {labels[perfil]}
                </div>
                {args.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      padding: "10px 14px",
                      marginBottom: 8,
                      background: colors[perfil] + "08",
                      borderRadius: 8,
                      border: `1px solid ${colors[perfil]}15`,
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: colors[perfil],
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#37474F",
                        lineHeight: 1.5,
                      }}
                    >
                      {a}
                    </span>
                  </div>
                ))}
              </Card>
            );
          })}
        </div>
      )}

      {tab === "riscos" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Callout type="danger">
            Estes são os principais riscos de especificação incorreta para o
            segmento {seg.nome}.
          </Callout>
          {seg.riscos.map((r, i) => {
            const c = getCriticidadeColor(r.tipo);
            return (
              <div
                key={i}
                style={{
                  padding: "16px 20px",
                  borderRadius: 10,
                  border: `1px solid ${c.border}`,
                  background: c.bg,
                  borderLeft: `4px solid ${c.text}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <Badge level={r.tipo} />
                  <div style={{ fontWeight: 800, color: c.text, fontSize: 14 }}>
                    {r.risco}
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#546E7A" }}>
                  <span style={{ fontWeight: 700, color: "#37474F" }}>
                    Consequência:{" "}
                  </span>
                  {r.consequencia}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── RISCOS GLOBAIS ──────────────────────────────────────────────────────
export function RiscosView() {
  const [filtro, setFiltro] = useState("todos");
  const segList = Object.values(SEGMENTOS);

  const riscos = useMemo(() => {
    const all = [];
    Object.values(SEGMENTOS).forEach((seg) => {
      seg.riscos.forEach((r) => all.push({ ...r, segmento: seg }));
    });
    if (filtro === "todos") return all;
    return all.filter((r) => r.segmento.id === filtro);
  }, [filtro]);

  const criticos = riscos.filter((r) => r.tipo === "CRÍTICO").length;
  const altos = riscos.filter((r) => r.tipo === "ALTO").length;

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Riscos Técnicos"
        subtitle="Consequências de especificação incorreta por segmento"
        icon="⚠️"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {[
          {
            label: "Riscos Críticos",
            val: criticos,
            color: "#B71C1C",
            bg: "#FFEBEE",
            icon: "⚡",
          },
          {
            label: "Riscos Altos",
            val: altos,
            color: "#E65100",
            bg: "#FFF3E0",
            icon: "▲",
          },
          {
            label: "Total de Riscos",
            val: riscos.length,
            color: "#546E7A",
            bg: "#F5F7FA",
            icon: "⚠️",
          },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              padding: "16px 20px",
              background: s.bg,
              borderRadius: 8,
              border: `1px solid ${s.color}20`,
              borderTop: `3px solid ${s.color}`,
            }}
          >
            <div style={{ fontSize: 20 }}>{s.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>
              {s.val}
            </div>
            <div style={{ fontSize: 11, color: "#78909C" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <Callout type="danger">
        Riscos críticos podem gerar multas, recalls, acidentes de trabalho e
        perda de contratos. Especificação técnica correta é responsabilidade do
        fornecedor de embalagem.
      </Callout>

      <div
        style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}
      >
        <button
          onClick={() => setFiltro("todos")}
          style={{
            padding: "5px 14px",
            borderRadius: 99,
            fontSize: 11,
            fontWeight: 700,
            border: `1.5px solid ${filtro === "todos" ? "#1B3A6B" : "#D8E2F0"}`,
            background: filtro === "todos" ? "#1B3A6B" : "#fff",
            color: filtro === "todos" ? "#fff" : "#546E7A",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Todos
        </button>
        {segList.map((s) => (
          <button
            key={s.id}
            onClick={() => setFiltro(s.id)}
            style={{
              padding: "5px 14px",
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 700,
              border: `1.5px solid ${filtro === s.id ? s.cor : "#D8E2F0"}`,
              background: filtro === s.id ? s.cor : "#fff",
              color: filtro === s.id ? "#fff" : "#546E7A",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {s.emoji} {s.nome}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {riscos.map((r, i) => {
          const c = getCriticidadeColor(r.tipo);
          return (
            <div
              key={i}
              style={{
                padding: "14px 18px",
                borderRadius: 8,
                border: `1px solid ${c.border}`,
                background: c.bg,
                borderLeft: `4px solid ${c.text}`,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Badge level={r.tipo} />
                <div
                  style={{
                    marginTop: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span style={{ fontSize: 14 }}>{r.segmento.emoji}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: r.segmento.cor,
                      fontWeight: 700,
                    }}
                  >
                    {r.segmento.nome}
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    color: "#263238",
                    fontSize: 13,
                    marginBottom: 4,
                  }}
                >
                  {r.risco}
                </div>
                <div style={{ fontSize: 12, color: "#546E7A" }}>
                  <span style={{ fontWeight: 700 }}>Consequência: </span>
                  {r.consequencia}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── GLOSSÁRIO ───────────────────────────────────────────────────────────
export function GlossarioView() {
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(
    () =>
      GLOSSARIO.filter(
        (g) =>
          g.termo.toLowerCase().includes(busca.toLowerCase()) ||
          g.def.toLowerCase().includes(busca.toLowerCase())
      ),
    [busca]
  );

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Glossário Técnico"
        subtitle="20 termos essenciais para especificação de embalagens industriais"
        icon="📖"
      />

      <div style={{ position: "relative", marginBottom: 20, maxWidth: 400 }}>
        <span
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#90A4AE",
          }}
        >
          🔍
        </span>
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar termo técnico..."
          style={{
            width: "100%",
            padding: "10px 12px 10px 32px",
            border: "1px solid #D8E2F0",
            borderRadius: 8,
            fontSize: 14,
            fontFamily: "inherit",
            background: "#F8FAFD",
            boxSizing: "border-box",
          }}
        />
      </div>

      {filtrados.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="Nenhum termo encontrado"
          subtitle="Tente outro termo de busca"
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {filtrados.map((g, i) => (
            <div
              key={g.termo}
              style={{
                display: "flex",
                gap: 20,
                padding: "14px 18px",
                borderRadius: 6,
                background: i % 2 === 0 ? "#fff" : "#F8FAFD",
                border: "1px solid #F0F4FA",
              }}
            >
              <div style={{ minWidth: 140, flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#1B3A6B",
                  }}
                >
                  {g.termo}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "#546E7A", lineHeight: 1.6 }}>
                {g.def}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── DIFERENCIAIS ────────────────────────────────────────────────────────
export function DiferenciaisView() {
  return (
    <div className="view-container fade-in">
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0D2347, #1B3A6B)",
          borderRadius: 12,
          padding: "40px 48px",
          marginBottom: 28,
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
        <h2
          style={{
            margin: "0 0 12px",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          Por que Embrasa?
        </h2>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 500,
            fontSize: 14,
            opacity: 0.8,
            lineHeight: 1.6,
          }}
        >
          {EMBRASA.slogan}. Fundada em {EMBRASA.fundacao}, somos referência em
          embalagens industriais com {EMBRASA.colaboradores.toLocaleString()}+
          colaboradores.
        </p>
      </div>

      {/* Diferenciais */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
          marginBottom: 28,
        }}
      >
        {DIFERENCIAIS.map((d, i) => (
          <Card key={i} padding={22}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{d.icon}</div>
            <div
              style={{
                fontWeight: 800,
                color: "#1B3A6B",
                fontSize: 15,
                marginBottom: 8,
              }}
            >
              {d.titulo}
            </div>
            <div style={{ fontSize: 13, color: "#546E7A", lineHeight: 1.6 }}>
              {d.desc}
            </div>
          </Card>
        ))}
      </div>

      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 12,
          marginBottom: 28,
        }}
      >
        {KPIS.map((k, i) => (
          <div
            key={i}
            style={{
              padding: "18px 20px",
              background: [
                "#E8EDF5",
                "#E8F5E9",
                "#FBE9E7",
                "#F3E5F5",
                "#E3F2FD",
                "#E0F2F1",
              ][i % 6],
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 6 }}>{k.icon}</div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 900,
                color: [
                  "#1B3A6B",
                  "#2E7D32",
                  "#E65100",
                  "#6A1B9A",
                  "#1565C0",
                  "#00695C",
                ][i % 6],
              }}
            >
              {k.valor}
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#546E7A",
                marginTop: 2,
              }}
            >
              {k.label}
            </div>
            <div style={{ fontSize: 10, color: "#90A4AE" }}>{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Unidades */}
      <Card padding={24} style={{ marginBottom: 20 }}>
        <div
          style={{
            fontWeight: 800,
            color: "#1B3A6B",
            fontSize: 16,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>🗺️</span> 5 Unidades Industriais no Brasil
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 10,
          }}
        >
          {EMBRASA.unidades.map((u, i) => (
            <div
              key={i}
              style={{
                padding: "12px 16px",
                background: u.tipo === "Matriz" ? "#E8EDF5" : "#F8FAFD",
                borderRadius: 8,
                border:
                  u.tipo === "Matriz"
                    ? "1px solid #1B3A6B40"
                    : "1px solid #E8ECF0",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: u.tipo === "Matriz" ? "#1B3A6B" : "#78909C",
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                {u.tipo}
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#263238" }}>
                {u.nome}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Contato */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <a
          href={`https://wa.me/${EMBRASA.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 28px",
            background: "#25D366",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          💬 WhatsApp Especialista
        </a>
        <a
          href={EMBRASA.catalogo}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 28px",
            background: "#1B3A6B",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          📄 Catálogo 2025
        </a>
        <a
          href={EMBRASA.site}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 28px",
            background: "#F0F4FA",
            color: "#1B3A6B",
            border: "1px solid #D0DCF0",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          🌐 Site Embrasa
        </a>
      </div>
    </div>
  );
}

// ─── ARGUMENTOS ──────────────────────────────────────────────────────────
export function ArgumentosView({ segId }) {
  const [segAtivo, setSegAtivo] = useState(segId || "nutricao");
  const seg = SEGMENTOS[segAtivo];
  const segList = Object.values(SEGMENTOS);

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Argumentos Comerciais"
        subtitle="Argumentos por perfil de cliente e segmento de mercado"
        icon="💬"
      />

      <div
        style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}
      >
        {segList.map((s) => (
          <button
            key={s.id}
            onClick={() => setSegAtivo(s.id)}
            style={{
              padding: "6px 14px",
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 700,
              border: `1.5px solid ${segAtivo === s.id ? s.cor : "#D8E2F0"}`,
              background: segAtivo === s.id ? s.cor : "#fff",
              color: segAtivo === s.id ? "#fff" : "#546E7A",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {s.emoji} {s.nome}
          </button>
        ))}
      </div>

      {seg && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {Object.entries(seg.argumentos).map(([perfil, args]) => {
            const icons = { comprador: "💼", tecnico: "🔧", diretor: "👔" };
            const labels = {
              comprador: "Comprador / Gerente",
              tecnico: "Engenheiro / Técnico",
              diretor: "Diretor / CEO",
            };
            const colors = {
              comprador: "#1B3A6B",
              tecnico: "#2E7D32",
              diretor: "#6A1B9A",
            };
            return (
              <Card
                key={perfil}
                padding={20}
                style={{ borderTop: `3px solid ${colors[perfil]}` }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    color: colors[perfil],
                    fontSize: 14,
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 20 }}>{icons[perfil]}</span>
                  {labels[perfil]}
                </div>
                {args.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      padding: "10px 0",
                      borderBottom:
                        i < args.length - 1 ? "1px solid #F0F4FA" : "none",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: colors[perfil],
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "#37474F",
                        lineHeight: 1.5,
                      }}
                    >
                      {a}
                    </span>
                  </div>
                ))}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── FLUXO DE DECISÃO ────────────────────────────────────────────────────
export function FluxoDecisaoView({ segId }) {
  const [segAtivo, setSegAtivo] = useState(segId || "nutricao");
  const seg = SEGMENTOS[segAtivo];
  const segList = Object.values(SEGMENTOS);

  const fluxo = [
    {
      perg: "Qual o peso do produto?",
      ops: ["Até 50kg → Sacaria", "Acima de 200kg → Big Bag", "Ambos"],
    },
    {
      perg: "Produto higroscópico?",
      ops: ["Sim → Alta barreira + válvula selagem", "Não → Barreira padrão"],
    },
    {
      perg: "Produto classificado como perigoso?",
      ops: [
        "Sim → Certificação ANTT/ONU obrigatória",
        "Não → Embalagem padrão",
      ],
    },
    {
      perg: "Tipo de envase?",
      ops: [
        "Automático → Válvula dobrável/selagem",
        "Manual → Boca costurada ou válvula padrão",
      ],
    },
    {
      perg: "Necessidade de impressão?",
      ops: [
        "Premium (varejo) → 10 cores 4 lados",
        "Funcional → 2–4 cores",
        "Sem impressão",
      ],
    },
    {
      perg: "Exige empilhamento alto?",
      ops: [
        "Sim → Gramatura mínima 95 g/m² / Big Bag travado",
        "Não → Gramatura padrão",
      ],
    },
  ];

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Fluxo de Decisão Consultiva"
        subtitle="Roteiro de perguntas para especificação técnica correta"
        icon="🔀"
      />

      <div
        style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}
      >
        {segList.map((s) => (
          <button
            key={s.id}
            onClick={() => setSegAtivo(s.id)}
            style={{
              padding: "5px 12px",
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 700,
              border: `1.5px solid ${segAtivo === s.id ? s.cor : "#D8E2F0"}`,
              background: segAtivo === s.id ? s.cor : "#fff",
              color: segAtivo === s.id ? "#fff" : "#546E7A",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {s.emoji} {s.nome}
          </button>
        ))}
      </div>

      {seg && (
        <Callout type="info">
          Segmento ativo:{" "}
          <strong>
            {seg.emoji} {seg.nome}
          </strong>{" "}
          — {seg.recomendacoes.justificativa}
        </Callout>
      )}

      <div style={{ position: "relative", paddingLeft: 40 }}>
        {/* Linha vertical */}
        <div
          style={{
            position: "absolute",
            left: 16,
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(180deg, #1B3A6B, #E8ECF0)",
          }}
        />

        {fluxo.map((f, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 20 }}>
            {/* Ponto */}
            <div
              style={{
                position: "absolute",
                left: -31,
                top: 14,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#1B3A6B",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 900,
                zIndex: 1,
              }}
            >
              {i + 1}
            </div>

            <Card padding={18}>
              <div
                style={{
                  fontWeight: 800,
                  color: "#1B3A6B",
                  fontSize: 14,
                  marginBottom: 10,
                }}
              >
                ❓ {f.perg}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {f.ops.map((op, j) => (
                  <div
                    key={j}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      background:
                        j === 0 ? "#E8F5E9" : j === 1 ? "#FFF3E0" : "#F5F7FA",
                      color:
                        j === 0 ? "#2E7D32" : j === 1 ? "#E65100" : "#546E7A",
                      border: `1px solid ${
                        j === 0 ? "#A5D6A7" : j === 1 ? "#FFCC80" : "#E8ECF0"
                      }`,
                    }}
                  >
                    {op}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}

        {/* Resultado */}
        {seg && (
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: -31,
                top: 14,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#2E7D32",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                zIndex: 1,
              }}
            >
              ✓
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #1E5631, #2E7D32)",
                borderRadius: 10,
                padding: "18px 22px",
                color: "#fff",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>
                ✅ Recomendação para {seg.nome}
              </div>
              <div style={{ fontSize: 13, opacity: 0.9 }}>
                {seg.recomendacoes.justificativa}
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                {seg.recomendacoes.primaria.map((pid) => {
                  const prod = PRODUTOS.find((p) => p.id === pid);
                  return prod ? (
                    <a
                      key={pid}
                      href={prod.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "6px 14px",
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: 6,
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      📄 {prod.nome}
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
