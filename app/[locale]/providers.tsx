"use client";

import { I18nProviderClient } from "../../Locales/client";
import { PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren<{
  locale: string;
}>;

export default function Providers({ children, locale }: ProvidersProps) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  );
}