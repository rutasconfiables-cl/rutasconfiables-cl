import { NextRequest, NextResponse } from "next/server";

const ENGLISH_SPEAKING_COUNTRIES = new Set([
  "US", "GB", "CA", "AU", "NZ", "IE", "ZA", "SG", "PH", "IN",
  "JM", "TT", "BS", "BB", "BZ", "GY", "NG", "GH", "KE", "UG",
]);

type Locale = "es" | "pt" | "en";

function localePath(locale: Locale) {
  return locale === "es" ? "/" : `/${locale}`;
}

function detectedLocale(request: NextRequest): Locale {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country === "BR") return "pt";
  if (country && ENGLISH_SPEAKING_COUNTRIES.has(country)) return "en";

  const preferredLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (preferredLanguage.startsWith("pt")) return "pt";
  if (preferredLanguage.startsWith("en")) return "en";
  return "es";
}

export function proxy(request: NextRequest) {
  const explicitLocale = request.nextUrl.searchParams.get("lang") as Locale | null;
  if (explicitLocale && ["es", "pt", "en"].includes(explicitLocale)) {
    const destination = request.nextUrl.clone();
    destination.pathname = localePath(explicitLocale);
    destination.searchParams.delete("lang");
    const response = NextResponse.redirect(destination);
    response.cookies.set("rc_locale", explicitLocale, { maxAge: 60 * 60 * 24 * 365, sameSite: "lax", path: "/" });
    return response;
  }

  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const savedLocale = request.cookies.get("rc_locale")?.value as Locale | undefined;
  const locale = savedLocale && ["es", "pt", "en"].includes(savedLocale) ? savedLocale : detectedLocale(request);
  if (locale === "es") return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.pathname = localePath(locale);
  return NextResponse.redirect(destination);
}

export const config = {
  matcher: ["/", "/pt", "/en"],
};
