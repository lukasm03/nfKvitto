import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../chunks/index.js";
import "../../../../chunks/pocketbase.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".huvudStilen.svelte-43z2mb{display:flex;flex-direction:column;justify-content:center}.knappStilen.svelte-43z2mb{align-self:center;text-align:center;margin-bottom:3vh}.divByt.svelte-43z2mb{display:flex;flex-direction:row;justify-content:center}.pekare.svelte-43z2mb{cursor:pointer}.hide.svelte-43z2mb{display:none}.formStilen.svelte-43z2mb{display:flex;flex-direction:column;justify-content:center;margin-left:1vw}.skickaKnapp.svelte-43z2mb{width:fit-content;margin-top:3vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let kvitto = {};
  let bild;
  new FormData();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-87fs03_START -->${$$result.title = `<title>Ändra kvitto: ${escape(kvitto.vara)}</title>`, ""}<html lang="${"se"}"></html><!-- HEAD_svelte-87fs03_END -->`, ""}
${`<div class="${"huvudStilen svelte-43z2mb"}"><div class="${"knappStilen svelte-43z2mb"}"><button>Tillbaka till admin</button>
			<button>Ta bort kvitto</button>
			<button>Visa QR-kod</button></div>
		<div class="${"divByt svelte-43z2mb"}"><div><label class="${"pekare svelte-43z2mb"}"><img${add_attribute("src", bild, 0)}${add_attribute("alt", "bild på kvittot", 0)}${add_attribute("width", 120, 0)}${add_attribute("height", 150, 0)}${add_attribute("loading", "lazy", 0)}>
					<input type="${"file"}" name="${"Bild"}" class="${"hide svelte-43z2mb"}"></label></div>
			<form class="${"formStilen svelte-43z2mb"}"><label>Namn på köpet:
					<input type="${"text"}" name="${"Vara"}"${add_attribute("value", kvitto.vara, 0)}></label>
				<label>Pris på köpet:
					<input type="${"number"}" name="${"Pris"}"${add_attribute("value", kvitto.pris, 0)}></label>
				<label>Kategori på köpet:
					<select name="${"Kategori"}"><option value="${"Laborationer"}">Laborationer</option><option value="${"Medlemsavgifter"}">Medlemsavgifter</option><option value="${"Kök&fester"}">Kök &amp; fester</option><option value="${"Försäljning"}">Försäljning</option><option value="${"NF-artiklar"}">NF-artiklar</option><option value="${"Övrigt"}">Övrigt</option></select></label>
				<label>Datum köpet skedde:
					<input type="${"date"}" name="${"Datum"}"${add_attribute("value", kvitto.datum, 0)}></label>
				<label>Swish-nummer:
					<input type="${"tel"}" name="${"Swish"}"${add_attribute("value", kvitto.swish, 0)}></label>
				<label>Fixad:
					<input type="${"checkbox"}" name="${"Fixad"}"${add_attribute("checked", kvitto.fixad, 1)}></label>
				<label>Typ av köp:
					<select name="${"Typavköp"}"><option value="${"Avgift"}">Avgift</option><option value="${"Intäkt"}">Intäkt</option></select></label>
				<button class="${"skickaKnapp svelte-43z2mb"}" type="${"submit"}">Spara ändringar</button></form></div></div>`}`;
});
export {
  Page as default
};
