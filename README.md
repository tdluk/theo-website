<h1 align="center">
  theo-website
</h1>
<p align="center">
  Source code for my <a href="https://theo.engineer/" target="_blank">personal website</a> built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted by <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/theo-website/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/5c7634be-b708-4fd1-adee-f5e0ea76dede/deploy-status" alt="Netlify Status" />
  </a>
</p>

## 🛠 Development Setup

1.  Install Gatsby CLI
    ```shell
    npm install -g gatsby-cli
    ```
2.  Clone the repo
    ```shell
    git clone https://github.com/tdluk/theo-website.git
    ```
3.  Install dependencies
    ```shell
    cd theo-website
    npm install
    ```
4.  Run a development server
    ```shell
    gatsby develop
    ```

## 🚀 Deployment
The website uses Netlify's Continuous Deployment. On every commit to `master` Netifly runs `gatsby build`, which compiles the site into the `public` output directory (hidden in this repo) ready for public consumption. 


## 📚 References
- [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- [Emotion Docs](https://emotion.sh/docs/introduction)
