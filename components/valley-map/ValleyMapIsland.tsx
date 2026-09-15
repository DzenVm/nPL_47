"use client";

import { useEffect, useRef } from "react";
import { createApp, type App } from "vue";
import { ValleyMapWidget } from "./vueMapApp";
import styles from "./ValleyMapIsland.module.css";

export default function ValleyMapIsland() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    const app = createApp(ValleyMapWidget);
    app.mount(hostRef.current);
    appRef.current = app;
    return () => {
      appRef.current?.unmount();
      appRef.current = null;
    };
  }, []);

  return (
    <div className={styles.frame}>
      <div className={styles.badge}>podgląd mechaniki · fragment mapy</div>
      <div ref={hostRef} />
    </div>
  );
}
