import styles from "./style.module.css";
import Link from "@docusaurus/Link";

interface Props {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    redirectTo: string;
    label: string;
}

export const CardInfo = ({ icon: Icon, redirectTo, label }: Props) => {

    return (
        <Link to={redirectTo} className={styles.link}>
            <div className={styles.card}>
                {<Icon />}
                <span>{label}</span>
            </div>
        </Link>
    );

}