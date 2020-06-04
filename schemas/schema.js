// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document imports
import page from "./documents/page"

// Schema Objects
import hero from "./objects/hero"
import pageBuilder from "./objects/pageBuilder"

// Schema Locale Objects
import localeString from "./locale/localeString"
import localeSlug from "./locale/localeSlug"
import localePageBuilder from "./locale/localePageBuilder"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    hero,
    localePageBuilder,
    localeSlug,
    localeString,
    page,
    pageBuilder,
  ])
})
