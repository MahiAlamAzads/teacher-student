export default function HomePageActionButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4">
      {/* Primary Button: "এখনই এনরোল করুন" */}
      <button
      onClick={() => (window.location.href = "/teacher")}
        type="button"
        className="group w-full sm:w-fit inline-flex items-center justify-between gap-3 bg-lime-brand hover:bg-lime-hover border-2 border-lime-border rounded-full pl-7 pr-1.5 py-1.5 transition-all cursor-pointer shadow-sm hover:shadow-glow-lime active:scale-[0.98]"
      >
        <span className="text-[17px] font-bold text-dark-900 tracking-tight select-none">
          Sign In As Teacher
        </span>

        {/* Circular Arrow Badge */}
        <span className="flex items-center justify-center w-11 h-11 bg-dark-900 rounded-full text-white transition-transform group-hover:translate-x-0.5">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </button>

      {/* Secondary Button: "বুটক্যাম্প আউটলাইন" */}
      <button
        onClick={() => (window.location.href = "/student")}
        type="button"
        className="inline-flex w-full sm:w-fit items-center gap-2.5 bg-white hover:bg-brand-purple/5 border border-brand-purple rounded-full px-7 py-3 text-brand-purple hover:border-brand-purple-dark transition-all cursor-pointer active:scale-[0.98]"
      >
        {/* Document / Outline Icon */}
        <svg
          className="w-5 h-5 text-brand-purple"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="3" width="16" height="18" rx="4" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
        </svg>

        <span className="text-[17px] font-semibold tracking-tight select-none">
          Sign In As Student
        </span>
      </button>
    </div>
  );
}
