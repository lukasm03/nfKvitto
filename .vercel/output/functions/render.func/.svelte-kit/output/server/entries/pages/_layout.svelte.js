import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const logo = "/_app/immutable/assets/loggan-063d4b47.jpg";
const LoggaHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".huvud.svelte-gmha3z{display:flex;flex-direction:column;justify-self:center;align-self:center;margin-top:4vh;margin-bottom:0px}.huvudBild.svelte-gmha3z{margin:'0 auto';align-self:center}.huvudText.svelte-gmha3z{margin:1vh;color:#001f3f;align-self:center}",
  map: null
};
const LoggaHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"huvud svelte-gmha3z"}"><img alt="${"nf logga"}"${add_attribute("src", logo, 0)} width="${"200px"}" class="${"huvudBild svelte-gmha3z"}">
	<h1 class="${"huvudText svelte-gmha3z"}">NF KVITTON</h1>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "slot.svelte-1mpd23h{margin:0;height:100%;overflow:hidden}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(LoggaHeader, "LoggaHeader").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
