import type { ReactNode } from "react";

const LINE_ID = "Paka7659";
const LINE_URL = `https://line.me/R/ti/p/~${LINE_ID}`;
const PHONE = "0979289247";
const PHONE_DISPLAY = "097-928-9247";
const FACEBOOK_NAME = "Pakamol Chanhom";
const FACEBOOK_URL = `https://www.facebook.com/search/top?q=${encodeURIComponent(FACEBOOK_NAME)}`;

const features = [
  {
    title: "ปลอดภัย",
    text: "คัดวัตถุดิบสดใหม่ทุกวัน ไม่ใส่ผงชูรส ไม่ใช้สารกันบูด ทานได้อย่างสบายใจทั้งครอบครัว",
    icon: <ShieldIcon />,
    tone: "sky",
  },
  {
    title: "สะอาด",
    text: "ล้าง เตรียม และปรุงในครัวที่สะอาดถูกสุขลักษณะ บรรจุในกล่องปิดสนิทพร้อมส่งถึงมือ",
    icon: <SparkleIcon />,
    tone: "pink",
  },
  {
    title: "ครบสารอาหาร",
    text: "จัดสัดส่วนโปรตีน ผัก และคาร์บดีในทุกกล่อง อิ่มพอดี ได้พลังงานครบสำหรับวันที่สดใส",
    icon: <LeafIcon />,
    tone: "leaf",
  },
] as const;

const menu = [
  {
    name: "สลัดอกไก่ย่างสมุนไพร",
    detail: "ผักสลัดออร์แกนิก อกไก่นุ่ม น้ำสลัดงาญี่ปุ่น",
    price: 89,
  },
  {
    name: "ข้าวไรซ์เบอร์รี่ปลาแซลมอน",
    detail: "แซลมอนย่างซีอิ๊ว ผักลวก ไข่ต้มยางมะตูม",
    price: 159,
  },
  {
    name: "โบว์ลธัญพืชเต้าหู้ (มังสวิรัติ)",
    detail: "ควินัว เต้าหู้ย่าง อะโวคาโด ถั่วแระ",
    price: 119,
  },
  {
    name: "น้ำผักผลไม้สกัดเย็น",
    detail: "สูตรเขียวใส / สูตรชมพูแก้วมังกร ขวด 250 มล.",
    price: 59,
  },
];

