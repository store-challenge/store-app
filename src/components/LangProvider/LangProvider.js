import { IntlProvider } from 'react-intl';
import { LOCALES } from "../i18n/locales"
import { messages } from "../i18n/messages";

const LangProvider = ({ children }) => {
  const locale = LOCALES.UKRAINIAN;

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.UKRAINIAN}
    >
      {children}
    </IntlProvider>
  );
}

export default LangProvider;
