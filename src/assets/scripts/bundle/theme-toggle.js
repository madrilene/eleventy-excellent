(() => {
  var a = "theme-preference";
  var l = {
    dark: "{{ meta.themeLight }}",
    light: "{{ meta.themeDark }}"
  };
  var t = { value: d() };

  window.onload = () => {
    let toggleButton = document.querySelector("#darkmode-toggle");

    if (toggleButton) {
      c();
      o();
      toggleButton.addEventListener("click", () => n());
      toggleButton.setAttribute("aria-pressed", t.value === "dark");
    }
  };

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: e }) => {
    t.value = e ? "dark" : "light";
    i();
    o();
  });

  function n() {
    t.value = t.value === "dark" ? "light" : "dark";
    document.querySelector(".darkmode-toggle").setAttribute("aria-pressed", t.value === "dark");
    i();
    o();
  }

  function d() {
    return localStorage.getItem(a)
      ? localStorage.getItem(a)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function i() {
    localStorage.setItem(a, t.value);
    c();
    o();
  }

  function c() {
    document.firstElementChild.setAttribute("data-theme", t.value);
  }

  function o() {
    let e = document.querySelector('meta[name="theme-color"]');
    let r = t.value === "dark" ? l.dark : l.light;
    e.setAttribute("content", r);
  }

  c();
})();