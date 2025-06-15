import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  // Получаем массив товаров из локали
  const items = t("products.items", { returnObjects: true });

  return (
    <div>
      <h2>{t("products.header")}</h2>
      <table style={{ width: "100%", color: "#fff" }}>
        <thead>
          <tr>
            <th>{t("products.table.name")}</th>
            <th>{t("products.table.description")}</th>
            <th>{t("products.table.price")}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        href="/test.pdf"
        download
        style={{ color: "#fff", marginTop: "1em", display: "inline-block" }}
      >
        {t("products.download")}
      </a>
    </div>
  );
};

export default Products;
