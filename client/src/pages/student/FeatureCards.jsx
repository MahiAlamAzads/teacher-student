import React from "react";

/* ---------- SVG icons (stroke-based, inherit color via currentColor) ---------- */

const ChatPeopleIcon = (props) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {/* left speech bubble */}
    <path d="M22 10h34a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H40l-12 12V54h-6a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z" />
    {/* right speech bubble */}
    <path d="M80 28h58a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10h-8v14l-14-14H80a10 10 0 0 1-10-10V38a10 10 0 0 1 10-10z" />
    <path d="M118 42h14" />
    <circle cx="92" cy="42" r="1" />
    {/* left person */}
    <circle cx="38" cy="96" r="0" />
    <path d="M24 92h28v14a14 14 0 0 1-28 0V92z" />
    <path d="M30 120l8 8 8-8" />
    <path d="M6 160c0-18 14-32 32-32s32 14 32 32" />
    {/* right person */}
    <path d="M104 100h24v10a12 12 0 0 1-24 0v-10z" />
    <path d="M86 160c0-16 12-28 30-28s30 12 30 28" />
  </svg>
);

const HandshakeIcon = (props) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {/* globe / circle */}
    <path d="M18 100a62 62 0 0 1 20-45" />
    <path d="M18 100a62 62 0 0 0 40 58" />
    <circle cx="26" cy="64" r="1.5" />
    {/* thumb / hand on top */}
    <path d="M52 40l22-26 14 12-8 14" />
    <path d="M84 40l24-6 8 8" />
    <path d="M96 52l30-4 14 14-6 12" />
    {/* clasped hands */}
    <path d="M62 62l22-12 36 6 24 22-30 36-24 8-28-26z" />
    <path d="M70 92l26 24" />
    <path d="M86 78l22 22" />
    {/* cuff */}
    <path d="M32 94l22-22 28 26-22 22z" />
    <path d="M44 90l10 10" />
  </svg>
);

const ResumeIcon = (props) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {/* page */}
    <path d="M122 70V20a8 8 0 0 0-8-8H22a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h92a8 8 0 0 0 8-8v-18" />
    {/* avatar */}
    <circle cx="68" cy="52" r="22" />
    <circle cx="68" cy="46" r="8" />
    <path d="M52 66c4-8 10-10 16-10s12 2 16 10" />
    {/* text lines */}
    <path d="M28 92h2M42 92h42" />
    <path d="M28 108h2M42 108h42" />
    <path d="M28 124h2M42 124h30" />
    {/* pencil */}
    <path d="M150 74l-6-6a6 6 0 0 0-8 0L90 114l-4 24 24-4 46-46a6 6 0 0 0 0-8z" />
    <path d="M132 80l10 10" />
    <path d="M90 114l12 12" />
  </svg>
);

/* ---------- Data (replace with your real studentInfo) ---------- */

const defaultStudentInfo = {
  info: {
    name: "Student Name",
    email: "student@example.com",
    phone: "+880 1XXX-XXXXXX",
    batch: "Batch 01",
  },
  teachers: ["Teacher One", "Teacher Two", "Teacher Three"],
};

const PROFILE_IMG =
  "https://img.magnific.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?semt=ais_hybrid&w=740&q=80";

/* ---------- Component ---------- */

export default function StudentCards({ studentInfo = defaultStudentInfo }) {
  return (
    <section className="min-h-screen w-full bg-[#f9f8ff] px-4 py-12 sm:px-8">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Card 1: profile picture */}
        <article className="relative min-h-[455px] overflow-hidden rounded-[28px] bg-[#6c47ee] p-8">
          <h2 className="relative z-10 text-[28px] font-bold leading-[1.15] tracking-tight text-white">
            Your Profile Picture
          </h2>
          <img
            className="relative z-10 mt-6 aspect-square w-full rounded-2xl object-cover"
            src={PROFILE_IMG}
            alt="Student profile"
          />
          <ChatPeopleIcon className="pointer-events-none absolute -bottom-3 -right-3 h-32 w-32 text-[#d0fb0f]" />
        </article>

        {/* Card 2: student information */}
        <article className="relative min-h-[455px] overflow-hidden rounded-[28px] bg-[#d0fb0f] p-8">
          <h2 className="relative z-10 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0e0e10]">
            Student Information
          </h2>
          <div className="relative z-10 mt-6 flex flex-col gap-4">
            {Object.entries(studentInfo.info).map(([key, value]) => (
              <div key={key}>
                <label className="font-semibold text-[#0e0e10]">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </label>
                <input
                  value={value}
                  type="text"
                  disabled
                  readOnly
                  className="mt-1 w-full rounded-md border border-[#0e0e10]/20 bg-white/60 p-2 text-[#0e0e10]"
                />
              </div>
            ))}
          </div>
          <HandshakeIcon className="pointer-events-none absolute -bottom-3 -right-3 h-32 w-32 text-[#0e0e10]/20" />
        </article>

        {/* Card 3: teachers */}
        <article className="relative min-h-[455px] overflow-hidden rounded-[28px] bg-[#48cffd] p-8 sm:col-span-2 md:col-span-1">
          <h2 className="relative z-10 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0e0e10]">
            Right now, you are a student of
          </h2>
          <ul className="relative z-10 mt-6 list-inside list-disc space-y-2 text-[17px] font-medium text-[#0e0e10]/80">
            {studentInfo.teachers.map((teacher, index) => (
              <li key={index}>{teacher}</li>
            ))}
          </ul>
          <ResumeIcon className="pointer-events-none absolute -bottom-3 -right-3 h-44 w-44 text-[#0a9ad0]" />
        </article>
      </div>
    </section>
  );
}
