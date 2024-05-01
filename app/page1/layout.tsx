//각 페이지 별로 footer, navbar,button 등 레이아웃을 따로 설정 가능
import Footer2 from "app/components/footer2"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer2/>
          {/* 현재 예시는 'Page1' 레이아웃 내에 footer를 추가한 모습 */}
        </main>
  )
}
