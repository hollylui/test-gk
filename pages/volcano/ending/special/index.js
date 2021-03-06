import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../../../styles/Special.module.scss";

function Special() {
  const router = useRouter();
  useEffect(() => {
    router.push("/volcano/ending/special/0");
  }, []);
  return (
    <div className={styles.container}>
      <h1>Please wait a moment...</h1>
    </div>
  );
}

export default Special;
