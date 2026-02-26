import { desktopCreative } from '../Constants';

export class prvkCreative {
  #prvkScript;
  #prvkData;
  constructor(props) {
    //  this.#prvkScript = null;
    console.log('props', props)
    this.#prvkData = desktopCreative(props)
    this.#init();
  }
  removeScript() {
    if (this.#prvkScript) {
      window.top.document.body.removeChild(this.#prvkScript);
    }
  }

  getCreativeName() {
    return this.#prvkData.creativeName;
  }

  #init() {
    if (typeof window.vdrmDestroySkin === 'function') window.vdrmDestroySkin();
    const parentElement = document.querySelector('#prvk-creative-script-1610');
    if (parentElement && parentElement.parentNode)
      parentElement.parentNode.classList.add('prvk-creative-script-parent-1610');
    const nodes = document.querySelectorAll("script[id*='vdrm-script']");
    for (let i = 0; i < nodes.length; i++) {
      const parent = nodes[i].parentNode;
      if (parent) {
        parent.removeChild(nodes[i]);
      }
    }
    window.top.prvkOverrideSettings = {
      extraStylePath: '',
      extraStylesForDomainPath: '',
      websitesPath: '',
      injectJsPath: '',
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =  this.#prvkData.src;
    script.id = this.#prvkData.id;
    parent.__VM &&
      parent.__VM.push(function (admanager, scope) {
        window.frameElement.placement = admanager.getPlacementByWindow(self);
      });
    script.iframeElement = window.frameElement;
    //script.clickTag = '%%CLICK_URL_UNESC%%%%DEST_URL_UNESC%%';
    script.li = '%eaid!';
    script.async = true;
    script.dataset.cfasync = false;
    window.top.document.body.appendChild(script);

    this.#prvkScript = script;

    let domain = '';
    if (window.top.location.hostname.lastIndexOf('.co.') - window.top.location.hostname.length + 1 === -5) {
      domain = window.top.location.hostname.split('.').slice(-3).join('.');
    } else if (window.top.location.hostname.lastIndexOf('.com.') - window.top.location.hostname.length + 1 === -6) {
      domain = window.top.location.hostname.split('.').slice(-3).join('.');
    } else {
      domain = window.top.location.hostname.split('.').slice(-2).join('.');
    }
    const websitesPath =
      window.top.prvkOverrideSettings &&
      window.top.prvkOverrideSettings.websitesPath &&
      window.top.prvkOverrideSettings.websitesPath.length
        ? window.top.prvkOverrideSettings.websitesPath
        : 'https://cdn.prvk.io/prvk-websites/';
    window.top.prvkWebsitesJsonRequest = fetch(new Request(websitesPath + domain + '.json?v=' + Date.now()));
    const extraStylesPath =
      window.top.prvkOverrideSettings &&
      window.top.prvkOverrideSettings.extraStylePath &&
      window.top.prvkOverrideSettings.extraStylePath.length
        ? window.top.prvkOverrideSettings.extraStylePath
        : 'https://cdn.prvk.io/prvk-websites/';
    window.top.prvkExtraStylesCssJsonRequest = fetch(new Request(extraStylesPath + 'extra-styles.css?v=' + Date.now()));
    const extraStylesForDomainPath =
      window.top.prvkOverrideSettings &&
      window.top.prvkOverrideSettings.extraStylesForDomainPath &&
      window.top.prvkOverrideSettings.extraStylesForDomainPath.length
        ? window.top.prvkOverrideSettings.extraStylesForDomainPath
        : 'https://cdn.prvk.io/prvk-websites/';
    window.top.prvkExtraStylesForDomainRequest = fetch(
      new Request(extraStylesForDomainPath + domain + '.css?v=' + Date.now()),
    );
  }
}
