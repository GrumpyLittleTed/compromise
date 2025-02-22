//just a foolish lookup of known suffixes
const Adj = 'Adjective'
const Inf = 'Infinitive'
const Pres = 'PresentTense'
const Sing = 'Singular'
const Past = 'PastTense'
const Avb = 'Adverb'
const Plrl = 'Plural'
const Actor = 'Actor'
const Vb = 'Verb'
const Noun = 'Noun'
const Last = 'LastName'
const Modal = 'Modal'
const Place = 'Place'
const Prt = 'Participle'

export default [
  null,
  null,
  {
    //2-letter
    ea: Sing,
    ia: Noun,
    ic: Adj,
    ly: Avb,
    "'n": Vb,
    "'t": Vb,
  },
  {
    //3-letter
    oed: Past,
    ued: Past,
    xed: Past,
    ' so': Avb,
    "'ll": Modal,
    "'re": 'Copula',
    azy: Adj,
    eer: Noun,
    end: Vb,
    ped: Past,
    ffy: Adj,
    ify: Inf,
    ing: 'Gerund',
    ize: Inf,
    ibe: Inf,
    lar: Adj,
    mum: Adj,
    nes: Pres,
    nny: Adj,
    // oid: Adj,
    ous: Adj,
    que: Adj,
    rol: Sing,
    sis: Sing,
    ogy: Sing,
    oid: Sing,
    ian: Sing,
    zes: Pres,
    eld: Past,
    ken: Prt,//awoken
    ven: Prt,//woven
    ten: Prt,//brighten
    ect: Inf,
    ict: Inf,
    // ide: Inf,
    ign: Inf,
    ful: Adj,
    bal: Adj,
  },
  {
    //4-letter
    amed: Past,
    aped: Past,
    ched: Past,
    lked: Past,
    rked: Past,
    reed: Past,
    nded: Past,
    mned: Adj,
    cted: Past,
    dged: Past,
    ield: Sing,
    akis: Last,
    cede: Inf,
    chuk: Last,
    czyk: Last,
    ects: Pres,
    ends: Vb,
    enko: Last,
    ette: Sing,
    wner: Sing,//owner
    fies: Pres,
    fore: Avb,
    gate: Inf,
    gone: Adj,
    ices: Plrl,
    ints: Plrl,
    ruct: Inf,
    ines: Plrl,
    ions: Plrl,
    less: Adj,
    llen: Adj,
    made: Adj,
    nsen: Last,
    oses: Pres,
    ould: Modal,
    some: Adj,
    sson: Last,
    // tage: Inf,
    tion: Sing,
    tage: Noun,
    ique: Sing,
    tive: Adj,
    tors: Noun,
    vice: Sing,
    lier: Sing,
    fier: Sing,
    wned: Past,
    gent: Sing,
    tist: Sing,
    pist: Sing,
    rist: Sing,
    mist: Sing,
    yist: Sing,
    vist: Sing,
    lite: Sing,
    site: Sing,
    rite: Sing,
    mite: Sing,
    bite: Sing,
    mate: Sing,
    date: Sing,
    ndal: Sing,
    vent: Sing,
    uist: Sing,
    gist: Sing,
    note: Sing,
    cide: Sing,//homicide
    wide: Adj,//nationwide
    // side: Adj,//alongside
    vide: Inf,//provide
    ract: Inf,
    duce: Inf,
    pose: Inf,
    eive: Inf,
    lyze: Inf,
    lyse: Inf,
    iant: Adj,
    nary: Adj,
  },
  {
    //5-letter
    elist: Sing,
    holic: Sing,
    phite: Sing,
    tized: Past,
    urned: Past,
    eased: Past,
    ances: Plrl,
    bound: Adj,
    ettes: Plrl,
    fully: Avb,
    ishes: Pres,
    ities: Plrl,
    marek: Last,
    nssen: Last,
    ology: Noun,
    osome: Sing,
    tment: Sing,
    ports: Plrl,
    rough: Adj,
    tches: Pres,
    tieth: 'Ordinal',
    tures: Plrl,
    wards: Avb,
    where: Avb,
    archy: Noun,
    pathy: Noun,
    opoly: Noun,
    embly: Noun,
    phate: Noun,
    ndent: Sing,
    scent: Sing,
    onist: Sing,
    anist: Sing,
    alist: Sing,
    olist: Sing,
    icist: Sing,
    ounce: Inf,
    iable: Adj,
    borne: Adj,
    gnant: Adj,
    inant: Adj,
    igent: Adj,
    atory: Adj,
    // ctory: Adj,
    rient: Sing,
    dient: Sing,
  },
  {
    //6-letter
    auskas: Last,
    parent: Sing,
    cedent: Sing,
    ionary: Sing,
    cklist: Sing,
    keeper: Actor,
    logist: Actor,
    teenth: 'Value',
  },
  {
    //7-letter
    opoulos: Last,
    borough: Place,
    sdottir: Last, //swedish female
  },
]
