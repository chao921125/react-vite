import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from '@/App'
import '@/styles/index.less'
import 'default-passive-events' // Chrome51 版本以后，Chrome 增加了新的事件捕获机制－Passive Event Listeners；
// import { ErrorBoundary } from 'react-error-boundary'
import SuspendFallbackLoading from '@/components/loading/suspend-fallback-loading'
import { QueryClient, QueryClientProvider } from 'react-query'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: false
    }
  }
})

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<SuspendFallbackLoading/>}>
          <App/>
          {/* ↓ 可视化开发工具 */}
          {/* <ReactQueryDevtools /> */}
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
)
