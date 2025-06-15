import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => changeLang("ru")} disabled={i18n.language === "ru"}>
        Рус
      </button>
      <button onClick={() => changeLang("en")} disabled={i18n.language === "en"}>
        Eng
      </button>
    </div>
  );
};

export default LanguageSwitcher;
