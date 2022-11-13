import React, { useEffect, useState } from "react";
import E from 'wangeditor'

let editor: E | null = null
function RichText() {
    const [content, setContent] = useState('');
    useEffect(() => {
        editor = new E('#editor')
        editor.config.onchange = (newHtml: any) => {
            setContent(newHtml)
          }
        /** 一定要创建 */
        editor.create()
        return () => {
            // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
            editor?.destroy()
        }
    }, [])
    return (
        <div>
            <div id="editor"></div>
            <div style={{marginTop: '20px'}} dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )
}

export default RichText