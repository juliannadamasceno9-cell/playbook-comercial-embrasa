// ═══════════════════════════════════════════════════════════════════
// EMBRASA PLAYBOOK v5.0 — App.js
// Configurador Técnico-Comercial de Embalagens Industriais
// ═══════════════════════════════════════════════════════════════════
import { useState, useCallback } from "react";
import "./styles.css";
import { SEGMENTOS } from "./data.js";
import { Dashboard } from "./Dashboard.js";
import { Especificacoes } from "./Especificacoes.js";
import { Simulador } from "./Simulador.js";
import { Produtos, Comparador } from "./Produtos.js";
import {
  SegmentoView,
  RiscosView,
  GlossarioView,
  DiferenciaisView,
  ArgumentosView,
  FluxoDecisaoView,
} from "./Views.js";

// ─── NAV CONFIG ──────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    label: "Principal",
    items: [
      { id: "dashboard", label: "Dashboard", icon: "🏠" },
      { id: "simulador", label: "Simulador", icon: "🎯" },
      { id: "especificacoes", label: "Esp. Técnicas", icon: "📋" },
    ],
  },
  {
    label: "Portfólio",
    items: [
      { id: "produtos", label: "Portfólio", icon: "📦" },
      { id: "comparador", label: "Comparador", icon: "⚖️" },
    ],
  },
  {
    label: "Segmentos",
    items: Object.values(SEGMENTOS).map((s) => ({
      id: `seg:${s.id}`,
      label: s.nome,
      icon: s.emoji,
      cor: s.cor,
    })),
  },
  {
    label: "Ferramentas",
    items: [
      { id: "argumentos", label: "Argumentos", icon: "💬" },
      { id: "flow", label: "Fluxo de Decisão", icon: "🔀" },
      { id: "riscos", label: "Riscos Técnicos", icon: "⚠️" },
      { id: "glossario", label: "Glossário", icon: "📖" },
      { id: "diferenciais", label: "Diferenciais", icon: "🏆" },
    ],
  },
];

