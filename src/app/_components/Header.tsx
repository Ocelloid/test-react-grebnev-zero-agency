"use client";
import { queries } from "@/api";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { userCredentials, isLoggedIn } from "@/store/users";
import type { ReadableAtom, WritableAtom } from "nanostores";

const useSsrStore = <T extends WritableAtom<any> | ReadableAtom<any>>(
  atom: T
) => {
  const storeValue = useStore(atom);
  const [data, setData] = useState<typeof storeValue>();

  useEffect(() => {
    setData(storeValue);
  }, [storeValue]);

  return data;
};

export default function Header() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const user = useSsrStore(userCredentials);
  const isUserLoggedIn = isLoggedIn();
  return (
    <div className={styles.header}>
      <h2>ТЗ для Zero Agency</h2>
      {isUserLoggedIn && !!user ? (
        <div>
          {user.login}
          <button onClick={() => queries.signOut()} className={styles.login}>
            Выйти
          </button>
        </div>
      ) : (
        <div>
          <input
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => {
              queries.signIn(login, password);
              setLogin("");
              setPassword("");
            }}
            disabled={!login || !password}
            className={styles.login}
          >
            Войти
          </button>
        </div>
      )}
    </div>
  );
}
