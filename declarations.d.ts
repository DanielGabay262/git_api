declare module '*.scss' {
    const content: Record<string, string>
    export = content
}

declare module '*.jpeg' {
    const jpeg: string
    export = jpeg
}