// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — components/Especificacoes.js
// Tabela técnica interativa com 30 especificações reais
// ═══════════════════════════════════════════════════════════════════
import { useState, useMemo } from "react";
import { ESPECIFICACOES, SEGMENTOS } from "./data.js";
import {
  Badge,
  SectionHeader,
  Card,
  NivelPill,
  EmptyState,
  Button,
} from "./UI.js";
import { getCriticidadeColor } from "./helpers.js";

const PAGE_SIZE = 8;

const COLS = [
  { id: "produto", label: "Produto", width: 160 },
  { id: "peso", label: "Peso", width: 70 },
  { id: "largura", label: "Largura", width: 80 },
  { id: "comprimento", label: "Comprimento", width: 100 },
  { id: "filme", label: "Filme", width: 150 },
  { id: "gramatura", label: "Gramatura", width: 90 },
  { id: "valvula", label: "Válvula", width: 140 },
  { id: "desaeracao", label: "Desaeração", width: 140 },
  { id: "laminacao", label: "Laminação", width: 90 },
  { id: "resistencia", label: "Resistência", width: 100 },
  { id: "barreira", label: "Barreira", width: 100 },
  { id: "criticidade", label: "Criticidade", width: 100 },
];

export function Especificacoes({ segmentoFiltro }) {
  const [busca, setBusca] = useState("");
  const [segFiltro, setSegFiltro] = useState(segmentoFiltro || "todos");
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState(null);

  const segList = Object.values(SEGMENTOS);

  const filtered = useMemo(() => {
    let data = [...ESPECIFICACOES];
    if (segFiltro !== "todos")
      data = data.filter((e) => e.segmento === segFiltro);
    if (busca.trim()) {
      const q = busca.toLowerCase();
      data = data.filter(
        (e) =>
          e.produto.toLowerCase().includes(q) ||
          e.filme.toLowerCase().includes(q) ||
          e.aplicacao.toLowerCase().includes(q) ||
          e.obs.toLowerCase().includes(q) ||
          e.peso.toLowerCase().includes(q)
      );
    }
    if (sortCol) {
      data = data.sort((a, b) => {
        const av = (a[sortCol] || "").toString().toLowerCase();
        const bv = (b[sortCol] || "").toString().toLowerCase();
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return data;
  }, [busca, segFiltro, sortCol, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleSort(col) {
    if (sortCol === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(col);
      setSortDir("asc");
    }
    setPage(1);
  }

  // Summary stats
  const stats = useMemo(
    () => ({
      total: filtered.length,
      criticas: filtered.filter((e) => e.criticidade === "CRÍTICA").length,
      altas: filtered.filter((e) => e.criticidade === "ALTA").length,
      medias: filtered.filter((e) => e.criticidade === "MÉDIA").length,
    }),
    [filtered]
  );

  const segCor = segFiltro !== "todos" ? SEGMENTOS[segFiltro]?.cor : "#1B3A6B";

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Especificações Técnicas"
        subtitle="Base de dados técnica com 30 especificações reais de sacarias por produto e segmento"
        icon="📋"
        action={
          <a
            href="https://embrasa.com.br/arquivos/EMB_apresentacao_2025.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              background: "#1B3A6B",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            📄 Catálogo PDF
          </a>
        }
      />

      {/* Summary cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {[
          {
            label: "Total de Especificações",
            val: stats.total,
            icon: "📋",
            color: "#1B3A6B",
          },
          {
            label: "Aplicações Críticas",
            val: stats.criticas,
            icon: "⚡",
            color: "#B71C1C",
          },
          {
            label: "Aplicações Altas",
            val: stats.altas,
            icon: "▲",
            color: "#E65100",
          },
          {
            label: "Aplicações Médias",
            val: stats.medias,
            icon: "◆",
            color: "#2E7D32",
          },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: "14px 18px",
              border: `1px solid ${s.color}20`,
              borderTop: `3px solid ${s.color}`,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: s.color,
                lineHeight: 1,
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: 11, color: "#78909C", marginTop: 2 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Filtros */}
      <Card padding={16} style={{ marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Busca */}
          <div style={{ position: "relative", flex: "1 1 220px" }}>
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#90A4AE",
                fontSize: 14,
              }}
            >
              🔍
            </span>
            <input
              value={busca}
              onChange={(e) => {
                setBusca(e.target.value);
                setPage(1);
              }}
              placeholder="Buscar produto, filme, aplicação..."
              style={{
                width: "100%",
                padding: "9px 12px 9px 32px",
                border: "1px solid #D8E2F0",
                borderRadius: 6,
                fontSize: 13,
                background: "#F8FAFD",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Filtro segmento */}
          <select
            value={segFiltro}
            onChange={(e) => {
              setSegFiltro(e.target.value);
              setPage(1);
            }}
            style={{
              padding: "9px 14px",
              border: "1px solid #D8E2F0",
              borderRadius: 6,
              fontSize: 13,
              background: "#F8FAFD",
              fontFamily: "inherit",
              cursor: "pointer",
              color: "#263238",
            }}
          >
            <option value="todos">Todos os segmentos</option>
            {segList.map((s) => (
              <option key={s.id} value={s.id}>
                {s.emoji} {s.nome}
              </option>
            ))}
          </select>

          {/* Filtro criticidade */}
          {(busca || segFiltro !== "todos") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setBusca("");
                setSegFiltro("todos");
                setPage(1);
              }}
            >
              ✕ Limpar filtros
            </Button>
          )}
        </div>

        {/* Pills de segmento */}
        <div
          style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}
        >
          <button
            onClick={() => {
              setSegFiltro("todos");
              setPage(1);
            }}
            style={{
              padding: "4px 12px",
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 700,
              border: `1.5px solid ${
                segFiltro === "todos" ? "#1B3A6B" : "#D8E2F0"
              }`,
              background: segFiltro === "todos" ? "#1B3A6B" : "transparent",
              color: segFiltro === "todos" ? "#fff" : "#546E7A",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Todos
          </button>
          {segList.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSegFiltro(s.id);
                setPage(1);
              }}
              style={{
                padding: "4px 12px",
                borderRadius: 99,
                fontSize: 11,
                fontWeight: 700,
                border: `1.5px solid ${segFiltro === s.id ? s.cor : "#D8E2F0"}`,
                background: segFiltro === s.id ? s.cor : "transparent",
                color: segFiltro === s.id ? "#fff" : "#546E7A",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {s.emoji} {s.nome}
            </button>
          ))}
        </div>
      </Card>

      {/* Tabela */}
      <Card padding={0} style={{ overflow: "hidden" }}>
        {filtered.length === 0 ? (
          <EmptyState
            icon="🔍"
            title="Nenhuma especificação encontrada"
            subtitle="Tente ajustar os filtros de busca"
          />
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 12,
                minWidth: 900,
              }}
            >
              <thead>
                <tr style={{ background: "#0D2347" }}>
                  <th style={{ width: 36, padding: "12px 8px" }} />
                  {COLS.map((col) => (
                    <th
                      key={col.id}
                      onClick={() => handleSort(col.id)}
                      style={{
                        padding: "12px 14px",
                        textAlign: "left",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color:
                          sortCol === col.id
                            ? "#7EC8E3"
                            : "rgba(255,255,255,0.75)",
                        cursor: "pointer",
                        userSelect: "none",
                        whiteSpace: "nowrap",
                        minWidth: col.width,
                      }}
                    >
                      {col.label}
                      {sortCol === col.id && (
                        <span style={{ marginLeft: 4, opacity: 0.8 }}>
                          {sortDir === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageData.map((esp, idx) => {
                  const seg = SEGMENTOS[esp.segmento];
                  const crit = getCriticidadeColor(esp.criticidade);
                  const isExp = expanded === esp.id;
                  const isCritica = esp.criticidade === "CRÍTICA";

                  return (
                    <>
                      <tr
                        key={esp.id}
                        style={{
                          background: isCritica
                            ? "#FFF5F5"
                            : idx % 2 === 0
                            ? "#fff"
                            : "#FAFBFD",
                          borderLeft: isCritica
                            ? "3px solid #B71C1C"
                            : `3px solid ${seg?.cor || "#1B3A6B"}`,
                          cursor: "pointer",
                          transition: "background 0.15s",
                        }}
                        onClick={() => setExpanded(isExp ? null : esp.id)}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = isCritica
                            ? "#FFE8E8"
                            : "#EEF3FB")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = isCritica
                            ? "#FFF5F5"
                            : idx % 2 === 0
                            ? "#fff"
                            : "#FAFBFD")
                        }
                      >
                        <td
                          style={{ padding: "10px 8px", textAlign: "center" }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 20,
                              height: 20,
                              background: "#F0F4FA",
                              borderRadius: 4,
                              fontSize: 10,
                              color: "#546E7A",
                              fontWeight: 700,
                            }}
                          >
                            {isExp ? "▲" : "▼"}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            fontWeight: 700,
                            color: "#263238",
                          }}
                        >
                          {esp.produto}
                          {seg && (
                            <div
                              style={{
                                fontSize: 10,
                                color: seg.cor,
                                fontWeight: 600,
                                marginTop: 2,
                              }}
                            >
                              {seg.emoji} {seg.nome}
                            </div>
                          )}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            fontWeight: 700,
                            color: "#37474F",
                            fontFamily: "JetBrains Mono, monospace",
                          }}
                        >
                          {esp.peso}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            color: "#546E7A",
                            fontFamily: "JetBrains Mono, monospace",
                          }}
                        >
                          {esp.largura}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            color: "#546E7A",
                            fontFamily: "JetBrains Mono, monospace",
                          }}
                        >
                          {esp.comprimento}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            color: "#37474F",
                            fontSize: 11,
                          }}
                        >
                          {esp.filme}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            fontFamily: "JetBrains Mono, monospace",
                            fontWeight: 700,
                            color: "#1B3A6B",
                          }}
                        >
                          {esp.gramatura}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            color: "#546E7A",
                            fontSize: 11,
                          }}
                        >
                          {esp.valvula}
                        </td>
                        <td
                          style={{
                            padding: "10px 14px",
                            color: "#546E7A",
                            fontSize: 11,
                          }}
                        >
                          {esp.desaeracao}
                        </td>
                        <td style={{ padding: "10px 14px" }}>
                          <span
                            style={{
                              padding: "2px 8px",
                              borderRadius: 4,
                              fontSize: 10,
                              fontWeight: 700,
                              background:
                                esp.laminacao === "Não" ? "#F5F7FA" : "#E8F5E9",
                              color:
                                esp.laminacao === "Não" ? "#90A4AE" : "#2E7D32",
                            }}
                          >
                            {esp.laminacao}
                          </span>
                        </td>
                        <td style={{ padding: "10px 14px" }}>
                          <NivelPill
                            label={esp.resistencia}
                            type="resistencia"
                          />
                        </td>
                        <td style={{ padding: "10px 14px" }}>
                          <NivelPill label={esp.barreira} type="barreira" />
                        </td>
                        <td style={{ padding: "10px 14px" }}>
                          <Badge level={esp.criticidade} />
                        </td>
                      </tr>
                      {isExp && (
                        <tr
                          key={esp.id + "-exp"}
                          style={{ background: crit.bg }}
                        >
                          <td
                            colSpan={COLS.length + 1}
                            style={{ padding: "0 0 0 3px" }}
                          >
                            <div
                              style={{
                                padding: "16px 20px",
                                borderLeft: `3px solid ${crit.border}`,
                              }}
                            >
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "1fr 1fr 1fr",
                                  gap: 16,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: "#546E7A",
                                      marginBottom: 6,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.05em",
                                    }}
                                  >
                                    Estrutura Recomendada
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 13,
                                      color: "#263238",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {esp.estrutura}
                                  </div>
                                </div>
                                <div>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: "#546E7A",
                                      marginBottom: 6,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.05em",
                                    }}
                                  >
                                    Aplicação
                                  </div>
                                  <div
                                    style={{ fontSize: 13, color: "#263238" }}
                                  >
                                    {esp.aplicacao}
                                  </div>
                                </div>
                                <div>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: "#546E7A",
                                      marginBottom: 6,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.05em",
                                    }}
                                  >
                                    Fundo
                                  </div>
                                  <div
                                    style={{ fontSize: 13, color: "#263238" }}
                                  >
                                    {esp.fundo}
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  marginTop: 12,
                                  padding: "10px 14px",
                                  background: crit.bg,
                                  border: `1px solid ${crit.border}`,
                                  borderRadius: 6,
                                  display: "flex",
                                  gap: 8,
                                  alignItems: "flex-start",
                                }}
                              >
                                <span
                                  style={{ color: crit.text, fontSize: 14 }}
                                >
                                  {esp.criticidade === "CRÍTICA"
                                    ? "⚡"
                                    : esp.criticidade === "ALTA"
                                    ? "▲"
                                    : "◆"}
                                </span>
                                <div>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: crit.text,
                                      marginBottom: 2,
                                    }}
                                  >
                                    Obs. Técnica — Criticidade {esp.criticidade}
                                  </div>
                                  <div
                                    style={{ fontSize: 12, color: "#37474F" }}
                                  >
                                    {esp.obs}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Paginação */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderTop: "1px solid #E8ECF0",
            }}
          >
            <span style={{ fontSize: 12, color: "#78909C" }}>
              Mostrando {(page - 1) * PAGE_SIZE + 1}–
              {Math.min(page * PAGE_SIZE, filtered.length)} de {filtered.length}{" "}
              especificações
            </span>
            <div style={{ display: "flex", gap: 4 }}>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 1}
              >
                ‹ Anterior
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    border: "1px solid",
                    borderColor: p === page ? "#1B3A6B" : "#D8E2F0",
                    background: p === page ? "#1B3A6B" : "#fff",
                    color: p === page ? "#fff" : "#546E7A",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {p}
                </button>
              ))}
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setPage((p) => p + 1)}
                disabled={page === totalPages}
              >
                Próxima ›
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Legenda */}
      <div
        style={{ marginTop: 16, display: "flex", gap: 20, flexWrap: "wrap" }}
      >
        <div style={{ fontSize: 11, color: "#78909C" }}>
          <strong>Legenda de Criticidade:</strong>
          &nbsp;⚡ CRÍTICA — risco técnico/jurídico alto &nbsp;▲ ALTA — impacto
          operacional significativo &nbsp;◆ MÉDIA — boa prática recomendada
        </div>
        <div style={{ fontSize: 11, color: "#78909C" }}>
          Clique em qualquer linha para ver detalhes completos da especificação.
        </div>
      </div>
    </div>
  );
}
