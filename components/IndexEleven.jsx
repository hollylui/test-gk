//! From Library
import Image from "next/image";

//! Images
import sign from "../assets/images/volcano/left_right.png";

//! Styles
import styles from "../styles/IndexEleven.module.scss";

export default function IndexEleven() {
  const style = { position: "relative", width: "100%", paddingBottom: "30%" };

  return (
    <div className={styles.container} style={style}>
      <Image
        src={sign}
        alt="direction sign"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
