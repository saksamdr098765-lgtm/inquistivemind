import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

const variants = {
  tip: {
    icon: FiInfo,
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    iconBg: "bg-yellow-500",
    iconColor: "text-white",
    title: "text-yellow-700",
  },

  warning: {
    icon: FiAlertTriangle,
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-[#D6451B]",
    iconColor: "text-white",
    title: "text-[#D6451B]",
  },

  success: {
    icon: FiCheckCircle,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    title: "text-emerald-700",
  },
};

export default function InfoCard({
  type = "tip",
  title,
  text,
}) {
  const style = variants[type] || variants.tip;
  const Icon = style.icon;

  return (
    <div
      className={`relative my-8 overflow-hidden rounded-3xl border ${style.border} ${style.bg} p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:my-10 sm:p-7`}
    >
      {/* Decorative Glow */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative flex items-start gap-5">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.iconBg} shadow-sm`}
        >
          <Icon
            className={`h-6 w-6 ${style.iconColor}`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <h4
            className={`mb-2 text-lg font-bold ${style.title}`}
          >
            {title}
          </h4>

          <p className="text-base leading-8 text-slate-700">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}