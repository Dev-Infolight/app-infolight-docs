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
import Administrador from "@site/static/img/lading-page/cadastro.svg";
import Compras from "@site/static/img/lading-page/compras.svg";
import Estoque from "@site/static/img/lading-page/estoque.svg";
import Faturamento from "@site/static/img/lading-page/faturamento.svg";
import Financeiro from "@site/static/img/lading-page/financeiro.svg";
import Livros from "@site/static/img/lading-page/livros-fiscais.svg";


import { CardInfo } from '../components/CardInfo';


export default function Home(): ReactNode {

  const {siteConfig} = useDocusaurusContext();

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
          redirectTo='/docs/aplicativo/expedicao/expedicao-carga'
          icon={ExpedicaoDeCargaIcon}
        />
        <CardInfo 
          label='Expedição de NFCe'
          redirectTo='/docs/aplicativo/expedicao/expedicao-NFCE'
          icon={ExpedicaoNFCeIcon}
        />
        <CardInfo 
          label='Dashboard'
          redirectTo='/docs/aplicativo/tela-inicial/guia-de-dashboard'
          icon={DashboardIcon}
        />
        <CardInfo 
          label='Liberação de preços'
          redirectTo='/docs/aplicativo/gestor/liberacao-de-precos'
          icon={LiberacaoDePrecosIcon}
        />
        
        
    </div>
    </div>
    <div className={styles.divTitle}>
        <h1>Documentação do TempusERP</h1>
        </div>
      <div className={styles.center}>
        <div className={styles.topics}>
          <CardInfo 
            label='Adiministrador'
            redirectTo='/docs/TempusERP/Administrador/pagina-do-cliente'
            icon={Administrador}
          />
          <CardInfo 
            label='Compras'
            redirectTo='/docs/TempusERP/Compras/emissao-de-pedidos'
            icon={Compras}
          />
          <CardInfo 
            label='Estoque'
            redirectTo='/docs/TempusERP/Estoque/ficha-tecnica'
            icon={Estoque}
          />
          <CardInfo 
            label='Faturamento'
            redirectTo='/docs/TempusERP/Faturamento/cadastro-de-regiao'
            icon={Faturamento}
          />
          <CardInfo 
            label='Financeiro'
            redirectTo='/docs/TempusERP/Financeiro/prestacao'
            icon={Financeiro}
          />
          <CardInfo 
            label='Livros Fiscais'
            redirectTo='/docs/TempusERP/Livros-Fiscais/entrada-via-xml'
            icon={Livros}
          />
        </div>
        </div>
    </Layout>
  );
}
