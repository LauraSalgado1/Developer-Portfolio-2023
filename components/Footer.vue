<template>
  <footer id="siteFooter" class="site-footer f-ui">
    <div class="footer-wrapper">
      <img
        class="footer-logo"
        src="/Laura-Salgado-Developer-Since-2016-light.svg"
        alt="Illustration of a cute white cat. Text reads Laura Salgado Developer Since 2016"
        width="400"
        height="134"
      />

      <ul class="socials no-format">
        <li>
          <a href="mailto:culham.laura@gmail.com" target="_blank" title="Email">
            <Icon name="mdi-email" width="40" height="40" color="#fff" />
            <span class="screen-reader-text">Email culham.laura@gmail.com</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/LauraSalgado1"
            target="_blank"
            title="GitHub"
          >
            <Icon name="mdi-github" width="40" height="40" color="#fff" />
            <span class="screen-reader-text">Github</span>
          </a>
        </li>

        <li>
          <a
            href="https://codepen.io/Laura_Salgado"
            target="_blank"
            title="CodePen"
          >
            <Icon name="mdi-codepen" width="40" height="40" color="#fff" />
            <span class="screen-reader-text">CodePen</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/laura-salgado-developer/"
            target="_blank"
            title="LinkedIn"
          >
            <Icon name="mdi-linkedin" width="40" height="40" color="#fff" />
            <span class="screen-reader-text">Linked In</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.etsy.com/shop/laurasalgadoart"
            target="_blank"
            title="Etsy"
          >
            <Icon name="bxl:etsy" width="50" height="40" color="#fff" />
            <span class="screen-reader-text">Etsy</span>
          </a>
        </li>
      </ul>

      <p class="copyright">&copy; Laura Salgado {{ year }}</p>

      <p class="built-nuxt">
        I built this site in
        <img
          src="/LogosNuxt.svg"
          alt="Nuxt"
          width="55"
          height="13"
          loading="lazy"
        />
        . &#8197;
        <a
          href="https://github.com/LauraSalgado1/Developer-Portfolio-2023"
          target="_blank"
          >Pop the hood
        </a>
        &#8197;on

        <Icon
          name="octicon:logo-github-16"
          alt="github"
          color="#fff"
          width="55"
        />
        .
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.site-footer {
  padding: 32px 64px 16px;
  background: $c-black;
  color: $c-white;
  @media (max-width: 1500px) {
    padding: 32px 0 16px;
  }
  p {
    margin-top: 0;
  }
}

.footer-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 96px;
  grid-row-gap: 32px;
  @media (max-width: 1500px) {
    width: 1200px;
    max-width: 100%;
    padding: 0 64px;
    margin: 0 auto;
  }
  @media (max-width: 992px) {
    grid-column-gap: 32px;
    grid-template-columns: 1fr 405px;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding: 0 32px;
  }
  @media (max-width: 370px) {
    padding: 0 16px;
  }
}

.footer-logo {
  display: block;
  position: relative;
  left: -18px;
  @media (max-width: 450px) {
    left: -15px;
  }
}

.built-nuxt {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    justify-content: flex-start;
  }
  img {
    margin: 0 2px 0 5px;
  }
  svg {
    margin-right: -4px;
  }
}

.socials {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  @media (max-width: 750px) {
    justify-content: flex-start;
    margin: 16px 0 32px;
  }
  svg {
    transition: opacity 0.1s ease;
  }
  a {
    display: block;
    padding: 5px;

    &:hover svg {
      opacity: 0.5;
    }
  }
}

.socials svg,
.socials path {
  fill: $c-white;
}

a,
a:active,
a:focus,
a:hover,
a:visited {
  color: $c-white;
}
</style>
