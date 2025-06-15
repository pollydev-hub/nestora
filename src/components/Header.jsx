import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="site-branding">
        <img src="/img/logo.png" alt="Логотип" className="site-logo" />
        <span className="site-title">{t("siteTitle")}</span>
      </div>
    <LanguageSwitcher />
    </header>
  );
};

export default Header;