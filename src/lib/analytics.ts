const COOKIE_KEY = "fegatex_cookie_consent";
const GA_ID = (import.meta.env.VITE_GA_TRACKING_ID as string) || "";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function getAnalyticsConsent(): boolean {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) return false;
    return JSON.parse(stored)?.analytics === true;
  } catch {
    return false;
  }
}

function loadGA(): void {
  if (!GA_ID || document.getElementById("ga-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function removeGA(): void {
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }

  const deleteCookie = (name: string) => {
    const domain = window.location.hostname;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    document.cookie = `${name}=; Max-Age=0; path=/`;
  };

  deleteCookie("_ga");
  deleteCookie("_gid");
  document.cookie.split(";").forEach((c) => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga_")) deleteCookie(name);
  });
}

/** Zavolať raz pri štarte aplikácie — načíta GA ak bol súhlas predtým udelený. */
export function initAnalytics(): void {
  if (getAnalyticsConsent()) loadGA();
}

/** Zavolať po zmene cookie súhlasu používateľom. */
export function updateAnalyticsConsent(analyticsEnabled: boolean): void {
  if (analyticsEnabled) {
    loadGA();
  } else {
    removeGA();
  }
}
