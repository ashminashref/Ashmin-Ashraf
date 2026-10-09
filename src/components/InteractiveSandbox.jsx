import React, { useState, useEffect } from 'react';
import ScrambleText from './ScrambleText';
import { Terminal, Cpu, Activity, Play, CheckCircle2, Copy, Check, Layers } from 'lucide-react';

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState('code'); // 'tokens', 'code', 'benchmarks', 'architecture'
  const [codeTab, setCodeTab] = useState('component'); // 'component', 'api', 'schema'
  const [copied, setCopied] = useState(false);
  const [testRunning, setTestRunning] = useState(false);
  const [testPassed, setTestPassed] = useState(false);

  // Live bar chart heights simulation (matches Aeye's blue bar chart)
  const [barHeights, setBarHeights] = useState([
    45, 52, 60, 48, 55, 62, 70, 78, 65, 82, 88, 92, 85, 90, 94, 96, 88, 92, 95, 89, 98, 94, 91, 96, 99
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights((prev) =>
        prev.map((h) => Math.min(100, Math.max(35, h + (Math.random() * 8 - 4))))
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulatedTests = () => {
    setTestRunning(true);
    setTestPassed(false);
    setTimeout(() => {
      setTestRunning(false);
      setTestPassed(true);
    }, 1000);
  };

  const codeSnippets = {
    component: `// src/components/DynamicButton.tsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

export const DynamicButton: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  onClick 
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  const handleHover = (enter: boolean) => {
    gsap.to(bgRef.current, {
      xPercent: enter ? 0 : -100,
      duration: 0.35,
      ease: 'power3.out'
    });
  };

  return (
    <button 
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={onClick}
      className="relative overflow-hidden border border-black px-6 py-3 font-mono text-xs uppercase"
    >
      <div ref={bgRef} className="absolute inset-0 bg-[#0055ff] -translate-x-full" />
      <span className="relative z-10 text-white font-semibold">{label}</span>
    </button>
  );
};`,
    api: `// src/api/routes/analytics.ts
import { Router, Request, Response } from 'express';
import { db } from '../../lib/database';
import { redisClient } from '../../lib/cache';

const router = Router();

router.get('/metrics/realtime', async (req: Request, res: Response) => {
  const cacheKey = 'metrics:realtime:latest';
  
  // High-performance edge cache check
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return res.setHeader('X-Cache', 'HIT').json(JSON.parse(cached));
  }

  // Sub-15ms aggregation query
  const metrics = await db.query(\`
    SELECT 
      time_bucket('1 minute', recorded_at) AS interval,
      AVG(latency_ms) as avg_latency,
      COUNT(id) as request_count
    FROM system_telemetry
    WHERE recorded_at > NOW() - INTERVAL '1 hour'
    GROUP BY interval
    ORDER BY interval DESC
    LIMIT 30;
  \`);

  await redisClient.setEx(cacheKey, 15, JSON.stringify(metrics.rows));
  return res.setHeader('X-Cache', 'MISS').json(metrics.rows);
});

export default router;`,
    schema: `-- schema.sql - Production PostgreSQL Schema
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  handle VARCHAR(64) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  tier VARCHAR(32) DEFAULT 'standard',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE telemetry_events (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type VARCHAR(64) NOT NULL,
  latency_ms DOUBLE PRECISION NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  recorded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_telemetry_time ON telemetry_events (recorded_at DESC);
CREATE INDEX idx_telemetry_user ON telemetry_events (user_id);`
  };

  return (
    <section id="sandbox" className="py-24 border-b border-[#e5e7eb] bg-[#121316] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#26282e] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#0055ff] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff]"></span>
              <span>INTERACTIVE SANDBOX // 003</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-white">
              Under the Hood:{' '}
              <span className="text-[#0055ff] font-medium">Design & Architecture</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#9ca3af] font-light leading-relaxed">
            Toggle between live design system tokens, production code snippets, real-time benchmarks, and distributed architecture flow.
          </p>
        </div>

        {/* Top Sandbox Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#26282e] pb-4 mb-8">
          {[
            { id: 'code', label: '01 // PRODUCTION CODE & APIS', icon: Terminal },
            { id: 'benchmarks', label: '02 // LIVE BENCHMARK CHART', icon: Activity },
            { id: 'tokens', label: '03 // DESIGN SYSTEM TOKENS', icon: Layers },
            { id: 'architecture', label: '04 // PIPELINE TOPOLOGY', icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-all ${
                  isActive
                    ? 'bg-[#0055ff] border-[#0055ff] text-white font-semibold'
                    : 'bg-[#1a1c22] border-[#26282e] text-[#9ca3af] hover:text-white hover:border-[#3f424e]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <ScrambleText text={tab.label} speed={20} duration={300} />
              </button>
            );
          })}
        </div>

        {/* Tab 1: Code & Terminal View */}
        {activeTab === 'code' && (
          <div className="border border-[#26282e] bg-[#0c0d0f] rounded-none overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-[#26282e] bg-[#16181e] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <span className="ml-2 text-xs font-mono text-[#9ca3af]">
                  workspace // self-taught-stack
                </span>
              </div>

              {/* Sub tabs for files */}
              <div className="flex items-center gap-1">
                {[
                  { id: 'component', name: 'DynamicButton.tsx' },
                  { id: 'api', name: 'analytics.router.ts' },
                  { id: 'schema', name: 'schema.sql' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCodeTab(f.id)}
                    className={`px-3 py-1 text-xs font-mono border ${
                      codeTab === f.id
                        ? 'bg-[#0c0d0f] border-[#26282e] text-[#0055ff] font-semibold'
                        : 'border-transparent text-[#6b7280] hover:text-white'
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={runSimulatedTests}
                  disabled={testRunning}
                  className="px-3 py-1 text-xs font-mono bg-[#1f222a] border border-[#26282e] text-white hover:border-[#0055ff] flex items-center gap-1.5 transition-colors"
                >
                  <Play className={`w-3 h-3 text-[#0055ff] ${testRunning ? 'animate-spin' : ''}`} />
                  <span>{testRunning ? 'TESTING...' : 'RUN VITEST'}</span>
                </button>

                <button
                  onClick={() => handleCopy(codeSnippets[codeTab])}
                  className="px-3 py-1 text-xs font-mono bg-[#1f222a] border border-[#26282e] text-white hover:border-[#0055ff] flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-[#22c55e]" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Test result toast if passed */}
            {testPassed && (
              <div className="bg-[#052e16] border-b border-[#14532d] px-4 py-2 flex items-center gap-2 text-xs font-mono text-[#4ade80]">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                <span>✓ All 14 tests passing in 84ms (100% coverage on unit & contract checks)</span>
              </div>
            )}

            {/* Syntax Box */}
            <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-[#e5e7eb] leading-relaxed">
              <pre className="selection:bg-[#0055ff] selection:text-white">
                <code>{codeSnippets[codeTab]}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Tab 2: Live Benchmark Chart (Matches Aeye's Blue Bar Chart) */}
        {activeTab === 'benchmarks' && (
          <div className="border border-[#26282e] bg-[#0c0d0f] p-6 sm:p-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#26282e] gap-4">
              <div>
                <span className="text-xs font-mono text-[#0055ff] uppercase">// REAL-TIME TELEMETRY</span>
                <h3 className="text-xl font-sans font-medium text-white">System Throughput & Latency Spectrum</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#0055ff] inline-block" />
                  <span className="text-[#9ca3af]">REQUEST FREQUENCY</span>
                </div>
                <div className="px-2.5 py-1 bg-[#16181e] border border-[#26282e] text-[#22c55e]">
                  LIVE 60FPS
                </div>
              </div>
            </div>

            {/* Aeye Signature Glowing Blue Bar Chart */}
            <div className="space-y-2">
              <div className="h-48 sm:h-64 flex items-end justify-between gap-1 sm:gap-2 px-2 pb-2 border-b border-[#26282e]">
                {barHeights.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-[#26282e] px-1.5 py-0.5 text-[10px] font-mono text-white pointer-events-none whitespace-nowrap z-10">
                      {Math.round(val * 1.8)} req/s
                    </div>
                    {/* Bar */}
                    <div
                      className="w-full bg-[#0055ff] group-hover:bg-white transition-all duration-300"
                      style={{
                        height: `${val}%`,
                        boxShadow: '0 0 12px rgba(0, 85, 255, 0.4)',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Chart X-Axis Labels */}
              <div className="flex justify-between text-[10px] font-mono text-[#6b7280] px-2 pt-1">
                <span>00:00</span>
                <span>00:15</span>
                <span>00:30</span>
                <span>00:45</span>
                <span>NOW (PEAK)</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#26282e]">
              <div className="p-4 border border-[#26282e] bg-[#16181e]">
                <div className="text-[10px] font-mono text-[#6b7280]">CORE WEB VITALS</div>
                <div className="text-2xl font-mono font-semibold text-[#22c55e]">100 / 100</div>
                <div className="text-[11px] font-mono text-[#9ca3af]">Lighthouse Score</div>
              </div>

              <div className="p-4 border border-[#26282e] bg-[#16181e]">
                <div className="text-[10px] font-mono text-[#6b7280]">EDGE TTFB</div>
                <div className="text-2xl font-mono font-semibold text-[#0055ff]">24ms</div>
                <div className="text-[11px] font-mono text-[#9ca3af]">Cloudflare Edge</div>
              </div>

              <div className="p-4 border border-[#26282e] bg-[#16181e]">
                <div className="text-[10px] font-mono text-[#6b7280]">HYDRATION SPEED</div>
                <div className="text-2xl font-mono font-semibold text-white">8.4ms</div>
                <div className="text-[11px] font-mono text-[#9ca3af]">React 19 Concurrent</div>
              </div>

              <div className="p-4 border border-[#26282e] bg-[#16181e]">
                <div className="text-[10px] font-mono text-[#6b7280]">BUNDLE FOOTPRINT</div>
                <div className="text-2xl font-mono font-semibold text-white">32.8 KB</div>
                <div className="text-[11px] font-mono text-[#9ca3af]">Tree-shaken Gzip</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Design System Tokens */}
        {activeTab === 'tokens' && (
          <div className="border border-[#26282e] bg-[#0c0d0f] p-6 sm:p-8 space-y-8">
            <div className="pb-4 border-b border-[#26282e]">
              <span className="text-xs font-mono text-[#0055ff] uppercase">// ATOMIC DESIGN TOKENS</span>
              <h3 className="text-xl font-sans font-medium text-white">Design Variables Mapped Directly to CSS Properties</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Color Swatches */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#9ca3af] uppercase">01 / COLOR SPECTRUM</span>
                <div className="space-y-2">
                  {[
                    { name: '--color-brand-blue', hex: '#0055ff', label: 'Primary Brand Blue' },
                    { name: '--color-brand-dark', hex: '#121316', label: 'Monolith Charcoal' },
                    { name: '--color-brand-border', hex: '#e2e4e8', label: 'Technical Stroke' },
                    { name: '--color-brand-accent', hex: '#22c55e', label: 'Operational Green' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between p-3 border border-[#26282e] bg-[#16181e]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 border border-white/20" style={{ backgroundColor: c.hex }} />
                        <div>
                          <div className="text-xs font-mono text-white">{c.name}</div>
                          <div className="text-[11px] text-[#6b7280]">{c.label}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#0055ff]">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Component States Showcase */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#9ca3af] uppercase">02 / INTERACTION STATES</span>
                <div className="p-6 border border-[#26282e] bg-[#16181e] space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="px-4 py-2 bg-[#0055ff] text-white text-xs font-mono uppercase font-semibold">
                      Primary Active
                    </button>
                    <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors text-xs font-mono uppercase font-semibold">
                      Outline Hover
                    </button>
                    <button disabled className="px-4 py-2 border border-[#3f424e] text-[#6b7280] text-xs font-mono uppercase cursor-not-allowed">
                      Disabled State
                    </button>
                  </div>

                  <div className="pt-4 border-t border-[#26282e] text-xs font-mono text-[#9ca3af] space-y-1">
                    <div>• Focus Ring: 2px solid #0055ff (offset 2px)</div>
                    <div>• Motion Curve: cubic-bezier(0.16, 1, 0.3, 1)</div>
                    <div>• Micro-feedback: Haptic & instant state response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Architecture Topology */}
        {activeTab === 'architecture' && (
          <div className="border border-[#26282e] bg-[#0c0d0f] p-6 sm:p-8 space-y-8">
            <div className="pb-4 border-b border-[#26282e]">
              <span className="text-xs font-mono text-[#0055ff] uppercase">// DISTRIBUTED SYSTEM TOPOLOGY</span>
              <h3 className="text-xl font-sans font-medium text-white">Full-Stack Request Lifecycle Architecture</h3>
            </div>

            {/* Architecture Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {[
                { step: '01', title: 'CLIENT UI', sub: 'React 19 + GSAP', desc: 'Optimistic UI state & micro-cache' },
                { step: '02', title: 'EDGE GATEWAY', sub: 'Cloudflare Workers', desc: 'DDoS shield, Geo-routing, SSL' },
                { step: '03', title: 'APP ENGINE', sub: 'Node / Express / Python', desc: 'Type-safe RPC & Business Logic' },
                { step: '04', title: 'CACHE LAYER', sub: 'Redis Cluster', desc: 'Sub-2ms in-memory cache' },
                { step: '05', title: 'DATA STORE', sub: 'PostgreSQL + Prisma', desc: 'ACID guarantees & read replicas' },
              ].map((node, i) => (
                <div key={i} className="p-4 border border-[#26282e] bg-[#16181e] space-y-2 relative group hover:border-[#0055ff] transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#0055ff]">
                    <span>NODE // {node.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping" />
                  </div>
                  <div className="text-sm font-mono font-semibold text-white">{node.title}</div>
                  <div className="text-xs text-[#0055ff] font-mono">{node.sub}</div>
                  <p className="text-[11px] text-[#9ca3af] font-light leading-snug">{node.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 border border-[#26282e] bg-[#16181e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9ca3af]">
              <span>SYSTEM PROTOCOL: HTTPS / WSS / gRPC / JSON-RPC</span>
              <span className="text-[#22c55e]">ALL SERVICES IN HEALTHY HARMONY</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
