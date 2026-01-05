export interface Post {
    id: number
    date: string
    date_gmt: string
    guid: Guid
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: Title
    content: Content
    excerpt: Excerpt
    author: number
    featured_media: number
    comment_status: string
    ping_status: string
    sticky: boolean
    template: string
    format: string
    meta: Meta
    categories: number[]
    class_list: string[]
    acf: Acf
    yoast_head: string
    yoast_head_json: YoastHeadJson
    _links: Links
}

export interface Guid {
    rendered: string
}

export interface Title {
    rendered: string
}

export interface Content {
    rendered: string
    protected: boolean
}

export interface Excerpt {
    rendered: string
    protected: boolean
}

export interface Meta {
    _acf_changed: boolean
    footnotes: string
}

export interface Acf {
    name: string
    title: string
    intro: string
    footnotes: string
    links: Link[]
    social_links: SocialLinks
    components_react: ComponentsReact[]
}

export interface Link {
    link_icon: string
    link_text: string
    link_url: string
    link_target: string
}

export interface Skill {
    id: string | number
    skill: string
    link: string
}

export interface Years {
    start_year: string
    end_year: string
}

export interface SocialLinks {
    linkedin: string
    github: string
    email: string
}

export interface ComponentsReact {
    acf_fc_layout: string
    section_title: string
    entries: Entry[]
}

export interface Entry {
    company?: string
    id?: string | number
    job_title?: string
    links?: Link[]
    overview?: string
    skills?: Skill[]
    years?: Years[]
    wysiwyg?: string
}

export interface YoastHeadJson {
    title: string
    robots: Robots
    og_locale: string
    og_type: string
    og_title: string
    og_url: string
    og_site_name: string
    article_published_time: string
    article_modified_time: string
    author: string
    twitter_card: string
    twitter_misc: TwitterMisc
    schema: Schema
}

export interface Robots {
    index: string
    follow: string
}

export interface TwitterMisc {
    "Written by": string
}

export interface Schema {
    "@context": string
    "@graph": Graph[]
}

export interface Graph {
    "@type": string
    "@id": string
    url?: string
    name?: string
    isPartOf?: IsPartOf
    datePublished?: string
    dateModified?: string
    author?: Author
    breadcrumb?: Breadcrumb
    inLanguage?: string
    potentialAction?: PotentialAction[]
    itemListElement?: ItemListElement[]
    description?: string
    image?: Image
    sameAs?: string[]
}

export interface IsPartOf {
    "@id": string
}

export interface Author {
    "@id": string
}

export interface Breadcrumb {
    "@id": string
}

export interface PotentialAction {
    "@type": string
    target: string
    "query-input"?: QueryInput
}

export interface QueryInput {
    "@type": string
    valueRequired: boolean
    valueName: string
}

export interface ItemListElement {
    "@type": string
    position: number
    name: string
    item?: string
}

export interface Image {
    "@type": string
    inLanguage: string
    "@id": string
    url: string
    contentUrl: string
    caption: string
}

export interface Links {
    self: Self[]
    collection: Collection[]
    about: About[]
    author: Author2[]
    replies: Reply[]
    "version-history": VersionHistory[]
    "wp:attachment": WpAttachment[]
    "wp:term": WpTerm[]
    curies: Cury[]
}

export interface Self {
    href: string
    targetHints: TargetHints
}

export interface TargetHints {
    allow: string[]
}

export interface Collection {
    href: string
}

export interface About {
    href: string
}

export interface Author2 {
    embeddable: boolean
    href: string
}

export interface Reply {
    embeddable: boolean
    href: string
}

export interface VersionHistory {
    count: number
    href: string
}

export interface WpAttachment {
    href: string
}

export interface WpTerm {
    taxonomy: string
    embeddable: boolean
    href: string
}

export interface Cury {
    name: string
    href: string
    templated: boolean
}
