import * as React from "react";

interface CountryFlagProps {
  code: string;
  label: string;
  className?: string;
}

export function CountryFlag({ code, label, className = "w-6 h-4" }: CountryFlagProps) {
  if (code === "FR") {
    return (
      <svg
        className={`rounded-sm shrink-0 ${className}`}
        viewBox="0 0 640 480"
        role="img"
        aria-label={label}
      >
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#00267f" d="M0 0h213.3v480H0z" />
          <path fill="#ffffff" d="M213.3 0h213.4v480H213.3z" />
          <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
        </g>
      </svg>
    );
  }

  if (code === "GB") {
    return (
      <svg
        className={`rounded-sm shrink-0 ${className}`}
        viewBox="0 0 640 480"
        role="img"
        aria-label={label}
      >
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
        />
        <path
          fill="#C8102E"
          d="m424 281 216 159v40L369 281h55zm-208-82L0 40V0l271 200h-55zM640 0v3L391 191l2-44L580 0h60zM0 480v-5l249-186-2 44L60 480H0z"
        />
        <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
        <path fill="#C8102E" d="M267 0h107v480H267zM0 187h640v107H0z" />
      </svg>
    );
  }

  if (code === "DZ") {
    return (
      <svg
        className={`rounded-sm shrink-0 ${className}`}
        viewBox="0 0 640 480"
        role="img"
        aria-label={label}
      >
        <path fill="#006233" d="M0 0h320v480H0z" />
        <path fill="#ffffff" d="M320 0h320v480H320z" />
        <circle cx="320" cy="240" r="120" fill="#d21034" />
        <circle cx="344" cy="240" r="96" fill="#ffffff" />
        <polygon
          fill="#d21034"
          points="356,240 338,246 345,227 330,215 349,215 356,196 363,215 382,215 367,227 374,246"
        />
      </svg>
    );
  }

  return (
    <span role="img" aria-label={label} className="text-xl">
      🌐
    </span>
  );
}