// ─── TOPBAR ───────────────────────────────────────────────────────────────
function Topbar({
  view,
  segId,
  onSearch,
  onSegmento,
  sidebarCollapsed,
  onToggle,
}) {
  const [searchVal, setSearchVal] = useState("");
  const segList = Object.values(SEGMENTOS);

  const segAtivo = segId ? SEGMENTOS[segId] : null;

  function getPageLabel(v) {
    if (v.startsWith("seg:")) {
      const s = SEGMENTOS[v.replace("seg:", "")];
      return s ? `${s.emoji} ${s.nome}` : "Segmento";
    }
    const map = {
      dashboard: "Dashboard",
      simulador: "Simulador",
      especificacoes: "Especificações Técnicas",
      produtos: "Portfólio",
      comparador: "Comparador",
      argumentos: "Argumentos Comerciais",
      flow: "Fluxo de Decisão",
      riscos: "Riscos Técnicos",
      glossario: "Glossário",
      diferenciais: "Diferenciais Embrasa",
    };
    return map[v] || v;
  }

  function handleSearch(e) {
    if (e.key === "Enter" && searchVal.trim()) {
      const q = searchVal.trim().toLowerCase();
      // Find matching segment
      const seg = segList.find(
        (s) => s.nome.toLowerCase().includes(q) || s.id.includes(q)
      );
      if (seg) onSegmento(seg.id);
      else onSearch(searchVal);
      setSearchVal("");
    }
  }

  return (
    <div className="topbar">
      {/* Breadcrumb */}
      <div className="topbar-breadcrumb">
        <div className="topbar-bc-seg" onClick={() => onSegmento(null)}>
          🏭 Embrasa
        </div>
        {segAtivo && (
          <>
            <span className="topbar-bc-div">›</span>
            <div
              className="topbar-bc-seg"
              style={{ background: segAtivo.corClaro, color: segAtivo.cor }}
            >
              {segAtivo.emoji} {segAtivo.nome}
            </div>
          </>
        )}
        <span className="topbar-bc-div">›</span>
        <span className="topbar-bc-page">{getPageLabel(view)}</span>
      </div>

      {/* Seg pills */}
      <div className="seg-pills-topbar">
        {segList.map((s) => (
          <button
            key={s.id}
            className="seg-pill-btn"
            onClick={() => onSegmento(s.id)}
            style={{ color: s.cor, borderColor: s.cor + "40" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = s.cor + "12")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {s.emoji} {s.nome}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="topbar-search">
        <span className="topbar-search-icon">🔍</span>
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Buscar segmento... (Enter)"
        />
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5519998483707"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          padding: "7px 12px",
          background: "#25D366",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
          fontSize: 12,
          fontWeight: 700,
          whiteSpace: "nowrap",
        }}
      >
        💬 Suporte
      </a>
    </div>
  );
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────
function Sidebar({ view, collapsed, onCollapse, onNavigate }) {
  return (
    <nav className={`sidebar${collapsed ? " collapsed" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <img
          src="https://embrasa.com.br/wp-content/uploads/2024/01/EMB_marca-embrasa_pos-cor.png"
          alt="Embrasa"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="sidebar-logo-text">
          <div className="sidebar-logo-title">Embrasa</div>
          <div className="sidebar-logo-sub">Playbook v5.0</div>
        </div>
      </div>

      {/* Nav */}
      <div className="sidebar-scroll">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <div className="sidebar-section-label">{section.label}</div>
            {section.items.map((item) => {
              const isActive = view === item.id;
              return (
                <div
                  key={item.id}
                  className={`nav-item${isActive ? " active" : ""}`}
                  onClick={() => onNavigate(item.id)}
                  title={collapsed ? item.label : ""}
                >
                  <span className="nav-item-icon">{item.icon}</span>
                  <span className="nav-item-label">{item.label}</span>
                  {item.cor && (
                    <span
                      className="nav-seg-pill"
                      style={{ background: item.cor }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div className="sidebar-toggle" onClick={onCollapse}>
        <span style={{ fontSize: 14 }}>{collapsed ? "▶" : "◀"}</span>
        <span className="nav-item-label">{collapsed ? "" : "Recolher"}</span>
      </div>
    </nav>
  );
}

// ─── ROUTER ──────────────────────────────────────────────────────────────
function Router({ view, segId, onNavigate, onSegmento }) {
  const nav = (v, extra) => onNavigate(v, extra);

  if (view === "dashboard") {
    return (
      <Dashboard
        onNavigate={nav}
        onSegmento={(id) => onNavigate(`seg:${id}`)}
      />
    );
  }
  if (view === "especificacoes") {
    return <Especificacoes segmentoFiltro={segId} />;
  }
  if (view === "simulador") {
    return <Simulador onNavigate={nav} />;
  }
  if (view === "produtos") {
    return <Produtos produtoInicial={segId} />;
  }
  if (view === "comparador") {
    return <Comparador />;
  }
  if (view === "riscos") {
    return <RiscosView />;
  }
  if (view === "glossario") {
    return <GlossarioView />;
  }
  if (view === "diferenciais") {
    return <DiferenciaisView />;
  }
  if (view === "argumentos") {
    return <ArgumentosView segId={segId} />;
  }
  if (view === "flow") {
    return <FluxoDecisaoView segId={segId} />;
  }
  if (view.startsWith("seg:")) {
    const sid = view.replace("seg:", "");
    return <SegmentoView segId={sid} onNavigate={nav} />;
  }

  return (
    <Dashboard onNavigate={nav} onSegmento={(id) => onNavigate(`seg:${id}`)} />
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("dashboard");
  const [segId, setSegId] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useCallback((newView, extra) => {
    setView(newView);
    if (newView.startsWith("seg:")) {
      setSegId(newView.replace("seg:", ""));
    } else if (extra) {
      setSegId(extra);
    }
    window.scrollTo(0, 0);
  }, []);

  const setSegmento = useCallback((id) => {
    if (!id) {
      setSegId(null);
      setView("dashboard");
    } else {
      setSegId(id);
      setView(`seg:${id}`);
    }
    window.scrollTo(0, 0);
  }, []);

  const currentSeg = view.startsWith("seg:") ? view.replace("seg:", "") : segId;

  return (
    <div className="app-layout">
      <Sidebar
        view={view}
        collapsed={collapsed}
        onCollapse={() => setCollapsed((c) => !c)}
        onNavigate={navigate}
      />
      <div className={`main-area${collapsed ? " collapsed" : ""}`}>
        <Topbar
          view={view}
          segId={currentSeg}
          onSearch={() => navigate("especificacoes")}
          onSegmento={setSegmento}
          sidebarCollapsed={collapsed}
        />
        <div className="content-area">
          <Router
            view={view}
            segId={currentSeg}
            onNavigate={navigate}
            onSegmento={setSegmento}
          />
        </div>
      </div>
    </div>
  );
}
