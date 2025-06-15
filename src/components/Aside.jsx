import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const tags = t("tagsList", { returnObjects: true });
  const bannerSrc =
    lang === "en"
      ? "/img/right-banner-en.png"
      : "/img/right-banner-ru.png";
  
  return (
    <aside className="main-aside">
      <div className="aside-tags-wrapper">
        <div className="aside-tags-title">{t("tags")}</div>
        <div className="aside-tags-list">
          {tags.map((tag, idx) => (
            <span key={idx} className="aside-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <img src={bannerSrc} alt="Баннер" className="sidebar-banner" />
    </aside>
  );
};

export default Aside;
