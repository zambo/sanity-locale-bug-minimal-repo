
export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug",
    },
    {
      name: "pageContent",
      title: "Page Content",
      type: "localePageBuilder",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
    prepare({ title, parent }) {
      return {
        title,
      }
    },
  },
}
