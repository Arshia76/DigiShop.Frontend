import { Button, Input } from '@/components/ui'

const UserInfo = () => {
  return (
    <section className="flex border border-gray-300 p-4 rounded-lg">
      <div className="flex flex-col">
        <h5>ویرایش اطلاعات</h5>
        <Input />
        <Input />
        <Input />
        <Button colour={'primary'}>ویرایش</Button>
      </div>
    </section>
  )
}

export { UserInfo }
