import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./Nav.module.css";

function CreateUser() {
  alert("Hello from Opret bruger");
}
function LogIn() {
  alert("Hello from Opret bruger");
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoDiv}>
        <a className={styles.logo} href="/">
          Musik Samspil
        </a>
        <p>Skabt af DAOS - Dansk Amatørorkester Samvirke</p>
      </div>
      <div>
        <a href="/opslag">Opslag</a>
        <a href="/profil">Profil</a>
        <PrimaryButton
          buttonText="Opret bruger"
          color="blue"
          onClick={CreateUser}
        />

        <PrimaryButton buttonText="Log ind" color="white" onClick={LogIn} />
      </div>
    </nav>
  );
}
