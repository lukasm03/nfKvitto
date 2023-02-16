import { c as create_ssr_component, d as subscribe, b as add_attribute } from "./index.js";
import { c as currentUser } from "./pocketbase.js";
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: "input[type='password'].svelte-1a7uifw,input[type='text'].svelte-1a7uifw{font-size:16px}.formStilen.svelte-1a7uifw{display:flex;flex-direction:column;justify-content:center;max-width:62vw}.login.svelte-1a7uifw{display:flex;justify-content:center}.buttonStilen.svelte-1a7uifw{width:fit-content;margin-top:2vh}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let password;
  let username;
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  return `${$currentUser === null ? `<div class="${"login svelte-1a7uifw"}"><form class="${"formStilen svelte-1a7uifw"}"><label for="${"username"}">Användarnamn:</label>
			<input id="${"username"}" type="${"text"}" class="${"svelte-1a7uifw"}"${add_attribute("value", username, 0)}>
			<label for="${"password"}">Lösenord:</label>
			<input id="${"password"}" type="${"password"}" class="${"svelte-1a7uifw"}"${add_attribute("value", password, 0)}>
			<button type="${"submit"}" class="${"buttonStilen svelte-1a7uifw"}">Logga in</button></form></div>` : ``}`;
});
export {
  Login as L
};
