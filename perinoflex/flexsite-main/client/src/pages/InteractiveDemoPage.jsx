import React, { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function PerinoFlexInteractivePreview() {
  const { content } = useLanguage();
  const demo = content.interactiveDemo;
  const [angle, setAngle] = useState(50);
  const [height, setHeight] = useState(50);
  const [distance, setDistance] = useState(55);
  const [entry, setEntry] = useState('A');

  useDocumentMeta(demo.metaTitle, demo.metaDescription);

  const geometry = useMemo(() => {
    const va = ((angle - 50) / 50) * 28;
    const hoff = ((50 - height) / 50) * 44;
    const len = 205 + distance * 1.35;
    const px = 145;
    const base = entry === 'A' ? 150 : 210;
    const py = base + hoff;
    const rad = (va * Math.PI) / 180;

    const ex = px + Math.cos(rad) * len;
    const ey = py + Math.sin(rad) * len;
    const tx = ex + Math.cos(rad) * 90;
    const ty = ey + Math.sin(rad) * 90;

    return {
      hoff,
      px,
      py,
      ex,
      ey,
      tx,
      ty,
      shineX1: px + Math.cos(rad) * 8,
      shineY1: py + Math.sin(rad) * 8 - 1,
    };
  }, [angle, height, distance, entry]);

  const reset = () => {
    setAngle(50);
    setHeight(50);
    setDistance(55);
    setEntry("A");
  };

  return (
    <>
      <style>{`
        :root {
          --g: #40b93c;
          --gl: #8be585;
          --d: #083229;
          --t: #0e5247;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #eef3f1;
          color: #17322b;
        }

        .perino-wrap {
          width: min(1180px, calc(100% - 32px));
          margin: 42px auto;
        }

        .perino-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 24px;
        }

        .perino-eyebrow {
          font-size: 12px;
          letter-spacing: 0.14em;
          font-weight: 700;
          color: #1c7a22;
        }

        .perino-head h1 {
          margin: 8px 0 10px;
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.96;
          letter-spacing: -0.04em;
        }

        .perino-head p {
          max-width: 720px;
          margin: 0;
          color: #6d7b76;
          line-height: 1.6;
        }

        .perino-reset {
          border: 1px solid #dce5e1;
          background: #fff;
          border-radius: 10px;
          padding: 12px 16px;
          font-weight: 700;
          cursor: pointer;
        }

        .perino-demo {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
          overflow: hidden;
          border-radius: 24px;
          background:
            radial-gradient(circle at 78% 42%, rgba(64,185,60,.17), transparent 35%),
            linear-gradient(145deg, #0e5247, #083229 58%, #061f19);
          box-shadow: 0 32px 80px -45px rgba(0,0,0,.65);
        }

        .perino-stage {
          position: relative;
          min-height: 560px;
          padding: 26px;
          overflow: hidden;
        }

        .perino-stage-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.58);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .perino-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gl);
          box-shadow: 0 0 14px var(--gl);
        }

        .perino-stage svg {
          display: block;
          width: 100%;
          height: 430px;
          margin-top: 10px;
        }

        .perino-status {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .perino-status div {
          display: flex;
          justify-content: space-between;
          padding: 12px 14px;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 10px;
          background: rgba(255,255,255,.055);
        }

        .perino-status span {
          color: rgba(255,255,255,.48);
          font-size: 12px;
        }

        .perino-status strong {
          color: var(--gl);
          font-size: 12px;
        }

        .perino-panel {
          padding: 30px;
          border-left: 1px solid rgba(255,255,255,.1);
          background: rgba(3,18,14,.35);
        }

        .perino-panel-title {
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .perino-panel-title small {
          display: block;
          color: var(--gl);
          font-size: 10px;
          letter-spacing: 0.14em;
          margin-bottom: 5px;
        }

        .perino-panel-title strong {
          color: #fff;
          font-size: 20px;
        }

        .perino-control {
          padding: 22px 0;
          border-bottom: 1px solid rgba(255,255,255,.09);
        }

        .perino-control-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
        }

        .perino-control-head > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .perino-control-head strong {
          color: #fff;
          font-size: 14px;
        }

        .perino-control-head span {
          color: rgba(255,255,255,.46);
          font-size: 11px;
        }

        .perino-control-head output {
          color: var(--gl);
          font-weight: 700;
        }

        .perino-panel input[type="range"] {
          width: 100%;
          accent-color: var(--g);
          cursor: pointer;
        }

        .perino-entry {
          padding: 22px 0;
        }

        .perino-entry > strong {
          display: block;
          color: #fff;
          font-size: 14px;
        }

        .perino-entry > span {
          display: block;
          color: rgba(255,255,255,.46);
          font-size: 11px;
          margin-top: 4px;
        }

        .perino-entry-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 14px;
        }

        .perino-entry-buttons button {
          min-height: 44px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.05);
          color: rgba(255,255,255,.7);
          font-weight: 700;
          cursor: pointer;
        }

        .perino-entry-buttons button.active {
          border-color: var(--g);
          background: rgba(64,185,60,.15);
          color: var(--gl);
        }

        .perino-note {
          display: flex;
          gap: 10px;
          padding: 14px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 10px;
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.46);
          font-size: 11px;
          line-height: 1.55;
        }

        .perino-note b {
          color: var(--gl);
        }

        @media (max-width: 900px) {
          .perino-demo {
            grid-template-columns: 1fr;
          }

          .perino-panel {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,.1);
          }
        }

        @media (max-width: 620px) {
          .perino-wrap {
            margin: 24px auto;
          }

          .perino-head {
            align-items: flex-start;
            flex-direction: column;
          }

          .perino-stage {
            min-height: 500px;
            padding: 18px;
          }

          .perino-stage svg {
            height: 360px;
          }

          .perino-status {
            left: 16px;
            right: 16px;
            bottom: 14px;
          }

          .perino-status div {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="perino-wrap">
        <div className="perino-head">
            <div>
            <div className="perino-eyebrow">{demo.eyebrow}</div>
            <h1>{demo.title}</h1>
            <p>{demo.description}</p>
          </div>

          <button className="perino-reset" type="button" onClick={reset}>
            {demo.reset}
          </button>
        </div>

        <div className="perino-demo">
          <div className="perino-stage">
            <div className="perino-stage-label">
              <span className="perino-dot" />
              {demo.stageLabel}
            </div>

            <svg viewBox="0 0 620 340" aria-label={demo.ariaLabel}>
              <defs>
                <linearGradient id="guideGreen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#40b93c" />
                  <stop offset="100%" stopColor="#1c7a22" />
                </linearGradient>

                <linearGradient id="needleMetal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="25%" stopColor="#dfe5e2" />
                  <stop offset="55%" stopColor="#9aa6a0" />
                  <stop offset="80%" stopColor="#eef2f0" />
                  <stop offset="100%" stopColor="#7d8983" />
                </linearGradient>

                <radialGradient id="targetGlow">
                  <stop offset="0%" stopColor="#8be585" stopOpacity=".23" />
                  <stop offset="100%" stopColor="#8be585" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g stroke="rgba(255,255,255,.055)" strokeWidth="1">
                <line x1="0" y1="85" x2="620" y2="85" />
                <line x1="0" y1="170" x2="620" y2="170" />
                <line x1="0" y1="255" x2="620" y2="255" />
                <line x1="155" y1="0" x2="155" y2="340" />
                <line x1="310" y1="0" x2="310" y2="340" />
                <line x1="465" y1="0" x2="465" y2="340" />
              </g>

              <ellipse
                cx="500"
                cy="170"
                rx="105"
                ry="118"
                fill="url(#targetGlow)"
              />
              <ellipse
                cx="500"
                cy="170"
                rx="64"
                ry="78"
                fill="none"
                stroke="rgba(139,229,133,.28)"
                strokeDasharray="7 8"
              />
              <ellipse
                cx="500"
                cy="170"
                rx="34"
                ry="44"
                fill="rgba(139,229,133,.04)"
                stroke="rgba(139,229,133,.45)"
              />

              <g transform={`translate(0 ${geometry.hoff})`}>
                <circle
                  cx="96"
                  cy="150"
                  r="7"
                  fill={entry === 'A' ? '#8be585' : '#315d50'}
                />
                <circle
                  cx="96"
                  cy="210"
                  r="7"
                  fill={entry === 'B' ? '#8be585' : '#315d50'}
                />
                <text
                  x="73"
                  y="154"
                  fill="rgba(255,255,255,.62)"
                  fontSize="11"
                >
                  A
                </text>
                <text
                  x="73"
                  y="214"
                  fill="rgba(255,255,255,.62)"
                  fontSize="11"
                >
                  B
                </text>
              </g>

              <g transform={`translate(0 ${geometry.py - 170})`}>
                <rect
                  x="45"
                  y="112"
                  width="46"
                  height="116"
                  rx="15"
                  fill="#173e35"
                  stroke="rgba(255,255,255,.16)"
                />
                <rect
                  x="57"
                  y="126"
                  width="22"
                  height="88"
                  rx="8"
                  fill="url(#guideGreen)"
                />
                <path
                  d="M78 170 H128"
                  stroke="#40b93c"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle
                  cx="145"
                  cy="170"
                  r="20"
                  fill="#0e5247"
                  stroke="#8be585"
                  strokeWidth="3"
                />
                <circle cx="145" cy="170" r="5" fill="#8be585" />
              </g>

              <line
                x1="145"
                y1={geometry.py}
                x2="545"
                y2={geometry.py}
                stroke="rgba(255,255,255,.11)"
                strokeDasharray="5 8"
              />

              <g>
                <line
                  x1={geometry.px}
                  y1={geometry.py + 2}
                  x2={geometry.ex}
                  y2={geometry.ey + 2}
                  stroke="rgba(0,0,0,.3)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <line
                  x1={geometry.px}
                  y1={geometry.py}
                  x2={geometry.ex}
                  y2={geometry.ey}
                  stroke="url(#needleMetal)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <line
                  x1={geometry.shineX1}
                  y1={geometry.shineY1}
                  x2={geometry.ex}
                  y2={geometry.ey - 1}
                  stroke="rgba(255,255,255,.75)"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />

                <circle
                  cx={geometry.px}
                  cy={geometry.py}
                  r="10"
                  fill="#f4f7f5"
                  stroke="#aeb9b3"
                  strokeWidth="2"
                />
                <circle
                  cx={geometry.px}
                  cy={geometry.py}
                  r="4"
                  fill="#747f7a"
                />

                <circle cx={geometry.ex} cy={geometry.ey} r="3" fill="#fff" />

                <line
                  x1={geometry.ex}
                  y1={geometry.ey}
                  x2={geometry.tx}
                  y2={geometry.ty}
                  stroke="rgba(139,229,133,.45)"
                  strokeWidth="2"
                  strokeDasharray="7 7"
                />
              </g>
            </svg>

            <div className="perino-status">
              <div>
                <span>{demo.angle}</span>
                <strong>{angle}/100</strong>
              </div>
              <div>
                <span>{demo.height}</span>
                <strong>{height}/100</strong>
              </div>
              <div>
                <span>{demo.distance}</span>
                <strong>{distance}/100</strong>
              </div>
            </div>
          </div>

          <aside className="perino-panel">
            <div className="perino-panel-title">
              <small>{demo.panelEyebrow}</small>
              <strong>{demo.panelTitle}</strong>
            </div>

            <div className="perino-control">
              <div className="perino-control-head">
                <div>
                  <strong>{demo.angle}</strong>
                  <span>{demo.angleHint}</span>
                </div>
                <output>{angle}</output>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
              />
            </div>

            <div className="perino-control">
              <div className="perino-control-head">
                <div>
                  <strong>{demo.height}</strong>
                  <span>{demo.heightHint}</span>
                </div>
                <output>{height}</output>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>

            <div className="perino-control">
              <div className="perino-control-head">
                <div>
                  <strong>{demo.distance}</strong>
                  <span>{demo.distanceHint}</span>
                </div>
                <output>{distance}</output>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
              />
            </div>

            <div className="perino-entry">
              <strong>{demo.entryTitle}</strong>
              <span>{demo.entryHint}</span>

              <div className="perino-entry-buttons">
                <button
                  type="button"
                  className={entry === 'A' ? 'active' : ''}
                  onClick={() => setEntry('A')}
                >
                  {demo.entryA}
                </button>
                <button
                  type="button"
                  className={entry === 'B' ? 'active' : ''}
                  onClick={() => setEntry('B')}
                >
                  {demo.entryB}
                </button>
              </div>
            </div>

            <div className="perino-note">
              <b>ⓘ</b>
              <div>{demo.note}</div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
