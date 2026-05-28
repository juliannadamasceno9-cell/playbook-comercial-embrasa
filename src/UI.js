// ═══════════════════════════════════════════════════════════════════
// EMBRASA v5.0 — components/UI.js
// Componentes reutilizáveis de interface
// ═══════════════════════════════════════════════════════════════════
import {
  getCriticidadeColor,
  getResistenciaColor,
  getBarreiraColor,
} from "./helpers.js";

// ─── BADGE ─────────────────────────────────────────────────────────
export function Badge({ level, size = "sm" }) {
  const c = getCriticidadeColor(level);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: size === "sm" ? "2px 8px" : "4px 12px",
        borderRadius: 4,
        fontSize: size === "sm" ? 11 : 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {level === "CRÍTICA" && "⚡ "}
      {level === "ALTA" && "▲ "}
      {level === "MÉDIA" && "◆ "}
      {level}
    </span>
  );
}

// ─── SCORE BAR ──────────────────────────────────────────────────────
export function ScoreBar({ label, value, max = 5, color = "#1B3A6B" }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <span style={{ fontSize: 12, color: "#546E7A", fontWeight: 500 }}>
          {label}
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, color }}>
          {value}/{max}
        </span>
      </div>
      <div
        style={{
          height: 6,
          background: "#ECEFF1",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            borderRadius: 99,
            transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

// ─── CALLOUT ────────────────────────────────────────────────────────
export function Callout({ type = "info", children }) {
  const styles = {
    info: { bg: "#E3F2FD", border: "#90CAF9", icon: "ℹ️", text: "#1565C0" },
    tip: { bg: "#F3E5F5", border: "#CE93D8", icon: "💡", text: "#6A1B9A" },
    warn: { bg: "#FFF8E1", border: "#FFE082", icon: "⚠️", text: "#F57F17" },
    danger: { bg: "#FFEBEE", border: "#EF9A9A", icon: "🚨", text: "#B71C1C" },
    ok: { bg: "#E8F5E9", border: "#A5D6A7", icon: "✅", text: "#2E7D32" },
  };
  const s = styles[type] || styles.info;
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: "10px 14px",
        background: s.bg,
        borderLeft: `3px solid ${s.border}`,
        borderRadius: "0 6px 6px 0",
        marginBottom: 12,
        color: s.text,
      }}
    >
      <span style={{ fontSize: 14, flexShrink: 0 }}>{s.icon}</span>
      <span style={{ fontSize: 13, lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}

// ─── STAT CARD ──────────────────────────────────────────────────────
export function StatCard({ icon, label, value, sub, color = "#1B3A6B" }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: "16px 20px",
        border: "1px solid #E8ECF0",
        borderTop: `3px solid ${color}`,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color, lineHeight: 1.1 }}>
        {value}
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#37474F" }}>
        {label}
      </div>
      {sub && <div style={{ fontSize: 11, color: "#90A4AE" }}>{sub}</div>}
    </div>
  );
}

// ─── SECTION HEADER ─────────────────────────────────────────────────
export function SectionHeader({ title, subtitle, icon, action }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 24,
        paddingBottom: 16,
        borderBottom: "2px solid #F0F2F5",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 4,
          }}
        >
          {icon && <span style={{ fontSize: 22 }}>{icon}</span>}
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 800,
              color: "#1B3A6B",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p
            style={{ margin: 0, fontSize: 13, color: "#78909C", maxWidth: 520 }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && action}
    </div>
  );
}

// ─── PRODUCT BADGE ──────────────────────────────────────────────────
export function ProductTag({ label, color }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 99,
        fontSize: 11,
        fontWeight: 700,
        background: color + "18",
        color: color,
        border: `1px solid ${color}40`,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

// ─── RESISTENCIA / BARREIRA PILL ────────────────────────────────────
export function NivelPill({ label, type = "resistencia" }) {
  const color =
    type === "resistencia"
      ? getResistenciaColor(label)
      : getBarreiraColor(label);
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 11,
        fontWeight: 700,
        background: color + "15",
        color,
        border: `1px solid ${color}40`,
      }}
    >
      {label}
    </span>
  );
}

// ─── EMPTY STATE ────────────────────────────────────────────────────
export function EmptyState({ icon = "🔍", title, subtitle }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 20px" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>{icon}</div>
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#37474F",
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div style={{ fontSize: 13, color: "#90A4AE" }}>{subtitle}</div>
      )}
    </div>
  );
}

// ─── BUTTON ─────────────────────────────────────────────────────────
export function Button({
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon,
  disabled,
}) {
  const variants = {
    primary: { bg: "#1B3A6B", color: "#fff", border: "none", hover: "#152D54" },
    secondary: {
      bg: "#F0F4FA",
      color: "#1B3A6B",
      border: "1px solid #D0DCF0",
      hover: "#E3ECF8",
    },
    danger: {
      bg: "#FFEBEE",
      color: "#B71C1C",
      border: "1px solid #EF9A9A",
      hover: "#FFCDD2",
    },
    success: {
      bg: "#E8F5E9",
      color: "#2E7D32",
      border: "1px solid #A5D6A7",
      hover: "#C8E6C9",
    },
    ghost: {
      bg: "transparent",
      color: "#546E7A",
      border: "1px solid transparent",
      hover: "#F5F7FA",
    },
  };
  const v = variants[variant];
  const padding =
    size === "sm" ? "6px 12px" : size === "lg" ? "12px 24px" : "8px 16px";
  const fontSize = size === "sm" ? 12 : size === "lg" ? 15 : 13;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding,
        fontSize,
        fontWeight: 600,
        background: v.bg,
        color: v.color,
        border: v.border,
        borderRadius: 6,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "all 0.15s ease",
        fontFamily: "inherit",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) =>
        !disabled && (e.currentTarget.style.background = v.hover)
      }
      onMouseLeave={(e) =>
        !disabled && (e.currentTarget.style.background = v.bg)
      }
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

// ─── CARD ──────────────────────────────────────────────────────────
export function Card({ children, padding = 20, style = {} }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        border: "1px solid #E8ECF0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── TABS ──────────────────────────────────────────────────────────
export function Tabs({ tabs, active, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 2,
        background: "#F5F7FA",
        borderRadius: 8,
        padding: 4,
        marginBottom: 20,
        flexWrap: "wrap",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 14px",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            background: active === tab.id ? "#fff" : "transparent",
            color: active === tab.id ? "#1B3A6B" : "#78909C",
            boxShadow: active === tab.id ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.15s ease",
            fontFamily: "inherit",
          }}
        >
          {tab.icon && <span>{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
