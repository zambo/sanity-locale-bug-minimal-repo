export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "kicker",
      title: "Kicker",
      description: "Small text that comes before the heading.",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      description: "Descriptive title for the Hero section.",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      description: "Descriptive text. Try to keep it short, between two paragraphs.",
      type: "text",
    },
  ],
}
