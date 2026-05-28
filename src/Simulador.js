// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — components/Simulador.js
// Simulador inteligente de recomendação de embalagem
// ═══════════════════════════════════════════════════════════════════
import { useState } from "react";
import { SIMULADOR_PERGUNTAS, PRODUTOS, EMBRASA } from "./data.js";
import { SectionHeader, Card, Button, Callout } from "./UI.js";
import { calcularRecomendacao } from "./helpers.js";

export function Simulador({ onNavigate }) {
  const [step, setStep] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);

  const total = SIMULADOR_PERGUNTAS.length;
  const progresso = Math.round((step / total) * 100);

  function handleResposta(pergId, opcId) {
    const novasRespostas = { ...respostas, [pergId]: opcId };
    setRespostas(novasRespostas);
    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 300);
    } else {
      const rec = calcularRecomendacao(novasRespostas);
      setResultado(rec);
    }
  }

  function reset() {
    setStep(0);
    setRespostas({});
    setResultado(null);
  }

  const currentPerg = SIMULADOR_PERGUNTAS[step];
  const produtoRec = resultado
    ? PRODUTOS.find((p) => p.id === resultado.produtoId)
    : null;

  return (
    <div className="view-container fade-in">
      <SectionHeader
        title="Simulador de Recomendação"
        subtitle="Responda 7 perguntas para receber a recomendação técnica ideal de embalagem"
        icon="🎯"
      />

      {!resultado ? (
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          {/* Progresso */}
          <Card padding={24} style={{ marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1B3A6B" }}>
                Pergunta {step + 1} de {total}
              </span>
              <span style={{ fontSize: 13, color: "#78909C" }}>
                {progresso}% concluído
              </span>
            </div>
            <div
              style={{
                height: 6,
                background: "#E8ECF0",
                borderRadius: 99,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 99,
                  width: `${progresso}%`,
                  background: "linear-gradient(90deg, #1B3A6B, #2196F3)",
                  transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
            {/* Steps */}
            <div style={{ display: "flex", gap: 4, marginTop: 12 }}>
              {SIMULADOR_PERGUNTAS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background:
                      i < step ? "#1B3A6B" : i === step ? "#2196F3" : "#E8ECF0",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          </Card>

          {/* Pergunta atual */}
          <Card padding={32} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>
              {["📦", "💧", "🛡️", "⚡", "🎨", "⚠️", "♻️"][step]}
            </div>
            <h2
              style={{
                margin: "0 0 28px",
                fontSize: 22,
                fontWeight: 800,
                color: "#1B3A6B",
                lineHeight: 1.3,
              }}
            >
              {currentPerg.pergunta}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {currentPerg.opcoes.map((opc) => (
                <button
                  key={opc.id}
                  onClick={() => handleResposta(currentPerg.id, opc.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    background: "#F8FAFD",
                    border: "2px solid #E8ECF0",
                    borderRadius: 10,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left",
                    transition: "all 0.15s ease",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#263238",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#1B3A6B";
                    e.currentTarget.style.background = "#EEF3FB";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E8ECF0";
                    e.currentTarget.style.background = "#F8FAFD";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "#fff",
                      border: "1px solid #E8ECF0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {opc.icon}
                  </span>
                  <span>{opc.label}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#90A4AE",
                      fontSize: 18,
                    }}
                  >
                    ›
                  </span>
                </button>
              ))}
            </div>

            {/* Resumo respostas */}
            {step > 0 && (
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid #E8ECF0",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#90A4AE",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Respostas até agora
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {SIMULADOR_PERGUNTAS.slice(0, step).map((p) => {
                    const resp = respostas[p.id];
                    const opc = p.opcoes.find((o) => o.id === resp);
                    return opc ? (
                      <span
                        key={p.id}
                        style={{
                          padding: "4px 10px",
                          background: "#E3F2FD",
                          color: "#1565C0",
                          borderRadius: 99,
                          fontSize: 11,
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        {opc.icon} {opc.label}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </Card>

          {step > 0 && (
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep((s) => s - 1)}
              >
                ‹ Voltar
              </Button>
            </div>
          )}
        </div>
      ) : (
        /* RESULTADO */
        <div style={{ maxWidth: 720, margin: "0 auto" }} className="fade-in">
          <div
            style={{
              background: "linear-gradient(135deg, #1E5631, #2E7D32)",
              borderRadius: 12,
              padding: "28px 32px",
              marginBottom: 20,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                flexShrink: 0,
              }}
            >
              ✅
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  opacity: 0.8,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 6,
                }}
              >
                Recomendação Técnica Embrasa
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                {resultado.produto}
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
          >
            {/* Especificações */}
            <Card padding={20}>
              <div
                style={{
                  fontWeight: 800,
                  color: "#1B3A6B",
                  fontSize: 15,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>🔧</span> Especificações Técnicas
              </div>
              {[
                { label: "Estrutura", value: resultado.estrutura },
                { label: "Gramatura", value: resultado.gramatura },
                { label: "Filme", value: resultado.filme },
                { label: "Válvula", value: resultado.valvula },
                { label: "Desaeração", value: resultado.desaeracao },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "8px 0",
                    borderBottom: i < 4 ? "1px solid #F0F4FA" : "none",
                  }}
                >
                  <span
                    style={{ fontSize: 12, color: "#78909C", fontWeight: 600 }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#263238",
                      fontWeight: 700,
                      textAlign: "right",
                      maxWidth: "60%",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </Card>

            {/* Diferenciais */}
            <Card padding={20}>
              <div
                style={{
                  fontWeight: 800,
                  color: "#1B3A6B",
                  fontSize: 15,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>⭐</span> Diferenciais Técnicos
              </div>
              {resultado.diferenciais.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "7px 0",
                    borderBottom:
                      i < resultado.diferenciais.length - 1
                        ? "1px solid #F0F4FA"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      background: "#E8F5E9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      color: "#2E7D32",
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: 12, color: "#37474F" }}>{d}</span>
                </div>
              ))}
            </Card>
          </div>

          {/* Justificativa */}
          <Callout type="tip">
            <strong>Por que esta recomendação?</strong>{" "}
            {resultado.justificativa}
          </Callout>

          {/* Respostas fornecidas */}
          <Card padding={20} style={{ marginBottom: 16 }}>
            <div
              style={{
                fontWeight: 800,
                color: "#1B3A6B",
                fontSize: 14,
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>📋</span> Suas Respostas
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {SIMULADOR_PERGUNTAS.map((p) => {
                const resp = respostas[p.id];
                const opc = p.opcoes.find((o) => o.id === resp);
                return opc ? (
                  <div
                    key={p.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      background: "#F8FAFD",
                      borderRadius: 6,
                      border: "1px solid #E8ECF0",
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{opc.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#90A4AE",
                          fontWeight: 600,
                        }}
                      >
                        {p.pergunta.substring(0, 30)}...
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#263238",
                          fontWeight: 700,
                        }}
                      >
                        {opc.label}
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </Card>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={resultado.pdf}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "#1B3A6B",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              📄 Ficha Técnica PDF
            </a>
            <a
              href={`https://wa.me/${EMBRASA.whatsapp}?text=Olá! O simulador Embrasa recomendou ${resultado.produto}. Gostaria de solicitar uma cotação.`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              💬 Solicitar Cotação
            </a>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate("especificacoes")}
            >
              📋 Ver Especificações
            </Button>
            <Button variant="ghost" size="lg" onClick={reset}>
              🔄 Refazer Simulação
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
