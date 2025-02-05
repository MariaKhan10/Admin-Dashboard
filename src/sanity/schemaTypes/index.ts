import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods],
}
