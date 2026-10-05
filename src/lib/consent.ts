/** Choix de consentement aux traceurs (RGPD / ePrivacy). */

export const CONSENT_STORAGE_KEY = "batimob.consent";
/** Émis à chaque changement de choix (ou à la réouverture du panneau). */
export const CONSENT_CHANGED_EVENT = "batimob:consent-changed";
/** Émis par le pied de page pour rouvrir le panneau de gestion. */
export const CONSENT_OPEN_EVENT = "batimob:open-consent";

export type Consent = {
  version: number;
  /** Cookies strictement nécessaires : toujours actifs. */
  necessary: true;
  /** Mesure d'audience (Google Analytics). */
  analytics: boolean;
  savedAt: string;
  /** Le choix vaut 6 mois, puis le bandeau est représenté (politique de cookies). */
  expiresAt: string;
};

const CONSENT_TTL_MS = 183 * 24 * 60 * 60 * 1000;

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (typeof parsed.analytics !== "boolean") return null;

    const expiresAt =
      typeof parsed.expiresAt === "string"
        ? parsed.expiresAt
        : parsed.savedAt
          ? new Date(
              new Date(parsed.savedAt).getTime() + CONSENT_TTL_MS,
            ).toISOString()
          : "";

    if (expiresAt && Date.parse(expiresAt) <= Date.now()) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return {
      version: 1,
      necessary: true,
      analytics: parsed.analytics,
      savedAt: typeof parsed.savedAt === "string" ? parsed.savedAt : "",
      expiresAt,
    };
  } catch {
    return null;
  }
}

function emit(detail: Consent | null) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, { detail }),
  );
}

export function writeConsent(analytics: boolean): Consent {
  const savedAt = new Date();
  const consent: Consent = {
    version: 1,
    necessary: true,
    analytics,
    savedAt: savedAt.toISOString(),
    expiresAt: new Date(savedAt.getTime() + CONSENT_TTL_MS).toISOString(),
  };
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify(consent),
    );
  } catch {
    /* stockage indisponible : le choix ne tient que pour cette visite */
  }
  emit(consent);
  return consent;
}

export function forgetConsent() {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* stockage indisponible */
  }
  emit(null);
}
