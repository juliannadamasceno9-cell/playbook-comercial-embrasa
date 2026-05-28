// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — components/Dashboard.js
// ═══════════════════════════════════════════════════════════════════
import { EMBRASA, KPIS, DIFERENCIAIS, SEGMENTOS, PRODUTOS } from "./data.js";
import { StatCard, Card, Button } from "./UI.js";

export function Dashboard({ onNavigate, onSegmento }) {
  const segList = Object.values(SEGMENTOS);

  return (
    <div className="view-container fade-in">
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0D2347 0%, #1B3A6B 60%, #1E5631 100%)",
          borderRadius: 14,
          padding: "40px 48px",
          marginBottom: 28,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 80,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <img
            src={EMBRASA.logo}
            alt="Embrasa"
            style={{
              height: 36,
              filter: "brightness(0) invert(1)",
              opacity: 0.95,
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
          <div
            style={{
              width: 1,
              height: 28,
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Configurador Técnico-Comercial
          </span>
        </div>
        <h1
          style={{
            margin: "0 0 10px",
            fontSize: 34,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Playbook Comercial
          <br />
          <span style={{ color: "#7EC8E3" }}>& Técnico</span>
        </h1>
        <p
          style={{
            margin: "0 0 28px",
            fontSize: 15,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          {EMBRASA.slogan} · Fundada em {EMBRASA.fundacao} ·{" "}
          {EMBRASA.colaboradores.toLocaleString()}+ colaboradores
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Button
            size="lg"
            onClick={() => onNavigate("simulador")}
            icon="🎯"
            style={{
              background: "#7EC8E3",
              color: "#0D2347",
              border: "none",
              fontWeight: 800,
            }}
          >
            Iniciar Simulador
          </Button>
          <button
            onClick={() => onNavigate("especificacoes")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 6,
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            📋 Especificações Técnicas
          </button>
          <a
            href={EMBRASA.catalogo}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 6,
              color: "rgba(255,255,255,0.8)",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            📄 Catálogo 2025
          </a>
        </div>
      </div>

      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 12,
          marginBottom: 28,
        }}
      >
        {KPIS.map((k, i) => (
          <StatCard
            key={i}
            icon={k.icon}
            label={k.label}
            value={k.valor}
            sub={k.sub}
            color={
              [
                "#1B3A6B",
                "#2E7D32",
                "#E65100",
                "#6A1B9A",
                "#1565C0",
                "#00695C",
              ][i % 6]
            }
          />
        ))}
      </div>

      {/* Dois painéis */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          marginBottom: 28,
        }}
      >
        {/* Navegação rápida */}
        <Card padding={20}>
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
            <span>⚡</span> Acesso Rápido
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
          >
            {[
              {
                id: "simulador",
                label: "Simulador",
                icon: "🎯",
                desc: "Recomendação automática",
              },
              {
                id: "especificacoes",
                label: "Esp. Técnicas",
                icon: "📋",
                desc: "30 especificações reais",
              },
              {
                id: "comparador",
                label: "Comparador",
                icon: "⚖️",
                desc: "Compare produtos",
              },
              {
                id: "glossario",
                label: "Glossário",
                icon: "📖",
                desc: "20 termos técnicos",
              },
              {
                id: "riscos",
                label: "Riscos",
                icon: "⚠️",
                desc: "Erros críticos",
              },
              {
                id: "diferenciais",
                label: "Diferenciais",
                icon: "🏆",
                desc: "Por que Embrasa",
              },
              {
                id: "argumentos",
                label: "Argumentos",
                icon: "💬",
                desc: "Por perfil de cliente",
              },
              {
                id: "flow",
                label: "Fluxo Decisão",
                icon: "🔀",
                desc: "Decisão consultiva",
              },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  background: "#F8FAFD",
                  border: "1px solid #E8ECF0",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#EEF3FB";
                  e.currentTarget.style.borderColor = "#1B3A6B40";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F8FAFD";
                  e.currentTarget.style.borderColor = "#E8ECF0";
                }}
              >
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div
                    style={{ fontSize: 12, fontWeight: 700, color: "#1B3A6B" }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: 10, color: "#90A4AE" }}>
                    {item.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Portfólio */}
        <Card padding={20}>
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
            <span>📦</span> Portfólio de Produtos
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {PRODUTOS.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigate("produtos", p.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  background: "#F8FAFD",
                  border: "1px solid #E8ECF0",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#EEF3FB";
                  e.currentTarget.style.borderColor = p.tagColor + "40";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F8FAFD";
                  e.currentTarget.style.borderColor = "#E8ECF0";
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 36,
                    borderRadius: 2,
                    background: p.tagColor,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 13, fontWeight: 700, color: "#263238" }}
                  >
                    {p.nome}
                  </div>
                  <div style={{ fontSize: 11, color: "#90A4AE" }}>
                    {p.descricao.substring(0, 60)}…
                  </div>
                </div>
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 99,
                    fontSize: 10,
                    fontWeight: 700,
                    background: p.tagColor + "15",
                    color: p.tagColor,
                  }}
                >
                  {p.tag}
                </span>
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Segmentos */}
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontWeight: 800,
            color: "#1B3A6B",
            fontSize: 18,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>🌐</span> 9 Segmentos Industriais Atendidos
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {segList.map((seg) => (
            <button
              key={seg.id}
              onClick={() => onSegmento(seg.id)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "16px 18px",
                background: "#fff",
                border: `1px solid ${seg.cor}30`,
                borderLeft: `4px solid ${seg.cor}`,
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = seg.corClaro;
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
              }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{seg.emoji}</span>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: seg.cor,
                    marginBottom: 4,
                  }}
                >
                  {seg.nome}
                </div>
                <div
                  style={{ fontSize: 11, color: "#78909C", lineHeight: 1.4 }}
                >
                  {seg.descricao.substring(0, 70)}…
                </div>
                <div
                  style={{
                    marginTop: 6,
                    display: "flex",
                    gap: 4,
                    flexWrap: "wrap",
                  }}
                >
                  {seg.recomendacoes.primaria.slice(0, 2).map((pid) => (
                    <span
                      key={pid}
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        padding: "1px 6px",
                        background: seg.cor + "15",
                        color: seg.cor,
                        borderRadius: 3,
                      }}
                    >
                      {pid}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Diferenciais rápidos */}
      <Card padding={24} style={{ marginTop: 24 }}>
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
          <span>🏆</span> Por que Embrasa?
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {DIFERENCIAIS.map((d, i) => (
            <div
              key={i}
              style={{
                padding: "12px 16px",
                background: "#F8FAFD",
                borderRadius: 8,
                border: "1px solid #E8ECF0",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>{d.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1B3A6B",
                    marginBottom: 2,
                  }}
                >
                  {d.titulo}
                </div>
                <div
                  style={{ fontSize: 11, color: "#78909C", lineHeight: 1.4 }}
                >
                  {d.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Contato */}
      <div
        style={{
          marginTop: 20,
          padding: "16px 20px",
          background: "#E8F5E9",
          borderRadius: 10,
          border: "1px solid #A5D6A7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div style={{ fontWeight: 800, color: "#1E5631", fontSize: 14 }}>
            📱 Fale com o Especialista Embrasa
          </div>
          <div style={{ fontSize: 12, color: "#2E7D32", marginTop: 2 }}>
            Suporte técnico por segmento de mercado
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={`https://wa.me/${EMBRASA.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 18px",
              background: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            💬 WhatsApp
          </a>
          <a
            href={EMBRASA.site}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 18px",
              background: "#1B3A6B",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            🌐 Site
          </a>
        </div>
      </div>
    </div>
  );
}
