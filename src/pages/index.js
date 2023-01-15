import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div style={{ textAlign: "left" }} className="row">
          <div className="col">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                NigaPHP Framework - 5min ⏱️
              </Link>
            </div>
            <div style={{ textAlign: "left", paddingTop: "1rem" }}>
              <CodeBlock language="bash" showLineNumbers>
                {`composer create-project niga/niga my-web-app`}
              </CodeBlock>
            </div>
          </div>
          <div className="col" style={{ textAlign: "left" }}>
            <CodeBlock language="php" title="src/Controller" showLineNumbers>
              {`<?php namespace App\\Controller;

use Niga\\Framework\\Attributes\Route;
use Nigatedev\\Framework\\Controller\\AbstractController;

class SiteController extends AbstractController
{
    #[Route('/', name:'home', method:'get')]
    public function home() { return $this->render("home", []); }
}`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
