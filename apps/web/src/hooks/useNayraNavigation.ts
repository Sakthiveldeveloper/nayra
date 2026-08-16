import { useState } from "react";
import type { PageKey } from "../types/nayra";

export function useNayraNavigation() {
  const [page, setPage] = useState<PageKey>("home");
  return { page, navigate: setPage };
}