const faqs = [
  {
    q: "สั่งอาหารได้อย่างไร?",
    a: "ทักไลน์มาบอกเมนูและเวลาที่สะดวกได้เลย หรือสั่งผ่าน Grab ก็ได้ เราจะยืนยันออเดอร์ให้ภายในไม่กี่นาที",
  },
  {
    q: "ส่งพื้นที่ไหนบ้าง?",
    a: "ร้านอยู่ย่านเมืองทอง ส่งถึงบริเวณใกล้เคียงผ่าน Grab หรือมารับเองที่ร้านได้",
  },
  {
    q: "ร้านเปิดกี่โมง?",
    a: "เปิดทุกวัน 08.00–18.00 น. แนะนำให้สั่งล่วงหน้าช่วงเที่ยงเพื่อไม่ต้องรอนาน",
  },
  {
    q: "แพ้อาหารบางอย่าง ปรับเมนูได้ไหม?",
    a: "ได้เลย แจ้งทางไลน์ได้ว่าแพ้อะไรหรือไม่ทานอะไร เราจะปรับวัตถุดิบให้เหมาะกับคุณ",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex-1 pb-24 sm:pb-0">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft via-white to-pink-soft">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pink/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-sky/25 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-5 py-16 sm:py-24 md:flex-row md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-sky-dark shadow-sm">
                <span className="h-2 w-2 rounded-full bg-leaf" />
                อาหารเพื่อสุขภาพ · เมืองทอง
              </p>
              <h1 className="text-hero font-bold text-sky-dark">
                มีสุข
              </h1>
              <p className="mt-4 text-title font-semibold text-pink-dark [font-family:var(--font-heading)]">
                กินดี มีสุข ทุกวัน
              </p>
              <p className="mx-auto mt-4 max-w-md text-lead text-muted md:mx-0">
                อาหารสุขภาพสดใหม่ สะอาด ปลอดภัย ครบสารอาหาร
                ทำด้วยใจสำหรับคนรักสุขภาพ
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <LineButton />
                <a
                  href="#menu"
                  className="rounded-full px-6 py-3 font-medium text-sky-dark underline-offset-4 hover:underline"
                >
                  ดูเมนูและราคา
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* จุดเด่น */}
        <Section id="features" eyebrow="ทำไมต้องมีสุข" title="ใส่ใจทุกคำที่คุณทาน">
          <div className="grid gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-sky-soft bg-white p-6 text-center shadow-sm"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                    f.tone === "sky"
                      ? "bg-sky-soft text-sky-dark"
                      : f.tone === "pink"
                        ? "bg-pink-soft text-pink-dark"
                        : "bg-leaf/15 text-leaf"
                  }`}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* เมนูและราคา */}
        <Section
          id="menu"
          eyebrow="เมนูแนะนำ"
          title="เมนูและราคา"
          className="bg-sky-soft/50"
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {menu.map((m) => (
              <li
                key={m.name}
                className="flex items-start justify-between gap-4 rounded-3xl bg-white p-5 shadow-sm"
              >
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">{m.detail}</p>
                </div>
                <p className="shrink-0 rounded-full bg-pink-soft px-3 py-1 font-semibold text-pink-dark">
                  {m.price}.-
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-muted">
            สั่งผ่านไลน์ หรือสั่งทาง Grab ได้เลย
          </p>
        </Section>

        {/* คำถามที่พบบ่อย */}
        <Section id="faq" eyebrow="สงสัยไหม" title="คำถามที่พบบ่อย">
          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-sky-soft bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-2xl leading-none text-sky transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* ติดต่อเรา */}
        <Section
          id="contact"
          eyebrow="ติดต่อเรา"
          title="สั่งอาหาร หรือสอบถามได้เลย"
          className="bg-pink-soft/60"
        >
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <ContactCard
              href={LINE_URL}
              label="LINE"
              value={LINE_ID}
              icon={<ChatIcon />}
              external
            />
            <ContactCard
              href={`tel:${PHONE}`}
              label="โทร"
              value={PHONE_DISPLAY}
              icon={<PhoneIcon />}
            />
            <ContactCard
              href={FACEBOOK_URL}
              label="Facebook"
              value={FACEBOOK_NAME}
              icon={<FacebookIcon />}
              external
            />
            <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-soft text-sky-dark">
                <PinIcon />
              </span>
              <div>
                <p className="text-sm text-muted">ที่ร้าน · เวลาเปิด</p>
                <p className="font-semibold">เมืองทอง</p>
                <p className="text-sm">เปิดทุกวัน 08.00–18.00 น.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <LineButton />
          </div>
        </Section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="bg-sky-dark px-5 pt-8 pb-28 text-center text-sm text-white/90 sm:pb-8">
        <p className="text-lg font-semibold text-white [font-family:var(--font-heading)]">
          มีสุข
        </p>
        <p className="mt-1">อาหารเพื่อสุขภาพ · เมืองทอง · เปิด 08.00–18.00 น.</p>
        <p className="mt-3 text-white/70">© 2026 มีสุข</p>
      </footer>

      {/* ปุ่มไลน์ลอยด้านล่าง (มือถือ) */}
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-sky-soft bg-white/95 p-3 backdrop-blur sm:hidden">
        <LineButton full />
      </div>
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  className = "",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold tracking-wide text-pink-dark">
          {eyebrow}
        </p>
        <h2 className="mt-2 mb-10 text-center text-title font-bold text-sky-dark">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function LineButton({ full = false }: { full?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-line/30 transition hover:brightness-105 active:scale-95 ${
        full ? "w-full" : ""
      }`}
    >
      <ChatIcon />
      ทักไลน์เลย
    </a>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-soft text-pink-dark">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm text-muted">{label}</p>
        <p className="truncate font-semibold">{value}</p>
      </div>
    </a>
  );
}

function HeroArt() {
  return (
    <div aria-hidden className="relative h-64 w-64 shrink-0 sm:h-72 sm:w-72">
      <div className="absolute inset-0 rounded-full bg-white shadow-xl shadow-sky/20" />
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-sky-soft to-pink-soft" />
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        {/* ชาม */}
        <path d="M40 105 h120 a60 55 0 0 1 -120 0z" fill="var(--sky)" />
        <path d="M40 105 h120" stroke="var(--sky-dark)" strokeWidth="4" strokeLinecap="round" />
        {/* ผักและผลไม้ */}
        <circle cx="75" cy="92" r="16" fill="var(--leaf)" />
        <circle cx="100" cy="85" r="18" fill="var(--pink)" />
        <circle cx="127" cy="93" r="15" fill="var(--leaf)" opacity="0.8" />
        <circle cx="100" cy="85" r="7" fill="#fff" opacity="0.6" />
        {/* ใบไม้ */}
        <path d="M100 66 c-4 -16 8 -26 20 -26 c0 14 -10 24 -20 26z" fill="var(--leaf)" />
        <path d="M100 66 c2 -10 8 -18 16 -22" stroke="#fff" strokeWidth="1.5" fill="none" />
      </svg>
      <span className="absolute top-6 right-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-pink-dark shadow">
        สดใหม่ทุกวัน
      </span>
    </div>
  );
}

/* ===== ไอคอน ===== */
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      {children}
    </svg>
  );
}
function ShieldIcon() {
  return (
    <Svg>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  );
}
function SparkleIcon() {
  return (
    <Svg>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />
    </Svg>
  );
}
function LeafIcon() {
  return (
    <Svg>
      <path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15" />
      <path d="M5 19c3-5 6-8 10-10" />
    </Svg>
  );
}
function ChatIcon() {
  return (
    <Svg>
      <path d="M4 5h16v11H9l-5 4z" />
    </Svg>
  );
}
function PhoneIcon() {
  return (
    <Svg>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    </Svg>
  );
}
function FacebookIcon() {
  return (
    <Svg>
      <path d="M15 3h-2a4 4 0 00-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 011-1h2z" />
    </Svg>
  );
}
function PinIcon() {
  return (
    <Svg>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </Svg>
  );
}
