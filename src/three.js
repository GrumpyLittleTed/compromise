import nlp from './two.js'
import chunker from './3-three/chunker/plugin.js'
import misc from './3-three/misc/plugin.js'
import normalize from './3-three/normalize/plugin.js'
import nouns from './3-three/nouns/plugin.js'
import numbers from './3-three/numbers/plugin.js'
import redact from './3-three/redact/plugin.js'
import sentences from './3-three/sentences/plugin.js'
import topics from './3-three/topics/plugin.js'
import verbs from './3-three/verbs/plugin.js'

nlp.plugin(chunker) //
nlp.plugin(misc) //
nlp.plugin(normalize) //
nlp.plugin(nouns) //
nlp.plugin(numbers) //
nlp.plugin(redact) //
nlp.plugin(sentences) //
nlp.plugin(topics) //
nlp.plugin(verbs) //

export default nlp
