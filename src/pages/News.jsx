import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("news.title")}</h1>
      <p>{t("news.text")}</p>
    </div>
  );
};

export default News;
