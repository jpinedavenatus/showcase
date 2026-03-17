import { DESKTOP_CREATIVE, MOBILE_CREATIVE } from '../Constants';
import { E_DEVICE_TYPE } from '../types';

export class prvkCreative {
  #prvkScript;
  #prvkData;
  #prvkID;
  #fullSrcPath;
  #forcedDomain;

  constructor(props) {
    //  this.#prvkScript = null;
    console.log('props', props.creativeName, props.device);

    this.#forcedDomain = 'localhost';
    this.#prvkData = this.#getCreativeData(props);
    this.#prvkID = `vdrm-script-${this.#prvkData.id}`;
    this.#fullSrcPath = `https://cdn.prvk.io/studio/${this.#prvkData.template}/${this.#prvkData.id}/creative.min.js?v=%%CACHEBUSTER%%`;

    if (props.device === E_DEVICE_TYPE.DESKTOP) {
      this.#initDesktop();
    } else {
      this.#initMobile();
    }
  }
  removeScript() {
    /*  if (this.#prvkScript) {
      window.top.document.body.removeChild(this.#prvkScript);

    } */
  }

  #getCreativeData(props) {
    const creativeList = props.device === E_DEVICE_TYPE.DESKTOP ? DESKTOP_CREATIVE : MOBILE_CREATIVE;
    return creativeList(props.creativeName);
  }

  #initDesktop() {
    if (typeof window.vdrmDestroySkin === 'function') window.vdrmDestroySkin();
    const parentElement = document.querySelector(`#prvk-creative-script-${this.#prvkData.id}`);
    if (parentElement && parentElement.parentNode)
      parentElement.parentNode.classList.add(`#prvk-creative-script-${this.#prvkData.id}`);
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
    script.src = this.#fullSrcPath;
    script.id = this.#prvkID;
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

    let domain = this.#forcedDomain;

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

  #initMobile() {
    console.log('this.#fullSrcPath:', this.#fullSrcPath);
    if (typeof window.top.vdrmDestroySkin === 'function') window.top.vdrmDestroySkin();
    var parentElement = document.querySelector(`#prvk-creative-script-${this.#prvkData.id}`);
    if (parentElement && parentElement.parentNode)
      parentElement.parentNode.classList.add(`#prvk-creative-script-${this.#prvkData.id}`);
    var nodes = document.querySelectorAll("script[id*='vdrm-script']");

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].parentNode.removeChild(nodes[i]);
    }

    window.top.prvkOverrideSettings = {
      extraStylePath: '',
      extraStylesForDomainPath: '',
      websitesPath: '',
      injectJsPath: '',
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.#fullSrcPath;
    script.id = this.#prvkID;

    parent.__VM &&
      parent.__VM.push(function (admanager, scope) {
        window.frameElement.placement = admanager.getPlacementByWindow(self);
      });

    script.iframeElement = window.frameElement;
    //script.clickTag = '%%CLICK_URL_UNESC%%%%DEST_URL_UNESC%%';
    script.li = '%eaid!';
    script.async = true;
    script.dataset.cfasync = false;
    document.body.appendChild(script);
  }
}
