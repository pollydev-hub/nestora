import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <span>{t("contactsFooter")}</span>
    </footer>
  );
};

export default Footer;
