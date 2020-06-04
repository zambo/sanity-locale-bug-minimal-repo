import locales from "../../config/locales"

export default {
  name: "localeString",
  type: "object",
  title: "translatable string",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: locales.map(lang => ({
    ...lang,
    id: lang.code.substr(0, 2),
    name: lang.code,
    title: " ",
    description: lang.label,
    type: "string",
    hidden: lang.isDefault ? false : true,
    // fieldset: lang.isDefault ? null : "translations",
  })),
}
