import Image from 'next/image';
export default function SchoolPartnerships() {
  return (
    <div className="!relative">
      <Image
        src="/images/school-partnerships-hero.png"
        alt=""
        className="!w-full"
       fill sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  )
}
