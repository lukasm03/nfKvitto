import { c as create_ssr_component, f as each, b as add_attribute, e as escape, d as subscribe, v as validate_component } from "../../../chunks/index.js";
import { L as Login } from "../../../chunks/Login.js";
import { c as currentUser } from "../../../chunks/pocketbase.js";
const Kvitton_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spanStilen.svelte-nlbsc4{display:flex;justify-content:center;color:#001f3f}.excelKnapp.svelte-nlbsc4{justify-content:center;color:#001f3f}.filterStilen.svelte-nlbsc4{margin-top:0.5vh;display:flex;justify-content:center;color:#001f3f}.kvittoHuvud.svelte-nlbsc4{display:flex;flex-direction:column;width:400px;margin:0 auto}.kvittoStil.svelte-nlbsc4{display:flex;align-items:center;margin-bottom:1vh;max-width:400px;color:#001f3f}.kvittoText.svelte-nlbsc4{display:flex;flex-direction:column;width:fit-content;color:#001f3f}.kvittoBild.svelte-nlbsc4{margin:0.5vw}.kvittoDetaljer.svelte-nlbsc4{margin:0vw;color:#001f3f}",
  map: null
};
const Kvitton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let kvitton = [];
  $$result.css.add(css);
  return `<span class="${"spanStilen svelte-nlbsc4"}"><button class="${"excelKnapp svelte-nlbsc4"}">Exportera till excel </button></span>
<div class="${"filterStilen svelte-nlbsc4"}"><button name="${"visaalla"}" value="${"alla"}">Visa alla </button>
	<button name="${"visaintefixade"}" value="${"intefixade"}">Visa inte fixade
	</button>
	<button name="${"visaintäkter"}" value="${"visaintäkter"}">Visa intäkter
	</button>
	<button name="${"visautgifter"}" value="${"visautgifter"}">Visa avgifter
	</button></div>
<div class="${"kvittoHuvud svelte-nlbsc4"}">${each(kvitton, (kvitto) => {
    return `${`<div class="${"kvittoStil svelte-nlbsc4"}"><div class="${"kvittoBild svelte-nlbsc4"}"><a${add_attribute("href", `/admin/${kvitto.id}`, 0)}><img${add_attribute("src", `https://nfdatabas.fly.dev/api/files/kvitton/${kvitto.id}/${kvitto.bild}?thumb=100x100`, 0)}${add_attribute("alt", "bild på kvittot", 0)}${add_attribute("width", 80, 0)}${add_attribute("height", 80, 0)}${add_attribute("loading", "lazy", 0)}>
					</a></div>
				<div class="${"kvittoText svelte-nlbsc4"}"><p class="${"kvittoDetaljer svelte-nlbsc4"}">Namn på ${escape(kvitto.typavkop.toLocaleLowerCase())}en: ${escape(kvitto.vara)}</p>
					<p class="${"kvittoDetaljer svelte-nlbsc4"}">Summa på ${escape(kvitto.typavkop.toLocaleLowerCase())}en: ${escape(kvitto.pris)}kr
					</p>
					<p class="${"kvittoDetaljer svelte-nlbsc4"}">Kategori på ${escape(kvitto.typavkop.toLocaleLowerCase())}en: ${escape(kvitto.kategori)}</p>
					<p class="${"kvittoDetaljer svelte-nlbsc4"}">Datum ${escape(kvitto.typavkop.toLocaleLowerCase())}en skedde: ${escape(kvitto.datum.slice(0, 10))}</p>
					<p class="${"kvittoDetaljer svelte-nlbsc4"}">Swish-nummer: ${escape(kvitto.swish)}</p></div>
			</div>`}`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_currentUser();
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}
${$$result.head += `<!-- HEAD_svelte-mqn2rx_START -->${$$result.title = `<title>Admin för NF-Kvitton</title>`, ""}<html lang="${"se"}"></html><!-- HEAD_svelte-mqn2rx_END -->`, ""}
${$currentUser ? `${validate_component(Kvitton, "Kvitton").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
