// const Contact = () => (
//   <div>
//     <p>+7 908 517 50 43</p>
//   </div>
// );
// export default Contact;

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("contact.phone")}</p>
    </div>
  );
};

export default Contact;

