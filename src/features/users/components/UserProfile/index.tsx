import { useState } from 'react'
import { UserInfo } from './components/UserInfo'
import { UserOrders } from './components/UserOrders'

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState<1 | 2>(1)
  const selectedTabStyle = 'border-gray-400'
  return (
    <section className="lg:w-[60%] mx-auto flex flex-col p-4">
      <div className="flex items-center gap-2 justify-start border-b-2 border-b-gray-400">
        <span
          className={`text-lg text-custom-slate p-1 rounded-t-md border-x-2 border-t-2 border-transparent cursor-pointer font-semibold ${
            selectedTab === 1 && selectedTabStyle
          }`}
          onClick={() => setSelectedTab(1)}
        >
          مشخصات
        </span>
        <span
          className={`text-lg text-custom-slate p-1 rounded-t-md border-x-2 border-t-2 border-transparent cursor-pointer font-semibold ${
            selectedTab === 2 && selectedTabStyle
          }`}
          onClick={() => setSelectedTab(2)}
        >
          سفارشات
        </span>
      </div>
      {selectedTab === 1 ? <UserInfo /> : <UserOrders />}
    </section>
  )
}

export { UserProfile }
