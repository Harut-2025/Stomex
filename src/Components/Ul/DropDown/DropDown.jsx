import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from "./DropDown.module.scss";

export default function Dropdown() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(t("label1"));

  const menuItems = [
    { id: 1, label: t("label1") },
    { id: 2, label: t("label2") },
    { id: 3, label: t("label3") },
    { id: 4, label: t("label4") },
    { id: 5, label: t("label5") },
    { id: 6, label: t("label6") },
    { id: 7, label: t("label7") },
    { id: 8, label: t("label8") },
    { id: 9, label: t("label9") }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    setSelectedItem(item.label);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.button}>
        <span>{selectedItem}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`${styles.menuItem} ${
                  selectedItem === item.label ? styles.selected : ''
                }`}
              >
                <div className={styles.itemContent}>
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
