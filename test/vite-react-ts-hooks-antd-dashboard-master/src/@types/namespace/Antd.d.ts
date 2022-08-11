declare namespace Antd {
    export interface Menu {
        key: string
        icon: React.ReactElement
        label: string
        title?: string
        children?: Menu[]
    }
}
