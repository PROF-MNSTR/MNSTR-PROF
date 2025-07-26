
import React from "react";
import { BarChart2, Users, FileText } from "lucide-react";

export default function FFCoachDashboard() {
  const tab = useTabs(["team", "players", "reports"]);
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>FF Coach Pro - Dashboard</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {tab.options.map((key) => (
          <button key={key} onClick={() => tab.set(key)} style={{ padding: "0.5rem 1rem" }}>
            {key}
          </button>
        ))}
      </div>
      {tab.value === "team" && (
        <div>
          <h2>Team Performance</h2>
          <p>Overall stats, win rate, avg kills, team roles.</p>
        </div>
      )}
      {tab.value === "players" && (
        <div>
          <h2>Player Breakdown</h2>
          <ul>
            <li>Player 1: K/D: 2.4 | Accuracy: 45%</li>
            <li>Player 2: K/D: 1.9 | Accuracy: 50%</li>
            <li>Player 3: K/D: 3.1 | Accuracy: 42%</li>
          </ul>
        </div>
      )}
      {tab.value === "reports" && (
        <div>
          <h2>Reports & Training Suggestions</h2>
          <button>Generate PDF Report</button>
        </div>
      )}
    </div>
  );
}

function useTabs(options) {
  const [value, setValue] = React.useState(options[0]);
  return { value, set: setValue, options };
}
