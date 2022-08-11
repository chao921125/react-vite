declare namespace NSP {
  export interface Menu {
    id: number;
    name: string;
    level: number;
    parent_id: number;
    ancestors: string;
    path: string;
    hidden: number;
    type: string;
    redirect: string;
    component: string;
    title: string;
    description: string;
    icon: string;
    keep_alive: number;
    disable: number;
    sort: number;
    locale: string;
    created_at: string;
    updated_at: string;
    tenant_id: string;
    children?: Menu[];
    [key: string]: any;
  }
}
