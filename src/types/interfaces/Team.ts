export interface Team {
  id: string;
  name: string;
  logoUrl?: string;
  fallbackLogo?: string; // Fallback logo URL if logoUrl is not available
}
