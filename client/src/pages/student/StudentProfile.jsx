/* ---------- Data (replace with your real studentInfo) ---------- */

const defaultStudentInfo = {
  info: {
    name: "Student Name",
    email: "student@example.com",
    phone: "+880 1XXX-XXXXXX",
    batch: "Batch 01",
  },
  teachers: ["Md. Akbar Ali", "Ahmed Kudus", "Md. Mahfuzur Rahman"],
};

const PROFILE_IMG =
  "https://img.magnific.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?semt=ais_hybrid&w=740&q=80";

/* ---------- Component ---------- */

export default function StudentProfile({ studentInfo = defaultStudentInfo }) {
  return (
    <section className="min-h-screen w-full px-4 py-12 sm:px-8">
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
          {/* <ChatPeopleIcon className="pointer-events-none absolute -bottom-3 -right-3 h-32 w-32 text-[#d0fb0f]" /> */}
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
          {/* <HandshakeIcon className="pointer-events-none absolute -bottom-3 -right-3 h-32 w-32 text-[#0e0e10]/20" /> */}
        </article>

        {/* Card 3: teachers */}
        <article className="relative min-h-[455px] overflow-hidden rounded-[28px] bg-[#48cffd] p-8 sm:col-span-2 md:col-span-1 flex flex-col justify-center text-center">
          <h2 className="relative z-10 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0e0e10]">
            Your Teachers
          </h2>
          <ul className="relative z-10 mt-6  space-y-2 text-[17px] font-medium text-[#0e0e10]/80">
            {studentInfo.teachers.map((teacher, index) => (
              <li key={index}>{teacher}</li>
            ))}
          </ul>
          {/* <ResumeIcon className="pointer-events-none absolute -bottom-3 -right-3 h-44 w-44 text-[#0a9ad0]" /> */}
        </article>
      </div>
    </section>
  );
}
