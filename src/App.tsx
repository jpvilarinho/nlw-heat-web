import { useContext } from "react";
import styles from "./App.module.scss";
import { LoginBox } from "./components/login-box";
import { MessageList } from "./components/message-list";
import { SendMessageForm } from "./components/send-message-from";
import { AuthContext } from "./contexts/auth";

export function App() {
  const { user } = useContext(AuthContext);

  const isSignedIn = Boolean(user);

  return (
    <main
      className={`${styles.contentWrapper} ${
        isSignedIn ? styles.contentSigned : ""
      }`}
    >
      <MessageList />
      {isSignedIn ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
