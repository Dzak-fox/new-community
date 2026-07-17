import { useState } from 'react';
import { ArrowRight, Check, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import { partnerFeatures } from '../data';
import { SectionHeading } from '../components/SectionHeading';

const PARTNER_TELEGRAM_URL = 'https://t.me/Trade_Academy_Bot?start=partner';

const partnershipTypes = [
  'Telegram-канал / сообщество',
  'Бренд / брокер',
  'Образовательный проект',
  'Другое',
];

const placements = [
  { tag: 'Course screen', desc: 'Sponsored lesson header', cta: 'Brand logo + tagline' },
  { tag: 'Mission transition', desc: 'Full-screen interstitial', cta: 'Video or static creative' },
  { tag: 'Exam results', desc: 'Celebration moment', cta: 'Co-branded badge' },
];

const requestSteps = [
  'Tell us about your channel, brand or community',
  'Pick a placement package or custom integration',
  'We build the creative and attribute your traffic',
];

export default function Partners() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Partners & Advertising"
        title="A premium channel for serious trading brands"
        subtitle="Trade Academy reaches an engaged, self-selecting audience of active traders — right inside Telegram. Integrate your brand, your content and your community."
      />

      {/* Partner features */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="What we offer"
            title="Native placements, creator integrations, Telegram traffic"
            subtitle="Reach traders where they already learn — inside the Mini App and across partner Telegram communities."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/20"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                </div>
              );
            })}
          </div>

          {/* placement showcase */}
          <div className="mt-8 grid gap-4 rounded-2xl border border-white/5 bg-ink-850/50 p-6 sm:grid-cols-3">
            {placements.map((p) => (
              <div key={p.tag} className="rounded-xl border border-white/5 bg-ink-900/60 p-4">
                <span className="rounded-md bg-gold-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                  {p.tag}
                </span>
                <p className="mt-3 text-sm font-medium text-zinc-200">{p.desc}</p>
                <p className="mt-1 text-xs text-zinc-500">{p.cta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner request CTA */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Become a partner"
                title="Request a partnership in three steps"
                subtitle="Whether you run a Telegram channel, a broker, or a trading education brand — we'll build an integration that fits your audience."
              />
              <div className="mt-8 space-y-3">
                {requestSteps.map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-ink-850/70 p-4 shadow-card"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-500/15 font-mono text-sm font-semibold text-gold-300">
                      {i + 1}
                    </span>
                    <span className="text-sm text-zinc-200">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-ink-850/90 to-ink-900/90 p-8 shadow-glow sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/10 blur-2xl" />
              <h3 className="font-display text-xl font-bold text-white">Заявка на партнёрство</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Расскажите о своём бренде, и мы предложим индивидуальный формат размещения.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-gold-500/30 bg-gold-500/5 p-6 text-center">
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold-500/15">
                    <Check className="h-6 w-6 text-gold-300" />
                  </div>
                  <p className="text-sm font-medium text-zinc-100">
                    Заявка подготовлена. Продолжите общение в Telegram.
                  </p>
                  <a
                    href={PARTNER_TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-5 w-full"
                  >
                    Открыть Telegram
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Название / контакт <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Канал, бренд или @username"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold-500/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Тип партнёрства <span className="text-gold-400">*</span>
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-100 focus:border-gold-500/40 focus:outline-none"
                    >
                      <option value="" className="bg-ink-900">Выберите тип…</option>
                      {partnershipTypes.map((t) => (
                        <option key={t} value={t} className="bg-ink-900">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Сообщение <span className="text-zinc-600">(необязательно)</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Кратко опишите проект, аудиторию и цели"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold-500/40 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!name.trim() || !type}
                    className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Подготовить заявку
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-zinc-600">
                    <Check className="h-3 w-3 text-gold-500" /> Без токенов и оплаты для запроса
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Reach active traders inside Telegram"
        subtitle="Native placements, creator integrations and attributed traffic — built for serious trading brands."
        primaryLabel="Advertise with us"
      />
    </>
  );
}


export default Partners