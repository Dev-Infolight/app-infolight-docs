import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import LogoWhite from "@site/static/img/infolight-white.svg";
import IntroducaoIcon from "@site/static/img/lading-page/introducao.svg";
import NovaVendaIcon from "@site/static/img/lading-page/nova-venda.svg";
import ExpedicaoDeCargaIcon from "@site/static/img/lading-page/expedicao-carga.svg";
import ExpedicaoNFCeIcon from "@site/static/img/lading-page/expedicao-nfce.svg";
import DashboardIcon from "@site/static/img/lading-page/dashboard.svg";
import LiberacaoDePrecosIcon from "@site/static/img/lading-page/liberacrao-precos.svg";
import { CardInfo } from '../components/CardInfo';


export default function Home(): ReactNode {

  const {siteConfig} = useDocusaurusContext();

  console.log(siteConfig.themeConfig.docs);

  return (
    <Layout 
      title={siteConfig.title} 
      description="Documentação oficial infolight."
    >
    
    <div className={styles.banner}>
        <LogoWhite />
        <p>Um sistema completo para a gestão do seu negócio</p>
    </div>
    <div className={styles.divTitle}>
        <h1>Explore a nossa documentação</h1>
    </div>
    <div className={styles.center}>
       <div className={styles.topics}>
        <CardInfo 
          label='Introdução'
          redirectTo='/docs/introducao'
          icon={IntroducaoIcon}
        />
        <CardInfo 
          label='Nova venda'
          redirectTo='/docs/aplicativo/forca-de-vendas/nova-venda'
          icon={NovaVendaIcon}
        />
        <CardInfo 
          label='Expedição de carga'
          redirectTo='/docs/introducao'
          icon={ExpedicaoDeCargaIcon}
        />
        <CardInfo 
          label='Expedição de NFCe'
          redirectTo='/docs/introducao'
          icon={ExpedicaoNFCeIcon}
        />
        <CardInfo 
          label='Dashboard'
          redirectTo='/docs/aplicativo/tela-inicial/guia-de-dashboard'
          icon={DashboardIcon}
        />
        <CardInfo 
          label='Liberação de preços'
          redirectTo='/docs/introducao'
          icon={LiberacaoDePrecosIcon}
        />
    </div>
    </div>
    </Layout>
  );
}
