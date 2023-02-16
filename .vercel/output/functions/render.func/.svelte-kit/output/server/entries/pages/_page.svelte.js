import { c as create_ssr_component, e as escape, b as add_attribute, d as subscribe, v as validate_component } from "../../chunks/index.js";
import { L as Login } from "../../chunks/Login.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
const SkapaNytt_svelte_svelte_type_style_lang = "";
const css = {
  code: "input[type='date'].svelte-4h98jd,input[type='number'].svelte-4h98jd,input[type='tel'].svelte-4h98jd,input[type='text'].svelte-4h98jd,select.svelte-4h98jd:focus{font-size:16px}button[type='submit'].svelte-4h98jd{margin-top:2vh;font-weight:bold}.huvudContainer.svelte-4h98jd{display:flex;justify-content:center;color:#001f3f}.knapparStilen.svelte-4h98jd{display:flex;justify-content:center;color:#001f3f}.formStilen.svelte-4h98jd{display:flex;flex-direction:column;justify-content:center;max-width:62vw;color:#001f3f}.selectStilen.svelte-4h98jd{min-width:120px;max-width:6vw;color:#001f3f}label.svelte-4h98jd{margin-top:1vh;width:fit-content;color:#001f3f}button.svelte-4h98jd{width:fit-content;color:#001f3f}input.svelte-4h98jd{width:auto}",
  map: null
};
const SkapaNytt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vara;
  let pris;
  let datum;
  let swish;
  let typavkop = "Avgift";
  new FormData();
  $$result.css.add(css);
  return `<div class="${"knapparStilen svelte-4h98jd"}"><button name="${"typavkop"}" class="${"svelte-4h98jd"}">Avgifter </button>
	<button name="${"typavkop"}" class="${"svelte-4h98jd"}">Intäkter </button></div>
<div class="${"huvudContainer svelte-4h98jd"}"><form class="${"formStilen svelte-4h98jd"}"><label for="${"Kategori"}" class="${"svelte-4h98jd"}">Kategori på ${escape(typavkop.toLocaleLowerCase())}en:</label>
		<select class="${"selectStilen svelte-4h98jd"}" id="${"Kategori"}"><option value="${"Laborationer"}">Laborationer</option><option value="${"Medlemsavgifter"}">Medlemsavgifter</option><option value="${"Kök&fester"}">Kök &amp; fester</option><option value="${"Försäljning"}">Försäljning</option><option value="${"NF-artiklar"}">NF-artiklar</option><option value="${"Övrigt"}">Övrigt</option></select>
		<label for="${"Vara"}" class="${"svelte-4h98jd"}">Vara:</label>
		<input type="${"text"}" id="${"Vara"}" class="${"svelte-4h98jd"}"${add_attribute("value", vara, 0)}>
		<label for="${"Pris"}" class="${"svelte-4h98jd"}">Pris:</label>
		<input type="${"number"}" id="${"Pris"}" class="${"svelte-4h98jd"}"${add_attribute("value", pris, 0)}>
		<label for="${"Bild"}" class="${"svelte-4h98jd"}">Bild:</label>
		<input type="${"file"}"${add_attribute("accept", "image/*", 0)} id="${"Bild"}" class="${"svelte-4h98jd"}">
		<label for="${"Datum"}" class="${"svelte-4h98jd"}">Datum:</label>
		<input type="${"date"}"${add_attribute("placeholder", Date.now().toString(), 0)} id="${"Datum"}" class="${"svelte-4h98jd"}"${add_attribute("value", datum, 0)}>
		<label for="${"Swish"}" class="${"svelte-4h98jd"}">Swish-nummer:</label>
		<input type="${"tel"}" id="${"Swish"}" class="${"svelte-4h98jd"}"${add_attribute("value", swish, 0)}>
		<button type="${"submit"}" class="${"svelte-4h98jd"}">Skicka in kvitto</button>
		<p>${escape("")}</p></form>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_currentUser();
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}

${$currentUser ? `${validate_component(SkapaNytt, "SkapaNytt").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
