import locales from "../../config/locales"

export default {
  name: "localeSlug",
  type: "object",
  title: "translatable slug",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: locales.map(lang => ({
    ...lang,
    id: lang.code.substr(0, 2),
    name: lang.code,
    title: " ",
    description: lang.label,
    hidden: lang.isDefault ? false : true,
    type: "slug",
    options: {
      source: `title.${lang.code}`,
      maxLenght: 200,
    },
    // fieldset: lang.isDefault ? null : "translations",
  })),
}
